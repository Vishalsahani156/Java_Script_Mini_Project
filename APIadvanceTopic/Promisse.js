const p1 = new Promise(function (resolve, reject) {
    // this DB call
    // network call
    // crypto graph call
    //do a asyn  connection 
    setTimeout(function () {
        console.log("this is the work one is main  ");
        resolve()

    }, 1000)
})
p1.then(function () {
    console.log(" this is the work one ")
})


new Promise(function (resolve, reject) {
    console.log(" this is the promises call work tow main");
    setTimeout(function () {
        resolve();
    }, 2000)

}).then(function () {
    console.log(" this is the work two  ");
})
const three = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("this is the work three  main");
        resolve({ username: "vishal", email: "vishalsahani122@gmail.com" });
    }, 2000)
}).then(function (username, email) {
    console.log("this is the three work  thee ");
    console.log(username, email);

})
const p4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ Age: "200", Num: "9140374323", City: "Jaipur" })
    }, 2000)
}).then(function (A, n, c) {
    console.log(A);
    console.log(n);
    console.log(c);
})
console.log(" THIS IS THE RUN THE PROMISE FIVE ");
const p5 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let data = false;
        if (!data) {
            resolve({ st: 'nepal', st1: 'UP' });
        }
        else {
            reject({ erro: "EERRO Ocuure" });
        }
    }, 2000)
})
p5
    .then((st) => {
        console.log(st)
        return st.st;
    })
    .then((st) => {
        console.log(st);
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(()=>{
        console.log(" you are work in the done ");
    })
const plast=new Promise(function(resolve,reject){
    setTimeout(function(){
        let data=true;
        if(!data){
            resolve({c:'javascript',c1:'java'})
        }
        else{
            reject({e:'error the file js '})
        }
    },1000)
})
async function stor(){
    try{
    const response=await plast;
    console.log(response);
    }
    catch(e){
        console.lof(e);
        console.log("handle the erroe with the file of the js ");
    }

}
