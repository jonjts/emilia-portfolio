import styled from "styled-components";
import {
    Navbar as RootNavbar,
    Container as RootContainer,
    Button
} from "reactstrap";

export const Navbar = styled(RootNavbar) <{ backgroundColor: string }>`
    background-color: ${props => props.backgroundColor} !important;
    position: fixed;
    top: 0;
    width: 100%
`

export const Container = styled(RootContainer)`

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
            background-image: url(${'./assets/img/icons/menu.svg'});
         }

    }

    .navbar-toggler{
        @media (max-width: 575.98px) { 
            
        }


        @media (max-width: 767.98px) { 
            border-color: transparent;
         }


        @media (max-width: 991.98px) {  }


        @media (max-width: 1199.98px) {  }
    }


    @media (max-width: 575.98px) { 
        justify-content: normal !important;
    }


`

export const SocialContainer = styled.div`
    flex-direction: row;
    display: flex;

    @media (max-width: 575.98px) { 
        display: flex;
        flex: 1;
        justify-content: flex-end;

        .item {
            position: absolute;
            top: 6px
        }
    }

    @media (max-width: 767.98px) {
        display: flex;
        flex: 1;
        justify-content: flex-end;
    }
`

export const SocialButton = styled(Button)`
    background-color: #ED578A !important;
    border-color: #ED578A !important;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    
    :hover{
        background-color: #9D1140 !important;
        border-color: #9D1140 !important;
    }


    .active {

    }
`