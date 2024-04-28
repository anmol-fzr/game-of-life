import { motion, HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = HTMLMotionProps<"button">;

const baseClassName =
  " !w-12 max-w-[30px] md:max-w-12 flex items-center !aspect-square justify-center text-3xl border-r border-gray-300 last:border-none";

const Box = ({ children, onClick, className: c }: Props) => {
  const className = twMerge(baseClassName, c);
  return <motion.button {...{ onClick, className, children }} />;
};

export { Box };
