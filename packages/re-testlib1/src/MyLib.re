
[@bs.module "./test.js"] external dilla' : unit => unit = "dilla";

let dilla = () => {
    Js.log("Hello, from lib!");
    dilla'();
};

