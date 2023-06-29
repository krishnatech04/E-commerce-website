import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from '../store/uiPosts';
import { Navigate } from 'react-router';

const Home = () => { 
const dispatch = useDispatch();
const postsData = useSelector(state => state.post.postData)
const {quantityDecrement, quantityIncrement, addRemoveItemFromCart} = actions;
 
const handleQuantityIncrement = (postId) => {
  dispatch(quantityIncrement(postId))
}

const handleQuantityDecrement = (postId) => {
  dispatch(quantityDecrement(postId));
}

const handleAddCart = (postId) => {
  dispatch(addRemoveItemFromCart(postId))
}
const isAuthenticated = sessionStorage.getItem('authToken'); 
if(!isAuthenticated){
  return <Navigate to="/login" />
} 

  return (
    <div className="container">
      <h2 className="post_title">Dashboard</h2>
      <ul className="post_wrapper">
        {postsData.map(post => {
           return (
              <li className="post" key={post.id}>
              <h4 className="badge">{post.discount} OFF</h4>
              <div className="image">
                <img src={post.img} alt={post.name} />
              </div>
              <div className="stars">
                {
                  post.star.map(star => {
                    return <img key={post.id + Math.random() + 100 / 55} src={star} alt="star" />
                  })
                }
                 </div>
              <h2 className="title">{post.name}</h2>
              <h6 className="price_wrap">
                <span className="font-xsssss text-grey-500">$</span>
                {post.price}
                <span className="ms-auto text-grey-500 fw-500 font-xsssss">
                {post.weight}
                </span>
              </h6>
              <div className="number">
                <button className="minus" onClick={() => {handleQuantityDecrement(post.id)}} disabled={post.quantity <= 1}>-</button>
                <input type="text" className="open-font" value={post.quantity} onChange={() => {}}/>
                <button className="plus" onClick={() => {handleQuantityIncrement(post.id)}}>+</button>
                <button className={!post.isCart ? "add_cart not_added" : "add_cart added"} onClick={() => handleAddCart(post.id)}>
                  {post.isCart ? 'Remove from cart': 'Add to cart'}
                  </button>
              </div>
            </li>
           )
        })}
       
      </ul>
    </div>
  );
};

export default Home;
