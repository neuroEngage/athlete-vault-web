'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './contact.module.css';

export default function Contact() {
    return (
        <main>
            <Navbar />

            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className="container">
                    <div className={styles.contactContainer}>

                        {/* Contact Info */}
                        <div className={styles.infoBox}>
                            <h2>Contact Information</h2>
                            <div className={styles.infoItem}>
                                <span className={styles.icon}>📍</span>
                                <div>
                                    <h3>Headquarters</h3>
                                    <p>HSR Layout, Sector 4<br />Bangalore, Karnataka 560102</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.icon}>📧</span>
                                <div>
                                    <h3>Email</h3>
                                    <p>hello@athletevault.in</p>
                                    <p>support@athletevault.in</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.icon}>💼</span>
                                <div>
                                    <h3>For Recruiters</h3>
                                    <p>partners@athletevault.in</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formBox}>
                            <h2>Send us a Message</h2>
                            <form className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label>Name</label>
                                    <input type="text" placeholder="Your Name" className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Email</label>
                                    <input type="email" placeholder="your@email.com" className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Subject</label>
                                    <select className={styles.input}>
                                        <option>General Inquiry</option>
                                        <option>Support</option>
                                        <option>Partnership</option>
                                        <option>Press</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Message</label>
                                    <textarea rows={5} placeholder="How can we help?" className={styles.input}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
