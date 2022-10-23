import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { urlFor, client } from '../../client';

// type definition for about and education data
type AboutType = {
  title: string;
  description: string;
  imgUrl: string;
};

type EducationType = {
  title: string;
  year: string;
  description: string;
  imgUrl: string;
};

// get image url as string and create

export default function About() {
  // contents for about section
  const [abouts, setAbouts] = useState<AboutType[]>();
  // contents for education section
  const [educations, setEducations] = useState<EducationType[]>();

  useEffect(() => {
    const aboutQuery = '*[_type == "abouts"]'; // query for about section
    const educationQuery = '*[_type == "educations"]'; // query for education section

    client.fetch(aboutQuery).then((data) => {
      // fetch data from sanity
      setAbouts(data);
    });

    client.fetch(educationQuery).then((data) => {
      // fetch data from sanity
      setEducations(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>
      {/* Mapping over the about content */}
      <div className="app__profiles">
        {abouts?.map((about: AboutType, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      {/* Education */}
      <h2 className="head-text">
        Education for <span>Computer Science</span>
      </h2>
      {/* Mapping over the Education content */}
      <div className="app__profiles">
        {educations?.map((education: EducationType, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={education.title + index}
          >
            <img src={urlFor(education.imgUrl)} alt={education.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {education.title}
            </h2>
            <p className="p-text" style={{ marginTop: 3 }}>
              {education.year}
            </p>
            <p className="p-text" style={{ marginTop: 5 }}>
              {education.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
