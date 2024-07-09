import { v4 as uuid } from "uuid";

const projectData = [
  {
    id: uuid(),
    title: "Job Scraper",
    description:
      "A REST API containing a collection of video games with authentication built-in",
    stack: ["Python", "Beautiful Soup", "Selenium", "SQL Server"],
    img: "video_games",
    url: "https://github.com/heiinhei911/games-restapi/",
  },
  {
    id: uuid(),
    title: "Video Games REST API",
    description:
      "A REST API containing a collection of video games with authentication built-in",
    stack: [
      "Python",
      "Django",
      "Django REST",
      "Django REST Simple JWT",
      "PostgreSQL",
      "Docker",
      "Azure",
    ],
    img: "video_games",
    url: "https://github.com/heiinhei911/games-restapi/",
  },
  {
    id: uuid(),
    title: "Guess What",
    description:
      "A word-guessing multiplayer game that challenges players to guess a series of words based on the drawings from other players over multiple rounds",
    stack: [
      "ReactJS",
      "TypeScript",
      "SASS Modules",
      "Socket.io",
      "NodeJS",
      "Express",
      "MongoDB",
    ],
    img: "guesswhat_drawing",
    url: "https://github.com/heiinhei911/guesswhat-drawing/",
  },
  {
    id: uuid(),
    title: "Bulletin Board",
    description:
      "An Agile Kanban project/software management app designed to help visualize tasks and track issues that arise throughout different stages of the Software Development Life Cycle and quality assurance",
    stack: ["ReactJS", "React Router", "Bootstrap", "SASS", "Firebase"],
    img: "bulletin_board",
    url: "https://heiinhei911.github.io/bulletin-board/",
  },
];

export default projectData;
