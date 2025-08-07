// components/PricingCard.tsx
import CourseSlider from "@/components/CourseSlider";

type ChecklistItem = {
  id: string;
  icon: string;
  text: string;
  color: string;
  list_page_visibility: boolean;
};

type PricingCardProps = {
  media: []; // You can define more precise types if needed
  checklist: ChecklistItem[];
};

export default function PricingCard({ checklist, media }: PricingCardProps) {
  return (
    <div className="w-[400px] bg-white border border-gray-300 overflow-hidden absolute">
      <div className="relative p-1">
        <CourseSlider media={media} />
      </div>

      <div className="p-6 mt-[40px] text-gray-800">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">1000</span>
        </div>

        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 cursor-pointer">
          Enroll Now
        </button>

        <div className="mt-6">
          <p className="mb-4 text-xl font-semibold">What's in this course</p>

          <ul className="space-y-3">
            {checklist
              .filter((item) => item.list_page_visibility)
              .map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <img src={item.icon} alt="checklist icon" className="w-6 h-6" />
                  <span style={{ color: item.color }}>{item.text}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
