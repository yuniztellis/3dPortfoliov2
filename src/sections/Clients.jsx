import React from "react";
import { clientReviews } from "../constants";

//motions
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Clients = () => {
  return (
    <section className="c-space my-20 max-w-7xl mx-auto">
      <motion.h3
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 1 }}
        className="head-text"
      >
        Alguns Depoimentos
      </motion.h3>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="client-container"
      >
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div key={id} className="client-review">
            <div>
              <p className="text-white font-light">{review}</p>
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt="name"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {position}
                    </p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="assets/star.png"
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Clients;
