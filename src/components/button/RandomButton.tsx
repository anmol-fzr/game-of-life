import { Button } from "./Button";
import { IconDice5 } from "@tabler/icons-react";

type Props = {
  onClick: () => void;
};

const RandomButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <IconDice5 />
      Randomize
    </Button>
  );
};

export { RandomButton };
