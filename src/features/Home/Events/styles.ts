import styled from "styled-components";


const EventsContent=styled.div`
  justify-content:center;
  align-items: center;
  margin-top:1.75rem;
  width:100%;
  padding-left:2rem;
  padding-right:2rem;
  @media ${props=>props.theme.devices.mobileS} {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;   
  };
  @media ${props=>props.theme.devices.mobileM} {
    display: flex;
    flex-direction: column; 
    gap: 1.5rem;  
  };
  @media ${props=>props.theme.devices.mobileL} {
    display: flex;
    flex-direction: column; 
    gap: 1.5rem;  
  };
  @media ${props=>props.theme.devices.laptopS} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem; 
  };
  @media ${props=>props.theme.devices.laptopM} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width:auto;
    gap: 1rem; 
  };
  @media ${props=>props.theme.devices.laptopL} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem; 
    width:auto;
  };
  @media ${props=>props.theme.devices.laptopL} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width:auto;  
  };
`

export {
  EventsContent
}