import React, { useEffect } from "react";
import "./App.css";
import Die from "./components/Die";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [rolls, setRolls] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  useEffect(() => {
    const value = dice[0].value;
    let win = true;
    dice.map((die) => {
      if (die.value === value && die.isHeld === true) {
      } else {
        win = false;
      }
    });
    if (win) {
      setTimerOn(false);
      setTenzies(true);
    }
  }, [dice]);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  function allNewDice() {
    const newDiceArray = [];
    for (let i = 0; i < 10; i++) {
      const dice = Math.floor(Math.random() * 6) + 1;
      newDiceArray.push({ id: i, value: dice, isHeld: false });
    }
    return newDiceArray;
  }

  function rollDice() {
    // setTimerOn(true)
    if (tenzies) {
      setTime(0);
      setRolls(0);
      setTenzies(false);
      setDice(allNewDice());
    } else {
      setRolls((prevRolls) => prevRolls + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld
            ? die
            : { ...die, value: Math.floor(Math.random() * 6) + 1 };
        })
      );
    }
  }

  function holdDice(id) {
    setTimerOn(true);
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const DiceElements = dice.map((element) => {
    return (
      <Die
        key={element.id}
        value={element.value}
        isHeld={element.isHeld}
        handleClick={() => holdDice(element.id)}
      />
    );
  });

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same.
        <br />
        Click each die to freeze it at its current value between rolls.
      </p>
      <div className="die--container">{DiceElements}</div>
      <button className="roll--btn" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
      <div className="stats--container">
        <p>Number of rolls:</p>
        <p className="rolls--qty">{rolls}</p>
      </div>
      <div className="time--container">
        <p>Time:</p>
        <p className="time">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </p>
      </div>
    </main>
  );
}

export default App;
