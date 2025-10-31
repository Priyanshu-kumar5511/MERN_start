const user ={
    username : "Priyanshu",
    Price: 399,
    welcome:function(){
        console.log(`${this.username},Welcome to Website`);
    }
}


// console.log(user.welcome());
// user.welcome()
// user.username="Ankur";
// user.welcome();
// user.welcome(this)


function chai(){
        // console.log(this);
    }

    // chai();

    const arrwofun = ()=> ({
        a:"abba",
        b:"samir"
    })

    // console.log(arrwofun.a());


    (function iffe(){
        console.log(`Db connect `);
        
    })();


    (()=>{
       let name="ritash";
        let age=33;
        console.log(`${name},Ky beta  ky hal hain`);
        
    })()
    
    ((couse) => {
    const name = "ritash";
    console.log(`${name},translate:Ky beta  ky hal hain ,${couse}`);
})("MCA");



