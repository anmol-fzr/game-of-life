import { BottomSheet } from ".";

const howTo = [
  {
    id: 1,
    text: "Tap on a cell to bring that to life or kill",
  },
  {
    id: 2,
    text: "Tap on randomize to randomly give life to cells",
  },
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const HowToPlaySheet = ({ isOpen, onClose }: Props) => (
  <BottomSheet {...{ isOpen, onClose }}>
    <h2 className="text-2xl font-medium mb-2">How to play </h2>
    <ul className="list-disc px-4">
      {howTo.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  </BottomSheet>
);

export { HowToPlaySheet };
