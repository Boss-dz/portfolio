import Image from "next/image";

export default function Card({ name, job, description, picture }) {
  return (
    <div
      className="flex flex-col items-center justify-start font-mono gap-y-3 mb-4 bg-[#FFE5F1] p-4 w-[400px] h-[400px] rounded-lg 
      shadow-[0_0_15px_5px_rgba(207,148,212,0.7)]"
    >
      {/* Image Container with Fixed Size */}
      <div className="w-26 h-26 flex items-center justify-center">
        <Image
          src={picture}
          alt={name}
          width={80}
          height={80}
          className="rounded-full border-2 border-amber-700 object-cover w-full h-full"
        />
      </div>

      {/* Text Content with Consistent Spacing */}
      <div className="flex flex-col items-center text-center flex-grow w-full">
        <h1 className="text-amber-700 text-2xl font-bold uppercase">{name}</h1>
        <h3 className="text-black text-xl font-bold mb-2">{job}</h3>
        <p className="text-gray-600 flex-grow flex items-center">
          {description}
        </p>
      </div>
    </div>
  );
}
