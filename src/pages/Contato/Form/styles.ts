import styled from 'styled-components';
import { Button } from 'reactstrap'

export const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  flex-direction: column;

  h3 {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    /* identical to box height, or 112% */

    letter-spacing: 0.15px;
    color: #ED578A;
  }

  @media (max-width: 575.98px) { 
        width: auto;
    }
`;

export const InputsContainer = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;

    label{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 150%;
        /* identical to box height, or 18px */

        letter-spacing: 0.4px;

        /* Black */

        color: #1E0D16;
    }

    textarea, input {
        border: 1px solid #E8C9D9;
        box-sizing: border-box;
        border-radius: 10px;

        :focus{
            background: #FFFFFF;
            /* Primary/Pink */

            border: 1px solid #ED578A;
            box-sizing: border-box;
            box-shadow: 0px 0px 10px rgba(237, 87, 138, 0.15);
            border-radius: 10px;
        }
        

        @media (max-width: 575.98px) { 
            width: 100%;
        }

        @media (min-width: 580.98px) { 
            max-width: 387px;
        }

    }
`


export const SubmitButton = styled(Button)`
    background: #ED578A !important;
    background-color: #ED578A !important;
    border-color: #ED578A !important;
    border-radius: 50px;
    padding: 8px 24px 8px 24px;
    margin-top: 40px;

    :hover{
        background-color: #9D1140 !important;
        border-color: #9D1140 !important;
    }
`;
