import Link from "next/link"

export default function JadooPage() {
  return (
    <main className="min-h-screen bg-[#f5f1eb] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
            MAPS INTERNATIONAL W.L.L.
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-[#2a3a32] leading-tight">
            JADO&apos;o
          </h1>

          <p className="italic text-xl text-gray-600 mt-2">
            Junior Artists Day Out
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-6 text-[#4a5a52]">
            Youth for SDGs
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-700 leading-relaxed">
            A transformative youth platform empowering schools, students,
            educators, artists, innovators, and young leaders through
            sustainability, creativity, culture, innovation, and the
            United Nations Sustainable Development Goals.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="https://v0-jado-o-youth-registration.vercel.app"
              target="_blank"
            >
              <button className="px-8 py-4 rounded-full bg-[#2a3a32] text-white font-bold hover:scale-105 transition">
                Register School
              </button>
            </Link>

            <Link
              href="/documents/jadoo-guidelines.pdf"
              target="_blank"
            >
              <button className="px-8 py-4 rounded-full border-2 border-[#2a3a32] text-[#2a3a32] font-bold hover:bg-[#2a3a32] hover:text-white transition">
                Download Guidelines
              </button>
            </Link>

            <Link
              href="/documents/jadoo-faq.pdf"
              target="_blank"
            >
              <button className="px-8 py-4 rounded-full border-2 border-[#2a3a32] text-[#2a3a32] font-bold hover:bg-[#2a3a32] hover:text-white transition">
                Download FAQ
              </button>
            </Link>
          </div>
        </div>

        {/* Information Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-[#2a3a32]">
              17 Schools
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Each participating school will be assigned one dedicated
              UN Sustainable Development Goal for creative interpretation
              and presentation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-[#2a3a32]">
              50 Students
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Each school may nominate up to 50 students for participation
              across multiple creative and innovation-based activities.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-[#2a3a32]">
              SDG Creativity
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Activities include art, innovation, fashion, sustainability,
              design, media, culture, performance, installations, and
              interdisciplinary youth engagement.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}
