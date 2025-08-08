type WhatYoullLearnProps = {
  whatYoullLearn:{id:string, icon:string, color:string, text:string}[];
};

export default function WhatYoullLearn({ whatYoullLearn }: WhatYoullLearnProps) {
  return (
    <div className="overflow-hidden mb-6 md:rounded-md md:border">
      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {whatYoullLearn.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-6 h-6 object-contain"
                />
              </div>

              <p className="text-black text-[16px] leading-[24px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
