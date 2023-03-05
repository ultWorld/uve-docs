import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Megaverse of immersive, connected spaces',
    Svg: require('@site/static/img/home/drakecanvasback.svg').default,
    description: (
      <>
        Imagine a world where you can travel to any place, time, or dimension you want. A world where you can create your own spaces and share them with others. A world where you can experience anything you can imagine. 
      </>
    ),
  },
  {
    title: 'Alternate Dimension Experiences (ADEs)',
    Svg: require('@site/static/img/home/Spaniel-2-.svg').default,
    description: (
      <>
        What if you could live in a different reality for a while? What if you could experience something that is impossible or improbable in your own world? That’s what ADEs are for. 
      </>
    ),
  },
  {
    title: 'BYOM (Bring Your Own Metaverse)',
    Svg: require('@site/static/img/home/manandwomandancing.svg').default,
    description: (
      <>
        Do you have an idea for a metaverse that you want to create? Do you want to use open source software and assets to make it happen? Then BYOM is the tool for you. It’s a platform that allows you to create your own metaverses using open source software and assets.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
