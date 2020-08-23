import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 200px;
  width: 100%;

     @media (max-width: 575.98px) { 
        padding: 91px 16px 91px 16px
      }
  
  
      @media (min-width: 767.98px) { 
        padding: 91px 0 91px 0;
      }
  
  
      @media (min-width: 991.98px) { 
        padding: 120px 0 120px 0;
       }
  
  
      @media (min-width: 1199.98px) {  
        padding: 120px 0 120px 0;
      }
`;

export const RosesTop = styled.img`
    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: 767.98px) { 
        visibility: hidden;
        width: 100px
    }

`

export const RosesBottom = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;

    @media (max-width: 767.98px) { 
        visibility: hidden
    }
`

export const InfoContainer = styled.div`
     padding: 0 16px 56px 16px;
     display: flex;
     justify-content: center;
`

export const HeaderContainer = styled.div`
  padding-bottom: 80px
`