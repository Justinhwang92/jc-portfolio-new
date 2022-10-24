import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { urlFor, client } from '../../client';
import type { ISkill, IExperience, IWork } from '../../types';
import './Skills.scss';

export default function Skills() {
  const [experiences, setExperiences] = useState<IExperience[]>();
  const [skills, setSkills] = useState<ISkill[]>();

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    // Fetch experience data from Sanity
    client.fetch(experienceQuery).then((data: IExperience[]) => {
      setExperiences(data.sort((a, b) => b.year - a.year));
    });

    // Fetch skill data from Sanity
    client.fetch(skillsQuery).then((data: ISkill[]) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      {/* Skills */}
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill: ISkill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill._id}
            >
              <div className="app__flex" style={{ background: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experiences */}
        <motion.div className="app__skills-exp">
          {experiences?.map((experience: IExperience) => (
            <motion.div className="app__skills-exp-item" key={experience._id}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work: IWork) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip // useful for tooltip
                      data-for={work.name} // useful for tooltip
                      key={work._key}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
