import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { useCanvas } from '../../hooks/useCanvas';


import Canvas from './canvas';
import Rules from './rules';

// border: "1px solid #FFD166",
// "-webkit-box-shadow": "14px 29px 24px 1px rgba(0,0,0,0.25)",
// "-moz-box-shadow": "14px 29px 24px 1px rgba(0,0,0,0.25)",
// "box-shadow": "14px 29px 24px 1px rgba(0,0,0,0.25)",

// "& canvas": {
// width: "100%",
// height: "100%",

// }



const useStyles = makeStyles((theme) => {

    return {
        [theme.breakpoints.down('xl')] : {
            "container": {
                height: "90vh",
                display: "flex",
                justifyContent: "flex-start",
                // flexWrap: "wrap",
                
                "& .canvas": {
                    margin: "2% 2% .8% 2%",
                    display: "flex",
    
                    "& .canvas-interface": {
    
                        display: "flex",
                        flexFlow: "column",
                       
    
                        "& > h4": {
                            fontFamily: "Amarillo",
                            letterSpacing: "1.5px",
                            marginTop: 0,
                        },
    
    
                        "& canvas": {
                            border: "1px solid #FFD166",
                            "-webkit-box-shadow": "14px 29px 24px 1px rgba(0,0,0,0.25)",
                            "-moz-box-shadow": "14px 29px 24px 1px rgba(0,0,0,0.25)",
                            "box-shadow": "14px 29px 24px 1px rgba(0,0,0,0.25)",
                            "border-radius": "25% 30px 25% 30px",
                            marginRight: "6%"
                        },
    
                        "& .buttons": {
                            marginTop: "5%",
                            display: "flex",
                            justifyContent: "center",  
                            marginLeft: "-12%",     
                            
                            "& button": {
                                padding: "2% 4%",
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
                    },
                },
    
                "& .rules": {
                    margin: "2% 0 2% -1%",
                    background: "rgba(0,0,0,.0)",
                    color: "black",
                    padding: "2%",
                    width: "37%",
    
                    "& .paragraph": {
                        display: "flex",
                        flexFlow: "column",
                        textAlign: "left",
    
                        "& p": {
                            marginLeft: "3%"
                        }
                    }
                }
            }
            
        },
        [theme.breakpoints.down('md')] : {
           container : {
               flexFlow: "column",
               alignItems: "center",

               "& > *": {
                   width: "90vw"
               },

               ".canvas": {
                   justifyContent: "center"
               },

               "& .rules": {
                   width: "90vw",
                   marginTop: "5%"
               }
           }
        },

        [theme.breakpoints.down("sm")]: {

            container :{


                "& .canvas": {
                    flexFlow: "column-reverse",

                    "& canvas": {
                        width: "80%",
                        margin: "0 10%"
                    },

                    "& .canvas-interface": {

                        "& .buttons": {
                            marginLeft: "-2%",
                            marginTop: "10%",
                        },
                    },
                  

                    "& form": {

                        margin: "4% 0",

                        "& select": {
                            padding: "2%",
                            marginBottom: "4%"
                        },

                        "& button": {
                            padding: "2%",
                            width: "33%",
                            margin: "auto"
                        }
                    }
                }
               
            }
        }
    }

        
})

export default function CanvasContainer(props) {

    let width;

    if(window.innerWidth > 1240){
        width = .64
    }else if (window.innerWidth <= 1240 && window.innerWidth > 600){
        width = .5
    }else{
        width = .2
    }

    const canvasInterface = useCanvas(width, 25);

    useEffect(() => {
        if(canvasInterface.canvas && window.innerWidth <= 600){
           canvasInterface.canvas.style.width = canvasInterface.canvas.width
        }
    }, [canvasInterface.cells])

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Canvas canvasInterface={canvasInterface} />
            <Rules />
        </div>
    )
}
