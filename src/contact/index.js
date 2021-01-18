import React,{useState, useEffect} from 'react'

const Contact = ({setPath}) => {
    
    const [formData, setFormData] = useState({name:'', email:'', subject:'', message:''})

    const handleOnChange = (e)=>{
        const objectName = e.target.name
        const objectValue = e.target.value
        setFormData({...formData, [objectName]:objectValue})
    }
    
    useEffect(()=>{
        setPath("/React_CV/contact")
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)

    }
    return (
        <div>
           <form>
               <input type='text'
                      id='name'
                      name='name'
                      placeholder='Name'
                      value={formData.name}
                      onChange={(e)=>handleOnChange(e)}
                />
               <input type='email'
                    id='email'
                    name='email'
                    placeholder='email address'
                    value={formData.email}
                    onChange={handleOnChange}
                />
               <input type='text'
                      id='subject'
                      name='subject'
                      placeholder='subject' 
                      value={formData.subject}
                      onChange={handleOnChange}
                />
               <textarea
                     type='text'
                     id='message'
                     name='message'
                     placeholder='message'
                     value={formData.message}
                     onChange={handleOnChange}
                />
               <button type='submit' onClick={handleSubmit}>Send</button>
           </form>
        </div>
    )
}

export default Contact
