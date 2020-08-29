export let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 
                'k', 'l', 'm', 'n', 'o', 'r', 's', 't', 'u', 'u', 
                'v', 'w', 'x',  'z'];


const astrodings =   ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 
                        'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k',
                        'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q',
                        'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v','W', 'w', 
                        'X', 'x', 'Y', 'y', 'Z', 'z'];

const enochian = ['b', 'c', 'd', 'e','f','h', 'i', 'k', 'l','n', 'o', 'p', 'q',
                    'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];

const hamburgSymbols =  ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 
                        'k', 'l', 'm', 'n', 'o', 'r', 's', 't', 'u', 'u', 
                        'v', 'w', 'x',  'z'];

const Kalocsai_Flowers = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 
                    'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k',
                    'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q',
                    'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v','W', 'w', 
                    'X', 'x', 'Y', 'y', 'Z', 'z'];

const moon_phases = ['A','B', 'C', 'D', 'E', 
                    'F','G', 'H', 'I', 'J', 'K',
                    'L', 'M', 'N', 'O', 'P', 'Q',
                    'R', 'S', 'T', 'U', 'V', 'W', 
                    'X', 'Y', 'Z'];

const viking_elder_runes = ['A','B', 'C', 'D', 'E', 
                    'F','G', 'H', 'I', 'J', 'K',
                    'L', 'M', 'N', 'O', 'P', 'Q',
                    'R', 'S', 'T', 'U', 'V', 'W', 
                    'X', 'Y', 'Z'];

export const fontCollection = {astrodings, enochian, hamburgSymbols, Kalocsai_Flowers, moon_phases}
export const colorThemes = {
   voltaic: {
        bg: "#6B0F1A",
        colors : ["#FE2020", "#FEF086", "#OD1821", "#F0EFF4"],
        words: ["#c2ffe8"],
        stroke: "#FFD16"
    },

    fiery: {
        bg: "#000000",
        colors: [ '#F4E409', "#EEBA0B", "#C36F09", "#A63C06", "#710000"],
        words: ["#000000"],
        stroke: "#000000"
    },

    grimoire: {
        bg: "#626E7F",
        colors: ["#BF3100", "#343633"],
        words: ["#EAB948"],
        stroke: "#FFD16"
    },

    summer: {
        bg: "#c2ffe8",
        colors: ["#CA2E55", "#337CA0", "#3EC300", "#FFFC31"],
        words: ["#000000"],
        stroke: "#FFD16"
    },

    autumn: {
        bg: "#c2ffe8",
        colors: ["#90313E", "#F25F54", "#FFD20A", "#4C6663"],
        words : ["#90313E", "#F25F54", "#FFD20A", "#4C6663"],
        stroke: "#FFD16"
    }
}
export const colors = ["114, 49, 62","242, 95, 84","255, 210, 10","76, 102, 99"]

export const presets = {
    smallExploder: [[0,0], [0, -1], [-1, 0], [1, 0], [-1,1], [1,1], [0, 2]],
    glider: [[0,0], [0,2], [-1,2], [1,2], [1,1]],
    exploder: [[0,0], [-2, 0], [-2, 1], [-2, 2], [-2, 3], [-2,4], 
              [2, 0], [2, 1], [2, 2], [2, 3], [2,4], [0,4]]
}