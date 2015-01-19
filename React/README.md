
[reactify](https://github.com/andreypopp/reactify)


    React Components --> 
    DOM 事件(payload形如 {type:'click', id: 42}) --> 
    Action(dispatch 方法) --> 
    Store(注册的回调拿到了 payload，开始判断如何 mutate 数据，mutate 完之后触发 change 事件) --> 
    Controller-View(之前监听了 change 事件，发现数据更新了，那重新 render 一下吧) --> 
    React Components(parent 传来的 props 变了，重新 render 一下吧) 