import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0px 20px;
  padding-bottom: 30px;
  background-color: fff;
`;

const Header = styled.header`
  padding: 16px 0;
  margin-bottom: 30px;
  border-bottom: 2px solid #526D82;
  `

const List = styled.ul`
display: flex;
gap: 15px;
justify-content: start;
 align-items: center;
`
const StyledLink = styled(NavLink)`
font-weight: 500;
font-size: 16px;

&:visited {
    color: inherit;
}

&.active {
    color: #526D82;
}
`

export { Header, Container, List, StyledLink };