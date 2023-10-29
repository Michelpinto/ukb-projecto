import styled from "styled-components";


const EventsWrapper = styled.div`
  display: flex;
  flex-direction:column;
  max-width: 120rem;
  margin-bottom:2.25rem;
  justify-content: center;
  align-items: center;
`;
const EventsHeader = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
 
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  & h1 {
    font-size: 2rem;
    max-width: 98rem;
    //margin: 0 auto;

  }
`;
const EventsFooter = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: center;
  align-items: center;
`;

const SectionWrapper = styled.section`
  display: flex;
  position: relative;
  background-color:#F7F9F9;
  
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const EventsContent=styled.div`
  justify-content:center;
  align-items: center;
  //padding-top:1rem;
  padding-bottom:5rem;
  width:100%;
  height:680px;
  overflow: auto;
  
  display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

  padding-left:2rem;
 padding-right:2rem;
   
 
`

export {
  EventsContent,
  EventsWrapper,
  EventsHeader,
  SectionWrapper,
  EventsFooter 

}

/*


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
  };*/