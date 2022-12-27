import React, {useState} from 'react';
import ToolbarItem from './ToolbarItem';
import ProjectList from './ProjectList';

export default function Toolbar({filters, selected, onSelectFilter}) {
  
  const [selectedCategory, setSelected] = useState(selected);
  const projects = onSelectFilter(selectedCategory);

  return (
    <>
      <nav className='navs'>{filters.map((item, index)=> ( 
        <ToolbarItem key={index} item={item} filtering={setSelected}/>
        ))}
      </nav>
      <ProjectList projects={projects}/>
    </>
  );

}
