import { styled } from 'styled-components';


const NewsWrapperFirst = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  border-radius:6px;
  position: absolute;
  z-index:10;
  height: 180px;
  width: 340px;
  padding:1.5rem;
  opacity: 0.79;
  background: ${(props) => props.theme.colors.background_info_news};
  box-shadow: 0.063rem 0.25rem 0.938rem rgba(0, 0, 0, 0.22);
  
`;



const Container=styled.div`
  display: flex;
  height: auto;
  width: 340px;
  align-items:flex-end;
  justify-content:center;
  position:relative;
  border-radius:6px;
 

  
`

const ImageContainer=styled.img`
  display: flex;
  height: 180px;
  width: 340px;
  position:relative;
  align-items:center;
  border-radius:6px;
  
`
const NewsWrapper=styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.background_info_news};
  width: 340px;
  position:absolute;
  padding-left:1rem;
  padding-right:1rem;
  border-bottom-right-radius:6px;
  border-bottom-left-radius:6px;
  opacity: 0.79;
  cursor: pointer;
  
  
  //box-shadow: 0.063rem 0.25rem 0.938rem rgba(0, 0, 0, 0.16);
  
  @media ${props=>props.theme.devices.mobileS} {
    flex-direction: column;
    margin-top:1rem;
    padding-top:1rem;
    //border-radius:0.938rem;
    padding-bottom:1rem;
    //height: auto;
   
  };
  @media ${props=>props.theme.devices.mobileM} {
    flex-direction: column;
    height: auto; 
    margin-top:1rem;
    padding-top:1rem;
    //border-radius:0.938rem;
    padding-bottom:1rem;
    
  };
  @media ${props=>props.theme.devices.mobileL} {
    flex-direction: column; 
    height: auto;
    margin-top:1rem;
    padding-top:1rem;
    //border-radius:0.938rem;
    padding-bottom:1rem;
    
  };
  @media ${props=>props.theme.devices.laptopS} {
    flex-direction: column;
    justify-content:space-between;
   
    margin-left:.5rem;
    margin-right:.5rem;
    padding-bottom:1rem;
    padding-top:1rem;
    
  };
  @media ${props=>props.theme.devices.laptopM} {
    flex-direction: column; 
    justify-content:space-between;
   
    margin-left:.5rem;
    margin-right:.5rem;
    padding-bottom:1rem;
    padding-top:1rem;
  
  };
  @media ${props=>props.theme.devices.desktopL} {
    flex-direction: column; 
    display: flex;
    
  //height: 200px;
  //align-items:center;
  //justify-content:center;
  
    //margin-left:.5rem;
   // margin-right:.5rem;
    //padding-bottom:1rem;
    //padding-top:1rem;
   
  };
  
`
const NewsFirstSection = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  cursor: pointer;
  justify-content:space-between;
  height: 20%;
  width: 100%;
`;
const NewsSecondSection = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  height: 80%;
  width: 100%;
  cursor: pointer;
`;

const NewsTitle=styled.h2`
    font-family: "Roboto";
    font-style: normal;
    text-transform:capitalize;
    font-weight: 700;
    font-size:1.4rem;
    line-height: 2rem;
    color:${props=>props.theme.colors.text_white};
`
const NewsCreatedAt=styled.span`
    font-family: 'Roboto';  
    font-style: normal;
    font-weight: 700;
    font-size:1.4rem;
    line-height: 1.8rem;
    color:${props => props.theme.colors.text_white};
`

const NewsTextContent=styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2em;
    line-height: 1.4rem;
    margin-top: .3rem;
    color:${props => props.theme.colors.text_white};`

export {
    NewsCreatedAt,
    NewsTitle,
    ImageContainer,
    Container,
    NewsWrapper,
    NewsWrapperFirst,
    NewsSecondSection,
    NewsTextContent,
    NewsFirstSection
}
