import styled from 'styled-components';

export const Container = styled.div`
  z-index: 10;
`;

export const Forma = styled.div`
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 88px;
    min-width: 88px;

    label{
        z-index: 10;

        font-family: Galeere;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        /* identical to box height, or 150% */

        letter-spacing: 0.15px;

        /* Primary/Pink-Light */

        color: #F7B5CC;
    }
`

export const Objeto = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
`