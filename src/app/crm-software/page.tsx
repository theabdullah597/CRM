import { Button } from '@/components/ui/Button';
import styles from './crm.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CRM Software | Lux Distributor',
    description: 'Unified CRM platform for UK SMEs. Manage leads, track sales pipelines, and automate workflows.',
};

export default function CRMSoftware() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Unified CRM for Modern Business</h1>
                    <p className={styles.subtitle}>
                        A centralized platform to manage relationships, track sales, and automate workflows.
                        Designed for UK SMEs looking to scale.
                    </p>
                    <Button href="/contact" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>
                        Request a Consultation
                    </Button>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <div className="text-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Key Capabilities</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Everything you need to manage your customer lifecycle.</p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Lead & Contact Management</h3>
                            <ul className={styles.featureList}>
                                <li>Centralized customer database</li>
                                <li>Activity timeline tracking</li>
                                <li>Document storage & sharing</li>
                                <li>Smart contact segmentation</li>
                            </ul>
                        </div>

                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Sales Pipeline</h3>
                            <ul className={styles.featureList}>
                                <li>Visual deal tracking</li>
                                <li>Customizable sales stages</li>
                                <li>Revenue forecasting</li>
                                <li>Performance analytics</li>
                            </ul>
                        </div>

                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Workflow Automation</h3>
                            <ul className={styles.featureList}>
                                <li>Automated email sequences</li>
                                <li>Task reminders & triggers</li>
                                <li>Lead scoring</li>
                                <li>Meeting scheduling</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.sectionAlt}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
                        Why Choose Lux Distributor CRM?
                    </h2>
                    <div className={styles.grid}>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>UK-Centric Compliance</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Fully compliant with UK GDPR regulations, with data hosted securely.</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Easy Onboarding</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Simple setup process with dedicated support to get your team running in days, not months.</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Scalable Architecture</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Grow from 2 users to 200 without changing platforms. The system adapts to you.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>See it in action</h2>
                    <Button href="/contact" variant="primary">Book a Live Demo</Button>
                </div>
            </section>
        </main>
    );
}
