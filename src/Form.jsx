import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {connect} from 'react-redux'
import {useEffect} from 'react'



const registrationSchema=Yup.object({
    uname:Yup.string().min(2,'Too Short').max(15,'Too long').matches(/^[a-zA-Z\\s]+$/,'shoud contain only alphabets and spaces').required('Required'),
    email:Yup.string().email('Enter valid email').required('*Email is Required'),
    cnum:Yup.string().length(10,'Must be 10 digits').required('Required'),
    mode:Yup.string().oneOf(["offline","online"]).required('please select mode'),
    courses:Yup.array().min(1, "at least one must be selected"),
    date: Yup.date().default(() => new Date()) ,
    nextcalldate:Yup.date().min(Yup.ref('date'), 'call date must be after enquiry date'),
    interested:Yup.string().required("Please select a interest status"),
    remarks:Yup.string().required('Required'),
   
    
})  
function Form(props) {
    console.log(props)
    let prevData=JSON.parse(localStorage.getItem('enquiries'))

    // if(props.Feedback.students.length==0 && prevData!==null){
    //     props.dispatch({type:'ADD',payload:[...prevData]})
    // }
    
   

    let formik = useFormik({
        initialValues: {
            uname: "",
            cnum: "",
            email: "",
            courses: [],
            mode: "",
            date: new Date(),
            interested: "",
            remarks: "",
            nextcalldate: ""

        },
        validationSchema:registrationSchema,
        onSubmit: (fd,{resetForm}) => {
            props.dispatch({type:'ADD',payload:fd})
            resetForm()
        }
    })
    return (
        <div className='form-container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='d-flex flex-row justify-content-center '>
                    <div className='enquiry-section w-50 p-5 pt-1 pb-1'>
                        <div className='enquiry-container'>
                            <h5 className='mb-5 mt-3'>ENQUIRY FORM</h5>
                            <div className='d-flex justify-content-between w-100'>
                                <div class="form-floating mb-3 w-50" >
                                    <input type="text" className="form-control in"  {...formik.getFieldProps('uname')} id="floatingInput" placeholder="Name" />
                                    <label for="floatingInput">Name</label>
                                    {formik.errors.uname&& formik.touched.uname&&<span className="error-msg" >{formik.errors.uname}</span>}

                                </div>
                                <div class="form-floating w-46" >
                                    <input type="text" className="form-control field" id="floatingPassword" {...formik.getFieldProps('cnum')} placeholder="Phone Number" />
                                    <label for="floatingPassword">Phone Number</label>
                                    {formik.errors.cnum&&formik.touched.cnum &&<span className="error-msg">{formik.errors.cnum}</span>}
                                </div>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" {...formik.getFieldProps('email')} placeholder="Email" />
                                <label htmlfor="floatingInput">Email address</label>
                                {formik.errors.email&&formik.touched.email &&<span className="error-msg">{formik.errors.email}</span>}
                            </div>


                        </div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='courses-container'>
                                <h6>COURSE</h6>
                                <input type="checkbox" id="angular" value='frontendwithangular' name='courses' onChange={formik.handleChange}/>
                                <label htmlFor="angular">Frontend With angular</label>
                                <br />
                                <input type="checkbox" id="react" value='frontendwithreact' name='courses' onChange={formik.handleChange}/>
                                <label htmlFor="react">Frontend With react</label>
                                <br />
                                <input type="checkbox" id="java" value='fullstackjava'name='courses' onChange={formik.handleChange} />
                                <label htmlFor="java">Full Stack JAVA</label>
                                <br />
                                <input type="checkbox" id="MEAN" value='mean' name='courses' onChange={formik.handleChange}/>
                                <label htmlFor="MEAN">MEAN</label>
                                <br />
                                <input type="checkbox" id="MERN" value='mern' name='courses' onChange={formik.handleChange}/>
                                <label htmlFor="MEAN">MERN</label>
                                <br />
                                <input type="checkbox" id="devops" value='Devops'name='courses' onChange={formik.handleChange}/>
                                <label htmlFor="devops">Devops</label>
                               
                                {formik.errors.courses&& formik.touched.courses &&<p className="error-msg">{'* '+formik.errors.courses}</p>}

                            </div>
                          
                            <div className='mode'>
                                <h6>Mode</h6>
                                <input type="radio" {...formik.getFieldProps('mode')} value='offline' /> <label>offline</label><br />
                                <input type="radio" {...formik.getFieldProps('mode')} value='online' /> <label>online</label><br />
                                {formik.errors.mode&& formik.touched.mode &&<span className="error-msg">{'*'+formik.errors.mode}</span>}


                            </div>
                        </div>

                    </div>
                    <div className='feedback-section w-50 p-5 pt-1 pb-1'>
                        <h5 className='mb-5 mt-3'>FEEDBACK</h5>
                        <div className='d-flex flex-row justify-content-between w-100'>
                            <div class="form-floating mb-3 w-50">
                                <input type="date" class="form-control"  {...formik.getFieldProps('date')} id="floatingInput" placeholder="date" />
                                <label for="floatingInput">Date</label>
                                {formik.errors.date&&formik.touched.date&& <span className="error-msg">{formik.errors.date}</span>}

                            </div>
                            <div class="form-floating mb-3 w-49">
                                <select class="form-control" {...formik.getFieldProps('interested')}>
                                    <option selected disabled value="null">Choose an option </option>
                                    <option value='Interested' name="interested">Interested</option>
                                    <option value='Not Interested' name='interested' >Not Interested</option>
                                </select>
                                <label for="floatingInput">Interest</label>
                                {formik.errors.interested&&formik.touched.interested &&<span className="error-msg">{formik.errors.interested}</span>}

                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea {...formik.getFieldProps('remarks')}  class="form-control" cols="30" rows="10" id="floatingInput" placeholder="remarks"></textarea>
                            <label for="remarks">remarks</label>
                            {formik.errors.remarks&& formik.touched.remarks &&<span className="error-msg">{formik.errors.remarks}</span>}

                        </div>
                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" {...formik.getFieldProps('nextcalldate')} id="floatingInput" placeholder="next call date" />
                            <label for="floatingInput">Next call Date</label>
                            {formik.errors.nextcalldate&&formik.touched.nextcalldate && <span className="error-msg">{formik.errors.nextcalldate}</span>}

                        </div>
                    </div>

                </div>
                <div className='save-button-container'>
                    <button className='btn btn-primary' type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default connect(store=>store)(Form)