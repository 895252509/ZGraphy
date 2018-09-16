import { Point } from "../core/Point";
import { Displayabled } from "../core/Displayabled";

export class Line extends Displayabled{
  private x1:number;
  private y1:number;
  private x2:number;
  private y2:number;
  private linew:number;

  private isStartArrow:boolean;
  private isEndArrow:boolean;

  constructor(
    x1:number, 
    y1:number, 
    x2:number, 
    y2:number, 
    w?:number){
    super();

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.linew = w;
  }

  show(context:CanvasRenderingContext2D):void{
    context.save();

    context.lineCap='round';
    if( this.linew )
      context.lineWidth= this.linew;

    context.beginPath();
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.stroke();

    context.restore();
  }

  set start(p:Point){
    this.x1 = p.x;
    this.y1 = p.y;
  }

  set end(p:Point){
    this.x2 = p.x;
    this.y2 = p.y;
  }
}