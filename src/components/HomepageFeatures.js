import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Python',
    Svg: require('../../static/img/Python.svg').default,
    description: (
      <>
        The starting point of programming.
        <br />
        Grammar is very simple, very easy, very suitable for entry.
      </>
    ),
  },
  {
    title: 'Java',
    Svg: require('../../static/img/Java.svg').default,
    description: (
      <>
        My future technology stack.
        <br />
        Java is a very powerful language.
      </>
    ),
  },
  {
    title: 'Vue',
    Svg: require('../../static/img/Vue.svg').default,
    description: (
      <>
        Currently interested technology stack.
        <br />  
        The Progressive JavaScript Framework.
        <br />
        It's really interesting.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
