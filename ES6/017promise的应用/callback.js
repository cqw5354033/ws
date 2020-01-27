// 使用回调函数的形式进行动态添加
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
// getPosts();
// console.log("test");

// 异步创建数据，在写入HTML中：
function createPost(post, callback) {
    setTimeout(()=>{
        posts.push(post);   //将新添加的数据 push 到数组里
        callback();         //当异步数据添加进去后，在调用加载方法
    },2000) //这个 2 秒 模仿的是你 异步新添加的数据比你 加载数据 的时间长（上面）
}
createPost({title:"这是异步新添加的数据",body:"这是一个好的body，因为他是新添加的body"},getPosts);
