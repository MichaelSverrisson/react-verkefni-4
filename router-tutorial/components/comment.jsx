import React, { useState } from 'react';

export const comment = (props) => {
    return (
        <ul id="comments" className={s.comment__listi}>
            {props.comments.map((reg) => {
                return (
                    <li key={reg.id} className={s.eventsListi__comment}>
                        <div>
                            <p>
                                {reg.name}{' '}
                                <span className='comment__username'>
                                    @{reg.username}
                                </span>
                                <p>{reg.comment}</p>
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}