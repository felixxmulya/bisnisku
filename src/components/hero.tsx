import Image from "next/image";

export default function Hero() {
    const partner = [
        "Google Cloud",
        "Microsoft Azure",
        "Amazon Web Services",
        "IBM Cloud",
    ];

    return (
        <div className="bg-blue-600">
            <div className="max-w-7xl mx-auto pt-32 pb-20 px-6 md:px-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
                            Kelola Bisnis Lebih Mudah dengan Teknologi AI
                        </h1>
                        <p className="text-white text-xl mb-8">
                        Solusi all-in-one: pembukuan digital, inventory, dan finansial dalam satu aplikasi
                        </p>
                        <button className="bg-white text-blue-700 font-bold text-md px-12 py-3 rounded-lg hover:-translate-y-1 transition-transform duration-300">
                            Coba Dulu Yuk
                        </button>

                        <div className="mt-12 flex items-center space-x-8">
                            {partner.map((partner) => (
                                <div key={partner} className="text-gray-300 text-sm">
                                    {partner}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                            <Image
                                src="/images/hero.jpeg"
                                width={500}
                                height={100}
                                alt="Business Dashboard"
                                className="w-full h-[24rem] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}