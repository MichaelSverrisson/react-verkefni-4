import React, { useEffect, useState } from 'react';
import { Events } from '../events/Events';

const APIURL = process.env.REACT_APP_API_URL;

export function Eventlisti(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(null)
        let json;
        try{
            const result = await fetch(APIURL);
            if(!result.ok){
                throw new Error('Ekki ok Sjomli');
            }
            json = await result.json();
        } catch (e){
            console.warn('Can not get fetch eventslist', e);
            setError('Sowwwy gat ekki sótt fréttalista mommy');
            return;
        } finally{
            setLoading(false);
        }
        setEvents(json.items);
        fetchData();
    []});

    if(error){
        return (
            <p>Villa: {error}</p>
        );
    }
    if(loading){
        return(
            <p>Hleður inn gögn</p>
        );
    }
    return(
        <section className={s.Eventlisti}>
            <div key={i} className={s.eventslisti__item}>
                <Events
                    title={item.name}
                    id={item.id}
                    allEventsUrl={`/${item.id}`}
                />
            </div>
        </section>
    );
}