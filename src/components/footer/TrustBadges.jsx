/*
 * TrustBadges.jsx
 * Renders trust badges (Secure Payments, Easy Returns, ISO Certified)
 * and payment method pill labels (Visa, Mastercard, UPI, RuPay, Amex).
 */

import { FiShield, FiRefreshCcw, FiAward } from 'react-icons/fi';
import styles from './Footer.module.css';

/* Map icon IDs from config to react-icons */
const BADGE_ICONS = {
  shield: FiShield,
  return: FiRefreshCcw,
  certified: FiAward,
};

export default function TrustBadges({ trust }) {
  return (
    <div className={styles.trustBlock}>
      <div className={styles.trustRow}>
        {/* Trust badges */}
        <ul className={styles.trustBadgeList} aria-label="Trust certifications">
          {trust.badges.map((badge) => {
            const Icon = BADGE_ICONS[badge.icon] || FiShield;
            return (
              <li key={badge.id} className={styles.trustBadge}>
                <Icon className={styles.trustBadgeIcon} aria-hidden="true" />
                <span>{badge.label}</span>
              </li>
            );
          })}
        </ul>

        {trust.payments && trust.payments.length > 0 && (
          <div className={styles.paymentSection}>
            <p className={styles.paymentLabel}>We accept</p>
            <ul className={styles.paymentList} aria-label="Accepted payment methods">
              {trust.payments.map((method) => (
                <li key={method.id} className={styles.paymentPill}>
                  {method.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
