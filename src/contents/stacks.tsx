import { BsRobot } from 'react-icons/bs';
import {
  SiPython,
  SiR,
  SiXcode,
  SiAngular,
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiMqtt,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiPrisma,
  SiPwa,
  SiReact,
  SiSocketdotio,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className="text-sky-500" />,
  Angular: <SiAngular size={iconSize} className="text-red-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  'Material UI': <SiCss3 size={iconSize} className="text-blue-300" />,
  Python: <SiPython size={iconSize} className="text-blue-500" />,
  R: <SiR size={iconSize} className="text-green-600" />,
  Xcode: <SiXcode size={iconSize} className="text-blue-400" />,
  PostgreSQL: <SiPostgresql size={iconSize} className="text-indigo-500" />,
  MongoDB: <SiMongodb size={iconSize} className="text-green-500" />,
  MySQL: <SiMysql size={iconSize} className="text-orange-500" />,
  Redis: <SiRedis size={iconSize} className="text-red-500" />,
  Docker: <SiDocker size={iconSize} className="text-blue-400" />,
  Kubernetes: <SiKubernetes size={iconSize} className="text-sky-500" />,
  'Node.js': <SiNodedotjs size={iconSize} className="text-green-600" />,
  'Nest.js': <SiNestjs size={iconSize} className="text-red-400" />,
  Prisma: <SiPrisma size={iconSize} className="text-emerald-500" />,
  Jest: <SiJest size={iconSize} className="text-red-600" />,
  MQTT: <SiMqtt size={iconSize} className="text-purple-600" />,
  Socket: <SiSocketdotio size={iconSize} className="text-gray-400" />,
  Nginx: <SiNginx size={iconSize} className="text-green-500" />,
  PWA: <SiPwa size={iconSize} className="text-amber-600" />,
  Webpack: <SiWebpack size={iconSize} className="text-blue-500" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  'Artificial Intelligence': (
    <BsRobot size={iconSize} className="text-rose-500" />
  ),
};
