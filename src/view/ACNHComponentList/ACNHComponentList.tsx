import React from 'react';
import styles from './acnhComponentList.module.less';

export interface ACNHComponentListProps {
  className?: string;
}

// Asset helpers
const asset = (name: string) => new URL(`./assets/${name}`, import.meta.url).href;
const btnAsset = (name: string) => new URL(`./assets/buttons/${name}`, import.meta.url).href;
const contentAsset = (name: string) => new URL(`./assets/content/${name}`, import.meta.url).href;

// ============================================
// Color Swatch Data
// ============================================

const COLOR_ROW_1 = [
  'rgba(255,255,247,1)', 'rgba(248,244,232,1)', 'rgba(238,233,202,1)',
  'rgba(255,238,160,1)', 'rgba(113,104,29,1)', 'rgba(114,92,78,1)',
  'rgba(138,123,102,1)', 'rgba(4,175,166,1)',
];

const COLOR_ROW_2 = [
  'rgba(255,251,231,1)', 'rgba(255,180,0,1)', 'rgba(255,119,23,1)',
  'rgba(226,130,106,1)', 'rgba(37,59,82,0.96)', 'rgba(15,22,32,1)',
];

const COLOR_ROW_3 = [
  'rgba(183,125,238,1)', 'rgba(136,157,240,1)', 'rgba(247,205,103,1)',
  'rgba(229,146,102,1)', 'rgba(248,166,178,1)', 'rgba(130,213,187,1)',
  'rgba(138,198,138,1)', 'rgba(252,115,109,1)', 'rgba(255,84,74,1)',
  'rgba(209,218,73,1)', 'rgba(154,131,90,1)', 'rgba(236,223,82,1)',
  'rgba(225,140,111,1)',
];

// ============================================
// Typography Data
// ============================================

const TYPOGRAPHY_ITEMS = [
  { text: 'Title', font: 'Poppins', size: 150, lineHeight: '170px', weight: 700, tracking: '-0.48px' },
  { text: 'Medium Title', font: 'Poppins', size: 90, lineHeight: '110px', weight: 700, tracking: '-0.67px' },
  { text: 'Small Title', font: 'Poppins', size: 60, lineHeight: 'normal', weight: 700, tracking: '-0.67px' },
  { text: 'Big Text', font: 'Poppins', size: 100, lineHeight: '136.34%', weight: 400, tracking: '-0.48px' },
  { text: 'Large Text', font: 'Roboto', size: 60, lineHeight: 'normal', weight: 500, tracking: '0' },
  { text: 'Medium Text', font: 'Roboto', size: 48, lineHeight: 'normal', weight: 500, tracking: '0px' },
  { text: 'Small Text', font: 'Roboto', size: 44, lineHeight: 'normal', weight: 500, tracking: '0' },
  { text: 'Tags', font: 'Poppins', size: 25, lineHeight: '136.34%', weight: 400, tracking: '-0.48px' },
];

// ============================================
// Phone App Data
// ============================================

const APP_COLORS = [
  'rgba(183,125,238,1)', 'rgba(247,205,103,1)', 'rgba(229,146,102,1)',
  'rgba(236,223,82,1)', 'rgba(154,131,90,1)', 'rgba(248,166,178,1)',
  'rgba(130,213,187,1)', 'rgba(209,218,73,1)',
];

// ============================================
// Sub-Components
// ============================================

/** Color Swatch Row */
const ColorSwatchRow: React.FC<{ colors: string[] }> = ({ colors }) => (
  <div className={styles.swatchRow}>
    {colors.map((color, i) => (
      <div
        key={i}
        className={styles.swatch}
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);

/** Style Guide Section */
const StyleGuide: React.FC = () => (
  <section className={styles.styleGuide}>
    <h2 className={styles.styleGuideTitle}>Style Guide</h2>
    <div className={styles.typographySection}>
      <h3 className={styles.typographySectionTitle}>Typography</h3>
      <div className={styles.typographyList}>
        {TYPOGRAPHY_ITEMS.map((item, i) => (
          <span
            key={i}
            className={styles.typographyItem}
            style={{
              fontFamily: `'${item.font}', sans-serif`,
              fontSize: `${item.size}px`,
              lineHeight: item.lineHeight,
              fontWeight: item.weight,
              letterSpacing: item.tracking,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/** Color Swatches Section */
const ColorSwatches: React.FC = () => (
  <section className={styles.colorSwatches}>
    <ColorSwatchRow colors={COLOR_ROW_1} />
    <ColorSwatchRow colors={COLOR_ROW_2} />
    <ColorSwatchRow colors={COLOR_ROW_3} />
  </section>
);

/** Character Banner Section */
const CharacterBanner: React.FC = () => (
  <section className={styles.characterBanner}>
    <img src={asset('image_1.png')} alt="" className={styles.characterImg} />
    <img src={asset('image_2.png')} alt="" className={styles.characterImg} />
    <img src={asset('image_3.png')} alt="" className={styles.characterImg} />
    <img src={asset('image_4.png')} alt="" className={styles.characterImg} />
  </section>
);

/** Phone App Icon */
const PhoneAppIcon: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => (
  <div className={styles.appIcon}>
    <div className={styles.appColorBg} style={{ backgroundColor: color }} />
    <div className={styles.appIconContent}>{children}</div>
  </div>
);

/** Nook Phone (3x3 grid variant) */
const NookPhoneGrid: React.FC<{ variant?: 'flat' | 'gradient' }> = ({ variant = 'flat' }) => (
  <div className={styles.phoneBackground}>
    <div className={styles.phoneAppsGrid}>
      {/* Row 1 */}
      <PhoneAppIcon color={APP_COLORS[0]}>
        <img src={asset('image_16.png')} alt="" className={styles.appImgLg} />
      </PhoneAppIcon>
      <img src={asset(variant === 'flat' ? 'image_19.png' : 'image_56.png')} alt="" className={styles.appFull} />
      <PhoneAppIcon color={APP_COLORS[1]}>
        <img src={asset('image_20.png')} alt="" className={styles.appImgSm} />
        <img src={asset('image_26.png')} alt="" className={styles.appImgOverlay} />
        <img src={asset('image_27.png')} alt="" className={styles.appImgOverlay2} />
      </PhoneAppIcon>
      {/* Row 2 */}
      <PhoneAppIcon color={APP_COLORS[2]}>
        <img src={asset('image_29.png')} alt="" className={styles.appImgMd} />
      </PhoneAppIcon>
      <PhoneAppIcon color={APP_COLORS[3]}>
        <img src={asset('image_31.png')} alt="" className={styles.appImgSm} />
        <img src={asset('image_32.png')} alt="" className={styles.appImgOverlay} />
      </PhoneAppIcon>
      <PhoneAppIcon color={APP_COLORS[4]}>
        <img src={asset('image_37.png')} alt="" className={styles.appImgMd} />
      </PhoneAppIcon>
      {/* Row 3 */}
      <PhoneAppIcon color={APP_COLORS[5]}>
        <img src={asset('image_39.png')} alt="" className={styles.appImgSm} />
        <img src={asset('image_41.png')} alt="" className={styles.appImgOverlay} />
      </PhoneAppIcon>
      <PhoneAppIcon color={APP_COLORS[6]}>
        <img src={asset('image_52.png')} alt="" className={styles.appImgMd} />
      </PhoneAppIcon>
      <PhoneAppIcon color={APP_COLORS[7]}>
        <img src={asset('image_53.png')} alt="" className={styles.appImgSm} />
      </PhoneAppIcon>
    </div>
  </div>
);

/** Phone Details Bar (Wifi + Time + Battery) */
const PhoneDetailsBar: React.FC = () => (
  <div className={styles.phoneDetailsBar}>
    <div className={styles.wifiIcon}>
      <div className={styles.wifiBars}>
        <img src={asset('image_74.png')} alt="" className={styles.wifiBar} />
        <div className={styles.wifiBarRow}>
          <img src={asset('image_74.png')} alt="" className={styles.wifiBar} />
          <img src={asset('image_74.png')} alt="" className={styles.wifiBar} />
        </div>
        <img src={asset('image_75.png')} alt="" className={styles.wifiBarWide} />
      </div>
      <img src={asset('image_76.png')} alt="" className={styles.wifiSignal} />
    </div>
    <div className={styles.timeDisplay}>
      <span>11:05 PM</span>
    </div>
    <img src={asset('image_81.png')} alt="" className={styles.batteryIcon} />
  </div>
);

/** Phone Components Section */
const PhoneComponents: React.FC = () => (
  <section className={styles.phoneSection}>
    {/* Flat color apps */}
    <NookPhoneGrid variant="flat" />
    {/* Gradient/variant apps */}
    <NookPhoneGrid variant="gradient" />
    {/* Third phone with fewer apps */}
    <div className={styles.phoneBackground}>
      <div className={styles.phoneAppsPartial}>
        <PhoneAppIcon color={APP_COLORS[5]}>
          <img src={asset('image_39.png')} alt="" className={styles.appImgSm} />
        </PhoneAppIcon>
        <PhoneAppIcon color={APP_COLORS[6]}>
          <img src={asset('image_52.png')} alt="" className={styles.appImgMd} />
        </PhoneAppIcon>
      </div>
    </div>
    {/* Phone detail variations */}
    <div className={styles.phoneDetailsGroup}>
      <PhoneDetailsBar />
      <PhoneDetailsBar />
      <PhoneDetailsBar />
    </div>
    {/* Page indicators & other phone UI */}
    <img src={asset('image_77.png')} alt="" className={styles.pageIndicator} />
    <img src={asset('image_79.png')} alt="" className={styles.phoneDecoration} />
    <img src={asset('image_80.png')} alt="" className={styles.phoneDecoration2} />
    <div className={styles.pageIndicatorDot}>
      <img src={asset('image_78.png')} alt="" />
    </div>
    {/* Phone component images */}
    <img src={asset('image_83.png')} alt="" className={styles.phoneComponentImg} />
    <img src={asset('image_84.png')} alt="" className={styles.phoneComponentImg} />
    <img src={asset('image_85.png')} alt="" className={styles.phoneComponentImg} />
  </section>
);

/** Dark Save Box */
const DarkSaveBox: React.FC<{ text?: string }> = ({ text }) => (
  <div className={styles.darkSaveBox}>
    <div className={styles.darkSaveBoxInner} />
    {text && <span className={styles.darkSaveBoxText}>{text}</span>}
  </div>
);

/** Dialog Components Section */
const DialogComponents: React.FC = () => (
  <section className={styles.dialogSection}>
    <img src={asset('image_9.png')} alt="" className={styles.dialogImg} />
    <div className={styles.selectedTextBadge}>
      <span>Selected Text</span>
    </div>
    <img src={asset('image_7.png')} alt="" className={styles.dialogListImg} />
    <img src={asset('image_10.png')} alt="" className={styles.dialogListImg} />
    <img src={asset('image_11.png')} alt="" className={styles.dialogListImg} />
    <img src={asset('image_8.png')} alt="" className={styles.dialogPreviewImg} />
    <img src={asset('image_6.png')} alt="" className={styles.dialogSmallIcon} />
    <DarkSaveBox />
    <DarkSaveBox text="Ready to wrap things up for now?" />
  </section>
);

/** Weapon Circle */
const WeaponCircle: React.FC = () => (
  <div className={styles.weaponCircle}>
    <img src={asset('image_107.png')} alt="" className={styles.weaponCircleBg} />
    <div className={styles.weaponCircleIcon}>
      <img src={asset('image_108.png')} alt="" />
    </div>
  </div>
);

/** Weapon Wheel Section */
const WeaponWheelSection: React.FC = () => {
  const positions = [
    { top: 196.96, left: 396.54 },
    { top: 0, left: 198.63 },
    { top: 196.96, left: 0 },
    { top: 56.54, left: 63.08 },
    { top: 393.92, left: 198.63 },
    { top: 337.46, left: 63.08 },
    { top: 337.46, left: 340.08 },
    { top: 56.54, left: 340.08 },
  ];

  return (
    <section className={styles.weaponWheelSection}>
      <img src={asset('image_105.png')} alt="" className={styles.weaponWheelHeader} />
      <img src={asset('image_106.png')} alt="" className={styles.weaponWheelHeaderSm} />
      <img src={asset('image_104.png')} alt="" className={styles.weaponWheelBody} />
      <div className={styles.weaponWheelGrid}>
        {positions.map((pos, i) => (
          <div
            key={i}
            className={styles.weaponCirclePosition}
            style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
          >
            <WeaponCircle />
          </div>
        ))}
      </div>
      <div className={styles.weaponWheelIndicator}>
        <img src={asset('image_102.png')} alt="" className={styles.indicatorOuter} />
        <img src={asset('image_103.png')} alt="" className={styles.indicatorInner} />
      </div>
    </section>
  );
};

/** Nook Shopping Components Section */
const NookShoppingSection: React.FC = () => (
  <section className={styles.nookShoppingSection}>
    <img src={asset('image_88.png')} alt="" className={styles.nookMenuBar} />
    <img src={asset('image_89.png')} alt="" className={styles.nookItemGrid} />
    {/* Scrollbar variants */}
    <div className={styles.scrollbarGroup}>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className={styles.scrollbarItem}>
          <img src={asset(i < 2 ? 'image_90.png' : 'image_91.png')} alt="" className={styles.scrollbarTrack} />
          <div className={styles.scrollbarThumb} style={{ top: i % 2 === 0 ? '0' : '123.34px' }} />
        </div>
      ))}
    </div>
    {/* Item cost */}
    <div className={styles.itemCostTab}>
      <div className={styles.itemCostDivider} />
      <img src={asset('image_92.png')} alt="" className={styles.itemCostIcon} />
      <span className={styles.itemCostText}>000</span>
    </div>
    {/* Calendar event */}
    <div className={styles.calendarEvent}>
      <img src={asset('image_93.png')} alt="" className={styles.calendarBg} />
      <span className={styles.calendarText}>Until 0/00</span>
    </div>
    {/* Event info panel */}
    <div className={styles.eventInfoPanel}>
      <div className={styles.eventInfoRow}>
        <div className={styles.eventDivider} />
        <span className={styles.eventName}>Mother&apos;s Day</span>
        <div className={styles.eventDividerWide} />
      </div>
      <div className={styles.eventTagRow}>
        <div className={styles.eventDividerTall} />
        <div className={styles.eventTag}>
          <span>Intl.</span>
        </div>
      </div>
    </div>
    {/* Menu tab */}
    <div className={styles.menuTab}>
      <div className={styles.menuTabDivider} />
      <span className={styles.menuTabLabel}>Text</span>
      <div className={styles.menuTabDivider} />
    </div>
    {/* Additional nook images */}
    <img src={asset('image_94.png')} alt="" className={styles.nookDetailImg} />
    <img src={asset('image_95.png')} alt="" className={styles.nookListImg} />
    <img src={asset('image_96.png')} alt="" className={styles.nookSmallImg} />
    <img src={asset('image_109.png')} alt="" className={styles.nookNavImg} />
  </section>
);

/** Nook Shopping Full Background Section */
const NookShoppingBackground: React.FC = () => (
  <section className={styles.nookBgSection}>
    <img src={asset('image_112.png')} alt="" className={styles.nookBgLogo} />
    <img src={asset('image_119.png')} alt="" className={styles.nookBgMain} />
    {/* Leaf decorations */}
    <div className={styles.leafRow}>
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className={styles.leaf}>
          <img src={asset('image_118.png')} alt="" />
        </div>
      ))}
    </div>
    <img src={asset('image_117.png')} alt="" className={styles.leafSingle} />
    {/* Full background panel */}
    <div className={styles.nookBgPanel}>
      {/* Borders */}
      <img src={asset('image_122.png')} alt="" className={styles.borderTop} />
      <img src={asset('image_123.png')} alt="" className={styles.borderTopInner} />
      <img src={asset('image_124.png')} alt="" className={styles.borderBottom} />
      <img src={asset('image_125.png')} alt="" className={styles.borderBottomInner} />
      {/* Leaf rows */}
      <div className={styles.leafRowBottom}>
        <div className={styles.leaf}>
          <img src={asset('image_126.png')} alt="" />
        </div>
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={styles.leaf}>
            <img src={asset('image_118.png')} alt="" />
          </div>
        ))}
      </div>
      <div className={styles.leafRowTop}>
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={styles.leaf}>
            <img src={asset('image_118.png')} alt="" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/** Screenshots Gallery */
const ScreenshotsGallery: React.FC = () => {
  const screenshots = [
    'image_5.png', 'image_12.png', 'image_13.png', 'image_14.png',
    'image_15.png', 'image_86.png', 'image_87.png', 'image_97.png',
    'image_98.png', 'image_99.png', 'image_100.png', 'image_101.png',
    'image_110.png', 'image_111.png',
  ];

  return (
    <section className={styles.screenshotsGallery}>
      {screenshots.map((img, i) => (
        <img key={i} src={asset(img)} alt="" className={styles.screenshot} />
      ))}
    </section>
  );
};

// ============================================
// Recipe Menu Icons Data
// ============================================

const RECIPE_MENU_ICONS = [
  { src: 'image_33.png', w: 51.95, h: 55.27 },
  { src: 'image_32.png', w: 46.92, h: 56.45 },
  { src: 'image_34.png', w: 47.82, h: 40.74 },
  { src: 'image_35.png', w: 49.46, h: 49.61 },
  { src: 'image_36.png', w: 61.03, h: 55.33 },
  { src: 'image_37.png', w: 57.21, h: 52.57 },
  { src: 'image_39.png', w: 45.16, h: 48.17 },
  { src: 'image_41.png', w: 47.15, h: 52.10 },
  { src: 'image_38.png', w: 59.28, h: 58.12 },
  { src: 'image_40.png', w: 68.98, h: 68.98 },
];

// ============================================
// Buttons Section Sub-Components
// ============================================

/** D-Pad Button */
const DPadButton: React.FC = () => (
  <div className={styles.dpad}>
    <div className={styles.dpadShadow} />
    <div className={styles.dpadBody}>
      <div className={styles.dpadBorder} />
      <div className={styles.dpadCross}>
        <div className={styles.dpadVertical}>
          <img src={btnAsset('image_21.png')} alt="" className={styles.dpadLine} />
          <img src={btnAsset('image_21.png')} alt="" className={styles.dpadLine} />
        </div>
        <div className={styles.dpadHorizontal}>
          <img src={btnAsset('image_22.png')} alt="" className={styles.dpadLineH} />
          <img src={btnAsset('image_22.png')} alt="" className={styles.dpadLineH} />
        </div>
      </div>
    </div>
  </div>
);

/** Grid Icon (3x3 orange squares) */
const GridIcon: React.FC = () => (
  <div className={styles.gridIcon}>
    {Array.from({ length: 3 }, (_, row) => (
      <div key={row} className={styles.gridIconRow}>
        {Array.from({ length: 3 }, (_, col) => (
          <div key={col} className={styles.gridIconSquare} />
        ))}
      </div>
    ))}
  </div>
);

/** Size Info (grid icon + 2.0x0.5) */
const SizeInfo: React.FC<{ size?: 'large' | 'small' }> = ({ size = 'large' }) => (
  <div className={styles.sizeInfo}>
    <DPadButton />
    <span className={size === 'large' ? styles.sizeTextLarge : styles.sizeText}>2.0x0.5</span>
  </div>
);

/** Pockets Info */
const PocketsInfo: React.FC = () => (
  <div className={styles.pocketsInfo}>
    <img src={btnAsset('image_26.png')} alt="" className={styles.bagIcon} />
    <span className={styles.infoLabel}>Pockets:0</span>
  </div>
);

/** Storage Info */
const StorageInfo: React.FC = () => (
  <div className={styles.storageInfo}>
    <img src={btnAsset('image_25.png')} alt="" className={styles.excludeIcon} />
    <span className={styles.infoLabel}>Storage:0</span>
  </div>
);

/** "Everything" Tag */
const EverythingTag: React.FC = () => (
  <div className={styles.everythingTag}>
    <span className={styles.everythingText}>Everything</span>
  </div>
);

/** Furniture Icon with Name */
const FurnitureNameRow: React.FC<{ showDivider?: boolean; showTag?: boolean }> = ({ showDivider, showTag }) => (
  <div className={styles.furnitureNameRow}>
    <div className={styles.furnitureIcon}>
      <img src={btnAsset('image_6.png')} alt="" className={styles.furnitureIconBg} />
      <div className={styles.furnitureIconInner}>
        <img src={btnAsset('image_7.png')} alt="" className={styles.furnitureDot} />
        <img src={btnAsset('image_8.png')} alt="" className={styles.furnitureLine} />
        <img src={btnAsset('image_7.png')} alt="" className={styles.furnitureDot} />
      </div>
    </div>
    <span className={styles.furnitureName}>Jail&nbsp;bars</span>
    {showTag && <EverythingTag />}
    {showDivider && <img src={btnAsset('image_46.png')} alt="" className={styles.dashedDivider} />}
  </div>
);

/** Category Menu Strip */
const CategoryMenuStrip: React.FC = () => (
  <div className={styles.categoryMenuStrip}>
    <EverythingTag />
    <div className={styles.categoryMenuIcons}>
      {/* L button */}
      <div className={styles.arrowButton}>
        <div className={styles.arrowButtonBg} />
        <img src={btnAsset('image_42.png')} alt="L" className={styles.arrowImg} />
      </div>
      {/* Grid icon */}
      <div className={styles.categoryIconWrapper}>
        <GridIcon />
      </div>
      {/* Menu icons */}
      {RECIPE_MENU_ICONS.map((icon, i) => (
        <div key={i} className={styles.categoryIconWrapper}>
          <img
            src={btnAsset(icon.src)}
            alt=""
            style={{ width: `${icon.w}px`, height: `${icon.h}px` }}
          />
        </div>
      ))}
      {/* R button */}
      <div className={styles.arrowButton}>
        <img src={btnAsset('image_43.png')} alt="" className={styles.arrowButtonBgImg} />
        <img src={btnAsset('image_44.png')} alt="R" className={styles.arrowImg} />
      </div>
    </div>
  </div>
);

/** Card Backing */
const CardBacking: React.FC<{ withContent?: boolean }> = ({ withContent }) => (
  <div className={styles.cardBacking}>
    {withContent && (
      <img src={btnAsset('image_3.png')} alt="" className={styles.cardBackingContent} />
    )}
  </div>
);

/** Material Requirements (text rows with counts) */
const MaterialRequirements: React.FC = () => (
  <div className={styles.materialRequirements}>
    <img src={btnAsset('image_30.png')} alt="" className={styles.materialHeaderImg} />
    <img src={btnAsset('image_29.png')} alt="" className={styles.materialListImg} />
    <img src={btnAsset('image_45.png')} alt="" className={styles.materialDetailImg} />
    <img src={btnAsset('image_28.png')} alt="" className={styles.materialPreviewImg} />
  </div>
);

/** Acorn Cluster */
const AcornCluster: React.FC = () => {
  const acornPositions = [
    { src: 'image_11.png', w: 74.02, h: 74.02, top: 46.94, left: 30.32 },
    { src: 'image_13.png', w: 72.93, h: 73.06, top: 0, left: 74.80 },
    { src: 'image_12.png', w: 72.53, h: 73.41, top: 74.26, left: 123.09 },
    { src: 'image_14.png', w: 52.53, h: 48.47, top: 104.09, left: 75.06 },
    { src: 'image_14.png', w: 52.53, h: 48.47, top: 10.20, left: 145.55 },
    { src: 'image_15.png', w: 68.22, h: 70.80, top: 30.96, left: 173.28 },
    { src: 'image_17.png', w: 71.73, h: 74.04, top: 109.84, left: 0 },
    { src: 'image_16.png', w: 49.87, h: 52.18, top: 173.34, left: 28.57 },
    { src: 'image_18.png', w: 74.53, h: 74.09, top: 144.27, left: 136.75 },
    { src: 'image_19.png', w: 73.99, h: 74.61, top: 205.22, left: 63.85 },
    { src: 'image_20.png', w: 54.46, h: 53.14, top: 225.89, left: 126.82 },
    { src: 'image_20.png', w: 54.46, h: 53.14, top: 217.23, left: 176.48 },
    { src: 'image_20.png', w: 54.46, h: 53.14, top: 260.61, left: 23.60 },
    { src: 'image_20.png', w: 54.46, h: 53.14, top: 273.43, left: 74.69 },
  ];

  return (
    <div className={styles.acornCluster}>
      {acornPositions.map((acorn, i) => (
        <img
          key={i}
          src={btnAsset(acorn.src)}
          alt=""
          className={styles.acornItem}
          style={{
            width: `${acorn.w}px`,
            height: `${acorn.h}px`,
            top: `${acorn.top}px`,
            left: `${acorn.left}px`,
          }}
        />
      ))}
    </div>
  );
};

/** Buttons Section */
const ButtonsSection: React.FC = () => (
  <section className={styles.buttonsSection}>
    {/* Top area: large background panel + right side panels */}
    <div className={styles.btnTopArea}>
      {/* Left: large striped panel */}
      <div className={styles.btnMainPanel}>
        <img src={btnAsset('image_4.png')} alt="" className={styles.btnMainPanelImg} />
      </div>

      {/* Right side: material requirements */}
      <MaterialRequirements />
    </div>

    {/* Middle row: background image + cards + item details */}
    <div className={styles.btnMiddleRow}>
      {/* Striped background */}
      <img src={btnAsset('image_2.png')} alt="" className={styles.btnStripedBg} />

      {/* Cards */}
      <div className={styles.btnCardsRow}>
        <CardBacking />
        <CardBacking withContent />
      </div>

      {/* Item detail panel */}
      <div className={styles.btnItemDetailPanel}>
        <SizeInfo size="large" />
        <PocketsInfo />
        <StorageInfo />
      </div>
    </div>

    {/* Furniture name rows */}
    <div className={styles.btnFurnitureRows}>
      <FurnitureNameRow showDivider />
      <FurnitureNameRow showTag />
    </div>

    {/* Category menu strip */}
    <CategoryMenuStrip />

    {/* Bottom details bar */}
    <div className={styles.btnBottomBar}>
      <SizeInfo size="small" />
      <div className={styles.btnBottomInfoGroup}>
        <PocketsInfo />
        <StorageInfo />
      </div>
    </div>

    {/* Bottom icons row */}
    <div className={styles.btnIconsRow}>
      {/* D-pad + various small icons */}
      <DPadButton />
      <img src={btnAsset('image_23.png')} alt="" className={styles.btnSmallIcon} />
      <img src={btnAsset('image_24.png')} alt="" className={styles.btnSmallIcon} />
      <img src={btnAsset('image_1.png')} alt="" className={styles.btnSmallIcon} />
      <div className={styles.furnitureIcon}>
        <img src={btnAsset('image_6.png')} alt="" className={styles.furnitureIconBg} />
        <div className={styles.furnitureIconInner}>
          <img src={btnAsset('image_7.png')} alt="" className={styles.furnitureDot} />
          <img src={btnAsset('image_8.png')} alt="" className={styles.furnitureLine} />
          <img src={btnAsset('image_7.png')} alt="" className={styles.furnitureDot} />
        </div>
      </div>
      <img src={btnAsset('image_5.png')} alt="" className={styles.btnSmallIcon} />
      <img src={btnAsset('image_9.png')} alt="" className={styles.btnSmallIcon} />
      <img src={btnAsset('image_10.png')} alt="" className={styles.btnSmallIcon} />

      {/* Acorn cluster */}
      <AcornCluster />
    </div>

    {/* Scrollbar */}
    <img src={btnAsset('image_47.png')} alt="" className={styles.btnScrollbar} />
  </section>
);

// ============================================
// Content Header Section
// ============================================

/** Content Header - Page title with leaf icon */
const ContentHeader: React.FC = () => (
  <header className={styles.contentHeader}>
    <div className={styles.contentSubtitle}>
      <img src={contentAsset('image_1.png')} alt="" className={styles.leafDecor} />
      <span className={styles.subtitleText}>A fan-made ANCH UI kit.</span>
    </div>
    <h1 className={styles.contentTitle}>
      <span className={styles.titleLine1}>Animal Crossing: </span>
      <span className={styles.titleLine2}>New Horizons UI Kit</span>
    </h1>
  </header>
);

// ============================================
// Main Component
// ============================================

export const ACNHComponentList: React.FC<ACNHComponentListProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      {/* Page Header */}
      <ContentHeader />

      {/* Style Guide & Colors */}
      <div className={styles.topRow}>
        <StyleGuide />
        <ColorSwatches />
      </div>

      {/* Character Banner */}
      <CharacterBanner />

      {/* Phone Components */}
      <PhoneComponents />

      {/* Dialog & Save Components */}
      <DialogComponents />

      {/* Weapon Wheel Components */}
      <WeaponWheelSection />

      {/* Nook Shopping Components */}
      <NookShoppingSection />

      {/* Nook Shopping Full Background */}
      <NookShoppingBackground />

      {/* Buttons & UI Controls */}
      <ButtonsSection />

      {/* Game Screenshots */}
      <ScreenshotsGallery />
    </div>
  );
};

ACNHComponentList.displayName = 'ACNHComponentList';
