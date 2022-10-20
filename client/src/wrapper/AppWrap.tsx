import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

type AppWrapProps = {
  component: React.FC;
  idName: string;
  classNames?: string;
};

export default function AppWrap(props: AppWrapProps) {
  const { component: Component, idName, classNames } = props;

  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@{new Date().getFullYear()} JustinCoding</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
}
