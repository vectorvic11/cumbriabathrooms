import { useState } from 'react'
import {
  ArrowRight,
  Bath,
  BadgeCheck,
  Building2,
  ChevronDown,
  Clock3,
  Coffee,
  Flame,
  Home,
  MapPin,
  MessageSquareQuote,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from 'lucide-react'

const filters = [
  'All',
  'Luxury Bathrooms',
  'Designer Radiators & Heating',
  'Showers & Enclosures',
  'Trade Plumbing Supplies',
]

const collectionItems = [
  {
    title: 'Freestanding Stone Resin Baths',
    category: 'Luxury Bathrooms',
    price: 'From £695',
    accent: 'stone',
    detail: 'Low-maintenance, sculpted silhouettes for flagship family bathrooms.',
  },
  {
    title: 'Matt Black & Brushed Brass Shower Suites',
    category: 'Showers & Enclosures',
    price: 'From £420',
    accent: 'chrome',
    detail: 'Statement thermostatic controls and seamless glass doors built for daily use.',
  },
  {
    title: 'Fluted Wall-Hung Vanity Units',
    category: 'Luxury Bathrooms',
    price: 'From £540',
    accent: 'ivy',
    detail: 'Soft texture finishes and practical hidden storage for modern spaces.',
  },
  {
    title: 'High-Efficiency Combi Boilers & Heat Pumps',
    category: 'Designer Radiators & Heating',
    price: 'From £1,850',
    accent: 'heat',
    detail: 'Energy-saving central heating solutions tailored to Cumbrian homes.',
  },
  {
    title: 'Designer Column Radiators & Heated Towel Rails',
    category: 'Designer Radiators & Heating',
    price: 'From £290',
    accent: 'radiator',
    detail: 'Premium heat output with striking finishes for contemporary interiors.',
  },
  {
    title: 'Trade Copper Piping, Valves & Fittings',
    category: 'Trade Plumbing Supplies',
    price: 'Trade pricing',
    accent: 'trade',
    detail: 'Reliable stock for installers, maintenance teams and refurbishment jobs.',
  },
]

const galleryBadges = [
  '40+ Live Showroom Displays',
  'Trade Counter From 7:30 AM',
  'Free Local Cumbria Delivery',
  '5.0 ★ Google Rating (180+ Reviews)',
]

const testimonials = [
  {
    name: 'Emma & Daniel H.',
    role: 'Carlisle homeowners',
    quote:
      'The design team transformed our tired bathroom into something genuinely premium. Their 3D planning made the final fit-out feel effortless and the finish quality was outstanding.',
  },
  {
    name: 'Hannah W.',
    role: 'Boutique hotel owner, Keswick',
    quote:
      'We needed a smart, durable upgrade across guest suites. The showroom team recommended practical solutions that still looked luxurious, and delivery was smooth across the county.',
  },
  {
    name: 'Mark T.',
    role: 'Local heating engineer, Penrith',
    quote:
      'Reliable trade pricing, excellent stock levels and no-fuss discussions with the team. It is the first place I send customers for heating upgrades and plumbing supplies.',
  },
]

const faqs = [
  {
    q: 'Do I need an appointment to visit your Carlisle showroom?',
    a: 'Not always, but booking ahead is recommended for a tailored design consultation or if you want a dedicated showroom walkthrough. We always make space for trade and homeowner appointments.',
  },
  {
    q: 'Do you supply only, or can you recommend trusted local installers?',
    a: 'We do both. Many customers use us for supply-only packages, while our team can recommend vetted local installers for plumbing, tiling, heating and bathroom fitting across Cumbria.',
  },
  {
    q: 'How does the Trade Account pricing work for plumbers?',
    a: 'Trade customers benefit from dedicated pricing, credit account options and flexible ordering support. We tailor terms for regular installers and maintenance businesses working across Carlisle and the Lake District.',
  },
  {
    q: 'Do you deliver throughout Cumbria and the Lake District?',
    a: 'Yes. We offer local delivery across Carlisle, Penrith, Keswick, Bowness, Workington and beyond, with same-day site delivery available for trade customers where possible.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cumbria Bathrooms & Heating Supplies Ltd.',
  image:
    'https://example.com/cumbria-bathrooms-heating-showroom.jpg',
  description:
    'Baths, heating, plumbing and bathroom showroom in Carlisle, Cumbria, serving homeowners and trade customers across the Lake District.',
  telephone: '+44 1228 596810',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'East Norfolk Street',
    addressLocality: 'Carlisle',
    addressRegion: 'Cumbria',
    postalCode: 'CA2 5JL',
    addressCountry: 'UK',
  },
  openingHours: 'Mo-Fr 07:30-17:00, Sa 08:00-16:00',
  areaServed: ['Carlisle', 'Cumbria', 'Lake District', 'Penrith', 'Keswick'],
  priceRange: '£££',
  sameAs: [],
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [tradeMode, setTradeMode] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [submitMessage, setSubmitMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    postcode: '',
    phone: '',
    inquiryType: 'Homeowner Bathroom Project',
    message: '',
  })

  const visibleCollections =
    activeFilter === 'All'
      ? collectionItems
      : collectionItems.filter((item) => item.category === activeFilter)

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitMessage(
      'Request Received! Our Carlisle showroom team will confirm your consultation slot within 2 hours.',
    )
    setFormData({
      name: '',
      postcode: '',
      phone: '',
      inquiryType: tradeMode ? 'Trade Account' : 'Homeowner Bathroom Project',
      message: '',
    })
  }

  const toggleTradeMode = () => {
    const nextTradeMode = !tradeMode
    setTradeMode(nextTradeMode)
    setFormData((current) => ({
      ...current,
      inquiryType: nextTradeMode ? 'Trade Account' : 'Homeowner Bathroom Project',
    }))
  }

  return (
    <>
      <style>{`
        :root {
          --navy: #0f172a;
          --slate: #1e293b;
          --silver: #dfeaf5;
          --chrome: #38bdf8;
          --chrome-deep: #0284c7;
          --porcelain: #f8fafc;
          --muted: #64748b;
          --line: rgba(148, 163, 184, 0.28);
          --shadow: 0 24px 80px rgba(15, 23, 42, 0.16);
        }

        * { box-sizing: border-box; }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--navy);
          background: linear-gradient(180deg, #eef6ff 0%, #f8fafc 10%, #ffffff 100%);
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button, input, textarea, select {
          font: inherit;
        }

        .app-shell {
          min-height: 100vh;
          overflow-x: hidden;
        }

        .container {
          width: min(1200px, calc(100% - 24px));
          margin: 0 auto;
        }

        .announcement-bar {
          background: linear-gradient(90deg, var(--navy) 0%, #111d39 20%, #193a65 100%);
          color: #eff6ff;
          font-size: 0.72rem;
          letter-spacing: 0.04em;
          text-align: center;
          padding: 0.7rem 0.75rem;
          font-weight: 600;
        }

        .announcement-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .header {
          background: rgba(248, 250, 252, 0.92);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 20;
          border-bottom: 1px solid var(--line);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 80px;
          gap: 1rem;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          min-width: 0;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #0f172a 0%, #0f2748 55%, #38bdf8 150%);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
        }

        .brand-mark svg {
          color: #e0f2fe;
        }

        .brand-name {
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          font-weight: 800;
          line-height: 1.2;
          text-transform: uppercase;
          color: var(--navy);
        }

        .nav-links {
          display: none;
          align-items: center;
          gap: 1.5rem;
          color: var(--muted);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .nav-link {
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--navy);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          border: none;
          border-radius: 999px;
          padding: 0.8rem 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .button:hover {
          transform: translateY(-1px);
        }

        .button-primary {
          background: linear-gradient(135deg, var(--chrome-deep), var(--chrome));
          color: #f8fbff;
          box-shadow: 0 18px 32px rgba(2, 132, 199, 0.25);
        }

        .button-secondary {
          background: #ffffff;
          color: var(--navy);
          border: 1px solid rgba(15, 23, 42, 0.1);
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.04);
        }

        .button-ghost {
          background: rgba(56, 189, 248, 0.08);
          color: var(--navy);
          border: 1px solid rgba(56, 189, 248, 0.18);
        }

        .hero {
          padding: 2.1rem 0 1.4rem;
        }

        .hero-grid {
          display: grid;
          gap: 1.2rem;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(56, 189, 248, 0.08);
          color: var(--chrome-deep);
          border: 1px solid rgba(56, 189, 248, 0.16);
          border-radius: 999px;
          padding: 0.5rem 0.8rem;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 5rem);
          line-height: 0.96;
          letter-spacing: -0.06em;
          max-width: 640px;
        }

        .hero-subheading {
          margin-top: 1rem;
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.7;
          color: var(--muted);
          max-width: 620px;
        }

        .cta-row {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.7rem;
          margin-top: 1.6rem;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.8rem 0.9rem;
          border-radius: 16px;
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--line);
          color: var(--navy);
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.04);
        }

        .trust-item svg {
          color: var(--chrome-deep);
          flex-shrink: 0;
        }

        .hero-visual {
          position: relative;
        }

        .visual-card {
          position: relative;
          background: linear-gradient(140deg, #0f172a 0%, #162641 35%, #1e3a5f 100%);
          border-radius: 28px;
          padding: 1rem;
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .visual-card::before {
          content: '';
          position: absolute;
          inset: auto -20% -30% auto;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(56,189,248,0.35), rgba(56,189,248,0));
          border-radius: 50%;
        }

        .visual-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.1rem;
          color: #e2e8f0;
        }

        .showroom-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.72rem;
          padding: 0.45rem 0.7rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          font-weight: 700;
        }

        .mini-score {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.6rem;
          border-radius: 999px;
          background: rgba(35, 190, 120, 0.15);
          color: #b7f7d4;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .bathroom-scene {
          background: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          padding: 1rem;
        }

        .scene-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 1rem;
        }

        .scene-illustration {
          position: relative;
          min-height: 220px;
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(56,189,248,0.14), rgba(148,163,184,0.08));
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
        }

        .scene-illustration .wall {
          position: absolute;
          inset: 0 0 24% 0;
          background: linear-gradient(180deg, rgba(248,250,252,0.92), rgba(226,232,240,0.75));
        }

        .scene-illustration .floor {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 24%;
          background: linear-gradient(180deg, rgba(148,163,184,0.14), rgba(15,23,42,0.2));
        }

        .scene-illustration .bath {
          position: absolute;
          left: 18%;
          right: 18%;
          bottom: 15%;
          height: 46%;
          border-radius: 18px 18px 22px 22px;
          background: linear-gradient(180deg, #f8fafc 0%, #dbeafe 100%);
          box-shadow: inset 0 0 0 4px rgba(15,23,42,0.05);
        }

        .scene-illustration .bath::before {
          content: '';
          position: absolute;
          inset: 8% 10% auto 10%;
          height: 18%;
          border-radius: 14px;
          background: rgba(56,189,248,0.18);
        }

        .scene-illustration .vanity {
          position: absolute;
          left: 61%;
          bottom: 22%;
          width: 22%;
          height: 34%;
          border-radius: 12px;
          background: linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%);
        }

        .scene-illustration .window {
          position: absolute;
          left: 14%;
          top: 18%;
          width: 26%;
          height: 24%;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(186,230,253,0.9), rgba(255,255,255,0.5));
          border: 3px solid rgba(255,255,255,0.7);
        }

        .visual-stats {
          display: grid;
          gap: 0.75rem;
        }

        .stat-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 0.8rem 0.9rem;
          color: #e2e8f0;
        }

        .stat-card strong {
          display: block;
          font-size: 1.1rem;
          color: #f8fafc;
        }

        .stat-card small {
          color: #cbd5e1;
        }

        .section {
          padding: 2.4rem 0;
        }

        .section-heading {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .section-kicker {
          color: var(--chrome-deep);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          font-weight: 800;
          text-transform: uppercase;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(1.9rem, 4vw, 3rem);
          line-height: 1.08;
          letter-spacing: -0.05em;
        }

        .section-heading p {
          margin: 0;
          color: var(--muted);
          max-width: 700px;
          line-height: 1.7;
          font-size: 1rem;
        }

        .filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin: 1rem 0 1.8rem;
        }

        .filter-tab {
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.7);
          color: var(--muted);
          border-radius: 999px;
          padding: 0.7rem 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-tab.active {
          background: linear-gradient(135deg, var(--navy), #133b66 100%);
          border-color: transparent;
          color: #f8fafc;
          box-shadow: 0 16px 28px rgba(15, 23, 42, 0.16);
        }

        .product-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .product-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.95));
          border: 1px solid var(--line);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 16px 30px rgba(15, 23, 42, 0.05);
        }

        .product-visual {
          height: 180px;
          position: relative;
          padding: 1rem;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          overflow: hidden;
        }

        .product-visual.stone {
          background: linear-gradient(135deg, rgba(148,163,184,0.18), rgba(15,23,42,0.18));
        }

        .product-visual.chrome {
          background: linear-gradient(135deg, rgba(125,211,252,0.15), rgba(15,23,42,0.2));
        }

        .product-visual.ivy {
          background: linear-gradient(135deg, rgba(110,231,183,0.15), rgba(15,23,42,0.18));
        }

        .product-visual.heat {
          background: linear-gradient(135deg, rgba(251,191,36,0.18), rgba(15,23,42,0.2));
        }

        .product-visual.radiator {
          background: linear-gradient(135deg, rgba(96,165,250,0.12), rgba(15,23,42,0.2));
        }

        .product-visual.trade {
          background: linear-gradient(135deg, rgba(248,250,252,0.5), rgba(15,23,42,0.18));
        }

        .product-shape {
          position: relative;
          width: 70%;
          height: 78%;
          border-radius: 22px;
          background: rgba(255,255,255,0.75);
          box-shadow: inset 0 0 0 1px rgba(15,23,42,0.08);
        }

        .product-shape::before,
        .product-shape::after {
          content: '';
          position: absolute;
        }

        .stone .product-shape {
          border-radius: 24px 24px 20px 20px;
          background: linear-gradient(180deg, #f4f4f5 0%, #d4d4d8 100%);
        }

        .chrome .product-shape {
          border-radius: 18px;
          background: linear-gradient(180deg, #f8fafc 0%, #dbeafe 100%);
        }

        .chrome .product-shape::before {
          inset: 16% 18% auto 18%;
          height: 10%;
          border-radius: 999px;
          background: rgba(15,23,42,0.08);
        }

        .chrome .product-shape::after {
          inset: 30% 26% 16% 26%;
          border-radius: 12px;
          background: rgba(56,189,248,0.18);
        }

        .ivy .product-shape {
          border-radius: 12px 12px 18px 18px;
          background: linear-gradient(180deg, #f8fafc 0%, #d1fae5 100%);
        }

        .ivy .product-shape::before {
          inset: 10% 16% 12% 16%;
          border-radius: 12px;
          background: rgba(15,23,42,0.08);
        }

        .heat .product-shape {
          border-radius: 18px;
          background: linear-gradient(180deg, #fef3c7 0%, #fbbf24 100%);
        }

        .heat .product-shape::before {
          left: 18%;
          right: 18%;
          top: 20%;
          bottom: 20%;
          border-radius: 12px;
          background: rgba(255,255,255,0.35);
        }

        .radiator .product-shape {
          border-radius: 16px;
          background: linear-gradient(180deg, #e0f2fe 0%, #7dd3fc 100%);
        }

        .radiator .product-shape::before {
          inset: 12% 18% 12% 18%;
          border-radius: 10px;
          background: rgba(255,255,255,0.4);
          box-shadow: 0 0 0 8px rgba(15,23,42,0.08);
        }

        .trade .product-shape {
          border-radius: 16px;
          background: linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%);
        }

        .trade .product-shape::before {
          inset: 18% 14% 18% 14%;
          border-radius: 16px;
          background: rgba(15,23,42,0.06);
        }

        .trade .product-shape::after {
          inset: 36% 22% 36% 22%;
          border-radius: 12px;
          background: rgba(2,132,199,0.18);
        }

        .product-body {
          padding: 1rem 1rem 1.1rem;
        }

        .product-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .product-badge {
          background: rgba(56,189,248,0.09);
          color: var(--chrome-deep);
          font-size: 0.68rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.45rem 0.6rem;
          border-radius: 999px;
          font-weight: 800;
        }

        .product-price {
          font-weight: 800;
          color: var(--navy);
          font-size: 0.86rem;
        }

        .product-card h3 {
          margin: 0.2rem 0 0.5rem;
          font-size: 1.12rem;
          letter-spacing: -0.04em;
        }

        .product-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.96rem;
        }

        .feature-grid {
          display: grid;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .feature-panel {
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(240,249,255,0.9));
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 1.2rem;
          box-shadow: 0 18px 30px rgba(15, 23, 42, 0.04);
        }

        .feature-head {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.9rem;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, rgba(2,132,199,0.14), rgba(56,189,248,0.06));
          color: var(--chrome-deep);
        }

        .feature-panel h3 {
          margin: 0;
          font-size: 1.15rem;
          letter-spacing: -0.04em;
        }

        .feature-panel p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .trade-grid {
          display: grid;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .trade-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.9));
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 1.2rem;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.04);
        }

        .trade-card .icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          color: var(--navy);
          background: linear-gradient(135deg, rgba(56,189,248,0.16), rgba(148,163,184,0.12));
          margin-bottom: 0.8rem;
        }

        .trade-card h3 {
          margin: 0 0 0.5rem;
          font-size: 1.18rem;
          letter-spacing: -0.04em;
        }

        .trade-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
          font-size: 0.96rem;
        }

        .testimonial-grid {
          display: grid;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .testimonial-card {
          background: rgba(255,255,255,0.94);
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 1.2rem;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.04);
        }

        .review-stars {
          display: flex;
          gap: 0.2rem;
          color: #fbbf24;
          margin-bottom: 0.8rem;
        }

        .testimonial-card blockquote {
          margin: 0 0 1rem;
          color: var(--navy);
          line-height: 1.75;
          font-size: 0.97rem;
        }

        .reviewer {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.88rem;
        }

        .review-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--chrome), #dbeafe);
          color: var(--navy);
          font-weight: 800;
        }

        .reviewer strong {
          display: block;
          font-size: 0.9rem;
        }

        .reviewer span {
          color: var(--muted);
        }

        .form-wrap {
          display: grid;
          gap: 1rem;
          margin-top: 1.6rem;
        }

        .form-card {
          background: linear-gradient(180deg, rgba(15,23,42,0.98), rgba(23,37,55,0.96));
          border-radius: 28px;
          padding: 1.1rem;
          color: #eff6ff;
          box-shadow: var(--shadow);
        }

        .toggle-row {
          display: inline-flex;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 0.2rem;
          margin-bottom: 1rem;
          gap: 0.3rem;
        }

        .toggle-button {
          border: none;
          border-radius: 999px;
          background: transparent;
          color: #cbd5e1;
          font-weight: 700;
          padding: 0.7rem 1rem;
          cursor: pointer;
        }

        .toggle-button.active {
          background: linear-gradient(135deg, var(--chrome), var(--chrome-deep));
          color: #f8fafc;
        }

        .lead-form {
          display: grid;
          gap: 0.8rem;
        }

        .field-row {
          display: grid;
          gap: 0.8rem;
        }

        .field {
          display: grid;
          gap: 0.4rem;
        }

        .field label {
          color: #dbeafe;
          font-size: 0.76rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .field input,
        .field select,
        .field textarea {
          width: 100%;
          border: 1px solid rgba(148,163,184,0.28);
          border-radius: 14px;
          background: rgba(15,23,42,0.35);
          padding: 0.85rem 0.9rem;
          color: #f8fafc;
          resize: vertical;
          min-height: 48px;
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color: #a5b4cf;
        }

        .field textarea {
          min-height: 112px;
        }

        .submit-message {
          margin-top: 0.8rem;
          color: #bbf7d0;
          font-weight: 700;
        }

        .faq-list {
          display: grid;
          gap: 0.8rem;
          margin-top: 1.4rem;
        }

        .faq-item {
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.88);
          border-radius: 20px;
          overflow: hidden;
        }

        .faq-toggle {
          width: 100%;
          background: transparent;
          border: none;
          padding: 1rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          text-align: left;
          font-weight: 700;
          color: var(--navy);
          cursor: pointer;
        }

        .faq-toggle svg {
          transition: transform 0.2s ease;
        }

        .faq-item.open .faq-toggle svg {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 1rem 1rem;
          color: var(--muted);
          line-height: 1.7;
        }

        .footer {
          margin-top: 2rem;
          background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
          color: #e2e8f0;
          padding: 2.2rem 0;
        }

        .footer-grid {
          display: grid;
          gap: 1.2rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.7rem;
        }

        .footer .brand-name {
          color: #f8fafc;
        }

        .footer p,
        .footer li,
        .footer a {
          color: #cbd5e1;
          line-height: 1.7;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.5rem;
        }

        .footer-bottom {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(148,163,184,0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
          color: #cbd5e1;
          font-size: 0.9rem;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.52);
          display: grid;
          place-items: center;
          padding: 1rem;
          z-index: 50;
        }

        .modal-panel {
          width: min(680px, 100%);
          background: linear-gradient(180deg, #f8fafc, #eef6ff);
          border-radius: 28px;
          box-shadow: var(--shadow);
          padding: 1.1rem;
          position: relative;
          border: 1px solid rgba(148,163,184,0.2);
        }

        .modal-close {
          position: absolute;
          right: 1rem;
          top: 1rem;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid var(--line);
          border-radius: 50%;
          background: rgba(255,255,255,0.8);
          color: var(--navy);
          cursor: pointer;
        }

        .modal-header {
          padding-right: 2.5rem;
          margin-bottom: 1rem;
        }

        .modal-header h3 {
          margin: 0 0 0.35rem;
          font-size: clamp(1.7rem, 5vw, 2.4rem);
          letter-spacing: -0.05em;
        }

        .modal-header p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        @media (min-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .trade-grid,
          .testimonial-grid,
          .feature-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .field-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 900px) {
          .nav-links {
            display: flex;
          }

          .hero {
            padding-top: 3rem;
          }

          .hero-grid {
            grid-template-columns: 1.08fr 0.92fr;
          }

          .product-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .feature-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .trade-grid,
          .testimonial-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .form-wrap {
            grid-template-columns: 1.1fr 0.9fr;
          }

          .footer-grid {
            grid-template-columns: 1.2fr 0.8fr 0.8fr;
          }
        }
      `}</style>

      <div className="app-shell">
        <div className="announcement-bar">
          <div className="container announcement-inner">
            <span>🛁</span>
            <span>
              Cumbria’s Premier Bathroom Showroom &amp; Heating Merchant | Free 3D Design Appointments | Trade Counter Open from 7:30 AM | Call: 01228 596 810
            </span>
          </div>
        </div>

        <header className="header">
          <div className="container nav">
            <a href="#top" className="brand" aria-label="Cumbria Bathrooms & Heating Supplies home">
              <span className="brand-mark">
                <Home size={20} strokeWidth={2.2} />
              </span>
              <span className="brand-name">Cumbria Bathrooms<br />&amp; Heating</span>
            </a>

            <nav className="nav-links" aria-label="Main navigation">
              <a className="nav-link" href="#showroom">Showroom</a>
              <a className="nav-link" href="#heating">Heating &amp; Boilers</a>
              <a className="nav-link" href="#trade">Trade Counter</a>
              <a className="nav-link" href="#design">3D Design</a>
              <a className="nav-link" href="#reviews">Reviews</a>
              <a className="nav-link" href="#location">Location</a>
            </nav>

            <div className="nav-actions">
              <button className="button button-secondary" type="button" onClick={toggleTradeMode}>
                Trade Login
              </button>
              <button className="button button-primary" type="button" onClick={() => setShowModal(true)}>
                Book 3D Design
              </button>
            </div>
          </div>
        </header>

        <main id="top">
          <section className="hero">
            <div className="container hero-grid">
              <div>
                <div className="eyebrow">
                  <Sparkles size={14} />
                  Independent bathroom &amp; heating specialists
                </div>
                <h1>Transform Your Home with Cumbria’s Largest Independent Bathroom Showroom</h1>
                <p className="hero-subheading">
                  Explore over 40 luxury bathroom displays in our Carlisle showroom. From walk-in showers and freestanding baths to energy-efficient boilers and trade plumbing supplies.
                </p>

                <div className="cta-row">
                  <button className="button button-primary" type="button" onClick={() => setShowModal(true)}>
                    Book Free 3D Design Consultation <ArrowRight size={18} />
                  </button>
                  <a className="button button-secondary" href="#showroom">
                    Browse Showroom Collections
                  </a>
                </div>

                <div className="trust-grid" aria-label="Store trust badges">
                  {galleryBadges.map((badge) => (
                    <div key={badge} className="trust-item">
                      <ShieldCheck size={18} />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-visual" aria-label="Bathroom showroom preview">
                <div className="visual-card">
                  <div className="visual-topbar">
                    <span className="showroom-chip">
                      <Bath size={14} />
                      Carlisle Showroom
                    </span>
                    <span className="mini-score">
                      <Star size={12} fill="currentColor" />
                      5.0 Google
                    </span>
                  </div>

                  <div className="bathroom-scene">
                    <div className="scene-grid">
                      <div className="scene-illustration" aria-hidden="true">
                        <div className="wall" />
                        <div className="window" />
                        <div className="bath" />
                        <div className="vanity" />
                        <div className="floor" />
                      </div>

                      <div className="visual-stats">
                        <div className="stat-card">
                          <div>
                            <strong>40+</strong>
                            <small>live displays</small>
                          </div>
                          <Bath size={20} />
                        </div>
                        <div className="stat-card">
                          <div>
                            <strong>3D</strong>
                            <small>design preview</small>
                          </div>
                          <Sparkles size={20} />
                        </div>
                        <div className="stat-card">
                          <div>
                            <strong>7:30 AM</strong>
                            <small>trade counter</small>
                          </div>
                          <Clock3 size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="showroom" className="section">
            <div className="container">
              <div className="section-heading">
                <span className="section-kicker">Showroom Collections</span>
                <h2>Premium products chosen for practical luxury</h2>
                <p>Whether you are planning a full family bathroom renovation or upgrading a heating system, our collection balances quality, value and long-term performance.</p>
              </div>

              <div className="filter-row" aria-label="Showroom category filter tabs">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="product-grid">
                {visibleCollections.map((item) => (
                  <article key={item.title} className="product-card">
                    <div className={`product-visual ${item.accent}`} aria-hidden="true">
                      <div className="product-shape" />
                    </div>
                    <div className="product-body">
                      <div className="product-meta">
                        <span className="product-badge">{item.category}</span>
                        <span className="product-price">{item.price}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="design" className="section">
            <div className="container">
              <div className="section-heading">
                <span className="section-kicker">3D Design Service</span>
                <h2>Design the perfect bathroom before a single tile is laid</h2>
                <p>Our designers bring your vision to life with precise measurements, photorealistic 3D previews and expert product suggestions for your exact space.</p>
              </div>

              <div className="feature-grid">
                <div className="feature-panel">
                  <div className="feature-head">
                    <div className="feature-icon">
                      <RulerIcon />
                    </div>
                    <h3>Step 1: Measure &amp; plan</h3>
                  </div>
                  <p>Tell us the dimensions or let our team visit your home for a free design consultation and accurate room survey.</p>
                </div>

                <div className="feature-panel">
                  <div className="feature-head">
                    <div className="feature-icon">
                      <Sparkles size={22} />
                    </div>
                    <h3>Step 2: 3D visual preview</h3>
                  </div>
                  <p>We build a photorealistic virtual layout with fixtures, colours and storage solutions to help you decide with confidence.</p>
                </div>

                <div className="feature-panel">
                  <div className="feature-head">
                    <div className="feature-icon">
                      <BadgeCheck size={22} />
                    </div>
                    <h3>Step 3: Supply &amp; handover</h3>
                  </div>
                  <p>Receive a complete product specification and recommended installer list to keep your project moving seamlessly.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="trade" className="section">
            <div className="container">
              <div className="section-heading">
                <span className="section-kicker">Trade Counter Perks</span>
                <h2>Built for Carlisle tradesmen and property professionals</h2>
                <p>Our trade counter is designed for speed, convenience and long-term relationships with local plumbers, heating engineers and contractors.</p>
              </div>

              <div className="trade-grid">
                <div className="trade-card">
                  <div className="icon-wrap">
                    <BadgeCheck size={24} />
                  </div>
                  <h3>Dedicated Trade Pricing</h3>
                  <p>Volume-led rates and straightforward support for regular plumbing, heating and bathroom installation jobs.</p>
                </div>

                <div className="trade-card">
                  <div className="icon-wrap">
                    <Building2 size={24} />
                  </div>
                  <h3>30-Day Credit Accounts</h3>
                  <p>Flexible trade terms for installers and property teams looking to keep jobs moving without delays.</p>
                </div>

                <div className="trade-card">
                  <div className="icon-wrap">
                    <Coffee size={24} />
                  </div>
                  <h3>Morning Coffee on the House</h3>
                  <p>Start the day right with a hot drink, helpful advice and prompt support for your latest site requirements.</p>
                </div>

                <div className="trade-card">
                  <div className="icon-wrap">
                    <Truck size={24} />
                  </div>
                  <h3>Same-Day Site Delivery</h3>
                  <p>Fast dispatch across Carlisle and the Lake District for time-sensitive plumbing and heating projects.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="reviews" className="section">
            <div className="container">
              <div className="section-heading">
                <span className="section-kicker">Client &amp; Trade Reviews</span>
                <h2>Trusted by homeowners and installers across Cumbria</h2>
                <p>From renovations to fit-outs, we are known for practical advice, premium product selection and smoother project delivery.</p>
              </div>

              <div className="testimonial-grid">
                {testimonials.map((review) => (
                  <article key={review.name} className="testimonial-card">
                    <div className="review-stars" aria-label="Five star review">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <blockquote>“{review.quote}”</blockquote>
                    <div className="reviewer">
                      <div className="review-avatar">{review.name.charAt(0)}</div>
                      <div>
                        <strong>{review.name}</strong>
                        <span>{review.role}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="location" className="section">
            <div className="container">
              <div className="section-heading">
                <span className="section-kicker">Book Your Consultation</span>
                <h2>Speak with the Carlisle showroom team</h2>
                <p>Share your project details and we will confirm your consultation slot within 2 hours. We cover homeowners, renovators and trade customers across Cumbria.</p>
              </div>

              <div className="form-wrap">
                <div className="form-card">
                  <div className="toggle-row" aria-label="Inquiry type toggle">
                    <button
                      type="button"
                      className={`toggle-button ${!tradeMode ? 'active' : ''}`}
                      onClick={() => setTradeMode(false)}
                    >
                      Homeowner
                    </button>
                    <button
                      type="button"
                      className={`toggle-button ${tradeMode ? 'active' : ''}`}
                      onClick={toggleTradeMode}
                    >
                      Trade Account
                    </button>
                  </div>

                  <form className="lead-form" onSubmit={handleSubmit}>
                    <div className="field-row">
                      <div className="field">
                        <label htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Alex Morgan"
                          value={formData.name}
                          onChange={handleFieldChange}
                          required
                        />
                      </div>

                      <div className="field">
                        <label htmlFor="postcode">Cumbria Postcode</label>
                        <input
                          id="postcode"
                          name="postcode"
                          type="text"
                          placeholder="CA2 5JL"
                          value={formData.postcode}
                          onChange={handleFieldChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="field-row">
                      <div className="field">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="07700 900123"
                          value={formData.phone}
                          onChange={handleFieldChange}
                          required
                        />
                      </div>

                      <div className="field">
                        <label htmlFor="inquiryType">Inquiry Type</label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleFieldChange}
                        >
                          <option value="Homeowner Bathroom Project">Homeowner Bathroom Project</option>
                          <option value="Heating">Heating</option>
                          <option value="Trade Account">Trade Account</option>
                        </select>
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project, heating upgrade or plumbing requirements."
                        value={formData.message}
                        onChange={handleFieldChange}
                        required
                      />
                    </div>

                    <button className="button button-primary" type="submit">
                      Send Enquiry
                    </button>

                    {submitMessage ? <div className="submit-message">{submitMessage}</div> : null}
                  </form>
                </div>

                <div className="feature-panel" style={{ alignSelf: 'stretch' }}>
                  <div className="feature-head">
                    <div className="feature-icon">
                      <MapPin size={22} />
                    </div>
                    <h3>Visit our showroom</h3>
                  </div>
                  <p style={{ marginBottom: '0.9rem' }}>
                    East Norfolk Street, Carlisle, Cumbria, CA2 5JL
                  </p>
                  <ul className="footer-list" style={{ gap: '0.65rem' }}>
                    <li><Phone size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> 01228 596 810</li>
                    <li><Clock3 size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Mon-Fri 7:30 AM - 5:00 PM | Sat 8:00 AM - 4:00 PM</li>
                    <li><Truck size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Same-day delivery for local trade and project work</li>
                    <li><MessageSquareQuote size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> 180+ customer reviews with 5.0-star rating</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-heading">
                <span className="section-kicker">FAQs</span>
                <h2>Helpful answers for homeowners and trade customers</h2>
              </div>

              <div className="faq-list">
                {faqs.map((item, index) => (
                  <div key={item.q} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                    <button type="button" className="faq-toggle" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                      <span>{item.q}</span>
                      <ChevronDown size={18} />
                    </button>
                    {openFaq === index ? <div className="faq-answer">{item.a}</div> : null}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <div className="footer-brand">
                <span className="brand-mark">
                  <Home size={20} strokeWidth={2.2} />
                </span>
                <span className="brand-name">Cumbria Bathrooms<br />&amp; Heating</span>
              </div>
              <p>
                Premium bathroom design, heating solutions and plumbing supplies for homeowners, renovators and local trade customers across Carlisle and Cumbria.
              </p>
            </div>

            <div>
              <h3 style={{ margin: '0 0 0.9rem', letterSpacing: '-0.04em' }}>Visit our showroom</h3>
              <ul className="footer-list">
                <li>Cumbria Bathrooms &amp; Heating Supplies Ltd.</li>
                <li>East Norfolk Street, Carlisle, Cumbria, CA2 5JL</li>
                <li>Mon-Fri 7:30 AM - 5:00 PM</li>
                <li>Sat 8:00 AM - 4:00 PM</li>
              </ul>
            </div>

            <div>
              <h3 style={{ margin: '0 0 0.9rem', letterSpacing: '-0.04em' }}>Get in touch</h3>
              <ul className="footer-list">
                <li><Phone size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> 01228 596 810</li>
                <li><MapPin size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Carlisle, Cumbria</li>
                <li><Wrench size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> Trade support and 3D design</li>
              </ul>
            </div>
          </div>

          <div className="container footer-bottom">
            <span>© 2026 Cumbria Bathrooms &amp; Heating Supplies Ltd.</span>
            <span>Bathroom design • Heating expertise • Trade counter</span>
          </div>
        </footer>
      </div>

      {showModal ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-panel">
            <button className="modal-close" type="button" aria-label="Close dialog" onClick={() => setShowModal(false)}>
              ×
            </button>
            <div className="modal-header">
              <div className="eyebrow" style={{ marginBottom: '0.8rem' }}>
                <Sparkles size={14} />
                Free design consultation
              </div>
              <h3 id="modal-title">Book a Free 3D Bathroom Design Consultation</h3>
              <p>Tell us about your project and our Carlisle team will confirm a suitable slot within 2 hours.</p>
            </div>

            <form className="lead-form" onSubmit={(event) => {
              event.preventDefault()
              setShowModal(false)
              setSubmitMessage(
                'Request Received! Our Carlisle showroom team will confirm your consultation slot within 2 hours.',
              )
            }}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="modal-name">Full Name</label>
                  <input id="modal-name" type="text" placeholder="Your full name" required />
                </div>
                <div className="field">
                  <label htmlFor="modal-postcode">Cumbria Postcode</label>
                  <input id="modal-postcode" type="text" placeholder="CA2 5JL" required />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="modal-phone">Phone Number</label>
                  <input id="modal-phone" type="tel" placeholder="07700 900123" required />
                </div>
                <div className="field">
                  <label htmlFor="modal-inquiry">Inquiry Type</label>
                  <select id="modal-inquiry" defaultValue={tradeMode ? 'Trade Account' : 'Homeowner Bathroom Project'}>
                    <option value="Homeowner Bathroom Project">Homeowner Bathroom Project</option>
                    <option value="Heating">Heating</option>
                    <option value="Trade Account">Trade Account</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="modal-message">Message</label>
                <textarea id="modal-message" placeholder="Tell us about your bathroom, heating or trade requirements." required />
              </div>

              <button className="button button-primary" type="submit">
                Request My Consultation
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  )
}

function RulerIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18.5V6.5A2.5 2.5 0 0 1 5.5 4H18.5A2.5 2.5 0 0 1 21 6.5V18.5A2.5 2.5 0 0 1 18.5 21H5.5A2.5 2.5 0 0 1 3 18.5Z" />
      <path d="M7 8h10" />
      <path d="M7 12h8" />
      <path d="M7 16h6" />
    </svg>
  )
}

export default App
