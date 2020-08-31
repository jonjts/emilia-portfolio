import styled from 'styled-components';

export const ContatoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: 100px

`

export const Option = styled.div`
  width: 191px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  img{
    width: 88px;
    margin-bottom: 40px;
    margin-top: 40px
  }

  label {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
    /* or 29px */

    text-align: center;

    /* Black */

    color: #1E0D16;

    @media (max-width: 575.98px) { 
      font-size: 16px;
      }
  
  
      @media (min-width: 767.98px) { 
        font-size: 16px;
      }
  
  
      @media (min-width: 991.98px) { 
        font-size: 24px;
       }
  
  
      @media (min-width: 1199.98px) {  
        font-size: 24px;
      }
  }
`

export const Container = styled.div`
  background-color: #FEF6F9;
`;

export const Content = styled.div`
  min-height: 300px;
  
    @media (max-width: 575.98px) { 
        padding: 40px 17px 40px 17px;
      }
  
  
      @media (min-width: 767.98px) { 
        padding: 40px 17px 40px 17px;
      }
  
  
      @media (min-width: 991.98px) { 
        padding: 88px 127px 0px 127px;
       }
  
  
      @media (min-width: 1199.98px) {  
        padding: 88px 127px 0px 127px;
      }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .title{
    font-family: Galeere;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    /* identical to box height, or 112% */

    letter-spacing: 0.15px;

    /* Black */

    color: #1E0D16;

    
    @media (max-width: 575.98px) { 
        font-size: 24px; 
      }
  
  
      @media (min-width: 767.98px) { 
        font-size: 24px;
      }
  
  
      @media (min-width: 991.98px) { 
        font-size: 32px;
       }
  
  
      @media (min-width: 1199.98px) {  
        font-size: 32px;
      }
  }

  .subtitle{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */

    text-align: center;
    letter-spacing: 0.5px;

    /* Primary/Pink */

    color: #ED578A;

    
    
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