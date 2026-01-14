import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Lux Distributor',
    description: 'Our privacy policy and GDPR compliance information.',
};

export default function Privacy() {
    return (
        <main className="container" style={{ padding: '6rem 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem' }}>Privacy Policy & GDPR Compliance</h1>

            <div style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    At Lux Distributor, we take your privacy and data security seriously. This policy outlines how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>

                <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    We collect information you provide directly to us, such as when you fill out a contact form, request a demo, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.
                </p>

                <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    We use the information we collect to:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li>Provide, maintain, and improve our services.</li>
                    <li>Respond to your comments, questions, and requests.</li>
                    <li>Send you technical notices, updates, security alerts, and support messages.</li>
                    <li>Communicate with you about products, services, offers, and events.</li>
                </ul>

                <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Data Security</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                </p>

                <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Your Rights</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Under the UK GDPR, you have the right to access, rectify, erase, restrict processing of, and object to processing of your personal data. To exercise these rights, please contact us.
                </p>
            </div>
        </main>
    );
}
