export const SETNAME = 'SETNAME'
export const SETUSERNAME = 'SETUSERNAME'
export const SETEMAIL = 'SETEMAIL'
export const SETMOBILE = 'SETMOBILE'

export const setName = (name) =>({
    type: SETNAME ,
    payload : name
})

export const setUserName = (name) =>({
    type: SETUSERNAME ,
    payload : name
})

export const setEmail = (name) =>({
    type: SETEMAIL ,
    payload : name
})

export const setMobile = (name) =>({
    type: SETMOBILE ,
    payload : name
})