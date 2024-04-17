import React from 'react'
import { useParams } from 'react-router-dom'
import {connect} from 'react-redux'

function StudentDetails(props) {
  let {name}=useParams()
  const [studentData,setStudentData]=React.useState(null)
  console.log(props.Feedback.students)
  let prevData=JSON.parse(localStorage.getItem('enquiries'))
  let s=prevData.find(each=>each.uname===name)
  
  return (
    
    <div>
      <h1>StudentDetails</h1>
      
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Contact</td>
              <td>Email</td>
              <td>Courses</td>
              
            </tr>
          </thead>
          <tbody>
            
              
                <tr>
                  <td>{s.uname}</td>
                  <td>{s.cnum}</td>
                  <td>{s.email}</td>
                  <td>{s.courses.join(", ")}</td>
                 
                </tr>
              

            
          </tbody>
        </table>
      
    </div>
  )
}

export default connect(store=>store)(StudentDetails)