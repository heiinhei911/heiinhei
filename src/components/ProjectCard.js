import { v4 as uuid } from "uuid";

const ProjectCard = ({ title, description, stack, img, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="btns w-full lg:w-[50rem] my-2 pt-5 pb-1 pc-hover:hover:bg-gray-300 pc-hover:active:bg-stone-300 dark:pc-hover:hover:bg-gray-700 dark:pc-hover:active:bg-stone-600 flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center"
    >
      <img
        src={require(`../assets/images/${img}.jpg`)}
        alt={title}
        className="w-full md:mt-0 max-h-[10rem] md:w-[20rem] md:h-full object-cover rounded"
      />
      <div className="w-full">
        <h4 className="text-xl pt-3 md:px-3 md:py-2 font-medium text-yellow-500">
          {title}
        </h4>
        <p className="pb-1 md:px-3 md:pb-2 text-gray-700 dark:text-neutral-400">
          {description}
        </p>
        <div className="pt-1 md:px-3 md:py-2 font-source text-neutral-500 dark:text-neutral-400 tracking-tight flex flex-row justify-start items-center flex-wrap">
          {stack.map((tech) => (
            <span
              className="px-2 m-1 rounded border bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800"
              key={uuid()}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
export default ProjectCard;
