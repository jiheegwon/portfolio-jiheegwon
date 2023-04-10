import { projects } from "@/data/projects";

export function getProject(projectId: string) {
  // find the project with the right projectId
  return projects.find((p) => p.id === projectId);
}

export function getProjects() {
  return projects;
}
