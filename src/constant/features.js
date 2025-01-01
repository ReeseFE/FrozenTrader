import { AiFillPieChart, AiOutlineTeam } from "react-icons/ai";
import { BsBarChartFill, BsServer } from "react-icons/bs";
import { GrOrganization } from "react-icons/gr";
import { GiLockSpy } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";

export const features = [
  {
    heading: "Amazing Analytics you will never ever use.",
    description:
      "Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.",
    icon: <AiFillPieChart className="text-primary h-4 w-4 relative z-50" />,
  },
  {
    heading: "Charts, graphs and everything at your fingertips",
    description:
      "Bar graphs, Pie Charts, Line graphs, Area graphs, you name it. We have it. And if we don't, we will add it.",
    icon: <BsBarChartFill className="text-primary h-4 w-4 relative z-50" />,
  },
  {
    heading: "Create teams. Invite your friends and families.",
    description:
      "Creation of teams is a breeze. Invite your friends to Foxtrot Analytics so that they can bang their head against a pie chart.",
    icon: <AiOutlineTeam className="text-primary h-4 w-4 relative z-50" />,
  },
  {
    heading: "Self host your analytics. Own your mistakes",
    description:
      "With Foxtrot Analytics, you can self host incase you don't wish to pay us or see us grow to a billion dollar company.",
    icon: <BsServer className="text-primary h-4 w-4 relative z-50" />,
  },
  {
    heading: "We don't track you. We don't sell your data.",
    description:
      "Lol. We don't even have a database. We are just a bunch of guys who are trying to make a living. wink wink.",
    icon: <GiLockSpy className="text-primary h-4 w-4 relative z-50" />,
  },
  {
    heading: "Lastly, we have support for dark mode. Yay!",
    description:
      "Dark mode is as necessary to a developer as a cup of coffee. We have both. We won't give you coffee though.",
    icon: <MdDarkMode className="text-primary h-4 w-4 relative z-50" />,
  },
];
