import React from 'react';
import styles from './weaponWheelInstructions.module.less';

const asset = (name: string) => new URL(`./assets/${name}`, import.meta.url).href;

export interface WeaponWheelInstructionsProps {
  className?: string;
}

// Weapon Circle Position Configuration
const WEAPON_POSITIONS = [
  { top: 0, left: 198.63, icon: 'image_8.png', size: 107 },         // Top
  { top: 56.54, left: 63.08, icon: 'image_10.png', size: 112.92 },  // Top-left
  { top: 56.54, left: 340.08, icon: 'image_4.png', size: 112.92 },  // Top-right
  { top: 196.96, left: 0, icon: 'image_9.png', size: 107 },         // Left
  { top: 196.96, left: 396.54, icon: 'image_4.png', size: 112.92, hasStar: true }, // Right (selected)
  { top: 337.46, left: 63.08, icon: 'image_9.png', size: 107 },     // Bottom-left
  { top: 337.46, left: 340.08, icon: 'image_9.png', size: 107 },    // Bottom-right
  { top: 393.92, left: 198.63, icon: 'image_9.png', size: 107 },    // Bottom
];

// Scene Weapon Positions (for the bottom scene)
const SCENE_WEAPON_POSITIONS = [
  { top: 0, left: 198.63, icon: 'image_23.png', size: 112.92 },
  { top: 56.54, left: 63.08, icon: 'image_25.png', size: 112.92 },
  { top: 56.54, left: 340.08, icon: 'image_29.png', size: 112.92 },
  { top: 196.96, left: 0, icon: 'image_24.png', size: 112.92 },
  { top: 196.96, left: 396.54, icon: 'image_28.png', size: 112.92, hasStar: true },
  { top: 337.46, left: 63.08, icon: 'image_27.png', size: 112.92 },
  { top: 337.46, left: 340.08, icon: 'image_26.png', size: 112.92 },
  { top: 393.92, left: 198.63, icon: 'image_22.png', size: 112.92 },
];

// Weapon Circle Component
const WeaponCircle: React.FC<{
  icon: string;
  size: number;
  hasStar?: boolean;
  variant?: 'default' | 'active';
}> = ({ icon, size, hasStar = false, variant = 'default' }) => {
  const circleBg = variant === 'active' ? 'image_11.png' : 'image_3.png';

  return (
    <div
      className={styles.weaponCircle}
      style={{ width: size, height: size }}
    >
      <img
        src={asset(circleBg)}
        alt=""
        className={styles.circleBackground}
      />
      <div className={styles.circleIcon}>
        <img src={asset(icon)} alt="" />
      </div>
      {hasStar && (
        <div className={styles.starIndicator}>
          <img src={asset('image_5.png')} alt="" />
          <img src={asset('image_6.png')} alt="" />
        </div>
      )}
    </div>
  );
};

// Weapon Wheel Component
const WeaponWheel: React.FC<{ positions: typeof WEAPON_POSITIONS }> = ({ positions }) => (
  <div className={styles.weaponWheel}>
    {positions.map((pos, index) => (
      <div
        key={index}
        className={styles.weaponPosition}
        style={{ top: pos.top, left: pos.left }}
      >
        <WeaponCircle
          icon={pos.icon}
          size={pos.size}
          hasStar={pos.hasStar}
        />
      </div>
    ))}
  </div>
);

// Step Instruction Component
const StepInstruction: React.FC<{
  step: number;
  text: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}> = ({ step, text, image, imageWidth, imageHeight }) => (
  <div className={styles.stepInstruction}>
    <div className={styles.stepNumber}>
      <img src={asset('image_17.png')} alt="" />
      <span>{step}</span>
    </div>
    <div className={styles.stepContent}>
      <p className={styles.stepText}>{text}</p>
      {image && (
        <img
          src={asset(image)}
          alt=""
          style={{ width: imageWidth, height: imageHeight }}
        />
      )}
    </div>
  </div>
);

// Action Button Component
const ActionButton: React.FC<{ icon: string; text: string; width?: number }> = ({
  icon,
  text,
  width = 170,
}) => (
  <div className={styles.actionButton} style={{ width }}>
    <div className={styles.buttonContent}>
      <div className={styles.buttonIcon}>
        <img src={asset(icon)} alt="" />
      </div>
      <span className={styles.buttonText}>{text}</span>
    </div>
  </div>
);

// Icon Text Bubble Component
const IconTextBubble: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.iconTextBubble}>
    <img src={asset('image_15.png')} alt="" />
    <span className={styles.bubbleText}>{text}</span>
  </div>
);

// Pointer Component
const Pointer: React.FC<{ direction?: 'left' | 'right' }> = ({ direction = 'left' }) => (
  <div className={`${styles.pointer} ${styles[direction]}`}>
    <img src={asset('image_16.png')} alt="" />
  </div>
);

// Left Content Panel
const LeftContentPanel: React.FC = () => (
  <div className={styles.leftPanel}>
    <h1 className={styles.mainTitle}>
      Swap the tools in your "weapon wheel"!
    </h1>
    <p className={styles.subTitle}>
      Customize an ACNH blank screenshot & add the UI components for each scene!
    </p>
  </div>
);

// Playground Header
const PlaygroundHeader: React.FC = () => (
  <div className={styles.playgroundHeader}>
    <img src={asset('image_20.png')} alt="" />
    <h2>Playground</h2>
  </div>
);

// Scene Buttons Component
const SceneButtons: React.FC<{ variant?: 'top' | 'bottom' }> = ({ variant = 'top' }) => {
  if (variant === 'bottom') {
    return (
      <div className={styles.sceneButtonsLarge}>
        <ActionButton icon="image_14.png" text="Remove/Register" width={425} />
        <ActionButton icon="image_14.png" text="Cancel" width={219} />
        <ActionButton icon="image_14.png" text="Hold" width={177} />
      </div>
    );
  }

  return (
    <div className={styles.sceneButtons}>
      <ActionButton icon="image_12.png" text="Text" />
      <ActionButton icon="image_13.png" text="Text" />
      <ActionButton icon="image_14.png" text="Text" />
    </div>
  );
};

export const WeaponWheelInstructions: React.FC<WeaponWheelInstructionsProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      {/* Left Panel (Yellow) */}
      <section className={styles.leftSection}>
        <LeftContentPanel />
      </section>

      {/* Playground Section */}
      <section className={styles.playgroundSection}>
        <PlaygroundHeader />
        <WeaponWheel positions={WEAPON_POSITIONS} />
      </section>

      {/* Instructions Column 1 */}
      <section className={styles.instructionsColumn1}>
        <StepInstruction
          step={1}
          text='Select the weapon wheel circle & click on one of the "weapon circle with icon" to change it. In the design panel, click on the "Property 1" drop-down to select one of the mentioned: Default/Grabbed/Currently Using'
          image="image_18.png"
          imageWidth={773.14}
          imageHeight={243.46}
        />
        <StepInstruction
          step={2}
          text='In the Layers section, select "Items" under the selected "Weapon Circle with Icon".'
          image="image_19.png"
          imageWidth={755.89}
          imageHeight={330.24}
        />
      </section>

      {/* Instructions Column 2 */}
      <section className={styles.instructionsColumn2}>
        <StepInstruction
          step={3}
          text='In the design panel, click on the "Tool Type" drop-down & select the desired tool.'
          image="image_2.png"
          imageWidth={774.72}
          imageHeight={330.1}
        />
        <StepInstruction
          step={4}
          text="Drag your weapon wheel circle on the top image & recreate the bottom scene!"
        />
      </section>

      {/* Buttons Section */}
      <section className={styles.buttonsSection}>
        <SceneButtons />
        <IconTextBubble text="Text" />
        <Pointer direction="right" />
      </section>

      {/* Background Scene Section */}
      <section className={styles.sceneSection}>
        <div className={styles.sceneImage}>
          <img src={asset('image_21.png')} alt="" />
        </div>
        <div className={styles.sceneWeaponWheel}>
          <WeaponWheel positions={SCENE_WEAPON_POSITIONS} />
        </div>
        <IconTextBubble text="Pole" />
        <Pointer direction="left" />
        <SceneButtons variant="bottom" />
      </section>
    </div>
  );
};

WeaponWheelInstructions.displayName = 'WeaponWheelInstructions';
