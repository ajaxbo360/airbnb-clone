import Image from "next/image";

function SmallCrads({ image, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 font-medium rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image
          alt="Explore Image"
          src={image}
          layout="fill"
          className="rounded-lg"
        />
      </div>
      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCrads;
