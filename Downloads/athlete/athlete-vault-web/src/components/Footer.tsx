import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.footerCol}>
                    <h4>Product</h4>
                    <ul>
                        <li><Link href="/#features">Features</Link></li>
                        <li><Link href="/recruiters#pricing">Pricing</Link></li>
                        <li><Link href="/how-it-works">How It Works</Link></li>
                        <li><Link href="/how-it-works#ai-analysis">AI Scouting</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>Athletes</h4>
                    <ul>
                        <li><Link href="/how-it-works">How It Works</Link></li>
                        <li><Link href="/success-stories">Success Stories</Link></li>
                        <li><Link href="/#faq">FAQ</Link></li>
                        <li><Link href="/blog">Resources</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>Recruiters</h4>
                    <ul>
                        <li><Link href="/recruiters">Find Athletes</Link></li>
                        <li><Link href="/recruiters#pricing">Pricing</Link></li>
                        <li><Link href="/contact">Demo Request</Link></li>
                        <li><Link href="/login">Recruiter Login</Link></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>Company</h4>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© 2025 AthleteVault. All rights reserved.</p>
            </div>
        </footer>
    );
}
