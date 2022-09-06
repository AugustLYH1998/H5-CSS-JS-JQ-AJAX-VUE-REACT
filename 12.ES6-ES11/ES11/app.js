// import m1 from "./hello.js";


const btn = document.querySelector("#btn");

btn.onclick = () => {
    import('./hello.js').then(module => {
        console.log(module);
        // module.default.hello();
        module.hello();
    })
}