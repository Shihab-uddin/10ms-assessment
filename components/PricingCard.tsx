// components/PricingCard.tsx
import CourseSlider from "@/components/CourseSlider";

type PricingCardProps = {
  price: number;
  discountedPrice: number;
  features: string[];
};

export default function PricingCard({ price, discountedPrice, features }: PricingCardProps) {
  return (
    <div className="bg-white border-1 border-zinc-500 shadow-xl overflow-hidden">
      <div className="relative p-1">
        <CourseSlider />
      </div>
      <div className="p-6 text-gray-800">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">1000</span>
        </div>
        <button className="mt-4 w-full bg-green-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
          Enroll Now
        </button>
        <div className="mt-6">
          <h3 className="font-medium text-gray-900">This course includes:</h3>
          <ul className="mt-2 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
