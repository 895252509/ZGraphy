interface Eventable {
  
}


export default class Eventable1 {

  private handlers: Function[];

  constructor(parameters) {
    this.handlers = new Array<Function>();
  }

  /**
   * on
   */
  public on(
    eventname: string,
    evenfunc: Function
  ) {
    
  }
}