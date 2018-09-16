export class Point{
  private _x:number;
  private _y:number;
  constructor(x:number, y:number){
    this.x = x;
    this.y = y;
  }

  get x(){
    return this._x;
  }

  get y(){
    return this._y;
  }

  set x(_X:number){
    this._x = _X;
  }

  set y(_Y){
    this._y = _Y;
  }
}