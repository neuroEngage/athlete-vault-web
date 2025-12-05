'use client';

import Navbar from '@/components/Navbar';
import styles from './recruiters.module.css';
import Link from 'next/link';

export default function Recruiters() {
    return (
        <main>
            <Navbar />

            {/* HERO */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div>
                            <h1 className={styles.title}>
                                Find Verified Talent Fast.<br />
                                Spend Less Time Recruiting.
                            </h1>
                            <p className={styles.subtitle}>
                                Access 1M+ AI-verified athlete profiles. Connect directly. Receive personalized recommendations.
                            </p>
                            <div className={styles.ctaGroup} style={{ justifyContent: 'flex-start' }}>
                                <button className="btn btn-primary" style={{ background: '#FF6B35', borderColor: '#FF6B35' }}>Request Demo</button>
                                <button className="btn btn-outline" style={{ color: '#17B8C6', borderColor: '#17B8C6' }}>See Pricing</button>
                            </div>
                        </div>
                        <div className={styles.heroVisual}>
                            <img
                                src="/images/recruiter-dash.png"
                                alt="Recruiter Dashboard"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '12px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLEM / SOLUTION */}
            <section className={styles.problemSection}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>Finding Talent Takes Too Long</h2>

                    <div className={styles.comparisonGrid}>
                        <div className={`${styles.comparisonCard} ${styles.problem}`}>
                            <h3 className={styles.comparisonTitle}>Current Process</h3>
                            <ul className={styles.comparisonList}>
                                <li>❌ Time-consuming (50+ hours/recruit)</li>
                                <li>❌ Expensive travel costs</li>
                                <li>❌ Limited reach (nearby only)</li>
                                <li>❌ Unverified background data</li>
                            </ul>
                        </div>
                        <div className={`${styles.comparisonCard} ${styles.solution}`}>
                            <h3 className={styles.comparisonTitle}>AthleteVault Solution</h3>
                            <ul className={styles.comparisonList}>
                                <li>✅ Verified profiles (1M+ athletes)</li>
                                <li>✅ AI objective analysis</li>
                                <li>✅ Advanced search & filters</li>
                                <li>✅ Direct messaging</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className={styles.stepsSection}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-text-primary)' }}>Find Your Next Star in 3 Steps</h2>

                    <div className={styles.stepsGrid}>
                        <div className={styles.stepCard}>
                            <span className={styles.stepNumber}>1</span>
                            <h3>Create Account</h3>
                            <p style={{ color: '#A7A9A9', marginTop: '1rem' }}>Verify credentials and define your search criteria (sports, regions, levels).</p>
                        </div>
                        <div className={styles.stepCard}>
                            <span className={styles.stepNumber}>2</span>
                            <h3>Search & Filter</h3>
                            <p style={{ color: '#A7A9A9', marginTop: '1rem' }}>Browse 1M+ profiles. Use AI filters to find exact matches for your team.</p>
                        </div>
                        <div className={styles.stepCard}>
                            <span className={styles.stepNumber}>3</span>
                            <h3>Connect & Evaluate</h3>
                            <p style={{ color: '#A7A9A9', marginTop: '1rem' }}>Message athletes directly. Schedule trials. Track your recruiting pipeline.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-text-primary)' }}>Tools Built for Modern Recruiting</h2>

                    {/* Feature 1 */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureContent}>
                            <span className={styles.featureIcon}>🔍</span>
                            <h3 className={styles.featureTitle}>Smart Search & Filter</h3>
                            <p className={styles.featureDesc}>
                                Search 1M+ profiles with advanced filters. Find exactly who you need based on sport, location, age, and AI rating.
                            </p>
                            <ul className={styles.featureList}>
                                <li>✓ Filter by 50+ sports</li>
                                <li>✓ AI Performance Rating (0-10)</li>
                                <li>✓ Location & Availability</li>
                            </ul>
                        </div>
                        <div className={styles.featureVisual}>
                            <img
                                src="/images/recruiter-dash.png"
                                alt="Search Interface"
                                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                            />
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className={`${styles.featureGrid} ${styles.reverse}`}>
                        <div className={styles.featureContent}>
                            <span className={styles.featureIcon}>🤖</span>
                            <h3 className={styles.featureTitle}>AI Scouting Reports</h3>
                            <p className={styles.featureDesc}>
                                Every profile includes an AI-generated scouting report. Make faster, smarter decisions with objective data.
                            </p>
                            <ul className={styles.featureList}>
                                <li>✓ Peer comparison percentile</li>
                                <li>✓ Top 5 strengths & weaknesses</li>
                                <li>✓ 12-month progress trend</li>
                            </ul>
                        </div>
                        <div className={styles.featureVisual}>
                            <img
                                src="/images/ai-report.png"
                                alt="AI Report"
                                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                            />
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureContent}>
                            <span className={styles.featureIcon}>💬</span>
                            <h3 className={styles.featureTitle}>Direct Messaging</h3>
                            <p className={styles.featureDesc}>
                                Message athletes instantly. Schedule trials, send offers, share opportunities. All in one place.
                            </p>
                            <ul className={styles.featureList}>
                                <li>✓ Instant notifications</li>
                                <li>✓ Message templates</li>
                                <li>✓ File sharing (contracts)</li>
                            </ul>
                        </div>
                        <div className={styles.featureVisual}>
                            <img
                                src="/images/mobile-app.png"
                                alt="Messaging Interface"
                                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className={styles.pricingSection}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>Flexible Plans</h2>

                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <h3 className={styles.planName}>Starter</h3>
                            <div className={styles.planPrice}>₹5,000<span style={{ fontSize: '1rem', color: '#A7A9A9', fontWeight: 'normal' }}>/mo</span></div>
                            <ul className={styles.planFeatures}>
                                <li>500 profile searches</li>
                                <li>Direct messaging</li>
                                <li>Basic analytics</li>
                                <li>Email support</li>
                            </ul>
                            <button className="btn btn-outline" style={{ width: '100%' }}>Start Free Trial</button>
                        </div>

                        <div className={`${styles.pricingCard} ${styles.featured}`}>
                            <div style={{ color: '#17B8C6', marginBottom: '1rem', fontWeight: 'bold', fontSize: '0.9rem' }}>MOST POPULAR</div>
                            <h3 className={styles.planName}>Professional</h3>
                            <div className={styles.planPrice}>₹15,000<span style={{ fontSize: '1rem', color: '#A7A9A9', fontWeight: 'normal' }}>/mo</span></div>
                            <ul className={styles.planFeatures}>
                                <li>5,000 profile searches</li>
                                <li>Advanced analytics</li>
                                <li>Priority support</li>
                                <li>3 Team members</li>
                            </ul>
                            <button className="btn btn-primary" style={{ width: '100%' }}>Get Started</button>
                        </div>

                        <div className={styles.pricingCard}>
                            <h3 className={styles.planName}>Enterprise</h3>
                            <div className={styles.planPrice}>Custom</div>
                            <ul className={styles.planFeatures}>
                                <li>Unlimited searches</li>
                                <li>Custom integrations</li>
                                <li>Dedicated manager</li>
                                <li>Unlimited team</li>
                            </ul>
                            <button className="btn btn-outline" style={{ width: '100%' }}>Contact Sales</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>Ready to Recruit Smarter?</h2>
                    <div className={styles.ctaGroup}>
                        <button className="btn btn-primary" style={{ background: '#FF6B35', borderColor: '#FF6B35', padding: '1rem 3rem' }}>Request Demo</button>
                        <button className="btn btn-outline" style={{ padding: '1rem 3rem' }}>Contact Sales</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
