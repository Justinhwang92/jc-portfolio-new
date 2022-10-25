import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { urlFor, client } from '../../client';
import type { ITestimonial, IBrand } from '../../types';
import './Testimonial.scss';

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>();
  const [brands, setBrands] = useState<IBrand[]>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    // Fetch testimonials data from Sanity
    client.fetch(testimonialsQuery).then((data: ITestimonial[]) => {
      setTestimonials(data);
    });

    // Fetch brands data from Sanity
    client.fetch(brandsQuery).then((data: IBrand[]) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials?.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(testimonials[currentIndex].imgurl).url()}
              alt="testimonals"
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          {/* Testimonial buttons */}
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* brand logos */}
      <div className="app__testimonial-brands app__flex">
        {brands?.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
