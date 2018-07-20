//https://redux.js.org/basics/actions
//https://cn.redux.js.org/


import { createStore } from "../node_modules/redux";

// reducer的形式为：(state, action) => state的纯函数
function counter(state = 0, action){
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// store 用来存放应用状态
let store = createStore(counter);

// 可以手动订阅更新，也可以事件绑定到视图层
store.subscribe(()=>
    console.log(store.getState())
);

// 改变state唯一方法是dispatch一个action（action可以被序列化）
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})