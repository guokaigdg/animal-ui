import React, { useState, useEffect } from 'react';
import styles from './phone.module.less';

export interface PhoneProps {
    className?: string;
}

interface App {
    id: string;
    iconClass: string;
    color: string;
    offset?: boolean;
    hasNewMessage?: boolean;
}

const apps: App[] = [
    { id: 'camera', iconClass: 'iconCamera', color: '#B77DEE', hasNewMessage: true },
    { id: 'app', iconClass: 'iconMiles', color: '#889DF0', offset: true },
    { id: 'critterpedia', iconClass: 'iconCritterpedia', color: '#F7CD67' },
    { id: 'diy', iconClass: 'iconDiy', color: '#E59266' },
    { id: 'shopping', iconClass: 'iconDesign', color: '#F8A6B2' },
    { id: 'variant', iconClass: 'iconMap', color: '#82D5BB', hasNewMessage: true },
    { id: 'design', iconClass: 'iconVariant', color: '#8AC68A' },
    { id: 'map', iconClass: 'iconHelicopter', color: '#FC736D' },
    { id: 'chat', iconClass: 'iconChat', color: '#D1DA49' },
];

export const Phone: React.FC<PhoneProps> = ({ className }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');

    return (
        <div className={`${styles.phoneContainer} ${className || ''}`}>
            <div className={styles.phone}>
                <div className={styles.screenContent}>
                    <div className={styles.homeScreen}>
                        <div className={styles.dateDisplay}>
                            <div className={styles.dateDisplayHeader}>
                                <span className={styles.iconWifi} />
                                <div>{displayHours}<span className={styles.blink}>:</span>{displayMinutes}{ampm}</div>
                                <span className={styles.iconLocation} />
                            </div>
                            <div className={styles.dayText}>Welcome!</div>
                        </div>
                        <div className={styles.appsGrid}>
                            {apps.map((app) => (
                                <div
                                    key={app.id}
                                    className={`${styles.appItem} ${app.offset ? styles.appItemOffset : ''}`}
                                    style={{ backgroundColor: app.color }}
                                >
                                    {app.hasNewMessage && <span className={styles.badge} />}
                                    <span
                                        className={`${styles.appIcon} ${styles[app.iconClass]} ${app.offset ? styles.appIconOffset : ''}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={styles.pageIndicator}>
                            <span className={styles.iconPage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
