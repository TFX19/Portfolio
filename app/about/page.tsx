import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../components/client/OnScrollAnim";

export const metadata = {
  title: "About - Tiago Borges",
};

export default function About() {
  return (
    <div className="bg-base-200 min-h-screen">
      <ScrollAnimation>
        <div className="container mx-auto pt-10 p-5 flex flex-col lg:flex-row items-center justify-center">
          <Image
            className="shadow-2xl rounded"
            width={1317}
            height={500}
            src="https://i.imgur.com/EueMJVR.jpeg"
            alt="Tiago Borges"
          />
        </div>
      </ScrollAnimation>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
        <ScrollAnimation>
          <section className="space-y-4 text-center">
            <h2 className="text-lg font-bold text-center">Technologies</h2>
            <ul className="pl-5 text-center">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Vite</li>
              <li>ReactNative</li>
              <li>Expo</li>
              <li>TailwindCSS</li>
              <li>BootstrapCSS</li>
              <li>SQL (PostgreSQL, MySQL)</li>
              <li>UX/UI Design</li>
              <li>FIGMA</li>
              <li>Miro (Brainstorming)</li>
            </ul>
          </section>
        </ScrollAnimation>
        <ScrollAnimation>
          <section>
            <h2 className="stat-title font-bold mt-3">My Journey into Tech</h2>
            <p className="mt-3 text-base">
              It started when{" "}
              <strong>
                I was 13 years old and began creating multimedia content for the
                web,
              </strong>{" "}
              exploring image and video editing. At first, I saw it as a
              hobby—editing for friends just for fun. Eventually, my interest
              grew, and I built my first website using Dreamweaver, as it was
              part of the Adobe suite. I enjoyed exploring this creative field.
              Over time, I realized that web development was much more than I
              had imagined, which{" "}
              <strong>
                led me to enroll in a professional multimedia course
              </strong>{" "}
              where I truly discovered the potential of the web.
            </p>

            <h2 className="stat-title font-bold mt-5">
              Right Now in My Journey
            </h2>
            <p className="mt-3">
              I recently{" "}
              <strong>
                completed my degree in Multimedia Technologies and Design
              </strong>
              , where I learned various work methodologies and explored
              different tools and technologies. This experience helped me
              develop a structured analytical process and critical thinking
              skills, which are essential for problem-solving and making
              informed technical decisions. Additionally, working on group
              projects allowed me to enhance my teamwork, communication, and
              adaptability, as collaborating with colleagues from different
              backgrounds taught me how to share ideas, manage feedback, and
              work towards common goals efficiently.
            </p>

            <p className="mt-5 text-center font-semibold">
              CV available upon request
            </p>
            <Link
              href="mailto:tiagoc.borges02@gmail.com"
              className="mt-5 btn w-full btn-outline"
            >
              Contact
            </Link>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  );
}
