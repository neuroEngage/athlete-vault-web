'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>
                Get Discovered. Get Recruited. Get Sponsored.
              </h1>
              <p className={styles.subtitle}>
                Join the waitlist for India's athlete discovery platform.
                Real athletes. Real opportunities. Real outcomes.
              </p>

              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1M+</span>
                  <span className={styles.statLabel}>Athletes</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Recruiters</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>₹25Cr+</span>
                  <span className={styles.statLabel}>Sponsorships</span>
                </div>
              </div>

              <div className={styles.ctaGroup}>
                <Link href="/waitlist" className="btn btn-primary">
                  Join Waitlist
                </Link>
                <button className="btn btn-outline">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
                <img
                  src="/images/dashboard.png"
                  alt="Athlete Dashboard"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />

                {/* Floating Badge Overlay */}
                <div className={`${styles.floatingCard} ${styles.card2}`} style={{ position: 'absolute', bottom: '-20px', right: '-20px', zIndex: 2 }}>
                  <div className={styles.cardHeader}>
                    <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #FF6B35, #F39C12)' }}>AI</div>
                    <div className={styles.cardInfo}>
                      <h4>AI Scouting Report</h4>
                      <span className={styles.verifiedBadge} style={{ color: '#FF6B35' }}>
                        Performance Analysis
                      </span>
                    </div>
                  </div>
                  <div className={styles.cardStats}>
                    <span>7.2/10 Score</span>
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <span className={styles.trustNumber}>1M+</span>
              <span className={styles.trustLabel}>Athletes Building Careers</span>
            </div>
            <div className={styles.trustCard}>
              <span className={styles.trustNumber}>50K+</span>
              <span className={styles.trustLabel}>College Admissions</span>
            </div>
            <div className={styles.trustCard}>
              <span className={styles.trustNumber}>₹25Cr+</span>
              <span className={styles.trustLabel}>Sponsorships Facilitated</span>
            </div>
            <div className={styles.trustCard}>
              <span className={styles.trustNumber}>500+</span>
              <span className={styles.trustLabel}>Verified Recruiters</span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className={styles.valueSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why 1M+ Athletes Trust AthleteVault</h2>
            <p className={styles.sectionSubtitle}>Everything you need to go from invisible to unstoppable.</p>
          </div>

          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>👁️</span>
              <h3>Get Visible</h3>
              <p>Your profile goes in front of verified college coaches, recruiters, and sponsors actively looking for talent.</p>
              <Link href="/how-it-works" className={styles.cardLink}>Learn More →</Link>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>✅</span>
              <h3>Verified & Validated</h3>
              <p>AI-powered verification ensures your achievements are legitimate. Coaches trust verified profiles 10x more.</p>
              <Link href="/how-it-works" className={styles.cardLink}>See Verification →</Link>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>🤖</span>
              <h3>AI Scouting Reports</h3>
              <p>Get an objective rating (0-10), personalized improvement tips, and track progress over 12 months.</p>
              <Link href="/how-it-works" className={styles.cardLink}>View Sample →</Link>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>💰</span>
              <h3>Direct Opportunities</h3>
              <p>Colleges message you with offers. Sponsors find you. Your dream is no longer invisible.</p>
              <Link href="/success-stories" className={styles.cardLink}>Success Stories →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI DEMO SECTION */}
      <section className={styles.demoSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ color: 'var(--color-bg-dark)' }}>See How AI Discovers Your Potential</h2>
          </div>

          <div className={styles.demoGrid}>
            <div className={styles.demoVisual}>
              <img
                src="/images/ai-report.png"
                alt="AI Analysis Demo"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>📊</div>
                <div className={styles.featureContent}>
                  <h3 style={{ color: 'var(--color-bg-dark)' }}>Performance Metrics</h3>
                  <p style={{ color: '#4A5568' }}>15+ sports-specific stats extracted automatically from your videos and data.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🎯</div>
                <div className={styles.featureContent}>
                  <h3 style={{ color: 'var(--color-bg-dark)' }}>Objective Rating</h3>
                  <p style={{ color: '#4A5568' }}>Get a 0-10 rating vs. national peer comparison to know exactly where you stand.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>💡</div>
                <div className={styles.featureContent}>
                  <h3 style={{ color: 'var(--color-bg-dark)' }}>Improvement Tips</h3>
                  <p style={{ color: '#4A5568' }}>AI-generated personalized recommendations to help you level up your game.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>📈</div>
                <div className={styles.featureContent}>
                  <h3 style={{ color: 'var(--color-bg-dark)' }}>Progress Tracking</h3>
                  <p style={{ color: '#4A5568' }}>12-month trend analysis and growth visualization to show recruiters your potential.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Athletes Just Like You Are Getting Discovered</h2>
          </div>

          <div className={styles.testimonialGrid}>
            {/* Card 1: Arjun */}
            <div className={styles.testimonialCard}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>AK</div>
                <div>
                  <h4 style={{ color: 'white' }}>Arjun Kumar</h4>
                  <span style={{ color: '#A7A9A9', fontSize: '0.9rem' }}>Badminton • Delhi</span>
                </div>
              </div>
              <p className={styles.testimonialQuote}>
                "I was invisible. Three months later, I got admitted to DU with quota + ₹2L sponsorship from Nike. This platform changed my life."
              </p>
              <div className={styles.testimonialStats}>
                <span>✓ DU Quota Admission</span>
                <span>✓ ₹2L Sponsorship</span>
              </div>
            </div>

            {/* Card 2: Priya */}
            <div className={styles.testimonialCard} style={{ borderColor: '#FF6B35' }}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #FF6B35, #E91E63)' }}>PS</div>
                <div>
                  <h4 style={{ color: 'white' }}>Priya Sharma</h4>
                  <span style={{ color: '#A7A9A9', fontSize: '0.9rem' }}>Cricket • Mumbai</span>
                </div>
              </div>
              <p className={styles.testimonialQuote}>
                "As a female athlete, finding sponsors was impossible. AthleteVault connected me with 3 sponsors. I earn ₹5L annually now."
              </p>
              <div className={styles.testimonialStats} style={{ color: '#FF6B35' }}>
                <span>✓ 3 Sponsorships</span>
                <span>✓ ₹5L Annual Income</span>
              </div>
            </div>

            {/* Card 3: Rohit */}
            <div className={styles.testimonialCard} style={{ borderColor: '#27AE60' }}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #27AE60, #17B8C6)' }}>RP</div>
                <div>
                  <h4 style={{ color: 'white' }}>Rohit Patel</h4>
                  <span style={{ color: '#A7A9A9', fontSize: '0.9rem' }}>Kabaddi • Indore</span>
                </div>
              </div>
              <p className={styles.testimonialQuote}>
                "Rural athletes like me never get discovered. AthleteVault gave me a platform. I'm now in national trials and received ₹1L scholarship."
              </p>
              <div className={styles.testimonialStats} style={{ color: '#27AE60' }}>
                <span>✓ National Trials</span>
                <span>✓ ₹1L Scholarship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (Quick Process) */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Start Your Journey in 3 Steps</h2>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>01</span>
              <div className={styles.stepContent}>
                <h3>Create Profile</h3>
                <p>Upload your basic info, sports, achievements. Our AI verifies everything automatically.</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber} style={{ color: '#FF6B35' }}>02</span>
              <div className={styles.stepContent}>
                <h3>Get AI Report</h3>
                <p>Our AI analyzes your performance, generates an objective rating, and identifies improvement areas.</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber} style={{ color: '#27AE60' }}>03</span>
              <div className={styles.stepContent}>
                <h3>Get Discovered</h3>
                <p>Coaches message you with opportunities. Sponsors find you. Your dream is within reach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ color: 'var(--color-bg-dark)' }}>Got Questions?</h2>
          </div>

          <div className={styles.faqContainer}>
            {[
              { q: "Is AthleteVault really free for athletes?", a: "Yes, completely free. No hidden fees, no premium paywalls. Our revenue comes from recruiters and sponsors, not athletes." },
              { q: "What sports are supported?", a: "All sports! Badminton, cricket, kabaddi, hockey, football, tennis, athletics, wrestling, basketball, and more." },
              { q: "How long does profile verification take?", a: "Usually 24-48 hours. Our AI reviews your achievements and college coaches validate your profile." },
              { q: "Can I join if I'm from a rural area?", a: "Absolutely. That's exactly who we're solving for. Many of our success stories are rural athletes." },
              { q: "How are my achievements verified?", a: "You upload certificates, videos, or documents. Our AI cross-references with official databases. Coaches also verify." },
              { q: "What if I'm not a college athlete yet?", a: "You don't have to be! School athletes can join. We have different pathways for different levels." }
            ].map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}>
                <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <span className={styles.faqIcon}>▼</span>
                </button>
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.urgencyBadge}>
            ⏱️ 2,347 athletes have already joined • Limited spots available
          </div>
          <h2 className={styles.ctaTitle}>Don't Get Left Behind.</h2>
          <p className={styles.ctaSubtitle}>
            Early access to India's athlete discovery platform.
            First 5,000 athletes get lifetime premium access.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/waitlist" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Join Waitlist Now
            </Link>
            <button className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
