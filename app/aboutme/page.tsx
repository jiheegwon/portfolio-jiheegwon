"use client";

import Feeds from "@/components/ui/Feeds";
import profilepic from "@/images/jihee-profile-pic.jpg";
import {
  AcademicCapIcon,
  BeakerIcon,
  CheckBadgeIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const feedTimeline = [
  {
    id: 1,
    content:
      "Information designer in data visualization and UX/UI design in healthcare,",
    target: "Germany",
    date: "2016 - ",
    icon: BeakerIcon,
    iconBackground: "bg-secondary",
  },
  {
    id: 2,
    content:
      "Holds BA and MA degrees in Interactive Information Design from Muthesius Academy of Fine Arts,",
    target: "Germany",
    date: "2016 - 2020",
    icon: AcademicCapIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 3,
    content: "Junior international business manager in life science company,",
    target: "Republic of Korea",
    date: "2012 - 2014",
    icon: GlobeAsiaAustraliaIcon,
    iconBackground: "bg-secondary",
  },
  {
    id: 4,
    content: "Licensed pharmacist,",
    target: "Republic of Korea",
    date: "2012 - ",
    icon: CheckBadgeIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 5,
    content: "Holds a BA degree in pharmacy from Ewha Womans University,",
    target: "Republic of Korea",
    date: "2008 - 2012",
    icon: AcademicCapIcon,
    iconBackground: "bg-primary",
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
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-8 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">About me</h1>
      <div className="relative overflow-hidden flex flex-wrap justify-center items-center bg-gradient-to-r from-primary/30 from-0%  via-primary-light/10 via-30%  to-primary-light/5 to-80% backdrop-blur-lg  drop-shadow-xl rounded-full p-2">
        <div className="flex-none">
          <Image
            className="w-52 h-52 object-cover rounded-full"
            src={profilepic}
            alt="Jihee's profile picture"
            width={800}
          />
        </div>
        <div className="flex-1 sm:pl-8 sm:pr-16 sm:py-0 px-8 pb-11 pt-4 sm:pb-0">
          <p className="text-xl leading-8 text-primary-dark font- text-center sm:text-left">
            Hi, I&apos;m Jihee, <br />
            an information designer based in Germany with a unique background in
            pharmacy. By combining my expertise in healthcare and design, I
            craft innovative design solutions for eHealth.
          </p>
        </div>
        {/* <Image
          className="w-max h-max"
          src={workingpic}
          alt="Jihee is working"
        /> */}
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] rota ">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              Copy code
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0F3CBF" />
                <stop offset="0.3" stopColor="#70A9FF" />
                <stop offset="0.6" stopColor="#C6DCFF" />
                <stop offset="0.8" stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#FF5733" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-24 my-20 ">
        <div className="space-y-4">
          <p className="font-light text-gray-600 leading-7">
            Since 2016, I have been working as a designer, continuously refining
            my skills in health data visualization and UX/UI design for
            healthcare apps and webs in Germany. I have a solid foundation in
            both design and science, which I believe is essential to crafting
            effective designs for the healthcare industry.
            <br /> <br />
            My focus is on improving healthcare communication through effective
            information design. With a passion for data visualization and a
            belief that visualizing complex health information can lead to
            better patient outcomes, I approach each project with a goal of
            creating compelling, user-friendly designs that empower patients and
            providers alike. My ultimate goal is to make a positive impact on
            the healthcare through innovative design solutions. Let&apos;s
            collaborate together to bring your eHealth project to life with
            cutting-edge design solutions!
          </p>
        </div>

        <div className="">
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
