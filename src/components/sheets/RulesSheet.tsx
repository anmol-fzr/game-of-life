import { BottomSheet } from ".";

const howTo = [
  {
    id: 12,
    text: "Tap on a cell to bring that to life or kill",
  },
  {
    id: 23,
    text: "Tap on randomize to randomly give life to cells",
  },
];

const rules = [
  {
    id: 1,
    text: "Any live cell with fewer than two live neighbors dies, as if by underpopulation.",
  },
  {
    id: 2,
    text: "Any live cell with two or three live neighbors lives on to the next generation.",
  },
  {
    id: 3,
    text: "Any live cell with more than three live neighbors dies, as if by overpopulation.",
  },
  {
    id: 4,
    text: "Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.",
  },
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RulesSheet = ({ isOpen, onClose }: Props) => (
  <BottomSheet {...{ isOpen, onClose }}>
    <div>
      <h2 className="text-2xl font-medium mb-2">Rules </h2>
      <ul className="list-decimal px-4">
        {rules.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>

    <div>
      <h2 className="text-2xl font-medium mb-2">How to play </h2>
      <ul className="list-disc px-4">
        {howTo.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
    <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
      Learn More
    </a>
  </BottomSheet>
);

export { RulesSheet };
