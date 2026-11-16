import { useEffect, useRef, useState } from 'react'
import flexBand from '../Images/fit1.webp'
import flexBandGreen from '../Images/fit2.webp'
import newAstor from '../Images/38151PP01K_1.webp'
import vybRunway from '../Images/FV60031WM01W_1.jpg'
import hypeAdventure from '../Images/38169PP02W_1.webp'
import teesUrbanique from '../Images/38024PP79W_1.webp'
import mynd from '../Images/38184PP01K_1.webp'
import jupiter from '../Images/38225PP01K_1.webp'
import fastfit from '../Images/68011PP08_1.webp'
import vybHaloBrown from '../Images/FV60035QM01W_1.webp'
import vybHaloGrey from '../Images/FV60035WM01W_1.webp'
import vybStriker from '../Images/FV60130WM01W_1.webp'
import automaticsBanner from '../Images/Automatics_D.webp'
import overdriveBanner from '../Images/FT_CC_OVERDRIVE_D.jpg'
import gambitBanner from '../Images/FT_CC_GAMBIT_D.webp'
import ufoBanner from '../Images/FT_CC_UFO_d.webp'
import hypeBanner from '../Images/FT_CC_hype_adventure_d.webp'
import vybBanner from '../Images/FT_CC_vyb_d.jpg'
import wildBanner from '../Images/FT_CC_wild_d.jpg'
import './Bestseller.css'

const banners = [
  { image: automaticsBanner, alt: 'Fastrack Automatics - Classic!' },
  { image: overdriveBanner, alt: 'Fastrack Overdrive collection' },
  { image: gambitBanner, alt: 'Fastrack Gambit collection' },
  { image: ufoBanner, alt: 'Fastrack UFO collection' },
  { image: hypeBanner, alt: 'Fastrack Hype Adventure collection' },
  { image: vybBanner, alt: 'Fastrack Vyb collection' },
  { image: wildBanner, alt: 'Fastrack Wild collection' },
]

const products = [
  {
    image: flexBandGreen,
    name: 'Fastrack Smart Flex Band With A-GPS, SpO2, 100+ Sports With...',
    category: 'Unisex Watches',
    price: '₹ 4499',
    originalPrice: '₹ 5999',
    discount: '25% off',
    rating: '3.6',
    reviews: '5',
  },
  {
    image: newAstor,
    name: 'Fastrack New Astor F5 Pro Smartwatch, Large Super AMOLED Di...',
    category: 'Unisex Watches',
    price: '₹ 2499',
    originalPrice: '₹ 4999',
    discount: '50% off',
    rating: '4.5',
    reviews: '49',
  },
  {
    image: vybRunway,
    name: 'Fastrack Vyb Runway Quartz Analog Rose Gold Dial Stainless S...',
    category: 'Girls Watches',
    price: '₹ 1450',
    originalPrice: '₹ 2070',
    discount: '30% off',
    rating: '4.6',
    reviews: '15',
  },
  {
    image: hypeAdventure,
    name: 'Fastrack Hype Adventure Quartz Analog Green Dial Green Silic...',
    category: 'Guys Watches',
    price: '₹ 1295',
    originalPrice: '₹ 1850',
    discount: '30% off',
    rating: '4.5',
    reviews: '11',
  },
  {
    image: teesUrbanique,
    name: 'Fastrack Tees Urbanique Quartz Analog Black Dial Silicon Strap...',
    category: 'Unisex Watches',
    price: '₹ 895',
    originalPrice: '₹ 995',
    discount: '10% off',
  },
  {
    image: flexBand,
    name: 'Fastrack Smart Flex Band With A-GPS, SpO2, 100+ Sports With...',
    category: 'Unisex Watches',
    price: '₹ 4499',
    originalPrice: '₹ 5999',
    discount: '25% off',
  },
  {
    image: mynd,
    name: 'Fastrack MYND - 4.9 Cm AMOLED Display, AI Watchface, Offline...',
    category: 'Unisex Watches',
    price: '₹ 3999',
    originalPrice: '₹ 5499',
    discount: '27% off',
    rating: '3.9',
    reviews: '17',
  },
  {
    image: vybHaloGrey,
    name: 'Fastrack Vyb Halo Quartz Analog Grey Dial Metal Strap Watch...',
    category: 'Girls Watches',
    price: '₹ 1950',
    originalPrice: '₹ 2785',
    discount: '30% off',
    rating: '4.2',
    reviews: '112',
  },
  {
    image: fastfit,
    name: 'Fastrack Fastfit Quartz Analog Grey Dial Grey Colour Silicon...',
    category: 'Unisex Watches',
    price: '₹ 995',
    rating: '4.3',
    reviews: '164',
  },
  {
    image: jupiter,
    name: 'Fastrack Smart Jupiter R3 Pro 3.63 Cm AMOLED Smartwatch BT C...',
    category: 'Unisex Watches',
    price: '₹ 2899',
    originalPrice: '₹ 3499',
    discount: '17% off',
  },
  {
    image: vybHaloBrown,
    name: 'Fastrack Vyb Halo Quartz Analog Brown Dial Metal Strap Watch...',
    category: 'Girls Watches',
    price: '₹ 1950',
    originalPrice: '₹ 2785',
    discount: '30% off',
    rating: '4.2',
    reviews: '112',
  },
  {
    image: vybStriker,
    name: 'Vyb Striker By Fastrack Quartz Analog Rose Gold Dial Rose Gold...',
    category: 'Girls Watches',
    price: '₹ 1995',
    originalPrice: '₹ 2850',
    discount: '30% off',
    rating: '5',
    reviews: '5',
  },
]

function Bestseller() {
  const viewportRef = useRef(null)
  const [activeBanner, setActiveBanner] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % banners.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [])

  const move = (direction) => {
    const viewport = viewportRef.current
    const firstCard = viewport?.firstElementChild?.firstElementChild
    if (!viewport || !firstCard) return

    const gap = Number.parseFloat(window.getComputedStyle(firstCard.parentElement).columnGap) || 0
    viewport.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    })
  }

  const moveBanner = (direction) => {
    setActiveBanner((current) => (current + direction + banners.length) % banners.length)
  }

  return (
    <section className="bestsellers" aria-labelledby="bestsellers-title">
      <h2 id="bestsellers-title">BESTSELLERS</h2>
      <div className="bestsellers__carousel">
        <button
          className="bestsellers__arrow bestsellers__arrow--previous"
          type="button"
          aria-label="Previous bestsellers"
          onClick={() => move(-1)}
        >
          ‹
        </button>
        <div className="bestsellers__viewport" ref={viewportRef}>
          <div className="bestsellers__grid">
            {products.map((product, index) => (
              <article
                className="bestseller-card"
                key={`${product.image}-${index}`}
              >
                <div className="bestseller-card__image">
                  <img src={product.image} alt={product.name} />
                  {product.rating && (
                    <span className="bestseller-card__rating">
                      <span aria-hidden="true">★</span> {product.rating} ({product.reviews})
                    </span>
                  )}
                </div>
                <div className="bestseller-card__details">
                  <h3 title={product.name}>{product.name}</h3>
                  <p>{product.category}</p>
                  <div className="bestseller-card__price">
                    <strong>{product.price}</strong>
                    {product.originalPrice && <del>{product.originalPrice}</del>}
                    {product.discount && <span>{product.discount}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button
          className="bestsellers__arrow bestsellers__arrow--next"
          type="button"
          aria-label="Next bestsellers"
          onClick={() => move(1)}
        >
          ›
        </button>
      </div>
      <div className="bestsellers-banner" aria-label="Featured collections">
        <button
          className="bestsellers-banner__arrow bestsellers-banner__arrow--previous"
          type="button"
          aria-label="Previous featured collection"
          onClick={() => moveBanner(-1)}
        >
          ‹
        </button>
        <div className="bestsellers-banner__viewport">
          <div
            className="bestsellers-banner__track"
            style={{ transform: `translateX(-${activeBanner * 100}%)` }}
          >
            {banners.map((banner) => (
              <div className="bestsellers-banner__slide" key={banner.image}>
                <img src={banner.image} alt={banner.alt} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="bestsellers-banner__arrow bestsellers-banner__arrow--next"
          type="button"
          aria-label="Next featured collection"
          onClick={() => moveBanner(1)}
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default Bestseller
