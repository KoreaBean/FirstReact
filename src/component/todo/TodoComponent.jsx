import { useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import {  retrieveTodoApi } from "./api/hellowApi";
import { Field, Formik,Form, ErrorMessage } from "formik";
export default function TodoComponent(){
  const use = useAuth()
  const userName = use.userName
  const {id} = useParams()
  
  const [description,setDescription] = useState('')
  const [targetDate, setTargetDate] = useState('')
  useEffect(() => callDate(), [id])

  function callDate(){
    retrieveTodoApi(userName,id)
    .then( response => {
      setDescription(response.data.description)
      setTargetDate(response.data.targetDate)
      console.log(response.data)}
    )
    .catch(response => console.log(response))
  }

  function onSubmit(value){
    console.log(value)

  }
  function validate(value){
    let errors ={}

    if(value.description.length <5){
      errors.description = 'Enter atleast 5 characters'
    }
    if(value.targetDate == null){
      errors.targetDate = 'Enter a target date'
    }
    console.log(value)
    return errors

  }

  return(
    <div>
      <h1>Enter Todo Details</h1>
      <div>
        <Formik 
        initialValues={{description,targetDate}}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validate={validate}
        validateOnBlur = {false}
        validateOnChange ={false}
        >
          {
            (props) => (
              <Form>
                <fieldset className="form-group">
                  <label>Description</label>
                  <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                  />
                  <Field 
                  className="form-control"
                  type="text"
                  name="description"/>
                </fieldset>
                
                <fieldset className="form-group">
                  <label>TargetDate</label>
                  
                  <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                  />
                  <Field 
                  className="form-control"
                  type="date"
                  name="targetDate"/>
                </fieldset>
                <div>
                  <button className="btn btn-success m-5" type="submit">Save</button>
                </div>

              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  );
}