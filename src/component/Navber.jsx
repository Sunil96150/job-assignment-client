import React, { useContext } from 'react';
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import AuthContext from '../pages/provider/Authcontext';
import Swal from 'sweetalert2';

const Navber = () => {

  const {user , logOutUser} = useContext(AuthContext)

  const handelLogOut = () =>{
    logOutUser()
    .then( ()=>{
      console.log('Successfull Log Out')

      Swal.fire({
                          title: "Log out Successful!",
                          text: "Log Out this website.",
                          icon: "success",
                          confirmButtonText: "OK",
                      })
    })
    .then(error =>{
      console.log('here your error' , error)
    })
  }


    const Home = <Link to = '/'>Home</Link>
    const Assignments = <Link to ='/about'>About</Link>
    const Dashboard = <Link to ='/addassignment'>Add Assignmnets</Link>


    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>{Home}</li>
      <li>{Dashboard}</li>
      <li>{Assignments}</li>
      </ul>
    </div>
    <div>
        <img className='w-28 h-28'
        src={Logo} alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>{Home}</li>
      <li>{Dashboard}</li>
      <li>{Assignments}</li>
    </ul>
  </div>
  <div className="navbar-end">
      <div>
        {
          user ? <>
                   <button onClick={handelLogOut} className='btn btn-primary'>Log out</button>
          </> :
          <>
           <Link to='/login'>
                <button className='btn btn-primary'>Log in</button>
         </Link>
          </>        }
      </div>
    
   
  </div>
</div>
    );
};

export default Navber;