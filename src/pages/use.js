// Vue.use 源码
const initUse = Vue => {
    Vue.user = function(plugins){
        let pluginsInstall = (this._pluginsInstall || (this._pluginsInstall = []));
        //去重  判断如果已经安装过了，则返回已经安装的对象，不再继续往下执行，跳出当前函数
        if(pluginsInstall.indexOf(plugins) > 0){
            return this;
        }
        const args = toArray(arguments,1);
        args.unshift(this);
        // 我们的install方法分为两种
        if(typeof plugins.install === 'function'){
            // 改变this到当前你封装的插件内
            plugins.install.apply(plugins,args)
        }else if(typeof plugins === 'function'){
            plugins.apply(null,args)
        }
        pluginsInstall.push(plugins);
        return this;
    }
    function toArray (list, start) {
        start = start || 0;
        let i = list.length - start;
      //将存放参数的数组转为数组，并除去第一个参数（该组件）
        const ret = new Array(i)
      //循环拿出数组
        while (i--) {
          ret[i] = list[i + start]
          console.log(ret[i])
        }
        return ret
      }
}

export default initUse;