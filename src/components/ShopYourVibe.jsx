import elevatedCasual from '../Images/Home_EC_d.webp'
import party from '../Images/Home_Party_d.webp'
import street from '../Images/Home_Street_d.webp'
import './ShopYourVibe.css'

const vibes = [
  { name: 'ELEVATED CASUAL', image: elevatedCasual },
  { name: 'PARTY', image: party },
  { name: 'STREET', image: street },
]

function ShopYourVibe() {
  return (
    <section className="shop-your-vibe" aria-labelledby="shop-your-vibe-title">
      <h2 id="shop-your-vibe-title">SHOP YOUR VIBE</h2>
      <div className="shop-your-vibe__grid">
        {vibes.map((vibe) => (
          <article className="vibe-card" key={vibe.name}>
            <img className="vibe-card__image" src={vibe.image} alt="" />
            <div className="vibe-card__caption">
              <h3>{vibe.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ShopYourVibe
