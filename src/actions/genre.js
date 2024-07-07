export const addGenre = (id) => ({
    type : 'ADDGENRE' ,
    payload : id
})

export const removeGenre = (id) => ({
    type : 'DELETEGENRE' ,
    payload : id
})