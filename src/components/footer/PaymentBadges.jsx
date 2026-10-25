import styles from './Footer.module.css';

export default function PaymentBadges({ badges }) {
  return (
    <div>
      <h3 className={styles.trustHeading}>Trust indicators</h3>
      <ul className={styles.trustList}>
        {badges.map((badge) => (
          <li key={badge.label} className={styles.trustItem}>
            {badge.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
