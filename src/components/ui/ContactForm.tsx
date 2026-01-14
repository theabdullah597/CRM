'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Button } from './Button';
import styles from './contactForm.module.css';

export const ContactForm = () => {
    // ID provided by user
    const [state, handleSubmit] = useForm("mvzzgzpq");

    if (state.succeeded) {
        return (
            <div className={styles.successMessage}>
                <h3>Thank you for joining!</h3>
                <p>We will be in touch shortly.</p>
                {/* Simple reload to reset for now, or just show success */}
                <Button href="/" variant="outline">Back to Home</Button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Smith"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="company">Company Name *</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Lux Business Ltd"
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Work Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">How can we help? *</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="I'm interested in..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <Button type="submit" variant="primary" disabled={state.submitting} style={{ width: '100%' }}>
                {state.submitting ? 'Sending...' : 'Request Demo'}
            </Button>
        </form>
    );
};
