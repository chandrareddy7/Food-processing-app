import { Link } from "react-router-dom"
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile-comp">
      <Link to="/orders" className="orders">
        Orders
      </Link>
      <button className="logout">Logout</button>
    </div>
  )
}
export default Profile