import {v4 as uuid} from 'uuid'
import React, { useEffect } from 'react'
import SearchFilter from './SearchFilter'
import SearchContainer from './SearchContainer'
import { Link, parsePath } from 'react-router-dom'
import { connect } from 'react-redux'

function AllEnquiries(props) {
    console.log(props)
    let [data, setData] = React.useState([])
    let [backupdata, setBackUp] = React.useState([])
    useEffect(() => {
        // let stuData = JSON.parse(localStorage.getItem('enquiries'))
        let stuData=props.Feedback.students
        setData(stuData)
        setBackUp(stuData)
    }, [])
    let search=function(e) {
        let searchRes = data.filter(eachStudent => eachStudent.uname.includes(e.target.value))
        setData(searchRes)
        e.target.value == "" && setData(backupdata)
    }
    return (
        <div className='d-flex flex-column'>
            <SearchContainer search={search}/>

            <div className='d-flex'>
                <div>
                    <SearchFilter backupdata={backupdata}/>
                </div>
                <div className='border w-75'> {
                <table className='table w-50 m-auto'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>contact</th>
                            <th>Email</th>
                            <th>Courses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((student) => {
                                return <tr key={uuid()}>
                                    <td><Link to={`${student.uname}`}>{student.uname}</Link></td>
                                    <td>{student.cnum}</td>
                                    <td>{student.email}</td>
                                    <td>{student.courses.join(', ')}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }</div>
            </div> 
        </div>
    )
}

export default connect(store=>store)(AllEnquiries)


