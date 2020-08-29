import createMixins from "@material-ui/core/styles/createMixins"


export function preloadFont(ctx, currentFont){

    ctx.font = `12px ${Object.keys(currentFont)[0]}`;

    console.log(ctx.font)
    ctx.fillStyle = "#000000"

    ctx.fillText("a", 5, 5)
}