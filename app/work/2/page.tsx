import ProjectPage from "../ProjectPage";

export const metadata = {
  title: "MyGreenPoint - Tiago Borges",
  description: "...",
};

export default function work1() {
  return (
    <>
      <ProjectPage
      title="My Green Point"
      description="This project aims to develop a platform that facilitates tourist visits, promotes communication between visitors and local agents, and encourages sustainability. The website is designed to promote the mobile application, while the Backoffice enables its management, allowing for control over its features and content. For students, the goal is to acquire soft skills such as communication and critical thinking, as well as project management skills, including planning, research, development, and evaluation."
      images={{
        imageUrl1: "https://i.imgur.com/eXVLXxJ.png",
        title1: "img1",
        imageUrl2: "https://i.imgur.com/yP7vj9G.png",
        title2: "img2",
        imageUrl3: "https://i.imgur.com/uaPmKpq.png",
        title3: "img3",
        imageUrl4: "https://i.imgur.com/0UaQt97.png",
        title4: "img4",
      }}
      technologies={[
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "BootstrapCSS",
        "SQL(PostgreSQL)",
        "Vite",
        "Sequelize",
        "Express",
        "Nodemon",
        "Kotlin"
      ]}
      link=""
      code="https://github.com/TFX19/Projeto_Integrado_IV"
      descriptiontf="The selection of the tech stack was primarily influenced by my undergraduate coursework. Since these technologies were part of the curriculum, using them in our project reinforced our learning and ensured compliance with academic requirements. 
      React was chosen for the frontend due to its modular architecture, while BootstrapCSS ensured a responsive UI. Vite was selected for its fast development experience. On the backend, Express provided a lightweight framework for handling HTTP requests, while Sequelize facilitated database interactions. Nodemon improved workflow efficiency by enabling automatic server restarts. PostgreSQL was selected as the relational database management system due to its robustness and scalability. Since SQL concepts were extensively covered in our coursework, using PostgreSQL allowed us to apply database design, querying, and optimization techniques effectively.
      Additionally, Kotlin was included as a requirement, ensuring compatibility with modern backend and mobile development practices, allowing us to leverage its strong type safety and interoperability features.
      "
      descriptionpe="The database needed adjustments to simplify its use, such as correcting the relationship between voucher and client, which should be 1:N instead of N:N. In the Backoffice, although the login was created, it was not implemented, making development more difficult. This prevented the tourist agent from creating visits, as their data was not received in the session. In the mobile application, the main improvement needed was the QR code scanning feature, which still does not send data to the database."
    />
    </>
  );
}
