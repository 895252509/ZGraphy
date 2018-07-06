export default class Eventable {

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