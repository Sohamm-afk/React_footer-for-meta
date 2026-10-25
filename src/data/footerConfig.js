/*
 * footerConfig.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all footer content.
 * Components must NOT hardcode any text, URLs, or icons — read everything here.
 *
 * To update footer content: edit ONLY this file. No component changes needed.
 *
 * Placeholder note: replace example.com URLs, phone numbers, and addresses
 * with verified MetaSkillGroup production values before launch.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const footerConfig = {
  /* ── Brand ─────────────────────────────────────────────────────────────── */
  brand: {
    name: 'MetaSkillGroup',
    description:
      'A software company in Dehradun, India. We build web apps, mobile apps and backends for clients, run a remote developer internship, and publish ready-made code on our marketplace.',
    logo: {
      text: 'MetaSkillGroup',
      src: '/metaskill-logo.png',
      alt: 'MetaSkillGroup',
      href: 'https://metaskillgroup.example/',
    },
  },

  /* ── Social links ───────────────────────────────────────────────────────── */
  social: {
    heading: 'Follow Us',
    links: [
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://instagram.com/metaskillgroup',
        label: 'MetaSkillGroup on Instagram',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'https://linkedin.com/company/metaskillgroup',
        label: 'MetaSkillGroup on LinkedIn',
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'https://facebook.com/metaskillgroup',
        label: 'MetaSkillGroup on Facebook',
      },
      {
        id: 'x',
        name: 'X / Twitter',
        url: 'https://x.com/metaskillgroup',
        label: 'MetaSkillGroup on X (formerly Twitter)',
      },
      {
        id: 'youtube',
        name: 'YouTube',
        url: 'https://youtube.com/@metaskillgroup',
        label: 'MetaSkillGroup on YouTube',
      },
    ],
  },

  /* ── Navigation columns ─────────────────────────────────────────────────── */
  navigation: [
    {
      id: 'company',
      label: 'Company',
      links: [
        { label: 'About Us', url: '/about' },
        { label: 'Our Team', url: '/team' },
        { label: 'Careers', url: '/careers' },
        { label: 'Partnerships', url: '/partnerships' },
        { label: 'Terms & Conditions', url: '/terms' },
        { label: 'Privacy Policy', url: '/privacy' },
      ],
    },
    {
      id: 'resources',
      label: 'Resources',
      links: [
        { label: 'Our Services', url: '/services' },
        { label: 'Learning Resources', url: '/learning' },
        { label: 'Programs', url: '/programs' },
        { label: 'Student Resources', url: '/student-resources' },
        { label: 'Career Guidance', url: '/career-guidance' },
        { label: 'FAQ', url: '/faq' },
      ],
    },
    {
      id: 'support',
      label: 'Support',
      links: [
        { label: 'Help Center', url: '/help' },
        { label: 'FAQs', url: '/faq' },
        { label: 'Contact Us', url: '/contact' },
        { label: 'Shipping Information', url: '/shipping' },
        { label: 'Returns & Refunds', url: '/refunds' },
        { label: 'Privacy & Security', url: '/security' },
      ],
    },
  ],

  /* ── Contact ────────────────────────────────────────────────────────────── */
  contact: {
    heading: 'Contact Us',
    phone: 'tel:+918708867560',
    phoneLabel: '+91 87088 67560',
    email: 'mailto:support@metaskillgroup.com',
    emailLabel: 'support@metaskillgroup.com',
    address: 'Dehradun, Uttarakhand, India',
    businessHours: 'Mon–Sat, 10:00 am – 5:00 pm IST',
  },

  /* ── Newsletter ─────────────────────────────────────────────────────────── */
  newsletter: {
    heading: 'Stay in the loop',
    subtext: 'Get internship openings, career tips, and program updates — weekly, no spam.',
    inputLabel: 'Your email address',
    inputPlaceholder: 'you@example.com',
    buttonLabel: 'Subscribe',
    statusLoading: 'Subscribing\u2026',
    statusSuccess: 'You\u2019re subscribed! Check your inbox.',
    statusError: 'Something went wrong. Please try again.',
    privacyNote: 'We respect your privacy. Unsubscribe at any time.',
  },

  /* ── Trust / payment badges ─────────────────────────────────────────────── */
  trust: {
    heading: 'Industry Trusted',
    badges: [
      { id: 'secure', label: 'Secure Platform', icon: 'shield' },
      { id: 'certified', label: 'Industry Certified', icon: 'certified' },
      { id: 'verified', label: 'Verified Partners', icon: 'award' },
    ],
    payments: [
      { id: 'visa', label: 'Visa' },
      { id: 'mastercard', label: 'Mastercard' },
      { id: 'upi', label: 'UPI' },
      { id: 'rupay', label: 'RuPay' },
      { id: 'amex', label: 'Amex' },
    ],
  },

  /* ── App download ───────────────────────────────────────────────────────── */
  app: {
    heading: 'Get the App',
    subtext: 'Apply to internships on the go.',
    stores: [
      {
        id: 'ios',
        label: 'Download on the App Store',
        url: 'https://apps.apple.com/app/metaskillgroup',
      },
      {
        id: 'android',
        label: 'Get it on Google Play',
        url: 'https://play.google.com/store/apps/metaskillgroup',
      },
    ],
  },

  /* ── Language selector ──────────────────────────────────────────────────── */
  languages: [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' },
    { code: 'mr', label: 'Marathi' },
    { code: 'ta', label: 'Tamil' },
    { code: 'te', label: 'Telugu' },
  ],
  defaultLanguage: 'en',

  /* ── Legal links ────────────────────────────────────────────────────────── */
  legal: [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms & Conditions', url: '/terms' },
    { label: 'Cookie Policy', url: '/cookies' },
    { label: 'Accessibility', url: '/accessibility' },
  ],

  /* ── Copyright ──────────────────────────────────────────────────────────── */
  copyright: {
    owner: 'MetaSkillGroup',
    startYear: 2024,
    /* currentYear is computed dynamically in JavaScript - never hardcode it */
  },

  /* ── JSON-LD structured data (Organization) ─────────────────────────────── */
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MetaSkillGroup',
    url: 'https://metaskillgroup.example/',
    logo: 'https://metaskillgroup.example/logo.png',
    sameAs: [
      'https://instagram.com/metaskillgroup',
      'https://linkedin.com/company/metaskillgroup',
      'https://facebook.com/metaskillgroup',
      'https://x.com/metaskillgroup',
      'https://youtube.com/@metaskillgroup',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-88000-01234',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
      email: 'hello@metaskillgroup.example',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4th Floor, The Skill Tower, Bandra Kurla Complex',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400051',
      addressCountry: 'IN',
    },
  },
};
