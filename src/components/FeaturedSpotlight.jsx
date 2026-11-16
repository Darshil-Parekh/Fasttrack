import { useState } from 'react'
import groove from '../Images/GROOVE.webp'
import flexBlack from '../Images/fit1.webp'
import flexGreen from '../Images/fit2.webp'
import flexMaroon from '../Images/fit3.webp'
import flexBlue from '../Images/fit4.webp'
import campaign from '../Images/FT_hero_d.webp'
import './FeaturedSpotlight.css'

const featuredProducts = [
  {
    image: groove,
    name: 'FASTRACK GROOVE',
    description: 'Made for those whose music fixation has no single genre.',
  },
  {
    image: flexBlack,
    name: 'FASTRACK SMART FLEX BAND',
    description: 'A comfortable fit that keeps up with every move.',
  },
  {
    image: flexGreen,
    name: 'FASTRACK SMART FLEX BAND',
    description: 'A comfortable fit that keeps up with every move.',
  },
  {
    image: flexMaroon,
    name: 'FASTRACK SMART FLEX BAND',
    description: 'A comfortable fit that keeps up with every move.',
  },
  {
    image: flexBlue,
    name: 'FASTRACK SMART FLEX BAND',
    description: 'A comfortable fit that keeps up with every move.',
  },
]

function FeaturedSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0)
  const product = featuredProducts[activeIndex]

  const moveProduct = (direction) => {
    setActiveIndex(
      (current) =>
        (current + direction + featuredProducts.length) % featuredProducts.length,
    )
  }

  return (
    <section className="featured-spotlight" aria-label="Featured Fastrack collection">
      <div className="featured-spotlight__product">
        <div className="featured-spotlight__image-wrap">
          <img
            className="featured-spotlight__watch"
            src={product.image}
            alt={product.name}
            key={product.image}
          />
          <button
            className="featured-spotlight__arrow featured-spotlight__arrow--previous"
            type="button"
            aria-label="Previous featured product"
            onClick={() => moveProduct(-1)}
          >
            ‹
          </button>
          <button
            className="featured-spotlight__arrow featured-spotlight__arrow--next"
            type="button"
            aria-label="Next featured product"
            onClick={() => moveProduct(1)}
          >
            ›
          </button>
        </div>
        <div className="featured-spotlight__details" aria-live="polite">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </div>

      <img
        className="featured-spotlight__campaign"
        src={campaign}
        alt="Fastrack Never Same. Never Sane. campaign"
      />
    </section>
  )
}

export default FeaturedSpotlight
