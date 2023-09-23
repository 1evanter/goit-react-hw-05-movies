import styled from "styled-components";

const List = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
`
const Text = styled.p`
font-size: 18px;
font-weight: 500;
margin-bottom: 5px;
`
const TextContent = styled.p`
padding-right: 15px;
padding-left: 15px;
font-style: italic;
`
export { List, Text, TextContent };