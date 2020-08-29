

export const fillGrid = (canvas, ctx, specs, cells, currentTheme) => {

    const key = Object.keys(currentTheme)

    console.log(currentTheme)

    ctx.fillStyle = currentTheme[key[0]].bg;
    console.log(currentTheme)
    ctx.strokeStyle = currentTheme[key[0]].stroke;

    for(let i = 0;  i < canvas.width; i += specs.cellSize){
        for(let k = 0; k < canvas.height; k += specs.cellSize){

            ctx.strokeStyle = currentTheme[key[0]].stroke;
            ctx.fillRect(k, i, specs.cellSize - 1, specs.cellSize - 1);
            ctx.strokeRect(k, i, specs.cellSize, specs.cellSize);
            ctx.strokeStyle = currentTheme[key[0]].stroke;

        }
    }

}