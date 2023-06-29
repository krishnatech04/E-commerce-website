import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/uiPosts";

const Header = () => {
  const counter = useSelector(state => state.counter.count)
  const postData = useSelector(state => state.post.postData);
  const cartData = postData.filter(data => data.isCart);
  const navigate = useNavigate();




  const removeAuthToken = () => {
    sessionStorage.removeItem('authToken');
    navigate('/login')
  }
  const authToken = sessionStorage.getItem('authToken');
  return (
    <header className="header">
      <div className="container">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? "active" : undefined}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => isActive ? "active" : null }
            >
              Cart <small>({cartData.length}) </small>
            </NavLink>
          </li>
          {!authToken 
          ?
          <li>
          <NavLink
            to="/login"
            className={({ isActive }) => isActive ? "active" : undefined}
            end
          >
            LogIn
          </NavLink>
        </li> :
           <li>
           <button onClick={removeAuthToken}>Logout</button>
         </li>
           }
        </ul>
      </div>
    </header>
  );
};

export default Header;
