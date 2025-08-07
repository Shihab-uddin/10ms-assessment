// components/InstructorCard.tsx
type InstructorCardProps = {
  name: string;
  image: string;
  bio: string;
};

export default function InstructorCard({ name, image, bio }: InstructorCardProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
      <div className="p-6">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-24 h-24 object-cover rounded-full" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <div className="mt-4 text-sm text-gray-600">
              <p>{bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
