const reducer = (state={
    isSignedIn: false,
    usermail: ""
}, action) =>{
    switch (action.type)
    {
        case "SET_ISSIGNEDIN":
            return state={
                ...state,
                isSignedIn: true
            }
        case "SET_USER":
            return state={
                ...state,
                usermail: action.payload
            }
            
        default:
            return state;
    }
}

export default reducer;