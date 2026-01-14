import { ContactForm } from '@/components/ui/ContactForm';
import styles from './contact.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Lux Distributor',
    description: 'Get in touch with our London-based team. Book a demo or discuss your custom software requirements.',
};

export default function Contact() {
    return (
        <main className={styles.page}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>Let's Start the Conversation</h1>
                        <p className={styles.subtitle}>
                            Ready to see how our CRM or custom software can transform your business?
                            Fill out the form, and we'll be in touch within 24 hours.
                        </p>

                        <div className={styles.contactItem}>
                            <div className={styles.icon}>📍</div>
                            <div className={styles.details}>
                                <h3>Visit Us</h3>
                                <p>
                                    219 Kensington High Street<br />
                                    London, England, W8 6BD
                                </p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.icon}>📞</div>
                            <div className={styles.details}>
                                <h3>Call Us</h3>
                                <p>
                                    <a href="tel:07985673334">07985673334</a>
                                </p>
                                <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                                    Mon-Fri, 9am - 6pm GMT
                                </p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.icon}>✉️</div>
                            <div className={styles.details}>
                                <h3>Email Sales</h3>
                                <p>
                                    <a href="mailto:sales@luxdistributor.co.uk">sales@luxdistributor.co.uk</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
