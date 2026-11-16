import watchPost from '../Images/medium.webp'
import backpackPost from '../Images/low_resolution.webp'
import slingPost from '../Images/low_resolution (1).webp'
import pinkCampaignPost from '../Images/low_resolution (2).webp'
import chainBagPost from '../Images/low_resolution (3).webp'
import shoulderBagPost from '../Images/low_resolution (4).webp'
import pinkBagPost from '../Images/low_resolution (5).webp'
import quiltedBagPost from '../Images/low_resolution (6).webp'
import greenCampaignPost from '../Images/low_resolution (7).webp'
import featuredBagPost from '../Images/medium (1).webp'
import './FollowUs.css'

const posts = [
  { image: watchPost, alt: 'Fastrack watch from the Vyb collection', position: 'watch' },
  { image: backpackPost, alt: 'Colourful Fastrack backpack', position: 'backpack' },
  { image: slingPost, alt: 'Colourful Fastrack sling bag', position: 'sling' },
  { image: pinkCampaignPost, alt: 'Fastrack white hot essentials campaign', position: 'pink-campaign' },
  { image: chainBagPost, alt: 'Fastrack white chain shoulder bag', position: 'chain-bag' },
  { image: quiltedBagPost, alt: 'Fastrack white quilted bag', position: 'quilted-bag' },
  { image: pinkBagPost, alt: 'Fastrack pink background shoulder bag', position: 'pink-bag' },
  { image: shoulderBagPost, alt: 'Fastrack white shoulder bag', position: 'shoulder-bag' },
  { image: greenCampaignPost, alt: 'Fastrack Green Dream campaign', position: 'green-campaign' },
  { image: featuredBagPost, alt: 'Fastrack colourful multi-pocket bag', position: 'featured-bag' },
]

function FollowUs() {
  return (
    <section className="follow-us" aria-labelledby="follow-us-title">
      <h2 id="follow-us-title">FOLLOW US</h2>
      <div className="follow-us__grid">
        {posts.map((post) => (
          <a
            className={`follow-us__post follow-us__post--${post.position}`}
            href="https://www.instagram.com/fastrackworld/"
            key={post.image}
            target="_blank"
            rel="noreferrer"
            aria-label={`${post.alt} on Instagram`}
          >
            <img
              src={post.image}
              alt={post.alt}
              loading="lazy"
              decoding="async"
            />
            <span className="follow-us__overlay" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle className="follow-us__icon-dot" cx="17.5" cy="6.5" r="1" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default FollowUs