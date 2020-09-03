import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FEF6F9;
  padding: 49px 36px 80px 36px;
  position: relative;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 170px;
  padding-top: 53px;

  h4 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 150%;

      /* Black */

      color: #1E0D16;

      @media (max-width: 575.98px) { 
        font-size: 16px;
        font-weight: 600;
        font-size: 16px;
      }
  
  
      @media (min-width: 767.98px) { 
        font-size: 16px;
        font-weight: 600;
      }
  
  
      @media (min-width: 991.98px) { 
        font-size: 24px;
        font-weight: 300;
       }
  
  
      @media (min-width: 1199.98px) {  
        font-weight: 300;
        font-size: 24px;
      }
  }
`

export const InfoDetails = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  label{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 0;
    padding-left: 16px;
    max-width: 452px;
    /* identical to box height, or 27px */

    letter-spacing: 0.5px;

    /* Black */

    color: #1E0D16;

    @media (max-width: 575.98px) { 
        font-size: 16px;
      }
  
  
      @media (min-width: 767.98px) { 
        font-size: 16px;
      }
  
  
      @media (min-width: 991.98px) { 
        font-size: 18px;
       }
  
  
      @media (min-width: 1199.98px) {  
        font-size: 18px;
      }
  }
`

export const ActionContainer = styled.div`
  justify-content:center;
  display: flex;
  padding: 80px 0 0 0;
`

export const Border = styled.img`
  position: absolute;  
  top: 0;
  bottom:0;

    @media (max-width: 575.98px) { 
      visibility: hidden;
      width: 0px;
    }


    @media (min-width: 767.98px) { 
      visibility: hidden;
      
    }


    @media (min-width: 991.98px) { 
      visibility: hidden;
    }


    @media (min-width: 1199.98px) {  
      visibility: visible;
    }
`

export const BorderLeft = styled(Border)`
  left: 0;
`

export const BorderRight = styled(Border)`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  right: 0;
`

export const RosaLeft = styled(BorderLeft)`
  bottom: 0;
  left: 200px;
  top: initial;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`

export const RosaRight = styled(BorderRight)`
  bottom: 0;
  right: 200px;
  top: initial;
  -webkit-transform: initial;
  transform: initial;
`