import styled from "styled-components";
import FavoriteTeas from "./FavoriteTeas";

const FavoriteTeasContainer = () => {
    return (
        <Wrapper className="col favTeasCol">
            <div className="carousel">
                <div className="wrapper">
                    <FavoriteTeas />
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
position: relative;
.wrapper {
    position: sticky;
    top: 0;
}
`;


export default FavoriteTeasContainer;