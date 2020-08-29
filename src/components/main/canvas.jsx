import React, { useRef, useEffect, useState } from 'react'
import SelectorInterface from './selectorInterface';

import { makeStyles } from '@material-ui/core/styles';
import { useAnims } from '../../hooks/useAnims';
import { fillGrid, openingAnimation, curtain, fillCell, Game, preloadFont } from '../../assets/animations';
import { fontCollection, colorThemes } from '../../assets/animations/resources';


const useStyles = makeStyles((theme) => {

    return {
        "container": {
        
        }
    }
})

function Canvas(props) {

    const { 

        canvas, 
        ctx, specs, 
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

    } = props.canvasInterface
 
    const [ addFrame, cancelAllFrames ] = useAnims();
    const [game, setGame] = useState(null);
    const [iteration, setIteration] = useState(0);
    const [currentFont, setCurrentFont ] = useState(localStorage.getItem('font') ? {...JSON.parse(localStorage.getItem('font'))} : {HamburgSymbols: fontCollection.hamburgSymbols});
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') ? {...JSON.parse(localStorage.getItem('theme'))} : {autumn: colorThemes.autumn});

    const classes = useStyles();
    const canvasRef = useRef(null)

    useEffect(() => {
        addCanvas(canvasRef.current);
        if(canvas && ctx){

            if(!cells) {
                setDimensions();
                setInitialCellState();
            }
            else{   

                if(!specs.begun) {
                    if(!specs.inProgress) {
                        fillGrid(canvas, ctx, specs, cells, currentTheme); 
                    }
                    preloadFont(ctx, currentFont);
                    addFrame(5, openingAnimation, canvas, ctx, specs, currentFont, currentTheme);  
                }     
                    
            }    
            
            
        }
        

    }, [canvas, cells])

    useEffect(() => {
        if(nextCellState && !specs.inProgress &&  mostRecentCell){
            cancelAllFrames(false);
            preloadFont(ctx, currentFont);
            fillCell(canvas, ctx, specs, nextCellState, mostRecentCell, currentFont, currentTheme);
        }
    }, [nextCellState])

    useEffect(() => {  

        if(specs.inProgress){
            game.beginGame(canvas, ctx, specs, currentFont, currentTheme);    
        }
        

    }, [specs.inProgress]);


    const beginGame = () => {

        if(!specs.inProgress){
            updateSpecs({inProgress: true});
            setGame(new Game(nextCellState, setIteration));
        }else {
            game.beginGame(canvas,ctx, specs, currentFont, currentTheme)
        }
        
    };


    const handleStart = e => {
        

        if(specs.begun){
            updateCell(e)
            preloadFont(ctx, currentFont);
        }else {
            cancelAllFrames(true)
            curtain(80, canvas, ctx, specs, 0, currentTheme)
            updateSpecs({begun: true});
        }
    }

    const handleStop = () => {
        if(specs.inProgress){
            game.stopGame();
        }
        
    }

    const handleReset = () => {

        if(specs.inProgress){
            game.resetGame(canvas, ctx, specs, cells, currentTheme);
            updateSpecs({inProgress: false});
            setInitialCellState();
        }
  
    }

    console.log(classes)
        
    return (
        <div className={classes.container + " canvas"}>
            <div className="canvas-interface">
            <h4>{`Iteration: ${iteration}`}</h4>
                <canvas 
                    onClick={handleStart}
                    ref={canvasRef} 
                />
               
                <div className="buttons">
                    <button onClick={beginGame}>Start</button>
                    <button onClick={handleStop}>Stop Game</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
            <SelectorInterface 
                setCurrentFont={setCurrentFont} 
                currentFont={currentFont} 
                fontCollection={fontCollection}
                setCurrentTheme={setCurrentTheme}
                currentTheme={currentTheme}
                colorThemes={colorThemes}
                fillGrid ={fillGrid}
                setInitialCellState={setInitialCellState}
                canvas={canvas}
                ctx={ctx}
                specs={specs}
                cells={cells}
                randomize={randomize}
                nextCellState={nextCellState}
                applyPreset={applyPreset}/>
              

       
        </div>
    )
}

export default Canvas



