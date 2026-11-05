import { useState } from 'react'
import analogWatch from '../Images/card1.webp'
import smartWatch from '../Images/card2.webp'
import bags from '../Images/card3.jpg'
import perfumes from '../Images/card4.webp'
import './CategoriesImages.css'

const categories = [
  { name: 'ANALOG WATCHES', image: analogWatch },
  { name: 'SMART WATCHES', image: smartWatch },
  { name: 'BAGS', image: bags },
  { name: 'PERFUMES', image: perfumes },
]

function CategoriesImages() {
  const [offset, setOffset] = useState(0)

  const move = (direction) => {
    setOffset((current) => (current + direction + categories.length) % categories.length)
  }
  const visibleCategories = categories.map(
    (_, index) => categories[(index + offset) % categories.length],
  )

  return (
    <section className="categories-section" aria-label="Fastrack categories">
      <div className="categories-track">
        {visibleCategories.map((category) => (
          <a
            className="category-tile"
            href={`#${category.name.toLowerCase().replaceAll(' ', '-')}`}
            key={category.name}
          >
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </a>
        ))}
      </div>
      <button
        className="category-arrow category-arrow--left"
        type="button"
        aria-label="Previous category"
        onClick={() => move(-1)}
      >
        ‹
      </button>
      <button
        className="category-arrow category-arrow--right"
        type="button"
        aria-label="Next category"
        onClick={() => move(1)}
      >
        ›
      </button>
      <div className="categories-title" aria-hidden="true">
        <span>FASTRACK</span>
        <span>CATEGORIES</span>
      </div>
    </section>
  )
}

export default CategoriesImages