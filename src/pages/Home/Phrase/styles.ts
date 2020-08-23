import styled from "styled-components";
import {
    Row as RootRow,
    Col as RootCol
} from "reactstrap";

export const Roses = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    max-height: 400px;

    @media (max-width: 575.98px) { 
       height: 200px;
       right: 26%
    }


    @media (min-width: 767.98px) { 
        height: 300px;
    }


    @media (min-width: 991.98px) { 
       height: 100%
       margin-bottom: -90px;
     }


    @media (min-width: 1199.98px) {  
        height: 100%;
        margin-bottom: -90px;
    }
`


export const Row = styled(RootRow)`
    margin-right: 0;
    margin-bottom: 100px;

    @media (max-width: 575.98px) { 
        flex-direction: column-reverse;
        height: 900px;
    }


    @media (min-width: 767.98px) { 
        flex-direction: column-reverse;
    }


    @media (min-width: 991.98px) { 
        flex-direction: row;
     }


    @media (min-width: 1199.98px) {  
        flex-direction: row;
    }
`

export const Col = styled(RootCol)`
    display: flex;

    @media (max-width: 575.98px) { 
        justify-content: center;
    }


    @media (min-width: 767.98px) { 
        justify-content: center;
    }


    @media (min-width: 991.98px) { 
        justify-content: end;
    }


    @media (min-width: 1199.98px) {  
        justify-content: end;
    }
`

export const ContentContainer = styled.div`
    background-color: #fff;
    position: relative;
    flex: 1;
    margin-top: -4px;
    position: relative;
`


export const ImageA = styled.img`
    z-index: 100;

    @media (max-width: 575.98px) { 
       height: 200px;
       margin-top: 0;
    }


    @media (min-width: 767.98px) { 
        height: 300px;
        margin-top: 177px
    }


    @media (min-width: 991.98px) { 
       height: 300px;
       align-self: center;
       margin-top: 0;
     }


    @media (min-width: 1199.98px) {  
        height: 100%;
        margin-top: 0;
    }
`