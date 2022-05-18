import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
  return (
    <div>
        {
            user && <button className='btn btn-danger d-block ms-auto m-5'>Logout</button> 
        }
    </div>
  )
}

export default Header;