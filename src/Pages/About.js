import React from "react";
import Work from "../Components/Work";
import { personalDetails, experiences } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Experience
        </h1>
        {React.Children.toArray(
          experiences.map(({ title, company, location, type, period, achievements }) => (
            <Work
              position={title}
              company={company}
              location={location}
              type={type}
              duration={period}
              achievements={achievements}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;