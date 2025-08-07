// components/HeroSection.tsx
type HeroSectionProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export default function HeroSection({ title, subtitle, children }: HeroSectionProps) {
  return (
    <div
      className="text-white h-[35vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url('/herobackground.jpeg')`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left: Title + Subtitle */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div
              className="prose max-w-none text-gray-300"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          </div>

          {/* Right: PricingCard or any children */}
          <div className="lg:w-1/3 w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
