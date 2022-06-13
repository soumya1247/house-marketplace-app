// const arr = [1,2,3];
// const arr1 = [4,5];
// const newArr = [...arr,...arr1];
// console.log(newArr);

// const parentFunction = () => {
//     let private = 'Private Element';

//     const childFunction = () => {
//         let private = 'Super Private Element'
//         console.log(private);
//     }

//     return childFunction
// }

// const execution = parentFunction();
// console.log(execution())

const fetchSomething = async () => {
    try{
    const response = await fetch(``, {
        method: 'POST',
        body: {}
    })
    const data = await response.json()
    }catch(err){
        console.log(err);
    }
}