import '../App.css';
import axios from 'axios';
import {useState} from 'react'
import { useHistory } from "react-router-dom";

function Signup(props) {

  const [currentEmail, setCurrentEmail ] = useState('')
  const [currentPassword, setCurrentPassword ] = useState('')
  const history = useHistory()
    

  const toSignup = () => {
    history.push('/signup')
  }


  const click = () => {
    // axios.get(`http://localhost:1337/categories`)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    // create user
    
    // login

    axios
    .post('http://localhost:1337/auth/local', {
        identifier: currentEmail,
        password: currentPassword,
    })
    .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        props.setMyJwt(response.data.jwt)
        
        history.push('/')
        
    })
    .catch(error => {
        console.log('An error occurred:', error.response);
    });

    

  // axios.get('http://localhost:1337/categories', {
  //   headers: {
  //     Authorization:
  //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI1NTgxNzQ4LCJleHAiOjE2MjgxNzM3NDh9.RBehxk-UNwXFcxpktBw5EF8vxhm_9yQoYMG7Dx5k6dA',
  //   },
  // }).then(response => {
  //   console.log(response)
  // }).catch(error => {
  //   console.log('An error occurred:', error.response);
  // });

}



  return (
    <div className="login-box">
      <h2>Signin</h2>
      <form>
        
        <div className="user-box">
          <input onChange={(event) => setCurrentEmail(event.target.value)} value={currentEmail} type="text" name required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input onChange={(event) => setCurrentPassword(event.target.value)} value={currentPassword} type="password" name required />
          <label>Password</label>
        </div>
        <div className="user-box-flex">
            <a onClick={click} className='user-box-flex_button' href="#">
            <span />
            <span />
            <span />
            <span />
            Submit
            </a>
            <a onClick={toSignup} className='user-box-flex_button' href="#">
            <span />
            <span />
            <span />
            <span />
            Signup
            </a>
        </div>
      </form>
  </div>
  );
}

export default Signup;
