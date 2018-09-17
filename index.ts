import { ZGraphy as zg } from './src/ZGraphy';
import { Rectangle } from "./src/displayabled/Rectangle";
import { Line } from "./src/displayabled/Line";
import { EventType } from "./src/core/Eventable";

window.onload = function (){
  let zg1 = new zg(this.document.getElementById("main"));

  const rect = new Rectangle(10,10,20,20);
  const rect2 = new Rectangle(10,40,20,20);

  zg1.add(rect);
  zg1.add(rect2);

  const line1 = new Line(0,0,50,50);
  rect.addLinkLine(line1, 20, 20, "forward");
  rect2.addLinkLine(line1, 10, 10, "behind");

  rect2.on( EventType.MouseMove, (e:MouseEvent) => {
    console.log(`mousmove:${e.clientX},${e.clientY}`);
  });

  zg1.add(line1);
  zg1.run();

  let speedx1 = 0.5;
  let speedy1 = 0.3;

  let speedx2 = 0.6;
  let speedy2 = 0.4;

  setInterval(function (){
    rect.move(speedx1, speedy1);
    if( rect.data.x < 0 || rect.data.x + rect.data.w > 600){
      speedx1 = -speedx1;
    }
    if( rect.data.y < 0 || rect.data.y + rect.data.h > 600){
      speedy1 = -speedy1;
    }

    rect2.move(speedx2, speedy2);
    if( rect2.data.x < 0 || rect2.data.x + rect2.data.w > 600){
      speedx2 = -speedx2;
    }
    if( rect2.data.y < 0 || rect2.data.y + rect2.data.h > 600){
      speedy2 = -speedy2;
    }
  }, 10);
}