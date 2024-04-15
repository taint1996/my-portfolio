/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
// icons
import { FaFigma, FaJenkins, FaNodeJs, FaVuejs } from 'react-icons/fa';

import {
  SiRuby,
  SiSkype,
  SiSlack,
  SiMicrosoftteams,
  SiBootstrap,
  SiNodemon,
  SiJsonwebtokens,
  SiSharp,
  SiLinux,
  SiWindows,
  SiPostgresql,
  SiMysql,
  SiVisualstudiocode,
  SiCircleci,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiRubyonrails,
  SiSemanticuireact,
  SiMui,
  SiReactrouter,
  SiReactquery,
  SiGraphql,
  SiApollographql
} from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      { title: 'OS', icons: [<SiLinux />, <SiWindows />] },
      {
        title: 'Backend - NodeJS Developer',
        icons: [<FaNodeJs />, <SiNodemon />, <SiJsonwebtokens />, <SiSharp />]
      },
      {
        title: 'Frontend Developer',
        icons: [<FaVuejs />, <SiReact />, <SiReacthookform />, <SiRedux />]
      },
      {
        title: 'Framework',
        icons: [
          <SiMui />,
          <SiBootstrap />,
          <SiSemanticuireact />,
          <SiReactrouter />,
          <SiReactquery />,
          <SiGraphql />,
          <SiApollographql />
        ]
      },
      {
        title: 'RubyonRails Developer',
        icons: [<SiRuby />, <SiRubyonrails />]
      },
      {
        title: 'Database',
        icons: [<SiPostgresql />, <SiMysql />]
      },
      {
        title: 'CI/CD Used',
        icons: [<FaJenkins />, <SiCircleci />]
      },
      {
        title: 'Tools',
        icons: [<FaFigma />, <SiSkype />, <SiSlack />, <SiMicrosoftteams />]
      },
      {
        title: 'Others',
        icons: [<SiVisualstudiocode />]
      }
    ]
  },
  {
    title: 'Certifications',
    info: [
      {
        title: 'Udacity: Fullstack Javascript Developer',
        stage: '08/2022 - 12/2022'
      },
      {
        title: 'Udacity: SQL',
        stage: '04/2023 - 7/2023'
      },
      {
        title: 'Udacity: React',
        stage: '12-2023 - 3/2024'
      },
      {
        title: 'PROFESSIONAL SCRUM MASTER™ I (PSMI)',
        stage: '12/2023'
      }
    ]
  },
  {
    title: 'experience',
    info: [
      {
        title: 'FPT Software',
        stage: '11/2020 - Until now'
      },
      {
        title: 'BUYMED Company',
        stage: '5/2019 - 8/2020'
      },
      {
        title: 'LARION Company',
        stage: '11/2017 - 3/2019'
      }
    ]
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Bachelor’s degree – University of Natural Sciences',
        stage: '2014-2017'
      }
    ]
  }
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn('right', 0.2)}
        initial={'hidden'}
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[470px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial={'hidden'}
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivatting <span className="text-accent">stories</span> birth
            magnificent website.
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial={'hidden'}
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Due to the unique nature of each project, I adapt and utilize a
            diverse range of technologies to best meet its requirements. I can
            work with front-end, and back-end (Such as RoR, NodeJS, ReactJS,
            Angular JS, PostgreSQL, HTML5, SCSS, Bootstrap. The primary
            technologies I specialize in for development are Ruby, NodeJS, and
            React
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial={'hidden'}
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-xl-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/*  projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* awards
							<div className="relative flex-1">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={2} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									Winning awards
								</div>
							</div> */}
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial={'hidden'}
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }
									cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {/* <div className="hidden md:flex"></div> */}
                  <div>{item.stage ? `(${item.stage})` : ''}</div>
                  {/* items */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div className="text-2xl text-white" key={iconIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
