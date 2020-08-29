import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    z-index: 100;

    @media (max-width: 575.98px) { 
        flex-direction: column;
        justify-content: flex-end;
        img {
            height: 300px;
        }
    }

    @media (min-width: 580.98px) { 
        flex-direction: column;
        img {
            height: 700px;
            margin-top: 0px
        }
    }
    

    @media (min-width: 991.98px) { 
        flex-direction: row;
        img {
            height: 800px;
            margin-top: 0px;
        }
     }


    @media (min-width: 1199.98px) {  
    
        img {
            height: 800px;
            margin-top: 0px;
        }
    }
`

export const ContentLabelContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    display: flex;
    padding: 0 16px 0 16px;

    label {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */

        letter-spacing: 0.5px;
    }

    h1 {
        padding-bottom: 48px;
        color: #ED578A;
    }

    h4 {
        color: #ED578A;
    }

    @media (max-width: 575.98px) { 
        margin-top: 80px;
        h1 {
            font-size: 32px;
            text-align: center;
        }

        h4 {
            font-size: 16px;
        }
    }

    @media (min-width: 767.98px) { 
        margin-top: 80px;
        h1 {
            font-size: 78px;
        }

        h4 {
            font-size: 32px;
        }
    }
    

    @media (min-width: 991.98px) { 
        width: 437px;
        margin-top: 100px;
        h1 {
            font-size: 78px;
        }

        h4 {
            font-size: 32px
        }
     }


    @media (min-width: 1199.98px) {  
        width: 655px;
        margin-top: -250px;
        h1 {
            font-size: 78px;
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
        padding-top: 160px
    }
`

export const LeftImage = styled.img`
    position: absolute;
    left: 0;
    bottom: 0px;
    object-fit: contain;

    @media (max-width: 575.98px) { 
        display: none;
    }


    @media (max-width: 767.98px) { 
        width: 100%
    }

`

export const RightImage = styled.img`
    position: absolute;
    right: 0;

    @media (max-width: 575.98px) { 
        display: none;
    }


    @media (max-width: 767.98px) { 
        visibility: hidden
    }
`

export const ImageContainer = styled.div`

        @media (max-width: 575.98px) { 
            display: flex;
            justify-content: center;
            height: 460px;
        }


        @media (min-width: 767.98px) { 
            width: 380px;
            height: 460px;
        }


        @media (min-width: 991.98px) { 
            width: 380px;
            height: 100%;
        }


        @media (min-width: 1199.98px) {  
            width: 380px;
            margin-top: -201px;
            height: 100%;
        }

 
`