import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  buttonLink: string;
  badges?: string[];
}

const Card: React.FC<CardProps> = ({ imageUrl, title, subtitle, description, buttonLink, badges = [] }) => {
  const wordLimit = 22;
  const truncatedDescription =
    description.split(" ").length > wordLimit
      ? description.split(" ").slice(0, wordLimit).join(" ") + "..."
      : description;

  return (
    <div className="card mb-10 lg:card-side bg-base-100 shadow-xl w-96 lg:w-auto">
      <figure>
        <Image src={imageUrl} width={400} height={400} alt={title} />
      </figure>
      <div className="card-body">
        <h1 className="card-title">
          Project: <b>{title}</b>
        </h1>
        <h3 className="font-semibold">{subtitle}</h3>
        <p className="mt-3 w-96">{truncatedDescription}</p>

        <div className="flex items-center justify-between mt-3 gap-2">
          <div className="flex flex-wrap gap-1">
            {badges.map((badge, index) => (
              <span key={index} className="badge badge-outline">{badge}</span>
            ))}
          </div>

          <Link className="btn btn-primary" href={buttonLink}>
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;