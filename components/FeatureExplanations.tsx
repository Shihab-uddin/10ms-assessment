type FeatureExplanationItem = {
  id: string;
  title: string;
  checklist: string[];
  file_url: string;
  file_type: string;
};

type FeatureExplanationsProps = {
  features: FeatureExplanationItem[];
};

export default function FeatureExplanations({ features }: FeatureExplanationsProps) {
  return (
    <div className="overflow-hidden mb-6 md:rounded-md md:border p-6 space-y-12">
      {features.map(({ id, title, checklist, file_url }) => (
        <div key={id} className="grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center">
          {/* Left Column */}
          <div>
            <h3 className="text-black text-xl font-semibold mb-4">{title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {checklist.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <img
              src={file_url}
              alt={title}
              className="max-w-[217px] h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
