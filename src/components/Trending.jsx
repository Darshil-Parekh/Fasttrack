import { useState } from 'react'
import fit1 from '../Images/fit1.webp'
import fit2 from '../Images/fit2.webp'
import fit3 from '../Images/fit3.webp'
import fit4 from '../Images/fit4.webp'
import './Trending.css'

const products = [
  { image: fit1, name: 'Fastrack Smart Flex Band With A-GPS, SpO2, 100+ Sports With ...' },
  { image: fit2, name: 'Fastrack Smart Flex Band With A-GPS, SpO2, 100+ Sports With ...' },
  { image: fit3, name: 'Fastrack Smart Flex Band With A-GPS, SpO2, 100+ Sports With ...' },
  { image: fit4, name: 'Fastrack Smart Flex Band With A-GPS, SpO2, 100+ Sports With ...' },
]

function Trending() {
  const [offset, setOffset] = useState(0)
  const visibleProducts = products.map(
    (_, index) => products[(index + offset) % products.length],
  )

  return (
    <section className="trending-section" aria-label="Trending products">
      <h2>TRENDING</h2>
      <div className="trending-carousel">
        <button
          className="trending-arrow trending-arrow--left"
          type="button"
          aria-label="Previous trending products"
          onClick={() => setOffset((current) => (current - 1 + products.length) % products.length)}
        >
          ‹
        </button>
        <div className="trending-products">
          {visibleProducts.map((product, index) => (
            <article className="trending-card" key={`${product.image}-${index}`}>
              <div className="trending-card__image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="trending-card__details">
                <h3>{product.name}</h3>
                <p>Unisex Watches</p>
                <div className="trending-card__price">
                  <strong>₹ 4499</strong>
                  <del>₹ 5999</del>
                  <span>25% off</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button
          className="trending-arrow trending-arrow--right"
          type="button"
          aria-label="Next trending products"
          onClick={() => setOffset((current) => (current + 1) % products.length)}
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default Trending