type FeaturesCardProps = {
  features: { id: string; icon: string; title: string; subtitle: string }[];
};

export default function CourseFeatures({ features }: FeaturesCardProps) {
  return (
    <div className="bg-gray-900 overflow-hidden mb-6 md:rounded-md md:border">
      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map(({ id, icon, title, subtitle }) => (
            <div key={id} className="flex items-start gap-6">
              <div className="w-8 h-8 flex items-center justify-center rounded-full">
                <img
                  src={icon}
                  alt={title}
                  className="max-w-full max-h-full object-contain aspect-square"
                />
              </div>
              <div>
                <h2 className="text-[18px] font-medium leading-[26px] text-white">
                  {title}
                </h2>
                <h2 className="text-[14px] font-normal leading-[22px] text-[#9CA3AF]">
                  {subtitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
