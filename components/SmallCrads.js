import Image from "next/image";

function smallCrads({ image, location, distance }) {
  return (
    <div>
      {/* left */}
      <div className="relative h-16 w-16">
        <Image alt="Explore Image" src={image} layout="fill" />
      </div>
      {/* right */}
    </div>
  );
}

export default smallCrads;
