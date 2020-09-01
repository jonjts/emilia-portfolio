import styled from "styled-components";

export const ContentContainer = styled.div < { backgroundColor: string }> `
    background-color: ${props => props.backgroundColor};
    position: relative;
    flex: 1;

    
    @media (max-width: 575.98px) { 
        
    }


    @media (min-width: 767.98px) { 
        
    }


    @media (min-width: 991.98px) { 
        margin-top: -59px;
     }


    @media (min-width: 1199.98px) {  
        margin-top: -59px;
    }
`

export const WaveContainer = styled.div`
    width: 100%;
    margin-bottom: -1px ;
`
export const WaveContainerFooter = styled.div`
    width: 100%;
    position: absolute;
    bottom:0;
    z-index: 100;

    @media (max-width: 575.98px) { 
        
    }


    @media (min-width: 767.98px) { 
        
    }


    @media (min-width: 991.98px) { 
        
     }


    @media (min-width: 1199.98px) {  
        margin-top: -100px;
        z-index: 100
    }
`

export const Wave = styled.img`
    width: 100%;
    z-index: 10;
`


export const Container = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 100;
    flex-direction: column;
    margin-top: -250px;
    position: relative;

    @media (max-width: 575.98px) { 
        min-height: 522px;
    }


    @media (min-width: 767.98px) { 
        
    }


    @media (min-width: 991.98px) { 
        
     }


    @media (min-width: 1199.98px) {  
        
    }
`
