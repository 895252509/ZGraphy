export class Size{
  private _w:number;
  private _h:number;
  constructor(w:number, h:number){
    this.w = w;
    this.h = h;
  }

  get w(){
    return this._w;
  }

  get h(){
    return this._h;
  }

  set w(_X:number){
    this._w = _X;
  }

  set h(_Y){
    this._h = _Y;
  }
}