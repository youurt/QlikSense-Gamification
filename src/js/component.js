import p5 from "p5";
import $ from "jquery";
import { defineHTML } from "./lib/html/divDefinition";
let p;
let y1;
let y2;


export function main($element, layout) {
    let divName = "myDiv";//+ Date.now();

    if (p) {
        reset(layout, p);
    } else {
        $element.empty();
        defineHTML($, $element, divName);
    }


    // let windowWidth = $element[0].offsetWidth;
    // let windowHeight = $element[0].offsetHeight;
    let windowWidth = 400;
    let windowHeight = 800;



    try {
        let sketch = (sk) => {

            sk.setup = () => {

                sk.createCanvas(windowWidth, windowHeight).parent(divName);
                y1 = windowHeight - (windowHeight / 8);
                y2 = windowHeight - (windowHeight / 8);
            };
            sk.draw = () => {

                sk.background(100);

                //street part
                sk.fill('black');
                sk.rect(windowWidth / 2 - 200, 0, 400, windowHeight);

                //white dashes
                sk.fill(244, 232, 66);
                for (let i = 0; i < windowHeight; i += 70) {
                    sk.rect(windowWidth / 2 - 10, i, 20, 40);
                }

                //finish line
                sk.fill(244, 66, 66);
                sk.rect(windowWidth / 2 - 200, 49, 400, 10);

                //start line
                sk.fill(186);
                sk.rect(windowWidth / 2 - 200, windowHeight - windowHeight / 7, 400, 10);
                //print(windowHeight);

                //blue car
                sk.fill(66, 185, 244);
                sk.rect(windowWidth / 2 - 115, y1, 30, 55);

                //green car
                sk.fill(63, 244, 90);
                sk.rect(windowWidth / 2 + 95, y2, 30, 60);



            };
            sk.keyPressed = () => {
                if (sk.key === "1") {
                    if (y1 >= 60) {
                        y1--;
                    }
                }
                if (sk.key === "2") {
                    if (y2 >= 60) {
                        y2--;
                    }
                }

            }
        };
        if (!p) {
            p = new p5(sketch);
            console.log(p);
        }
    } catch (e) {
        console.error(e);
    }
}