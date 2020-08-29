
import React, { useState } from 'react'
import { fillGrid } from '../assets/animations';

export const useCanvas = (scale, cellSize) => {

    const [specs, setSpecs] = useState({scale, cellSize, begun: false});
    const [canvas, setCanvas] = useState(null);
    const [ctx, setContext] = useState(null);
    const [cells, setCells] = useState(null);
    const [nextCellState, setNextCellState] = useState(null);
    const [mostRecentCell, setMostRecentCell] = useState(null);

    const addCanvas = canvas => {

        setCanvas(canvas);
        setContext(canvas.getContext('2d'));
    }

    const updateSpecs = (change) => {

        setSpecs({
            ...specs,
            ...change
        })
    }

    const updateCell = (evt) => {


        const rect = canvas.getBoundingClientRect();

        const x = evt.clientX - rect.left;
        const y = evt.clientY - rect.top;

        const pos = [
            ((x - (x % specs.cellSize)) / specs.cellSize) + 1,
            ((y - (y % specs.cellSize)) / specs.cellSize)
        ]

        if(cells[pos[1]][pos[0]] === 0){

            const newState = cells.map((row, rowIndex) => {
                return row.map((column, columnIndex) => {
                    if(rowIndex === pos[1] && columnIndex === pos[0]) return 1
                    else return column
                });
            })

            setNextCellState(newState)
            setCells(newState);
        }else {
            const newState = cells.map((row, rowIndex) => {
                return row.map((column, columnIndex) => {
                    if(rowIndex === pos[1] && columnIndex === pos[0]) return 0
                    else return column
                });
            })

            setNextCellState(newState);
            setCells(newState);

        }

        setMostRecentCell([pos[0] * 25, pos[1] * 25])
    }

    const setDimensions = () => {
        canvas.width = canvas.height = window.innerWidth - (window.innerWidth * specs.scale)
        canvas.width = canvas.height -= canvas.width % specs.cellSize
    }

    const setInitialCellState = () => {
        
        let newCellState = [];

        for(let i = 0; i < canvas.width / specs.cellSize; i++){
            newCellState.push([]);
            for(let k = 0; k < canvas.height / specs.cellSize; k++){
                newCellState[i].push(0);
            }
        }

        setCells(newCellState)
        setNextCellState(nextCellState)
    }

    const randomize = () => {

        let newCellState = [];

        for(let i = 0; i < canvas.width / specs.cellSize; i++){
            newCellState.push([]);
            for(let k = 0; k < canvas.height / specs.cellSize; k++){
                const rand = Math.round(Math.random())
                
                rand === 1 ? newCellState[i].push(0) : newCellState[i].push(1)
            }
        }

        setNextCellState(newCellState);
        setCells(newCellState);

        return newCellState;

    }

    const applyPreset = (preset) => {

        setInitialCellState();

        const center = Math.floor(canvas.width / specs.cellSize / 2);

        let newCellState = []

        for(let i = 0; i < canvas.width / specs.cellSize; i++){
            newCellState.push([]);
            for(let k = 0; k < canvas.height / specs.cellSize; k++){
                newCellState[i].push(0);
            }
        }

        console.log(preset);

        preset.forEach(cell => {
            newCellState[center + cell[0]][center + cell[1]] = 1;
        });

        setNextCellState(newCellState);

        return newCellState

    }

    return {
        canvas, 
        ctx, 
        specs, 
        cells, 
        addCanvas, 
        setDimensions, 
        setInitialCellState, 
        updateSpecs,
        updateCell,
        nextCellState,
        mostRecentCell,
        randomize,
        applyPreset
    }

    
}