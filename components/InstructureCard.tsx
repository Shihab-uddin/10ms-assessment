import Link from "next/link";
type InstructorCardProps = {
  name: string;
  image: string;
  description: string;
  hasinspage:boolean;
  slug:string;
};

export default function InstructorCard({ name, image, description, hasinspage, slug }: InstructorCardProps) {
  return (
    <div className="bg-white overflow-hidden mb-6 md:rounded-md md:border">
      <div className="p-5">
        <div className="flex items-center">
          <img src={image} alt={name} className="w-24 h-24 object-cover rounded-full" />
          <div className="ml-4">
            {hasinspage ? (
              <Link href={`/skills/instructors/${slug}`}>
                <h3 className="text-lg font-medium text-gray-900 hover:text-green-600">
                  {name}
                </h3>
              </Link>
            ) : (
              <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            )}
            <div className="mt-4 text-sm text-gray-600">
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
