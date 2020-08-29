import { colors, letters } from './resources';

export const fillCell = (canvas, ctx, {cellSize}, cells, cell, currentFont, currentTheme) => {

    const key = Object.keys(currentFont);
    const themeKey = Object.keys(currentTheme);

    
    if(cells[cell[1] / 25][cell[0] / 25] === 0) {

        ctx.fillStyle = currentTheme[themeKey[0]].bg;
        ctx.strokeStyle = currentTheme[themeKey[0]].stroke;

        ctx.fillRect(cell[0],cell[1], cellSize,cellSize)    
        ctx.strokeRect(cell[0],cell[1], cellSize, cellSize)

    }else {
        ctx.strokeStyle = currentTheme[themeKey[0]].stroke;
        console.log(currentTheme, themeKey)
        ctx.globalAlpha = 1;
        const colorLength = currentTheme[themeKey[0]].colors.length
        ctx.fillStyle = `${currentTheme[themeKey[0]].colors[Math.floor(Math.random() * colorLength)]}`;
        ctx.fillRect(cell[0] + 1,cell[1] + 1,cellSize - 1,cellSize - 1)
        ctx.strokeRect(cell[0],cell[1], cellSize, cellSize)

        ctx.font = `15px ${key[0]}`
        ctx.globalAlpha = 1
        const letter = currentFont[key[0]][Math.floor(Math.random() * currentFont[key[0]].length)];
        const length = currentTheme[themeKey[0]].words.length
        ctx.fillStyle = `${currentTheme[themeKey[0]].words[Math.floor(Math.random() * length)]}`
        ctx.fillText(`${letter}`, cell[0] +6, cell[1] + 17)
        ctx.fillStyle = `${currentTheme[themeKey[0]].colors[Math.floor(Math.random() * colorLength -1)]}`;
        
        
    }
}