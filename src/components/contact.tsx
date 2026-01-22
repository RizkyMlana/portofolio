import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Hubungi Saya</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info Kontak */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Ayo ngobrol!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tertarik bekerja sama atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600">
                <Mail size={20} />
              </div>
              <span>email.kamu@example.com</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600">
                <MapPin size={20} />
              </div>
              <span>Jakarta, Indonesia</span>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Form Kontak */}
          <form className="bg-white dark:bg-black p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nama</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:border-gray-700" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:border-gray-700" placeholder="email@anda.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pesan</label>
                <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:border-gray-700" placeholder="Tulis pesan..." />
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                Kirim Pesan <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}