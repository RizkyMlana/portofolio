// import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Kolom Foto */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
              {/* Ganti /profile.jpg dengan foto aslimu di folder public */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                Foto Kamu
              </div>
              {/* <Image src="/profile.jpg" alt="Profile" fill className="object-cover" /> */}
            </div>
          </div>

          {/* Kolom Teks */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Tentang Saya
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Halo! Saya adalah pengembang web yang bersemangat menciptakan pengalaman digital yang fungsional dan estetik. Saya memulai coding sejak tahun 2020 dan sejak itu terus belajar teknologi terbaru.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Saat tidak sedang coding, saya biasanya membaca buku tentang produktivitas, bermain game strategi, atau mencari kopi enak di sekitar kota.
            </p>
            
            <div className="mt-8 flex gap-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-blue-600">3+</span>
                <span className="text-sm text-gray-500">Tahun Pengalaman</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-blue-600">20+</span>
                <span className="text-sm text-gray-500">Project Selesai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}