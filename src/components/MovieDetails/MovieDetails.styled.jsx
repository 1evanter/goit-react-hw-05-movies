import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
margin-top: 30px;
`

const StyledLink = styled(Link)`
display: flex;
width: 120px;
padding: 6px 14px;
color: #DDE6ED;
background-color: #526D82;
border: 2px solid #526D82;
border-radius: 4px;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
    color: #27374D;
    background-color: #DDE6ED;
}
`
const Image = styled.img`
 width: 260px;
  height: auto;
  margin-right: 50px;
`

const DescrBox = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

const Title = styled.h2`
font-size: 28px;
`

const List = styled.ul`
list-style: square;
display: flex;
flex-direction: column;
gap: 5px;
`

export { StyledLink, Wrapper, Image, DescrBox, Title, List };