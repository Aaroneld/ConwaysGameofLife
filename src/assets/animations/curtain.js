

export const curtain = (delay, canvas, ctx, {cellSize}, offset = 0,  currentTheme) => {

    const key = Object.keys(currentTheme);
    ctx.fillStyle = currentTheme[key[0]].bg
    ctx.strokeStyle = currentTheme[key[0]].stroke;

    const center = (canvas.width / cellSize) % 2 === 0 ? (
        (canvas.width / cellSize) /  2
    ) : (
        (((canvas.width)  / cellSize) + 1) /2
    ) 
    
    if(center + offset > canvas.width / cellSize){
        return 
    }

    if((canvas.width / cellSize) % 2 !== 0 && offset === 0){

        for(let cell = 0; cell <= (canvas.width / cellSize + 12) * cellSize; cell += cellSize){
            ctx.fillRect(center * cellSize - (cellSize - 1),  cell + 1, (cellSize -1), cellSize -1) 
            ctx.strokeRect(center * cellSize - (cellSize - 1), cell, cellSize,  cellSize)
        }

    }else {

        for(let cell = 0; cell <= (canvas.width / cellSize + 30) * cellSize; cell += cellSize){
            

            ctx.fillRect((center - offset) * cellSize - (cellSize - 1), cell + 1, (cellSize - 1), (cellSize - 1))
            ctx.strokeRect((center - offset) * cellSize - (cellSize - 1), cell, cellSize, cellSize)

            ctx.fillRect((center + offset) * cellSize - (cellSize - 1), cell + 1, (cellSize - 1), (cellSize - 1))
            ctx.strokeRect((center + offset) * cellSize - (cellSize - 1),cell, cellSize, cellSize)
        }
    }


    setTimeout(() => {
        curtain(delay, canvas, ctx, {cellSize}, offset + 1, currentTheme)
    }, delay)
};


