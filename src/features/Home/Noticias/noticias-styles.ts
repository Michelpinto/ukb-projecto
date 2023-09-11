import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height:100%;
  flex-direction: column;
  max-width:1024px;
  justify-content:center;

  
`;

export const GridWrapper=styled.div`
  display: grid;
  padding-left:1rem;
  max-width:1024px;
  grid-template-columns:repeat(2,auto);
  grid-gap:12px;
`
export const NewsWrapper=styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
`
export const NewsHeader=styled.div`
  display: flex;
  width:100%;
  height:5rem;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`
export const PrimaryNewsWrapper=styled.div`
  display: flex;
  height:100%;
  
  flex-direction:column;
  justify-content: flex-end;
  align-items:flex-end;
  border-radius:6px;
  background: ${props => props.theme.colors.background_primary}; 
`
export const SectionWrapper=styled.section`
  display:flex;
  position: relative;
  width: 100%;
  height: 670px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
`

