import { throttle } from "lodash";

export const renderPredictions = (predictions,context)=>{
    context.clearRect(0,0,context.canvas.width,context.canvas.height);

    // Font
    const font = "20px sans-serif";
    context.font = font;
    context.textBaseline = "top";

    predictions.forEach((prediction)=>{
        const [x,y,width,height] = prediction["bbox"]
;
        const isCat = prediction.class==="cat";

        // Bounding Box
        context.strokeStyle = isCat?"red":"green";
        context.lineWidth = 4;
        context.strokeRect(x,y,width,height);

        // fill color
        context.fillStyle = `rgba(255,0,1,${isCat?0.2:0})`;
        context.fillRect(x,y,width,height);

        // Label Background
        context.fillStyle = isCat?"red":"green";
        const textWidth = context.measureText(prediction.class).width;
        const textHeight = parseInt(font,10);
        context.fillRect(x,y,textWidth+5,textHeight+5);

        context.fillStyle = "#fff";
        context.fillText(prediction.class,x,y);

        if(isCat){
            playAudio();
        }
    })
};

const playAudio = throttle(()=>{
    const audio = new Audio("/bark-voice.mp3");
    audio.play();
},2000);
