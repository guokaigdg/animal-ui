import React from 'react';
import styles from './nookShoppingInstructions.module.less';

const asset = (name: string) => new URL(`./assets/${name}`, import.meta.url).href;

export interface NookShoppingInstructionsProps {
  className?: string;
}

// Item Detail Row Component
const ItemDetailRow: React.FC<{
  icon: string;
  text: string;
  price: string;
  priceIcon: string;
  selected?: boolean;
  showCursor?: boolean;
  cursorImage?: string;
}> = ({ icon, text, price, priceIcon, selected = false, showCursor = false, cursorImage }) => (
  <div className={`${styles.itemDetailRow} ${selected ? styles.selected : ''}`}>
    {showCursor && cursorImage && (
      <img src={asset(cursorImage)} alt="" className={styles.rowCursor} />
    )}
    <div className={styles.rowContent}>
      <div className={styles.itemInfo}>
        <div className={styles.itemIcon}>
          <img src={asset(icon)} alt="" />
        </div>
        <span className={styles.itemText}>{text}</span>
      </div>
      <div className={styles.itemPrice}>
        <div className={styles.priceIcon}>
          <img src={asset(priceIcon)} alt="" />
        </div>
        <span className={styles.priceText}>{price}</span>
      </div>
    </div>
    <img src={asset('image_31.png')} alt="" className={styles.rowDivider} />
  </div>
);

// Money Icon Component
const MoneyIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <div className={styles.moneyIcon}>
    <img src={asset(icon)} alt="" />
  </div>
);

// Item Cost Tab Component
const ItemCostTab: React.FC<{ price: string }> = ({ price }) => (
  <div className={styles.itemCostTab}>
    <div className={styles.costContent}>
      <div className={styles.costDivider}></div>
      <div className={styles.costIcon}>
        <img src={asset('image_17.png')} alt="" />
      </div>
      <span className={styles.costText}>{price}</span>
    </div>
  </div>
);

// Nook Shopping Menu Component
const NookShoppingMenu: React.FC<{
  label: string;
  showLeftNav?: boolean;
  showRightNav?: boolean;
  icons?: string[];
}> = ({ label, showLeftNav = true, showRightNav = true, icons = [] }) => (
  <div className={styles.nookShoppingMenu}>
    <div className={styles.menuTab}>
      <div className={styles.tabDivider}></div>
      <span className={styles.tabLabel}>{label}</span>
      <div className={styles.tabDivider}></div>
    </div>
    <div className={styles.menuContent}>
      <div className={styles.menuBg}>
        <img src={asset('image_18.png')} alt="" />
      </div>
      {icons.map((icon, index) => (
        <div key={index} className={styles.menuIcon}>
          <img src={asset(icon)} alt="" />
        </div>
      ))}
      {showLeftNav && (
        <div className={styles.navButton}>
          <div className={styles.navBg}></div>
          <img src={asset('image_20.png')} alt="" />
        </div>
      )}
      {showRightNav && (
        <div className={styles.navButtonRight}>
          <img src={asset('image_21.png')} alt="" className={styles.navBgImg} />
          <img src={asset('image_22.png')} alt="" />
        </div>
      )}
    </div>
  </div>
);

// Scrollbar Component
const Scrollbar: React.FC<{ position: 'top' | 'bottom' }> = ({ position }) => (
  <div className={`${styles.scrollbar} ${styles[position]}`}>
    <div className={styles.scrollbarTrack}>
      <img src={asset('image_26.png')} alt="" />
    </div>
    <div className={styles.scrollbarThumb}>
      <div className={styles.thumbInner}></div>
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

// Step Instruction Component
const StepInstruction: React.FC<{ step: number; text: string }> = ({ step, text }) => (
  <div className={styles.stepInstruction}>
    <div className={styles.stepNumber}>
      <img src={asset('image_2.png')} alt="" />
      <span>{step}</span>
    </div>
    <p className={styles.stepText}>{text}</p>
  </div>
);

// Leaf Decoration Component
const LeafDecoration: React.FC<{ position: 'top' | 'bottom' }> = ({ position }) => {
  const leafCount = position === 'top' ? 5 : 6;
  const firstLeaf = position === 'bottom' ? 'image_15.png' : 'image_16.png';

  return (
    <div className={`${styles.leafDecoration} ${styles[position]}`}>
      {Array.from({ length: leafCount }).map((_, index) => (
        <div key={index} className={styles.leaf}>
          <img
            src={asset(index === 0 && position === 'bottom' ? firstLeaf : 'image_16.png')}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

// Background Shapes Component (simplified with decorative shapes)
const BackgroundShapes: React.FC = () => (
  <div className={styles.backgroundShapes}>
    {/* Simplified decorative shapes - rendered as positioned images */}
    {[
      { top: 33, left: 13, img: 'image_3.png' },
      { top: 16, left: 110, img: 'image_4.png' },
      { top: 0, left: 207, img: 'image_5.png' },
      { top: 88, left: 123, img: 'image_5.png' },
      { top: 173, left: 96, img: 'image_3.png' },
      { top: 139, left: 289, img: 'image_5.png' },
      { top: 399, left: 135, img: 'image_6.png' },
      { top: 485, left: 93, img: 'image_6.png' },
      { top: 558, left: 106, img: 'image_7.png' },
      { top: 525, left: 299, img: 'image_7.png' },
      { top: 491, left: 493, img: 'image_7.png' },
      { top: 660, left: 423, img: 'image_7.png' },
      { top: 717, left: 532, img: 'image_7.png' },
      { top: 751, left: 339, img: 'image_7.png' },
    ].map((shape, index) => (
      <div
        key={index}
        className={styles.shape}
        style={{ top: shape.top, left: shape.left }}
      >
        <img src={asset(shape.img)} alt="" />
      </div>
    ))}
  </div>
);

// Nook Shopping Background Component
const NookShoppingBackground: React.FC<{
  children?: React.ReactNode;
  showItemRows?: boolean;
}> = ({ children, showItemRows = false }) => (
  <div className={styles.nookShoppingBackground}>
    <BackgroundShapes />
    {/* Top border */}
    <div className={styles.borderTop}>
      <img src={asset('image_11.png')} alt="" />
    </div>
    <div className={styles.borderTopInner}>
      <img src={asset('image_12.png')} alt="" />
    </div>
    {/* Bottom border */}
    <div className={styles.borderBottom}>
      <img src={asset('image_13.png')} alt="" />
    </div>
    <div className={styles.borderBottomInner}>
      <img src={asset('image_14.png')} alt="" />
    </div>
    {/* Leaf decorations */}
    <LeafDecoration position="top" />
    <LeafDecoration position="bottom" />
    {children}
  </div>
);

// Left Content Panel
const LeftContentPanel: React.FC = () => (
  <div className={styles.leftPanel}>
    <h1 className={styles.mainTitle}>Nook Shopping Menu</h1>
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

export const NookShoppingInstructions: React.FC<NookShoppingInstructionsProps> = ({ className }) => {
  const itemRows = Array.from({ length: 9 }, (_, i) => ({
    icon: 'image_29.png',
    text: 'Text',
    price: '000,000',
    priceIcon: 'image_30.png',
  }));

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {/* Left Panel (Orange) */}
      <section className={styles.leftSection}>
        <LeftContentPanel />
      </section>

      {/* Playground Header */}
      <section className={styles.playgroundSection}>
        <PlaygroundHeader />
      </section>

      {/* Step 1 */}
      <section className={styles.step1Section}>
        <StepInstruction
          step={1}
          text="Select the Item Detail rows and create a group with 9 rows."
        />
      </section>

      {/* Step 2 */}
      <section className={styles.step2Section}>
        <StepInstruction
          step={2}
          text='Add Phone Details, Page Indicators and Welcome Text to allocated areas.'
        />
      </section>

      {/* Nook Shopping Background (Instruction view) */}
      <section className={styles.shoppingSection}>
        <NookShoppingBackground />
        <ItemCostTab price="000" />
        <NookShoppingMenu label="Seasonal" icons={['image_19.png', 'image_24.png']} />
        <Scrollbar position="top" />
        <Scrollbar position="bottom" />
        <ActionButton icon="image_27.png" text="Text" />
        <div className={styles.actionIcon}>
          <img src={asset('image_28.png')} alt="" />
        </div>
        <ItemDetailRow
          icon="image_29.png"
          text="Text"
          price="000,000"
          priceIcon="image_30.png"
        />
        <ItemDetailRow
          icon="image_33.png"
          text="Text"
          price="000,000"
          priceIcon="image_34.png"
          selected
          showCursor
          cursorImage="image_36.png"
        />
      </section>

      {/* Cursor decoration */}
      <img
        src={asset('image_37.png')}
        alt=""
        className={styles.cursorDecoration}
      />

      {/* Scene Section (final view) */}
      <section className={styles.sceneSection}>
        <NookShoppingBackground showItemRows>
          {/* Item rows in scene */}
          <div className={styles.sceneItemRows}>
            {itemRows.map((row, index) => (
              <ItemDetailRow
                key={index}
                icon={row.icon}
                text={row.text}
                price={row.price}
                priceIcon={row.priceIcon}
              />
            ))}
          </div>
          <ItemCostTab price="1,250" />
          <NookShoppingMenu
            label="Daily Selection"
            icons={['image_39.png', 'image_19.png']}
          />
          <Scrollbar position="top" />
          <div className={styles.sceneButtons}>
            <ActionButton icon="image_43.png" text="Back" width={182} />
            <ActionButton icon="image_27.png" text="Select" width={207} />
          </div>
        </NookShoppingBackground>
      </section>
    </div>
  );
};

NookShoppingInstructions.displayName = 'NookShoppingInstructions';
