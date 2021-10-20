import Properties from "./greeter";

class JavaScriptGreeter extends Properties{
    // Override greet: Override the greet method to wrap the result in a console.log. 
    // For example, greet might return "console.log('Hello, Grant!')". 
    //Note, this is not actually calling console.log, just returning a string that looks like JavaScript.

    greet(name: string){
        return `console.log('${super.greet(name)} ')`
    }
}

export default JavaScriptGreeter;