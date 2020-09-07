import styled from 'styled-components';

export const Assinatura = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */

    text-align: center;
    letter-spacing: 0.5px;

    /* Primary/Pink-Light */

    color: #C982A7;
`

export const Hr = styled.hr`
    background-color: #C982A7;
    width: 234px;

    @media (max-width: 575.98px) { 
        width: 180px;
    }
`

export const Footer = styled.div`
    padding: 24px 11px 0 11px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
  

    @media (max-width: 575.98px) { 
        width: 256px;
        height: 371px;

        img {
            width: 70px;
            height: 48px;
        }
    }


    @media (min-width: 767.98px) { 
        width: 256px;
        height: 371px;
    }


    @media (min-width: 991.98px) { 
        width: 436px;
        height: 496px;
     }


    @media (min-width: 1199.98px) {  
        width: 436px;
        height: 496px;
    }
`;

export const Content = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 150%;
    padding-top: 55px;
    /* or 36px */

    text-align: center;

    /* Black */

    color: #1E0D16;

    @media (max-width: 575.98px) { 
        font-size: 16px;
        padding-top: 24px;
    }
`