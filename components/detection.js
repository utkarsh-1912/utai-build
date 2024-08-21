"use client" // to define it is client conponent as Next.js have bot server and client

import React,{useRef,useEffect,useState} from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import {load as cocoSsdLoad} from "@tensorflow-models/coco-ssd"
import { renderPredictions } from "@/utils/renderPredictions";

let detectInterval ;

const Detection = ()=>{
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runModel = async ()=>{
       setIsLoading(true);
       const model = await cocoSsdLoad();
       setIsLoading(false);

       detectInterval = setInterval(()=>{
          runObjectDetection(model);
       },10)
    }

    const runObjectDetection = async(model)=>{
        if(canvasRef.current && webcamRef.current!==null && webcamRef.current.video?.readyState===4){
            canvasRef.current.width = webcamRef.current.video.videoWidth;
            canvasRef.current.height = webcamRef.current.video.videoHeight;

            // Detected Object
            const detectedObjects = await model.detect(webcamRef.current.video,undefined,0.6);

            // console.log(detectedObjects);
            const context = canvasRef.current.getContext("2d");
            renderPredictions(detectedObjects,context);
        }
    }

    const showMyVideo = ()=>{
        if(webcamRef.current!==null && webcamRef.current.video?.readyState===4){
            const vidWidth = webcamRef.current.video.videoWidth;
            const vidHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = vidWidth;
            webcamRef.current.video.height = vidHeight;
        }
    }

    const startCamera = () => {
        setIsCameraActive(true);
        setIsLoading(false);
    };
    
    const stopCamera = () => {
        setIsCameraActive(false);
        setIsLoading(true);
        if (webcamRef.current && webcamRef.current.video) {
          const stream = webcamRef.current.video.srcObject;
          if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
          }
        }
        setIsLoading(false);
    };

    useEffect(()=>{
        runModel();
        showMyVideo();
    },[])

    return (
    <div className="mt-8">{
        isCameraActive && isLoading?(
            <div>Loading...</div>
        ):( <>
            {isCameraActive && (
            <div className="relative flex justify-center itmes-center gradient p-1.5 rounded-md">
            {/* WebCam */}
            <Webcam ref = {webcamRef} className="rounded-md w-full" muted/>
            {/* Canvas */}
            <canvas ref = {canvasRef} className="absolute rounded-md w-full text-white"/>
            </div>
        )}</>
    )}
        <div className="mt-4 flex justify-center">
        {!isCameraActive ? (
          <button
            onClick={startCamera}
            className="px-4 py-2 btn-yellow-light rounded-md"
          >
            Start Camera
          </button>
        ) : (
          <button
            onClick={stopCamera}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Stop Camera
          </button>
        )}
      </div>
    </div>
    );
}

export default Detection;