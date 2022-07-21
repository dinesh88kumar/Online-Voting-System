
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from "react-dom";
import { useHistory } from "react-router-dom";
import './landingpage.css'
function Landing() {
    let history = useHistory();
    return (
       
        <div> 
        <div className='header'>
      
      <ul className="header">
        <li><h2 className='header'>Online Voting System</h2></li>
        <li><button className='button-4' onClick={() => { history.push('/login') }}>Login</button></li>
        <li><button className='button-4' onClick={() => { history.push('/registration') }}>Register</button></li>
        <li><button className='button-4' onClick={() => { history.push('/admin') }}>Admin</button></li>
      </ul>
      
  
  <div className="content">
  
  <h2>Wecome to Online voting System</h2>
  <p></p>
         
  </div>
</div>
            
               {/*} <button onClick={() => { history.push('/login') }}>Login</button>
                <br></br>
                <button onClick={() => { history.push('/registration') }}>Register</button>
                <br></br>
                <button onClick={() => { history.push('/admin') }}>Admin</button>
            </body>
            <body>
                <h1 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',}}>
                    Welcome to the Online Voting System
                </h1>
                </body>*/}
        </div>

    );
}
export default Landing