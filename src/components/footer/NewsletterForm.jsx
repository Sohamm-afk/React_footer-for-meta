import { useState } from 'react';
import styles from './Footer.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*
 * Demo newsletter form.
 * Submission is simulated with an async delay. No real backend or mailing
 * list exists, so no email is actually stored or subscribed.
 */
export default function NewsletterForm({ config }) {
  const { newsletter } = config;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const errorId = 'newsletter-error';
  const statusId = 'newsletter-status';

  const isValid = EMAIL_REGEX.test(email);

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (status === 'error') setStatus('idle');
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError('Email is required.');
      setStatus('error');
      return;
    }
    if (!isValid) {
      setError('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setError('');
    setStatus('submitting');

    // Simulated async submission (demo only — no real API or mailing list).
    const simulatedFail = email === 'error@example.com';
    setTimeout(() => {
      if (simulatedFail) {
        setStatus('error');
        setError("Couldn't subscribe. Please try again later.");
      } else {
        setStatus('success');
      }
    }, 800);
  };

  const submitting = status === 'submitting';
  const done = status === 'success' || status === 'error';

  return (
    <div className={styles.newsletter}>
      <h3 className={styles.newsletterHeading}>{newsletter.heading}</h3>
      <form onSubmit={handleSubmit} noValidate>
        <label
          htmlFor={newsletter.inputLabel}
          className={styles.newsletterLabel}
        >
          {newsletter.inputLabel}
        </label>
        <input
          id={newsletter.inputLabel}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder={newsletter.inputPlaceholder}
          className={styles.newsletterInput}
          disabled={submitting || done}
          aria-invalid={done && status === 'error'}
          aria-describedby={
            status === 'error' ? errorId : undefined
          }
          required
        />
        {status === 'error' && (
          <p id={errorId} className={styles.newsletterError} role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          className={styles.newsletterButton}
          disabled={submitting || done}
        >
          {submitting ? newsletter.statusLoading : newsletter.buttonLabel}
        </button>
      </form>
      <p
        id={statusId}
        className={styles.newsletterStatus}
        aria-live="polite"
      >
        {status === 'success'
          ? newsletter.statusSuccess
          : status === 'error'
            ? ''
            : newsletter.statusIdle}
      </p>
    </div>
  );
}
