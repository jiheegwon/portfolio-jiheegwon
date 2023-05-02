"use client";

import { getProjects } from "@/lib/projects";
import { SwatchIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const ProjectsOverview = ({}) => {
  const projects = useMemo(() => getProjects(), []);
  //const projects: any[] = [];

  if (!projects) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-8 ">
      <div className="pb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Projects</h1>
        <p className="text-lg font-light  text-gray-600">
          Throughout my career, I&apos;ve had the opportunity to work on a
          variety of projects - big and small.
          <br />
          Here are just a few that I&apos;m particularly proud of.{" "}
        </p>
      </div>

      <div className="my-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="group relative flex flex-col items-start cursor-pointer hover:bg-slate-100 rounded-lg p-6">
                <div className="object-cover relative z-10 flex h-60 w-full rounded items-center justify-center bg-white shadow-md shadow-zinc-800/10">
                  <Image
                    src={project.coverImage}
                    alt=""
                    className="object-cover rounded flex h-full w-full"
                  />
                </div>

                <h2 className="mt-6 text-lg font-semibold text-zinc-800  group-hover:text-primary-dark">
                  <span className="relative z-10">{project.title}</span>
                </h2>
                <p className="relative z-10 mt-2 font-light text-zinc-600">
                  {project.description}
                </p>
                <p className="relative z-10 mt-6 flex text-sm text-primary-light transition group-hover:text-zinc-500">
                  <SwatchIcon className="w-6 h-6" />
                  <span className="ml-2">{project.category}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
