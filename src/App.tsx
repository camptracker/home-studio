import './App.css'

interface Product {
  name: string
  price: string
  priceNum: number
  url: string
  image: string
  why: string
  primary?: boolean
}

interface Category {
  name: string
  icon: string
  description: string
  items: Product[]
}

const asinImg = (asin: string) =>
  `https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${asin}&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1`

const categories: Category[] = [
  {
    name: 'Cameras',
    icon: '📷',
    description: 'Chloe shoots with Sony full-frame for A-cam and a lightweight APS-C for B-roll and vlogs.',
    items: [
      { name: 'Sony Alpha 7S III (Body)', price: '$3,698', priceNum: 3698, url: 'https://www.amazon.com/dp/B08DP4NKGN', image: asinImg('B08DP4NKGN'), why: 'Her main camera. Full-frame, incredible low-light (ISO up to 409,600), 4K120p video, 10-bit 4:2:2. S-Log3 for cinematic color grading.', primary: true },
      { name: 'Sony Alpha ZV-E10 Kit', price: '$798', priceNum: 798, url: 'https://www.amazon.com/dp/B09BBLH4SG', image: asinImg('B09BBLH4SG'), why: 'Secondary/vlog camera. APS-C, interchangeable lens, product showcase mode, built-in directional mic. Great for B-roll and travel.' },
      { name: 'GoPro HERO10 Black', price: '~$250', priceNum: 250, url: 'https://www.amazon.com/dp/B09QD75B95', image: asinImg('B09QD75B95'), why: 'Action/POV shots. 5.3K60, HyperSmooth 4.0 stabilization, waterproof.' },
    ],
  },
  {
    name: 'Lenses',
    icon: '🔭',
    description: 'A mix of prime and zoom lenses covering ultra-wide to standard focal lengths — all Sony E-mount.',
    items: [
      { name: 'Sigma 24-70mm F2.8 DG DN II', price: '$1,319', priceNum: 1319, url: 'https://www.amazon.com/dp/B0D49V35GV', image: asinImg('B0D49V35GV'), why: 'Versatile zoom — the "one lens to rule them all." Sharp edge-to-edge, fast autofocus, great for talking-head and product shots.', primary: true },
      { name: 'Samyang AF 18mm F2.8 (Sony E)', price: '$249', priceNum: 249, url: 'https://www.amazon.com/dp/B07X6SVMKK', image: asinImg('B07X6SVMKK'), why: 'Ultra-wide for face-to-camera and room tours. Tiny, lightweight, and affordable.' },
      { name: 'Tamron 17-28mm f/2.8 Di III RXD', price: '$649', priceNum: 649, url: 'https://www.amazon.com/dp/B081QKWGTC', image: asinImg('B081QKWGTC'), why: 'Wide-angle zoom, lighter and cheaper alternative to Sony GM lenses.' },
      { name: 'ULANZI WL-1 Wide Angle Adapter', price: '$49.95', priceNum: 49.95, url: 'https://www.amazon.com/dp/B08HQVZ2PC', image: asinImg('B08HQVZ2PC'), why: 'Snap-on wide angle adapter for the ZV-1. Quick and easy wider field of view.' },
    ],
  },
  {
    name: 'Microphones & Audio',
    icon: '🎙️',
    description: 'From studio podcasting to run-and-gun wireless — Chloe covers every recording scenario.',
    items: [
      { name: 'Shure SM7B', price: '$439', priceNum: 439, url: 'https://www.amazon.com/dp/B0002E4Z8M', image: asinImg('B0002E4Z8M'), why: 'THE podcasting mic. Used by every major podcast and YouTuber. Incredible vocal presence, built-in pop filter, electromagnetic shielding.', primary: true },
      { name: 'Rode Wireless GO II', price: '~$350', priceNum: 350, url: 'https://www.amazon.com/dp/B08YP3S737', image: asinImg('B08YP3S737'), why: '2-person wireless mic system. Compact transmitters double as mics. Perfect for interviews and on-the-go shooting.', primary: true },
      { name: 'Sony ECM-G1 Shotgun Mic', price: '$168', priceNum: 168, url: 'https://www.amazon.com/dp/B0B6GR5DMG', image: asinImg('B0B6GR5DMG'), why: 'On-camera shotgun mic that plugs directly into Sony Multi Interface shoe. No cables needed.' },
      { name: 'Rode Lavalier GO', price: '$64.99', priceNum: 64.99, url: 'https://www.amazon.com/dp/B07WM65GTF', image: asinImg('B07WM65GTF'), why: 'Clip-on lav mic for the Wireless GO system. Discreet and broadcast-quality.' },
      { name: 'Rode VideoMic Me-L (iPhone)', price: '$66.95', priceNum: 66.95, url: 'https://www.amazon.com/dp/B07F4MMLX5', image: asinImg('B07F4MMLX5'), why: 'Lightning mic for iPhone recording. Huge upgrade over the built-in mic.' },
      { name: 'Rode PSA1 Studio Arm', price: '$103.35', priceNum: 103.35, url: 'https://www.amazon.com/dp/B001D7UYBO', image: asinImg('B001D7UYBO'), why: 'Premium boom arm for the SM7B. Smooth, silent repositioning with internal cable routing.' },
    ],
  },
  {
    name: 'Lighting',
    icon: '💡',
    description: 'Clean key light plus ambient RGB — the combo that makes her studio look so good on camera.',
    items: [
      { name: 'Elgato Ring Light', price: '~$200', priceNum: 200, url: 'https://www.amazon.com/dp/B08GMDQ87T', image: asinImg('B08GMDQ87T'), why: '2500 lumens, app-controlled brightness and color temp. The standard for face lighting among creators.', primary: true },
      { name: 'Elgato Light Strip', price: '~$60', priceNum: 60, url: 'https://www.amazon.com/dp/B08WCFCP7J', image: asinImg('B08WCFCP7J'), why: 'RGBWW ambient/background lighting. Adds depth and color to the background of any shot.' },
    ],
  },
  {
    name: 'Tripods & Support',
    icon: '🔧',
    description: 'Heavy-duty C-stands, travel tripods, cages, dollies — everything to mount and move cameras.',
    items: [
      { name: 'NEEWER Pro C Stand (10.5ft)', price: '$179.99', priceNum: 179.99, url: 'https://www.amazon.com/dp/B01GUQUBEW', image: asinImg('B01GUQUBEW'), why: 'Heavy-duty studio stand. Rock solid, adjustable arm for overhead and side angles.', primary: true },
      { name: 'Manfrotto Befree 3-Way Live', price: '$219', priceNum: 219, url: 'https://www.amazon.com/dp/B08F9JRDSY', image: asinImg('B08F9JRDSY'), why: 'Fluid head travel tripod. Smooth pans and tilts, folds compact.' },
      { name: 'Vanguard Alta Pro 2+ Tripod', price: '$180', priceNum: 180, url: 'https://www.amazon.com/dp/B06ZYJ1P8Q', image: asinImg('B06ZYJ1P8Q'), why: 'Multi-angle center column for creative low/high angles.' },
      { name: 'RAUBAY 16\' Tall Tripod', price: '$169.99', priceNum: 169.99, url: 'https://www.amazon.com/dp/B09DPR1C59', image: asinImg('B09DPR1C59'), why: 'Extreme height for overhead shots — reaches 16 feet.' },
      { name: 'SmallRig Camera Cage (A7S III)', price: '$43.90', priceNum: 43.90, url: 'https://www.amazon.com/dp/B08HCMFPN4', image: asinImg('B08HCMFPN4'), why: 'Adds mounting points for monitors, mics, and accessories to the A7S III.' },
      { name: 'SmallRig Tripod Dolly', price: '$69.99', priceNum: 69.99, url: 'https://www.amazon.com/dp/B0BB6P59Z7', image: asinImg('B0BB6P59Z7'), why: 'Rolling dolly for smooth tripod movement on flat surfaces.' },
      { name: 'SmallRig Monitor Mount', price: '$29.99', priceNum: 29.99, url: 'https://www.amazon.com/dp/B0DGL5HTC2', image: asinImg('B0DGL5HTC2'), why: '360° swivel monitor holder.' },
      { name: 'NEEWER Caster Wheels (C Stand)', price: '$52.49', priceNum: 52.49, url: 'https://www.amazon.com/dp/B088D72PB9', image: asinImg('B088D72PB9'), why: 'Makes C-stands mobile.' },
      { name: 'ULANZI Ball Head U-100', price: '$44.95', priceNum: 44.95, url: 'https://www.amazon.com/dp/B08NC2KF52', image: asinImg('B08NC2KF52'), why: 'Arca-Swiss compatible panoramic ball head.' },
      { name: 'ULANZI Mini Ball Head H28', price: '$9.99', priceNum: 9.99, url: 'https://www.amazon.com/dp/B09NJJ2DKM', image: asinImg('B09NJJ2DKM'), why: 'Tiny ball head for lightweight setups.' },
      { name: 'DSLR L Bracket', price: '$15.99', priceNum: 15.99, url: 'https://www.amazon.com/dp/B09RB11GK5', image: asinImg('B09RB11GK5'), why: 'Quick portrait/landscape switching on tripod.' },
      { name: 'TELESIN Super Clamp', price: '$24.29', priceNum: 24.29, url: 'https://www.amazon.com/dp/B0BBVGXFZ2', image: asinImg('B0BBVGXFZ2'), why: 'Clamp-mount for GoPro and small cameras anywhere.' },
      { name: 'ATUMTEK 60" Selfie Stick Tripod', price: '$41.99', priceNum: 41.99, url: 'https://www.amazon.com/dp/B0923WVVN4', image: asinImg('B0923WVVN4'), why: 'Bluetooth selfie stick that doubles as a tripod. Great for travel.' },
    ],
  },
  {
    name: 'Storage',
    icon: '💾',
    description: '4K video eats storage. Fast external SSDs keep the workflow moving.',
    items: [
      { name: 'Samsung T9 Portable SSD 4TB', price: '$792', priceNum: 792, url: 'https://www.amazon.com/dp/B0CHFSZX9W', image: asinImg('B0CHFSZX9W'), why: '2,000MB/s read speed. 4TB holds hundreds of hours of 4K footage. Rugged and pocket-sized.', primary: true },
    ],
  },
  {
    name: 'Desk & Office',
    icon: '🖥️',
    description: 'The workspace behind the scenes — ergonomic, functional, and a little bit fun.',
    items: [
      { name: 'Steelcase Leap Chair', price: '$949', priceNum: 949, url: 'https://www.amazon.com/dp/B006H1QYBA', image: asinImg('B006H1QYBA'), why: 'Premium ergonomic office chair. Hours of editing demand a great chair — this is the gold standard.', primary: true },
      { name: 'Ergonofis Sway Desk', price: '—', priceNum: 0, url: 'https://ergonofis.com', image: 'https://ergonofis.com/cdn/shop/files/sway-walnut-desk-ergonofis_1200x.jpg?v=1686256108', why: 'Solid wood standing desk. Beautiful craftsmanship, sit-stand with electric lift.' },
      { name: 'Bose QC45 Headphones', price: '~$329', priceNum: 329, url: 'https://www.amazon.com/dp/B098FH5P3C', image: asinImg('B098FH5P3C'), why: 'Noise cancelling headphones for editing and focus time.' },
      { name: 'Logitech G PRO X Superlight Mouse', price: '$119', priceNum: 119, url: 'https://www.amazon.com/dp/B087LP6F4Y', image: asinImg('B087LP6F4Y'), why: 'Ultra-lightweight wireless mouse. 63g, 70-hour battery, precise sensor.' },
      { name: 'GMMK PRO 75% Keyboard', price: '~$170', priceNum: 170, url: 'https://www.amazon.com/dp/B0BCPBH2VR', image: asinImg('B0BCPBH2VR'), why: 'Gasket-mounted mechanical keyboard. Customizable switches and keycaps.' },
      { name: 'KPREPUBLIC GK21S Numpad', price: '$49', priceNum: 49, url: 'https://www.amazon.com/dp/B09FL99PM9', image: asinImg('B09FL99PM9'), why: 'Wireless mechanical numpad — great companion to 75% keyboards.' },
      { name: 'Divoom Ditoo Pixel Speaker', price: '$75.99', priceNum: 75.99, url: 'https://www.amazon.com/dp/B07YWWPV7L', image: asinImg('B07YWWPV7L'), why: 'Retro pixel art Bluetooth speaker. Fun desk vibes.' },
    ],
  },
]

const software = [
  { name: 'OBS Studio', desc: 'Recording & streaming. Used by every content creator.', url: 'https://obsproject.com' },
  { name: 'DaVinci Resolve', desc: 'Video editing. Hollywood-grade, completely free.', url: 'https://www.blackmagicdesign.com/products/davinciresolve' },
  { name: 'Audacity', desc: 'Audio recording & editing. Simple, powerful.', url: 'https://www.audacityteam.org' },
  { name: 'GarageBand', desc: 'Music recording & production. (Mac)', url: '#' },
]

const totalCost = categories.reduce((sum, cat) => sum + cat.items.reduce((s, i) => s + i.priceNum, 0), 0)
const primaryItems = categories.flatMap(c => c.items.filter(i => i.primary))
const primaryCost = primaryItems.reduce((s, i) => s + i.priceNum, 0)

function ProductCard({ product }: { product: Product }) {
  return (
    <div className={`product-card${product.primary ? ' primary' : ''}`}>
      {product.primary && <span className="primary-badge">🌟 Primary</span>}
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
      </div>
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <span className="product-price">{product.price}</span>
        <p className="product-why">{product.why}</p>
        <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn">
          {product.url.includes('amazon.com') ? 'View on Amazon →' : 'View Product →'}
        </a>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Chloe Shih's Studio Setup</h1>
        <p className="subtitle">The exact gear behind a 400K+ subscriber YouTube channel</p>
        <p className="intro">
          <strong>Chloe Shih</strong> (<a href="https://youtube.com/@chloeshih" target="_blank" rel="noopener noreferrer">@chloeshih</a>) — former engineer at Discord, Google, Meta, and TikTok turned full-time YouTuber with 400K+ subscribers. Her content covers tech, career advice, and lifestyle. Here's every piece of gear she uses.
        </p>
        <div className="totals">
          <div className="total-card primary-total">
            <span className="total-label">🌟 Primary Gear</span>
            <span className="total-amount">${primaryCost.toLocaleString()}</span>
            <span className="total-desc">Her core setup</span>
          </div>
          <div className="total-card full-total">
            <span className="total-label">📦 Everything</span>
            <span className="total-amount">${Math.round(totalCost).toLocaleString()}</span>
            <span className="total-desc">All {categories.reduce((n, c) => n + c.items.length, 0)} items</span>
          </div>
        </div>
      </header>

      <main>
        {categories.map((cat) => (
          <section key={cat.name} className="category">
            <div className="category-header">
              <h2>{cat.icon} {cat.name}</h2>
              <p className="cat-desc">{cat.description}</p>
            </div>
            <div className="items-grid">
              {cat.items.map((item) => (
                <ProductCard key={item.name} product={item} />
              ))}
            </div>
          </section>
        ))}

        <section className="category software-section">
          <div className="category-header">
            <h2>🖥️ Software (FREE!)</h2>
            <p className="cat-desc">You don't need to spend a dime on software. These free tools are what most YouTubers actually use.</p>
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
      </main>

      <footer>
        <p>Gear list sourced from <a href="https://www.amazon.com/shop/chloeshih" target="_blank" rel="noopener noreferrer">Chloe Shih's Amazon Storefront</a>. Prices approximate and may vary. Not affiliated.</p>
      </footer>
    </div>
  )
}

export default App
