export class ZGraphy{

  private name: string;

  constructor(){
    this.name = "zx";

  }

  log(){
    console.log("!@%^$@!&#");

    window.addEventListener("load", ()=> {

    });

    const { a,b } = { 
      a: "a",
      b: "b"
    };

    async function e1123(){
      setTimeout(()=>{
        console.log("123123123123");
      },2000);
    }

    async function e222(){
      console.log("start");
      await w();
      console.log("end");
      
    };

    async function w(){
      return new Promise((reso,reject)=>{
        setTimeout( ()=> {
          console.log("promise log");
          reso();
        }, 2000 );
      }).then(()=>{
        console.log("promise reso");
        
      })
    }

    e222();

    const erer = (<number[]>[12, 5, 8, 130, 44]).find((e)=>{
      return e >= 15;
    });
  }
}
