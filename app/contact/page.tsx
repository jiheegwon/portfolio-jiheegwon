"use client";

import workingpic from "@/images/jihee_working.png";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-24 ">
        <div className="space-y-4">
          <p className="text-lg font-light mb-8  text-gray-600">
            Looking to collaborate on an exciting project? Let&apos;s bring your
            vision to life together! Contact me with your project suggestions
            and let&apos;s explore the possibilities.
          </p>
          <div className="space-y-4 ">
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-primary" />
              <a
                href="mailto:design@jiheegwon.com"
                className="text-base text-gray-700 hover:text-primary"
              >
                design@jiheegwon.com
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-5 w-5 text-primary" />
              <span className="text-base text-gray-700">Kiel, Germany</span>
            </div>
          </div>
        </div>

        <div className="">
          <Image className="w-full" src={workingpic} alt="Contact Me" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
