import { classes } from 'utils/style';
import styles from './Icon.module.css';
import ArrowLeft from './svg/arrow-left.svg';
import ArrowRight from './svg/arrow-right.svg';
import Check from './svg/check.svg';
import ChevronRight from './svg/chevron-right.svg';
import Close from './svg/close.svg';
import Copy from './svg/copy.svg';
import Error from './svg/error.svg';
import Figma from './svg/figma.svg';
import Github from './svg/github.svg';
import Link from './svg/link.svg';
import Menu from './svg/menu.svg';
import Pause from './svg/pause.svg';
import Play from './svg/play.svg';
import Send from './svg/send.svg';
import Twitter from './svg/twitter.svg';
import Nextjs from './svg/nextjs.svg';
import Express from './svg/express.svg';
import AWS from './svg/aws.svg';
import Azure from './svg/azure.svg';
import Nodejs from './svg/nodejs.svg';
import Postgresql from './svg/postgresql.svg';
import Docker from './svg/docker.svg';
import Firebase from './svg/firebase.svg';
import Reactjs from './svg/reactjs.svg';
import Mongodb from './svg/mongodb.svg';
import Tailwind from './svg/tailwind.svg';
import Nestjs from './svg/nest.svg';
import Typescript from './svg/typescript.svg';
import Python from './svg/python.svg';
import Cpp from './svg/cpp.svg';
import Prisma from './svg/prisma.svg';
import Photoshop from './svg/photoshop.svg';
import Premiere from './svg/premiere.svg';
import Illustrator from './svg/illustrator.svg';
import Mysql from './svg/mysql.svg';
import Html from './svg/html.svg';
import Css from './svg/css.svg';
import Javascript from './svg/javascript.svg';
import Githublg from './svg/githubLarge.svg';
import Figmalg from './svg/figmaLarge.svg';
import Download from './svg/download.svg';
// import Download from './svg/download.png'
import Linkedin from './svg/linkedin.svg';
import Instagram from './svg/instagram.svg';

export const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  check: Check,
  chevronRight: ChevronRight,
  close: Close,
  copy: Copy,
  error: Error,
  figma: Figma,
  github: Github,
  link: Link,
  menu: Menu,
  pause: Pause,
  play: Play,
  send: Send,
  twitter: Twitter,
  nextjs: Nextjs,
  express: Express,
  aws: AWS,
  azure: Azure,
  nodejs: Nodejs,
  postgresql: Postgresql,
  docker: Docker,
  firebase: Firebase,
  reactjs: Reactjs,
  mongodb: Mongodb,
  tailwind: Tailwind,
  nestjs: Nestjs,
  typescript: Typescript,
  javascript: Javascript,
  python: Python,
  cpp: Cpp,
  prisma: Prisma,
  photoshop: Photoshop,
  premiere: Premiere,
  illustrator: Illustrator,
  mysql: Mysql,
  html: Html,
  css: Css,
  githubLarge: Githublg,
  figmaLarge: Figmalg,
  download: Download,
  linkedin: Linkedin,
  instagram: Instagram,
};

export const Icon = ({ icon, className, ...rest }) =>
{
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classes(styles.icon, className)} {...rest} />
  );
};
