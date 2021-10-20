

import Properties from "./greeter";
import HtmlGreeter from "./HtmlGreeter";
import JavaScriptGreeter from "./JavaScriptGreeter";
import LoudGreeter from "./LoudGreeter";

function greetAll(name: string): void {
  let greeter1: Properties = new Properties("Hello");
  let greeter2: LoudGreeter = new LoudGreeter("Wazzuuuup");
  greeter2.addVolume();
  greeter2.addVolume();
  let greeter3: JavaScriptGreeter = new JavaScriptGreeter("Hi");
//   let greeter4: HtmlGreeter = new HtmlGreeter("Greetings");


  console.log(greeter1.greet(name));
  console.log(greeter2.greet(name));
  console.log(greeter3.greet(name));
//   console.log(greeter4.greet(name));
//   console.log(greeter5.greet(name));
}
greetAll("Jarod");
// (async () => {
//     const name = await promptly.prompt('Name: ');
//     greetAll( name );
// })();