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
    });
    console.log(linkObjects);
    setLinks(linkObjects);
  }

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <LinkForm addOrEditLink={addOrEditLink}/>
      {links.map((link, index) => {
        return (
          <h1>{link.name}</h1>
        )
      })}
      <h1>Bamba 3</h1>
    </div>
  )
}

export default Link;