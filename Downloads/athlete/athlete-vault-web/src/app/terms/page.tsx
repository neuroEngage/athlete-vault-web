'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
    return (
        <main>
            <Navbar />
            <div className="container" style={{ padding: '8rem 1.5rem 4rem', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-text-primary)' }}>Terms of Service</h1>
                <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>Last updated: December 5, 2025</p>

                    <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                        If you do not agree with these terms, you are prohibited from using or accessing this site.
                    </p>

                    <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Use License</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Permission is granted to temporarily download one copy of the materials (information or software) on AthleteVault's website for personal,
                        non-commercial transitory viewing only.
                    </p>

                    <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. User Accounts</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        When you create an account with us, you must provide us information that is accurate, complete, and current at all times.
                        Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>

                    <h2 style={{ color: 'var(--color-text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Content Liability</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
