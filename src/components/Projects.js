import ProjectCard from "./ProjectCard";
import projectData from "../project_data";
import { MdKeyboardArrowRight } from "react-icons/md";
import Section from "./Section";

const Projects = ({ projectsRef, style }) => {
  const projects = projectData.map((project) => (
    <li key={project.id}>
      <ProjectCard {...project} />
    </li>
  ));

  return (
    <Section
      id="projects"
      sectionRef={projectsRef}
      style={{ ...style, height: "max-content" }}
      heading="Projects"
      subHeading="They Represent My Learning Journey."
    >
      <ul className="md:flex md:flex-col md:justify-start md:items-center divide-y divide-gray-300 dark:divide-neutral-500 max-w-lg md:max-w-none">
        {projects}
      </ul>
      <div className="btns flex flex-row justify-center items-center text-lg mt-3 md:mt-6">
        <span className="inline-block">
          <MdKeyboardArrowRight size="2rem" />
        </span>
        <a
          href="https://github.com/heiinhei911"
          target="_blank"
          rel="noreferrer"
        >
          Check out my Github for more!
        </a>
      </div>
    </Section>
  );
};
export default Projects;
