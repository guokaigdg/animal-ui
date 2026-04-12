import React from 'react';
import styles from './inventoryInstructions.module.less';

const asset = (name: string) => new URL(`./assets/${name}`, import.meta.url).href;

export interface InventoryInstructionsProps {
  className?: string;
}

// Inventory item icons for the grid
const INVENTORY_ITEMS_ROW1 = [
  'image_6.png', 'image_7.png', 'image_8.png', 'image_9.png',
  'image_7.png', 'image_7.png', 'image_7.png', 'image_7.png', 'image_7.png', 'image_7.png'
];

const INVENTORY_ITEMS_ROW2 = Array(10).fill('image_7.png');

// Scene inventory items
const SCENE_ITEMS_ROW1 = [
  'image_6.png', 'image_25.png', 'image_26.png', 'image_27.png',
  'image_28.png', 'image_7.png', 'image_7.png', 'image_29.png', 'image_30.png', 'image_7.png'
];

const SCENE_ITEMS_ROW2 = [
  'image_7.png', 'image_31.png', 'image_32.png', 'image_7.png',
  'image_7.png', 'image_7.png', 'image_7.png', 'image_7.png', 'image_7.png', 'image_7.png'
];

// Clothes menu items
const CLOTHES_ITEMS_ROW1 = ['image_11.png', 'image_12.png', 'image_13.png', 'image_14.png', 'image_15.png'];
const CLOTHES_ITEMS_ROW2 = Array(5).fill('image_16.png');

// Step Instruction Component
const StepInstruction: React.FC<{
  step: number;
  text: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  multiLine?: boolean;
}> = ({ step, text, image, imageWidth, imageHeight, multiLine = false }) => (
  <div className={styles.stepInstruction}>
    <div className={styles.stepNumber}>
      <img src={asset('image_1.png')} alt="" />
      <span>{step}</span>
    </div>
    <div className={styles.stepContent}>
      <p className={`${styles.stepText} ${multiLine ? styles.multiLine : ''}`}>{text}</p>
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

// Inventory Item Component
const InventoryItem: React.FC<{ icon: string; isEmpty?: boolean }> = ({ icon, isEmpty = false }) => (
  <div className={`${styles.inventoryItem} ${isEmpty ? styles.empty : ''}`}>
    {isEmpty ? (
      <img src={asset(icon)} alt="" className={styles.emptyIcon} />
    ) : (
      <img src={asset(icon)} alt="" />
    )}
  </div>
);

// Inventory Grid Component
const InventoryGrid: React.FC<{
  row1Items: string[];
  row2Items: string[];
}> = ({ row1Items, row2Items }) => (
  <div className={styles.inventoryGrid}>
    <div className={styles.inventoryRow}>
      {row1Items.map((item, index) => (
        <InventoryItem key={`row1-${index}`} icon={item} isEmpty={item === 'image_7.png'} />
      ))}
    </div>
    <div className={styles.inventoryRow}>
      {row2Items.map((item, index) => (
        <InventoryItem key={`row2-${index}`} icon={item} isEmpty={true} />
      ))}
    </div>
  </div>
);

// Inventory Component
const Inventory: React.FC<{
  row1Items?: string[];
  row2Items?: string[];
}> = ({ row1Items = INVENTORY_ITEMS_ROW1, row2Items = INVENTORY_ITEMS_ROW2 }) => (
  <div className={styles.inventory}>
    <img src={asset('image_5.png')} alt="" className={styles.inventoryBg} />
    <div className={styles.inventoryContent}>
      <InventoryGrid row1Items={row1Items} row2Items={row2Items} />
    </div>
  </div>
);

// Clothes Menu Item Component
const ClothesMenuItem: React.FC<{ icon: string; isEmpty?: boolean }> = ({ icon, isEmpty = false }) => (
  <div className={`${styles.clothesItem} ${isEmpty ? styles.empty : ''}`}>
    <img src={asset(icon)} alt="" />
  </div>
);

// Inventory Clothes Menu Component
const InventoryClothesMenu: React.FC = () => (
  <div className={styles.clothesMenu}>
    <img src={asset('image_10.png')} alt="" className={styles.clothesMenuBg} />
    <div className={styles.clothesMenuContent}>
      <div className={styles.clothesMenuGrid}>
        <div className={styles.clothesRow}>
          {CLOTHES_ITEMS_ROW1.map((item, index) => (
            <ClothesMenuItem key={`clothes1-${index}`} icon={item} />
          ))}
        </div>
        <div className={styles.clothesRow}>
          {CLOTHES_ITEMS_ROW2.map((item, index) => (
            <ClothesMenuItem key={`clothes2-${index}`} icon={item} isEmpty={true} />
          ))}
        </div>
      </div>
      <div className={styles.clothesMenuText}>Remove what?</div>
    </div>
  </div>
);

// Inventory Clothes Icon Component
const InventoryClothesIcon: React.FC<{ iconImage?: string }> = ({ iconImage = 'image_18.png' }) => (
  <div className={styles.clothesIcon}>
    <img src={asset('image_17.png')} alt="" className={styles.clothesIconBg} />
    <div className={styles.clothesIconContent}>
      <img src={asset(iconImage)} alt="" />
    </div>
    <img src={asset('image_19.png')} alt="" className={styles.clothesIconOverlay} />
  </div>
);

// Tool Tip Component
const ToolTip: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.toolTip}>
    <div className={styles.toolTipArrow}>
      <img src={asset('image_4.png')} alt="" />
    </div>
    <div className={styles.toolTipContent}>
      <span>{text}</span>
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
    <img src={asset('image_24.png')} alt="" />
    <span className={styles.bubbleText}>{text}</span>
  </div>
);

// Pointer Component
const Pointer: React.FC = () => (
  <div className={styles.pointer}>
    <img src={asset('image_36.png')} alt="" />
  </div>
);

// Left Content Panel
const LeftContentPanel: React.FC = () => (
  <div className={styles.leftPanel}>
    <h1 className={styles.mainTitle}>
      Clean up your ANCH inventory!
    </h1>
    <p className={styles.subTitle}>
      Customize an ACNH blank screenshot & add the UI components for each scene!
    </p>
  </div>
);

// Playground Header
const PlaygroundHeader: React.FC = () => (
  <div className={styles.playgroundHeader}>
    <span>Playground</span>
    <img src={asset('image_21.png')} alt="" />
  </div>
);

// Scene Buttons Component
const SceneButtons: React.FC<{ variant?: 'top' | 'bottom' }> = ({ variant = 'top' }) => {
  if (variant === 'bottom') {
    return (
      <div className={styles.sceneButtons}>
        <ActionButton icon="image_33.png" text="Close" width={196} />
        <ActionButton icon="image_20.png" text="Select" width={207} />
      </div>
    );
  }

  return (
    <div className={styles.topButton}>
      <ActionButton icon="image_20.png" text="Text" />
    </div>
  );
};

export const InventoryInstructions: React.FC<InventoryInstructionsProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      {/* Left Panel (Green) */}
      <section className={styles.leftSection}>
        <LeftContentPanel />
      </section>

      {/* Inventory Section */}
      <section className={styles.inventorySection}>
        <Inventory />
      </section>

      {/* Step 1 */}
      <section className={styles.step1Section}>
        <StepInstruction
          step={1}
          text='Select the "Inventory" asset & select one of the "Items".'
          image="image_22.png"
          imageWidth={548.18}
          imageHeight={181.76}
        />
      </section>

      {/* Step 2 */}
      <section className={styles.step2Section}>
        <StepInstruction
          step={2}
          text='In the design panel, Item Category allows you to select overall categories. Select the category "Fish River".'
          image="image_2.png"
          imageWidth={709.57}
          imageHeight={207.6}
          multiLine
        />
        <p className={styles.step2Note}>
          Notice that the other filters remain empty except "Fish Type"!
        </p>
        <img
          src={asset('image_3.png')}
          alt=""
          className={styles.step2Image}
        />
      </section>

      {/* Tool Tip */}
      <section className={styles.toolTipSection}>
        <ToolTip text='You can also just use the filters if you already know what you are looking for! The "Item Category" will automatically update!' />
      </section>

      {/* Clothes Menu Section */}
      <section className={styles.clothesMenuSection}>
        <InventoryClothesIcon />
        <SceneButtons variant="top" />
        <IconTextBubble text="Hat" />
        <PlaygroundHeader />
      </section>

      {/* Step 4 */}
      <section className={styles.step4Section}>
        <StepInstruction
          step={4}
          text='Optional: Add the "Inventory Clothes Menu" and follow steps 1 & 2 to swap out different clothes!'
        />
      </section>

      {/* Scene Section 1 */}
      <section className={styles.scene1Section}>
        <img src={asset('image_23.png')} alt="" className={styles.sceneBg} />
        <IconTextBubble text="Hat" />
      </section>

      {/* Scene Section 2 (with overlay) */}
      <section className={styles.scene2Section}>
        <img src={asset('image_23.png')} alt="" className={styles.sceneBg} />
        <div className={styles.sceneOverlay}>
          <Inventory row1Items={SCENE_ITEMS_ROW1} row2Items={SCENE_ITEMS_ROW2} />
          <InventoryClothesMenu />
          <img src={asset('image_34.png')} alt="" className={styles.sceneCursor} />
          <InventoryClothesIcon iconImage="image_35.png" />
          <Pointer />
          <IconTextBubble text="Hat" />
        </div>
        <SceneButtons variant="bottom" />
      </section>
    </div>
  );
};

InventoryInstructions.displayName = 'InventoryInstructions';
