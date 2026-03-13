import { clinic } from "@/data/clinic";
import { GraduationCap, UserCheck, MapPin, CalendarCheck, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={22} className="text-blue-600" />,
  UserCheck: <UserCheck size={22} className="text-blue-600" />,
  MapPin: <MapPin size={22} className="text-blue-600" />,
  CalendarCheck: <CalendarCheck size={22} className="text-blue-600" />,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: visual */}
        <div className="bg-white rounded-3xl p-10 shadow-md border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-700 p-3 rounded-xl">
              <CheckCircle size={24} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Trusted by patients across</p>
              <p className="text-blue-700 font-semibold">Northern Rhode Island</p>
            </div>
          </div>
          <div className="space-y-4">
            {["Board-certified physicians", "Comprehensive adult care", "Two convenient locations", "Same-week appointments"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-700">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <CheckCircle size={12} className="text-blue-700" />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-700">2</p>
              <p className="text-xs text-gray-500 mt-1">Rhode Island Locations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-700">4.8★</p>
              <p className="text-xs text-gray-500 mt-1">Patient Rating</p>
            </div>
          </div>
        </div>

        {/* Right: list */}
        <div>
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Our Difference</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-10">
            Why Patients Choose Our Practice
          </h2>
          <div className="space-y-6">
            {clinic.whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-100 shrink-0">
                  {iconMap[item.icon]}
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-gray-800">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
