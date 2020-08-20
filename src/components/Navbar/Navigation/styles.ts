import styled from "styled-components";
import {
    Nav as RootNav
} from "reactstrap";

export const Nav = styled(RootNav)`

    .active{
        font-weight: 600 !important;
        line-height: 150% !important;

        ::after{
            content:"";
            width:6px;
            height:6px;
            background:#F7B5CC;
            color:#F7B5CC;
            border-radius: 50%;
        }
    }

    .nav-link{
        color: #ED578A !important;
    }

    .nav-item{
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 46px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;

        @media (max-width: 767.98px) { 
            flex-direction: row;
        }

    }
        
    .navbar-toggler-icon{
        @media (max-width: 575.98px) { 
            flex-direction: row;
        }


        @media (max-width: 767.98px) { 
            background-image: url(${'./assets/img/icons/menu.png'})
         }

    }


    @media (max-width: 575.98px) { 
        justify-content: normal !important
    }


`
