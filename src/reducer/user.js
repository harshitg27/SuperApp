const initialState = {
    name: '',
    username: '',
    email: '',
    mobile: ''
    // user:{
    //     name:'' , 
    //     username: '',
    //     email:'' ,
    //     mobile: ''
    // }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETNAME':
            return {
                ...state,
                name: action.payload
            };
        case 'SETUSERNAME':
            return {
                ...state,
                username: action.payload
            };
        case 'SETEMAIL':
            return {
                ...state,
                email: action.payload
            };
        case 'SETMOBILE':
            return {
                ...state,
                mobile: action.payload
            };
        default:
            return state;
    }
};

export default reducer