import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import Notification from './Notification';

const Toast = (props) => {
    const notifications = [
        {
            id: v4(),
            type: 'SUCCESS',
            message: 'Hello',
            title: ''
        },
        {
            id: v4(),
            type: 'SUCCESS',
            message: 'Hello',
            title: ''
        }
    ];

    console.log(notifications);

    return (
        <div>
            <div className="flex flex-col">
                {notifications.map(note => {
                    return <Notification key={note.id} {...note} />
                })}
            </div>
            {props.children}
        </div>
    );
}

export default Toast;