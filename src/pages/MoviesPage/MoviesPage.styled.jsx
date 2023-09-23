import styled from "styled-components";

const Form = styled.form`
display: flex;
gap: 15px;
margin-bottom: 30px;
`
const Input = styled.input`
width: 250px;
padding: 12px 6px;

 border: 2px solid #9DB2BF;
border-radius: 4px;
outline: none;
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus{
    border: 2px solid #27374D;
}
`
const Button = styled.button`
width: 90px;
 border: 2px solid #9DB2BF;
border-radius: 4px;
background-color: #fff;
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus{
    border: 2px solid #27374D;
}
`
export { Form, Input, Button };