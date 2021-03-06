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
    db.collection('links').onSnapshot((querySnapshot) => {
      querySnapshot.forEach(link => {
        console.log(link.data());
      });
    });
    
  }

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <LinkForm addOrEditLink={addOrEditLink}/>
      <h1>Bamba 3</h1>
    </div>
  )
}

export default Link;