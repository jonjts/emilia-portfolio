import styled from 'styled-components';
import { Button } from 'reactstrap'

export const Container = styled.div`
  width: 66%;
  h3 {
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.15px;
    color: #ED578A;
  }
`;

export const InputsContainer = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;

    label{
        font-size: 12px;
    }

    textarea, input {
        border: 1px solid #E8C9D9;
        box-sizing: border-box;
        border-radius: 10px;
        width: 100%;
    }
`


export const SubmitButton = styled(Button)`
    background: #ED578A !important;
    background-color: #ED578A !important;
    border-color: #ED578A !important;
    border-radius: 50px;
    padding: 8px 24px 8px 24px;

    :hover{
        background-color: #9D1140;
        border-color: #9D1140;
    }
`;
