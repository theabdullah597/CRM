'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/Button';
import styles from './header.module.css';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
                    Lux Distributor
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <Link href="/crm-software" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        CRM Software
                    </Link>
                    <Link href="/custom-software" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        Custom Software
                    </Link>
                    <Link href="/about-us" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        About Us
                    </Link>
                    <Button href="/contact" variant="primary" onClick={() => setIsMenuOpen(false)}>
                        Book a Demo
                    </Button>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </header>
    );
};
