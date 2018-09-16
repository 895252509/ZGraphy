import { Eventable } from "./core/Eventable";

export class ZGraphy extends Eventable{

  private dom: HTMLElement;

  private canvas: HTMLCanvasElement;

  private child:Array<any>;

  private ctx:CanvasRenderingContext2D;

  /**
   * 
   */
  constructor(dom: HTMLElement | HTMLCanvasElement){
    super();

    if( dom instanceof HTMLCanvasElement ){
      this.canvas = dom;
    }else{
      this.dom = dom;

      this.canvas = document.createElement("canvas");
      this.canvas.style.width = dom.style.width;
      this.canvas.style.height = dom.style.height;
      dom.appendChild(this.canvas);
    }

    this.ctx = this.canvas.getContext("2d");

    this.child = new Array<any>();
  }

  add(obj:any):ZGraphy{
    this.child.push(obj);
    return this;
  }

  run(){
    const step = (function (){
      this.ctx.clearRect(0, 0, 1000, 800);
      this.show();
      window.requestAnimationFrame(step);
    }).bind(this);
    window.requestAnimationFrame(step);
  }

  show():void{
    for (const path of this.child) {
      path.show(this.ctx);
    }
  }
}
