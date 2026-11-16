import logo from '../Images/FASTRACK-Logo-Black.webp'
import brandMark from '../Images/logo.png'
import './Footer.css'

const customerLinks = [
  ['Payment Options', 'https://www.fastrack.in/'],
  ['Track Order', 'https://www.fastrack.in/'],
  ['Find a Store', 'https://www.fastrack.in/store-locator'],
  ['Encircle Program', 'https://www.titanencircle.com/'],
  ['E Warranty Registration', 'https://www.fastrack.in/'],
  ['Exercise Your Rights', 'mailto:customercare@titan.co.in?subject=Privacy%20request'],
]

const policyLinks = [
  ['Brand Protection', 'https://www.fastrack.in/'],
  ['Cancellation', 'https://www.fastrack.in/'],
  ['Shipping', 'https://www.fastrack.in/'],
  ['Warranty Policies', 'https://www.fastrack.in/'],
  ['Cookie Policy', 'https://www.titan.co.in/'],
  ['Cookie Settings', 'mailto:customercare@titan.co.in?subject=Cookie%20settings'],
]

const aboutLinks = [
  ['About Us', 'https://www.fastrack.in/'],
  ['Help & Contact', 'mailto:customercare@titan.co.in'],
  ['Careers', 'https://www.titancompany.in/careers'],
  ['Blogs', 'https://www.fastrack.in/'],
]

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/Fastrack/', icon: 'facebook' },
  { name: 'X', href: 'https://x.com/', icon: 'x' },
  { name: 'Instagram', href: 'https://www.instagram.com/fastrackworld/', icon: 'instagram' },
  { name: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
  { name: 'Pinterest', href: 'https://www.pinterest.com/', icon: 'pinterest' },
]

function SocialIcon({ name }) {
  if (name === 'facebook') {
    return <span className="footer__facebook" aria-hidden="true">f</span>
  }

  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="footer__icon-dot" cx="17.5" cy="6.5" r="1" />
      </svg>
    )
  }

  if (name === 'youtube') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path className="footer__icon-fill" d="m10 9 6 3-6 3z" />
      </svg>
    )
  }

  if (name === 'pinterest') {
    return <span className="footer__pinterest" aria-hidden="true">p</span>
  }

  return <span className="footer__x" aria-hidden="true">𝕏</span>
}

function FooterLinks({ title, links }) {
  return (
    <section className="footer__column">
      <h2>{title}</h2>
      <ul>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="footer__brand">
          <a className="footer__logo-link" href="/" aria-label="Fastrack home">
            <img
              className="footer__logo"
              src={logo}
              alt="Fastrack"
              loading="lazy"
              decoding="async"
            />
            <img
              className="footer__brand-mark"
              src={brandMark}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </a>
          <nav className="footer__socials" aria-label="Follow Fastrack">
            {socialLinks.map((social) => (
              <a
                href={social.href}
                key={social.name}
                target="_blank"
                rel="noreferrer"
                aria-label={`Fastrack on ${social.name}`}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__column-group">
          <div className="footer__stack">
            <FooterLinks title="CUSTOMER SERVICE" links={customerLinks} />
            <section className="footer__column footer__contact">
              <h2>CONTACT US</h2>
              <a href="tel:18002660123">1800-266-0123</a>
              <a href="mailto:customercare@titan.co.in">customercare@titan.co.in</a>
              <a href="https://www.fastrack.in/">FAQs</a>
            </section>
          </div>

          <FooterLinks title="POLICIES" links={policyLinks} />

          <div className="footer__stack footer__stack--about">
            <FooterLinks title="ABOUT FASTRACK" links={aboutLinks} />
            <section className="footer__column footer__apps">
              <h2>DOWNLOAD THE TITAN APP</h2>
              <div className="footer__app-links">
                <a
                  className="footer__app-badge"
                  href="https://apps.apple.com/in/search?term=Titan%20Company"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Search for the Titan app on the App Store"
                >
                  <span className="footer__apple-icon" aria-hidden="true">●</span>
                  <span><small>Download on the</small>App Store</span>
                </a>
                <a
                  className="footer__app-badge"
                  href="https://play.google.com/store/search?q=Titan%20Company&c=apps"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Search for the Titan app on Google Play"
                >
                  <span className="footer__play-icon" aria-hidden="true">▶</span>
                  <span><small>GET IT ON</small>Google Play</span>
                </a>
              </div>
              <h2 className="footer__help-title">NEED HELP?</h2>
              <p>Chat with us on <a href="https://wa.me/9118002660123" target="_blank" rel="noreferrer">WhatsApp</a></p>
            </section>
          </div>
        </div>
      </div>

      <nav className="footer__legal" aria-label="Legal">
        <a href="https://www.titan.co.in/">Terms and Conditions</a>
        <span aria-hidden="true">|</span>
        <a href="https://www.titan.co.in/">Privacy Notice</a>
        <span aria-hidden="true">|</span>
        <a href="https://www.titan.co.in/">Cyber Security Policy</a>
      </nav>

      <div className="footer__bottom">
        <div className="footer__payments" aria-label="Accepted payment methods">
          <span className="footer__visa">VISA</span>
          <span className="footer__mastercard" aria-label="Mastercard"><i /><i /></span>
          <span className="footer__paypal">PayPal</span>
          <span className="footer__maestro">Maestro</span>
          <span className="footer__rupay">RuPay</span>
          <span className="footer__bank">▲ AXIS BANK</span>
          <span className="footer__bank">◉ ICICI Bank</span>
          <span className="footer__bank">◉ Diners Club</span>
        </div>
        <p>© {new Date().getFullYear()} Titan Company Limited. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer