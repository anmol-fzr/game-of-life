import { motion, HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"button">;

const Button = (props: Props) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{
      scale: 0.95,
    }}
    className="flex grow shrink basis-30 h-fit max-w-[150px] mx-auto justify-center gap-2 bg-blue-300 p-2 px-3 rounded-md"
    {...props}
  />
);

export { Button };
