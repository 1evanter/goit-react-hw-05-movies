import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
display: flex;
gap: 25px;
justify-content: start;
 align-items: center;
 margin-top: 30px;
 margin-bottom: 20px;
`
const StyledLink = styled(NavLink)`
font-weight: 500;
font-size: 20px;

&:visited {
    color: inherit;
}

&.active {
    color: #526D82;
}
`
export { List, StyledLink };