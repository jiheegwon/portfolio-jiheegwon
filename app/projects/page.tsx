"use client";
import { getProjects } from "@/lib/projects";
import { useMemo } from "react";

import { SwatchIcon } from "@heroicons/react/24/outline";

import { Card } from "@/components/Card";
import Image from "next/image";

const ProjectsOverview = ({}: { params: any }) => {
  const projects = useMemo(() => getProjects(), []);

  return (
    <div className="mx-auto max-w-7xl px-6  sm:px-6 lg:px-8 py-8 ">
      <div className="pb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Projects</h1>
        <p className="text-lg font-light  text-gray-600">
          Throughout my career, I&apos;ve had the opportunity to work on a
          variety of projects - big and small.
          <br />
          Here are just a few that I&apos;m particularly proud of.{" "}
        </p>
      </div>

      <div className="my-16">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" className="" key={project.title}>
              <div className="object-cover relative z-10 flex h-60 w-full rounded items-center justify-center bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.coverImage}
                  alt=""
                  className="object-cover rounded flex h-full w-full"
                />
              </div>
              <h2 className="mt-6 text-lg font-semibold text-zinc-800  group-hover:text-primary-dark dark:text-zinc-100">
                <Card.Link href={`/projects/${project.id}`}>
                  {project.title}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm text-primary-light transition group-hover:text-zinc-500 dark:text-zinc-200">
                {/*  <LinkIcon className="h-6 w-6 flex-none" /> */}
                <SwatchIcon className="w-6 h-6" />
                <span className="ml-2">{project.category}</span>
              </p>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsOverview;
