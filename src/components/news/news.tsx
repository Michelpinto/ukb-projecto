import { 
    NewsTextContent,
     NewsWrapper,
      NewsWrapperFirst,
    NewsTitle,
    NewsCreatedAt,
    NewsFirstSection,
    NewsSecondSection,
    Container,
    ImageContainer
 } from "./NewsStyles"

export type NewsProps={
    first:boolean,
    item:{
        created_at:string,
        content:string,
        title:string,
        url_img:string
}}
export function News({item,first}:NewsProps){
    if(first){
        return (
            <NewsWrapperFirst>
            <NewsFirstSection>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsCreatedAt>{item.created_at}</NewsCreatedAt>
            </NewsFirstSection>
            <NewsSecondSection>
                <NewsTextContent>{
                item.content.length>255?`${item.content.slice(0,255)}...`:item.content
                }</NewsTextContent>
            </NewsSecondSection>
        </NewsWrapperFirst>
        )
    }

    return (
        <Container>
        <ImageContainer src={item.url_img}/>
        <NewsWrapper>
        <NewsFirstSection>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsCreatedAt>{item.created_at}</NewsCreatedAt>
            </NewsFirstSection>
            <NewsSecondSection>
                <NewsTextContent>{
                item.content.length>255?`${item.content.slice(0,80)}...`:item.content
                }</NewsTextContent>
            </NewsSecondSection>
        </NewsWrapper>
       
        </Container>
    )
}

/*
 
*/