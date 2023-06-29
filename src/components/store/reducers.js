const cartReducers = {
    quantityIncrement(state, action) {
        const postId = action.payload;
        const post = state.postData.find( post => post.id === postId);
        post.quantity = post.quantity + 1
    },
    quantityDecrement(state, action) {
        const postId = action.payload;
        const post = state.postData.find(post => post.id === postId);
        post.quantity = post.quantity - 1;

    },
    addRemoveItemFromCart(state, action) {
        const postId = action.payload;
        const post = state.postData.find( post => post.id === postId);
        post.isCart = !post.isCart;
    }
}

export const counterReducers = {
    increment(state){
        state.count =  state.count + 1
        
    },
    decrement(state){
        state.count = state.count - 1
    }
}

export default cartReducers;