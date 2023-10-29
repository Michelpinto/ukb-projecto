
import React from 'react';

import { 
     EventsHeader,
     EventsWrapper,
     SectionWrapper,
     EventsContent,
  
     } from './events-styles';
import { IEvent,EventCard } from '../../../components/events';
import url_img from "../../../assets/eventImg.png"


const events:IEvent["event"][]=[{
   producer:"is simply .",
   local:"IP",
   event_date:"11-09-2023",
   url_img:url_img,
   title:"What is Lorem Ipsum?",
   id:"id1",
   

},{
  title:"Why do we use it?",
  producer:"name",
  local:"IP",
  event_date:"11-09-2023",
  url_img:url_img,
  id:"id2"
},{
  title:"Where can I get some?",
  event_date:"10-09-2023",
  producer:"name",
  local:"IP",
  url_img:url_img,
  id:"id3"
},{
  title:"Why do we use it?",
  producer:"name",
  event_date:"11-09-2023",
  local:"IP",
  url_img:url_img,
  id:"id4"
},{
  title:"Where can I get some?",
  event_date:"10-09-2023",
  producer:"name",
  url_img:url_img,
  local:"IP",
  id:"id5"
},{
  title:"Where can I get some?",
  event_date:"10-09-2023",
  producer:"name",
  url_img:url_img,
  local:"IP",
  id:"id6",

},{
  title:"Why do we use it?",
  producer:"name",
  event_date:"11-09-2023",
  url_img:url_img,
  local:"IP",
  id:"id7"
},{
  title:"Where can I get some?",
  event_date:"10-09-2023",
  producer:"name",
  local:"IP",
  url_img:url_img,
  id:"id8"
},
{
  title:"Where can I get some?",
  event_date:"10-09-2023",
  producer:"name",
  url_img:url_img,
  local:"IP",
  id:"id9"
},
{
  title:"Where can I get some?",
  event_date:"10-09-2023",
  producer:"name",
  url_img:url_img,
  id:"id10",
  local:"IP"
}
,{
  title:"Where can I get some?",
  event_date:"10-09-2023",
  producer:"There",
  url_img:url_img,
  local:"IP",
  id:"id11"
}]
const Events: React.FC = () => {

  const eventsFiltered=events
  return (
      <SectionWrapper>
         <EventsWrapper>
         <EventsHeader>
        <h1>Eventos</h1>
        </EventsHeader>
          <EventsContent>
            {
              eventsFiltered.map((event,index)=><EventCard key={index} event={event}/>)
            }
          </EventsContent> 
        </EventsWrapper>
      </SectionWrapper>
  );
};

export {Events};
