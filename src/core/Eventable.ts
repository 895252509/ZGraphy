export enum EventType{
  Click,
  MouseMove,
  Change,
}

class EventHandler {
  isOnce:boolean;
  handler:EHandler;

  constructor(
    isOnce:boolean,
    handler:EHandler) {
    this.isOnce = isOnce;
    this.handler = handler;
  }
}

interface EHandler{
  (e):any  
}

export class Eventable{
  private handlers:Map<EventType,Array<EventHandler>>;
  constructor(){

  }
  public on(en:EventType,eh:EHandler){
    if( !this.handlers.has(en) )
      this.handlers.set(en, new Array<EventHandler>());
    this.handlers.get(en).push(new EventHandler(false, eh));
  };
  public once(en:EventType,eh:EHandler){
    if( !this.handlers.has(en) )
      this.handlers.set(en, new Array<EventHandler>());
    this.handlers.get(en).push(new EventHandler(true, eh));
  };
  public off(){

  };
  public trigger(en:EventType, e?:any){
    if( this.handlers.has(en) && this.handlers.get(en).length > 0 ){
      for (let i= this.handlers.get(en).length - 1; i>= 0 ; i--) {
        let eh:EventHandler = this.handlers.get(en)[i];
        eh.handler.call(this, e || null);
        if( eh.isOnce ){
          this.handlers.get(en).splice(i, 1);
        }
      }
    }
  };
}

