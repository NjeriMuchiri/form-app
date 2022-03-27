import React,{useState} from 'react';
import styled from 'styled-components';
import Banner from '../Images/banner.jpg';

const initialState = {
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
 min-height:120vh;
`;
const Form = styled.form `
   display:flex;
   flex-direction:column ;
   align-items:center ;
   justify-content:center ;
   font-family:'Comfortaa', cursive ;
   padding-top:30px ;
  
`;
const Input = styled.input `
    padding:12px 40px;
    margin-bottom:12px ;
    margin-top:5px;
    margin-bottom:15px ;
`;
const Textarea = styled.textarea `
    padding:20px 40px;
    margin-bottom:10px ;

`;
const Button = styled.button`
    background-color:#b0e0e6 ;
    padding:10px 20px;
    outline:transparent;
    border-color:transparent ;
    margin-top:10px ;
    border-radius:20px 10px ;
    text-transform:uppercase ;
    letter-spacing:0.1em ;
    font-family:'Sansita', cursive ;
    cursor: pointer;
    transition:all 500ms linear ;
    &:hover {
     color:#0abab5;
     font-weight:800;
     
    }
`;
  return (
    <Wrapper>
        <Form>
          <label htmlFor="fname">FirstName:</label>
          <Input 
          type="text"
          name="fname" 
          onChange={handleChange }
          required
          />
          <label htmlFor="lname">LastName:</label>
          <Input 
          type="text" 
          name="lname" 
          onChange={handleChange}
          required
          />
          <label htmlFor="email">Your Email:</label>
          <Input
           type="email" 
           name="email" 
           onChange={handleChange}
           required
           />
          <label htmlFor="phonenumber">PhoneNumber:</label>
          <Input 
          type="text" 
          name="phoneNumber" 
          onChange={handleChange}
          required
          />
          <label htmlFor="message">Leave a Message</label>
          <Textarea 
           name="message"
           onChange={handleChange}
           required
         />
        <label htmlFor="password">Password</label>
        <Input
        type="password"
        name="password"
        onChange={handleChange}
        required
        />
        <Button type="button" name="submit"  value="submit" onSubmit={handleSubmit}>Submit</Button>
        </Form>
    </Wrapper>

  )
  
}



export default FormApp;