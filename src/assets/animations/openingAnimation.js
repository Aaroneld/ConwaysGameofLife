
import { colors, letters } from './resources';

export const openingAnimation = (canvas, ctx, specs, currentFont, currentTheme) => {

    const key = Object.keys(currentFont);
    const themeKey = Object.keys(currentTheme);

    let numberX = Math.random() * canvas.width;
    let numberY = Math.random() * canvas.height;
    
    numberX -= (numberX % specs.cellSize)
    numberY -= (numberY % specs.cellSize)
    
    const colorLength = currentTheme[themeKey[0]].colors.length
    ctx.fillStyle = `${currentTheme[themeKey[0]].colors[Math.floor(Math.random() * colorLength)]}`;
    ctx.globalAlpha = .65
    ctx.fillRect(numberX + 1, numberY+ 1,specs.cellSize - 1,specs.cellSize - 1)

    ctx.fillStyle = `${currentTheme[themeKey[0]].colors[Math.floor(Math.random() * colorLength)]}`
    ctx.globalAlpha = .2

    ctx.fillRect(numberX + 8, numberY+ 8,specs.cellSize - 1,specs.cellSize - 1)

    ctx.fillStyle = `${currentTheme[themeKey[0]].colors[Math.floor(Math.random() * colorLength)]}`
    ctx.globalAlpha = .1
    ctx.fillRect(numberX + 14, numberY+ 14,specs.cellSize - 1,specs.cellSize - 1)

    ctx.globalAlpha = 1
    ctx.strokeStyle = currentTheme[themeKey[0]].stroke[0];
    ctx.strokeRect(numberX,numberY, specs.cellSize, specs.cellSize)
    ctx.font = `15px ${key[0]}`
    ctx.globalAlpha = 1
    const length = currentTheme[themeKey[0]].words.length
    ctx.fillStyle = `${currentTheme[themeKey[0]].words[Math.floor(Math.random() * length)]}`
    const letter = currentFont[key[0]][Math.floor(Math.random() * currentFont[key[0]].length)];
    ctx.fillText(`${letter}`, numberX +6, numberY + 17)
}