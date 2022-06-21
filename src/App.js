import { useEffect, useState } from 'react';
import bg from './assets/images/beams.jpg';
import logo from './assets/images/logo.svg';
import Board from './components/Board';
import Button from './components/Button';
import { board, createPuzzleAsPerDifficulty, getFilledIndexs, puzzleToMatrix, solve } from './services/game';
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
function App() {
  const [puzzle, setPuzzle] = useState([]);
  const [solution, setSolution] = useState([]);
  const [disabledIndexes, setDisabledIndexes] = useState([]);
  const [gameLevel, setGameLevel] = useState(0);
  const arrTemplate = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
  ];
  const [board, setBoard] = useState(arrTemplate);
  const genBoard = () => {
    let puzzle = makepuzzle();
    var difficulty = ratepuzzle(puzzle, 4);
    setGameLevel(difficulty);
    let sol = solvepuzzle(puzzle);
    setSolution(sol);

    // console.log(difficulty);
    setPuzzle(puzzle);
    // console.log(puzzle);
    // console.log(sol);
    const newBoard = puzzleToMatrix(createPuzzleAsPerDifficulty([...sol], 0.4));
    setDisabledIndexes(getFilledIndexs(newBoard));
    setBoard(newBoard);
  }

  useEffect(() => {
    genBoard();
  }, [])
  const handleSolve = () => {
    setBoard(puzzleToMatrix(solution));
  };
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img src={bg} alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
      <div className="absolute inset-0 bg-[url(./assets/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <div>
            <img src={logo} className="h-12" alt="Play SudokuMX" />
            <p>Dificulty Level : {gameLevel}</p>
          </div>
          <Board board={board} disabledIndexes={disabledIndexes} setBoard={setBoard} />
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>SudokuMX is perfect for learning the classic Sudoku Game. Share your leader board. Keep your mind sharp.</p>
              {/* <Button title="Easy"/>
              <Button title="Hard"/>
              <Button title="Professional"/> */}
              <Button title="Generate New" setSelectedValue={() => {
                genBoard();
              }} />
              <Button title="Solve" setSelectedValue={() => {
                handleSolve();
              }} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
