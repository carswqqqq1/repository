import { useState } from 'react';

const FAQS = [
  {
    q: 'What is Grüns?',
    a: 'Grüns is comprehensive daily nutrition in a gummy — 60+ whole food ingredients, 21 vitamins & minerals, and 6g of fiber in one convenient daily pack. No powder, no pills, no blender.',
  },
  {
    q: 'How do I take Grüns?',
    a: 'Each pouch contains 28 individual daily packs. Rip open one pack a day and enjoy the handful of green gummy bears inside — any time, anywhere.',
  },
  {
    q: 'Is Grüns safe for kids?',
    a: 'Grüns Kids is formulated for ages 2 to 13 with clean, balanced ingredients that support healthy growth and development, and it is picky-eater approved.',
  },
  {
    q: 'Are Grüns vegan and allergen friendly?',
    a: 'Yes. Grüns uses a pectin (fruit fiber) base rather than gelatin, and is plant-based, vegan, and free from gluten, dairy, and nuts. No synthetic sweeteners and no synthetic dyes.',
  },
  {
    q: 'How is Grüns tested?',
    a: 'We test every lot for potency and purity — 70 different pesticides, 4 types of heavy metals, 16 different contaminants, and 9 microbial contaminants — in FDA-registered, cGMP-compliant facilities.',
  },
  {
    q: 'Can I pause or cancel my subscription?',
    a: 'Any time. Manage, pause, or cancel your subscription from your account in a couple of clicks, and every order is backed by a 30-day money-back guarantee.',
  },
  {
    q: 'Is Grüns HSA/FSA eligible?',
    a: 'Yes — Grüns is HSA/FSA eligible with Truemed. Choose the Truemed option at checkout to see if you qualify.',
  },
];

export default function Faqs() {
  const [open, setOpen] = useState(0);
  return (
    <section className="simple">
      <div className="simple__inner">
        <h1>FAQs</h1>
        <p>Everything you wanted to know about daily nutrition that actually tastes good.</p>
        <div>
          {FAQS.map((f, i) => (
            <div className="faq-item" key={f.q}>
              <button className="faq-item__head" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                {f.q}
                <span aria-hidden="true">{open === i ? '–' : '+'}</span>
              </button>
              {open === i && <p className="faq-item__body body-3">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
