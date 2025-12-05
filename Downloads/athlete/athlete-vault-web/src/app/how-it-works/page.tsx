'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './how-it-works.module.css';
import Link from 'next/link';

export default function HowItWorks() {
    return (
        <main>
            <Navbar />

            {/* HERO */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>How AthleteVault Discovers Your Potential</h1>
                    <p className={styles.subtitle}>A step-by-step journey from invisible to unstoppable.</p>
                </div>
            </section>

            {/* JOURNEY TIMELINE */}
            <section className={styles.journeySection}>
                <div className="container">
                    <div className={styles.timeline}>

                        {/* Step 1 */}
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>Create Your Profile</h3>
                                <p className={styles.stepDesc}>
                                    Start your journey in just 2 minutes. Upload basic info, select sports, add achievements. No complex forms.
                                </p>
                                <ul className={styles.stepList}>
                                    <li>Name, age, school/college</li>
                                    <li>Sports & Achievements</li>
                                    <li>Certificates/proof</li>
                                </ul>
                                <Link href="/waitlist" className="btn btn-primary">Try Demo Form</Link>
                            </div>
                            <div className={styles.stepVisual}>
                                <img
                                    src="/images/dashboard.png"
                                    alt="Profile Creation"
                                    style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                                />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className={`${styles.step} ${styles.reverse}`}>
                            <div className={styles.stepNumber} style={{ borderColor: '#FF6B35', color: '#FF6B35' }}>2</div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>AI Verification & Analysis</h3>
                                <p className={styles.stepDesc}>
                                    Our AI analyzes your profile, cross-references with official databases, and generates a comprehensive scouting report.
                                </p>
                                <ul className={styles.stepList}>
                                    <li>AI extracts 15+ metrics</li>
                                    <li>Generates objective rating (0-10)</li>
                                    <li>Identifies national peers</li>
                                </ul>
                                <button className="btn btn-outline" style={{ color: '#FF6B35', borderColor: '#FF6B35' }}>See Sample Report</button>
                            </div>
                            <div className={styles.stepVisual}>
                                <img
                                    src="/images/ai-report.png"
                                    alt="AI Analysis"
                                    style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                                />
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className={styles.step}>
                            <div className={styles.stepNumber} style={{ borderColor: '#27AE60', color: '#27AE60' }}>3</div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>Profile Goes Live</h3>
                                <p className={styles.stepDesc}>
                                    Your verified profile is now live. 500+ coaches immediately see your profile in relevant searches.
                                </p>
                                <ul className={styles.stepList}>
                                    <li>Searchable by recruiters</li>
                                    <li>AI sends recommendations</li>
                                    <li>Verified badge appears</li>
                                </ul>
                                <button className="btn btn-outline" style={{ color: '#27AE60', borderColor: '#27AE60' }}>See Live Profile</button>
                            </div>
                            <div className={styles.stepVisual}>
                                <img
                                    src="/images/mobile-app.png"
                                    alt="Live Profile"
                                    style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                                />
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className={`${styles.step} ${styles.reverse}`}>
                            <div className={styles.stepNumber} style={{ borderColor: '#FF6B35', color: '#FF6B35' }}>4</div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>Opportunities Come to You</h3>
                                <p className={styles.stepDesc}>
                                    College coaches find you. Sponsors see your profile. Everyone reaches out with offers.
                                </p>
                                <ul className={styles.stepList}>
                                    <li>View your scouting report</li>
                                    <li>Message you directly</li>
                                    <li>Send offers/trials</li>
                                </ul>
                                <button className="btn btn-outline" style={{ color: '#FF6B35', borderColor: '#FF6B35' }}>See Messages</button>
                            </div>
                            <div className={styles.stepVisual}>
                                <img
                                    src="/images/mobile-app.png"
                                    alt="Messages"
                                    style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                                />
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className={styles.step}>
                            <div className={styles.stepNumber} style={{ borderColor: '#17B8C6', color: '#17B8C6' }}>5</div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>Dream Achieved</h3>
                                <p className={styles.stepDesc}>
                                    College admission. Sponsorship offers. National trials. Scholarship. Your hard work finally gets recognized.
                                </p>
                                <ul className={styles.stepList}>
                                    <li>College admissions</li>
                                    <li>Sponsorships</li>
                                    <li>National team trials</li>
                                </ul>
                                <Link href="/success-stories" className="btn btn-primary">Join Success Stories</Link>
                            </div>
                            <div className={styles.stepVisual}>
                                <img
                                    src="/images/dashboard.png"
                                    alt="Success"
                                    style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FEATURE DEEP DIVES */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Features That Make AthleteVault Different</h2>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard} style={{ borderColor: '#17B8C6' }}>
                            <span className={styles.featureIcon}>🤖</span>
                            <h3>AI-Powered Scouting Reports</h3>
                            <h4>Objective Analysis of Your Performance</h4>
                            <p style={{ color: '#A7A9A9', marginBottom: '1.5rem' }}>
                                Get an objective rating (0-10) compared to national peers. Our AI identifies your strengths, weaknesses, and growth areas.
                            </p>
                            <button className="btn btn-outline" style={{ color: '#17B8C6', borderColor: '#17B8C6' }}>View Sample</button>
                        </div>

                        <div className={styles.featureCard} style={{ borderColor: '#27AE60' }}>
                            <span className={styles.featureIcon}>✅</span>
                            <h3>Verified & Authenticated</h3>
                            <h4>Coaches Know You're the Real Deal</h4>
                            <p style={{ color: '#A7A9A9', marginBottom: '1.5rem' }}>
                                Every achievement is verified. Every profile is authenticated. Coaches trust verified athletes 10x more.
                            </p>
                            <button className="btn btn-outline" style={{ color: '#27AE60', borderColor: '#27AE60' }}>Learn More</button>
                        </div>

                        <div className={styles.featureCard} style={{ borderColor: '#FF6B35' }}>
                            <span className={styles.featureIcon}>🤝</span>
                            <h3>500+ Verified Recruiters</h3>
                            <h4>Direct Connection to Decision Makers</h4>
                            <p style={{ color: '#A7A9A9', marginBottom: '1.5rem' }}>
                                Connected to college coaches, sponsors, and national selectors. When you're ready, they're ready.
                            </p>
                            <button className="btn btn-outline" style={{ color: '#FF6B35', borderColor: '#FF6B35' }}>See Network</button>
                        </div>

                        <div className={styles.featureCard} style={{ borderColor: '#2180E1' }}>
                            <span className={styles.featureIcon}>🎯</span>
                            <h3>Smart Opportunity Matching</h3>
                            <h4>Right Opportunities Find You</h4>
                            <p style={{ color: '#A7A9A9', marginBottom: '1.5rem' }}>
                                We match you with the right opportunities. No spam. Just real opportunities that fit you.
                            </p>
                            <button className="btn btn-outline" style={{ color: '#2180E1', borderColor: '#2180E1' }}>Try Matching</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUCCESS METRICS */}
            <section className={styles.metricsSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Impact By The Numbers</h2>
                    </div>
                    <div className={styles.metricsGrid}>
                        <div className={styles.metricCard}>
                            <span className={styles.metricNumber} style={{ color: '#17B8C6' }}>3.2M+</span>
                            <span className={styles.metricLabel}>Profiles Created</span>
                        </div>
                        <div className={styles.metricCard}>
                            <span className={styles.metricNumber} style={{ color: '#27AE60' }}>47%</span>
                            <span className={styles.metricLabel}>Sponsorship Rate</span>
                        </div>
                        <div className={styles.metricCard}>
                            <span className={styles.metricNumber} style={{ color: '#FF6B35' }}>4.7</span>
                            <span className={styles.metricLabel}>Avg Offers/Athlete</span>
                        </div>
                        <div className={styles.metricCard}>
                            <span className={styles.metricNumber} style={{ color: '#2180E1' }}>28</span>
                            <span className={styles.metricLabel}>States Represented</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>Ready to Get Discovered?</h2>
                    <div className={styles.ctaGroup}>
                        <Link href="/waitlist" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Join Waitlist Now</Link>
                        <button className="btn btn-outline" style={{ padding: '1rem 3rem' }}>Schedule Demo</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
