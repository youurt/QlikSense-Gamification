import p5 from "p5/lib/p5.js";
import $ from "jquery";
import { defineHTML } from "./lib/html/divDefinition";
let p;


export function main($element, layout) {
    let divName = "myDiv";//+ Date.now();

    if (p) {
        reset(layout, p);
    } else {
        $element.empty();
        defineHTML($, $element, divName);
    }

    let windowWidth = $element[0].offsetWidth;
    let windowHeight = $element[0].offsetHeight;


    try {
        let sketch = (sk) => {

            sk.setup = () => {
                console.log("Setup");
                sk.createCanvas(windowWidth, windowHeight).parent(divName);

            };
            sk.draw = () => {

                sk.background(230);
            };
        };
        if (!p) {
            p = new p5(sketch);
        }
    } catch (e) {
        console.error(e);
    }
}