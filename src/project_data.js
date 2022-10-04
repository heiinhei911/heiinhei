import { v4 as uuid } from "uuid";

const projectData = [
  {
    id: uuid(),
    title: "Video Games REST API",
    description:
      "A REST API containing a collection of video games with authentication built-in.",
    stack: [
      "Python",
      "Django",
      "Django REST",
      "Django REST JWT",
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
      "A word-guessing multiplayer game that challenges players to guess a series of words based on the drawings from other players over multiple rounds.",
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
      "A flexible project/software management app similar to Jira and Trello that utilizes the Agile (both Scrum and Kanban) methodology.",
    stack: ["ReactJS", "React Router", "Bootstrap", "SASS", "Firebase"],
    img: "bulletin_board",
    url: "https://heiinhei911.github.io/bulletin-board/",
  },
];

export default projectData;
