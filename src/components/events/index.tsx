import React from 'react';
import { 
    EventWrapper,
    ImageEvent,
    InfoCard,
    City,
    Event,
    EventProducer,
    DateEvent,
    ImageEventWrapper
 } from './styles';
type IEvent={
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
            <City>
                {event.local}
            </City>
            <Event>
                {event.title}
            </Event>
            <EventProducer>
                {event.producer}
            </EventProducer>
            <DateEvent>{event.event_date}</DateEvent>
            </InfoCard>
    </EventWrapper>
);
}
export {EventCard}
/*
<div className="event-card">

            <div className="title-hotel">
                {(event.Nomehotel) && <h1>{event.Nomehotel}</h1>}
                <h2>
                    {event.title}
                    {IsAdmin && !event.Nomehotel && <span>
                        <Link to={`/event/${hotel_owner_id}/${event.id}/`}><FaPencilAlt /></Link>
                    </span>}
                </h2>
            </div>
            <div className={classname}>
                <p>{event.content}</p>
            </div>
            {event.content.length > 100 && <div className="event-card-P" onClick={alterStailincss}><p>{texVerMaisOumenos}</p></div>}

            <div className="event-data-detalhes">
                <p>dia: {event.data_do_event}</p>
                <p>publicado: {event.data}</p>
            </div>
             <div  className="lembret-class">
                <div className="definir_or_remover_lembrte" onClick ={Df_rv_lembret}>{definir_or_remover_lembrte}<span><FaBell/></span></div>
            </div>
          
          </div>
*/
