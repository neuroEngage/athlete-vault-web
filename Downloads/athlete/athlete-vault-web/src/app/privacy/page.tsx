'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacy() {
    return (
        <main>
            <Navbar />
            <div className="container" style={{ padding: '8rem 1.5rem 4rem', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-text-primary)' }}>Privacy Policy</h1>
                <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>Last updated: December 5, 2025</p>

                    <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Welcome to AthleteVault. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Data We Collect</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, date of birth and gender.</li>
                        <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                        <li><strong>Profile Data:</strong> includes your sports, achievements, performance metrics, and interests.</li>
                    </ul>

                    <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. How We Use Your Data</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li>To register you as a new athlete or recruiter.</li>
                        <li>To match athletes with potential opportunities (sponsorships, admissions).</li>
                        <li>To improve our website, products/services, marketing or customer relationships.</li>
                    </ul>

                    <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Data Security</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
