import React, {useEffect} from 'react';
import LinkForm from './LinkForm';
import {db} from "../firebase";

const Link = () => {

  useEffect(async () => {
    await const records = db.collection('links').get();
    console.log(records);
  }, [])

  const addOrEditLink = async (linkObject) => {
    await db.collection('links').doc().set(linkObject)
    console.log("Your first Firestore record, baby!");
  }

  return (
    <div>
      <LinkForm addOrEditLink={addOrEditLink}/>
      <h1>Bamba 3</h1>
    </div>
  )
}

export default Link;