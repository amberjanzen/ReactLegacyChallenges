import React from 'react';
import CatIndex from './CatIndex'
import { Container } from 'reactstrap'
// import CatIndex from "./CatIndex";
 
const Cats = () => {
   return (
     <Container className="App">
       <br/>
       <h1 className="App-intro">
         Cat List Challenge
       </h1>

       {/* <hr /> */}
        {/* <ul>
         <li>Render the list of cat breeds to the screen</li>
         <li>Use props correctly</li>
         <li>Use .map() correctly</li>
         <li>Ensure there are no errors</li>
        </ul> */}
        <hr />
       <CatIndex />
     </Container>
   );

}
 
export default Cats;
