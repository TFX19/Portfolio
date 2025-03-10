import Image from "next/image";
import Link from "next/link";
import Card from "@/app/components/ui/Card";
import MotionWrapper from "./components/client/MotionWrapper";
import Typewriter from "./components/client/TypeWritter";
import ButtonToSection from "./components/client/ButtonToSection";
import ScrollAnimation from "./components/client/OnScrollAnim";

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="https://i.imgur.com/Iv5KVf0.gif"
            className="max-w-sm rounded-lg shadow-2xl"
            width={325}
            height={325}
            alt="programmer"
          />
          <div className="p-10">
            <h1 className="text-5xl font-bold"><Typewriter text="Hi I&apos;m Tiago! | Frontend developer" /></h1>
            <p className="py-6">
            Web enthusiast on a mission to craft beautiful designs and explore 🚀.<br></br>
            Forever curious, always learning, and undeniably a fan of orange cats 🐱!
            </p>
            <ButtonToSection targetId="target-section" label="Explore My Work" />
          </div>
        </div>
      </div>

      <div id="target-section" className=" bg-indigo-400 content-center min-h-screen flex items-center justify-center">
        <div className=" mt-10 block">
        <ScrollAnimation> 
          <MotionWrapper>
            <Card
              imageUrl="https://i.imgur.com/g4VrSag.jpeg"
              title="Covilhã Urban Art"
              subtitle="Full Stack Developer (Internship project)"
              description="The project aims to develop a web-based solution for browsing and managing urban art in Covilhã, including a website and a BackOffice. The platform will display georeferenced artworks on a map, allowing users to get directions to each piece. QR codes will be placed near the artworks, linking to pages with detailed information. The design will align with WOOLFEST&apos;s identity, and a biography of each artist, referencing their works in the city, will be included. Data management will be centralized through an API and BackOffice system."
              buttonLink="/work/1"
              badges={["React.js", "Vite", "BootstrapCSS"]}
            />
          </MotionWrapper>
          </ScrollAnimation> 
          <ScrollAnimation> 
          <MotionWrapper>
            <Card
              imageUrl="https://i.imgur.com/MGYtBrr.jpeg"
              title="My Green Point"
              subtitle="Full Stack Developer (School project)"
              description="This project aims to develop a platform that facilitates tourist visits, promotes communication between visitors and local agents, and encourages sustainability."
              buttonLink="/work/2"
              badges={["React.js", "Vite", "BootstrapCSS"]}
            />
          </MotionWrapper>
          </ScrollAnimation> 
          <ScrollAnimation> 
          <MotionWrapper>
            <Card
              imageUrl="https://i.imgur.com/JzHORU5.jpeg"
              title="Nearby App"
              subtitle="Front End (Rocketseat project)"
              description="The project is a mobile application for a benefits club with coupons to use at nearby establishments. This is a project from the NLW Pocket Mobile event, one of the content offerings available to Rocketseat students."
              buttonLink="/work/3"
              badges={["ReactNative", "TypeScript", "Expo"]}
            />
          </MotionWrapper>
          </ScrollAnimation> 
          <div className="p-5 mb-5 text-center">
            <p>
              Checkout my &nbsp;
              <Link
                className=" bg-indigo-800 text-stone-50 underline"
                href="https://github.com/TFX19"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </Link>
              &nbsp;and see other projects
            </p>
          </div>
        </div>
    
      </div>
    </>
  );
}
