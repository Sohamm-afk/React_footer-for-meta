/*
 * FooterLinks.jsx
 * Navigation link columns with mobile accordion behavior.
 * On desktop: all links visible.
 * On mobile (≤ 767px): click the heading to expand/collapse links.
 */

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styles from './Footer.module.css';

/* Single accordion column */
function FooterColumn({ column }) {
  const [open, setOpen] = useState(false);
  const headingId = `footer-col-heading-${column.id}`;
  const panelId = `footer-col-panel-${column.id}`;

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className={styles.navColumn}>
      {/* Heading doubles as accordion trigger on mobile */}
      <button
        className={styles.navHeading}
        id={headingId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        type="button"
      >
        <span>{column.label}</span>
        <FiChevronDown
          className={`${styles.navChevron} ${open ? styles.navChevronOpen : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Link list — always visible on desktop via CSS, accordion on mobile */}
      <ul
        id={panelId}
        role="list"
        className={`${styles.navList} ${open ? styles.navListOpen : ''}`}
        aria-labelledby={headingId}
      >
        {column.links.map((link) => (
          <li key={link.label}>
            <a href={link.url} className={styles.navLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinks({ columns }) {
  return (
    <nav className={styles.navColumns} aria-label="Footer navigation">
      {columns.map((col) => (
        <FooterColumn key={col.id} column={col} />
      ))}
    </nav>
  );
}
