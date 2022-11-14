const posts=[
    { title : 'Post One', body : 'This is post one', createdAt : new Date().getTime()},
    { title : 'Post Two', body : 'This is post Two', createdAt : new Date().getTime()}
];
let intervalId=0;
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index) =>{
            output+= `<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
    }, 1000);
}
    
        


function createPost(post){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
        posts.push(post)
        const error=false;
        if(!error)
        {
            resolve()
        }
        else
        {
            reject('Error : Something went wrong')
        }
        }, 2000)
    })
    
}
// const user={
// }
// function updateLastActivityTime(){
// }
// function deletePost(){
//     return new Promise((resolve, reject)=>{
//      setTimeout(()=>{
//         if(posts.length>0)
//         {
//             const lastElement=posts.pop()
//             resolve(lastElement)
//         }
//         else
//         {
//             reject('Array is empty now')
//         }
       
//     }, 1000)
// });
// }


// createPost({title : 'Post three' ,body :'This is post Three',createdAt : new Date().getTime()})
// createPost({title : 'Post four',body:'This is post four',createdAt : new Date().getTime() })
// .then(()=>{
//     getPosts()
//     deletePost().then(()=>{
//         getPosts()
//         deletePost().then(()=>{
//             getPosts
//             deletePost().then(()=>{
//                 getPosts()
//                 deletePost().then(()=>{})
//                 .catch((err)=>{
//                     console.log(err)
//                 })
//             })
//         })
//     })
// })

const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3= new Promise((resolve, reject)=>
setTimeout(resolve, 2000, 'GoodBye')
);
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));



