 // install方法封装
const install = Vue =>{
    var requireComponent = require.context('.',false,/\.vue/);
    requireComponent.keys().forEach(fileName =>{
        let config = requireComponent(fileName);
        Vue.component(config.default.name,config.default)
    })
}

export default install;
