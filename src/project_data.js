import { v4 as uuid } from "uuid";

const projectData = [
  {
    id: uuid(),
    title: "Bulletin Board",
    description:
      "A flexible project/software management app similar to Jira and Trello that utilizes the Agile (both Scrum and Kanban) methodology.",
    stack: ["ReactJS", "React Router", "Bootstrap", "SASS", "Firebase"],
    img: "bulletin_board",
    url: "https://heiinhei911.github.io/bulletin-board/",
  },
  {
    id: uuid(),
    title: "Wordle Clone",
    description:
      "A clone of the popular game Wordle - a game that challenges you to guess a five-letter word in six tries.",
    stack: ["ReactJS", "SASS"],
    img: "wordle_clone",
    url: "https://heiinhei911.github.io/wordle_clone/",
  },
];

export default projectData;
