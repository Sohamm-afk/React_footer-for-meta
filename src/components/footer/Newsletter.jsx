/*
 * Newsletter.jsx
 * Email newsletter subscription form with all UI states:
 *   idle → submitting → success | error
 *
 * Submission is simulated with setTimeout (no real backend).
 * Use error@example.com to trigger the simulated error path.
 */

import { useState } from 'react';
import { FiMail, FiArrowRight, FiCheck, FiAlertCircle } from 'react-icons/fi';
import styles from './Footer.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter({ config }) {
  const { newsletter } = config;

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const errorId = 'newsletter-error-msg';
  const statusId = 'newsletter-status-live';

  const handleChange = (e) => {
    setEmail(e.target.value);
    /* Clear error when user starts retyping */
    if (status === 'error') {
      setStatus('idle');
      setErrorMsg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Validate */
    if (!email.trim()) {
      setErrorMsg('Email address is required.');
      setStatus('error');
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setErrorMsg('');
    setStatus('submitting');

    /* Simulate async API call (replace with real endpoint in production) */
    const simulateFail = email.trim().toLowerCase() === 'error@example.com';
    setTimeout(() => {
      if (simulateFail) {
        setStatus('error');
        setErrorMsg(newsletter.statusError);
      } else {
        setStatus('success');
      }
    }, 900);
  };

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';
  const isError = status === 'error';
  const isDisabled = isSubmitting || isSuccess;

    return (
      <div className={styles.newsletter}>
        <h3 className={styles.newsletterHeading}>{newsletter.heading}</h3>
        <p className={styles.newsletterSubtext}>{newsletter.subtext}</p>


      {/* Success state — show confirmation, hide form */}
      {isSuccess ? (
        <div className={styles.newsletterSuccess} role="status" aria-live="polite">
          <FiCheck className={styles.successIcon} aria-hidden="true" />
          <p>{newsletter.statusSuccess}</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Newsletter subscription form"
        >
          <label htmlFor="newsletter-email" className={styles.newsletterLabel}>
            {newsletter.inputLabel}
          </label>

          <div className={styles.newsletterInputRow}>
            <span className={styles.inputIconWrap} aria-hidden="true">
              <FiMail />
            </span>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder={newsletter.inputPlaceholder}
              className={`${styles.newsletterInput} ${isError ? styles.newsletterInputError : ''}`}
              disabled={isDisabled}
              aria-invalid={isError}
              aria-describedby={isError ? errorId : statusId}
              required
              autoComplete="email"
            />
            <button
              type="submit"
              className={styles.newsletterButton}
              disabled={isDisabled}
              aria-label={isSubmitting ? newsletter.statusLoading : newsletter.buttonLabel}
            >
              {isSubmitting ? (
                <span className={styles.spinner} aria-hidden="true" />
              ) : (
                <FiArrowRight aria-hidden="true" />
              )}
              <span className={styles.btnText}>
                {isSubmitting ? newsletter.statusLoading : newsletter.buttonLabel}
              </span>
            </button>
          </div>

          {/* Error message */}
          {isError && (
            <p
              id={errorId}
              className={styles.newsletterErrorMsg}
              role="alert"
              aria-live="assertive"
            >
              <FiAlertCircle aria-hidden="true" />
              {errorMsg}
            </p>
          )}
        </form>
      )}

      {/* Privacy note */}
      <p id={statusId} className={styles.newsletterPrivacy} aria-live="polite">
        {newsletter.privacyNote}
      </p>
    </div>
  );
}
