import {ImHtmlFive} from "react-icons/im";
import {SiCss3} from "react-icons/si";
import {SiJavascript} from "react-icons/si";
import {FaPlay} from "react-icons/fa";
import {IoHome} from "react-icons/io5";
export const SidebarData = [
  {
    title: "HELLO",
    path: "/",
    icon: <IoHome style={{position:"absolute",top:"10px",left:"20px"}}/>,
  },
  {
    title: "HTML",
    path: "/html",
    icon: <ImHtmlFive style={{position:"absolute",top:"10px",left:"20px"}}/>,
  },

  {
    title: "CSS",
    path: "/css",
    icon: <SiCss3 style={{position:"absolute",top:"10px",left:"20px"}}/>,
  },

  {
    title: "JS",
    path: "/javascript",
    icon: <SiJavascript style={{position:"absolute",top:"10px",left:"20px"}}/>,
  },
  {
    title: "RUN",
    path: "/output",
    icon: <FaPlay style={{position:"absolute",top:"10px",left:"20px"}}/>,
  },
];
