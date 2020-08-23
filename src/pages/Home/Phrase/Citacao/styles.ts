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

    color: #F7B5CC;
`

export const Hr = styled.hr`
    background-color: #F7B5CC;
`

export const Footer = styled.div`
    padding: 0 11px 0 11px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
  

    @media (max-width: 575.98px) { 
        width: 256px;
        height: 371px;
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
    padding-bottom: 48px;
    /* or 36px */

    text-align: center;

    /* Black */

    color: #1E0D16;
`