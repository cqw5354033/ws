
class EasyHttp{
    // get  请求
    async get(url){
        // 如果没有return的话就是返回undefined
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    // post 传入
    async post(url,data){
        // 如果没有return的话就是返回undefined
            const response = await fetch(url,{
                method:"POST",  //请求方法
                headers:{       //请求头
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)   //传的是json的字符串
            });
            const resData = await response.json();
            return resData;
        };


    // put  更新数据
    async put(url,data){
            const response = await fetch(url,{
                method:"PUT",  //请求方法
                headers:{       //请求头
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)   //传的是json的字符串
            });
            const putData = await response.json();
            return putData;
    }

    // delete 删除数据
     async delete(url){
            const response = await fetch(url,{
                method:"PUT",  //请求方法
                headers:{       //请求头
                    'Content-type':'application/json'   //数据类型
                }
            });
            const deleteData = await "数据删除成功!";
            return deleteData;
    }

}
