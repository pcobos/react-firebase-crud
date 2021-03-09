import React, {useEffect, useState} from 'react';
import LinkForm from './LinkForm';
import {db} from "../firebase";

const Link = () => {
  const [links, setLinks] = useState([])

  const addOrEditLink = async (linkObject) => {
    await db.collection('links').doc().set(linkObject)
    console.log("Your first Firestore record, baby!");
  }

  const getLinks = async () => {
    const linkObjects = [];
    db.collection('links').onSnapshot((querySnapshot) => {
      querySnapshot.forEach(link => {
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
        <LinkForm addOrEditLink={addOrEditLink}/>
      </div>
      <div className="col-md-8">
        {links.map(link => {
          return (
            <div className="card p-2 mb-2">
              <div className="card-body">
                <h4>{link.name}</h4>
                <p>{link.description}</p>
                <a href={link.url} target="_blank">Go to Website</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Link;