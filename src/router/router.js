let routers=  [

  {
    path: "/dashboard",
    name: "dashboard",
    redirect:{
      name:'home'
    },
    component:"dashboard/index",
    children:[
      {
        meta:{title:"首页"},
        component: 'home/index',
      },
      {
        meta:{title:"我的"},
        component: 'mine/index',
      },
      {
        meta:{title:"商品"},
        component: 'order/index',
      },
        {
            meta:{title:"category"},
            component: 'category/index',
        },
      {
        meta:{title:"cart"},
        component: 'cart/index',
      }
    ]
  },
  {
    meta:{title:"登录页"},
    component: 'login/index',
  },
  {
    path:"*",
    redirect:{
      name:'login'
    }

  }
];

let getRouter = function(){
  createRoute(routers);
  return routers;
}

//动态生成路由

function createRoute(arr){
  for (let i=0;i<arr.length;i++) {
    if (!arr[i].component)return;
    let val = getValue(arr[i].component);
    //生成name
    arr[i].name = arr[i].name || val.replace(/\//g,'_');
    //生成path
    arr[i].path = arr[i].path || `/${val}`;

    let componentFun = import(`@/views/${arr[i].component}.vue`)
    arr[i].component = ()=>componentFun
    if(arr[i].children && arr[i].children.length >0){
      createRoute(arr[i].children);
    }

  }
}


function getValue(str){
  let index = str.lastIndexOf('/')

  let val = str.substring(index+1,str.length);
  if(val === "index"){
    return str.substring(index,-1);
  }
  return str;
}

export default getRouter();
