import { Button } from "./Button";
import { IconScript } from "@tabler/icons-react";

type Props = {
  onClick: () => void;
};

const RulesButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <IconScript />
      View Rules
    </Button>
  );
};

export { RulesButton };
