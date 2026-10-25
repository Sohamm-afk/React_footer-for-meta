/*
 * SocialIcons.jsx
 * Renders social media icon links using react-icons.
 * Each link opens in a new tab with aria-label for accessibility.
 */

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import styles from './Footer.module.css';

/* Map social IDs from config to react-icons components */
const ICON_MAP = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  x: FaXTwitter,
  youtube: FaYoutube,
};

export default function SocialIcons({ socialConfig }) {
  const { heading, links } = socialConfig;

  return (
    <div className={styles.socialContainer}>
      <h3 className={styles.socialHeading}>{heading}</h3>
      <div className={styles.socialList} role="list" aria-label="Social media links">
        {links.map((item) => {
          const Icon = ICON_MAP[item.id];
          if (!Icon) return null;
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={styles.socialLink}
              role="listitem"
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
