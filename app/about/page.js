import React from "react";

export const metadata = {
    title: "About Us",
    description: "Info about us",
    keywords: ''
  };

const About = () => {
  return (
    <div>
      <h1>Page about us</h1>
      <p>
        The process of running a new Expo project consists of three steps. You
        start by initializing a new project, then start the development server
        with Expo CLI and finally open the app on your device with Expo Go to
        see your changes live.
      </p>
    </div>
  );
};

export default About;
