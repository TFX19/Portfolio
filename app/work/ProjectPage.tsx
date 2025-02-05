import React from "react";
import Carousel from "@/app/components/ui/Caroussel";
import { Globe, Code, Languages } from "lucide-react";
import Link from "next/link";
import ShowList from "@/app/components/client/ShowList";

interface ProjectPageProps {
  title: string;
  description: string;
  descriptiontf: string;
  descriptionpe:string;
  images: {
    imageUrl1: string;
    title1: string;
    imageUrl2: string;
    title2: string;
    imageUrl3: string;
    title3: string;
    imageUrl4: string;
    title4: string;
  };
  technologies: string[];
  link: string;
  code: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  description,
  descriptiontf,
  descriptionpe,
  images,
  link,
  technologies,
  code,
}) => {
  return (
    <div className="p-5 py-10 lg:px-40 lg:py-20 bg-base-200 min-h-screen">
      <div className="items-center flex-col lg:flex-row">
        <h1 className="text-xl mb-5">Project: <b>{title}</b></h1>
        <Carousel
          imageUrl1={images.imageUrl1}
          title1={images.title1}
          imageUrl2={images.imageUrl2}
          title2={images.title2}
          imageUrl3={images.imageUrl3}
          title3={images.title3}
          imageUrl4={images.imageUrl4}
          title4={images.title4}
        />
        <h2 className="text-xl font-bold mt-10">Project Objective</h2>
        <p className="mt-5 lg:text-lg">{description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Technologies</h2>

          <ShowList technologies={technologies} />
        </div>
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center">
            <Globe className="mr-2" />
            {link ? (
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <span className="text-base text-green-500">Online</span>
              </Link>
            ) : (
              <span className="text-base text-red-500">Offline</span>
            )}
          </div>
          <div className="flex items-center mt-5">
            <Code className="mr-2" />
            <Link className="underline underline-offset-4 text-indigo-500" href={code} target="_blank" rel="noopener noreferrer">
              Code
            </Link>
          </div>
          <div className="flex items-center mt-5">
            <Languages className="mr-2" />
           <span>Portuguese</span>
          </div>
        </div>
      </div>
      <div className="items-center flex-col lg:flex-row">
        <h2 className="text-xl font-bold mt-10">Tech Stack & Functionalities</h2>
        <p className="mt-5 lg:text-lg break-normal">{descriptiontf}</p>
        <h2 className="text-xl font-bold mt-10">Potential Enhancements</h2>
        <p className="mt-5 lg:text-lg">{descriptionpe}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
