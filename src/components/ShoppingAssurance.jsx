import './ShoppingAssurance.css'

const assurances = [
  { title: 'SAFE AND SECURE', subtitle: 'CHECKOUT', icon: 'shield' },
  { title: 'PREMIUM QUALITY', subtitle: 'PRODUCTS', icon: 'medal' },
  { title: '7 DAY', subtitle: 'RETURN', icon: 'return' },
  { title: 'FREE SHIPPING', subtitle: 'NATIONWIDE', icon: 'truck' },
]

function AssuranceIcon({ type }) {
  if (type === 'shield') {
    return (
      <svg viewBox="0 0 40 48" aria-hidden="true">
        <path d="M20 3 35 9v12c0 11-6.5 18-15 24C11.5 39 5 32 5 21V9l15-6Z" />
      </svg>
    )
  }

  if (type === 'medal') {
    return (
      <svg viewBox="0 0 48 52" aria-hidden="true">
        <circle cx="24" cy="18" r="15" />
        <circle cx="24" cy="18" r="9" />
        <path d="M14 31v17l10-6 10 6V31" />
      </svg>
    )
  }

  if (type === 'return') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m24 5 16 9v18l-16 10-16-10V14l16-9Z" />
        <path d="m8 14 16 10 16-10M24 24v18M17 11l16 10M32 6l7 1 1 7" />
        <path d="M38 7a18 18 0 0 1 4 9" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 52 48" aria-hidden="true">
      <path d="M3 9h30v25H3zM33 18h10l7 9v7H33z" />
      <circle cx="13" cy="38" r="4" />
      <circle cx="41" cy="38" r="4" />
      <path d="M8 5h20M3 14h16" />
    </svg>
  )
}

function ShoppingAssurance() {
  return (
    <section className="shopping-assurance" aria-label="Shopping benefits">
      <div className="shopping-assurance__items">
        {assurances.map((assurance) => (
          <div className="shopping-assurance__item" key={assurance.icon}>
            <span className="shopping-assurance__icon">
              <AssuranceIcon type={assurance.icon} />
            </span>
            <p>
              <span>{assurance.title}</span>
              <span>{assurance.subtitle}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ShoppingAssurance
