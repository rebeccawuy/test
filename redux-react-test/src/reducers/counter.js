function counter (state = 0, action) {
    switch (action.type){
        case "INCREASED":
            return state + 1;
        case "DECREASED":
            return state - 1;
        default: 
            return state;
    }
}

export default counter;