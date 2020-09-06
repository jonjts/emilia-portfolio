import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 800px;
`;

export const Lista = styled.div`
  margin: 100px 16px 0px 16px;
  padding: 0 0 493px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation-duration: 2s;

  h1 {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: 900;
    font-size: 68px;
    line-height: 120%;
    /* identical to box height, or 82px */

    letter-spacing: 0.15px;

    /* Primary/Pink */

    color: #ED578A;

    @media (max-width: 575.98px) { 
        font-size: 32px;
    }
  }

  @media (max-width: 575.98px) { 
        margin: 85px 24px 0 24px;
        padding: 0 0 193px 0;
    }
`

export const LineCurve = styled.img`
    position: absolute;
    left: 0;
    z-index: -1;
    width: 80%;
    animation-duration: 2s;


    @media (max-width: 575.98px) { 
        top: 3%;
    }

    @media (min-width: 580.98px) { 
        top: 8%;
    }
    

    @media (min-width: 991.98px) { 
        top: 3%;
     }


    @media (min-width: 1199.98px) {  
        top: 6%;
    }
`

export const Jardin = styled.img`
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 100%;

`

export const BorboletaRigth = styled.img`
    position: absolute;
    right: 122px;
    top: 20%;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    animation-duration: 2s;

    @media (max-width: 767.98px) { 
        display: none;
    }
`

export const BorboletaLeft = styled.img`
    position: absolute;
    left: 122px;
    bottom: 35%;
    animation-duration: 2s;

    @media (max-width: 767.98px) { 
        display: none;
    }
`