import './App.css'

interface Product {
  name: string
  price: string
  priceNum: number
  amazon: string
  image: string
  why: string
}

interface Category {
  name: string
  icon: string
  whyMatters: string
  minimal?: Product
  recommended?: Product
}

const categories: Category[] = [
  {
    name: 'Microphone',
    icon: '🎙️',
    whyMatters: 'Your mic is the single most important investment. Viewers will tolerate bad video, but bad audio makes people click away instantly.',
    minimal: {
      name: 'Fifine K669B USB Condenser Mic',
      price: '~$26',
      priceNum: 26,
      amazon: 'https://www.amazon.com/dp/B06XCKGLTP',
      image: 'https://m.media-amazon.com/images/I/61faj82oveL._AC_SL1500_.jpg',
      why: 'Ridiculously good for the price. USB plug-and-play, no audio interface needed. Used by tons of beginner YouTubers and podcasters. Cardioid pattern rejects background noise. Won\'t win any awards, but sounds 10x better than your laptop mic.',
    },
    recommended: {
      name: 'Rode NT1 5th Generation (USB + XLR)',
      price: '~$269',
      priceNum: 269,
      amazon: 'https://www.amazon.com/dp/B0BQR7QMZ7',
      image: 'https://m.media-amazon.com/images/I/71VaT6NBWSL._AC_SL1500_.jpg',
      why: 'Wirecutter\'s upgrade pick. Studio-quality condenser mic that works via USB AND XLR — future-proof. Ultra-low self-noise (only 4dBA), captures incredible vocal detail for singing. Comes with pop filter, shock mount, and cables. This is the mic singers dream about.',
    },
  },
  {
    name: 'Camera',
    icon: '📷',
    whyMatters: 'Good video quality builds trust and keeps viewers engaged. But remember: lighting matters more than your camera.',
    minimal: {
      name: 'Logitech C920x HD Pro Webcam (1080p)',
      price: '~$55',
      priceNum: 55,
      amazon: 'https://www.amazon.com/dp/B085TFF7M1',
      image: 'https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg',
      why: 'The industry standard webcam for a reason. 1080p/30fps, solid autofocus, decent in moderate lighting. Nearly every streamer started with this. It just works — plug in via USB, open OBS or Zoom, and you\'re rolling.',
    },
    recommended: {
      name: 'Sony ZV-1F Vlog Camera',
      price: '~$398',
      priceNum: 398,
      amazon: 'https://www.amazon.com/dp/B0BHKH7GKK',
      image: 'https://m.media-amazon.com/images/I/71UY-0dSZEL._AC_SL1500_.jpg',
      why: 'Purpose-built for vlogging. Wide-angle 20mm lens (perfect for face-to-camera), 4K video, cinematic background blur, product showcase mode. Built-in directional mic. Flip screen. Sony\'s color science makes skin tones look amazing.',
    },
  },
  {
    name: 'Lighting',
    icon: '💡',
    whyMatters: 'Lighting is the #1 thing that separates amateur from professional-looking video. Even a cheap camera looks great with good lighting.',
    minimal: {
      name: 'Neewer 2-Pack Dimmable LED Panel Lights',
      price: '~$36',
      priceNum: 36,
      amazon: 'https://www.amazon.com/dp/B07T8FBZC2',
      image: 'https://m.media-amazon.com/images/I/71UVDaQtbdL._AC_SL1500_.jpg',
      why: 'Soft, adjustable lighting eliminates shadows and makes any camera look 10x better. Adjustable brightness and color temperature (3200K-5600K). USB powered. Two lights let you do basic 2-point lighting.',
    },
    recommended: {
      name: 'Elgato Key Light Mini (2-pack setup)',
      price: '~$180',
      priceNum: 180,
      amazon: 'https://www.amazon.com/dp/B09Y36V6FB',
      image: 'https://m.media-amazon.com/images/I/61C+fwPMZ-L._AC_SL1500_.jpg',
      why: 'Used by virtually every major streamer and YouTuber. App-controlled brightness and color temp from your phone. Edge-lit design is super compact. 800 lumens. Elgato is THE standard in creator lighting.',
    },
  },
  {
    name: 'Audio Interface',
    icon: '🎛️',
    whyMatters: 'An audio interface converts analog mic signals to digital with pristine quality. Only needed if you\'re using an XLR microphone.',
    recommended: {
      name: 'Focusrite Scarlett Solo 4th Gen',
      price: '~$130',
      priceNum: 130,
      amazon: 'https://www.amazon.com/dp/B0CHL64HQ4',
      image: 'https://m.media-amazon.com/images/I/61cFFfXbHtL._AC_SL1500_.jpg',
      why: 'Best-selling audio interface in the world — Focusrite\'s preamps are legendary for clean, transparent sound. Zero-latency monitoring so you can hear yourself while recording. Also lets you plug in guitars, keyboards, etc.',
    },
  },
  {
    name: 'Headphones',
    icon: '🎧',
    whyMatters: 'You need accurate monitoring to hear what you\'re actually recording. Consumer headphones lie to you with boosted bass — studio headphones tell the truth.',
    minimal: {
      name: 'Sony MDR-7506',
      price: '~$80',
      priceNum: 80,
      amazon: 'https://www.amazon.com/dp/B000AJIF4E',
      image: 'https://m.media-amazon.com/images/I/71LuEPfId+L._AC_SL1500_.jpg',
      why: 'THE industry standard studio headphone since the 1990s. Every recording studio on earth has a pair. Flat, accurate frequency response. Closed-back prevents sound leaking into your mic. At this price, an absolute steal.',
    },
    recommended: {
      name: 'Audio-Technica ATH-M50x',
      price: '~$149',
      priceNum: 149,
      amazon: 'https://www.amazon.com/dp/B00HVLUR86',
      image: 'https://m.media-amazon.com/images/I/71dAEsMbYCL._AC_SL1500_.jpg',
      why: 'Wider frequency range, more detail, slightly more comfortable than the Sony 7506. Beloved by music producers, singers, and content creators. Detachable cable (3 included). Folds flat for travel. If you\'re singing, you NEED closed-back headphones that sound this good.',
    },
  },
  {
    name: 'Acoustic Treatment',
    icon: '🔇',
    whyMatters: 'Room echo is the #1 killer of home recordings. For singing especially, proper acoustic treatment is more important than an expensive mic.',
    minimal: {
      name: '12-Pack Acoustic Foam Panels',
      price: '~$22',
      priceNum: 22,
      amazon: 'https://www.amazon.com/dp/B07VDTR22R',
      image: 'https://m.media-amazon.com/images/I/81YoiPWBmJL._AC_SL1500_.jpg',
      why: 'Absorb mid and high frequency reflections. Put them behind your mic and on the wall you face. Won\'t make your room a studio, but will noticeably reduce that "bathroom reverb" sound. Super easy — just stick them up with command strips.',
    },
    recommended: {
      name: 'Auralex Studiofoam Wedges (24-pack)',
      price: '~$60',
      priceNum: 60,
      amazon: 'https://www.amazon.com/dp/B0002D0B7G',
      image: 'https://m.media-amazon.com/images/I/81WT6u-MoEL._AC_SL1500_.jpg',
      why: 'Professional-grade acoustic foam used in real studios. Denser and more effective than cheap foam. NRC 0.80 (absorbs 80% of sound). Cover the wall behind you + behind your mic for dramatically cleaner recordings.',
    },
  },
  {
    name: 'Boom Arm / Mic Stand',
    icon: '🦾',
    whyMatters: 'Getting your mic off the desk eliminates vibrations and keyboard noise from recordings, and lets you position it perfectly.',
    minimal: {
      name: 'InnoGear Boom Arm',
      price: '~$14',
      priceNum: 14,
      amazon: 'https://www.amazon.com/dp/B07CN2C93T',
      image: 'https://m.media-amazon.com/images/I/61c0zfGSp5L._AC_SL1500_.jpg',
      why: 'Gets the mic off your desk and eliminates keyboard/desk vibrations from your recordings. Adjustable positioning. Frees up desk space. At $14 this is a no-brainer.',
    },
    recommended: {
      name: 'Rode PSA1+',
      price: '~$99',
      priceNum: 99,
      amazon: 'https://www.amazon.com/dp/B0B7KHMQSY',
      image: 'https://m.media-amazon.com/images/I/61WUTnMxIsL._AC_SL1500_.jpg',
      why: 'The gold standard boom arm. Ultra-smooth movement, holds any mic securely, zero sag over time. Internal cable management. Dead silent when repositioning — no creaks or clicks that ruin recordings.',
    },
  },
]

const software = [
  { name: 'OBS Studio', desc: 'Recording & streaming. Used by every content creator.', url: 'https://obsproject.com' },
  { name: 'DaVinci Resolve', desc: 'Video editing. Hollywood-grade, completely free.', url: 'https://www.blackmagicdesign.com/products/davinciresolve' },
  { name: 'Audacity', desc: 'Audio recording & editing. Simple, powerful.', url: 'https://www.audacityteam.org' },
  { name: 'GarageBand', desc: 'Music recording & production. Surprisingly powerful for singing. (Mac)', url: '#' },
]

function ProductCard({ product, tier }: { product: Product; tier: 'minimal' | 'recommended' }) {
  return (
    <div className={`product-card ${tier}`}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
      </div>
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <span className="product-price">{product.price}</span>
        <p className="product-why">{product.why}</p>
        <a href={product.amazon} target="_blank" rel="noopener noreferrer" className={`btn btn-${tier}`}>
          View on Amazon →
        </a>
      </div>
    </div>
  )
}

function App() {
  const minimalTotal = categories.reduce((sum, c) => sum + (c.minimal?.priceNum || 0), 0)
  const recommendedTotal = categories.reduce((sum, c) => sum + (c.recommended?.priceNum || 0), 0)

  return (
    <div className="app">
      <header className="hero">
        <h1>🎤 Home Studio Builder</h1>
        <p className="subtitle">Everything you need to record voice, singing & video — at two budget levels</p>
        <div className="totals">
          <div className="total-card minimal">
            <span className="total-label">🟢 Minimal</span>
            <span className="total-amount">${minimalTotal}</span>
            <span className="total-desc">Get Started</span>
          </div>
          <div className="total-card recommended">
            <span className="total-label">🔵 Recommended</span>
            <span className="total-amount">${recommendedTotal}</span>
            <span className="total-desc">Serious Creator</span>
          </div>
        </div>
      </header>

      <main>
        {categories.map((cat) => (
          <section key={cat.name} className="category">
            <div className="category-header">
              <h2>{cat.icon} {cat.name}</h2>
              <p className="why-matters">{cat.whyMatters}</p>
            </div>
            <div className="tier-grid">
              {cat.minimal ? (
                <div className="tier-col">
                  <div className="tier-badge minimal">🟢 Minimal</div>
                  <ProductCard product={cat.minimal} tier="minimal" />
                </div>
              ) : (
                <div className="tier-col empty">
                  <div className="tier-badge minimal">🟢 Minimal</div>
                  <div className="not-needed">Not needed at this tier 👍</div>
                </div>
              )}
              {cat.recommended ? (
                <div className="tier-col">
                  <div className="tier-badge recommended">🔵 Recommended</div>
                  <ProductCard product={cat.recommended} tier="recommended" />
                </div>
              ) : (
                <div className="tier-col empty">
                  <div className="tier-badge recommended">🔵 Recommended</div>
                  <div className="not-needed">—</div>
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="category software-section">
          <div className="category-header">
            <h2>🖥️ Software (FREE!)</h2>
            <p className="why-matters">You literally don't need to spend a dime on software. These free tools are what most YouTubers actually use.</p>
          </div>
          <div className="software-grid">
            {software.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="software-card">
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
                <span className="free-badge">FREE</span>
              </a>
            ))}
          </div>
        </section>

        <section className="summary">
          <h2>📊 Quick Comparison</h2>
          <div className="summary-table-wrap">
            <table className="summary-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>🟢 Minimal</th>
                  <th>🔵 Recommended</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.name}>
                    <td>{cat.icon} {cat.name}</td>
                    <td>{cat.minimal ? `${cat.minimal.name} (${cat.minimal.price})` : '—'}</td>
                    <td>{cat.recommended ? `${cat.recommended.name} (${cat.recommended.price})` : '—'}</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td><strong>Total</strong></td>
                  <td><strong>${minimalTotal}</strong></td>
                  <td><strong>${recommendedTotal}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer>
        <p>Built with ❤️ for aspiring creators. Prices are approximate and may vary.</p>
      </footer>
    </div>
  )
}

export default App
