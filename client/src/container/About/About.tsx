import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants';

export default function About() {
  // contents for about section
  const abouts = [
    {
      title: 'Web development',
      description: 'I am a web developer',
      imgUrl: images.about01,
    },
    {
      title: 'Frontend',
      description: 'I am a web developer',
      imgUrl: images.about02,
    },
    {
      title: 'Backend',
      description: 'I am a web developer',
      imgUrl: images.about03,
    },
    {
      title: 'MERN Stack',
      description: 'I am a web developer',
      imgUrl: images.about04,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>
      {/* Mapping over the about content */}
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
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
