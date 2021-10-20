
// greeting (a string)

class Properties {
    greeting: string;

    // constructor: Sets the greeting property from a parameter
    constructor(greeting: string) {
        this.greeting = greeting;
    }

    greet(name: string): string{
        return `${this.greeting}, ${name}!`
    }

}

export default Properties;