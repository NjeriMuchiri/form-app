import React from 'react';
import styled from 'styled-components';


function formApp(){


  return (
    <section>
        <form>
          <label for="fname">FirstName:</label>
        </form>
    </section>
  )
}
const form = styled.form`
    display:flex;
    flex-direction: column;
    justify-content:center ;
    align-items:center; 
`;

export default formApp;