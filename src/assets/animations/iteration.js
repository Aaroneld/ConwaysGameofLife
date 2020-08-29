
import { letters, colors } from './resources';

export const iteration = (canvas, ctx, {cellSize}, nextState, currentFont, currentTheme) => {


    const key = Object.keys(currentFont);
    const themeKey = Object.keys(currentTheme);

    nextState.forEach( (row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if(nextState[rowIndex][columnIndex] === 1){
                
                // ctx.shadowOffsetX = -3;
                // ctx.shadowOffsetY = 0;
                // ctx.shadowColor = "#7F9CBE";
                // ctx.shadowBlur = 20;
                ctx.globalAlpha = 1;
                const colorLength = currentTheme[themeKey[0]].colors.length
                ctx.fillStyle = `${currentTheme[themeKey[0]].colors[Math.floor(Math.random() * colorLength)]}`;

                ctx.fillStyle = `${currentTheme[themeKey[0]].colors[Math.floor(Math.random() * colorLength)]}`;
                ctx.fillRect(columnIndex * cellSize + 1, rowIndex * cellSize + 1, cellSize - 1, cellSize - 1)
                ctx.strokeRect(columnIndex * cellSize, rowIndex * cellSize, cellSize, cellSize)

                ctx.shadowOffsetX = ctx.shadowOffsetY = ctx.shadowBlur = 0
                ctx.fillStyle = `${currentTheme[themeKey[0]].colors[Math.floor(Math.random() * colorLength)]}`;

                ctx.globalAlpha = .35
            
                ctx.fillRect(columnIndex * cellSize + 8,  rowIndex * cellSize + 8,cellSize - 1,cellSize - 1)
            
                ctx.fillStyle = `${currentTheme[themeKey[0]].colors[Math.floor(Math.random() * colorLength)]}`;
                ctx.globalAlpha = .45
                ctx.fillRect(columnIndex * cellSize + 14,  rowIndex * cellSize + 14,cellSize - 1,cellSize - 1)
        
                ctx.font = `15px ${key[0]}`
                ctx.globalAlpha = 1
                const letter = currentFont[key[0]][Math.floor(Math.random() * currentFont[key[0]].length)];
                const length = currentTheme[themeKey[0]].words.length
                ctx.fillStyle = `${currentTheme[themeKey[0]].words[Math.floor(Math.random() * length)]}`
                ctx.fillText(`${letter}`, columnIndex * cellSize + 6, rowIndex * cellSize + 17)
            }
            else {
                ctx.fillStyle = currentTheme[themeKey[0]].bg
                ctx.strokeStyle = currentTheme[themeKey[0]].stroke;

                ctx.fillRect(columnIndex * cellSize + 1, rowIndex * cellSize + 1, cellSize - 1, cellSize - 1)
                ctx.strokeRect(columnIndex * cellSize, rowIndex * cellSize, cellSize, cellSize)

            }
        });
    });
}