import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.focusRoom">Focus Room</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline">The Agile Focus Method to Unleash Team Potential</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            <Translate id="homepage.startReading">➡️ Start Reading The Book </Translate>
          </Link>
        </div>
      
        <div>
            <div className={styles.languageButtons}>
              <Link to="/en/" className="button button--primary margin--xs">English</Link>
              <Link to="/zh-CN/" className="button button--primary margin--xs">中文</Link>
              <Link to="/es/" className="button button--primary margin--xs">Español</Link>
              <Link to="/fr/" className="button button--primary margin--xs">Français</Link>
              <Link to="/de/" className="button button--primary margin--xs">Deutsch</Link>
              <Link to="/ja/" className="button button--primary margin--xs">日本語</Link>
              <Link to="/ko/" className="button button--primary margin--xs">한국어</Link>
              <Link to="/pt/" className="button button--primary margin--xs">Português</Link>
            </div>
        </div>      
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Focus Room - The Agile Focus Method to Unleash Team Potential"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
