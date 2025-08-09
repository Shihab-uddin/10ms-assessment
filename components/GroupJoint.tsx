type GroupJoint = {
  groupJoinfeatures:{background: { image: string }; top_left_icon_img: string; title: string; title_color: string; description: string; description_color: string; cta: { clicked_url: string; text: string }; thumbnail: string;}[];
};

export default function GroupJoint({ groupJoinfeatures }: GroupJoint) {
  return (
    <>
      {groupJoinfeatures.map((feature, index) => (
        <div
          key={index}
          className="overflow-hidden mb-6 md:rounded-md md:border bg-cover bg-center"
          style={{ backgroundImage: `url(${feature.background.image})` }}
        >
          <div className="p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Left Column */}
            <div className="space-y-4">
              <img
                src={feature.top_left_icon_img}
                alt=""
                className="w-[190px] h-[40px] object-contain items-start"
              />
              <h2
                className="text-2xl font-bold"
                style={{ color: feature.title_color }}
              >
                {feature.title}
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: feature.description_color }}
              >
                {feature.description}
              </p>
              <a
                href={feature.cta.clicked_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-md font-medium bg-green-600 border-b-4 border-b-green-700 text-white hover:bg-green-700 transition"
              >
                {feature.cta.text}
              </a>
            </div>

            {/* Right Column */}
            <div className="flex justify-center">
              <img
                src={feature.thumbnail}
                alt=""
                className="max-w-sm w-full rounded-md object-contain"
              />
            </div>

          </div>
        </div>
      ))}
    </>

  );
}
