import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About - Tiago Borges",
  description: "...",
};

export default function About() {
  return (
    <div className=" bg-base-200 min-h-screen">
      <div className="pt-10 p-5 items-center flex-col lg:flex-row">
        <Image
          className="place-self-center shadow-2xl"
          width={1317}
          height={500}
          src="https://i.imgur.com/jKDBeMk.jpeg"
          alt="me"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
        <div className="p-10 space-y-4">
          <h2 className="text-lg font-bold">Technologies</h2>
          <ul className="list-disc pl-5">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>ReactNative</li>
            <li>NextJS</li>
            <li>Vite</li>
            <li>TailwindCSS</li>
            <li>BootstrapCSS</li>
            <li>SQL (PostgreSQL, MySQL)</li>
            <li>UX/UI Design</li>
            <li>FIGMA</li>
          </ul>
        </div>

        <div className="p-10 col-span-1 lg:col-span-1">
          <p className="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <br></br>
          <p>resume available upon request</p>
          <Link href="mailto:tiagoc.borges02@gmail.com" className="mt-5 btn btn-outline">Contact</Link>
        </div>
      </div>
    </div>
  );
}
