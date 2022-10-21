import React from 'react';
import { motion } from 'framer-motion';

type MotionWrapProps = {
  component: React.FC;
  classNames: string;
};

export default function MotionWrap(props: MotionWrapProps) {
  const { component: Component, classNames } = props;
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames} app__flex`}
    >
      <Component />
    </motion.div>
  );
}
