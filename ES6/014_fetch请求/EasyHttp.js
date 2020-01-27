
class EasyHttp{
    // get  请求
    get(url){
        // 如果没有return的话就是返回undefined
        return new Promise((resolve, reject)=>{
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }
    // post 传入
    post(url,data){
        // 如果没有return的话就是返回undefined
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method:"POST",  //请求方法
                headers:{       //请求头
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)   //传的是json的字符串
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }

    // put  更新数据
    put(url,data){
        // 如果没有return的话就是返回undefined
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method:"PUT",  //请求方法
                headers:{       //请求头
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)   //传的是json的字符串
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }

    // delete 删除数据
    delete(url){
        // 如果没有return的话就是返回undefined
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method:"PUT",  //请求方法
                headers:{       //请求头
                    'Content-type':'application/json'   //数据类型
                }
            })
                .then(res => res.json())
                .then(data => resolve("数据删除成功"))
                .catch(err => reject(err))
        });
    }

}
