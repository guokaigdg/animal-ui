import React from 'react';
import styles from './recipeInfoInstructions.module.less';

export interface RecipeInfoInstructionsProps {
  className?: string;
}

// Asset helper for recipe-specific images
const recipeAsset = (name: string) => new URL(`./assets/recipe/${name}`, import.meta.url).href;

// ============================================
// Recipe Card Components
// ============================================

interface RecipeCardProps {
  backgroundImg: string;
  iconImg: string;
  iconOffsetTop?: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ backgroundImg, iconImg, iconOffsetTop = 60.26 }) => (
  <div className={styles.recipeCard}>
    <div className={styles.cardBacking} />
    <img
      src={recipeAsset(backgroundImg)}
      alt=""
      className={styles.cardBackground}
    />
    <div className={styles.cardIcon} style={{ top: `${iconOffsetTop}px` }}>
      <img src={recipeAsset(iconImg)} alt="" />
    </div>
  </div>
);

// Recipe card data for playground row
const PLAYGROUND_CARDS: RecipeCardProps[] = [
  { backgroundImg: 'image_4.png', iconImg: 'image_5.png' },      // Miscellaneous
  { backgroundImg: 'image_4.png', iconImg: 'image_6.png' },      // Decor/Fences
  { backgroundImg: 'image_4.png', iconImg: 'image_7.png' },      // Furniture Sets
  { backgroundImg: 'image_4.png', iconImg: 'image_13.png' },     // Unique Clothes
  { backgroundImg: 'image_4.png', iconImg: 'image_8.png' },      // Home Decoration
  { backgroundImg: 'image_11.png', iconImg: 'image_12.png', iconOffsetTop: 66.92 }, // Tools
  { backgroundImg: 'image_9.png', iconImg: 'image_10.png' },     // Musical Instruments
];

// Recipe card data for grid rows
const GRID_ROW_1: RecipeCardProps[] = [
  { backgroundImg: 'image_9.png', iconImg: 'image_7.png' },
  { backgroundImg: 'image_9.png', iconImg: 'image_13.png' },
  { backgroundImg: 'image_14.png', iconImg: 'image_8.png' },
  { backgroundImg: 'image_14.png', iconImg: 'image_12.png', iconOffsetTop: 66.92 },
  { backgroundImg: 'image_15.png', iconImg: 'image_10.png' },
];

const GRID_ROW_2: RecipeCardProps[] = [
  { backgroundImg: 'image_9.png', iconImg: 'image_7.png' },
  { backgroundImg: 'image_9.png', iconImg: 'image_13.png' },
  { backgroundImg: 'image_14.png', iconImg: 'image_8.png' },
  { backgroundImg: 'image_14.png', iconImg: 'image_12.png', iconOffsetTop: 66.92 },
  { backgroundImg: 'image_15.png', iconImg: 'image_10.png' },
];

const GRID_ROW_3: RecipeCardProps[] = [
  { backgroundImg: 'image_16.png', iconImg: 'image_7.png' },
  { backgroundImg: 'image_16.png', iconImg: 'image_13.png' },
  { backgroundImg: 'image_17.png', iconImg: 'image_8.png' },
  { backgroundImg: 'image_17.png', iconImg: 'image_12.png', iconOffsetTop: 66.92 },
  { backgroundImg: 'image_17.png', iconImg: 'image_10.png' },
];

// ============================================
// Step Instruction Component
// ============================================

const StepInstruction: React.FC<{ step: number; text: string; className?: string }> = ({
  step,
  text,
  className,
}) => (
  <div className={`${styles.stepInstruction} ${className || ''}`}>
    <div className={styles.stepNumber}>
      <img src={recipeAsset('image_3.png')} alt="" />
      <span>{step}</span>
    </div>
    <p className={styles.stepText}>{text}</p>
  </div>
);

// ============================================
// Recipe Menu Component
// ============================================

const MENU_ICONS = [
  { img: 'image_19.png', width: 46.92, height: 56.45 },
  { img: 'image_20.png', width: 51.95, height: 55.27 },
  { img: 'image_21.png', width: 47.82, height: 40.74 },
  { img: 'image_22.png', width: 49.46, height: 49.61 },
  { img: 'image_23.png', width: 61.03, height: 55.33 },
  { img: 'image_24.png', width: 57.21, height: 52.57 },
  { img: 'image_26.png', width: 45.16, height: 48.17 },
  { img: 'image_28.png', width: 47.15, height: 52.10 },
  { img: 'image_25.png', width: 59.28, height: 58.12 },
  { img: 'image_27.png', width: 68.98, height: 68.98 },
];

const EverythingGrid: React.FC = () => (
  <div className={styles.everythingGrid}>
    {Array.from({ length: 3 }, (_, row) => (
      <div key={row} className={styles.gridRow}>
        {Array.from({ length: 3 }, (_, col) => (
          <div key={col} className={styles.gridDot} />
        ))}
      </div>
    ))}
  </div>
);

const RecipeMenu: React.FC = () => (
  <nav className={styles.recipeMenu}>
    <div className={styles.menuTab}>
      <div className={styles.tabDivider} />
      <span className={styles.tabLabel}>Everything</span>
      <div className={styles.tabDivider} />
    </div>
    <div className={styles.menuContent}>
      <div className={styles.navButton}>
        <div className={styles.navBg} />
        <img src={recipeAsset('image_29.png')} alt="prev" className={styles.navIcon} />
      </div>
      <div className={styles.menuIconsBar}>
        <img src={recipeAsset('image_18.png')} alt="" className={styles.menuBarBg} />
        <div className={styles.menuIcons}>
          <EverythingGrid />
          {MENU_ICONS.map((icon, i) => (
            <div key={i} className={styles.menuIconItem}>
              <img
                src={recipeAsset(icon.img)}
                alt=""
                style={{ width: `${icon.width}px`, height: `${icon.height}px` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.navButton}>
        <img src={recipeAsset('image_30.png')} alt="" className={styles.navBgImg} />
        <img src={recipeAsset('image_31.png')} alt="next" className={styles.navIcon} />
      </div>
    </div>
  </nav>
);

// ============================================
// Recipe Info Panel Component
// ============================================

const RecipeInfoBackground: React.FC = () => (
  <div className={styles.recipeInfoBg}>
    <img src={recipeAsset('image_1.png')} alt="" className={styles.recipeInfoImage} />
  </div>
);

// ============================================
// Recipe Name with Dotted Line
// ============================================

const RecipeNameItem: React.FC = () => (
  <div className={styles.recipeName}>
    <div className={styles.nameContent}>
      <div className={styles.nameIcon}>
        <img src={recipeAsset('image_32.png')} alt="" className={styles.nameIconBg} />
        <div className={styles.nameIconDetails}>
          <img src={recipeAsset('image_33.png')} alt="" className={styles.nameIconDot} />
          <img src={recipeAsset('image_34.png')} alt="" className={styles.nameIconBar} />
          <img src={recipeAsset('image_33.png')} alt="" className={styles.nameIconDot} />
        </div>
      </div>
      <span className={styles.nameText}>Jail bars</span>
    </div>
    <img src={recipeAsset('image_35.png')} alt="" className={styles.dottedLine} />
  </div>
);

// ============================================
// Recipe Size / Pockets / Storage
// ============================================

const SizeIcon: React.FC = () => (
  <div className={styles.sizeIcon}>
    <div className={styles.sizeIconDot} />
    <div className={styles.sizeIconBorder}>
      <div className={styles.sizeIconCross}>
        <div className={styles.crossVertical}>
          <img src={recipeAsset('image_36.png')} alt="" />
          <img src={recipeAsset('image_36.png')} alt="" />
        </div>
        <div className={styles.crossHorizontal}>
          <img src={recipeAsset('image_37.png')} alt="" />
          <img src={recipeAsset('image_37.png')} alt="" />
        </div>
      </div>
    </div>
  </div>
);

const RecipeSizeInfo: React.FC = () => (
  <div className={styles.recipeSizeInfo}>
    <div className={styles.sizeSection}>
      <SizeIcon />
      <span className={styles.sizeText}>2.0x0.5</span>
    </div>
    <div className={styles.pocketsStorageSection}>
      <div className={styles.pocketsInfo}>
        <img src={recipeAsset('image_38.png')} alt="" className={styles.bagIcon} />
        <span className={styles.infoText}>Pockets:0</span>
      </div>
      <div className={styles.storageInfo}>
        <img src={recipeAsset('image_39.png')} alt="" className={styles.storageIcon} />
        <span className={styles.infoText}>Storage:0</span>
      </div>
    </div>
  </div>
);

// ============================================
// Recipe Item Details
// ============================================

const RecipeItemDetails: React.FC = () => (
  <div className={styles.recipeItemDetails}>
    <div className={styles.itemRow}>
      <div className={styles.itemIcon}>
        <img src={recipeAsset('image_40.png')} alt="" />
      </div>
      <div className={styles.itemNameLine}>
        <img src={recipeAsset('image_41.png')} alt="" className={styles.dottedLineSmall} />
        <div className={styles.itemLabel}>
          <span>Text</span>
        </div>
      </div>
    </div>
    <div className={styles.resourceCount}>
      <div className={styles.countBox}>
        <span className={styles.countNumber}>0</span>
      </div>
      <span className={styles.countFraction}>/ 1</span>
    </div>
  </div>
);

// ============================================
// Action Buttons
// ============================================

const ActionButton: React.FC<{ label: string }> = ({ label }) => (
  <div className={styles.actionButton}>
    <div className={styles.buttonContent}>
      <div className={styles.buttonIcon}>
        <img src={recipeAsset('image_42.png')} alt="" />
      </div>
      <span className={styles.buttonText}>{label}</span>
    </div>
  </div>
);

const ActionButtons: React.FC = () => (
  <div className={styles.actionButtons}>
    {['Text', 'Text', 'Text'].map((label, i) => (
      <ActionButton key={i} label={label} />
    ))}
  </div>
);

// ============================================
// Scrollbar
// ============================================

const Scrollbar: React.FC = () => (
  <img src={recipeAsset('image_45.png')} alt="" className={styles.scrollbar} />
);

// ============================================
// Main Component
// ============================================

export const RecipeInfoInstructions: React.FC<RecipeInfoInstructionsProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      {/* Left: Playground Header + Card Strip */}
      <section className={styles.playgroundSection}>
        <div className={styles.playgroundHeader}>
          <img src={recipeAsset('image_2.png')} alt="" className={styles.playgroundIcon} />
          <span className={styles.playgroundLabel}>Playground</span>
        </div>
        <div className={styles.cardStrip}>
          {PLAYGROUND_CARDS.map((card, i) => (
            <RecipeCard key={i} {...card} />
          ))}
        </div>
      </section>

      {/* Middle: Step 1 + Cards Grid */}
      <section className={styles.middleSection}>
        <StepInstruction
          step={1}
          text="Swap different items and backgrounds on the recipe cards. Add icons to cards if desired."
        />
        <div className={styles.cardsGrid}>
          <div className={styles.cardRow}>
            {GRID_ROW_1.map((card, i) => (
              <RecipeCard key={i} {...card} />
            ))}
          </div>
          <div className={styles.cardRow}>
            {GRID_ROW_2.map((card, i) => (
              <RecipeCard key={i} {...card} />
            ))}
          </div>
          <div className={styles.cardRow}>
            {GRID_ROW_3.map((card, i) => (
              <RecipeCard key={i} {...card} />
            ))}
          </div>
        </div>
        {/* Bottom icons */}
        <div className={styles.bottomIcons}>
          <img src={recipeAsset('image_43.png')} alt="" className={styles.bagIconSmall} />
          <img src={recipeAsset('image_44.png')} alt="" className={styles.checkIcon} />
        </div>
      </section>

      {/* Right: Step 2 + Recipe Info Panel */}
      <section className={styles.rightSection}>
        <StepInstruction
          step={2}
          text="Add the rest of the interface with the components below!"
        />
        <div className={styles.recipeInterface}>
          <RecipeMenu />
          <div className={styles.recipeMainArea}>
            <RecipeInfoBackground />
            <Scrollbar />
          </div>
          <RecipeNameItem />
          <RecipeSizeInfo />
          <RecipeItemDetails />
          <ActionButtons />
          <div className={styles.closeButton}>
            <img src={recipeAsset('image_46.png')} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

RecipeInfoInstructions.displayName = 'RecipeInfoInstructions';
