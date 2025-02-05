import ProjectPage from "../ProjectPage";

export const metadata = {
  title: "Urban Art - Tiago Borges",
  description: "...",
};

export default function work1() {
  return (
    <>
      <ProjectPage
      title="Covilhã Urban Art"
      description="The project aims to develop a web-based solution for browsing and managing urban art in Covilhã, including a website and a BackOffice. The platform will display georeferenced artworks on a map, allowing users to get directions to each piece. QR codes will be placed near the artworks, linking to pages with detailed information. The design will align with WOOLFEST's identity, and a biography of each artist, referencing their works in the city, will be included. Data management will be centralized through an API and BackOffice system."
      images={{
        imageUrl1: "https://i.imgur.com/x1M5LIG.png",
        title1: "img1",
        imageUrl2: "https://i.imgur.com/8JrVIVF.png",
        title2: "img2",
        imageUrl3: "https://i.imgur.com/J8JKKwF.png",
        title3: "img3",
        imageUrl4: "https://i.imgur.com/KeqCMVp.png",
        title4: "img4",
      }}
      technologies={[
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "SQL(PostgreSQL)",
        "BootstrapCSS",
        "Vite",
        "React-google-maps/api",
        "Sequelize",
        "Express",
        "Nodemon"
      ]}
      link="https://arte-urbana-web.vercel.app/"
      code="https://github.com/TFX19/ArteUrbanaWeb"
      descriptiontf="The choice of these technologies balances ease of learning with development efficiency. React with Vite provides a modern and fast approach to building interfaces, while PostgreSQL ensures data integrity and scalability. BootstrapCSS speeds up responsive design, and Sequelize simplifies database interactions. On the backend, Express enables the creation of fast and scalable APIs. This stack was chosen for its accessibility to beginners while offering a solid foundation for robust applications."
      descriptionpe='Like all projects, this one is subject to evolution and improvements, and it will be no exception. Although the application is functioning perfectly, it can be made even more efficient by enhancing the backend. For example, optimizing database queries would allow a single request for all "murals" to also retrieve the associated "artists" and "events." To enable unlimited image access in the web application, the ideal solution would be to create an "images" table linked to the "murals" table.'
    />
    </>
  );
}
