import headerLogo from "../Main/components/images/misty-tea-logo.png"
import { useState, useEffect } from "react";
import TeaBlends from "./components/TeaBlends";
import LeftSideMain from "./components/LeftSideMain";
import CreateYourOwn from "./components/CreateYourOwn";
import { v4 as uuidv4 } from 'uuid';
import { FaTimes } from 'react-icons/fa';
import styled from "styled-components";

const Main = () => {

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const getTeas = async () => {
        const url = `https://boonakitea.cyclic.app/api/all`;
        const options = {
            method: "GET",
            redirect: "follow",
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const [teas, setTeas] = useState(() => {
        const storedTeas = localStorage.getItem(`teasData`);
        return storedTeas ? JSON.parse(storedTeas) : [];
    });

    const addNewTea = (newTea) => {
        setTeas([newTea, ...teas]);
    };
    
    useEffect(() => {
        localStorage.setItem(`teasData`, JSON.stringify(teas));
    }, [teas]);

    const deleteTea = (teaToDelete) => {
        const updatedTeas = teas.filter(tea => tea !== teaToDelete);
        setTeas(updatedTeas);
        localStorage.setItem(`teasData`, JSON.stringify(updatedTeas));
    }

    return (
        <header className="col-8 px-5">
            <div className="row">
                <div className="col-3">
                    <img className="header-logo" src={headerLogo} onClick={() => toggleTab(0)} />
                </div>
                <nav className="col d-flex align-items-end justify-content-end block-tabs gap-4">
                    <div className={toggleState === 0 ? "tab active-tab" : "tab"} onClick={() => toggleTab(0)}>Home</div>
                    <div className={toggleState === 1 ? "tab active-tab" : "tab"} onClick={() => toggleTab(1)}>Tea Blends</div>
                    <div className={toggleState === 2 ? "tab active-tab" : "tab"} onClick={() => toggleTab(2)}>Create Your Own</div>
                    <div className={toggleState === 3 ? "tab active-tab" : "tab"} onClick={() => toggleTab(3)}>About Us</div>
                </nav>
            </div>
            <div className="content-tabs">
                <div className={toggleState === 0 ? "content active-content" : "content"}>
                    <LeftSideMain />
                </div>
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <h2><span className="d-flex justify-content-center mt-3">Tea Blends</span></h2>
                    <hr></hr>
                    <div className="row row-gap-4 gap-4 mt-5">
                    {teas.length === 0 ? <h1>Loading...</h1> : teas.map((tea) => (
                        <BlendWrapper className="col-3 d-flex flex-column flex-grow-1" key={uuidv4()}>
                            <div className="d-flex justify-content-end">
                                <FaTimes style={{ color: `#A7C0A0`, cursor: `pointer` }} onClick={() => deleteTea(tea)} />
                            </div>
                            <TeaBlends tea={tea} className="col" />
                        </BlendWrapper>
                    ))}
                    </div>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <h2>Create Your Own</h2>
                    <CreateYourOwn addTea={addNewTea} />
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <h2>About Us</h2>
                    <p>lorem</p>
                </div>
            </div>
        </header>
    );
}

const BlendWrapper = styled.div`
    display: flex;
    border: 1px solid #A7C0A0;
    border-radius: 10px;
    padding: 10px;
    height: 200px;
    overflow: scroll;
`;


export default Main;