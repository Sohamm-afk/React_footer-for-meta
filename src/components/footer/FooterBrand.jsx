/*
 * FooterBrand.jsx
 * Brand column: logo, tagline, description.
 */

import styles from './Footer.module.css';

export default function FooterBrand({ config }) {
  const { brand } = config;

  return (
    <div className={styles.brand}>
      {/* Logo */}
      <a
        href={brand.logo.href}
        className={styles.brandLogoLink}
        aria-label={brand.logo.alt}
      >
        <img 
          src={brand.logo.src} 
          alt={brand.logo.alt} 
          className={styles.brandLogoImg} 
        />
      </a>

      {/* Tagline - Only render if it exists in config */}
      {brand.tagline && (
        <p className={styles.brandTagline}>{brand.tagline}</p>
      )}

      {/* Description */}
      <p className={styles.brandDescription}>{brand.description}</p>
    </div>
  );
}
