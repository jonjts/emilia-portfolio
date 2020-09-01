import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    z-index: 100;

    img{
        animation-duration: 2s;
        position: absolute;
    }

    @media (max-width: 575.98px) { 
        height: 100%;
        justify-content: flex-end;
        img {
            height: 400px;
            margin-top: -72px;
        }
    }

    @media (min-width: 580.98px) { 
        height: 100%;
        img {
            height: 700px;
            margin-top: 0px
        }
    }
    

    @media (min-width: 991.98px) { 
        height: 555px;
        img {
            height: 900px;
            margin-top: 0px;
        }
     }


    @media (min-width: 1199.98px) {  
        height: 555px;

        img {
            height: 900px;
            margin-top: 0px;
        }
    }
`

export const ContentLabelContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    display: flex;
    margin-top: 54px;

    h1 {
        color: #ED578A;
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 104px;
        line-height: 110%;
    }

    h4 {
        color: #C982A7;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        /* identical to box height, or 48px */

        letter-spacing: 0.5px;
    }

    @media (max-width: 575.98px) { 
        width: 151px;
        margin-top: 100px;
        h1 {
            font-size: 32px
        }

        h4 {
            font-size: 16px
        }
    }

    @media (min-width: 767.98px) { 
        width: 437px;
      
        h1 {
            font-size: 92px;
        }

        h4 {
            font-size: 32px
        }
    }
    

    @media (min-width: 991.98px) { 
        width: 437px;
        margin-top: 200px;
        h1 {
            font-size: 92px;
        }

        h4 {
            font-size: 32px
        }
     }


    @media (min-width: 1199.98px) {  
        width: 437px;
        margin-top: 200px;
        h1 {
            font-size: 92px;
        }

        h4 {
            font-size: 32px
        }
    }
`

export const Container = styled.div`
    background-color: #FEF6F9;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    position: relative;

    @media (max-width: 575.98px) { 
        min-height: 522px;
    }


    @media (min-width: 767.98px) { 
        height: 700px;
    }


    @media (min-width: 991.98px) { 
        height: 856px;
     }


    @media (min-width: 1199.98px) {  
        height: 856px;
    }
`

export const LeftImage = styled.img`
    position: absolute;
    left: 0;
    object-fit: contain;
    content: url('./assets/img/cover-left.svg');

   


    @media (max-width: 767.98px) { 
        width: 100%;
    }

`

export const RightImage = styled.img`
    position: absolute;
    height: 70%;
    right: 0;
    bottom: 20%;

    @media (max-width: 575.98px) { 
        
    }


    @media (max-width: 767.98px) { 
        visibility: hidden;
    }
`

export const ImageContainer = styled.div`

        @media (max-width: 575.98px) { 
            width: 47%;
        }


        @media (min-width: 767.98px) { 
            width: 380px;
        }


        @media (min-width: 991.98px) { 
            width: 380px;
        }


        @media (min-width: 1199.98px) {  
            width: 380px;
        }

    div {
        position: absolute;
        left: 50%;
        top: 99px;

        @media (max-width: 575.98px) { 
            left: 46%;
            padding-top: 50px;
        }


        @media (min-width: 767.98px) { 
            left: 50%;
        }


        @media (min-width: 991.98px) { 
            left: 50%;
        }


        @media (min-width: 1199.98px) {  
            left: 50%;
        }
    }
`