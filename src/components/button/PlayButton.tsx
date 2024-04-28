import { Button } from "./Button";
import { IconPlayerPlay, IconPlayerPause } from "@tabler/icons-react";

type Props = {
  onClick: () => void;
  isPlaying: boolean;
};

const PlayButton = ({ isPlaying, onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      {isPlaying ? (
        <>
          <IconPlayerPause />
          Pause
        </>
      ) : (
        <>
          <IconPlayerPlay />
          Play
        </>
      )}
    </Button>
  );
};

export { PlayButton };
