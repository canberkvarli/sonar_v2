import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                {/* Social Media Icons */}
                <div style={styles.socialIcons}>
                    <Link href="https://twitter.com/canberkvarli" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <FaTwitter />
                    </Link>
                    <Link href="https://linkedin.com/in/canberkvarli" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <FaLinkedin />
                    </Link>
                    <Link href="https://github.com/canberkvarli" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <FaGithub />
                    </Link>
                </div>

                {/* Resume Section */}
                <div style={styles.resume}>
                    <Link
                        href="/Resume_sw.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.resumeButton}
                        download="Resume_sw.pdf"
                    >
                        Download My Resume
                    </Link>
                </div>

                {/* Copyright Info */}
                <div style={styles.copyright}>
                    <p>© 2021 Canberk Varli. Built with React & Ruby on Rails. Inspired by my SoundCloud clone project at App Academy in 2021.</p>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#1c1c1c',
        color: '#ffffff',
        padding: '20px 0',
        textAlign: 'center',
        position: 'fixed', // Fixed at the bottom
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navLinks: {
        display: 'flex',
        gap: '20px',
        marginBottom: '10px',
    },
    link: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '16px',
    },
    socialIcons: {
        display: 'flex',
        gap: '15px',
        marginBottom: '10px',
    },
    icon: {
        color: '#ffffff',
        fontSize: '20px',
        textDecoration: 'none',
    },
    resume: {
        margin: '15px 0',
    },
    resumeButton: {
        color: '#ffffff',
        backgroundColor: '#333',
        padding: '10px 20px',
        textDecoration: 'none',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #555',
        transition: 'background-color 0.3s',
    },
    resumeButtonHover: {
        backgroundColor: '#555',
    },
    copyright: {
        fontSize: '14px',
        color: '#aaaaaa',
        marginTop: '10px',
    },
};

export default Footer;
