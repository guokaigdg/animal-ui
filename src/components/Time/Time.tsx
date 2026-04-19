import React, { useEffect, useState } from 'react';
import { Cursor } from '../Cursor';
import styles from './time.module.less';

export interface TimeProps {
    className?: string;
}

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const Time: React.FC<TimeProps> = ({ className }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Cursor>
            <div className={`${styles.acDatetime} ${className || ''}`}>
                <div className={styles.acDate}>
                    <span className={styles.acWeekday}>
                        {weekdays[currentTime.getDay()]}
                    </span>
                    <span className={styles.acMonthday}>
                        {months[currentTime.getMonth()]} {currentTime.getDate()}
                    </span>
                </div>
                <div className={styles.acTime}>
                    {currentTime.getHours().toString().padStart(2, '0')}
                    <span className={styles.acColon}>:</span>
                    {currentTime.getMinutes().toString().padStart(2, '0')}
                </div>
            </div>
        </Cursor>
    );
};

Time.displayName = 'Time';
