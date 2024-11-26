import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCube, faCogs } from '@fortawesome/free-solid-svg-icons';

export default function Features() {
    const features = [
        {
            icon: faChartLine,
            title: "Laporan Keuangan",
            description: "Laporan keuangan yang akurat dan real-time untuk memantau kesehatan bisnis."
        },
        {
            icon: faCube,
            title: "Inventory Management",
            description: "Kelola stok barang dengan mudah dan otomatis, tanpa perlu hitung manual."
        },
        {
            icon: faCogs,
            title: "Operasional",
            description: "Optimalkan proses bisnis dengan tools yang modern dan efisien."
        },
    ];

    return (
        <div className="max-w-7xl px-6 mx-auto my-12 content-center">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold leading-tight mb-4">Solusi Lengkap untuk Kelola Bisnis</h1>
                <p className="max-w-xl mx-auto text-lg text-gray-700">Tingkatkan efisiensi bisnis dengan tools modern untuk operasional, keuangan, dan inventory dalam satu platform.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white px-14 py-16 rounded-lg shadow-md flex flex-col items-center text-center">
                        <div className="text-4xl mb-6 text-blue-700"><FontAwesomeIcon icon={feature.icon} size='2x' /></div>
                        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
    </div>
    );
}