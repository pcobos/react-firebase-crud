import React, {useEffect} from 'react';
import LinkForm from './LinkForm';
import {db} from "../firebase";

const Link = () => {

  const addOrEditLink = async (linkObject) => {
    await db.collection('links').doc().set(linkObject)
    console.log("Your first Firestore record, baby!");
  }

  const getLinks = async () => {
    const querySnapshot = await db.collection('links').get();
    querySnapshot.forEach(link => {
      console.log(link.data());
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