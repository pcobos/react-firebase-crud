import React, { useState } from 'react';

const LinkForm = () => {

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
    console.log(formValues);
  }

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input type="text" className="form-control" name="url" placeholder="url.com" onChange={handleInputChange}/>
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input type="text" className="form-control" name="name" placeholder="Name" onChange={handleInputChange}/>
      </div>

      <div className="form-group">
        <textarea name="description" rows="3" className="form-control" placeholder="Write a description" onChange={handleInputChange}></textarea>
      </div>

      <button className="btn btn-primary">
        Save
      </button>
    </form>
  )
}

export default LinkForm;