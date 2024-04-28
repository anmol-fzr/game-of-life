import { useCallback, useRef, useState } from "react";
import { produce } from "immer";
import {
  Box,
  Row,
  PlayButton,
  RandomButton,
  ResetButton,
  RulesButton,
} from "./components";
import { RulesSheet } from "./components/sheets";

const rowCount = 10;
const colCount = 10;

// [x,y]
const pos: [number, number][] = [
  [-1, -1],
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [1, -1],
  [1, 1],
] as const;

const genEmpty = (rowCount: number, colCount: number) =>
  Array.from(Array.from({ length: rowCount }), () =>
    Array.from(Array.from({ length: colCount }), () => 0),
  );

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [areRulesOpen, setRuleOpen] = useState(true);
  const playingRef = useRef(isPlaying);
  const [grid, setGrid] = useState(() => genEmpty(rowCount, colCount));

  const onPlay = useCallback(() => {
    if (!playingRef.current) {
      return;
    }
    setGrid((currGrid) => {
      return produce(currGrid, (gc) => {
        let sum = 0;
        for (let r = 0; r < rowCount; r++) {
          for (let c = 0; c < colCount; c++) {
            let n = 0;
            pos.forEach(([x, y]) => {
              const newR = r + x;
              const newC = c + y;
              if (
                newR >= 0 &&
                newR < rowCount &&
                newC >= 0 &&
                newC < colCount
              ) {
                n += currGrid[newR][newC];
              }
            });
            if (n < 2 || n > 3) {
              gc[r][c] = 0;
            } else if (gc[r][c] === 0 && n === 3) {
              gc[r][c] = 1;
            }

            sum += gc[r][c];
          }
        }

        if (sum === 0) {
          playingRef.current = false;
          setIsPlaying(false);
        }
      });
    });
    setTimeout(onPlay, 200);
  }, []);

  const toggleLife = useCallback((r: number, c: number) => {
    setGrid((currGrid) => {
      return produce(currGrid, (gc) => {
        gc[r][c] = gc[r][c] ? 0 : 1;
      });
    });
  }, []);

  const onGameToggle = useCallback(() => {
    setIsPlaying((c) => !c);
    playingRef.current = !playingRef.current;
    onPlay();
  }, []);

  const onRandom = () => {
    const rows: number[][] = Array.from(Array.from({ length: rowCount }), () =>
      Array.from(Array.from({ length: rowCount }), () => 0),
    );
    for (let i = 0; i < rowCount; i++) {
      for (let j = 0; j < colCount; j++) {
        rows[i][j] = Math.round(Math.random());
      }
    }
    setGrid(rows);
  };

  const onReset = () => {
    setIsPlaying(false);
    playingRef.current = false;
    setGrid(() => genEmpty(rowCount, colCount));
  };

  return (
    <>
      <div className="h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center gap-12">
          <RulesSheet
            isOpen={areRulesOpen}
            onClose={() => setRuleOpen(false)}
          />
          <h1 className="text-3xl font-medium ">Game of Life</h1>
          <div className="rounded-xl bg-gray-100 border-4 border-black w-fit ">
            {grid.map((rows, r) => (
              <Row key={r}>
                {rows.map((cols, c) => (
                  <Box
                    key={c}
                    onClick={() => toggleLife(r, c)}
                    className={cols ? "bg-pink-300 " : ""}
                  />
                ))}
              </Row>
            ))}
          </div>

          <div className="flex  flex-wrap gap-4">
            <PlayButton onClick={onGameToggle} isPlaying={isPlaying} />
            <RandomButton onClick={onRandom} />
            <ResetButton onClick={onReset} />
            <RulesButton onClick={() => setRuleOpen(true)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
