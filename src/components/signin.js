import '../styles/auth.css';
import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import {isEmail} from '../functions/isEmail'

function Signin(props) {
  
  const [currentEmail, setCurrentEmail ] = useState('')
  const [currentPassword, setCurrentPassword ] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()
    

  const toSignup = () => {
    history.push('/signup')
  }

 
  const submit = () => {
    // axios.get(`http://localhost:1337/categories`)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    // create user
    
    // login
   console.log('here')
    if(isEmail(currentEmail)){
      console.log(props.url)
      axios
      .post(props.url+'/auth/local', {
          identifier: currentEmail,
          password: currentPassword,
      })
      .then(response => {
          props.setMyJwt(response.data.jwt)
          localStorage.setItem('jwt', response.data.jwt);
          console.log(response.data.jwt)
          history.push('/home')
          
      })
      .catch(error => {
          console.log('An error occurred:', error.response);
      });
    } else {
      setError('Input is invalid')
    }


}

  const onKeyPressed = (e) => {
      // console.log(e.keyCode);
      if(e.keyCode == 13){
        submit()
      }
  }


  return (
    <div onKeyDown={onKeyPressed} className="login-box">
      <h2 >Signin</h2>
      <form>
        <div className="user-box">
          <input onChange={(event) => setCurrentEmail(event.target.value)} value={currentEmail} type="text" name='name' required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input onChange={(event) => setCurrentPassword(event.target.value)} value={currentPassword} type="password" name='name' required />
          <label>Password</label>
        </div>
        <div className='error'>
          {error}
        </div>
        <div className="user-box-flex">
            <a onClick={submit} className='user-box-flex_button' >
            <span />
            <span />
            <span />
            <span />
            Submit
            </a>
            <a onClick={toSignup} className='user-box-flex_auth_button' >
              Signup
            </a>
        </div>
      </form>
       
  </div>
  );
}

Signin.propTypes = {
  setMyJwt: PropTypes.func,
  url: PropTypes.string
}


export default Signin;
