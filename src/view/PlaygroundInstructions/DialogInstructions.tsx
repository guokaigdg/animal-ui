import React from 'react';
import styles from './dialogInstructions.module.less';

const asset = (name: string) => new URL(`./assets/${name}`, import.meta.url).href;

export interface DialogInstructionsProps {
  className?: string;
}

// Dialog Name Tag Component
const DialogNameTag: React.FC<{
  text: string;
  selected?: boolean;
  width?: number;
}> = ({ text, selected = false, width }) => (
  <div
    className={`${styles.dialogNameTag} ${selected ? styles.selected : ''}`}
    style={width ? { width } : undefined}
  >
    <span>{text}</span>
  </div>
);

// Dialog Box Empty Component
const DialogBoxEmpty: React.FC<{
  showContinue?: boolean;
}> = ({ showContinue = true }) => (
  <div className={styles.dialogBoxEmpty}>
    <img src={asset('image_5.png')} alt="" className={styles.dialogBoxBg} />
    {showContinue && (
      <img src={asset('image_6.png')} alt="" className={styles.continueIcon} />
    )}
  </div>
);

// Dialog Box Text Content
const DialogBoxText: React.FC<{
  lines: string[];
}> = ({ lines }) => (
  <div className={styles.dialogBoxText}>
    {lines.map((line, index) => (
      <div key={index}>{line}</div>
    ))}
  </div>
);

// Dialog Box With Text No Name Tag Component
const DialogBoxWithText: React.FC<{
  lines: string[];
  showContinue?: boolean;
  bgImage?: string;
}> = ({ lines, showContinue = true, bgImage = 'image_5.png' }) => (
  <div className={styles.dialogBoxWithText}>
    <div className={styles.dialogBoxEmpty}>
      <img src={asset(bgImage)} alt="" className={styles.dialogBoxBg} />
      {showContinue && (
        <img src={asset('image_6.png')} alt="" className={styles.continueIcon} />
      )}
    </div>
    <DialogBoxText lines={lines} />
  </div>
);

// Dialog Box With Name Tag Component
const DialogBoxWithNameTag: React.FC<{
  nameTagImage: string;
  dialogLines: string[];
  dialogBgImage?: string;
}> = ({ nameTagImage, dialogLines, dialogBgImage = 'image_5.png' }) => (
  <div className={styles.dialogBoxWithNameTag}>
    <DialogBoxWithText lines={dialogLines} showContinue={false} bgImage={dialogBgImage} />
    <img src={asset(nameTagImage)} alt="" className={styles.nameTagImage} />
  </div>
);

// Menu Box Component
const MenuBox: React.FC<{
  options: { text: string; selected: boolean; width?: number }[];
  bgImage?: string;
}> = ({ options, bgImage = 'image_4.png' }) => (
  <div className={styles.menuBox}>
    <img src={asset(bgImage)} alt="" className={styles.menuBoxBg} />
    <div className={styles.menuBoxContent}>
      {options.map((option, index) => (
        <DialogNameTag
          key={index}
          text={option.text}
          selected={option.selected}
          width={option.width}
        />
      ))}
    </div>
  </div>
);

// Step Instruction Component
const StepInstruction: React.FC<{
  step: number;
  text: string | React.ReactNode;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}> = ({ step, text, image, imageWidth, imageHeight }) => (
  <div className={styles.stepInstruction}>
    <div className={styles.stepNumber}>
      <img src={asset('image_2.png')} alt="" />
      <span>{step}</span>
    </div>
    <div className={styles.stepContent}>
      {typeof text === 'string' ? (
        <p className={styles.stepText}>{text}</p>
      ) : (
        <div className={styles.stepTextContent}>{text}</div>
      )}
      {image && (
        <img
          src={asset(image)}
          alt=""
          className={styles.stepImage}
          style={{ width: imageWidth, height: imageHeight }}
        />
      )}
    </div>
  </div>
);

// Pointer Component
const Pointer: React.FC = () => (
  <div className={styles.pointer}>
    <img src={asset('image_13.png')} alt="" />
  </div>
);

// Left Content Panel
const LeftContentPanel: React.FC = () => (
  <div className={styles.leftPanel}>
    <h1 className={styles.mainTitle}>
      Create interactions between characters!
    </h1>
    <p className={styles.subTitle}>
      Customize an ACNH blank screenshot & add the UI components for each scene!
    </p>
  </div>
);

// Playground Header
const PlaygroundHeader: React.FC = () => (
  <div className={styles.playgroundHeader}>
    <img src={asset('image_1.png')} alt="" />
    <h2>Playground</h2>
  </div>
);

export const DialogInstructions: React.FC<DialogInstructionsProps> = ({ className }) => {
  const dialogLines = ['Lorem ipsum ', 'dolor sit amet, consectetur adipiscing'];

  const sceneDialogLines = [
    "I can get you something you don't",
    'have yet, or I can get you something',
    "expensive. So what's it going to be?"
  ];

  const menuOptions1 = [
    { text: 'Selected Text', selected: true, width: 331 },
    { text: 'Text', selected: false, width: 133 },
  ];

  const menuOptions2 = [
    { text: 'Something new.', selected: true, width: 384 },
    { text: 'Something expensive.', selected: false, width: 514 },
  ];

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {/* Left Panel (Green) */}
      <section className={styles.leftSection}>
        <LeftContentPanel />
      </section>

      {/* Playground Section */}
      <section className={styles.playgroundSection}>
        <PlaygroundHeader />
      </section>

      {/* Dialog Box Playground */}
      <section className={styles.dialogPlayground}>
        <DialogBoxWithNameTag
          nameTagImage="image_7.png"
          dialogLines={dialogLines}
        />
      </section>

      {/* Step 1 */}
      <section className={styles.step1Section}>
        <StepInstruction
          step={1}
          text={
            <>
              <p className={styles.stepTextLine}>
                Select the "Dialog Box, With Text & Name Tag" asset and check the design panel for dialog box options!
              </p>
              <p className={styles.stepTextLine}>
                Try & match your dialog box with the one in the picture!
              </p>
            </>
          }
          image="image_3.png"
          imageWidth={903.24}
          imageHeight={535.69}
        />
      </section>

      {/* Step 2 */}
      <section className={styles.step2Section}>
        <StepInstruction
          step={2}
          text={
            <>
              <p className={styles.stepTextLine}>
                Drag your dialog box asset on the top image & recreate the bottom scene!
              </p>
              <p className={styles.stepTextLine}>
                Select the "menu box" asset & use the design panel to switch the options!
              </p>
            </>
          }
        />
        <MenuBox options={menuOptions1} />
        <img
          src={asset('image_8.png')}
          alt=""
          className={styles.characterCursor}
        />
      </section>

      {/* Scene 1 - Background only */}
      <section className={styles.scene1Section}>
        <img src={asset('image_9.png')} alt="" className={styles.sceneBg} />
      </section>

      {/* Scene 2 - With overlays */}
      <section className={styles.scene2Section}>
        <img src={asset('image_9.png')} alt="" className={styles.sceneBg} />
        <div className={styles.sceneOverlay}>
          <div className={styles.sceneDialogBox}>
            <DialogBoxWithNameTag
              nameTagImage="image_11.png"
              dialogLines={sceneDialogLines}
              dialogBgImage="image_10.png"
            />
          </div>
          <MenuBox options={menuOptions2} bgImage="image_12.png" />
          <Pointer />
        </div>
      </section>
    </div>
  );
};

DialogInstructions.displayName = 'DialogInstructions';
