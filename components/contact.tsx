'use client'

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        .cl-wrap {
          background: #EAE6DC;
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow: hidden;
          padding-bottom: 40px;
        }

        /* NAV */
        .cl-nav {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 40px 60px 0;
        }
        .cl-logo {
          font-family: 'EB Garamond', serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1.1;
          color: #121212;
        }
        .cl-circle-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #c5c1b5;
          background: transparent;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 3px;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s;
        }
        .cl-circle-btn:hover {
          border-color: #121212;
        }
        .cl-circle-btn span {
          display: block;
          width: 14px;
          height: 1px;
          background-color: #121212;
        }

        /* BODY */
        .cl-body {
          flex: 1;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          padding: 20px 60px 40px 60px;
          gap: 0 100px;
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* LEFT COLUMN */
        .cl-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 20px;
        }

        .cl-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 400;
          font-style: normal;
          font-size: clamp(56px, 6.8vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.01em;
          color: #121212;
          margin: 0;
          text-align: left;
        }
        
        .cl-h1 .bold {
          font-weight: 900;
        }
        
        .cl-h1 .it {
          font-style: italic;
          font-family: 'Playfair Display', serif;
          font-weight: 400;
        }
        
        .cl-h1 .bold-it {
          font-style: italic;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
        }

        .cl-sub-text {
          margin-top: 24px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 2vw, 26px);
          font-style: normal;
          color: #121212;
          display: flex;
          align-items: baseline;
          gap: 16px;
          padding-left: 140px;
        }

        .cl-hello {
          font-family: 'EB Garamond', serif;
          font-style: normal;
          font-size: clamp(16px, 1.3vw, 20px);
          color: #121212;
        }

        /* RIGHT COLUMN */
        .cl-right {
          display: flex;
          flex-direction: column;
          gap: 56px;
          padding-right: 40px;
          max-width: 440px;
        }

        /* Email Section */
        .cl-email-container {
          border-bottom: 1px solid #121212;
          padding-bottom: 8px;
          width: fit-content;
        }
        .cl-email {
          font-family: 'EB Garamond', serif;
          font-size: clamp(22px, 2.2vw, 32px);
          font-weight: 400;
          color: #121212;
          text-decoration: none;
          letter-spacing: 0.01em;
        }
        .cl-email:hover { 
          opacity: 0.6; 
        }

        /* Socials Grid */
        .cl-socials {
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 16px;
          column-gap: 24px;
        }
        .cl-soc {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'EB Garamond', serif;
          font-size: 16px;
          color: #121212;
          text-decoration: none;
        }
        .cl-soc:hover { 
          opacity: 0.6; 
        }
        .cl-soc svg { 
          width: 16px; 
          height: 16px; 
          flex-shrink: 0; 
        }

        /* Newsletter Component */
        .cl-newsletter-box {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
        }
        .cl-nl-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-style: normal;
          color: #121212;
          margin-bottom: 24px;
        }
        .cl-nl-line {
          position: relative;
          border-bottom: 1px solid #a6a297;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
        }
        .cl-nl-input {
          background: transparent;
          border: none;
          outline: none;
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 16px;
          color: #121212;
          padding: 0;
          width: 100%;
        }
        .cl-nl-input::placeholder { 
          color: #8c877e; 
          font-style: italic;
        }
        .cl-nl-arrow {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0 0 0 10px;
          color: #121212;
          font-size: 24px;
          line-height: 1;
          font-family: 'EB Garamond', serif;
          transition: transform 0.2s ease;
        }
        .cl-nl-arrow:hover { 
          transform: translateX(4px); 
        }

        /* Ambient Vector Wave */
        .cl-wave {
          position: absolute;
          bottom: 40px;
          right: 60px;
          opacity: 0.8;
        }

        @media (max-width: 900px) {
          .cl-body {
            grid-template-columns: 1fr;
            gap: 60px 0;
            padding: 40px 30px;
          }
          .cl-nav {
            padding: 30px 30px 0;
          }
          .cl-sub-text {
            padding-left: 0;
          }
          .cl-wave {
            display: none;
          }
        }
      `}</style>

      <div className="cl-wrap">

        {/* TOP BAR NAVIGATION */}
        <nav className="cl-nav">
          <div className="cl-logo">
            CHIARA<br/>LUZZANA
          </div>
          <button className="cl-circle-btn" aria-label="Open Navigation Menu">
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* HERO CONTENT AREA */}
        <div className="cl-body">

          {/* LEFT: HEADER EXPRESSION */}
          <div className="cl-left">
            <h1 className="cl-h1">
              <span className="bold">Want to</span><br/>
              <span className="bold">st<span className="bold-it">a</span>rt</span><br/>
              <span className="it">a new,</span><br/>
              <span className="bold">project?</span>
            </h1>
            <div className="cl-sub-text">
              <span className="cl-hello">Or just say hello.</span>
            </div>
          </div>

          {/* RIGHT: CONTACT AND UTILITIES */}
          <div className="cl-right">

            {/* Main Email Block */}
            <div className="cl-email-container">
              <a href="mailto:info@chiaraluzzana.com" className="cl-email">
                info@chiaraluzzana.com
              </a>
            </div>

            {/* Social Connects */}
            <div className="cl-socials">
              <a href="#" className="cl-soc">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.612-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.478 4.807z"/></svg>
                Vimeo
              </a>
              <a href="#" className="cl-soc">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a href="#" className="cl-soc">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </a>
              <a href="#" className="cl-soc">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                Spotify
              </a>
            </div>

            {/* Newsletter Subscription Block */}
            <div className="cl-newsletter-box">
              <div className="cl-nl-title">Newsletter</div>
              <div className="cl-nl-line">
                <input 
                  className="cl-nl-input" 
                  type="email" 
                  placeholder="Email Address" 
                  aria-label="Email Address Collection" 
                />
                <button className="cl-nl-arrow" aria-label="Submit Email Address">→</button>
              </div>
            </div>

          </div>
        </div>

        {/* Ambient Wave Vector Art */}
        <svg className="cl-wave" width="84" height="38" viewBox="0 0 72 32" fill="none">
          <path d="M2 16 C9 4 18 4 25 16 C32 28 42 28 50 16 C58 4 66 10 70 16"
            stroke="#121212" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
        </svg>

      </div>
    </>
  )
}