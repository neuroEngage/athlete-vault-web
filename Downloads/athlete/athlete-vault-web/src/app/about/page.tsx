'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './about.module.css';

export default function About() {
    return (
        <main>
            <Navbar />

            {/* HERO */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Democratizing Sports Discovery in India</h1>
                    <p className={styles.subtitle}>
                        We believe talent is everywhere, but opportunity is not. We're here to bridge that gap.
                    </p>
                </div>
            </section>

            {/* MISSION */}
            <section className={styles.missionSection}>
                <div className="container">
                    <div className={styles.missionContent}>
                        <h2>Our Mission</h2>
                        <p>
                            India has 1.4 billion people, yet we often struggle to find world-class athletes.
                            The problem isn't a lack of talent—it's a lack of visibility.
                            Millions of talented athletes in Tier-2 and Tier-3 cities never get seen by the right coaches.
                        </p>
                        <p>
                            AthleteVault is building the digital infrastructure for Indian sports.
                            By using AI to verify and analyze performance, we give every athlete—regardless of their location or background—a fair shot at success.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>2024</span>
                            <span className={styles.statLabel}>Founded</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>12</span>
                            <span className={styles.statLabel}>Team Members</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>Bangalore</span>
                            <span className={styles.statLabel}>HQ</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className={styles.teamSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Meet the Team</h2>
                    <div className={styles.teamGrid}>
                        <div className={styles.teamMember}>
                            <div className={styles.memberAvatar}>
                                <img src="/images/vikram.png" alt="Vikram Singh" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                            </div>
                            <h3>Vikram Singh</h3>
                            <p>Founder & CEO</p>
                            <span>Ex-National Badminton Player</span>
                        </div>
                        <div className={styles.teamMember}>
                            <div className={styles.memberAvatar}>
                                <img src="/images/ananya.png" alt="Ananya Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                            </div>
                            <h3>Ananya Gupta</h3>
                            <p>Head of Product</p>
                            <span>Tech Veteran & Sports Enthusiast</span>
                        </div>
                        <div className={styles.teamMember}>
                            <div className={styles.memberAvatar}>
                                <img src="/images/rahul.png" alt="Rahul Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                            </div>
                            <h3>Rahul Sharma</h3>
                            <p>Head of Scouting</p>
                            <span>Former Ranji Trophy Player</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
