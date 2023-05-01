"use client";

import { getProject } from "@/lib/projects";
import Image from "next/image";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import ResponsiveEmbed from "react-responsive-embed";

const ProjectDetailPage = ({ params }: { params: any }) => {
  const project = useMemo(() => getProject(params.projectId), [params]);

  if (!project) {
    return (
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-8 ">
        404 - Project not found
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-8 ">
      <div className="mb-8">
        <h3 className="text-4xl font-extralight text-secondary mb-4">
          projects/
        </h3>
        <h1 className="text-5xl sm:text-6xl font-medium text-gray-800 mb-12">
          {project.title}
        </h1>

        <p className="text-gray-600 font-light text-lg mb-4">
          {project.description}
        </p>
      </div>

      <div className="mx-auto">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={1500}
          height={1200}
          className="rounded-lg"
        />
      </div>

      {project.discovery && (
        <div className="flex flex-col md:flex-row my-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light text-primary mb-4">
              Discovery &<br></br>Design
            </h2>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <ReactMarkdown className="text-gray-600 font-light mb-4 whitespace-pre-wrap markdown">
              {project.discovery}
            </ReactMarkdown>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row mb-16">
        <div className="md:w-1/2">
          <p className="text-4xl font-light text-primary mb-4">Project for</p>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <p className="text-primary-light text-xl font-light mb-4">
            {project.for} / {project.when}
          </p>
        </div>
      </div>

      {project.videoUrls && (
        <div className="my-16">
          <div className="">
            <h2 className="text-4xl font-light text-primary mb-8">Videos</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 mb-4">
            {project.videoUrls?.map((videoUrl) => (
              <ResponsiveEmbed key={videoUrl} src={videoUrl} allowFullScreen />
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto mb-4">
        {project.fullImage?.map((fullImage) => (
          <Image
            key={fullImage.toString()}
            src={fullImage}
            alt="project image"
            className="rounded-lg"
          />
        ))}
      </div>

      {project.features && (
        <div className="flex flex-col md:flex-row my-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light text-primary mb-4">Features</h2>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <ul className="list-disc list-outside marker:text-primary ml-4">
              {project.features?.map((feature) => (
                <li
                  key={feature}
                  className="text-gray-600 font-light whitespace-pre-wrap"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
        {project.projectImages?.map((projectImage) => (
          <Image
            key={projectImage.toString()}
            src={projectImage}
            alt="project image"
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
