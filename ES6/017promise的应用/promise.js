// 使用promise的形式进行动态添加
const posts = [
    {title:"this is one title",body:"this is a best body,because he belongs first title"},
    {title:"this is two title",body:"this is a best body,because he belongs second title"},
    {title:"this is three title",body:"this is a best body,because he belongs thirdly title"},
];
function getPosts() {
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}---${post.body}</li>`
        });
        document.getElementsByClassName("getPost")[0].innerHTML = output;
    },1000) //这个 1 秒模仿的是异步数据加载使用的时间
}


// 异步创建数据，在写入HTML中：
function createPost(post) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);   //将新添加的数据 push 到数组里
            const error = false;
            if(!error){
                resolve();
            }else {
                reject("Error：发生了某些错误");
            }
        },2000) //这个 2 秒 模仿的是你 异步新添加的数据比你 加载数据 的时间长（上面）
    });

}
createPost({title:"这是异步新添加的数据",body:"这是一个好的body，因为他是新添加的body"})
    .then(getPosts)         //当异步数据添加进去后，在调用加载方法
    .catch(err=>console.log(err));

// promise.all:
const promise1 = Promise.resolve("Hello World");
const promise2 = Promise.resolve(20);
const promise3 = new Promise(function (resolve,reject) {
    setTimeout(resolve,2000,"goodBye")
});
const promise4 = fetch("http://jsonplaceholder.typicode.com/users")
    .then(res=> res.json());        //fetch方法要返回两次then，第一次要把数据 以 json 的数据形式给他返回回去


// 可以将多个promise对象放在一个promise.all里去执行：
Promise.all([promise1,promise2,promise3,promise4]).then(value => {console.log(value)});


// async 和 await        要使用await，必须用async定义
async function init() {
    await createPost({title:"这是用await新添加的数据",body:"这是一个好的body，因为他是await添加的body"});
    // 执行完 await 之后才会执行 getPosts()；
    getPosts();
}
init();

// 用fetch请求时用await执行：
async function fetchUsers() {
    const res = await fetch("http://jsonplaceholder.typicode.com/albums");
    const data = await res.json();
    console.log(data);
}
fetchUsers();