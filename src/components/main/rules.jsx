import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {

    return {
        "container": {

            "& h2":{
                margin: "-2% 0 2% 0",
                textDecoration: "underline"
            },
            
            "& .paragraphs": {
                display: "flex",
                borderBottom: "solid 2px black",
                flexBasis: "50%",
                fontWeight: "600",
                
                "& > div": {
                    width: "50%",
                    padding: "0 2% 2% 2%"
                },

                "& div:first-child": {
                    borderRight: "1px solid black",
                    
                }
            },

            "& .description": {
                background: "rgba(229, 78, 18, .8)",
                color: "white",
                padding: "2%",

                "& p": {
                    textAlign: "left",
                    lineHeight: "169%",
                    fontWeight: 800,
                    fontSize: "99%"
                }

            }
      
        }
    }
})

export default function Rules() {

    const classes = useStyles();

    return (
        <div className={classes.container + " rules"}>
            <h2>The Rules</h2>

            <div className="paragraphs">
                <div className="paragraph">
                    <h3>For a cell that is 'populated'</h3>
                        <p> -- Each cell with one or more neighbors dies, as if by solitude</p>
                        <p> -- Each cell with four or more neighbors dies, as if by overpopulation</p>
                        <p> -- Each cell with two or 3 three neighbors survives</p>
                </div>

                <div className="paragraph">
                    <h3>For a cell that is 'unpopulated'</h3>
                        <p> -- Each cell with three neighbors becomes populated</p>
                </div>
            </div>

            <div className="description">
                <p>Conway's Game of Life is a zero player game that plays out on a 2-dimesional
                    grid filled with cells over time. A cell can be either active or not and for each
                    discrete space in time the grid's state is a culmination of its active and non-active cells.
                    The game progresses by looking at its current state and deriving a new one from it according to
                    the rules stated above. 
                </p>

                <p>This game is a type of cellular automation whereby cells in the grid are informed 
                    of the nature (state) of their environment and can make descisions based on that knowledge
                    according to an a priori ruleset without outside interference. The Game of Life is Turing complete,
                    and with another work can be used to derived any currently known Turing Machine.
                </p>
            </div>
        </div>
    )
}
