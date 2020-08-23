import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    z-index: 100;

    @media (max-width: 575.98px) { 

        justify-content: flex-end;
        img {
            height: 400px;
            margin-top: -72px
        }
    }

    @media (min-width: 580.98px) { 
     
        img {
            height: 700px;
            margin-top: 0px
        }
    }
    

    @media (min-width: 991.98px) { 
    
        img {
            height: 900px
            margin-top: 0px
        }
     }


    @media (min-width: 1199.98px) {  
    
        img {
            height: 900px
            margin-top: 0px
        }
    }
`

export const ContentLabelContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    display: flex;

    h1 {
        color: #ED578A
    }

    h4 {
        color: #ED578A
    }

    @media (max-width: 575.98px) { 
        width: 100px;
        margin-top: -188px;
        h1 {
            font-size: 32px
        }

        h4 {
            font-size: 16px
        }
    }

    @media (min-width: 767.98px) { 
        width: 437px;
        margin-top: -250px;
        h1 {
            font-size: 92px;
        }

        h4 {
            font-size: 32px
        }
    }
    

    @media (min-width: 991.98px) { 
        width: 437px;
        margin-top: -250px;
        h1 {
            font-size: 92px;
        }

        h4 {
            font-size: 32px
        }
     }


    @media (min-width: 1199.98px) {  
        width: 437px;
        margin-top: -250px;
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

    @media (max-width: 575.98px) { 
        
    }


    @media (max-width: 767.98px) { 
        width: 100%
    }

`

export const RightImage = styled.img`
    position: absolute;
    right: 0;
    bottom: 20%;

    @media (max-width: 575.98px) { 
        
    }


    @media (max-width: 767.98px) { 
        visibility: hidden
    }

`