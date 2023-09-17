import styled from 'styled-components'


const EventWrapper=styled.div`
  display: flex;
  height: 180px;
  width: 320px;
  border-radius:6px;
  padding:1.5rem;
  background: ${props => props.theme.colors.cardCity};
  box-shadow: 0.063rem 0.25rem 0.938rem rgba(0, 0, 0, 0.16);
  cursor:pointer;
  @media ${props=>props.theme.devices.mobileS} {
    flex-direction: column;
    margin-top:1rem;
    padding-top:1rem;
    border-radius:0.938rem;
    padding-bottom:1rem;
    //height: auto;
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
    //height: auto; 
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
    //height: auto;
    img{
      width:95%;
      margin:0;
      border-radius:0.938rem;

    } 
  };
  @media ${props=>props.theme.devices.laptopS} {
    flex-direction: row;
    justify-content:space-between;
   
    margin-left:.5rem;
    margin-right:.5rem;
    padding-bottom:1rem;
    padding-top:1rem;
    
  };
  @media ${props=>props.theme.devices.laptopM} {
    flex-direction: row; 
    justify-content:space-between;
   
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
    display: flex;
  height: 200px;
  align-items:center;
  justify-content:center;
  width: 340px;
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
  width:40%;
  height: 170px;
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
   
    padding-left:1rem;

  };
  @media ${props=>props.theme.devices.laptopM} {
    width:15.19rem;
   
    padding-left:1rem;
    

  };
  @media ${props=>props.theme.devices.desktopL} {
    width:20rem;
    padding-left:1px;
  };
`

const ImageEvent=styled.img`
  width:100%;
  height:100%;
  border-radius: 1rem;
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

const Local=styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5;
  text-transform:capitalize;
  color:${props => props.theme.colors.text_card};
  `

const Description=styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 40;
  font-size: 1rem;
  line-height: 1.5;
  color:${props => props.theme.colors.text_card};
  `
  

const Event=styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  text-transform:capitalize;
  font-size: 1.5rem;
  line-height: 1.9rem;
  margin-top: .3rem;
  
`
const EventProducer=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 1em;
line-height: 1.4rem;
margin-top: .3rem;
text-transform:capitalize; 
color:${props => props.theme.colors.text_card};

`
const DateEvent=styled.span`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 1rem;
line-height: 1.125rem;
margin-top: 1.3rem;
color:${props => props.theme.colors.text_card};
`
export {
    DateEvent,
    ImageEvent,
    Local,
    Event,
    EventProducer,
    InfoCard,
    EventWrapper,
    Description,
    ImageEventWrapper
}

