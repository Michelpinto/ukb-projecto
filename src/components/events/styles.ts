import styled from 'styled-components'


const EventWrapper=styled.div`
  display: flex;
  height: 12.75rem;
  width: 24.375rem;
  background: ${props => props.theme.colors.cardCity};
  box-shadow: 0.063rem 0.25rem 0.938rem rgba(0, 0, 0, 0.16);
  cursor:pointer;
  @media ${props=>props.theme.devices.mobileS} {
    flex-direction: column;
    margin-top:1rem;
    padding-top:1rem;
    border-radius:0.938rem;
    padding-bottom:1rem;
    height: auto;
    img{
      width:95%;
      margin:0;
      
      border-radius:0.938rem;
    }
  };
  @media ${props=>props.theme.devices.mobileM} {
    flex-direction: column;
    height: auto; 
    margin-top:1rem;
    padding-top:1rem;
    border-radius:0.938rem;
    padding-bottom:1rem;
    height: auto; 
    img{
      width:95%;
      margin:0;
      border-radius:0.938rem;;
    }
  };
  @media ${props=>props.theme.devices.mobileL} {
    flex-direction: column; 
    height: auto;
    margin-top:1rem;
    padding-top:1rem;
    border-radius:0.938rem;
    padding-bottom:1rem;
    height: auto;
    img{
      width:95%;
      margin:0;
      border-radius:0.938rem;

    } 
  };
  @media ${props=>props.theme.devices.laptopS} {
    flex-direction: row;
    justify-content:space-between;
    height: 13.75rem;
    margin-left:.5rem;
    margin-right:.5rem;
    padding-bottom:1rem;
    padding-top:1rem;
    
  };
  @media ${props=>props.theme.devices.laptopM} {
    flex-direction: row; 
    justify-content:space-between;
    height: 13.75rem;
    margin-left:.5rem;
    margin-right:.5rem;
    padding-bottom:1rem;
    padding-top:1rem;
    img{
      width:100%;
      //border-radius: 1.125rem;
      //margin-left:1.5rem;
    
    }
  };
  @media ${props=>props.theme.devices.desktopL} {
    flex-direction: row; 
    margin-left:.5rem;
    margin-right:.5rem;
    padding-bottom:1rem;
    padding-top:1rem;
    img{
      width:100%;
    }
  };
  
`
const ImageEventWrapper=styled.div`
  display: flex;
  width:12.19rem;
  height:11.921rem;
  @media ${props=>props.theme.devices.mobileS} {
      width:100%;
      padding-left:1rem;
      
    };
  @media ${props=>props.theme.devices.mobileM} {
      width:100%;
      padding-left:1rem;
      
  };
  @media ${props=>props.theme.devices.mobileL} {
      width:100%;
      padding-left:1rem;
     
  };
  @media ${props=>props.theme.devices.laptopS} {
    width:15.19rem;
    height:11.921rem;
    padding-left:1rem;

  };
  @media ${props=>props.theme.devices.laptopM} {
    width:15.19rem;
    height:11.921rem;
    padding-left:1rem;
    

  };
  @media ${props=>props.theme.devices.desktopL} {
    width:15.19rem;
    height:11.921rem;
    padding-left:1rem;
  };
`

const ImageEvent=styled.img`
  width:100%;
  height:100%;
  border-radius: 1.125rem;
`

const InfoCard=styled.div`
  display: flex;
  padding-top:2.5rem;
  width: 100%;
  height:100%;
  flex-direction:column;
  padding-left:1.5rem;
  padding-right:1.5rem;
`

const City=styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 0.938rem;
  text-transform:capitalize;
  color:${props => props.theme.colors.text_card};
  `
  

const Event=styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  text-transform:capitalize;
  font-size: 1.375rem;
  line-height: 1.688rem;
  margin-top: .3rem;
  
`
const EventProducer=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 0.813em;
line-height: 1rem;
margin-top: .3rem;
text-transform:capitalize; 
color:${props => props.theme.colors.text_card};

`
const DateEvent=styled.span`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 0.938rem;
line-height: 1.125rem;
margin-top: 1.3rem;
color:${props => props.theme.colors.text_card};
`
export {
    DateEvent,
    ImageEvent,
    City,
    Event,
    EventProducer,
    InfoCard,
    EventWrapper,
    ImageEventWrapper
}

