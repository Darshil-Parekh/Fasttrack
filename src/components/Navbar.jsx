import { useState } from 'react'
import logo from '../Images/FASTRACK-Logo-Black.webp'

const links = [
  'WATCHES',
  'SMART WATCHES',
  'VYB BY FASTRACK',
  'SALE',
  'GIFTING',
  'ACCESSORIES',
  'MORE',
]

function Icon({ name }) {
  const paths = {
    search: (
      <>
        <circle cx="11" cy="11" r="7.5" />
        <path d="m16.5 16.5 5 5" />
      </>
    ),
    account: (
      <>
        <circle cx="12" cy="7" r="3.5" />
        <path d="M4.5 21v-2.25A4.75 4.75 0 0 1 9.25 14h5.5a4.75 4.75 0 0 1 4.75 4.75V21" />
      </>
    ),
    heart: <path d="M20.84 8.61a5.5 5.5 0 0 0-9.16-4.09 5.5 5.5 0 0 0-9.16 4.09c0 3.93 4.25 6.67 9.16 11.39 4.91-4.72 9.16-7.46 9.16-11.39Z" />,
    bag: (
      <>
        <path d="M4 8.5h16v12H4z" />
        <path d="M8 8.5V6a4 4 0 0 1 8 0v2.5" />
      </>
    ),
    box: (
      <>
        <path d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path d="M4 7v9l8 5 8-5V7M12 11v10" />
        <circle cx="17.5" cy="17.5" r="3" />
        <path d="m17.5 16.2.8 1.3-.8 1.3-.8-1.3.8-1.3Z" />
      </>
    ),
  }

  return (
    <svg className="navbar__icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <a className="navbar__brand" href="/" aria-label="Fastrack home">
        <img className="navbar__logo" src={logo} alt="Fastrack" />
      </a>

      <button
        className="navbar__toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}
        aria-label="Primary navigation"
      >
        {links.map((link) => (
          <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>
            {link}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <button type="button" aria-label="Search">
          <Icon name="search" />
        </button>
        <button type="button" aria-label="Account">
          <Icon name="account" />
        </button>
        <button type="button" aria-label="Wishlist">
          <Icon name="heart" />
        </button>
        <button type="button" aria-label="Shopping bag">
          <Icon name="bag" />
        </button>
        <button type="button" aria-label="Track order">
          <Icon name="box" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
