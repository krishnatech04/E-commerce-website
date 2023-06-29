import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
 

const Cart = () => {
  const postData = useSelector(state => state.post.postData);
  const cartData = postData.filter(data  => data.isCart);
  let subTotal = 0, tax = 0.99, total = 0;
  for (let i=0; i<cartData.length; i++){
      subTotal += cartData[i].price;
  }
  total = subTotal + tax;

   const isAuthenticated = sessionStorage.getItem('authToken'); 
   if(!isAuthenticated){
      return <Navigate to="/login" />
   } 
  return (
    <div className="container">
      <h2 className="post_title">Cart <small>({cartData.length})</small></h2>
      {
          cartData.length === 0 && 
      <h2 className="post_title">Please Select items & check again .</h2>
      }
      <ul className="post_wrapper">
        {cartData.map(post => {
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
                <span>Quantity: <strong className="green_clr">{post.quantity}</strong></span>
              </div>
            </li>
           )
        })}
       
      </ul>
        {
          cartData.length > 0 && 
          <div className="final_wrapper">
            <h4 className="sub_head">Subtotal <span className="sub_no">$ {subTotal.toFixed(2)}</span></h4>
            <h4 className="sub_head">Tax <span className="sub_no">$ {tax}</span></h4>
            <h4 className="head_tit">Total <span className="head_no">$ {total.toFixed(2)}</span></h4>
            <h5 className="apply_promo">Apply Promo Code : <span className="promo_count">2 Promos</span></h5>
            <button className="checkout_btn">CheckoutPage</button>
          </div> 
        }
    </div>
  );
};

export default Cart;
