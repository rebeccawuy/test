//https://redux.js.org/basics/actions
//https://cn.redux.js.org/
//http://lesscss.org/


import { createStore, combineReducers } from "../node_modules/redux";

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


function visibilityFilter (state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter;
    } else {
        return state;
    }
}

function todo (state = [], action) {
    switch (action.type){
        case 'ADD_TODO':
            return state.concat([{text: action.text, completed: false}]);
        case 'TOGGLE_TODO':
            return state.map((todo, index) => 
                action.index === index ? {text: todo.text, completed: !todo.completed} : todo
            )
        default:
    }
}

function todoApp (state = {}, action) {
    return{
        todo: todo(state.todo, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
}

let reducer = combineReducers({ visibilityFilter, todos })