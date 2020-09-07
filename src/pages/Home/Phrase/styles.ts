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
       height: 100%;
       margin-bottom: -90px;
     }


    @media (min-width: 1199.98px) {  
        height: 100%;
        margin-bottom: -90px;
    }
`


export const Row = styled(RootRow)`
    margin-right: 0;
    margin-bottom: 76px;

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
    position: relative;

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
    
    position: relative;
    flex: 1;
    margin-top: -8px;
    position: relative;
    mask-image: url(assets/img/home-wave.svg);
    mask-repeat: no-repeat;
    mask-position: top;
    mask-size: cover;
    width: 100%;

    .row{
        background-color: #ffffff;
    }


    @media (max-width: 575.98px) { 
       .row{
           padding-top: 56px;
           height: 670px;
       }
    }

    
    @media (min-width: 767.98px) { 
        .citacao {
            margin-top: 211px;
        }
        height: 1111px;
    }


    @media (min-width: 991.98px) { 
        .citacao {
            margin-top: 10px;
            align-items: flex-start !important;
            margin-left: 48px;
        }
        .row{
            height: 100%;
        }
        .col{
            margin-top: -61px !important;
        }
        height: 777px;
     }


    @media (min-width: 1199.98px) {  
        .row{
            height: 100%;
        }
        height: 937px;
        
    }
`

export const ImageContainer = styled.div`
    position: relative;

    @media (max-width: 575.98px) { 
       height: 200px;
       width: 250px;
       margin-top: 32px;
       z-index: 10;
    }


    @media (min-width: 767.98px) { 
        height: 300px;
        width: 300px;
        margin-top: 177px;
    }


    @media (min-width: 991.98px) { 
        height: 490px;
       width: 589px;
       align-self: center;
       margin-top: 0;
       align-self: flex-end;
     }


    @media (min-width: 1199.98px) {  
      height: 490px;
      width: 590px;
      margin-top: -10px;
    }
`

export const ImageA = styled.img`
    width: 877px;
    height: 727px;
    z-index: 10;
    position: absolute;
    

    @media (max-width: 575.98px) { 
       height: 200px;
       width: 250px;
       margin-top: 0;
       z-index: 10;
    }


    @media (min-width: 767.98px) { 
        height: 300px;
        width: 300px;
    }


    @media (min-width: 991.98px) { 
        height: 100%;
        width: 100%;
        margin-top: 0;
     }


    @media (min-width: 1199.98px) {  
        height: 100%;
        width: 100%;
        margin-top: 0;
    }
`

export const RosesBack = styled.img`
    z-index: 9;
    position: absolute;
    bottom: 0;
    left: 0;

    @media (max-width: 575.98px) { 
      height: 100%;
    }

    @media (min-width: 767.98px) { 
        height: 100%;
    }

`

export const RosesFront = styled.img`
    z-index: 11;
    position: absolute;
    bottom: 0;
    right: 0;

    @media (max-width: 575.98px) { 
      width: 100%;
    }

    @media (min-width: 767.98px) { 
        width: 100%;;
    }

`