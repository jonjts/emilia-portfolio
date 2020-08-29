import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 575.98px) { 
        justify-content: center;

    }

    @media (min-width: 580.98px) { 
        justify-content: center;
    }
    

    @media (min-width: 991.98px) { 
        justify-content: flex-end;
     }


    @media (min-width: 1199.98px) {  
        justify-content: flex-end;
    }

`

export const MapContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 575.98px) { 
        justify-content: center;
        margin-left: 0px;
    }

    @media (min-width: 580.98px) { 
        justify-content: center;
        margin-left: 44px;
    }
    

    @media (min-width: 991.98px) { 
        justify-content: flex-start;
        margin-left: 44px;
     }


    @media (min-width: 1199.98px) {  
        justify-content: flex-start;
        margin-left: 44px;
    }

`