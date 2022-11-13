const posts=[
    { title : 'Post One', body : 'This is post one', createdAt : new Date().getTime()},
    { title : 'Post Two', body : 'This is post Two', createdAt : new Date().getTime()}
];
let intervalId=0;
function getPosts(){
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        let output='';
        posts.forEach((post, index) =>{
            output+= `<li>${post.title}- last updated ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`;
        })
        document.body.innerHTML=output;
    }, 1000);
}
    
        


function createPosts(post, callback){
    setTimeout(()=>{
        posts.push({...post, createdAt : new Date().getTime()})
        callback()
    }, 2000)
}

createPosts({ title : 'Post Three', body : 'This is post Three', createdAt : 'Third'}, getPosts)

function create4thPost(post, createPost){
    setTimeout(()=>{
        posts.push({...post, createdAt : new Date().getTime()})
        createPost()
    },2000)
}
createPosts({ title : 'Post Four', body : 'This is post Four', createdAt : 'Fourth'}, getPosts)