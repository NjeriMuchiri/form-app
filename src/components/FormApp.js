import React,{useState} from 'react';

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
}

  return (
    <section>
        <form>
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
          <input 
           type="textarea"
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
        <input type="submit" name="submit"  value="submit"/>
        </form>
    </section>

  )
  
}


export default FormApp;