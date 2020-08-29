import React, { useState } from 'react';

let cancelFrames = false;
let updated = false;

export const useAnims = () => {

    const cancel = (bool) => {
        cancelFrames = bool;
    }

    const setUpdated = (bool) => {
        updated = bool;
    }

    const getUpdated = () => updated


    const addFrame = (...args) => {

        const [delay, callback, ...rest] = [...args]

        let frameId = null;
        let start = null;
        
        const requestFrame = () => {


            if(!start){
                start = Date.now()
            }

            if(cancelFrames && start) {
                cancelAnimationFrame(frameId)
                return;
            }

            if (Date.now() - start < delay) {
                cancelFrames = false;
                frameId = requestAnimationFrame(requestFrame);
                
            } else {

                cancelFrames = false;
                callback(...rest, frameId)
                start = Date.now()
                frameId = requestAnimationFrame(requestFrame);
            }
        }

        cancelFrames = false;
        requestFrame();
    }

    return [addFrame, cancel, getUpdated, setUpdated]
}
