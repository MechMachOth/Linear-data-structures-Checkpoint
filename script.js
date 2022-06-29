


let A = [13, 10, 16, 15];
let B = [12, 13, 6, 10 , 70 , 75 , 80 , 90 ,10];
let sum = 0;
x= A.length;
y=B.length;


//ADDITION DES NOMBRES REPETER 
//array 
function SumOfOverlappingElements(){
    sum=0;
    for (let i = 0 ; i<x ; i++ ){
        for (let j = 0 ; j<y ; j++){
            console.log(B[j],A[i])
        if (A[i] == B[j]){
            sum += A[i] + B[j];
            console.log(sum)
        }}
    }
return sum;
}

//ADDITION DES NOMBRES REPETER 
//hash table
function SumOfOverlappingElements2(){
    sum=0;
    let obj = {}
    for(let i = 0 ; i<x ; i++){
        obj[A[i]]= true;
    }
    for (let j = 0 ; j<y ;j++){
        if(obj[B[j]]){
            console.log(B[j], obj[B[j]])
            sum=sum + B[j]*2
            console.log(sum)
        }
    }
return sum;}


//ADDITION DES NOMBRES NON REPETER 
//array
function SumOfOverlappingElements1() {
    sum = 0;
    for (let i = 0 ; i<y ; i++){
        
        let z = A.includes(B[i])
    console.log(z)
        if(z === false){
            sum = sum + B[i];
            console.log(sum)
        }
 }
for(let j = 0 ; j<x ; j++){
    let o = B.includes(A[j])
    console.log(o)
    if ( o === false){
        sum = sum + A[j];
        console.log(sum)
    }

 }
return sum;

}

//ADDITION DES NOMBRES NON REPETER 
//hash table
function SumOfOverlappingElements3() {
    sum=0;
    let obj = {}
    let obj1= {}
    for(let i = 0 ; i<x ; i++){
        obj[A[i]]= true;
    }
    for (let j = 0 ; j<y ;j++){
        if(obj[B[j]]!= true){
            console.log(B[j])
            sum=sum + B[j]
            console.log(sum)
        }
    }
    for(let i = 0 ; i<y ; i++){
        obj1[B[i]]= true;
    }
    for (let j = 0 ; j<x ;j++){
        if(obj1[A[j]]!= true){
            console.log(A[j])
            sum=sum + A[j]
            console.log(sum)
        }
    }
return sum;

}

