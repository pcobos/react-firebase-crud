import React, {useEffect, useState} from 'react';
import LinkForm from './LinkForm';
import {db} from "../firebase";
import { toast } from 'react-toastify';

const Link = () => {
  const [links, setLinks] = useState([])
  const [currentId, setCurrentId] = useState('');

  

  const addOrEditLink = async (linkObject) => {
    if (currentId === '') {
      await db.collection('links').doc().set(linkObject);
      toast('Link added successfully', {
      type: "success",
      autoClose: 1500
      })
    } else {
      await db.collection('links').doc().update(linkObject);
      toast('Link updated successfully', {
      type: "warning",
      autoClose: 1500
      })
    }
  }

  const deleteLink = async (id) => {
    if (window.confirm('Are you sure that you want to delete this link?')) {
      await db.collection('links').doc(id).delete();
      toast('Link has been deleted', {
        type: "error",
        autoClose: 1500,
        position: "bottom-center"
      })
    }
  }

  const getLinks = async () => {
    db.collection('links').onSnapshot((querySnapshot) => {
      const linkObjects = [];
      querySnapshot.forEach((link) => {
        linkObjects.push({...link.data(), id: link.id})
      });
      setLinks(linkObjects);
    });
  }

  useEffect(() => {
    getLinks();
  }, []);



  return (
    <div>
      <div className="col-md-4 mb-2">
        <LinkForm {...{addOrEditLink, currentId, links}}/>
      </div>
      <div className="col-md-8">
        {links.map(link => {
          return (
            <div className="card p-2 mb-2" key={link.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4>{link.name}</h4>
                  <div className="icons">
                    <i className="material-icons" onClick={() => setCurrentId(link.id)}>create</i>
                    <i className="material-icons text-danger" onClick={() => deleteLink(link.id)}>close</i>
                  </div>
                </div>
                <p>{link.description}</p>
                <a href={link.url} target="_blank" rel="noreferrer noopener">Go to Website</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Link;