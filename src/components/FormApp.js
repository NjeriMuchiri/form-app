import React,{useState} from 'react';
import styled from 'styled-components';
import Banner from '../Images/banner.jpg';

const initialState ={
  fname:'',
  lname:'',
  email:'',
  phoneNumber:'',
  message:'',
  password:''

}

const FormApp = () => {
const [form, setForm ] = useState(initialState);

const handleChange = (e) =>{
  setForm({...form, [e.target.name]: e.target.value})
};
const handleSubmit = (e) =>{
   e.preventDefault();
}
const Wrapper = styled.section`
 background: linear-gradient( rgba(1,1,1,0.6),rgba(0,0,0,0.7)),url(${Banner}) center/cover no-repeat fixed;
 min-height:100vh;
`;
const Form = styled.form `
   display:flex;
   flex-direction:column ;
   align-items:center ;
   justify-content:center ;
   padding-top:100px ;
`;
  return (
    <Wrapper>
        <Form>
          <label htmlFor="fname">FirstName:</label>
          <input 
          type="text"
          name="fname" 
          onChange={handleChange}
          required
          />
          <label htmlFor="lname">LastName:</label>
          <input 
          type="text" 
          name="lname" 
          onChange={handleChange}
          required
          />
          <label htmlFor="email">Your Email:</label>
          <input
           type="email" 
           name="email" 
           onChange={handleChange}
           required
           />
          <label htmlFor="phonenumber">PhoneNumber:</label>
          <input 
          type="text" 
          name="phoneNumber" 
          onChange={handleChange}
          required
          />
          <label htmlFor="message">Leave a Message</label>
          <textarea 
           name="message"
           onChange={handleChange}
           required
         />
        <label htmlFor="password">Password</label>
        <input
        type="password"
        name="password"
        onChange={handleChange}
        required
        />
        <input type="submit" name="submit"  value="submit" onSubmit={handleSubmit}/>
        </Form>
    </Wrapper>

  )
  
}



export default FormApp;