import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import type { IProject } from '../../types';
import './Work.scss';

export default function Work() {
  const [works, setWorks] = useState<IProject[]>();
  const [filterWork, setFilterWork] = useState<IProject[]>();
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]'; // works is the name of the collection in Sanity

    // Fetch data from Sanity
    client.fetch(query).then((data: IProject[]) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      // Filter the data
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(
          works?.filter((work: IProject) => work.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      {/* Title */}
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      {/* Tags mapping */}
      <div className="app__work-filter">
        {[
          'Web App',
          'NestJS',
          'ReactJS',
          'Testing library',
          'PWA',
          'NPM',
          'Lisp',
          'AI',
          'All',
        ].map((item: string, index: number) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      {/* Project card */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork?.map((work: IProject, index: number) => (
          <div className="app__work-item app__flex" key={work._id}>
            <div className="app__work-img app__flex">
              {/* Project image */}
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {/* Demo link */}
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                {/* Github link */}
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            {/* Below project image */}
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}
