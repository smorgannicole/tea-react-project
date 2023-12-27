import styled from "styled-components";
import FavoriteTeas from "./FavoriteTeas";

const FavoriteTeasContainer = () => {
    return (
        <Wrapper className="col favTeasCol">
            <WrapperSticky>
                <div className="carousel">
                    <FavoriteTeas />
                </div>
            </WrapperSticky>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    position: relative;
`;

const WrapperSticky = styled.div`
    position: sticky;
    top: 0;
`;

export default FavoriteTeasContainer;