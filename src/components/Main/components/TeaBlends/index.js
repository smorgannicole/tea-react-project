import styled from "styled-components";

const TeaBlends = (props) => {
    const { name, origin, tasteDescription, description, caffeine } = props.tea;

    return (
        <BlendsContainer>
            <h3>{name}</h3>
            <p>{origin}</p>
            <p>{description}</p>
            <p>{tasteDescription}</p>
            <p>{caffeine}</p>
        </BlendsContainer>
    );
}

const BlendsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default TeaBlends;