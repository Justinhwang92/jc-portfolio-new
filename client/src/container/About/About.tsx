import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { urlFor, client } from '../../client';

// type definition for about data
type AboutType = {
  title: string;
  description: string;
  imgUrl: string;
};

// get image url as string and create

export default function About() {
  // contents for about section
  const [abouts, setAbouts] = useState<AboutType[]>();

  useEffect(() => {
    const query = '*[_type == "abouts"]'; // query for abouts
    client.fetch(query).then((data) => {
      // fetch data from sanity
      setAbouts(data);
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
    </>
  );
}
