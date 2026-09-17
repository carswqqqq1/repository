import { useMemo, useState } from 'react'
import './help-center.css'

const topics = [
  ['How do I manage my subscription?', 'Log in to your account to skip, reschedule, swap, or cancel a shipment.'],
  ['When will my order arrive?', 'Orders typically ship within 24 hours and arrive 3–5 business days later.'],
  ['What is your return policy?', 'Your first order is covered by our 30-day money-back guarantee.'],
  ['Are Grüns gummies vegan?', 'Yes. Grüns are plant-based, vegan, gluten-free, dairy-free, and nut-free.'],
]

const footerColumns = {
  Learn: ['Reviews', 'Our Science', 'How Grüns Works', 'Our Story', 'Find in Store', 'FAQs'],
  Connect: ['Apple Watch Giveaway', 'Partners & Influencers', 'Press Inquiries', 'Make a Return', 'Careers', 'Account Login', 'Contact Us'],
  Rewards: ['VIP Access', 'Merch Store', 'Refer a Friend', 'Exclusives 101'],
  Snacks: ['About', 'Grüns Adults', 'Grüns Kids', 'Nütrops', 'Immün', 'Jüced', 'Müves'],
}

function HelpHeader() {
  return (
    <>
      <div className="hc-announcement">🎈 🎂 <b>IT'S GRÜNS' BIRTHDAY!</b> 🎂 🎈<span>WE LOWERED OUR PRICE TO CELEBRATE</span></div>
      <header className="hc-header">
        <a href="/" className="hc-logo">grüns</a>
        <div><a href="/pages/first-order">Shop Now</a><button aria-label="Shopping bag">♧</button><button aria-label="Open menu">＝</button></div>
      </header>
    </>
  )
}

function Footer() {
  return (
    <footer className="hc-footer">
      <div className="hc-footer-top">
        <section className="hc-signup"><h3>Sign Up for 55% Off</h3><form onSubmit={e=>e.preventDefault()}><input aria-label="Phone number" placeholder="Phone number" /><button aria-label="Sign up">→</button></form><a href="#">Email me instead</a><p>**By providing your number and clicking the button, you agree to receive recurring auto-dialed marketing SMS (including cart reminders; AI content; artificial or prerecorded voices) and our <u>Terms of Service</u> (including arbitration). Consent is not required to purchase. Msg & data rates may apply. Msg frequency varies. Reply HELP for help; STOP to opt-out. <u>View Privacy Policy.</u></p><div className="hc-social"><b>grüns</b><span>◉ ◔ ▶ ●</span></div></section>
        <nav className="hc-columns">{Object.entries(footerColumns).map(([title,links])=><div key={title}><h3>{title === 'Snacks' ? 'üsnacks' : title}</h3>{links.map(x=><a href="#" key={x}>{x}</a>)}</div>)}</nav>
      </div>
      <div className="hc-notices"><p>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.</p><p>**Offer assumes customer has received and uses promotional SMS discount reserved for new customers only.</p></div>
      <div className="hc-legal"><span>© Copyright 2026, Grüns</span><nav>Refund Policy　 Privacy Policy　 Terms Of Service　 Shipping Policy　 My Privacy Choices 🔵　 Authorized Resale Policy　 Accessibility</nav></div>
      <div className="hc-lockup"><span>THE BEAR</span><span><i>☺</i>NECESSITIES</span></div>
    </footer>
  )
}

export default function HelpCenter() {
  const [query, setQuery] = useState('')
  const [show, setShow] = useState(false)
  const matches = useMemo(() => topics.filter(([q,a]) => `${q} ${a}`.toLowerCase().includes(query.toLowerCase())), [query])
  return (
    <div className="help-center">
      <HelpHeader />
      <main className="hc-main">
        <section className="hc-search-card">
          <h1>FAQs</h1>
          <input value={query} onChange={e=>setQuery(e.target.value)} onFocus={()=>setShow(true)} placeholder="Search away..." aria-label="Search frequently asked questions" />
        </section>
        {show && query && <div className="hc-results">{matches.length ? matches.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>) : <p>No results. Try another search.</p>}</div>}
        <button className="hc-more" onClick={()=>setShow(v=>!v)}>{show ? 'HIDE RESULTS' : 'SEE MORE RESULTS'}</button>
      </main>
      <Footer />
    </div>
  )
}
