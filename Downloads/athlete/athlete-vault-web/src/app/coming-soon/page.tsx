'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ComingSoon() {
    return (
        <main>
            <Navbar />
            <div style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem'
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Coming Soon</h1>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', maxWidth: '600px' }}>
                    We're working hard to bring you this feature. Stay tuned for updates!
                </p>
            </div>
            <Footer />
        </main>
    );
}
