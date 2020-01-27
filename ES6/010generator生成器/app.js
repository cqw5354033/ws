const data = [
    {
        name: '米斯特吴',
        age: 30,
        gender: '男',
        lookingfor: '女',
        location: '北京',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: '吴先生',
        age: 32,
        gender: '男',
        lookingfor: '女',
        location: '上海',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name: '李女士',
        age: 24,
        gender: '女',
        lookingfor: '男',
        location: '北京',
        image: 'https://randomuser.me/api/portraits/women/83.jpg'
    }
];

// 迭代器的方法：es5：
/*function profileIterator(profile) {
    let profileIndex = 0;
    return{
        next:function () {
            return profileIndex<profile.length ?
                {value:profile[profileIndex++],done:false} :
                {value:undefined,done:true}
        }
    }
}*/
// 生成器: es6
function* profileIterator() {
    yield data[0];
    yield data[1];
    yield data[2];
}

const profiles = profileIterator(data);
// console.log(profiles.next());

// 先手动调用一次,就可以刚进页面就显示
nextProfile();

document.getElementById("next").addEventListener("click",nextProfile);  //添加点击事件
function nextProfile() {
    const currentProfile = profiles.next().value;
        // 通用的配置文件
    // console.log(currentProfile);
    if(currentProfile != undefined){
        document.getElementById("profileDisplay").innerHTML=`
        <ul class="list-group">
            <li class="list-group-item">姓名:${currentProfile.name}</li>
            <li class="list-group-item">年龄:${currentProfile.age}</li>
            <li class="list-group-item">住址:${currentProfile.location}</li>
            <li class="list-group-item">性别:${currentProfile.gender},寻找的对象是${currentProfile.lookingfor}性朋友</li>
        </ul>
        `;
        document.getElementById("imageDisplay").innerHTML=`
            <img src="${currentProfile.image}"/>
        `;
    }else{
        window.location.reload();
    }

}
