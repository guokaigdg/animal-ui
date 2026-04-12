import React from 'react';
import styles from './introCredits.module.less';
const starIcon = new URL('./assets/image_1.png', import.meta.url).href;
const authorIcon = new URL('./assets/image_2.png', import.meta.url).href;
const characterIcons = new URL('./assets/image_3.png', import.meta.url).href;

const uiKitItems = [
  {
    heading: 'Nook Phone components',
    items: ['Nook apps', 'App icons', 'Phone background & interface'],
  },
  {
    heading: 'Weapon/Tool Wheel',
    items: ['Tool icons', 'Empty & Filled states'],
  },
  {
    heading: 'Customizable Inventory System',
    items: ['Inventory backgrounds, rows & interface', 'Switchable icon components', 'Clothes Menu'],
  },
  {
    heading: 'Dialog Boxes',
    items: ['Name Tags', 'Dialog interface & text', 'Dialog Menu'],
  },
  {
    heading: 'Nook Shopping Menu',
    items: [
      'Nook Shopping background, interface & navigation',
      'Item detail rows (Selected & non-selected)',
    ],
  },
  {
    heading: 'Recipe Menu',
    items: ['Recipe background, interface & navigation', 'Recipe card rows', 'Recipe info panel'],
  },
];

const screenshotSources = [
  'https://interfaceingame.com/games/animal-crossing-new-horizons/',
  'https://www.gameuidatabase.com/gameData.php?id=606',
  'https://www.gamesradar.com/animal-crossing-new-horizons-now-officially-lets-you-remove-the-ui-in-camera-mode/',
  'https://me.ign.com/en/switch-1/170585/gallery/6-new-animal-crossing-new-horizons-screenshots?p=1',
  'https://www.buzzfeed.com/andyneuenschwander/14-animal-crossing-new-horizons-tips-tricks',
  'https://basementrejects.com/review/animal-crossing-new-horizons/',
];

const spritesheetSources = [
  'https://www.spriters-resource.com/nintendo_switch/animalcrossingnewhorizons/sheet/128279/',
  'https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit#gid=1022368750',
];

const IntroCredits: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.subtitle}>
            <img src={starIcon} alt="star" className={styles.starIcon} />
            <span>A fan-made ANCH UI kit.</span>
          </div>
          <h1 className={styles.title}>
            <span>Animal Crossing:</span>
            <span>New Horizons UI Kit</span>
          </h1>
        </div>
        <div className={styles.heroBottom}>
          <div className={styles.author}>
            <img src={authorIcon} alt="author" className={styles.authorIcon} />
            <div className={styles.authorInfo}>
              <span className={styles.authorLabel}>Made by</span>
              <span className={styles.authorName}>Kat Manalo</span>
            </div>
          </div>
          <img src={characterIcons} alt="character icons" className={styles.characterIcons} />
        </div>
      </section>

      {/* UI Kit Tour */}
      <section className={styles.tourSection}>
        <h2 className={styles.sectionTitle}>UI Kit Tour</h2>
        <div className={styles.tourContent}>
          <p className={styles.tourLabel}>Includes:</p>
          {uiKitItems.map((group) => (
            <div key={group.heading} className={styles.tourGroup}>
              <h3 className={styles.tourHeading}>{group.heading}</h3>
              <ul className={styles.tourList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Project Background & Free to Use */}
      <section className={styles.backgroundSection}>
        <div className={styles.backgroundUpper}>
          <h2 className={styles.sectionTitle}>Project Background</h2>
          <div className={styles.textBlock}>
            <p>
              Being a game UX designer has been a dream of mine since learning about the profession
              and I took a step forward in reaching those goals. Highly inspired by{' '}
              <a
                href="https://www.figma.com/community/file/965825767811358609"
                className={styles.boldLink}
              >
                Hunter Paramore's Zelda BOTW UI Kit
              </a>
              , I decided to take up my own project and create an Animal Crossing: New Horizons' UI
              Kit!
            </p>
            <p>
              During my time between graduation and my first job, I wanted to understand what steps I
              could take in order to develop design skills. I knew I didn't just need to learn how to
              use a design tool but also I had to be confident in my own skills. I came to the terms
              that in order to get into a junior UX job during the pandemic, I needed to create a
              project that focused on where I struggled. I created this personal project to strengthen
              my UI skills using Figma, learn about design systems and understand how to use variants.
            </p>
            <p>
              There are different ways I could have tackled this UI kit so if you would have gone
              about this UI kit differently, feel free to let me know! And if you do create a similar
              project, I would love to see your work! Email me at manaloka1423@gmail.com!
            </p>
          </div>
        </div>

        <div className={styles.backgroundLower}>
          <h2 className={styles.sectionTitle}>Free to use with credit</h2>
          <div className={styles.textBlock}>
            <p>
              This UI Kit was meant to challenge myself on learn about Figma and understand game UI.
              I'm releasing this for anyone to use, look at and learn from.
            </p>
            <p>
              I do not own the copyright to Animal Crossing or any of its assets. This is purely a
              fan-made UI Kit made for my own learning purposes.
            </p>
            <p>
              If you are using this kit, feel free to tag me! I'd love to see what everyone will
              make! Please credit me by adding one of the following links:
            </p>
            <ol className={styles.creditLinks}>
              <li>manaloka.com</li>
              <li>linkedin.com/in/katherine-manalo</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className={styles.sourcesSection}>
        <h2 className={styles.sectionTitle}>Sources</h2>
        <div className={styles.textBlock}>
          <p>Game assets were pulled from spritesheets & masked in Figma.</p>
          <p>All vectors, icons and components were made by me.</p>
          <p>Chose Roboto as font due to similarities with original font.</p>

          <h3 className={styles.sourceHeading}>ACNH Game screenshots:</h3>
          <ul className={styles.sourceList}>
            {screenshotSources.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </li>
            ))}
          </ul>

          <h3 className={styles.sourceHeading}>Spritesheets:</h3>
          <ul className={styles.sourceList}>
            {spritesheetSources.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IntroCredits;
