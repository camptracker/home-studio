import { useRef, useEffect, useState, useCallback } from 'react'
import './LightingGuide.css'

/* ── Color Swatches ── */
const bgColors = [
  { name: 'Deep Navy', hex: '#1a1f3a', why: "Professional, doesn't compete with subject, hides imperfections", mood: 'Authoritative, trustworthy', bestFor: 'Tech, business, tutorials' },
  { name: 'Teal/Dark Cyan', hex: '#0d4f4f', why: 'Modern, fresh, eye-catching without being distracting', mood: 'Creative, innovative', bestFor: 'Design, lifestyle, music' },
  { name: 'Warm Charcoal', hex: '#2d2926', why: 'Cinematic, makes skin tones pop, ultra-professional', mood: 'Premium, moody', bestFor: 'Interviews, podcasts, music' },
  { name: 'Slate Blue', hex: '#4a5568', why: 'Clean, neutral, flattering for all skin tones', mood: 'Calm, professional', bestFor: 'Corporate, education' },
  { name: 'Deep Purple', hex: '#2d1b4e', why: 'Dramatic, luxurious, creates depth', mood: 'Creative, bold', bestFor: 'Music, art, fashion' },
  { name: 'Forest Green', hex: '#1a3a2a', why: 'Natural, calming, unique without being distracting', mood: 'Organic, fresh', bestFor: 'Health, lifestyle, nature' },
  { name: 'Burnt Orange on Dark', hex: '#c45a20', bg2: '#1a1a1a', why: 'Warm, energetic accent lighting on dark background', mood: 'Energetic, warm', bestFor: 'Entertainment, vlogs' },
  { name: 'Soft Pink/Magenta', hex: '#4a1942', why: 'Trendy, youthful, great for beauty/lifestyle', mood: 'Feminine, modern', bestFor: 'Beauty, fashion, lifestyle' },
  { name: 'Warm White/Cream', hex: '#f5f0e6', dark: true, why: 'Clean, bright, approachable', mood: 'Friendly, open', bestFor: 'Cooking, DIY, family' },
  { name: 'Pure Black', hex: '#0a0a0a', why: 'Maximum subject focus, cinematic', mood: 'Dramatic, focused', bestFor: 'Music performances, dramatic content' },
]

const avoidColors = [
  { name: 'Bright White', hex: '#ffffff', reason: 'Harsh, unflattering, blows out on camera' },
  { name: 'Neon Green', hex: '#39ff14', reason: 'Looks like a bad green screen' },
  { name: 'Bright Red', hex: '#ff0000', reason: 'Aggressive, causes color bleed on skin' },
  { name: 'Yellow', hex: '#ffff00', reason: 'Sickly appearance, unflattering' },
]

const products = [
  { name: 'Govee RGBIC LED Strip Lights (32.8ft)', price: '~$15', why: 'Budget king. App-controlled, music sync, tons of colors' },
  { name: 'Philips Hue Play Light Bar (2-pack)', price: '~$130', why: 'Premium, HomeKit/Alexa, amazing color accuracy' },
  { name: 'Elgato Key Light Air', price: '~$130', why: 'App-controlled panel light, perfect key/fill' },
  { name: 'Nanoleaf Shapes (9-pack)', price: '~$200', why: 'Hexagonal LED panels, touch reactive, gorgeous' },
  { name: 'Nanlite PavoTube II 6C', price: '~$80', why: 'RGB tube light, battery powered, magnetic mount' },
  { name: 'NEEWER RGB LED Light Stick (2-pack)', price: '~$45', why: 'Budget RGB tubes, remote control, USB-C powered' },
  { name: 'Govee Glide Wall Light', price: '~$70', why: 'Segmented RGBIC bar, great accent wall piece' },
  { name: 'Aputure MC RGB LED', price: '~$90', why: 'Pocket-sized, magnetic, app-controlled, pro quality' },
]

/* ── Animation Demo Components ── */

function useAnimationFrame(callback: (dt: number) => void, running: boolean) {
  const ref = useRef<number>(0)
  const prev = useRef<number>(0)
  useEffect(() => {
    if (!running) return
    prev.current = performance.now()
    const loop = (t: number) => {
      callback(t - prev.current)
      prev.current = t
      ref.current = requestAnimationFrame(loop)
    }
    ref.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(ref.current)
  }, [running, callback])
}

function AnimationControls({ playing, setPlaying, speed, setSpeed }: { playing: boolean; setPlaying: (v: boolean) => void; speed: number; setSpeed: (v: number) => void }) {
  return (
    <div className="anim-controls">
      <button className="anim-btn" onClick={() => setPlaying(!playing)}>{playing ? '⏸' : '▶️'}</button>
      <label className="speed-label">Speed
        <input type="range" min={0.2} max={3} step={0.1} value={speed} onChange={e => setSpeed(+e.target.value)} />
        <span>{speed.toFixed(1)}×</span>
      </label>
    </div>
  )
}

function GradientShift() {
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [hue, setHue] = useState(0)
  useAnimationFrame(useCallback((dt) => { setHue(h => (h + dt * 0.01 * speed) % 360) }, [speed]), playing)
  const c1 = `hsl(${hue}, 60%, 20%)`
  const c2 = `hsl(${(hue + 120) % 360}, 60%, 25%)`
  const c3 = `hsl(${(hue + 240) % 360}, 60%, 20%)`
  return (
    <div className="anim-demo">
      <h4>1. Slow Color Gradient Shift</h4>
      <p className="anim-desc">Smoothly transitions between colors over time. Popular for music videos and chill content.</p>
      <div className="anim-canvas" style={{ background: `linear-gradient(135deg, ${c1}, ${c2}, ${c3})` }}>
        <span className="anim-label">Your subject here</span>
      </div>
      <AnimationControls playing={playing} setPlaying={setPlaying} speed={speed} setSpeed={setSpeed} />
    </div>
  )
}

function BreathingGlow() {
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [t, setT] = useState(0)
  useAnimationFrame(useCallback((dt) => { setT(v => v + dt * 0.001 * speed) }, [speed]), playing)
  const opacity = 0.3 + 0.25 * Math.sin(t * 1.2)
  const scale = 1 + 0.15 * Math.sin(t * 1.2)
  return (
    <div className="anim-demo">
      <h4>2. Breathing/Pulsing Glow</h4>
      <p className="anim-desc">Subtle brightness pulse mimicking breathing rhythm. Creates an organic, living feel.</p>
      <div className="anim-canvas" style={{ background: '#1a1a2e', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.8), transparent 70%)', opacity, transform: `scale(${scale})`, transition: 'none' }} />
        </div>
        <span className="anim-label" style={{ position: 'relative', zIndex: 1 }}>Your subject here</span>
      </div>
      <AnimationControls playing={playing} setPlaying={setPlaying} speed={speed} setSpeed={setSpeed} />
    </div>
  )
}

function ParticleFloat() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const particles = useRef<{ x: number; y: number; r: number; vx: number; vy: number; a: number }[]>([])

  useEffect(() => {
    particles.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * 800, y: Math.random() * 300, r: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.3, vy: -(Math.random() * 0.5 + 0.2), a: Math.random() * 0.6 + 0.2
    }))
  }, [])

  useAnimationFrame(useCallback((dt) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const w = canvas.width, h = canvas.height
    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = '#0f1923'
    ctx.fillRect(0, 0, w, h)
    for (const p of particles.current) {
      p.x += p.vx * speed * dt * 0.06
      p.y += p.vy * speed * dt * 0.06
      p.vx += (Math.random() - 0.5) * 0.02
      if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w }
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(200,220,255,${p.a})`
      ctx.fill()
    }
  }, [speed]), playing)

  return (
    <div className="anim-demo">
      <h4>3. Particle Float</h4>
      <p className="anim-desc">Tiny glowing particles drift upward like dust motes in light. Cinematic and dreamy.</p>
      <canvas ref={canvasRef} width={800} height={300} className="anim-canvas-el" />
      <AnimationControls playing={playing} setPlaying={setPlaying} speed={speed} setSpeed={setSpeed} />
    </div>
  )
}

function AuroraBorealis() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const tRef = useRef(0)

  useAnimationFrame(useCallback((dt) => {
    const canvas = canvasRef.current
    if (!canvas) return
    tRef.current += dt * 0.0005 * speed
    const t = tRef.current
    const ctx = canvas.getContext('2d')!
    const w = canvas.width, h = canvas.height
    ctx.fillStyle = '#0a0a1a'
    ctx.fillRect(0, 0, w, h)
    const colors = ['rgba(0,255,150,0.12)', 'rgba(0,150,255,0.10)', 'rgba(150,0,255,0.08)']
    for (let band = 0; band < 3; band++) {
      ctx.beginPath()
      ctx.moveTo(0, h)
      for (let x = 0; x <= w; x += 4) {
        const y = h * 0.3 + Math.sin(x * 0.005 + t * 2 + band * 2) * 40 + Math.sin(x * 0.01 + t * 1.5 + band) * 25 + band * 30
        ctx.lineTo(x, y)
      }
      ctx.lineTo(w, h)
      ctx.closePath()
      ctx.fillStyle = colors[band]
      ctx.fill()
    }
  }, [speed]), playing)

  return (
    <div className="anim-demo">
      <h4>4. Aurora / Northern Lights</h4>
      <p className="anim-desc">Flowing, organic color bands that slowly shift and wave. Stunning for music content.</p>
      <canvas ref={canvasRef} width={800} height={300} className="anim-canvas-el" />
      <AnimationControls playing={playing} setPlaying={setPlaying} speed={speed} setSpeed={setSpeed} />
    </div>
  )
}

function BokehCircles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const circles = useRef<{ x: number; y: number; r: number; vx: number; vy: number; hue: number; a: number }[]>([])

  useEffect(() => {
    circles.current = Array.from({ length: 20 }, () => ({
      x: Math.random() * 800, y: Math.random() * 300, r: Math.random() * 40 + 20,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.15,
      hue: Math.random() * 60 + 200, a: Math.random() * 0.15 + 0.05
    }))
  }, [])

  useAnimationFrame(useCallback((dt) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const w = canvas.width, h = canvas.height
    ctx.fillStyle = '#0f0f1a'
    ctx.fillRect(0, 0, w, h)
    for (const c of circles.current) {
      c.x += c.vx * speed * dt * 0.06
      c.y += c.vy * speed * dt * 0.06
      if (c.x < -50) c.x = w + 50; if (c.x > w + 50) c.x = -50
      if (c.y < -50) c.y = h + 50; if (c.y > h + 50) c.y = -50
      ctx.beginPath()
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${c.hue}, 70%, 60%, ${c.a})`
      ctx.fill()
    }
  }, [speed]), playing)

  return (
    <div className="anim-demo">
      <h4>5. Bokeh Circles</h4>
      <p className="anim-desc">Large, soft, out-of-focus circles slowly drifting. Mimics real camera bokeh.</p>
      <canvas ref={canvasRef} width={800} height={300} className="anim-canvas-el" />
      <AnimationControls playing={playing} setPlaying={setPlaying} speed={speed} setSpeed={setSpeed} />
    </div>
  )
}

function GridPulse() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const tRef = useRef(0)

  useAnimationFrame(useCallback((dt) => {
    const canvas = canvasRef.current
    if (!canvas) return
    tRef.current += dt * 0.001 * speed
    const t = tRef.current
    const ctx = canvas.getContext('2d')!
    const w = canvas.width, h = canvas.height
    ctx.fillStyle = '#0a0a14'
    ctx.fillRect(0, 0, w, h)
    const cx = w / 2, cy = h / 2
    const spacing = 30
    for (let x = 0; x < w; x += spacing) {
      for (let y = 0; y < h; y += spacing) {
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        const wave = Math.sin(dist * 0.02 - t * 3) * 0.5 + 0.5
        const a = wave * 0.4
        ctx.fillStyle = `rgba(0, 200, 255, ${a})`
        ctx.fillRect(x, y, 1, 1)
      }
    }
    // Draw grid lines
    ctx.lineWidth = 0.5
    for (let x = 0; x < w; x += spacing) {
      const dist = Math.abs(x - cx)
      const wave = Math.sin(dist * 0.02 - t * 3) * 0.5 + 0.5
      ctx.strokeStyle = `rgba(0, 200, 255, ${wave * 0.2})`
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
    }
    for (let y = 0; y < h; y += spacing) {
      const dist = Math.abs(y - cy)
      const wave = Math.sin(dist * 0.02 - t * 3) * 0.5 + 0.5
      ctx.strokeStyle = `rgba(0, 200, 255, ${wave * 0.2})`
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
    }
  }, [speed]), playing)

  return (
    <div className="anim-demo">
      <h4>6. Geometric Grid Pulse</h4>
      <p className="anim-desc">Subtle grid lines pulse in brightness from center outward. Techy/cyberpunk vibe.</p>
      <canvas ref={canvasRef} width={800} height={300} className="anim-canvas-el" />
      <AnimationControls playing={playing} setPlaying={setPlaying} speed={speed} setSpeed={setSpeed} />
    </div>
  )
}

function SmokeFog() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const tRef = useRef(0)

  // Simple noise function
  const noise = useCallback((x: number, y: number, t: number) => {
    return (Math.sin(x * 0.02 + t) * Math.cos(y * 0.03 + t * 0.7) + Math.sin(x * 0.01 - t * 0.5) * Math.cos(y * 0.02 + t * 0.3) + Math.sin((x + y) * 0.015 + t * 0.8)) / 3
  }, [])

  useAnimationFrame(useCallback((dt) => {
    const canvas = canvasRef.current
    if (!canvas) return
    tRef.current += dt * 0.0008 * speed
    const t = tRef.current
    const ctx = canvas.getContext('2d')!
    const w = canvas.width, h = canvas.height
    const imgData = ctx.createImageData(w, h)
    const step = 4
    for (let y = 0; y < h; y += step) {
      for (let x = 0; x < w; x += step) {
        const n = noise(x, y, t) * 0.5 + 0.5
        const v = Math.floor(n * 40)
        for (let dy = 0; dy < step && y + dy < h; dy++) {
          for (let dx = 0; dx < step && x + dx < w; dx++) {
            const i = ((y + dy) * w + (x + dx)) * 4
            imgData.data[i] = v + 10
            imgData.data[i + 1] = v + 12
            imgData.data[i + 2] = v + 20
            imgData.data[i + 3] = 255
          }
        }
      }
    }
    ctx.putImageData(imgData, 0, 0)
  }, [speed, noise]), playing)

  return (
    <div className="anim-demo">
      <h4>7. Smoke/Fog Drift</h4>
      <p className="anim-desc">Soft, wispy smoke effect slowly moving across background. Moody and atmospheric.</p>
      <canvas ref={canvasRef} width={200} height={75} className="anim-canvas-el" style={{ imageRendering: 'auto' }} />
      <AnimationControls playing={playing} setPlaying={setPlaying} speed={speed} setSpeed={setSpeed} />
    </div>
  )
}

function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const accRef = useRef(0)

  useAnimationFrame(useCallback((dt) => {
    const canvas = canvasRef.current
    if (!canvas) return
    accRef.current += dt * speed
    if (accRef.current < 50) return
    accRef.current = 0
    const ctx = canvas.getContext('2d')!
    const w = canvas.width, h = canvas.height
    const imgData = ctx.createImageData(w, h)
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = Math.random() * 35 + 10
      imgData.data[i] = v
      imgData.data[i + 1] = v
      imgData.data[i + 2] = v + 5
      imgData.data[i + 3] = 255
    }
    ctx.putImageData(imgData, 0, 0)
  }, [speed]), playing)

  return (
    <div className="anim-demo">
      <h4>8. Static Noise / Film Grain</h4>
      <p className="anim-desc">Film grain texture overlay. Adds analog/vintage feel.</p>
      <canvas ref={canvasRef} width={400} height={150} className="anim-canvas-el" />
      <AnimationControls playing={playing} setPlaying={setPlaying} speed={speed} setSpeed={setSpeed} />
    </div>
  )
}

/* ── Main Component ── */
export default function LightingGuide() {
  return (
    <div className="lighting-guide">
      <header className="lg-hero">
        <h1>💡 Video Background Lighting Guide</h1>
        <p className="lg-subtitle">Colors, techniques, animations & gear for the perfect video background</p>
      </header>

      {/* 1. Three-Point Lighting */}
      <section className="lg-section">
        <h2>🎬 Three-Point Lighting Setup</h2>
        <p className="section-intro">The foundation of all video lighting:</p>
        <div className="three-point-grid">
          <div className="light-card key-light">
            <div className="light-icon">☀️</div>
            <h3>Key Light</h3>
            <p>Main light source, placed <strong>45° to one side</strong> and slightly above eye level. Provides primary illumination. Use soft, diffused light for flattering results.</p>
            <span className="light-position">Position: 45° side, above eye level</span>
          </div>
          <div className="light-card fill-light">
            <div className="light-icon">🌤️</div>
            <h3>Fill Light</h3>
            <p>Opposite side from key light, at <strong>50–70% intensity</strong> of key. Fills in shadows. Can be a reflector or dimmer light.</p>
            <span className="light-position">Position: Opposite side, lower intensity</span>
          </div>
          <div className="light-card back-light">
            <div className="light-icon">✨</div>
            <h3>Back / Hair Light</h3>
            <p>Behind and above the subject. <strong>Separates subject from background</strong>, adds depth and dimension. Creates a subtle rim/edge glow.</p>
            <span className="light-position">Position: Behind &amp; above subject</span>
          </div>
        </div>
      </section>

      {/* 2. Background Colors */}
      <section className="lg-section">
        <h2>🎨 Optimal Background Colors</h2>
        <p className="section-intro">Best colors for video backgrounds — each card is a live preview:</p>
        <div className="color-grid">
          {bgColors.map(c => (
            <div key={c.name} className="color-card" style={{ background: c.bg2 ? `linear-gradient(135deg, ${c.bg2} 60%, ${c.hex})` : c.hex }}>
              <div className={`color-card-content${c.dark ? ' dark-text' : ''}`}>
                <h4>{c.name}</h4>
                <code>{c.hex}</code>
                <p>{c.why}</p>
                <div className="color-meta">
                  <span>🎭 {c.mood}</span>
                  <span>🎯 {c.bestFor}</span>
                </div>
                <div className="sample-subject">Your subject here</div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="avoid-title">🚫 Colors to AVOID</h3>
        <div className="avoid-grid">
          {avoidColors.map(c => (
            <div key={c.name} className="avoid-card">
              <div className="avoid-swatch" style={{ background: c.hex }} />
              <div>
                <strong>{c.name}</strong> <code>{c.hex}</code>
                <p>{c.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Techniques */}
      <section className="lg-section">
        <h2>🔦 Background Lighting Techniques</h2>

        <div className="technique-columns">
          <div className="technique-card">
            <h3>💡 Practical Lighting</h3>
            <p className="tech-subtitle">Visible light sources in frame</p>
            <ul>
              <li>LED strip lights behind desk/shelves — adds depth and color</li>
              <li>Edison bulb string lights — warm, cozy aesthetic</li>
              <li>Neon signs — personality and branding</li>
              <li>Nanoleaf panels — geometric, customizable, animated</li>
            </ul>
          </div>
          <div className="technique-card">
            <h3>🌈 Accent/Wash Lighting</h3>
            <p className="tech-subtitle">Off-camera lighting effects</p>
            <ul>
              <li>RGB LED bars pointed at back wall — color wash effect</li>
              <li>Uplighting from floor — dramatic shadows on wall</li>
              <li>Gobo projector — patterns/textures on background</li>
              <li>LED tube lights (Nanlite PavoTube) — trendy, colorful</li>
            </ul>
          </div>
        </div>

        <h3 className="temp-title">🌡️ Color Temperature Guide</h3>
        <div className="temp-bar">
          {[
            { k: '2700K', label: 'Warm/Amber', desc: 'Cozy, intimate, relaxed', color: '#ff9329' },
            { k: '3200K', label: 'Warm White', desc: 'Most flattering for skin', color: '#ffc58f' },
            { k: '4000K', label: 'Neutral', desc: 'Clean, natural daylight', color: '#fff4e0' },
            { k: '5600K', label: 'Daylight', desc: 'Bright, energetic, professional', color: '#f0f4ff' },
          ].map(t => (
            <div key={t.k} className="temp-stop" style={{ borderLeftColor: t.color }}>
              <strong>{t.k}</strong> — {t.label}
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="temp-rule">💡 <strong>Rule:</strong> Key light should be ~4000–5600K (neutral/daylight), background lights can be any creative color.</p>
      </section>

      {/* 4. Animation Demos */}
      <section className="lg-section">
        <h2>✨ Background Animations — Live Demos</h2>
        <p className="section-intro">Interactive demos of popular video background animations. Hit play/pause and adjust speed!</p>
        <GradientShift />
        <BreathingGlow />
        <ParticleFloat />
        <AuroraBorealis />
        <BokehCircles />
        <GridPulse />
        <SmokeFog />
        <FilmGrain />
      </section>

      {/* 5. Products */}
      <section className="lg-section">
        <h2>🛒 Recommended Products</h2>
        <div className="product-list">
          {products.map(p => (
            <div key={p.name} className="lg-product-card">
              <div className="lg-product-info">
                <h4>{p.name}</h4>
                <span className="lg-price">{p.price}</span>
              </div>
              <p>{p.why}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
