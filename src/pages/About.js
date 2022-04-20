import React from "react";

const About = () => {
  return (
    <div className="mainArea about" style={{ minHeight: "100vh" }}>
      <p> The website is for searching the movie information using OMDB.</p>
      <p>
        {" "}
        Please type for the movie title for the movie information in Home page{" "}
      </p>
      <p>
        Search for 10 results at one time. If there are more results in OMDB,
        there would be a load more button, pressing that could shows 10 more
        results each time
      </p>
    </div>
  );
};

export default About;
