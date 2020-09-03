/** 
 * initUse:接收两个参数，第一个参数是一个Object| Function，第二个参数一般省略
*/

const home = {
    temlpate:'<div>我是自己创建的组件</div>',
    name:'zimo',
    mounted(){
        console.log(this)
    }
}
home.install = Vue => Vue.component(home.name,home);

function initUse(Vue){
    Vue.user = function(plugins){
        let pluginsInstall = (this._pluginsInstall || (this._pluginsInstall = []));
        //去重  判断如果已经安装过了，则返回已经安装的对象，不再继续往下执行，跳出当前函数
        if(pluginsInstall.indexOf(plugins) > 0){
            return this;
        }
        toArray(arguments,1);
        args.unshift(this);
        // 我们的install方法分为两种
        if(typeof plugins.install === 'function'){
            // 改变this到当前你封装的插件内
            plugin.install.apply(plugin,args)
        }else if(typeof plugin === 'function'){
            plugin.apply(null,args)
        }
        pluginsInstall.push(plugins)
        return this
    }
    function toArray (list, start) {
        start = start || 0
        let i = list.length - start
      //将存放参数的数组转为数组，并除去第一个参数（该组件）
        const ret = new Array(i)
      //循环拿出数组
        while (i--) {
          ret[i] = list[i + start]
        }
        return ret
      }
}
initUse(zimoBtn) 




