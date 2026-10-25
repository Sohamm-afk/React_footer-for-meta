/*
 * Footer.jsx
 * Reusable, config-driven site footer for MetaSkillGroup.
 * All content comes from src/data/footerConfig.js — components hold zero copy.
 */

import FooterBrand from './FooterBrand.jsx';
import FooterLinks from './FooterLinks.jsx';
import ContactDetails from './ContactDetails.jsx';
import TrustBadges from './TrustBadges.jsx';
import Newsletter from './Newsletter.jsx';
import SocialIcons from './SocialIcons.jsx';
import BackToTop from './BackToTop.jsx';
import styles from './Footer.module.css';
import { footerConfig as config } from '../../data/footerConfig.js';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      {/* Organization structured data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(config.jsonLd) }}
      />

      <div className={styles.inner}>
        {/* ── Main Grid (4 Columns) ───────────────────────────────────────── */}
        <div className={styles.grid}>
          {/* Column 1: Brand & Contact */}
          <div className={styles.brandContactColumn}>
            <FooterBrand config={config} />
            <ContactDetails contact={config.contact} />
          </div>

          {/* Columns 2, 3, 4: Navigation columns */}
          <FooterLinks columns={config.navigation} />

          {/* Column 5: Keep In Touch (Newsletter + Socials) */}
          <div className={styles.keepInTouch}>
            <Newsletter config={config} />
            <SocialIcons socialConfig={config.social} />
          </div>
        </div>

        {/* ── Lower Section ────────────────────────────────────────────────── */}
        <div className={styles.lowerSection}>
          <div className={styles.divider} />
          
          <TrustBadges trust={config.trust} />
          
          <div className={styles.divider} />

          <div className={styles.bottomBar}>
            <div className={styles.bottomBarInner}>
              <p className={styles.copyright}>
                © {currentYear} {config.copyright.owner}. All rights reserved.
              </p>
              
              <nav className={styles.legalNav} aria-label="Legal links">
                <ul className={styles.legalList}>
                  {config.legal.map((item) => (
                    <li key={item.label}>
                      <a href={item.url} className={styles.legalLink}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <BackToTop threshold={300} />
    </footer>
  );
}

