export interface IClassifiedImageResponseDTO{
    time: number;
    image:{
        width:number;
        height:number;
    };
    predictions:IPrediction[];
}

interface IPrediction{
    x: number;
    y: number;
    width:number;
    height:number;
    confidence:number;
    class:string;
    class_id:number;
}