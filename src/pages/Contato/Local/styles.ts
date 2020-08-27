import styled from 'styled-components';
import { Button } from 'reactstrap'

export const Card = styled.div`
    border-radius: 10px;
    position: relative;
    padding-bottom: 30px
`;

export const MapContainer = styled.div`
    border-radius: 10px solid;

`

export const MapDescription = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    align-items: center;
    background: #FFFFFF;
    border-radius: 10px;
    margin-top: -20px;
    flex-direction: column;
    filter: drop-shadow(-10px -10px 20px rgba(170, 170, 170, 0.1));
    

.subtitle{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    letter-spacing: 0.5px;

    /* Black */

    color: #1E0D16;
}

`

export const MapPosition = styled.div`
    display: flex;  
    flex-direction: row;
    padding: 8px 0 8px 0;

    label {
        max-width: 300px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 150%;
        /* or 18px */

        text-align: center;
        letter-spacing: 0.4px;

        /* Black */

        color: #1E0D16;
    }

`

export const ContatoButton = styled(Button)`
    background: #FEF6F9 !important;
    background-color: #FEF6F9 !important;
    border-color: #FEF6F9 !important;
    border-radius: 50px;
    padding: 8px 24px 8px 24px;
    margin: 0 32px 17px 32px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    letter-spacing: 0.5px;

    /* Primary/Pink */

    color: #ED578A;

    :hover{
        background-color: #FEF6F9;
        border-color: #FEF6F9;
        color: #ED578A;
    }
`;

export const BackgroundMap = styled.img`
    position: absolute;
    left: -30px;
    bottom: 0;
    height: 100%;
    z-index: -1;

    @media (max-width: 575.98px) { 
        display: none;
    }
`