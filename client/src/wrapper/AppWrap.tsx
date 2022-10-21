import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import MotionWrap from './MotionWrap';

type AppWrapProps = {
  component: React.FC;
  idName: string;
  bgClassName: string;
  motionClassNames: string;
};

export default function AppWrap(props: AppWrapProps) {
  const { component: Component, idName, bgClassName, motionClassNames } = props;

  return (
    <div id={idName} className={`app__container ${bgClassName}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        {idName === 'home' ? (
          <Component />
        ) : (
          <MotionWrap component={Component} classNames={motionClassNames} />
        )}

        <div className="copyright">
          <p className="p-text">@{new Date().getFullYear()} JustinCoding</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
}
