import { useState } from 'react'
import LightingGuide from './LightingGuide'
import './App.css'

interface Product {
  name: string
  price: string
  priceNum: number
  url: string
  image: string
  why: string
  primary?: boolean
  pros: string[]
  cons: string[]
  value: 1 | 2 | 3 | 4 | 5
  intention: string
}

interface Category {
  name: string
  icon: string
  description: string
  items: Product[]
}

const imgMap: Record<string, string> = {
  'B08DP4NKGN': 'https://m.media-amazon.com/images/I/41vnqBVgsjL._AC_SL300_.jpg',
  'B09BBLH4SG': 'https://m.media-amazon.com/images/I/41SdWIDdkxL._AC_SL300_.jpg',
  'B09QD75B95': 'https://m.media-amazon.com/images/I/41Zm2WhbBcL._AC_SL300_.jpg',
  'B0D49V35GV': 'https://m.media-amazon.com/images/I/31zzT26g0pL._AC_SL300_.jpg',
  'B07X6SVMKK': 'https://m.media-amazon.com/images/I/31TJsBNdVML._AC_SL300_.jpg',
  'B081QKWGTC': 'https://m.media-amazon.com/images/I/41ty1T9dM4L._AC_SL300_.jpg',
  'B08HQVZ2PC': 'https://m.media-amazon.com/images/I/51bP1C9-QHL._AC_SL300_.jpg',
  'B0002E4Z8M': 'https://m.media-amazon.com/images/I/41DyRFZY7QL._AC_SL300_.jpg',
  'B08YP3S737': 'https://m.media-amazon.com/images/I/41VD8gkgQ9L._AC_SL300_.jpg',
  'B0B6GR5DMG': 'https://m.media-amazon.com/images/I/419tfj7N6mL._AC_SL300_.jpg',
  'B07WM65GTF': 'https://m.media-amazon.com/images/I/21DCsTp9o2L._AC_SL300_.jpg',
  'B07F4MMLX5': 'https://m.media-amazon.com/images/I/41nQW0pPhlL._AC_SL300_.jpg',
  'B001D7UYBO': 'https://m.media-amazon.com/images/I/31mx6aaLfIL._AC_SL300_.jpg',
  'B08GMDQ87T': 'https://m.media-amazon.com/images/I/31aKwdxTWDL._AC_SL300_.jpg',
  'B08WCFCP7J': 'https://m.media-amazon.com/images/I/41Ndqm38hIL._AC_SL300_.jpg',
  'B01GUQUBEW': 'https://m.media-amazon.com/images/I/21t09TL+x-L._AC_SL300_.jpg',
  'B08F9JRDSY': 'https://m.media-amazon.com/images/I/41utQ1vrBNL._AC_SL300_.jpg',
  'B06ZYJ1P8Q': 'https://m.media-amazon.com/images/I/310OPeWxykL._AC_SL300_.jpg',
  'B09DPR1C59': 'https://m.media-amazon.com/images/I/31JjVFHga2L._AC_SL300_.jpg',
  'B08HCMFPN4': 'https://m.media-amazon.com/images/I/4166lJvUkIL._AC_SL300_.jpg',
  'B0DGL5HTC2': 'https://m.media-amazon.com/images/I/41o6xqLzyIL._AC_SL300_.jpg',
  'B0BB6P59Z7': 'https://m.media-amazon.com/images/I/41Qbp9rMEdL._AC_SL300_.jpg',
  'B088D72PB9': 'https://m.media-amazon.com/images/I/41ncxMsbucL._AC_SL300_.jpg',
  'B08NC2KF52': 'https://m.media-amazon.com/images/I/41dKfC7ZsAL._AC_SL300_.jpg',
  'B09NJJ2DKM': 'https://m.media-amazon.com/images/I/41NbKOHOX2L._AC_SL300_.jpg',
  'B09RB11GK5': 'https://m.media-amazon.com/images/I/41waslEGSQL._AC_SL300_.jpg',
  'B0BBVGXFZ2': 'https://m.media-amazon.com/images/I/41Ma3Aht8SL._AC_SL300_.jpg',
  'B0923WVVN4': 'https://m.media-amazon.com/images/I/31sr2lSPkAL._AC_SL300_.jpg',
  'B0CHFSZX9W': 'https://m.media-amazon.com/images/I/41JHNVamFwL._AC_SL300_.jpg',
  'B006H1QYBA': 'https://m.media-amazon.com/images/I/31HVl-dEpAL._AC_SL300_.jpg',
  'B087LP6F4Y': 'https://m.media-amazon.com/images/I/31Hn3R2Vv5L._AC_SL300_.jpg',
  'B098FH5P3C': 'https://m.media-amazon.com/images/I/41bRdvnXdjL._AC_SL300_.jpg',
  'B0BCPBH2VR': 'https://m.media-amazon.com/images/I/31gnn2dZOmL._AC_SL300_.jpg',
  'B09FL99PM9': 'https://m.media-amazon.com/images/I/51GegklB4ZL._AC_SL300_.jpg',
  'B07YWWPV7L': 'https://m.media-amazon.com/images/I/510cD+InfEL._AC_SL300_.jpg',
}
const asinImg = (asin: string) => imgMap[asin] || `https://m.media-amazon.com/images/I/${asin}._AC_SL300_.jpg`

const categories: Category[] = [
  {
    name: 'Cameras',
    icon: '📷',
    description: 'Chloe shoots with Sony full-frame for A-cam and a lightweight APS-C for B-roll and vlogs.',
    items: [
      { name: 'Sony Alpha 7S III (Body)', price: '$3,698', priceNum: 3698, url: 'https://www.amazon.com/dp/B08DP4NKGN', image: asinImg('B08DP4NKGN'), why: 'Her main camera. Full-frame, incredible low-light (ISO up to 409,600), 4K120p video, 10-bit 4:2:2. S-Log3 for cinematic color grading.', primary: true, pros: ["Best-in-class low-light (ISO 409,600)", "4K120p for stunning slow-motion", "10-bit 4:2:2 color for pro color grading", "Dual card slots (CFexpress + SD)", "Real-time Eye AF tracking"], cons: ["Only 12.1MP (not great for photos)", "No built-in image stabilization sensor shift crop at 4K120", "Extremely expensive for the megapixel count"], value: 3, intention: "Professional videographers who prioritize low-light and video quality over photo resolution. THE video-first full-frame camera." },
      { name: 'Sony Alpha ZV-E10 Kit', price: '$798', priceNum: 798, url: 'https://www.amazon.com/dp/B09BBLH4SG', image: asinImg('B09BBLH4SG'), why: 'Secondary/vlog camera. APS-C, interchangeable lens, product showcase mode, built-in directional mic. Great for B-roll and travel.', pros: ["Lightweight and compact (12oz body)", "Product Showcase mode auto-focuses on held objects", "Built-in directional mic is actually good", "Interchangeable lenses on APS-C budget", "Flip-out screen for self-shooting"], cons: ["No in-body stabilization (IBIS)", "APS-C crop factor (1.5x) on lenses", "Single SD card slot", "Older autofocus vs ZV-E10 II"], value: 5, intention: "Vloggers and content creators wanting interchangeable lens quality without full-frame cost. Best entry-level creator camera." },
      { name: 'GoPro HERO10 Black', price: '~$250', priceNum: 250, url: 'https://www.amazon.com/dp/B09QD75B95', image: asinImg('B09QD75B95'), why: 'Action/POV shots. 5.3K60, HyperSmooth 4.0 stabilization, waterproof.', pros: ["5.3K60 and 4K120 in a tiny body", "HyperSmooth 4.0 stabilization is incredible", "Waterproof to 33ft without housing", "Horizon leveling keeps shots straight"], cons: ["Overheats in 4K+ modes after ~20 min", "Tiny sensor = poor low-light", "Battery life is mediocre (60-90 min)"], value: 4, intention: "Action/adventure shots, POV footage, travel B-roll where a full camera is impractical." },
    ],
  },
  {
    name: 'Lenses',
    icon: '🔭',
    description: 'A mix of prime and zoom lenses covering ultra-wide to standard focal lengths — all Sony E-mount.',
    items: [
      { name: 'Sigma 24-70mm F2.8 DG DN II', price: '$1,319', priceNum: 1319, url: 'https://www.amazon.com/dp/B0D49V35GV', image: asinImg('B0D49V35GV'), why: 'Versatile zoom — the "one lens to rule them all." Sharp edge-to-edge, fast autofocus, great for talking-head and product shots.', primary: true, pros: ["Covers the most useful focal range (24-70)", "Constant f/2.8 aperture for consistent exposure", "Razor sharp edge-to-edge", "Fast, silent AF motor", "Weather-sealed"], cons: ["Heavy (29oz / 830g)", "Expensive for a third-party lens", "Some focus breathing (minimized vs gen 1)"], value: 4, intention: "The do-everything lens. If you could only own one lens for YouTube, this is it. Covers talking head, product shots, B-roll." },
      { name: 'Samyang AF 18mm F2.8 (Sony E)', price: '$249', priceNum: 249, url: 'https://www.amazon.com/dp/B07X6SVMKK', image: asinImg('B07X6SVMKK'), why: 'Ultra-wide for face-to-camera and room tours. Tiny, lightweight, and affordable.', pros: ["Ultra-wide 18mm is perfect for small rooms", "Incredibly lightweight (5.3oz / 150g)", "Affordable for the quality", "Compact size doesn't look intimidating on camera"], cons: ["Some barrel distortion at edges", "Not weather-sealed", "AF can hunt in low light"], value: 5, intention: "Face-to-camera talking head in small rooms. Room tours, real estate, travel vlogs where you need to show the whole scene." },
      { name: 'Tamron 17-28mm f/2.8 Di III RXD', price: '$649', priceNum: 649, url: 'https://www.amazon.com/dp/B081QKWGTC', image: asinImg('B081QKWGTC'), why: 'Wide-angle zoom, lighter and cheaper alternative to Sony GM lenses.', pros: ["Ultra-wide zoom range (17-28mm)", "Constant f/2.8 with great bokeh", "Excellent build quality", "Very compact for a wide zoom"], cons: ["Listed as 'Renewed' — may have cosmetic wear", "AF not as fast as Sony native lenses", "No physical aperture ring"], value: 4, intention: "Wide-angle video and cinematic establishing shots. Architecture, interiors, and wide vlogs." },
      { name: 'ULANZI WL-1 Wide Angle Adapter', price: '$49.95', priceNum: 49.95, url: 'https://www.amazon.com/dp/B08HQVZ2PC', image: asinImg('B08HQVZ2PC'), why: 'Snap-on wide angle adapter for the ZV-1. Quick and easy wider field of view.', pros: ["Instantly adds 18mm wide angle to ZV-1", "Includes 10x macro mode", "Magnetic attachment is quick on/off", "Affordable way to extend compact camera"], cons: ["Only fits Sony ZV-1 / RX100 VII", "Slight vignetting in corners", "Adds bulk to a compact camera"], value: 4, intention: "ZV-1 owners who need wider shots without switching cameras." },
    ],
  },
  {
    name: 'Microphones & Audio',
    icon: '🎙️',
    description: 'From studio podcasting to run-and-gun wireless — Chloe covers every recording scenario.',
    items: [
      { name: 'Shure SM7B', price: '$439', priceNum: 439, url: 'https://www.amazon.com/dp/B0002E4Z8M', image: asinImg('B0002E4Z8M'), why: 'THE podcasting mic. Used by every major podcast and YouTuber. Incredible vocal presence, built-in pop filter, electromagnetic shielding.', primary: true, pros: ["Legendary broadcast vocal quality", "Built-in pop filter and shock mount", "Electromagnetic shielding (rejects PC/monitor hum)", "Virtually indestructible build", "Flat frequency response for natural voice"], cons: ["Requires audio interface + gain (quiet output)", "Heavy (1.69 lbs)", "XLR only — no USB option", "Needs a beefy boom arm"], value: 4, intention: "Podcasting, voiceover, streaming. THE standard mic for broadcast voice. Used by Joe Rogan, every major podcast." },
      { name: 'Rode Wireless GO II', price: '~$350', priceNum: 350, url: 'https://www.amazon.com/dp/B08YP3S737', image: asinImg('B08YP3S737'), why: '2-person wireless mic system. Compact transmitters double as mics. Perfect for interviews and on-the-go shooting.', primary: true, pros: ["2 transmitters included (2-person interviews)", "Each TX records internal backup (up to 40hrs)", "Incredibly compact (31g per transmitter)", "USB-C charging", "3.5mm and USB-C output options"], cons: ["Transmission range limited to 200m line-of-sight", "No high-pass filter on transmitter", "Wind noise without dead cat accessories"], value: 5, intention: "Run-and-gun interviews, on-location filming, any scenario where wired mics are impractical." },
      { name: 'Sony ECM-G1 Shotgun Mic', price: '$168', priceNum: 168, url: 'https://www.amazon.com/dp/B0B6GR5DMG', image: asinImg('B0B6GR5DMG'), why: 'On-camera shotgun mic that plugs directly into Sony Multi Interface shoe. No cables needed.', pros: ["Plugs directly into Sony MI shoe — no cable", "Ultra-compact and lightweight", "Supercardioid pattern rejects side noise", "Digital audio connection = no interference"], cons: ["Only works with Sony cameras (MI shoe)", "Not as good in noisy environments as a lav", "No headphone monitoring output"], value: 4, intention: "On-camera mic for solo YouTubers using Sony cameras. Clean audio without extra gear." },
      { name: 'Rode Lavalier GO', price: '$64.99', priceNum: 64.99, url: 'https://www.amazon.com/dp/B07WM65GTF', image: asinImg('B07WM65GTF'), why: 'Clip-on lav mic for the Wireless GO system. Discreet and broadcast-quality.', pros: ["Broadcast-quality omnidirectional capsule", "Kevlar-reinforced cable", "Includes foam windscreen and clip", "Designed specifically for Wireless GO"], cons: ["Omnidirectional picks up ambient noise", "Cable can create clothing rustle", "Only 3.5mm TRS connector"], value: 4, intention: "Clip-on mic for interviews and sit-down content. Pairs with Wireless GO for wireless lav setup." },
      { name: 'Rode VideoMic Me-L (iPhone)', price: '$66.95', priceNum: 66.95, url: 'https://www.amazon.com/dp/B07F4MMLX5', image: asinImg('B07F4MMLX5'), why: 'Lightning mic for iPhone recording. Huge upgrade over the built-in mic.', pros: ["Direct Lightning connection to iPhone", "Cardioid pattern focuses on subject", "Includes furry windshield", "No battery needed — powered by iPhone"], cons: ["Lightning only (no USB-C version for newer iPhones)", "Fixed gain — no level adjustment", "Gets in the way of some phone cases"], value: 3, intention: "iPhone video creators who want dramatically better audio than the built-in mic." },
      { name: 'Rode PSA1 Studio Arm', price: '$103.35', priceNum: 103.35, url: 'https://www.amazon.com/dp/B001D7UYBO', image: asinImg('B001D7UYBO'), why: 'Premium boom arm for the SM7B. Smooth, silent repositioning with internal cable routing.', pros: ["Buttery smooth movement with internal springs", "Holds mics up to 2.2 lbs easily", "Internal cable routing keeps desk clean", "360° rotation + full reach"], cons: ["Desk clamp is bulky", "Can sag with heavier mics over time", "Springs can squeak after years of use"], value: 5, intention: "Desktop mic mounting. Keeps the SM7B or any studio mic positioned perfectly and out of the way." },
    ],
  },
  {
    name: 'Lighting',
    icon: '💡',
    description: 'Clean key light plus ambient RGB — the combo that makes her studio look so good on camera.',
    items: [
      { name: 'Elgato Ring Light', price: '~$200', priceNum: 200, url: 'https://www.amazon.com/dp/B08GMDQ87T', image: asinImg('B08GMDQ87T'), why: '2500 lumens, app-controlled brightness and color temp. The standard for face lighting among creators.', primary: true, pros: ["2500 lumens — very bright", "App-controlled temp + brightness (iOS/Android/PC)", "Desk clamp mount saves space", "Even, flattering face illumination", "No visible ring reflection in glasses (diffused)"], cons: ["Desk clamp limits positioning", "Not battery-powered", "Expensive vs generic ring lights"], value: 4, intention: "Primary face/key light for desk-based content. The creator standard for talking head videos." },
      { name: 'Elgato Light Strip', price: '~$60', priceNum: 60, url: 'https://www.amazon.com/dp/B08WCFCP7J', image: asinImg('B08WCFCP7J'), why: 'RGBWW ambient/background lighting. Adds depth and color to the background of any shot.', pros: ["RGBWW — warm white + cool white + full RGB", "App + Stream Deck control", "Adhesive backing for easy install", "60 LEDs per meter, smooth colors"], cons: ["Not as bright as dedicated accent lights", "Adhesive can fail on some surfaces", "Requires outlet power"], value: 4, intention: "Background ambient lighting. Adds color depth behind you on camera. Pairs with Ring Light for a pro setup." },
    ],
  },
  {
    name: 'Tripods & Support',
    icon: '🔧',
    description: 'Heavy-duty C-stands, travel tripods, cages, dollies — everything to mount and move cameras.',
    items: [
      { name: 'NEEWER Pro C Stand (10.5ft)', price: '$179.99', priceNum: 179.99, url: 'https://www.amazon.com/dp/B01GUQUBEW', image: asinImg('B01GUQUBEW'), why: 'Heavy-duty studio stand. Rock solid, adjustable arm for overhead and side angles.', primary: true, pros: ["100% stainless steel — extremely sturdy", "10.5ft max height with arm", "128cm boom arm for overhead/side positioning", "Industry standard design"], cons: ["Heavy (17.6 lbs) — not portable", "Takes up significant floor space", "Legs can be tricky to fold in tight spaces"], value: 5, intention: "Studio workhorse. Holds cameras, lights, backdrops, reflectors. Every studio needs at least one." },
      { name: 'Manfrotto Befree 3-Way Live', price: '$219', priceNum: 219, url: 'https://www.amazon.com/dp/B08F9JRDSY', image: asinImg('B08F9JRDSY'), why: 'Fluid head travel tripod. Smooth pans and tilts, folds compact.', pros: ["Fluid head for smooth video pans/tilts", "Folds to 16\" for travel", "Aluminum build is sturdy yet light (4.2 lbs)", "Quick-release plate system"], cons: ["Max load 13.2 lbs limits heavy setups", "Fluid drag not adjustable", "Ball head would be more versatile for photo"], value: 4, intention: "Travel-friendly video tripod. Smooth panning for interviews and B-roll on location." },
      { name: 'Vanguard Alta Pro 2+ Tripod', price: '$180', priceNum: 180, url: 'https://www.amazon.com/dp/B06ZYJ1P8Q', image: asinImg('B06ZYJ1P8Q'), why: 'Multi-angle center column for creative low/high angles.', pros: ["Multi-angle center column (0° to 180°)", "Ball head with separate pan lock", "Holds up to 15.4 lbs", "Rubber feet + spiked feet included"], cons: ["Heavier than travel tripods (5.7 lbs)", "Center column mechanism can feel loose", "Not the best for video panning"], value: 4, intention: "Creative angles. The multi-angle column lets you shoot overhead, low, or any angle in between." },
      { name: "RAUBAY 16' Tall Tripod", price: '$169.99', priceNum: 169.99, url: 'https://www.amazon.com/dp/B09DPR1C59', image: asinImg('B09DPR1C59'), why: 'Extreme height for overhead shots — reaches 16 feet.', pros: ["Reaches 16 FEET — overhead anything", "Air-cushioned telescoping prevents slam-down", "1/4\" and 3/8\" screw adapters included", "Surprisingly stable at height"], cons: ["Very tall = less stable in wind", "Heavy (7.7 lbs)", "Overkill for normal use"], value: 3, intention: "Extreme overhead and high-angle shots. Room-wide establishing shots looking down." },
      { name: 'SmallRig Camera Cage (A7S III)', price: '$43.90', priceNum: 43.90, url: 'https://www.amazon.com/dp/B08HCMFPN4', image: asinImg('B08HCMFPN4'), why: 'Adds mounting points for monitors, mics, and accessories to the A7S III.', pros: ["Tons of 1/4\"-20 and 3/8\" mounting holes", "Doesn't block any ports or buttons", "Arca-Swiss compatible base", "Adds protection against drops"], cons: ["Adds bulk and weight to camera", "Can rattle if not tightened properly", "Specific to A7S III only"], value: 5, intention: "Rigging accessories onto the A7S III. Mount monitors, mics, lights, handles — all at once." },
      { name: 'SmallRig Tripod Dolly', price: '$69.99', priceNum: 69.99, url: 'https://www.amazon.com/dp/B0BB6P59Z7', image: asinImg('B0BB6P59Z7'), why: 'Rolling dolly for smooth tripod movement on flat surfaces.', pros: ["3\" rubber wheels roll smoothly", "Adjustable legs fit most tripods", "Includes carry bag", "33 lb capacity"], cons: ["Only works on flat, smooth floors", "Wheels can be noisy on hard surfaces", "Adds height to tripod setup"], value: 3, intention: "Moving tripod setups around the studio smoothly. Dolly shots on flat floors." },
      { name: 'SmallRig Monitor Mount', price: '$29.99', priceNum: 29.99, url: 'https://www.amazon.com/dp/B0DGL5HTC2', image: asinImg('B0DGL5HTC2'), why: '360° swivel monitor holder.', pros: ["360° swivel and 180° tilt", "Anti-twist design stays locked", "Compatible with 1/4\" screws", "Lightweight aluminum"], cons: ["Max load ~1.1 lbs — small monitors only", "Bouncy pins can be fiddly", "Limited to smaller monitors"], value: 4, intention: "Mounting a field monitor (like Atomos Ninja) onto a cage or rig for better viewing while filming." },
      { name: 'NEEWER Caster Wheels (C Stand)', price: '$52.49', priceNum: 52.49, url: 'https://www.amazon.com/dp/B088D72PB9', image: asinImg('B088D72PB9'), why: 'Makes C-stands mobile.', pros: ["75mm rubber wheels roll quietly", "Locking brakes on each wheel", "Easy screw-on install"], cons: ["ONLY compatible with NEEWER C-stands", "Add 3\" of height", "Pricey for what they are"], value: 3, intention: "Making the NEEWER C-stand mobile. Roll it around the studio instead of lifting." },
      { name: 'ULANZI Ball Head U-100', price: '$44.95', priceNum: 44.95, url: 'https://www.amazon.com/dp/B08NC2KF52', image: asinImg('B08NC2KF52'), why: 'Arca-Swiss compatible panoramic ball head.', pros: ["Quick-release claw system — 1 second on/off", "360° panoramic rotation", "44.1 lb max load — handles anything", "Compact and lightweight"], cons: ["Proprietary claw plate (need claw base plates)", "Friction lock can slip if not tight enough", "Learning curve for the claw system"], value: 4, intention: "Quick-swap camera mounting. The claw system is faster than traditional Arca-Swiss plates." },
      { name: 'ULANZI Mini Ball Head H28', price: '$9.99', priceNum: 9.99, url: 'https://www.amazon.com/dp/B09NJJ2DKM', image: asinImg('B09NJJ2DKM'), why: 'Tiny ball head for lightweight setups.', pros: ["Incredibly small and light", "Dual cold shoe + 1/4\" thread", "Affordable", "Perfect for small accessories"], cons: ["5.5 lb max — very light duty", "Ball lock is tiny and fiddly", "Not for cameras heavier than a GoPro"], value: 5, intention: "Mounting small lights, mics, or GoPros onto a cold shoe or small mount point." },
      { name: 'DSLR L Bracket', price: '$15.99', priceNum: 15.99, url: 'https://www.amazon.com/dp/B09RB11GK5', image: asinImg('B09RB11GK5'), why: 'Quick portrait/landscape switching on tripod.', pros: ["Switch portrait/landscape in seconds", "Universal 1/4\" screw fits any camera", "Arca-Swiss compatible", "Very affordable"], cons: ["Generic fit — may not align perfectly with all cameras", "Cheap materials vs branded L-plates", "Can block battery/card doors on some cameras"], value: 4, intention: "Quick portrait/landscape switching on a tripod without re-leveling." },
      { name: 'TELESIN Super Clamp', price: '$24.29', priceNum: 24.29, url: 'https://www.amazon.com/dp/B0BBVGXFZ2', image: asinImg('B0BBVGXFZ2'), why: 'Clamp-mount for GoPro and small cameras anywhere.', pros: ["Dual 360° ball heads for any angle", "Strong clamp holds up to 3\" diameter", "Compatible with GoPro, 1/4\" screw, phone", "Compact and pocketable"], cons: ["Not strong enough for heavy cameras", "Ball heads can loosen over time", "Rubber pads can mark some surfaces"], value: 5, intention: "Clamping a GoPro or small camera onto bikes, handlebars, railings, shelves — anywhere." },
      { name: 'ATUMTEK 60" Selfie Stick Tripod', price: '$41.99', priceNum: 41.99, url: 'https://www.amazon.com/dp/B0923WVVN4', image: asinImg('B0923WVVN4'), why: 'Bluetooth selfie stick that doubles as a tripod. Great for travel.', pros: ["Extends to 60\" (5 feet)", "Bluetooth remote for hands-free shooting", "Doubles as standing tripod", "Lightweight aluminum"], cons: ["Wobbly at full extension", "Phone clamp can slip with heavy cases", "Bluetooth remote battery is tiny"], value: 4, intention: "Phone content creation — selfies, TikToks, Instagram Reels. Portable tripod for travel." },
    ],
  },
  {
    name: 'Storage',
    icon: '💾',
    description: '4K video eats storage. Fast external SSDs keep the workflow moving.',
    items: [
      { name: 'Samsung T9 Portable SSD 4TB', price: '$792', priceNum: 792, url: 'https://www.amazon.com/dp/B0CHFSZX9W', image: asinImg('B0CHFSZX9W'), why: '2,000MB/s read speed. 4TB holds hundreds of hours of 4K footage. Rugged and pocket-sized.', primary: true, pros: ["2,000 MB/s read speed — blazing fast", "4TB = hundreds of hours of 4K footage", "Rugged: IP65 dust/water resistant, 3m drop proof", "USB 3.2 Gen 2x2", "Compact (3.9\" x 2.4\")"], cons: ["Expensive ($792 for 4TB)", "Gets warm under sustained transfers", "USB-C cable is short"], value: 3, intention: "Video editors who shoot 4K+ and need fast, portable mass storage. Archive and shuttle footage between locations." },
    ],
  },
  {
    name: 'Desk & Office',
    icon: '🖥️',
    description: 'The workspace behind the scenes — ergonomic, functional, and a little bit fun.',
    items: [
      { name: 'Steelcase Leap Chair', price: '$949', priceNum: 949, url: 'https://www.amazon.com/dp/B006H1QYBA', image: asinImg('B006H1QYBA'), why: 'Premium ergonomic office chair. Hours of editing demand a great chair — this is the gold standard.', primary: true, pros: ["LiveBack tech flexes with your spine", "7 adjustment points (arms, seat depth, lumbar, etc.)", "12-year warranty", "Supports up to 400 lbs", "Passes BIFMA durability tests"], cons: ["Very expensive for a chair", "Heavy (40+ lbs)", "Fabric options are limited at base price", "Requires break-in period"], value: 4, intention: "Anyone spending 8+ hours at a desk editing video. Investment in your back health." },
      { name: 'Ergonofis Sway Desk', price: '—', priceNum: 0, url: 'https://ergonofis.com', image: 'https://ergonofis.com/cdn/shop/files/sway-walnut-desk-ergonofis_1200x.jpg?v=1686256108', why: 'Solid wood standing desk. Beautiful craftsmanship, sit-stand with electric lift.', pros: ["Solid wood top (oak, walnut, etc.)", "Electric sit-stand with memory presets", "Beautiful craftsmanship — looks premium", "Cable management built in", "Whisper-quiet motor"], cons: ["Expensive ($1,500+)", "Heavy and hard to move once assembled", "Long shipping times (made to order)"], value: 3, intention: "A statement desk for your studio. Sit-stand for health, solid wood for aesthetics." },
      { name: 'Bose QC45 Headphones', price: '~$329', priceNum: 329, url: 'https://www.amazon.com/dp/B098FH5P3C', image: asinImg('B098FH5P3C'), why: 'Noise cancelling headphones for editing and focus time.', pros: ["Excellent active noise cancellation", "Lightweight and comfortable for all-day wear", "24-hour battery life", "Wired mode available when battery dies", "Clear mic for calls"], cons: ["No spatial audio", "Sound quality not audiophile-grade", "No custom EQ in app", "Superseded by QC Ultra"], value: 3, intention: "Editing in noisy environments. Blocking distractions during long editing sessions." },
      { name: 'Logitech G PRO X Superlight Mouse', price: '$119', priceNum: 119, url: 'https://www.amazon.com/dp/B087LP6F4Y', image: asinImg('B087LP6F4Y'), why: 'Ultra-lightweight wireless mouse. 63g, 70-hour battery, precise sensor.', pros: ["Ultra-light at 63g", "HERO 25K sensor — precise tracking", "70-hour battery life", "Large PTFE feet for smooth glide", "USB-C charging"], cons: ["No Bluetooth (LIGHTSPEED dongle only)", "No RGB lighting", "Only 5 buttons (no side scroll)"], value: 4, intention: "Precision mouse for video editing timelines. The lightweight + long battery combo is ideal for all-day use." },
      { name: 'GMMK PRO 75% Keyboard', price: '~$170', priceNum: 170, url: 'https://www.amazon.com/dp/B0BCPBH2VR', image: asinImg('B0BCPBH2VR'), why: 'Gasket-mounted mechanical keyboard. Customizable switches and keycaps.', pros: ["Gasket-mounted for premium typing feel", "Hot-swappable switches — customize without soldering", "Aluminum CNC case — premium build", "RGB per-key lighting", "Rotary knob for volume/scroll"], cons: ["Barebones — need switches + keycaps separately", "Software (Glorious Core) is clunky", "Stabilizers need modding out of box"], value: 3, intention: "Custom mechanical keyboard enthusiasts. A platform to build YOUR perfect keyboard." },
      { name: 'KPREPUBLIC GK21S Numpad', price: '$49', priceNum: 49, url: 'https://www.amazon.com/dp/B09FL99PM9', image: asinImg('B09FL99PM9'), why: 'Wireless mechanical numpad — great companion to 75% keyboards.', pros: ["Bluetooth + USB-C dual mode", "Hot-swappable switches", "RGB backlighting", "Programmable keys"], cons: ["Build quality is budget-tier", "Bluetooth can disconnect intermittently", "No keycaps included (barebones)"], value: 3, intention: "Companion numpad for 75%/65% keyboard users. Great for editing shortcuts (mapped to DaVinci/Premiere hotkeys)." },
      { name: 'Divoom Ditoo Pixel Speaker', price: '$75.99', priceNum: 75.99, url: 'https://www.amazon.com/dp/B07YWWPV7L', image: asinImg('B07YWWPV7L'), why: 'Retro pixel art Bluetooth speaker. Fun desk vibes.', pros: ["Retro pixel art display is adorable", "Bluetooth 5.0 speaker", "Alarm clock + game functions", "App with pixel art community", "Actually decent sound for the size"], cons: ["Sound quality is mediocre for music", "Small display (3.5\")", "Not water resistant"], value: 3, intention: "Desk personality piece. Fun ambient speaker that looks great on camera in the background." },
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

function ValueStars({ value }: { value: number }) {
  return (
    <span className="value-stars" title={`Value: ${value}/5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < value ? 'star filled' : 'star empty'}>
          {i < value ? '⭐' : '☆'}
        </span>
      ))}
    </span>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`product-card${product.primary ? ' primary' : ''}`}>
      {product.primary && <span className="primary-badge">🌟 Primary</span>}
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
      </div>
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <span className="product-price">{product.price}</span>
        <div className="product-value">
          <ValueStars value={product.value} />
          <span className="value-label">Value</span>
        </div>
        <p className="product-why">{product.why}</p>

        <button className="expand-toggle" onClick={() => setExpanded(!expanded)}>
          {expanded ? '▲ Less detail' : '▼ More detail'}
        </button>

        {expanded && (
          <div className="product-details">
            <p className="product-intention"><em>🎯 {product.intention}</em></p>
            <div className="pros-cons">
              <ul className="pros-list">
                {product.pros.map((pro, i) => (
                  <li key={i}>✅ {pro}</li>
                ))}
              </ul>
              <ul className="cons-list">
                {product.cons.map((con, i) => (
                  <li key={i}>❌ {con}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn">
          {product.url.includes('amazon.com') ? 'View on Amazon →' : 'View Product →'}
        </a>
      </div>
    </div>
  )
}

function App() {
  const [tab, setTab] = useState<'equipment' | 'lighting'>('equipment')
  return (
    <div className="app">
      <nav className="site-nav">
        <button className={`nav-tab${tab === 'equipment' ? ' active' : ''}`} onClick={() => setTab('equipment')}>⚡ Equipment</button>
        <button className={`nav-tab${tab === 'lighting' ? ' active' : ''}`} onClick={() => setTab('lighting')}>💡 Lighting Guide</button>
      </nav>
      {tab === 'lighting' ? <LightingGuide /> : <>
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
      </>}
    </div>
  )
}

export default App
