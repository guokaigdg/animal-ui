import React, { useState, useEffect } from 'react';
import styles from './phone.module.less';
import WifiSvg from './img/wifi.svg?react';
import LocationSvg from './img/location .svg?react';
import PageSvg from './img/page.svg?react';
import IconCameraSvg from './img/icon-camera.svg?react';
import IconAppSvg from './img/icon-app.svg?react';
import IconCritterpediaSvg from './img/icon-critterpedia.svg?react';
import IconDiySvg from './img/icon-diy.svg?react';
import IconHelicopterSvg from './img/icon-helicopter.svg?react';
import IconVariantSvg from './img/icon-variant.svg?react';
import IconDesignSvg from './img/icon-design.svg?react';
import IconMapSvg from './img/icon-map.svg?react';
import IconChatSvg from './img/icon-chat.svg?react';

export interface PhoneProps {
    className?: string;
}

interface App {
    id: string;
    icon: React.ReactNode;
    color: string;
    offset?: boolean;
    hasNewMessage?: boolean;
}

const apps: App[] = [
    { id: 'camera', icon: <IconCameraSvg />, color: '#B77DEE', hasNewMessage: true },
    { id: 'app', icon: <IconAppSvg />, color: '#889DF0', offset: true },
    { id: 'critterpedia', icon: <IconCritterpediaSvg />, color: '#F7CD67' },
    { id: 'diy', icon: <IconDiySvg />, color: '#E59266' },
    { id: 'shopping', icon: <IconDesignSvg />, color: '#F8A6B2' },
    { id: 'variant', icon: <IconMapSvg />, color: '#82D5BB', hasNewMessage: true },
    { id: 'design', icon: <IconVariantSvg />, color: '#8AC68A' },
    { id: 'map', icon: <IconHelicopterSvg />, color: '#FC736D' },
    { id: 'chat', icon: <IconChatSvg />, color: '#D1DA49' },
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
    const seconds = time.getSeconds();
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
                                    <WifiSvg />
                                    <div>{displayHours}<span className={styles.blink}>:</span>{displayMinutes}{ampm}</div>
                                    <LocationSvg />
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
                                        <span className={`${styles.appIcon} ${app.offset ? styles.appIconOffset : ''}`}>
                                            {app.icon}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.pageIndicator}>
                                <PageSvg />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};
