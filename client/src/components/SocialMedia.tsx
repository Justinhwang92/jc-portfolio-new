import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/soonkwon-hwang-22390a178"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Justinhwang92"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/justinhwang92"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}
