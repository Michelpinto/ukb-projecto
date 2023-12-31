import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  max-width: 120rem;
  height: 67rem;
  
  justify-content: center;
`;

export const GridWrapper = styled.div`
  display: grid;
  padding-left: 1rem;
  padding-right:2rem;
  max-width: 120rem;
  height:570px;
  overflow: auto;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1.2rem;
`;
export const NewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left:2.5rem;
 padding-right:2.5rem;
`;
export const NewsHeader = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & h1 {
    font-size: 2rem;
    max-width: 98rem;
    //margin: 0 auto;

  }
`;
export const PrimaryNewsWrapper = styled.div`
  display: flex;
  height: 100%;

  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 0.6rem;
  background: ${(props) => props.theme.colors.background_primary};
`;

export const ImageContainer=styled.img`
  display: flex;
  height: 100%;
  width: 340px;
  position:relative;
  align-items:center;
  border-radius:6px;
  
`
export const PrimaryNewsWrappeImage = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  border-radius:6px;
  height: 180px;
  width: 320px;
  padding:1.5rem;
  opacity: 0.79;
  background: ${(props) => props.theme.colors.background_info_news};
  box-shadow: 0.063rem 0.25rem 0.938rem rgba(0, 0, 0, 0.22);
  
`;
export const SectionWrapper = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

