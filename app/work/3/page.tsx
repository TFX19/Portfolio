import ProjectPage from "../ProjectPage";

export const metadata = {
  title: "Nearby App - Tiago Borges",
  description: "...",
};

export default function work1() {
  return (
    <>
      <ProjectPage
      title="Nearby App"
      description="The project is a mobile application for a benefits club with coupons to use at nearby establishments.
      The tech stack for this project was chosen based on the available options within the Rocketseat NLW Pocket Mobile event. I had the choice between Swift, Kotlin, and React Native, with those selecting React Native required to use the Expo Framework for development."
      images={{
        imageUrl1: "https://i.imgur.com/wR5SXri.jpeg",
        title1: "img1",
        imageUrl2: "https://i.imgur.com/ctrzTTY.jpeg",
        title2: "img2",
        imageUrl3: "https://i.imgur.com/tPIhhaj.jpeg",
        title3: "img3",
        imageUrl4: "https://i.imgur.com/RgOFgPW.gif",
        title4: "img4",
      }}
      technologies={[
        "React Native",
        "TypeScript",
        "Expo Framework",
        "Styling with StyleSheet",
        "ExpoRouter",
        "Consuming a Nodejs API",
        "QR Code scanning with the camera",
        "Map render."
      ]}
      link=""
      code="https://github.com/TFX19/nlw-pocket-mobile2024"
      descriptiontf="I opted for React Native due to its cross-platform capabilities and seamless integration with web technologies I was already familiar with. Additionally, React Native aligns well with modern mobile development trends and allows for a faster development cycle.
      The app is built with React Native and TypeScript, ensuring scalability and maintainability. Expo simplifies setup and development, while StyleSheet provides a structured design. Expo Router manages navigation, and the app interacts with a Node.js API provided by the event to fetch and manage data in real time. Additional features include QR code scanning for quick access to benefits and map rendering to help users locate partner establishments.
      "
      descriptionpe="Implementing user authentication would enhance the app by enabling personalized profiles and secure access. Currently, the app uses a static location near the available establishments since the provided API only includes places from a specific area. A future improvement would be implementing dynamic geolocation, allowing users to see their real-time position and receive more relevant suggestions based on their actual location."
    />
    </>
  );
}
