"use client"

import { useState } from "react"
import Link from "next/link"

const sdgs = [
  ["01", "No Poverty", "#E5243B", ["End poverty in all its forms.", "Promote dignity, inclusion, and opportunity.", "Encourage youth-led awareness and social responsibility."]],
  ["02", "Zero Hunger", "#DDA63A", ["Promote food security and nutrition.", "Encourage sustainable food systems.", "Inspire community care and sharing."]],
  ["03", "Good Health and Well-Being", "#4C9F38", ["Support healthy lives and well-being.", "Promote mental and physical wellness.", "Encourage safe, active, and caring communities."]],
  ["04", "Quality Education", "#C5192D", ["Promote inclusive and quality education.", "Encourage lifelong learning.", "Celebrate creativity as a learning tool."]],
  ["05", "Gender Equality", "#FF3A21", ["Support equal opportunity and respect.", "Promote confidence and leadership.", "Encourage inclusive participation."]],
  ["06", "Clean Water and Sanitation", "#26BDE2", ["Promote water conservation.", "Raise awareness on clean water access.", "Encourage responsible daily habits."]],
  ["07", "Affordable and Clean Energy", "#FCC30B", ["Promote renewable energy ideas.", "Encourage energy-saving behavior.", "Inspire innovation for a cleaner future."]],
  ["08", "Decent Work and Economic Growth", "#A21942", ["Promote youth skills and entrepreneurship.", "Encourage dignity in work.", "Inspire innovation-led growth."]],
  ["09", "Industry, Innovation and Infrastructure", "#FD6925", ["Encourage future-ready innovation.", "Promote creative problem-solving.", "Build ideas for sustainable infrastructure."]],
  ["10", "Reduced Inequalities", "#DD1367", ["Promote inclusion and fairness.", "Celebrate diversity.", "Encourage empathy and equal opportunity."]],
  ["11", "Sustainable Cities and Communities", "#FD9D24", ["Imagine safer and greener cities.", "Promote community responsibility.", "Encourage sustainable urban ideas."]],
  ["12", "Responsible Consumption and Production", "#BF8B2E", ["Reduce waste.", "Promote recycling and reuse.", "Encourage responsible choices."]],
  ["13", "Climate Action", "#3F7E44", ["Raise climate awareness.", "Promote green action.", "Inspire youth-led environmental solutions."]],
  ["14", "Life Below Water", "#0A97D9", ["Protect oceans and marine life.", "Reduce plastic pollution.", "Promote water ecosystem awareness."]],
  ["15", "Life on Land", "#56C02B", ["Protect nature and biodiversity.", "Promote tree planting and conservation.", "Encourage respect for land ecosystems."]],
  ["16", "Peace, Justice and Strong Institutions", "#00689D", ["Promote peace and respect.", "Encourage fairness and dialogue.", "Build responsible youth leadership."]],
  ["17", "Partnerships for the Goals", "#19486A", ["Celebrate collaboration.", "Build school-community partnerships.", "Promote collective action for the SDGs."]],
]

const activities = [
  ["Art", "Creative Impact Studio", "#E5243B", ["Canvas paintings", "SDG mural art", "Recycled art installations", "3D art from waste", "Climate awareness visual art"]],
  ["Design", "Sustainable Design Lab", "#DDA63A", ["Fashion from recycled materials", "Sustainable costume design", "SDG-inspired packaging", "Eco merchandise concepts", "Poster and branding design"]],
  ["ECO Action", "Green Guardians", "#4C9F38", ["School garden concepts", "Tree planting drives", "Recycling systems", "Plastic-free campaigns", "Eco awareness activities"]],
  ["Storytelling", "Voice of Change", "#C5192D", ["Spoken word poetry", "Human stories", "Short skits", "Inspirational speeches", "Youth advocacy narratives"]],
  ["Innovation", "Future Solution Lab", "#FD6925", ["SDG innovation models", "Mini hackathons", "Smart city concepts", "Renewable energy ideas", "Social innovation pitches"]],
  ["Photography", "Lens for Impact", "#0A97D9", ["Documentary photography", "Climate photography", "Motion reels", "Social impact short videos", "Community storytelling visuals"]],
  ["Interactive Media", "Digital Change Makers", "#DD1367", ["1-minute reels", "Awareness campaigns", "Podcast clips", "Interview videos", "SDG awareness animations"]],
  ["Music", "Sound for Sustainability", "#A21942", ["SDG theme songs", "Rap for climate action", "Peace music", "Cultural fusion", "Recycled instrument performance"]],
  ["Community Action", "Youth in Action", "#FD9D24", ["Volunteer campaigns", "Charity drives", "Inclusion activities", "Interactive exhibits", "Kindness wall"]],
  ["Future Leaders", "Sounds of Sustainability", "#19486A", ["Youth councils", "SDG presentations", "Youth declarations", "Panel discussions", "Leadership workshops"]],
]

const counters = [
  ["17", "SDGs"],
  ["17", "Schools"],
  ["850", "Students"],
  ["10", "Activity Categories"],
  ["3", "Event Days"],
]

export default function JadooPage() {
    const [activeSdg, setActiveSdg] = useState<string | null>("01");
  const [activeActivity, setActiveActivity] = useState<string | null>("Art");

  return (
    <>
      <div className="min-h-screen bg-[#f5f1eb] text-[#24362f]">
    <section className="relative min-h-[92vh] overflow-hidden px-6 pt-16 pb-14 flex items-center text-center text-white cursor-default">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-105 opacity-80"
      >
          <source src="/videos/sdg-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70" />
<div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#123b4d]/55 to-[#1b2421]/95" />
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#26BDE2]/25 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[#DD1367]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <img
            src="/youth-logo.jpeg"
            alt="The Y.O.U.T.H. Logo"
            className="mx-auto mb-8 h-24 w-24 object-contain rounded-2xl shadow-2xl"
          />

          <img
  src="/jadoo-logo.png"
  alt="JADOO Youth for SDGs Logo"
  className="mx-auto mt-1 mb-1 w-full max-w-[260px] md:max-w-[360px] lg:max-w-[430px] object-contain drop-shadow-2xl"
/>

<h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white"
  JADOO (Junior Artists Days Out)
</h1>

<p className="mt-2 text-2xl md:text-4xl font-bold text-white/95">
  — Youth for SDGs Initiative
</p>

<div className="mt-5 text-sm md:text-base text-white/75">
  <p>An Initiative by</p>
  <p className="font-bold tracking-wide">
    MAPS INTERNATIONAL W.L.L.
  </p>
</div>

<p className="mt-8 max-w-4xl mx-auto text-lg md:text-2xl leading-relaxed text-white/90">
  Empowering young minds to engage with the Sustainable Development Goals
  through creativity, innovation, and action. A global initiative where
  creativity meets purpose, and youth drive sustainable change.
</p>

<p className="mt-6 text-xl md:text-2xl italic font-medium text-pink-200">
  “The Y.O.U.T.H™ – You Own Unlimited Talents & Hope”
</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="https://register.theyouth.qa" target="_blank">
              <button className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-lg hover:scale-105 transition">
                Register School
              </button>
            </Link>

            <Link href="/documents/jadoo-guidelines.pdf" target="_blank">
              <button className="px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg hover:scale-105 transition">
                Download Guidelines
              </button>
            </Link>

            <Link href="/documents/jadoo-faq.pdf" target="_blank">
              <button className="px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-lg hover:scale-105 transition">
                Download FAQ
              </button>
            </Link>
          </div>

          <p className="mt-10 text-xs text-white/55">
            Visual source: United Nations Sustainable Development Goals —{" "}
            <a
              href="https://sdgs.un.org/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              sdgs.un.org
            </a>
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {counters.map(([number, label]) => (
            <div key={label} className="group bg-white/90 rounded-[2rem] p-7 text-center shadow-sm border border-white/70 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl md:text-5xl font-black">{number}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-[#6b756f]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ["Dates", "29, 30 & 31 October 2026", ""],
            ["Venue", "Katara Cultural Village", ""],
            ["Format", "Outdoor Public Youth SDGs Showcase", ""],
            ["Participation", "Limited to 17 Schools", ""],
            ["Students", "850 Students", "Up to 50 students per school"],
            ["Fee", "QAR 120 per student", "(QAR 6,000 per School)"],
          ].map(([title, detail, sub]) => (
            <div key={title} className="group bg-white/95 rounded-[2rem] p-8 md:p-10 shadow-sm border border-white/70 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <p className="text-sm uppercase tracking-[0.22em] text-[#7a867f] group-hover:text-[#24362f] transition">
  {title}
</p>
              <h3 className="mt-4 text-2xl md:text-3xl font-black leading-snug">{detail}</h3>
              {sub && <p className="mt-2 text-sm text-[#6b756f]">{sub}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
            Explore the 17 Sustainable Development Goals
          </h2>
          <p className="text-center text-[#5b6b63] max-w-3xl mx-auto mb-10">
            Click any SDG logo to view its youth-focused meaning and creative direction for JADOO.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {sdgs.map(([id, name, color]) => (
              <button
                key={id}
                onClick={() => setActiveSdg(activeSdg === id ? null : id)}
                className="rounded-2xl overflow-hidden bg-white shadow-sm border hover:scale-105 transition"
                style={{ borderColor: activeSdg === id ? color : "#eee" }}
              >
                <img src={`/sdgs/E-WEB-Goal-${id}.png`} alt={`SDG ${id} ${name}`} className="w-full aspect-square object-cover" />
              </button>
            ))}
          </div>

          {activeSdg && (
            <div className="mt-10 rounded-3xl p-8 text-white" style={{ backgroundColor: sdgs.find((s) => s[0] === activeSdg)?.[2] as string }}>
              <h3 className="text-2xl md:text-3xl font-black">
                SDG {activeSdg}: {sdgs.find((s) => s[0] === activeSdg)?.[1]}
              </h3>
              <ul className="mt-5 grid md:grid-cols-2 gap-3">
                {(sdgs.find((s) => s[0] === activeSdg)?.[3] as string[]).map((point) => (
                  <li key={point} className="bg-white/15 rounded-2xl p-4">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-[#24362f] text-white rounded-[2rem] p-10 md:p-14">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Transforming SDGs into Real Youth Action
          </h2>
          <p className="text-lg leading-relaxed text-white/85">
            JADOO inspires students to become global citizens, responsible leaders,
            innovators, and changemakers by transforming the Sustainable Development Goals
            into real-world experiences through art, design, innovation, culture, and collaboration.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
            10 Creative Activity Categories
          </h2>
          <p className="text-center text-[#5b6b63] max-w-3xl mx-auto mb-12">
            Click any activity to view suggested guidelines from the participation framework.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {activities.map(([title, subtitle, color]) => (
              <button
                key={title}
                onClick={() => setActiveActivity(activeActivity === title ? null : title)}
                className="text-left rounded-3xl p-6 shadow-sm text-white hover:-translate-y-1 transition"
                style={{ backgroundColor: color }}
              >
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">{subtitle}</p>
                <h3 className="mt-3 text-2xl font-black">{title}</h3>
              </button>
            ))}
          </div>

          {activeActivity && (
            <div className="mt-8 bg-white rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-3xl font-black">
                {activeActivity} – {activities.find((a) => a[0] === activeActivity)?.[1]}
              </h3>
              <ul className="mt-6 grid md:grid-cols-2 gap-4">
                {(activities.find((a) => a[0] === activeActivity)?.[3] as string[]).map((point) => (
                  <li key={point} className="rounded-2xl bg-[#f5f1eb] p-4 font-medium">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">Why Participate?</h2>
          <p className="text-center text-[#5b6b63] max-w-3xl mx-auto mb-12">
            JADOO gives students a platform to learn, create, lead, collaborate, and present SDG-driven ideas to the public.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {["Leadership", "Creativity", "Sustainability", "Innovation", "Collaboration", "Recognition"].map((item) => (
              <div key={item} className="bg-white rounded-3xl p-8 shadow-sm hover:-translate-y-1 transition">
                <h3 className="text-2xl font-black">{item}</h3>
                <p className="mt-3 text-[#5b6b63]">
                  Empowering youth through meaningful participation, public engagement, and SDG-aligned learning.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12">Registration Timeline</h2>

          <div className="grid md:grid-cols-5 gap-4">
            {["Register School", "Select your SDG Goal preference", "Organizer Review", "SDG Allocation", "Payment & Student Details"].map((step, index) => (
              <div key={step} className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#24362f] text-white flex items-center justify-center font-black mb-5">
                  {index + 1}
                </div>
                <h3 className="font-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] p-10 shadow-sm">
            <h2 className="text-3xl font-black mb-5">Download Center</h2>
            <p className="text-[#5b6b63] mb-8">
              Schools are requested to review the official guidelines and FAQ before completing registration.
            </p>

            <div className="space-y-4">
              <Link href="/documents/jadoo-guidelines.pdf" target="_blank">
                <button className="w-full px-6 py-4 rounded-2xl bg-[#24362f] text-white font-bold">
                  Download Participation Guidelines
                </button>
              </Link>

              <Link href="/documents/jadoo-faq.pdf" target="_blank">
                <button className="w-full px-6 py-4 rounded-2xl border-2 border-[#24362f] font-bold">
                  Download FAQ Document
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-sm">
            <h2 className="text-3xl font-black mb-5">Contact</h2>
            <p className="text-[#5b6b63] leading-relaxed">
              For registration support, school coordination, and partnership inquiries, please contact MAPS International W.L.L.
            </p>
            <p className="mt-6 font-bold">info@mapsinternational.net</p>
            <p className="font-bold">+974 55603845</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto text-center bg-[#e8ded2] rounded-[2rem] p-10 md:p-14">
          <h2 className="text-3xl md:text-5xl font-black">Ready to Represent an SDG Goal?</h2>
          <p className="mt-5 text-lg text-[#5b6b63]">
            Participation is limited to 17 schools. Schools are encouraged to register early to secure consideration for SDG allocation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="https://register.theyouth.qa" target="_blank">
              <button className="px-8 py-4 rounded-full bg-[#24362f] text-white font-bold">
                Register Your School
              </button>
            </Link>

            <Link href="mailto:info@mapsinternational.net">
              <button className="px-8 py-4 rounded-full border-2 border-[#24362f] font-bold">
                Contact MAPS Team
              </button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#24362f] text-white px-6 py-10 text-center">
        <p className="font-black text-xl">JADOO – Youth for SDGs</p>
        <p className="mt-2 text-white/70">Organized by MAPS International W.L.L.</p>
        <p className="mt-4 text-sm text-white/60">
          © {new Date().getFullYear()} MAPS International W.L.L. All rights reserved.
        </p>
      </footer>
          </div>
    </>
  )
}
