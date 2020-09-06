import styled from 'styled-components';

export const Container = styled.div<{ border?: 'top' | 'bottom' }>`
    margin-top: -1px;
    background: #FFFFFF;
    border: 1px solid #CDCBCC;
    box-sizing: border-box;
    
    border-top-left-radius: ${props => props?.border === 'top' ? 3 : 0}px;
    border-top-right-radius: ${props => props?.border === 'top' ? 3 : 0}px;
    border-bottom-left-radius: ${props => props?.border === 'bottom' ? 3 : 0}px;
    border-bottom-right-radius: ${props => props?.border === 'bottom' ? 3 : 0}px;


    .card {
        width: 100%;
        border-bottom: 0;
        border-left: 0;
        border-right: 0;
    }

    @media (max-width: 575.98px) { 
        min-width: 300px;
    }

    @media (min-width: 580.98px) { 
        width: 500px;
    }
    

    @media (min-width: 991.98px) { 
        width: 794px;
    }

`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 56px;
    padding: 0 25px 0 25px;
    cursor: pointer;
    background-color: #fff;

    label{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 150%;
        margin: 0;
        /* identical to box height, or 36px */


        color: #000000;
    }
`
