/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

type ActiveProp = {
  active: string;
};

export default function NavigationDots(prop: ActiveProp) {
  return (
    <div className="app__navigation">
      {['home', 'about', 'project', 'experience', 'testimonial', 'contact'].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={prop.active === item ? { backgroundColor: '#313BAC' } : {}}
          />
        )
      )}
    </div>
  );
}
