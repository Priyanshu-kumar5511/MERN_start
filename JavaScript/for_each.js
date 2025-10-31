const varr = [1,2,3,4,5];


for (const i of varr)
{
    console.log(i);
    
}



let stri = "hello priyanshu"; 

for(const i of stri)
{
    console.log(i);
    
}



const maplearn = new Map();
maplearn.set('name',"priyanshu")
maplearn.set('age',23)
maplearn.set('coolbox',"txy23")
maplearn.set('project',"deno")

// console.log(maplearn);

for ( const [key,value] of maplearn)
{
console.log(key, ':-' , value);

}



const obj = {
    name:"Priyanhsu ",
    age:44,
    collage:"LPU"
}


for (const key in obj)
{
    console.log(key , ":-", obj[key]);
    
}

let arr =["name","location","py","java"];

for (const key in arr) {
   console.log(arr[key]);
   
}




const forvox1 = ["name","location","py","java"];

forvox.forEach(function(forvox){
    console.log(forvox);
     
})

const forvox = ["name","location","py","java"];

forvox.forEach( (forvox)=>{
    console.log(forvox);
    
} )




const mycoding = [ 
    {
        name:"Priyanshu",
        collage:"Lpu"
    },
     {
        name:"Priyanshu",
        collage:"Lpu"
    },
     {
        name:"Priyanshu",
        collage:"Lpu"
    },
     {
        name:"Priyanshu",
        collage:"Lpu"
    },
     {
        name:"Priyanshu",
        collage:"Lpu"
    },
     {
        name:"Priyanshu",
        collage:"Lpu"
    }

]

mycoding.forEach( (itam)=>{
    console.log(itams.collage);
    
} )