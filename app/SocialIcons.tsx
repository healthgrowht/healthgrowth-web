import React from 'react';

export function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-bg" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-bg)" />
      <rect x="6" y="6" width="12" height="12" rx="3.5" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="16.5" cy="7.5" r="0.8" fill="white" />
    </svg>
  );
}

export function FacebookIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        d="M13.5 8H15V5.5H13C11.34 5.5 10 6.84 10 8.5V10H8V12.5H10V19H12.5V12.5H14.5L15 10H12.5V8.5C12.5 8.22 12.72 8 13 8H13.5Z"
        fill="white"
      />
    </svg>
  );
}

export function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#25D366" />
      <path
        d="M12 4C7.58 4 4 7.58 4 12C4 13.49 4.42 14.87 5.14 16.04L4 20L8.08 18.93C9.23 19.63 10.57 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM15.9 15.08C15.74 15.53 14.96 15.96 14.6 16C14.25 16.04 13.57 16.14 11.53 15.35C9.09 14.4 7.5 11.91 7.38 11.75C7.26 11.59 6.3 10.45 6.3 9.27C6.3 8.09 6.91 7.51 7.13 7.27C7.35 7.03 7.6 6.97 7.76 6.97H8.18C8.32 6.97 8.5 6.91 8.69 7.36C8.88 7.82 9.34 9 9.4 9.11C9.46 9.22 9.5 9.35 9.42 9.5C9.34 9.65 9.3 9.74 9.18 9.87C9.06 10 8.92 10.16 8.82 10.25C8.7 10.35 8.58 10.46 8.7 10.65C8.82 10.84 9.32 11.56 10.04 12.18C10.96 13 11.75 13.25 11.96 13.36C12.17 13.47 12.3 13.45 12.43 13.31C12.56 13.17 13.03 12.61 13.18 12.38C13.33 12.14 13.48 12.18 13.69 12.26C13.9 12.34 15.09 12.92 15.31 13.04C15.53 13.16 15.68 13.22 15.74 13.3C15.8 13.38 15.8 13.9 15.9 15.08Z"
        fill="white"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#0A66C2" />
      <path d="M7.75 9.5H5.5V18H7.75V9.5Z" fill="white" />
      <circle cx="6.625" cy="6.875" r="1.375" fill="white" />
      <path
        d="M19 18H16.75V13.75C16.75 12.65 16.73 11.25 15.25 11.25C13.75 11.25 13.5 12.45 13.5 13.67V18H11.25V9.5H13.4V10.57H13.43C13.73 10 14.47 9.38 15.58 9.38C17.88 9.38 18.25 10.89 18.25 12.85L19 18Z"
        fill="white"
      />
    </svg>
  );
}

export function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#010101" />
      <path
        d="M17.5 7.5C16.7 7.5 16 7.1 15.5 6.5V14.5C15.5 16.7 13.7 18.5 11.5 18.5C9.3 18.5 7.5 16.7 7.5 14.5C7.5 12.3 9.3 10.5 11.5 10.5C11.7 10.5 11.9 10.5 12.1 10.6V13C11.9 12.9 11.7 12.9 11.5 12.9C10.6 12.9 9.9 13.6 9.9 14.5C9.9 15.4 10.6 16.1 11.5 16.1C12.4 16.1 13.1 15.4 13.1 14.5V5.5H15.5C15.5 6.6 16.4 7.5 17.5 7.5Z"
        fill="white"
      />
      <path
        d="M17.5 7.5C16.7 7.5 16 7.1 15.5 6.5V14.5C15.5 16.7 13.7 18.5 11.5 18.5C9.3 18.5 7.5 16.7 7.5 14.5C7.5 12.3 9.3 10.5 11.5 10.5C11.7 10.5 11.9 10.5 12.1 10.6V13C11.9 12.9 11.7 12.9 11.5 12.9C10.6 12.9 9.9 13.6 9.9 14.5C9.9 15.4 10.6 16.1 11.5 16.1C12.4 16.1 13.1 15.4 13.1 14.5V5.5H15.5C15.5 6.6 16.4 7.5 17.5 7.5Z"
        fill="#EE1D52"
        opacity="0.5"
      />
    </svg>
  );
}
