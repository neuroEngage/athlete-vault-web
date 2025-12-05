'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './success-stories.module.css';
import Link from 'next/link';

export default function SuccessStories() {
    return (
        <main>
            <Navbar />

            {/* HERO */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Real Athletes. Real Outcomes. Real Stories.</h1>
                    <p className={styles.subtitle}>
                        See how athletes just like you got discovered, got sponsored, and got into their dream colleges.
                    </p>
                </div>
            </section>

            {/* FEATURED STORIES */}
            <section className={styles.storiesSection}>
                <div className="container">

                    {/* Story 1: Arjun */}
                    <div className={styles.storyRow}>
                        <div className={styles.storyCard} style={{ borderColor: '#17B8C6' }}>
                            <div className={styles.cardHeader}>
                                <div className={styles.avatar}>
                                    <img src="/images/arjun.png" alt="Arjun Kumar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.athleteInfo}>
                                    <h3>Arjun Kumar</h3>
                                    <div className={styles.athleteMeta}>19 • Badminton • Delhi</div>
                                </div>
                            </div>
                            <p className={styles.quote}>
                                "I was good, but nobody knew it. Within 3 months on AthleteVault, DU coaches found me, offered me a sports quota, and Nike approached me for sponsorship. Now I'm training full-time."
                            </p>
                            <div className={styles.statsBox}>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> Profile Created: Jan 15</div>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> AI Rating: 7.8/10</div>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> Sponsorship: ₹2L/year (Nike)</div>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> Admission: DU Sports Quota</div>
                            </div>
                        </div>

                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>Jan 15</span>
                                <span className={styles.timelineEvent}>Profile Created</span>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>Jan 22</span>
                                <span className={styles.timelineEvent}>First Coach Message</span>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>Feb 10</span>
                                <span className={styles.timelineEvent}>Sponsorship Offer (Nike)</span>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>Feb 28</span>
                                <span className={styles.timelineEvent}>College Admission (DU)</span>
                            </div>
                        </div>
                    </div>

                    {/* Story 2: Priya */}
                    <div className={styles.storyRow}>
                        <div className={styles.storyCard} style={{ borderColor: '#FF6B35', background: 'rgba(255, 107, 53, 0.05)' }}>
                            <div className={styles.cardHeader}>
                                <div className={styles.avatar}>
                                    <img src="/images/priya.png" alt="Priya Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.athleteInfo}>
                                    <h3>Priya Sharma</h3>
                                    <div className={styles.athleteMeta}>21 • Cricket • Mumbai</div>
                                </div>
                            </div>
                            <p className={styles.quote}>
                                "Female athletes in India face a wall. AthleteVault changed that. I went from being invisible to having 3 sponsorships. Today, I earn ₹5L+ annually while pursuing my cricket dreams."
                            </p>
                            <div className={styles.statsBox}>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> Profile Created: Feb 1</div>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> AI Rating: 8.1/10</div>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> Sponsorships: 3 Secured</div>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> Annual Income: ₹5L+</div>
                            </div>
                        </div>

                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>Feb 1</span>
                                <span className={styles.timelineEvent}>Profile Created</span>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>Feb 15</span>
                                <span className={styles.timelineEvent}>First Sponsor Message</span>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>Mar 01</span>
                                <span className={styles.timelineEvent}>Sponsorship Deal #1</span>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>May 01</span>
                                <span className={styles.timelineEvent}>Professional Contract</span>
                            </div>
                        </div>
                    </div>

                    {/* Story 3: Rohit */}
                    <div className={styles.storyRow}>
                        <div className={styles.storyCard} style={{ borderColor: '#27AE60', background: 'rgba(39, 174, 96, 0.05)' }}>
                            <div className={styles.cardHeader}>
                                <div className={styles.avatar}>
                                    <img src="/images/rohit.png" alt="Rohit Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.athleteInfo}>
                                    <h3>Rohit Patel</h3>
                                    <div className={styles.athleteMeta}>18 • Kabaddi • Indore</div>
                                </div>
                            </div>
                            <p className={styles.quote}>
                                "I'm from a small city. My talent was caged. A month after joining, I got a message from a national selector. Now I'm in the national team development program with a scholarship."
                            </p>
                            <div className={styles.statsBox}>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> Profile Created: Mar 10</div>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> National Trials: Qualified</div>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> Scholarship: ₹1L Awarded</div>
                                <div className={styles.statItem}><span className={styles.statIcon}>✅</span> Status: National Dev Program</div>
                            </div>
                        </div>

                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>Mar 10</span>
                                <span className={styles.timelineEvent}>Profile Created</span>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>Apr 05</span>
                                <span className={styles.timelineEvent}>Message from Selector</span>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>May 03</span>
                                <span className={styles.timelineEvent}>National Trials Qualified</span>
                            </div>
                            <div className={styles.timelineItem}>
                                <span className={styles.timelineDate}>May 15</span>
                                <span className={styles.timelineEvent}>Scholarship Awarded</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* IMPACT BY CATEGORY */}
            <section className={styles.impactSection}>
                <div className="container">
                    <div className={styles.sectionHeader} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className={styles.sectionTitle} style={{ color: 'var(--color-bg-dark)' }}>Impact Across India</h2>
                    </div>

                    <div className={styles.impactGrid}>
                        <div className={styles.impactCard}>
                            <h3 style={{ color: 'var(--color-bg-dark)' }}>By Sport</h3>
                            <ul className={styles.impactList}>
                                <li><span>Badminton</span> <span className={styles.impactCount}>234</span></li>
                                <li><span>Cricket</span> <span className={styles.impactCount}>187</span></li>
                                <li><span>Kabaddi</span> <span className={styles.impactCount}>156</span></li>
                                <li><span>Hockey</span> <span className={styles.impactCount}>143</span></li>
                                <li><span>Football</span> <span className={styles.impactCount}>128</span></li>
                            </ul>
                        </div>

                        <div className={styles.impactCard}>
                            <h3 style={{ color: 'var(--color-bg-dark)' }}>By Region</h3>
                            <ul className={styles.impactList}>
                                <li><span>Delhi/NCR</span> <span className={styles.impactCount}>456</span></li>
                                <li><span>Mumbai</span> <span className={styles.impactCount}>389</span></li>
                                <li><span>Bangalore</span> <span className={styles.impactCount}>312</span></li>
                                <li><span>Tier-2 Cities</span> <span className={styles.impactCount}>1,247</span></li>
                                <li><span>Rural Areas</span> <span className={styles.impactCount}>850+</span></li>
                            </ul>
                        </div>

                        <div className={styles.impactCard}>
                            <h3 style={{ color: 'var(--color-bg-dark)' }}>By Outcome</h3>
                            <ul className={styles.impactList}>
                                <li><span>College Admissions</span> <span className={styles.impactCount}>3,287</span></li>
                                <li><span>Sponsorships</span> <span className={styles.impactCount}>1,456</span></li>
                                <li><span>Scholarships</span> <span className={styles.impactCount}>823</span></li>
                                <li><span>National Trials</span> <span className={styles.impactCount}>542</span></li>
                                <li><span>Pro Contracts</span> <span className={styles.impactCount}>234</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUOTES GRID */}
            <section className={styles.quotesSection}>
                <div className="container">
                    <div className={styles.sectionHeader} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className={styles.sectionTitle}>What Athletes Are Saying</h2>
                    </div>

                    <div className={styles.quotesGrid}>
                        <div className={styles.quoteCard}>
                            <p className={styles.miniQuote}>"AthleteVault is literally a game changer. I got discovered without moving to a big city."</p>
                            <span className={styles.quoteAuthor}>— Kavya, Weightlifting</span>
                        </div>
                        <div className={styles.quoteCard}>
                            <p className={styles.miniQuote}>"Within 30 days, I had offers from 5 different coaches. This was impossible before."</p>
                            <span className={styles.quoteAuthor}>— Aditya, Tennis</span>
                        </div>
                        <div className={styles.quoteCard}>
                            <p className={styles.miniQuote}>"As a female athlete, being invisible was heartbreaking. Now I'm not. Thank you."</p>
                            <span className={styles.quoteAuthor}>— Neha, Hockey</span>
                        </div>
                        <div className={styles.quoteCard}>
                            <p className={styles.miniQuote}>"My family's financial situation changed because of the sponsorship I got through here."</p>
                            <span className={styles.quoteAuthor}>— Ravi, Kabaddi</span>
                        </div>
                        <div className={styles.quoteCard}>
                            <p className={styles.miniQuote}>"The AI report was shockingly accurate. It told me exactly what I needed to improve."</p>
                            <span className={styles.quoteAuthor}>— Sakshi, Badminton</span>
                        </div>
                        <div className={styles.quoteCard}>
                            <p className={styles.miniQuote}>"I never thought a rural athlete like me would get a national trial. Now I'm training at NAI."</p>
                            <span className={styles.quoteAuthor}>— Rajesh, Wrestling</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>Your Story Could Be Next</h2>
                    <div className={styles.ctaGroup}>
                        <Link href="/waitlist" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Join Waitlist</Link>
                        <button className="btn btn-outline" style={{ padding: '1rem 3rem' }}>Watch More Stories</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
