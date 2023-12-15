import styled from "styled-components";

const MenuItem = (props) => {
    return (
        <li>
            <a href={props.link}>{props.text}</a>
        </li>
    )
}

export default MenuItem;