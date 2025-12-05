import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Athlete<span>Vault</span>
                </Link>

                <div className={styles.navLinks}>
                    <Link href="/how-it-works" className={styles.link}>How It Works</Link>
                    <Link href="/success-stories" className={styles.link}>Success Stories</Link>
                    <Link href="/recruiters" className={styles.link}>For Recruiters</Link>
                </div>

                <div className={styles.actions}>
                    <Link href="/login" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Log In
                    </Link>
                    <Link href="/waitlist" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Join Waitlist
                    </Link>
                </div>
            </div>
        </nav>
    );
}
