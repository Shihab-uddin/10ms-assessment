// components/HeroSection.tsx
type HeroSectionProps = {
  title: string;
  subtitle: string;
};

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <div className=" text-white py-12 h-[30vh]" style={{
        backgroundImage: `url('/herobackground.jpeg')`,
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-2 text-blue-100">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
