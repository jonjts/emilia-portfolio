import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  .title{
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
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