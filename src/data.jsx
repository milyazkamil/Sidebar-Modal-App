import { HiHome } from 'react-icons/hi'
import { BsFillPeopleFill, BsFillCalendarWeekFill, BsLinkedin, BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFolderOpen } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'

export const links = [
  {
    id: 1,
    url: "/home",
    text: 'Home',
    icon: <HiHome />,
  },
  {
    id: 2,
    url: "/team",
    text: 'Team',
    icon: <BsFillPeopleFill />,
  },
  {
    id: 3,
    url: "/projects",
    text: 'Projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/calendar",
    text: 'Calendar',
    icon: <BsFillCalendarWeekFill />,
  },
  {
    id: 5,
    url: "/documents",
    text: 'Documents',
    icon: <GiNotebook />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <BsTwitter />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/milyazkamil/',
    icon: <BsLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.github.com/milyazkamil/',
    icon: <BsGithub />,
  },
  {
    id: 4,
    url: 'https://www.youtube.com',
    icon: <BsYoutube />,
  },
]