import React, { useEffect, useState } from 'react'
function Board() {
    const [gameArr, setGameArr] = useState([["", "", ""], ["", "", ""], ["", "", ""]])
    const [squares, setSquares] = React.useState(Array(9).fill(null))

    const checkWinRow = (arr) => {
        if (arr.filter(i => i === 'X').length === 3) {
            return "X"
        } else if (arr.filter(i => i === 'O').length === 3) {
            return "O"
        }
    }
    function Winner() {
        useEffect(() => {
            let tempArr = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],];
            for (let i = 0; i < tempArr.length; i++) {
                const [a, b, c] = tempArr[i]
                if (gameArr[a] && gameArr[a] === gameArr[b] && gameArr[a] === gameArr[c]) {
                    tempArr.push(tempArr[a]);
                }
            }
            for (let i = 0; i < tempArr.length; i++) {

                if (checkWinRow(i) === 'X') {
                    return "X"
                } else if (checkWinRow(i) === 'O') {
                    return "O"
                }
                else {
                    return "drow"
                }

            }
        }, [gameArr])
    }


    function restartButton() {
        setSquares(Array(9).fill(null))
    }
    return (
        <div>
            <>
                <div>
                    <h2 className='heading'>Welcome to the TIC TAC TOE game!</h2>
                    <div>
                        <h3 className='player-turn'>The next player is: {Winner}</h3>
                    </div>
                </div>
                <div className="box">
                    {gameArr.map(function (row, rowIndex) {
                        return row.map(function (col, colIndex) {
                            return <button className="board-div" onClick={() => checkWinRow(col)}>{checkWinRow}</button>
                        })
                    })}
                </div>
                <div>
                    <h3 className='winner-player'> Winner player is: {Winner}</h3>
                </div>
                <button className="restart-button" onClick={() => restartButton()}>Restart Game </button>
            </>
        </div>

    )
}

export default Board