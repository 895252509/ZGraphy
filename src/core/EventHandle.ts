import { ZGraphy } from "../ZGraphy";
import { Displayabled } from "./Displayabled";
import { Rectangle } from "../displayabled/Rectangle";
import { Point } from "../core/Point";
import { EventType } from "../core/Eventable";

export class EventHandle{
  private child:Array<any>;

  constructor(zg:ZGraphy){
    this.child = zg.getchild;
  }

  log(e){
    console.log(`${e.type}:${e.offsetX},${e.offsetY}`);
  }

  onmousemove(e:MouseEvent){
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    const point = new Point( mouseX, mouseY );

    for( let obj of this.child ){
      if( obj instanceof Rectangle ){
        if( obj.data.isPointIn(point) ){
          obj.trigger( EventType.MouseMove, e );
        }
      }
    }

  }

  onclick(e:MouseEvent){

  }
}