import React from 'react';
import styles from './playgroundInstructions.module.less';

const asset = (name: string) => new URL(`./assets/${name}`, import.meta.url).href;

// App color configurations
const APP_COLORS = [
  'rgba(183,125,238,1)', // purple
  'rgba(247,205,103,1)', // yellow
  'rgba(236,223,82,1)',  // lime
  'rgba(154,131,90,1)',  // brown
  'rgba(248,166,178,1)', // pink
  'rgba(130,213,187,1)', // teal
  'rgba(209,218,73,1)',  // green
];

// App icon images mapping
const APP_ICONS = [
  { bg: 'image_54.png', icon: ['image_2.png', 'image_3.png', 'image_4.png'] },
  { bg: 'image_5.png', icon: [] },
  { bg: 'image_72.png', icon: ['image_29.png', 'image_30.png', 'image_31.png'] },
  { bg: 'image_14.png', icon: ['image_15.png', 'image_16.png', 'image_17.png'] },
  { bg: 'image_76.png', icon: ['image_18.png', 'image_19.png', 'image_20.png'] },
  { bg: 'image_56.png', icon: ['image_57.png', 'image_58.png', 'image_59.png', 'image_60.png'] },
  { bg: 'image_77.png', icon: ['image_26.png', 'image_27.png', 'image_28.png'] },
  { bg: 'image_80.png', icon: ['image_21.png', 'image_22.png', 'image_23.png', 'image_24.png', 'image_25.png'] },
  { bg: 'image_81.png', icon: ['image_40.png', 'image_41.png'] },
];

export interface PlaygroundInstructionsProps {
  className?: string;
}

// Wifi Icon Component
const WifiIcon: React.FC = () => (
  <div className={styles.wifiIcon}>
    <div className={styles.wifiBars}>
      <div className={styles.wifiBar1}>
        <img src={asset('image_44.png')} alt="" />
      </div>
      <div className={styles.wifiBar2}>
        <img src={asset('image_44.png')} alt="" />
        <img src={asset('image_44.png')} alt="" />
      </div>
      <img src={asset('image_45.png')} alt="" className={styles.wifiBar3} />
    </div>
    <img src={asset('image_46.png')} alt="" className={styles.wifiSignal} />
  </div>
);

// Time Display Component
const TimeDisplay: React.FC<{ time?: string }> = ({ time = '11:05 PM' }) => (
  <div className={styles.timeDisplay}>
    <span>{time}</span>
  </div>
);

// Phone Details Component (header bar)
const PhoneDetails: React.FC = () => (
  <div className={styles.phoneDetails}>
    <WifiIcon />
    <TimeDisplay />
    <img src={asset('image_49.png')} alt="" className={styles.batteryIcon} />
  </div>
);

// Page Indicators Component
const PageIndicators: React.FC = () => (
  <div className={styles.pageIndicators}>
    <img src={asset('image_50.png')} alt="" />
    <div className={styles.pageDot}>
      <img src={asset('image_43.png')} alt="" />
    </div>
  </div>
);

// App Icon Component
const AppIcon: React.FC<{ index: number; variant?: 'grid' | 'list' }> = ({ index, variant = 'grid' }) => {
  const appData = APP_ICONS[index] || APP_ICONS[0];
  const color = APP_COLORS[index % APP_COLORS.length];

  return (
    <div className={styles.appIcon} style={{ backgroundColor: color }}>
      {appData.bg && (
        <img 
          src={asset(appData.bg)} 
          alt="" 
          className={styles.appBg}
        />
      )}
    </div>
  );
};

// Phone Apps Grid Component
const PhoneAppsGrid: React.FC = () => {
  const apps = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className={styles.appsGrid}>
      {apps.map((_, index) => (
        <AppIcon key={index} index={index} />
      ))}
    </div>
  );
};

// Phone Background Component
const PhoneBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className={styles.phoneBackground}>
    <div className={styles.phoneFrame}>
      {children}
    </div>
  </div>
);

// Phone Content Component
const PhoneContent: React.FC = () => (
  <div className={styles.phoneContent}>
    <PhoneDetails />
    <div className={styles.welcomeText}>Welcome!</div>
    <PhoneAppsGrid />
    <PageIndicators />
  </div>
);

// Step Instruction Component
const StepInstruction: React.FC<{ step: number; text: string }> = ({ step, text }) => (
  <div className={styles.stepInstruction}>
    <div className={styles.stepNumber}>
      <img src={asset('image_52.png')} alt="" />
      <span>{step}</span>
    </div>
    <p className={styles.stepText}>{text}</p>
  </div>
);

// Tool Tip Component
const ToolTip: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.toolTip}>
    <div className={styles.toolTipArrow}>
      <img src={asset('image_53.png')} alt="" />
    </div>
    <div className={styles.toolTipContent}>
      <span>{text}</span>
    </div>
  </div>
);

// Apps Collection Component
const AppsCollection: React.FC = () => {
  const appImages = [
    'image_54.png', 'image_5.png', 'image_72.png',
    'image_14.png', 'image_76.png', 'image_56.png',
    'image_77.png', 'image_80.png', 'image_81.png',
    'image_82.png', 'image_70.png', 'image_61.png',
    'image_63.png', 'image_78.png', 'image_79.png',
  ];

  return (
    <div className={styles.appsCollection}>
      {appImages.map((img, index) => (
        <div key={index} className={styles.collectionApp}>
          <img src={asset(img)} alt="" />
        </div>
      ))}
    </div>
  );
};

// Left Content Panel
const LeftContentPanel: React.FC = () => (
  <div className={styles.leftPanel}>
    <h1 className={styles.mainTitle}>
      Create your own Nook Phone!
    </h1>
    <p className={styles.subTitle}>
      Customize an ACNH blank screenshot & add the UI components for each scene!
    </p>
  </div>
);

// Background Scene Component
const BackgroundScene: React.FC = () => (
  <div className={styles.backgroundScene}>
    <img src={asset('image_51.png')} alt="" className={styles.sceneImage} />
    <div className={styles.scenePhone}>
      <PhoneBackground>
        <PhoneDetails />
        <div className={styles.sceneWelcomeText}>Camera</div>
        <PhoneAppsGrid />
        <PageIndicators />
      </PhoneBackground>
    </div>
    <div className={styles.sceneButtons}>
      <button className={styles.sceneButton}>
        <img src={asset('image_98.png')} alt="" />
        <span>Put Away</span>
      </button>
      <button className={styles.sceneButton}>
        <img src={asset('image_92.png')} alt="" />
        <span>Select</span>
      </button>
    </div>
  </div>
);

export const PlaygroundInstructions: React.FC<PlaygroundInstructionsProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      {/* Left Panel */}
      <section className={styles.leftSection}>
        <LeftContentPanel />
      </section>

      {/* Phone Playground Section */}
      <section className={styles.playgroundSection}>
        <div className={styles.playgroundHeader}>
          <img src={asset('image_1.png')} alt="" />
          <h2>Playground</h2>
        </div>
        
        <PhoneBackground>
          <PhoneContent />
        </PhoneBackground>
      </section>

      {/* Instructions Section */}
      <section className={styles.instructionsSection}>
        <StepInstruction
          step={1}
          text='Select one of the phone apps (remove from group "Phone Apps" & drag it on the phone playground, where the Layout Grid columns meet.'
        />
        <StepInstruction
          step={2}
          text="Add Phone Details, Page Indicators and Welcome Text to allocated areas."
        />
        <StepInstruction
          step={3}
          text="Drag your Nook Phone on the top image & recreate the bottom scene!"
        />
        
        <ToolTip text='Search for "apps" under Assets if accidentally deleted' />
      </section>

      {/* Apps Collection */}
      <section className={styles.appsSection}>
        <AppsCollection />
      </section>

      {/* Background Scene */}
      <section className={styles.sceneSection}>
        <BackgroundScene />
      </section>
    </div>
  );
};

PlaygroundInstructions.displayName = 'PlaygroundInstructions';
