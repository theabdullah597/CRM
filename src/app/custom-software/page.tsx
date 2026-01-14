import { Button } from '@/components/ui/Button';
import styles from './custom.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Software Development | Lux Distributor',
    description: 'Bespoke software solutions tailored to your business needs. Web portals, legacy modernization, and API integrations.',
};

export default function CustomSoftware() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Bespoke Software Solutions</h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
                        We build custom applications that solve your specific business protocols and challenges.
                        From web portals to internal tools.
                    </p>
                    <Button href="/contact" style={{ backgroundColor: 'white', color: 'var(--primary-light)' }}>
                        Discuss Your Requirements
                    </Button>
                </div>
            </section>

            <section className="container" style={{ padding: '6rem 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Tailored to Your Workflow</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Off-the-shelf software often forces you to change how you work. Custom software adapts to your proven processes, increasing efficiency and reducing staff training time.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--accent)' }}>•</span> Web Applications & Portals
                            </li>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--accent)' }}>•</span> Legacy System Modernization
                            </li>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--accent)' }}>•</span> API Integrations
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* Visual placeholder */}
                        <div style={{
                            background: 'var(--surface)',
                            height: '100%',
                            minHeight: '300px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-muted)'
                        }}>
                            Software Interface Placeholder
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.processSection} style={{ backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary)' }}>Our Development Process</h2>
                    <div className={styles.processGrid}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>01</div>
                            <h3 className={styles.stepTitle}>Discovery</h3>
                            <p className={styles.stepDesc}>We analyze your business needs and define technical requirements.</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>02</div>
                            <h3 className={styles.stepTitle}>Design</h3>
                            <p className={styles.stepDesc}>Creating intuitive user interfaces and robust system architecture.</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>03</div>
                            <h3 className={styles.stepTitle}>Develop</h3>
                            <p className={styles.stepDesc}>Agile development with regular updates and feedback loops.</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>04</div>
                            <h3 className={styles.stepTitle}>Deploy</h3>
                            <p className={styles.stepDesc}>Seamless launch and ongoing support for your team.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Button href="/contact" variant="primary">Start Your Project</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
