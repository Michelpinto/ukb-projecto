import { styled } from 'styled-components';


const NewsWrapperFirst = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  border-radius:6px;
  height: 180px;
  width: 320px;
  padding:1.5rem;
  
  box-shadow: 0.063rem 0.25rem 0.938rem rgba(0, 0, 0, 0.22);
  
`;
const NewsWrapper=styled.div<{url_img: string; }>`
  display: flex;
  height: 180px;
  width: 320px;
  position:relative;
  opacity:0.9 ;
  border-radius:6px;
  padding:1.5rem;
  //box-shadow: 0.063rem 0.25rem 0.938rem rgba(0, 0, 0, 0.16);
  background-image:${props=>`url(${props.url_img})`};
  cursor:pointer;
  @media ${props=>props.theme.devices.mobileS} {
    flex-direction: column;
    margin-top:1rem;
    padding-top:1rem;
    border-radius:0.938rem;
    padding-bottom:1rem;
    //height: auto;
   
  };
  @media ${props=>props.theme.devices.mobileM} {
    flex-direction: column;
    height: auto; 
    margin-top:1rem;
    padding-top:1rem;
    border-radius:0.938rem;
    padding-bottom:1rem;
    
  };
  @media ${props=>props.theme.devices.mobileL} {
    flex-direction: column; 
    height: auto;
    margin-top:1rem;
    padding-top:1rem;
    border-radius:0.938rem;
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
  height: 200px;
  align-items:center;
  justify-content:center;
  width: 340px;
    margin-left:.5rem;
    margin-right:.5rem;
    padding-bottom:1rem;
    padding-top:1rem;
   
  };
  
`
const NewsFirstSection = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  
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
`;

const NewsTitle=styled.h2`
    font-family: "Roboto";
    font-style: normal;
    text-transform:capitalize;
    font-weight: 700;
    font-size:1.25rem;
    line-height: 1.688rem;
    color:${props=>props.theme.colors.text_card};
`
const NewsCreatedAt=styled.span`
    font-family: 'Roboto';  
    font-style: normal;
    font-weight: 700;
    font-size:1rem;
    line-height: 1.125rem;
    color:${props => props.theme.colors.text_card};
`

const NewsTextContent=styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4em;
    line-height: 1.7rem;
    margin-top: .3rem;
    color:${props => props.theme.colors.text_card};`

export {
    NewsCreatedAt,
    NewsTitle,
    NewsWrapper,
    NewsWrapperFirst,
    NewsSecondSection,
    NewsTextContent,
    NewsFirstSection
}
