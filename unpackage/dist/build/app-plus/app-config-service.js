
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabBar/API/API","pages/tabBar/component/component","pages/tabBar/template/template","pages/tabBar/extUI/extUI"],"window":{"pageOrientation":"portrait","navigationBarTextStyle":"white","navigationBarTitleText":"Hello uniapp","navigationBarBackgroundColor":"#007AFF","backgroundColor":"#F8F8F8","backgroundColorTop":"#F4F5F6","backgroundColorBottom":"#F4F5F6"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/tabBar/API/API","iconPath":"static/sy2.png","selectedIconPath":"static/sy.png","text":"首页"},{"pagePath":"pages/tabBar/component/component","iconPath":"static/bs2.png","selectedIconPath":"static/bs.png","text":"办税"},{"pagePath":"pages/tabBar/template/template","iconPath":"static/fw.png","selectedIconPath":"static/fw2.png","text":"服务"},{"pagePath":"pages/tabBar/extUI/extUI","iconPath":"static/grzx.png","selectedIconPath":"static/grzx2.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"native","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"lmd2","compilerVersion":"2.8.11","entryPagePath":"pages/tabBar/API/API","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabBar/API/API","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","titleNView":false}},{"path":"/pages/tabBar/component/component","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"办税","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},{"path":"/pages/tabBar/template/template","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"服务","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},{"path":"/pages/tabBar/extUI/extUI","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
