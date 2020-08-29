import React from 'react';
import { iteration } from '../../assets/animations';
import { presets } from '../../assets/animations/resources';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {

    return {
        "form": {
            display: "flex",
            flexFlow: "column",
            alignItems: "space-around",
            justifyContent: "space-around",
            border: "3px solid black",
            borderRadius: "30px",
            padding: "4%",
            height: "83%",
            "box-shadow": "inset 30px -20px 6px -21px rgba(99,97,99,0.2)",
            
            
            "& label": {
                "white-space": "nowrap",
                textDecoration: "underline"
                
            },

            "& select": {
                marginTop: "7%",
                width: "100%",
                borderRadius: "30px",
                background: "#ff9a72",
                textIndent: "3%",
                padding: "5%",
                border: "2px solid black",
                outline: "none",
                textTransform: "capitalize"
            },

            "& button": {
                padding: "10% 4%",
                margin: "0 1%",
                borderRadius: "100px",
                border: "1px solid #e54e12",
                color: "white",
                background: "#e54e12",
                outline: "none",
                "box-shadow": "4px 8px 8px 0px rgba(0,0,0,0.55)",

                "&:hover": {
                    background: "white",
                    color: "#e54e12"
                }

            }
            
        }
    }
});
 

export default function SelectorInterface
({
    currentFont, 
    setCurrentFont, 
    fontCollection, 
    currentTheme, 
    setCurrentTheme, 
    colorThemes,
    fillGrid,
    setInitialCellState,
    canvas,
    ctx,
    specs,
    cells,
    randomize,
    nextCellState,
    applyPreset
}){

    const classes = useStyles();

    const keys = Object.keys(fontCollection);
    const themeKeys = Object.keys(colorThemes);
    const presetKeys = Object.keys(presets)

    const handleFontChange = (e) => {
        e.preventDefault();
        setCurrentFont({[e.target.value]: fontCollection[e.target.value]})
        localStorage.setItem('font', JSON.stringify({[e.target.value]: fontCollection[e.target.value]}))
    }

    const handleThemeChange = (e) => {
        e.preventDefault();
        setCurrentTheme({[e.target.value]: colorThemes[e.target.value]})
        fillGrid(canvas, ctx, specs, cells, {[e.target.value]: colorThemes[e.target.value]})
        setInitialCellState()
        localStorage.setItem('theme',  JSON.stringify({[e.target.value]: colorThemes[e.target.value]}))
    }

    const handleRandomize = (e) => {
        e.preventDefault();
        const nextState = randomize();
        iteration(canvas,ctx,specs, nextState, currentFont, currentTheme)
    }
    
    const handlePreset = (e) => {
        e.preventDefault();
        const newState = applyPreset(presets[e.target.value]);
        fillGrid(canvas, ctx, specs, cells, currentTheme)
        iteration(canvas,ctx,specs, newState, currentFont, currentTheme)
    }

    console.log(presetKeys)

    return(
        <form className={classes.form}>
            <div>
                <label htmlFor="permutationSelector">Select Initial State</label>
                <select onChange={handlePreset} name="permutationSelector">
                    <option value="none" selected disable hidden>
                        Select a preset
                    </option>
                    {presetKeys.map(preset => (
                        <option value={preset}>{preset}</option>
                    ))}
                </select >
            </div>
           
            <div>
                <label htmlFor="colorTheme">Select Color Theme</label>
                <select onChange={handleThemeChange} name="colorTheme">
                    <option value="" selected disabled hidden>
                        {Object.keys(currentTheme)[0]}
                    </option>
                    {themeKeys.map(theme => (
                        <option value={theme}>{theme}</option>
                    ))}
                </select>
            </div>
            
            <div>
                <label htmlFor="chooseFontFace">Select Font Face</label>
                <select onChange={handleFontChange} name="chooseFontFace">
                    <option value="none" selected disabled hidden>
                       { Object.keys(currentFont)[0]}
                    </option>
                    {keys.map(font => (
                        <option value={font}>{font}</option>
                    ))}
                </select>
            </div>
         
            <button onClick={handleRandomize}>Randomize</button>
        </form>
    )

}