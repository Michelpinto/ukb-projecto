import { styled } from 'styled-components';

const NewsWrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  border-radius:6px;
  height: 180px;
  width: 320px;
  padding:1.5rem;
  background: ${props => props.theme.colors.background_primary};  
`;
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
    NewsSecondSection,
    NewsTextContent,
    NewsFirstSection
}
