import styles from './Footer.module.css';

export default function FooterNavColumns({ columns }) {
  return (
    <div className={styles.navColumn}>
      {columns.map((column) => {
        const links = column.links.map((link) => (
          <li key={link.label}>
            <a href={link.url} className={styles.navLink}>
              {link.label}
            </a>
          </li>
        ));

        return (
          <nav key={column.label} aria-label={column.label}>
            <h3 className={styles.navHeading}>{column.label}</h3>
            <ul className={styles.navList}>{links}</ul>
          </nav>
        );
      })}
    </div>
  );
}
