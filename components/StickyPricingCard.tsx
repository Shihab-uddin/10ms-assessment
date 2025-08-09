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
  checklist: ChecklistItem[];
  cta:[];
  ctavalue:[];
};

export default function StickyPricingCard({ checklist, cta, ctavalue }: PricingCardProps) {
  return (
    <div className="w-[400px] bg-white border border-gray-300 overflow-hidden absolute z-30">

      <div className="p-6 text-gray-800">
        <div className="flex items-baseline">
          <span className="text-2xl font-semibold">1000</span>
        </div>

        <button value={ctavalue} className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold border-b-4 border-b-green-700 py-3 px-4 rounded-lg transition duration-200 cursor-pointer">
          {cta}
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
