import { clinic } from "@/data/clinic";
import { Award, Heart, MapPin, CalendarCheck } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award size={28} className="text-blue-700" />,
  Heart: <Heart size={28} className="text-blue-700" />,
  MapPin: <MapPin size={28} className="text-blue-700" />,
  CalendarCheck: <CalendarCheck size={28} className="text-blue-700" />,
};

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {clinic.trustSignals.map((signal) => (
          <div key={signal.title} className="flex flex-col items-center text-center gap-3">
            <div className="bg-blue-50 p-3 rounded-2xl">
              {iconMap[signal.icon]}
            </div>
            <p className="text-gray-800 font-semibold text-sm leading-snug">{signal.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
