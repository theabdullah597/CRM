import styles from './about.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Lux Distributor',
    description: 'Learn about Lux Distributor, a UK-based technology partner dedicated to empowering businesses with robust software solutions.',
};

export default function AboutUs() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Lux Distributor</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                        Empowering UK businesses with meaningful technology
                    </p>
                </div>
            </section>

            <section className="container">
                <div className={styles.content}>
                    <div className={styles.textBlock}>
                        <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Our Mission</h2>
                        <p>
                            At Lux Distributor, we believe that technology should be an asset, not a hurdle.
                            Founded in London, we specialize in bridging the gap between complex software capabilities and
                            practical business needs.
                        </p>
                        <p>
                            Our focus is singular: to provide robust CRM and custom software solutions that help
                            UK-based SMEs streamline their operations, ensure compliance, and drive measurable growth.
                        </p>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>UK</span>
                            <span className={styles.statLabel}>Based & Operated</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>100%</span>
                            <span className={styles.statLabel}>Focus on Business</span>
                        </div>
                    </div>

                    <div className={styles.textBlock}>
                        <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Why We Are Different</h2>
                        <p>
                            We don't just sell software; we act as your technology partner. We understand the specific
                            regulatory and operational challenges faced by UK businesses, from GDPR compliance to
                            local market dynamics.
                        </p>
                    </div>

                    <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', marginTop: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Visit Our HQ</h3>
                        <address style={{ fontStyle: 'normal', lineHeight: '1.6' }}>
                            <strong>Lux Distributor</strong><br />
                            219 Kensington High Street<br />
                            London, England, W8 6BD<br /><br />
                            <a href="tel:07985673334" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>07985673334</a>
                        </address>
                    </div>
                </div>
            </section>
        </main>
    );
}
