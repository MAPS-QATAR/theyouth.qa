import Link from "next/link"

const sdgColors = [
  "#E5243B", "#DDA63A", "#4C9F38", "#C5192D", "#FF3A21",
  "#26BDE2", "#FCC30B", "#A21942", "#FD6925", "#DD1367",
  "#FD9D24", "#BF8B2E", "#3F7E44", "#0A97D9", "#56C02B",
  "#00689D", "#19486A",
]

const activityCategories = [
  "Art – Creative Impact Studio",
  "Design – Sustainable Design Lab",
  "Eco Action – Green Guardians",
  "Storytelling – Voice of Change",
  "Innovation – Future Solution Lab",
  "Photography – Lens for Impact",
  "Interactive Media – Digital Change Makers",
  "Music – Sound for Sustainability",
  "Community Action – Youth in Action",
  "Future Leaders",
]

const faqPreview = [
  {
    q: "Who can participate?",
    a: "Schools across Qatar with students aged 13 years and above, Grade 8 onwards, or Year 8 onwards.",
  },
  {
    q: "How are SDGs assigned?",
    a: "Schools select their top 3 SDG preferences during registration. Final allocation is confirmed by the organizers.",
  },
  {
    q: "What is the participation fee?",
    a: "QAR 6,000 per school, equivalent to QAR 120 per student for 50 students.",
  },
]

export default function JadooPage() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] text-[#24362f] pt-28">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-[#6b756f] mb-5">
            MAPS International W.L.L.
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none">
            JADOO
          </h1>

          <p className="mt-4 italic text-xl md:text-2xl text-[#56655d]">
            Junior Artists Day Out
          </p>

          <h2 className="mt-6 text-3xl md:text-5xl font-black">
            Youth for SDGs
          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-[#405047]">
            A youth engagement initiative bringing together schools across Qatar
            through creativity, innovation, sustainability, leadership,
            collaboration, and experiential learning aligned with the United
            Nations Sustainable Development Goals.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="https://register.theyouth.qa" target="_blank">
              <button className="px-8 py-4 rounded-full bg-[#24362f] text-white font-bold shadow-lg hover:scale-105 transition">
                Register School
              </button>
            </Link>

            <Link href="/documents/jadoo-guidelines.pdf" target="_blank">
              <button className="px-8 py-4 rounded-full border-2 border-[#24362f] font-bold hover:bg-[#24362f] hover:text-white transition">
                Download Guidelines
              </button>
            </Link>

            <Link href="/documents/jadoo-faq.pdf" target="_blank">
              <button className="px-8 py-4 rounded-full border-2 border-[#24362f] font-bold hover:bg-[#24362f] hover:text-white transition">
                Download FAQ
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SDG Strip */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-md">
          <div className="grid grid-cols-17 grid-cols-1">
            <div className="flex h-5">
              {sdgColors.map((color, index) => (
                <div
                  key={index}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className="bg-white p-8 text-center">
            <h3 className="text-2xl md:text-4xl font-black">
              17 Schools. 17 Goals. One Youth Movement.
            </h3>
            <p className="mt-4 text-[#5b6b63]">
              Each school represents one Sustainable Development Goal through
              creative projects, performances, exhibitions, innovation concepts,
              awareness campaigns, and youth-led action.
            </p>
          </div>
        </div>
      </section>

      {/* Event Snapshot */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ["Dates", "29, 30 & 31 October 2026"],
            ["Venue", "Katara Cultural Village"],
            ["Format", "Outdoor Public Youth SDG Showcase"],
            ["Participation", "Limited to 17 Schools"],
            ["Students", "850 Students (50 students per school)"],
            ["Fee", "QAR 6,000 per School"],
             
          ].map(([title, detail]) => (
            <div key={title} className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-sm uppercase tracking-widest text-[#7a867f]">
                {title}
              </p>
              <h3 className="mt-3 text-2xl font-black">{detail}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-[#24362f] text-white rounded-[2rem] p-10 md:p-14">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Transforming SDGs into Real Youth Action
          </h2>
          <p className="text-lg leading-relaxed text-white/85">
            JADOO – Youth for SDGs inspires students to become global
            citizens, responsible leaders, innovators, and changemakers by
            transforming the Sustainable Development Goals into real-world
            experiences through art, design, innovation, culture, and
            collaboration.
          </p>
        </div>
      </section>

      {/* Participation Model */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
            Participation Model
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["1", "School Registration"],
              ["2", "Top 3 SDG Preferences"],
              ["3", "Organizer Review"],
              ["4", "SDG Allocation & Payment"],
            ].map(([num, text]) => (
              <div key={num} className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#24362f] text-white flex items-center justify-center font-black mb-6">
                  {num}
                </div>
                <h3 className="text-xl font-black">{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Categories */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
            10 Creative Activity Categories
          </h2>
          <p className="text-center text-[#5b6b63] max-w-3xl mx-auto mb-12">
            Each participating school creatively interprets its assigned SDG
            through interdisciplinary student-led groups.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {activityCategories.map((item, index) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-5 shadow-sm border border-black/5"
              >
                <p className="text-xs font-bold text-[#7a867f] mb-2">
                  CATEGORY {index + 1}
                </p>
                <h3 className="font-black leading-snug">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Center + FAQ */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] p-10 shadow-sm">
            <h2 className="text-3xl font-black mb-5">Download Center</h2>
            <p className="text-[#5b6b63] mb-8">
              Schools are requested to review the official guidelines and FAQ
              before completing registration.
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
            <h2 className="text-3xl font-black mb-5">FAQ Preview</h2>
            <div className="space-y-6">
              {faqPreview.map((item) => (
                <div key={item.q}>
                  <h3 className="font-black text-lg">{item.q}</h3>
                  <p className="mt-2 text-[#5b6b63] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto text-center bg-[#e8ded2] rounded-[2rem] p-10 md:p-14">
          <h2 className="text-3xl md:text-5xl font-black">
            Ready to Represent an SDG?
          </h2>
          <p className="mt-5 text-lg text-[#5b6b63]">
            Participation is limited to 17 schools only. Schools are encouraged
            to register early to secure consideration for SDG allocation.
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
    </main>
  )
}
