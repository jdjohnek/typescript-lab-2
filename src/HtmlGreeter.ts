import Properties from "./greeter";

class HtmlGreeter extends Properties{
    tagName: string;

    constructor(tagName: string = 'h1', greeting: string){
        super(greeting);
        this.tagName = tagName;

    }
    greet(name: string){
        return `<${this.tagName}>${super.greet(name)}<${this.tagName}>`

    }
}

export default HtmlGreeter;