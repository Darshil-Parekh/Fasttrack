import { useState } from 'react'
import smoothOperatorBanner from '../Images/Meet_The_Smooth_Operator_Under_d.webp'
import automaticsCampaign from '../Images/FT_automatic_home_page_d.webp'
import blueAutomatic from '../Images/3297KM02_4.webp'
import brownAutomatic from '../Images/3318NL01_4.webp'
import roseAutomatic from '../Images/3318QM01_4.webp'
import blueSkeletonAutomatic from '../Images/3333NM01_3.webp'
import './SmoothOperator.css'

const watches = [
  { image: blueAutomatic, name: 'Fastrack Automatics Blue Dial Watch' },
  { image: brownAutomatic, name: 'Fastrack Automatics Brown Strap Watch' },
  { image: roseAutomatic, name: 'Fastrack Automatics Rose Gold Watch' },
  { image: blueSkeletonAutomatic, name: 'Fastrack Automatics Blue Skeleton Watch' },
]

function SmoothOperator() {
  const [activeWatch, setActiveWatch] = useState(0)
  const watch = watches[activeWatch]

  const changeWatch = (direction) => {
    setActiveWatch((current) => (current + direction + watches.length) % watches.length)
  }

  return (
    <section className="smooth-operator" aria-labelledby="smooth-operator-title">
      <h2 id="smooth-operator-title">FOR THE SMOOTH OPERATOR</h2>
      <img
        className="smooth-operator__banner"
        src={smoothOperatorBanner}
        alt="Meet the Smooth Operator by Fastrack Automatics"
        loading="lazy"
        decoding="async"
      />

      <div className="smooth-operator__content">
        <div className="smooth-operator__product">
          <div className="smooth-operator__watch-wrap" aria-live="polite">
            <img
              className="smooth-operator__watch"
              src={watch.image}
              alt={watch.name}
              loading="lazy"
              decoding="async"
            />
            <button
              className="smooth-operator__arrow smooth-operator__arrow--previous"
              type="button"
              aria-label="Previous watch"
              onClick={() => changeWatch(-1)}
            >
              ‹
            </button>
            <button
              className="smooth-operator__arrow smooth-operator__arrow--next"
              type="button"
              aria-label="Next watch"
              onClick={() => changeWatch(1)}
            >
              ›
            </button>
          </div>
          <div className="smooth-operator__details">
            <h3>Fastrack Automatics</h3>
            <p>
              For the smooth operator who is effortlessly sharp and always on. Colours
              that turn heads - a palette made for the style switcher.
            </p>
          </div>
        </div>

        <img
          className="smooth-operator__campaign"
          src={automaticsCampaign}
          alt="Automatics with Attitude campaign"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}

export default SmoothOperator