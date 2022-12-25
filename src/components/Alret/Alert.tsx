import React, { useEffect, useRef, useState } from 'react';

import { AiOutlineCloseCircle, AiOutlineWarning } from 'react-icons/ai';

import { useAppSelector } from '../../app/hooks';

import './alert.scss';

// /. Imports

const Alert: React.FC = () => {
    const { isDataLoading } = useAppSelector(state => state.gallerySlice);

    const alertRef = useRef<HTMLDivElement>(null);

    const [isVisible, setVisibleStatus] = useState<boolean>(false);

    // /. hooks

    const closeAlert = (): void => {
        alertRef.current?.classList.remove('visible');
        alertRef.current?.classList.add('hide');
    };

    // /. functions

    useEffect(() => {
        if (!isDataLoading) {
            const intervale = setInterval(() => {
                if (isVisible) {
                    alertRef.current?.classList.remove('visible');
                    alertRef.current?.classList.add('hide');
                    setVisibleStatus(false);
                } else {
                    alertRef.current?.classList.add('visible');
                    alertRef.current?.classList.add('opacity');
                    alertRef.current?.classList.remove('hide');
                    setVisibleStatus(true);
                }
            }, 15000);

            return () => clearInterval(intervale);
        }
    }, [isDataLoading, isVisible]);

    // /. effects

    return (
        <div
            ref={alertRef}
            className="alert"
        >
            <div className="alert__wrapper">
                <div className="alert__notification">
                    <AiOutlineWarning
                        color={'#000'}
                        size={'18px'}
                    />
                </div>
                <div className="alert__information">
                    <span className="alert__message">
                        Press DEL on active card for remove!
                    </span>
                </div>
                <button
                    className="alert__button"
                    onClick={closeAlert}
                >
                    <AiOutlineCloseCircle
                        color={'#000'}
                        size={'18px'}
                    />
                </button>
            </div>
        </div>
    );
};

export default Alert;
