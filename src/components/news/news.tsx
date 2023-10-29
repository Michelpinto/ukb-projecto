import { 
    NewsTextContent,
     NewsWrapper,
      NewsWrapperFirst,
    NewsTitle,
    NewsCreatedAt,
    NewsFirstSection,
    NewsSecondSection
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
        <NewsWrapper url_img ={item.url_img}>
            <NewsFirstSection>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsCreatedAt>{item.created_at}</NewsCreatedAt>
            </NewsFirstSection>
            <NewsSecondSection>
                <NewsTextContent>{
                item.content.length>255?`${item.content.slice(0,120)}...`:item.content
                }</NewsTextContent>
            </NewsSecondSection>
           
        </NewsWrapper>
    )
}