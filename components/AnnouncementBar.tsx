import { clinic } from "@/data/clinic";

export default function AnnouncementBar() {
  return (
    <div className="bg-blue-800 text-white text-center text-sm py-2 px-4 font-medium tracking-wide">
      {clinic.announcement}
    </div>
  );
}
