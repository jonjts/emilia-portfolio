import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: #FEF6F9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 666px;
  padding-top: 36px;

   label {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    /* or 27px */

    text-align: center;
    letter-spacing: 0.5px;

    color: #000000;

    @media (max-width: 575.98px) { 
        font-size: 16px;
        padding: 24px 8px 49px 24px;
    }
  
  
    @media (min-width: 767.98px) { 
        font-size: 16px;
        padding: 24px 8px 49px 24px;
    }


    @media (min-width: 991.98px) { 
        font-size: 18px;
        padding: 20px 48px 31px 48px;
    }


    @media (min-width: 1199.98px) {  
        font-size: 18px;
        padding: 20px 48px 31px 48px;
    }

  }

`;


export const Footer = styled.div`
    position: absolute;
    width: 50%;
    height: 8px;
    bottom: 0;

    /* Primary/Pink-Light */

    background: #F7B5CC;
`