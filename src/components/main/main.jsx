import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Toolbar from  '../global/toolbar';
import CanvasContainer from './canvas-container';

const useStyles = makeStyles((theme) => {

    return {
        "main": {
            
        }
    }
})



export default function Main (props){

    return (
        <div>
            <Toolbar />
            <CanvasContainer />
        </div>
    )
}