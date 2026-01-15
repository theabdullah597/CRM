import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    href?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    href,
    className = '',
    ...props
}) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClass} {...(props as any)}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};
