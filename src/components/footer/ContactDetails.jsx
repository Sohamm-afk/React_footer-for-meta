/*
 * ContactDetails.jsx
 * Address, phone (tel:), and email (mailto:) with icons.
 */

import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function ContactDetails({ contact }) {
  return (
    <address className={styles.contactBlock} aria-label="Contact information">
      <h3 className={styles.colHeading}>{contact.heading}</h3>

      <ul className={styles.contactList}>
        {/* Physical address */}
        <li className={styles.contactItem}>
          <FiMapPin className={styles.contactIcon} aria-hidden="true" />
          <span className={styles.contactAddress}>{contact.address}</span>
        </li>

        {/* Phone — tel: link is clickable on mobile */}
        <li className={styles.contactItem}>
          <FiPhone className={styles.contactIcon} aria-hidden="true" />
          <a
            href={contact.phone}
            className={styles.contactLink}
            aria-label={`Call us at ${contact.phoneLabel}`}
          >
            {contact.phoneLabel}
          </a>
        </li>

        {/* Email — mailto: link */}
        <li className={styles.contactItem}>
          <FiMail className={styles.contactIcon} aria-hidden="true" />
          <a
            href={contact.email}
            className={styles.contactLink}
            aria-label={`Email us at ${contact.emailLabel}`}
          >
            {contact.emailLabel}
          </a>
        </li>

        {/* Business Hours */}
        {contact.businessHours && (
          <li className={styles.contactItem}>
            <FiClock className={styles.contactIcon} aria-hidden="true" />
            <span className={styles.contactAddress}>{contact.businessHours}</span>
          </li>
        )}
      </ul>
    </address>
  );
}
