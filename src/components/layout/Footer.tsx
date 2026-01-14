import Link from 'next/link';
import styles from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            Lux Distributor
                        </Link>
                        <p className={styles.tagline}>
                            Empowering UK businesses with advanced CRM and custom software solutions.
                        </p>
                        <address className={styles.address}>
                            219 Kensington High Street<br />
                            London, England, W8 6BD<br />
                            <a href="tel:07985673334">07985673334</a>
                        </address>
                    </div>

                    <div className={styles.links}>
                        <h4>Solutions</h4>
                        <Link href="/crm-software">CRM Software</Link>
                        <Link href="/custom-software">Custom Software</Link>
                    </div>

                    <div className={styles.links}>
                        <h4>Company</h4>
                        <Link href="/about-us">About Us</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Lux Distributor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
