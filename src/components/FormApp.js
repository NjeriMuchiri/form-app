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
const Label = styled.label `
   color:#afeeee;
   letter-spacing:0.08em;
`;
const Input = styled.input `
    padding:12px 40px;
    margin-bottom:12px ;
    margin-top:5px;
    margin-bottom:15px ;
    border-radius:50px  40px;
    border-color:transparent;
    &:focus{
      outline:none;
    }
`;
const Textarea = styled.textarea `
    padding:20px 40px;
    margin-bottom:10px ;
    border-radius:5px;
    border-color:transparent;
    &:focus{
      outline:none;
    }
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
    transition:all 0.3s linear ;
    &:hover {
     color:#0abab5;
     font-weight:800;
     
    }
`;
const FormApp = () => {
const [form, setForm ] = useState(initialState);

const handleChange = (e) =>{
  setForm({...form, [e.target.name]: e.target.value})
};
const handleSubmit = async (e) =>{
   e.preventDefault();

   await fetch("http://localhost:5001/send", {
     method:"POST",
     headers:{
        "Content-type":"application/json"
     },
     body: JSON.stringify({...form})
   })
   .then((res) =>res.json())
   .then(async (res)=> {
     const resData = await res;
     console.log(resData);
     if(resData.status === "success"){
       alert("Message sent successfully");
     }else if(resData.status === 'fail'){
       alert("Message failed to send")
     }
   })

}

  return (
    <Wrapper>
        <Form>
          <Label htmlFor="fname">FirstName:</Label>
          <Input 
          type="text"
          name="fname" 
          onChange={handleChange}
          required
          />
          <Label htmlFor="lname">LastName:</Label>
          <Input 
          type="text" 
          name="lname" 
          onChange={handleChange}
          required
          />
          <Label htmlFor="email">Your Email:</Label>
          <Input
           type="email" 
           name="email" 
           onChange={handleChange}
           required
           />
          <Label htmlFor="phonenumber">PhoneNumber:</Label>
          <Input 
          type="text" 
          name="phoneNumber" 
          onChange={handleChange}
          required
          />
          <Label htmlFor="message">Leave a Message</Label>
          <Textarea 
           name="message"
           onChange={handleChange}
           required
         />
        <Label htmlFor="password">Password</Label>
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