import React, {useState, useEffect} from 'react';
import Board from './Board';
import {calculateWinner} from './Util';
import {add} from './Util';

const Game = () => {
    const initSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initSquares);
    const [xIsNext, setXisNext] = useState(true);
    const [status, setStatus] = useState("");
   
    const handleClick = (idx) => {
        if( calculateWinner(squares) != null ){
            return;
        }
        setSquares(
            squares.map((square, i)=>{
                const nextText = xIsNext ? 'X' : 'O' ;
                if( idx === i && square == null){
                    setXisNext(!xIsNext);
                    return nextText;
                }else{
                    return square;
                }
            })
        );
    }

    useEffect(()=>{
        if(calculateWinner(squares)!=null){
            setStatus('Winner : '+(xIsNext ? 'O' : 'X')); 
        }
    }, [squares])

    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={squares}
                        onClick={(i) => handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    {/* <ol>{moves}</ol> */}
                </div>
            </div>
        </>
    );
};

export default Game;