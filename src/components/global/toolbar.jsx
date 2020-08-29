import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bgImage from '../../assets/photos/image.png';

const useStyles = makeStyles((theme) => {

    return {
        "toolbar": {
            background: "#ff5714",
            color: "white",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0 0 0 60%",
            "box-shadow": "-8px 2px 30px 2px rgba(110,110,110,1)",
            "background-repeat": "stretch",
            "background-image": `url(${bgImage})`,
            "background-blend-mode": "screen",
            backgroundImageOpacity: .2,
            overflowY: "hidden",
            overflowX: "hidden",
    

            "& h1": {
                margin: 0,
                background: "rgba(255,87,20,.8)",
                padding: "2% 1.1%",
                overflowY: "cover",
                fontFamily : "ThinDesign",
                fontSize: "350%",
                fontWeight: "500",
                textShadow: "-4px 0px 0px rgba(92, 94, 94, .5)",
                textDecoration: "underline",
                letterSpacing: "2.5px",
            },

            "& p":{
                fontFamily: "FluidSpiral",
                color: "black",
                fontSize: "400%",
                
                opacity: .76,
                margin: 0,
            }
        }

    }
})


export default function Toolbar(props) {

    const classes = useStyles();

    return (
        <div className={classes.toolbar}>
            <p className="wheels">U</p>
            <h1>Conway's Game of Life</h1>
            <p className="wheels2">U</p>
        </div>
    )

}