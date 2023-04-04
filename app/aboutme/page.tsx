"use client";

import Feeds from "@/components/ui/Feeds";
import profilepic from "@/image/jihee-profile-pic.jpg";
import workingpic from "@/image/jihee_working.png";
import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAsiaAustraliaIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const feedTimeline = [
  {
    id: 1,
    content:
      "Information designer in data visualization and UX/UI design in healthcare,",
    target: "Germany",
    date: "2016 - ",
    icon: UserIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 2,
    content: "Holds BA and MA degrees in Interactive Information Design from",
    target: "Muthesius Academy of Fine Arts, Germany",
    date: "2016 - 2020",
    icon: AcademicCapIcon,
    iconBackground: "bg-secondary",
  },
  {
    id: 3,
    content: "Junior international business manager in life science company,",
    target: "Republic of Korea",
    date: "2012 - 2014",
    icon: GlobeAsiaAustraliaIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 4,
    content: "Licensed pharmacist,",
    target: "Republic of Korea",
    date: "2012 - ",
    icon: CheckBadgeIcon,
    iconBackground: "bg-secondary",
  },
  {
    id: 5,
    content: "Holds a BA degree in pharmacy from",
    target: "Ewha Womans University, Republic of Korea",
    date: "2008 - 2012",
    icon: AcademicCapIcon,
    iconBackground: "bg-secondary",
  },

  // {
  //   id: 6,
  //   content:
  //     "Served as General Secretary of The Korean Scientists and Engineers Association in",
  //   target: "Germany",
  //   date: "2019 - 2020",
  //   icon: UserIcon,
  //   iconBackground: "bg-secondary-dark",
  // },
];

const AboutMePage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">About Me</h1>
      <div className="flex justify-center">
        {/* <Image
            className="w-80 h-80 object-cover rounded-full  bg-primary "
            src={profilepic}
            alt="Jihee's profile picture"
          /> */}
        <Image
          className="w-max h-max"
          src={workingpic}
          alt="Jihee is working"
        />
      </div>

      <div className="grid grid-cols-2 gap-24">
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Hi, I&apos;m Jihee, an information designer with a unique background
            in pharmacy. I leverage my experience in healthcare and design to
            create innovative design solutions for eHealth.
          </p>
          <p className="text-lg text-gray-700">
            Since 2016, I have been working as a designer, continuously refining
            my skills in health data visualization and UX/UI design for
            healthcare apps and webs in Germany. I have a solid foundation in
            both design and science, which I believe is essential to crafting
            effective designs for the healthcare industry. My focus is on
            improving healthcare communication through effective information
            design. With a passion for data visualization and a belief that
            visualizing complex health information can lead to better patient
            outcomes, I approach each project with a goal of creating
            compelling, user-friendly designs that empower patients and
            providers alike. My ultimate goal is to use design as a tool to
            positively impact the healthcare industry. Let&apos;s work together
            to bring your eHealth project to life with cutting-edge design
            solutions!
          </p>
        </div>

        <div className="py-8">
          <Feeds timeline={feedTimeline} />
        </div>
      </div>
      <div className="flex justify-center">
        {/* <Image
            className="w-80 h-80 object-cover rounded-full  bg-primary "
            src={profilepic}
            alt="Jihee's profile picture"
          /> */}
      </div>
    </div>
  );
};

export default AboutMePage;
