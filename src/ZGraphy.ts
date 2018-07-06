export class ZGraphy{

  private dom: HTMLElement;

  private canvas: HTMLCanvasElement;

  /**
   * 
   */
  constructor(dom: HTMLElement){
    this.dom = dom;

    this.canvas = document.createElement("canvas");
    this.canvas.style.width = dom.style.width;
    this.canvas.style.height = dom.style.height;
    dom.appendChild(this.canvas);

  }

}
