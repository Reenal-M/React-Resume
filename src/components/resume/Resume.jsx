import React from 'react'
import './Resume.css';
import pic from '../../images/pic.jpg'

function Resume() {
  return (   <div className='resume-container'>
       
       <h1 className='b'>RESUME</h1>
      <hr />

      <h2 className='s'>REENAL MISHAL MARTIS</h2>
      <h5 className='r' >web developer</h5>
    <div>  
      <div className='abc'>
    <img src={pic}/>
    </div>
      <div className='xyz'>
      <h3>Contact Details</h3>
            <span>123-456-789</span>
            <br />
            <span>abc.gmail.com</span>
            <br />
            <span>Github:</span>
            <a href="https://github.com/Reenal-M" target="_blank">click here</a>
        </div> 
      <hr/>
      </div>
      <h3 >PROFILE</h3>
      <div className='bio'>Iam a web developer , currently a fresher , studying in Shri Madhwa Vadiraja Institute Of Technology and Managemnet . Have a strong creative and analytic skill.
        Team player with an eye for detail .
      </div>
      <h3 >EDUCATION</h3>
      <h5>HIGH SCHOOL</h5>
      <span>St.John's Academy</span>
      <h5>PRE UNIVERSITY</h5>
      <span>St.John's composite PU college</span>
    <h3 >SKILLS</h3>
    <ul>
      <li>Web developer</li>
      <li>Design Thinking</li>
      <li>Strong communication</li>
      <li>problem-solving</li>

      </ul>
      <h3>CERTIFICATION</h3>
      <ul>
        <li>Hackathon</li>
        <li>Aurdino</li>
        <li>C++</li>
        <li>Mini project</li>
        <li>Cyber Security</li>
      </ul>
   
      {/* { <div className='row'>
        <div className='col col-1'>
          <h1>Col 1</h1>
        </div>
        <div className='col col-2'>
          <h1>Col 2</h1>
        </div>
      </div> } */}

      {/* { <table className='ss'>
        <tr >
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
        </tr>
      </table> }  */}
    </div>  
  )
}

export default Resume