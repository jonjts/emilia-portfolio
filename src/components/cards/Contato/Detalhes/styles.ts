import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;

    @media (max-width: 575.98px) { 
        padding-left: 0px;
    }


    h5 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        /* identical to box height, or 27px */

        letter-spacing: 0.5px;

        /* Black */

        color: #1E0D16;
    }
`;

export const Descricoes = styled.div`
    display: flex;
    flex-direction: column;
`

export const Contato = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    label {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        letter-spacing: 0.5px;

        /* Black */

        color: #1E0D16;
    }

    .circle{
        background: #F7B5CC;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin-right: 16px;
        margin-bottom: 5px;
    }
`
