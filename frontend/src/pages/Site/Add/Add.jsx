import React, { useState } from 'react'
import axios from 'axios'
import{Formik,Form,Field} from 'formik'
const Add = () => {
  const[name,setName]=useState('')
  const [price,setPrice]=useState('')
  const [desc,setDesc]=useState('')
  const item={
    name,
    price,
    desc
  }
  return (
    <div>
      <Formik onSubmit={()=>{
        axios.post('http://localhost:8085/',item).then((res)=>{

        })
      }} initialValues={{name:'',price:'',desc:''}} >
        <Form>
          <Field  onChange={(e)=>{
            setName(e.target.value)
          }} value={name} type="text"/>
          <Field onChange={(e)=>{
            setPrice(e.target.value)
          }} value={price} type="Number"/>
          <Field onChange={(e)=>{
            setDesc(e.target.value)
          }} value={desc} type="text"/>
          <button type='submit'>submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Add
