import { Point } from "./Point";
import { Size } from "./Size";

export class Rect{
  private _x:number;
  private _y:number;
  private _w:number;
  private _h:number;
  private _x1:number;
  private _y1:number;
  private _x2:number;
  private _y2:number;

  constructor(p1?:Point, p2?:Point | Size){
    let p11:Point = p1 || new Point(0,0);
    let p22:Point | Size = p2 || new Size(0,0);

    this._x = this._x1 = p11.x;
    this._y = this._y1 = p11.y;

    if( p22 instanceof Size ){
      this._w = p22.w;
      this._h = p22.h;
      this._x2 = this._x1 + this._w;
      this._y2 = this._y1 + this._h;
    }else if( p22 instanceof Point ){
      this._x2 = p22.x;
      this._y2 = p22.y;
      this._w = this._x2 - this._x1;
      this._h = this._y2 - this._y1;
    }
  }

  /**
   * isPointIn
   */
  public isPointIn(p:Point):boolean {
    if(  p.x < this._x2 &&
      p.x >  this._x1 &&
      p.y > this._y1 &&
      p.y < this._y2 )
      return true;
    return false;
  }

  get x(){
    return this._x;
  }

  get y(){
    return this._y;
  }

  get w(){
    return this._w;
  }

  get h(){
    return this._h;
  }
}