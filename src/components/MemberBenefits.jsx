import './MemberBenefits.css'

const benefits = [
  { icon: '%', title: '10% Off', copy: 'On New Order' },
  { icon: '₹', title: 'Earn Neu Coins', copy: 'On eligible purchases' },
  { icon: '▣', title: 'No Cost EMI', copy: 'Option' },
  { icon: 'ϟ', title: 'SnapMint', copy: 'Buy Now Pay Later' },
]

const fixationItems = [
  'A WATCH FOR EVERY FIXATION',
  '•',
  'A WATCH FOR EVERY FIXATION',
  '•',
  'A WATCH FOR EVERY FIXATION',
  '•',
  'A WATCH FOR EVERY FIXATION',
  '•',
]

function MemberBenefits() {
  return (
    <>
      <section className="member-benefits">
        <h2>
          Sign Up &amp; Unlock <span>Member Benefits</span>
        </h2>
        <div className="member-benefits__content">
          <div className="member-benefits__cards">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <span className="benefit-card__icon" aria-hidden="true">
                  {benefit.icon}
                </span>
                <div>
                  <strong>{benefit.title}</strong>
                  <small>{benefit.copy}</small>
                </div>
              </article>
            ))}
          </div>
          <a className="member-benefits__button" href="#signup">
            SIGN UP
          </a>
        </div>
      </section>
      <div className="fixation-banner" aria-label="A watch for every fixation">
        <div className="fixation-banner__track">
          {[...fixationItems, ...fixationItems].map((item, index) =>
            item === '•' ? (
              <b key={`${item}-${index}`}>{item}</b>
            ) : (
              <span key={`${item}-${index}`}>{item}</span>
            ),
          )}
        </div>
      </div>
    </>
  )
}

export default MemberBenefits
