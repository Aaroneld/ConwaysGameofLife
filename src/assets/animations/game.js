import { iteration } from './iteration';
import { fillGrid } from './fillGrid';
import { preloadFont } from './preloadFonts';

export class Game{
    constructor(state, setIteration){
        this.interval = null;
        this.currentState = state;
        this.iteration = 0
        this.updateIteration = setIteration
    }

    beginGame(canvas, ctx, specs, currentFont, currentTheme){
        let nextState = this.deriveNextState(this.currentState);

        this.currentState = nextState

        console.log(nextState);
        preloadFont(ctx, currentFont);
        iteration(canvas, ctx, specs, nextState, currentFont,currentTheme)
        this.iteration += 1
        this.updateIteration(this.iteration)

        console.log("here");

        this.interval = setTimeout(() => {
            this.beginGame(canvas, ctx, specs, currentFont, currentTheme)
        }, 200)
    }

    stopGame(){
        clearTimeout(this.interval)
    }

    resetGame(canvas, ctx, specs, cells, currentTheme){
        this.stopGame();
        fillGrid(canvas, ctx, specs, cells, currentTheme);
        this.iteration = 0;
        this.updateIteration(0);

    }

    deriveNextState(startingState){

        let cellbuffer = [...startingState];

        const changeCell = (rowI, columnI) => {

            cellbuffer = cellbuffer.map( (row, rowIndex) =>{
                return row.map( (column, columnIndex) => {
                    if(rowIndex === rowI && columnIndex === columnI ) {
                        if(column === 1){
                            return 0
                        } else return 1
                    } else return column
                });
            });

        }

        startingState.forEach((row, rowIndex) => {
            row.forEach( (column, columnIndex) => {

                const neighbors = this.getLiveNeighbors(rowIndex, columnIndex, startingState)
                
                if(startingState[rowIndex][columnIndex] === 1) {
                    if(neighbors.length > 3 || neighbors.length < 2){
                        changeCell(rowIndex, columnIndex)
                    }
                        
                } 
                
                if(startingState[rowIndex][columnIndex] === 0 && neighbors.length === 3){
                    changeCell(rowIndex, columnIndex)
                }

            })
        })

        return cellbuffer;

    }

    getLiveNeighbors(row, column, startingState){

        let neighbors = []
    
        for(let i = -1; i < 2; i++){
            for(let k = -1; k < 2; k++){
                
                if(
                    this.neighborExists(row + i,column +k, startingState) && 
                    JSON.stringify([row + i, column + k]) !== JSON.stringify([row, column]) && 
                    startingState[row + i][column + k] === 1) {
                    
                        neighbors.push([row + i, column + k])
                }
            }
        }
    
        return neighbors;
    
    }
    
    neighborExists(row, column, startingState){
    
        if(
            row < 0 || 
            row > startingState.length -1 || 
            column < 0 || 
            column > startingState[0].length -1){
    
                 return false
            }
    
        else return true
    }
    

}