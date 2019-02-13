import axios from 'axios';
// Vue.use(axios);//不是所有的插件都支持 use 安装

export default{
  install:function(Vue){
    Vue.prototype.$http=axios;
    window.axios=axios; //全局暴露
  }
}