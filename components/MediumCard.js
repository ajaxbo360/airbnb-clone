import Image from "next/image";

function MediumCard({ title, img }) {
  return (
    <div>
      <div className="relative h-80 w-80 cursor-pointer hover:scale-105 transition-transform duration-300">
        <Image
          src={img}
          alt="image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;

// src = { image };
