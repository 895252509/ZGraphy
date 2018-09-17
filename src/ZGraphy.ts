import { Eventable } from "./core/Eventable";
import { EventHandle } from "./core/EventHandle";

export class ZGraphy extends Eventable{
  // 包含canvas标签的dom对象
  private dom: HTMLElement;
  // canvas dom 对象
  private canvas: HTMLCanvasElement;
  // 元素数组
  private child:Array<any>;
  // canvas context对象
  private ctx:CanvasRenderingContext2D;
  // canvas事件处理对象
  private canhandle:EventHandle;


  /**
   * 
   */
  constructor(dom: HTMLElement | HTMLCanvasElement){
    super();
    // 初始化Dom和context状态
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

    // 保存元素
    this.child = new Array<any>();

    this.canhandle = new EventHandle(this);

    // 绑定事件
    this.bindEvent();
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

  bindEvent(){
    this.canvas.addEventListener("mousemove", this.canhandle.onmousemove.bind(this.canhandle));
    this.canvas.addEventListener("click", this.canhandle.onclick.bind(this.canhandle));
  }

  get getchild():Array<any>{
    return this.child;
  }
}
