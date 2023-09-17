import React from 'react';
import { 
    EventWrapper,
    ImageEvent,
    InfoCard,
    Event,
    EventProducer,
    DateEvent,
    ImageEventWrapper,
    Local,
    Description
 } from './styles';
export type IEvent={
   event:{ id:string;
    title:string;
    url_img:string;
    producer:string;
    local:string;
    event_date:string;
   }
}
function EventCard({ event }:IEvent) {
    return (
        <EventWrapper onClick={()=>console.log(event.id)}>
            <ImageEventWrapper>
                <ImageEvent src ={event.url_img} alt={event.title}/>
            </ImageEventWrapper>
            <InfoCard>
           
            <Event>
                {event.title}
            </Event>
            <EventProducer>
                Produtor: {event.producer}
            </EventProducer>
            <Local>
               Local: {event.local}
            </Local>
            <Description>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </Description>
            <DateEvent>Data: {event.event_date}</DateEvent>
        </InfoCard>
    </EventWrapper>
);
}
export {EventCard}
