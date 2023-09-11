import { 
    NewsTextContent,
     NewsWrapper,
    NewsTitle,
    NewsCreatedAt,
    NewsFirstSection,
    NewsSecondSection
 } from "./NewsStyles"

export type NewsProps={
    item:{
        created_at:string,
        content:string,
        title:string
}}
export function News({item}:NewsProps){
    console.log(item)
    return (
        <NewsWrapper>
            <NewsFirstSection>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsCreatedAt>{item.created_at}</NewsCreatedAt>
            </NewsFirstSection>
            <NewsSecondSection>
                <NewsTextContent>{
                item.content.length>255?`${item.content.slice(0,255)}...`:item.content
                }</NewsTextContent>
            </NewsSecondSection>
        </NewsWrapper>
    )
}