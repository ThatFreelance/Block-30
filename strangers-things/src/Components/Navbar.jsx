import { Link } from "react-router-dom"



function Navbar() {
  return (
    <>
    <div className="navbar">
    <h1>Stranger Things</h1>
    <Link to='/'>Home</Link>
    <Link to='/posts'>Posts</Link>
    <Link to='/login'>Login</Link>
    </div>
    </>
  )
}

export default Navbar