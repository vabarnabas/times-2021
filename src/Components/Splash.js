import React from 'react';
import timesLogo from './../Resources/times_logo_bw.svg'

const Splash = (props) => {
    return (
        <div className="fixed flex w-screen h-screen items-center justify-center bg-primary">
            <img src={timesLogo} alt="" className="w-1/4 animate-ping" />
        </div>
    );
}

export default Splash;