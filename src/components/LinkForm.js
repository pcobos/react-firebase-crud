import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const LinkForm = (props) => {

  const initialStateAttributes = {
    url: '',
    name: '',
    description: ''
  }

  const [formValues, setFormValues] = useState(initialStateAttributes)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditLink(formValues);
    setFormValues({...initialStateAttributes})
  }
  
  const getLinkById = async (id) => {
    const doc = await db.collection('links').doc(id).get();
    setFormValues({...doc.data()});
  }
  
  useEffect(() => {
    if (props.currentId === ''){
      setFormValues({...initialStateAttributes})
    } else {
      getLinkById(props.currentId);
    }
  }, [props.currentId])

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input 
          type="text" 
          className="form-control" 
          name="url" 
          placeholder="url.com" 
          onChange={handleInputChange}
          value={formValues.url}
          />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input 
          type="text" 
          className="form-control" 
          name="name" 
          placeholder="Name" 
          onChange={handleInputChange} 
          value={formValues.name}
        />
      </div>

      <div className="form-group">
        <textarea 
            name="description" 
            rows="3" 
            className="form-control" 
            placeholder="Write a description" 
            onChange={handleInputChange}
            value={formValues.description}
          ></textarea>
      </div>

      <button className="btn btn-primary">
        {props.currentId === '' ? "Save" : "Update"}
      </button>
    </form>
  )
}

export default LinkForm;