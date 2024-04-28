import { Button } from "./Button";
import { IconPlayerStop } from "@tabler/icons-react";

type Props = {
  onClick: () => void;
};

const ResetButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <IconPlayerStop />
      Reset
    </Button>
  );
};

export { ResetButton };
