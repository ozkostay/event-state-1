import React from 'react';

export default function ProjectList({projects}) {
  
  return (
    <main className='mainflex'>{projects.map((item, index)=> ( 
      <img className='pictures' key={index} src={item.img} alt={"logo"}/>
      ))}
    </main>
  )
}
