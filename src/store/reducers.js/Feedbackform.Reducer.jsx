

const initialValues={
    userData:{
        uname: "",
        cnum: "",
        email: "",
        courses: [],
        mode: "",
        date: new Date(),
        interested: null,
        remarks: "",
        nextcalldate: ""
    },
    students:[] 
}

function savaFormData(keyName,formData){
    const storeFormdata=JSON.parse(window.localStorage.getItem('enquiries'))|| []
    storeFormdata.push(formData)
    localStorage.setItem(keyName,JSON.stringify(storeFormdata))
}

const FeedbackFormReducer=function(state=initialValues,action){
   

    if(action.type==='ADD'){
       savaFormData('enquiries',action.payload)
        return {...state,students:[...state.students,action.payload]}
    }
    return state
}

export default FeedbackFormReducer