import React from 'react';

const Notification = (props) => {
    return(
        <div className="fixed top-2 right-2 w-1/5 bg-white mb-10">
            <p className="">{props.message}</p>
        </div>
    );
}

export default Notification;