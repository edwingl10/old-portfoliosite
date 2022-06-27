import React from 'react';
import { useParams } from 'react-router-dom';
// import Projects from '../data/Projects';

export default function ViewProject() {
  const { id } = useParams();
  // const project = Object.keys(Projects).filter((p) => Projects[p].id == id);
  // console.log(project);

  return (
    <>
      <p>{id}</p>
    </>
  );
}
