import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Scoreboard } from "./Scoreboard.jsx";
import { Choice } from "./Choice.jsx";
import { GameType } from "./GameType.jsx";

//create your first component
const Home = () => {
	const values = ['rock', 'paper', 'scissors']
	const [typeOfGame, setTypeOfGame] = useState('bestOfThree')
	const [player, setPlayer] = useState('')
	const [cpu, setCpu] = useState('')
	const [score, setScore] = useState({
		won: 0,
		lost: 0,
		ties: 0
	})
	const [gameEnd, setGameEnd] = useState(false)

	const pcSelect = (arr) => setCpu(arr[Math.floor(Math.random() * arr.length)])

	const handleTypeOfGame = (val) => setTypeOfGame(prev => prev = val)


	const handleSelect = (val) => {
		setPlayer(prev => prev = val)
		pcSelect(values)
		player && cpu && checkWinner(val, cpu)
	}

	const checkWinner = (pVal, cpuVal) => {
		if (
			pVal === 'rock' && cpu === 'paper' ||
			pVal === 'paper' && cpu === 'scissors' ||
			pVal === 'scissors' && cpu === 'rock'
		) {
			return setScore({
				...score,
				lost: score.lost + 1
			});
		}
		if (pVal === cpuVal) {

			return setScore({
				...score,
				ties: score.ties + 1
			});
		}
		setScore({
			...score,
			won: score.won + 1
		});
	}

	const handleReset = () => {
		setScore(prev => prev = {
			won: 0,
			lost: 0,
			ties: 0
		})
		setGameEnd(prev => !prev)
	}

	const handleWinner = () => setGameEnd(prev => !prev)

	return (
		<main className="text-center bg-dark vh-100 pt-5">
			<Scoreboard won={score.won} lost={score.lost} ties={score.ties} reset={handleReset} />
			<GameType won={score.won} lost={score.lost} type={typeOfGame} selectType={handleTypeOfGame} winner={handleWinner} />
			<section className="my-5">
				{
					!gameEnd ?
						<div className="container">
							<h3 className="text-white">Select your weapon: </h3>
							<div className="container d-flex justify-content-around my-5">
								{values.map((el, i) => <Choice key={i} selected={player} value={el} valueSelect={handleSelect} />)}
							</div>
						</div>
						: score.won > 2 ? <h3 className="text-white">You won!</h3> : <h3 className="text-white">You loose!</h3>
				}
			</section>
			{gameEnd ? <button className='btn btn-primary' onClick={handleReset}>Play Again</button> : ''}
		</main>
	);
};

export default Home;
