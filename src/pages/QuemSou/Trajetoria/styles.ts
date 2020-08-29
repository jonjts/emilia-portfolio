import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 100px;
  margin-top: 60px;
`;



export const RosesTop = styled.img`
    position: absolute;
    top: 0;
    left: 140px;

    @media (max-width: 767.98px) { 
        display: none;
        width: 100px
    }
`

export const RosesBottom = styled.img`
    position: absolute;
    bottom: 0;
    right: 140px;

    @media (max-width: 767.98px) { 
        display: none;
    }
`

export const DescricaoCurriculo = styled.label`

        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */

        letter-spacing: 0.5px;

        /* Black */

        color: #1E0D16;

        @media (max-width: 575.98px) { 
            margin-bottom: 20px;
            margin-top: 20px;
        }

        @media (min-width: 580.98px) { 
            margin-bottom: 20px;
            margin-top: 20px;
        }
        

        @media (min-width: 991.98px) { 
            flex: 6;
            margin-bottom: 0px;
            margin-top: 0px;
        }


        @media (min-width: 1199.98px) {  
            flex: 6;
            margin-bottom: 0px;
            margin-top: 0px;
        }
`
export const CenterCurriculo = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    padding: 0 16px 0 16px;
`

export const HexagonoContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 991.98px) { 
        flex: 4;
     }


    @media (min-width: 1199.98px) {  
        flex: 4;
    }
`

export const Line = styled.hr`
    border: 2px solid #F7B5CC;
    transform: rotate(-90deg);
    width: 80px;

    @media (max-width: 575.98px) { 
        display: none;

    }

    @media (min-width: 580.98px) { 
        display: none;
    }
    

    @media (min-width: 991.98px) { 
        display: block;
     }


    @media (min-width: 1199.98px) {  
        display: block;
    }

`

export const CurriculoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: row;

    @media (max-width: 575.98px) { 
        flex-direction: column;

    }

    @media (min-width: 580.98px) { 
        flex-direction: column;
    }
    

    @media (min-width: 991.98px) { 
        flex-direction: row;
        width: 777px;
     }


    @media (min-width: 1199.98px) {  
        flex-direction: row;
        width: 777px;
    }


`