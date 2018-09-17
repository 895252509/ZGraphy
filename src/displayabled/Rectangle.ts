import { Displayabled } from "../core/Displayabled";
import { Rect } from "../core/Rect";
import { Point } from "../core/Point";
import { Size } from "../core/Size";

export class Rectangle extends Displayabled{
  private x:number;
  private y:number;
  private w:number;
  private h:number;
  private _id:number;

  private linklineinfo:Map<any,any>;

  constructor(x, y, w, h){
    super();

    this._id = 0;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.linklineinfo = new Map();
  }

  show(context:CanvasRenderingContext2D):void{
    context.save();
    
    context.strokeRect(
      this.x + 0.5,
      this.y + 0.5,
      this.w, this.h
    );

    context.restore();
  }

  get data(){
    return new Rect(
      new Point(this.x, this.y),
      new Size( this.w, this.h )
    )
  }

  get id(){
    return this._id++;
  }

  addLinkLine(line, x, y, dire){
    const id = this.id;
    const lineinfo = {
      line: line,
      linkpoint: {
        x: x,
        y: y,
      },
      linedirection: dire, // forward | behind
    };
    this.linklineinfo.set(id, lineinfo);
  }

  move( x, y ){
    this.x += x;
    this.y += y;

    for(const line of this.linklineinfo.values() ){
      if(line.linedirection === "forward"){
        line.line.start = { x: this.x + line.linkpoint.x, y: this.y + line.linkpoint.y};
      }else{
        line.line.end = { x: this.x, y: this.y };
      }
    }
  }
}