// console.log("hello");
// alert("hello priyanshu");

const obj = {
    name: "priyanshu",
    age: 24,
    Array: ["rrrr", "ptince", "eee"],
    nfun() {
        console.log("hello");

    }
};
obj.greting = function () {
    let a = 3;
    let b = 4;
    let c = a + b;
    console.log(c);

}

obj.gretingnew = function () {

    console.log(`hello this is ${this.name}`);

}


// console.log(obj.greting());

// console.log(obj.gretingnew());

// console.log(obj.Array);



const newobject = {};

newobject.name = "raju";
newobject.age = 33;
newobject.insideobj = {
    threeobj: {
        namein: "ramu",
        agein: 45
    },
    namein: "ramu",
    agein: 45
}


const keyvalue ={
    name :"hello",
    age:34,
    gender:"mail"
}

console.log(Object.keys(keyvalue));

