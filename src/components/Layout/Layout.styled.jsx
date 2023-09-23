import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
`;

const Header = styled.header`
padding-top: 15px;
padding-bottom: 15px;
`
const List = styled.ul`
display: flex;
gap: 15px;
justify-content: start;
`
const StyledLink = styled(NavLink)`
font-weight: 500;
font-size: 16px;

&.active {
    color: green;
}
`

export { Header, Container, List, StyledLink };