import React from 'react';

const Security = () => {
  return (
    <section className="security bd-grid" id="security">
      <div className="security__data">
        <h1 className="home__title">Security</h1>
        <p className="home__text">
          We take the security of your personal information seriously. This page outlines the measures we take to protect your data. Our commitment to security is designed to safeguard your information against unauthorized access, alteration, disclosure, or destruction.
        </p>
        <h2 className="home__subtitle">1. Data Encryption</h2>
        <p className="home__text">
          We use advanced encryption technologies to ensure that your data is transmitted securely and is protected from unauthorized access. All sensitive information is encrypted during transmission using Secure Socket Layer (SSL) technology, and data at rest is encrypted with industry-standard encryption algorithms to provide an additional layer of protection.
        </p>
        <h2 className="home__subtitle">2. Access Controls</h2>
        <p className="home__text">
          Access to your data is restricted to authorized personnel only. We have implemented strict access control measures to safeguard your information. These controls include multi-factor authentication, role-based access controls, and regular audits of access logs to ensure that only those with a legitimate need have access to your data.
        </p>
        <h2 className="home__subtitle">3. Regular Security Audits</h2>
        <p className="home__text">
          We conduct regular security audits and assessments to identify and address potential vulnerabilities in our systems. These audits are performed by both internal and external security experts to ensure that our security practices are robust and up-to-date.
        </p>
        <h2 className="home__subtitle">4. Data Integrity</h2>
        <p className="home__text">
          We implement measures to ensure the integrity of your data. This includes regular data backups, checksums, and integrity verification processes to prevent data corruption and ensure that your information remains accurate and reliable.
        </p>
        <h2 className="home__subtitle">5. Incident Response</h2>
        <p className="home__text">
          In the event of a security incident, we have a comprehensive incident response plan in place. This plan includes procedures for promptly addressing and mitigating the effects of any security breach, notifying affected users, and taking steps to prevent future incidents.
        </p>
        <h2 className="home__subtitle">6. User Responsibility</h2>
        <p className="home__text">
          While we take significant steps to protect your data, it is also important for users to take measures to protect their own information. This includes using strong, unique passwords, enabling two-factor authentication where available, and being cautious of phishing attempts and other forms of social engineering.
        </p>
        <p className="home__text">
          If you have any concerns about the security of your data, please contact us. We are committed to addressing any security issues promptly and effectively. Your trust is important to us, and we strive to ensure that your personal information is safe and secure.
        </p>
      </div>
    </section>
  );
};

export default Security;
