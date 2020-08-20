import styled from "styled-components";


export const Container = styled.div`
`

export const DireitosContainer = styled.div`
    padding: 72px 58px 0px 58px;

    hr {
        background-color: #F7B5CC;
    }
`

export const DireitosDetalhes = styled.div`
    padding-top: 32px;
    padding-bottom: 23px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    label{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 18px;
        color: #ED578A;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }
`

export const Map = styled.iframe`
    width: 100%;
    height: 320px;
`

export const NavigationContainer = styled.div`

    @media (max-width: 767.98px) { 
       visibility: hidden;
       position: absolute
    }
`

export const BranContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ImgBrand = styled.img`

    margin-top: 48px;
    margin-bottom: 40px;

`