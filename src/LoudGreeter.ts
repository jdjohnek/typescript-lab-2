import Properties from "./greeter";

class LoudGreeter extends Properties{
    private extra: string = '!!!';

    addVolume(){
        // No parameters. Returns void. Every time this is called, 
        // it adds an additional exclamation point to extra.
      
        this.extra += '!'
    }
    greet(name: string){
        return `${super.greet(name)} ${this.extra}`
    }
}

export default LoudGreeter;