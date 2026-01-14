import { Button } from '@/components/ui/Button';
import styles from './home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lux Distributor | CRM & Custom Software Solutions',
  description: 'UK-based provider of intelligent CRM software and bespoke business applications. Streamline your operations today.',
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Transform Your Business with <span style={{ color: 'var(--accent)' }}>Intelligent Software</span>
            </h1>
            <p className={styles.subtitle}>
              Powerful CRM solutions and custom software development tailored for UK businesses.
              Streamline operations and drive growth.
            </p>
            <div className={styles.heroButtons}>
              <Button href="/contact" variant="primary">
                Book a Demo
              </Button>
              <Button href="/contact" variant="outline">
                Contact Sales
              </Button>
            </div>

            <div className={styles.trustSignals}>
              <div className={styles.trustItem}>
                <span>🇬🇧</span> UK-Based Support
              </div>
              <div className={styles.trustItem}>
                <span>🛡️</span> GDPR Compliant
              </div>
              <div className={styles.trustItem}>
                <span>📍</span> London HQ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Stop Losing Leads to Disorganization</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📊</div>
              <h3 className={styles.cardTitle}>Scattered Data</h3>
              <p className={styles.cardText}>
                Customer information spread across spreadsheets and emails makes it impossible to track relationships effectively.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>⚙️</div>
              <h3 className={styles.cardTitle}>Manual Workflows</h3>
              <p className={styles.cardText}>
                Wasting hours on repetitive administrative tasks instead of focusing on high-value sales activities.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📉</div>
              <h3 className={styles.cardTitle}>Missed Opportunities</h3>
              <p className={styles.cardText}>
                Without timely follow-ups and tracking, potential deals slip through the cracks unnoticed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className={styles.sectionGrey}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Solutions</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🚀</div>
              <h3 className={styles.cardTitle}>CRM Software</h3>
              <p className={styles.cardText}>
                A complete customer relationship management platform designed for sales-driven teams.
                Track leads, manage pipelines, and close more deals.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Button href="/crm-software" variant="secondary">Learn More</Button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💻</div>
              <h3 className={styles.cardTitle}>Custom Software</h3>
              <p className={styles.cardText}>
                Bespoke software development to solve unique business challenges.
                From operations portals to specialized tools, we build what you need.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Button href="/custom-software" variant="secondary">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Built for Growth</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Lead Management</h3>
              <p className={styles.cardText}>
                Capture, organize, and prioritize leads automatically. Ensure no prospect is ever forgotten.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Sales Tracking</h3>
              <p className={styles.cardText}>
                Visual pipelines give you instant insight into your sales performance and forecasts.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Automation</h3>
              <p className={styles.cardText}>
                Automate follow-up emails, task creation, and data entry to save valuable time.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Customization</h3>
              <p className={styles.cardText}>
                Flexible configuration to match your specific business processes and terminology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle} style={{ color: 'white' }}>Ready to optimize your business?</h2>
          <p className={styles.ctaText}>
            Join other UK businesses streamlining their operations with Lux Distributor.
          </p>
          <Button href="/contact" style={{ backgroundColor: 'green', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
            Book a Demo Today
          </Button>
        </div>
      </section>
    </main>
  );
}
