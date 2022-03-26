import React, { useEffect, useState } from 'react';
import ReactDOM from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { commentlisti } from '../comment/comment__listi';
import { formButton } from '../formbutton/formButton';

const APIURL = process.env.REACT_APP_API_URL;

export const Events = ({
    id,
    onDelete,
    allEventsUrl,
    single = false,
    limit = -1,
    isLog,
    updLog,
    isNam,
}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [eventsItem, setEventsItem] = useState(null);
    const [userComments, setUserComments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            let json;
            const url = new URL(id, APIURL);

            try {
                const result = await fetch(url);
                if(result.status === 404){
                    return;
                }
                if(!result.ok){
                    throw new Error('Result error');
                }
                json = await result.json();
            }
            catch (e) {
                console.warn('can not fetch events', e);
                setError('Gat ekki sótt viðburð');
                return;
            }
            finally{
                setLoading(false);
            }
            setEventsItem(json);
        }
        fetchData();
    }, [id]);

    if(error){
        return <p>Villa: {error}</p>;
    }
    if(loading){
        return <p>Hleður gögnum</p>;
    }
    return(
        <section className={s.events__title}>
            <h2 className={s.events__title}>{eventsItem && eventsItem.name}</h2>
            <p className={s.events__list}>
                {eventsItem && eventsItem.description}
            </p>

            {!allEventsUrl && (
                <div className={s.events__title}>
                    <h3>Skráning</h3>
                </div>
            )}
            {!allEventsUrl && eventsItem && (
                <commentlisti comments={eventsItem && eventsItem.registrations}>

                </commentlisti>
            )}
            {!allEventsUrl && isLog && (
                <form onSubmit={(event) => {
                    event.preventDefault();

                    console.log('Skráning => ', event.target.comments.value)
                    console.log('Notendanafn => ', isNam)
                }}
                >
                    <input type="text" id='comment_texti' name='comment_texti' />
                    <formButton text="Show skráning" />
                </form>
            )}
            <div className={s.events_links}>
                {allEventsUrl && (
                    <Link className={s.events_links} to={allEventsUrl}>
                        Show details
                    </Link>
                )}
                {!allEventsUrl && (
                    <Link className={s.events_links} to="/">
                        Til baka
                    </Link>
                )}
            </div>
        </section>
    );
};

Events.PropTypes = {
    id: PropTypes.number.isRequired,
    allEventsUrl: PropTypes.string,
    limit: PropTypes.number,
};