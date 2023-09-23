import styled from "styled-components";

const List = styled.ul`
display: grid;
  max-width: calc(100vw - 64px);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`
const Item = styled.li`
background-color: #fff;
 border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`
const Text = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 15px 5px;
`
const Image = styled.img`
height: 270px;
`
export { List, Item, Text, Image };