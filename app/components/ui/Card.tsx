import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  subtitle:string;
  description: string;
  buttonLink: string; 
}

const Card: React.FC<CardProps> = ({ imageUrl, title, subtitle, description, buttonLink }) => {

  const wordLimit = 22; 
  const truncatedDescription =
    description.split(" ").length > wordLimit
      ? description.split(" ").slice(0, wordLimit).join(" ") + "..."
      : description;

  return (
    <div className="card mb-10 lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image src={imageUrl} width={400} height={400} alt={title} />
      </figure>
      <div className="card-body">
        <h1 className="card-title">Project:<b>{title}</b></h1>
        <h3 className="font-semibold">{subtitle}</h3>
        <p className="mt-5 w-80">{truncatedDescription}</p>
        <div className="card-actions justify-end mt-5">
            <Link className="btn btn-primary" href={buttonLink}>Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

