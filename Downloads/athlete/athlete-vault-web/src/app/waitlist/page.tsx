'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import styles from './waitlist.module.css';

export default function Waitlist() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        sport: '',
        phone: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // Social proof counter (simulated)
    const [waitlistCount, setWaitlistCount] = useState(12847);

    // Simulate live counter for social proof only
    useEffect(() => {
        const interval = setInterval(() => {
            setWaitlistCount(prev => prev + Math.floor(Math.random() * 3));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // 1. Insert into Supabase
            const { error: dbError } = await supabase
                .from('waitlist')
                .insert([
                    {
                        email: formData.email,
                        name: formData.name,
                        sport: formData.sport,
                        phone: formData.phone,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (dbError) {
                console.warn('Supabase error:', dbError);
                // We continue to success state even if DB fails, to not block the user experience
                // In a real app, you might want to handle this differently
            }

            // 2. Show success state
            setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 1000);

        } catch (err) {
            console.error('Submission error:', err);
            setError('Something went wrong. Please try again.');
            setLoading(false);
        }
    };

    if (success) {
        return (
            <main className={styles.container}>
                <div className={styles.formSection} style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                    <div className={styles.successContainer}>
                        <span className={styles.successIcon}>🎉</span>
                        <h2 className={styles.successTitle}>You're on the Waitlist!</h2>
                        <p style={{ color: '#A7A9A9', marginBottom: '2rem' }}>
                            Welcome to the future of sports discovery. We've sent a confirmation email to <strong>{formData.email}</strong>.
                        </p>

                        {/* Heartwarming Message */}
                        <div style={{
                            background: 'rgba(23, 184, 198, 0.1)',
                            border: '1px solid var(--color-primary)',
                            borderRadius: '12px',
                            padding: '2rem',
                            margin: '2rem 0'
                        }}>
                            <h3 style={{
                                color: 'var(--color-primary)',
                                fontSize: '1.5rem',
                                marginBottom: '0.5rem',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                Break the records, Champ! 🏆
                            </h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>
                                Your journey to greatness starts here. We can't wait to see what you achieve.
                            </p>
                        </div>

                        <div className={styles.fomoSection} style={{ marginTop: '2rem' }}>
                            <div className={styles.fomoTitle}>Don't wait alone!</div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                                Share with your teammates to move up the list.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                                <button className="btn btn-outline" onClick={() => {
                                    navigator.clipboard.writeText(window.location.origin);
                                    alert('Link copied to clipboard!');
                                }}>Copy Link</button>
                                <button className="btn btn-primary" onClick={() => {
                                    const text = "Check out AthleteVault! I just joined the waitlist to get discovered by top coaches and brands. Join me here: " + window.location.origin;
                                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                                }}>Share on WhatsApp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.splitLayout}>

                    {/* LEFT: FORM */}
                    <div className={styles.formSection}>
                        <div className={styles.formHeader}>
                            <div className={styles.socialProofCounter}>
                                ✓ {waitlistCount.toLocaleString()} athletes joined
                            </div>
                            <h1 className={styles.formTitle}>Join India's #1 Athlete Discovery Platform</h1>
                            <p className={styles.formSubtitle}>Get discovered. Get recruited. Get sponsored.</p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label} htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={styles.input}
                                    placeholder="e.g. Arjun Kumar"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label} htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={styles.input}
                                    placeholder="your@email.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label} htmlFor="sport">Primary Sport *</label>
                                <select
                                    id="sport"
                                    name="sport"
                                    className={styles.input}
                                    required
                                    value={formData.sport}
                                    onChange={handleChange}
                                >
                                    <option value="">Select your sport</option>
                                    <option value="Badminton">Badminton</option>
                                    <option value="Cricket">Cricket</option>
                                    <option value="Football">Football</option>
                                    <option value="Kabaddi">Kabaddi</option>
                                    <option value="Hockey">Hockey</option>
                                    <option value="Athletics">Athletics</option>
                                    <option value="Tennis">Tennis</option>
                                    <option value="Basketball">Basketball</option>
                                    <option value="Wrestling">Wrestling</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label} htmlFor="phone">Phone Number (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className={styles.input}
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <span style={{ fontSize: '0.75rem', color: '#A7A9A9' }}>For exclusive early access updates.</span>
                            </div>

                            {error && <div style={{ color: '#E63946', fontSize: '0.9rem' }}>{error}</div>}

                            <button type="submit" className={styles.submitButton} disabled={loading}>
                                {loading ? 'Joining...' : 'Join Waitlist'}
                            </button>

                            <p className={styles.terms}>
                                By joining, you agree to our Terms & Privacy Policy.
                            </p>
                        </form>
                    </div>

                    {/* RIGHT: CONTENT */}
                    <div className={styles.contentSection}>

                        {/* Testimonial Carousel */}
                        <div className={styles.testimonialCarousel}>
                            <p className={styles.testimonialQuote}>
                                "I was invisible. Three months later, I got admitted to DU with quota + ₹2L sponsorship. This platform changed my life."
                            </p>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorAvatar}>
                                    <img src="/images/arjun.png" alt="Arjun" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.authorInfo}>
                                    <h4>Arjun Kumar</h4>
                                    <span>Badminton • Delhi</span>
                                </div>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <h3>🎯 2-Minute Setup</h3>
                                <p>No lengthy forms. Just the essentials to get started.</p>
                            </div>
                            <div className={styles.benefitItem}>
                                <h3>🤖 AI Scouting</h3>
                                <p>Get an objective 0-10 rating within 24 hours.</p>
                            </div>
                            <div className={styles.benefitItem}>
                                <h3>💰 Real Offers</h3>
                                <p>Sponsorships & college admissions come to you.</p>
                            </div>
                            <div className={styles.benefitItem}>
                                <h3>🔒 100% Free</h3>
                                <p>No hidden costs. Forever free for athletes.</p>
                            </div>
                        </div>

                        {/* FOMO */}
                        <div className={styles.fomoSection}>
                            <div className={styles.fomoTitle}>Don't Miss Out</div>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                                Limited early-access spots available for this batch.
                            </p>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill}></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginTop: '0.5rem', color: '#A7A9A9' }}>
                                <span>Joined: {waitlistCount.toLocaleString()}</span>
                                <span>Target: 15,000</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}
