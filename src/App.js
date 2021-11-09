import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'Portfolio', description: 'Projects I Have Worked On'
    },
    { 
      name: 'Contact', description: 'Reach Out Here' 
    },
    { 
      name: 'Resume', description: 'Work & Coding Experience' 
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
          {currentCategory.name == "Portfolio"? (
            <About></About>
          ) : 
          currentCategory.name == "Contact"? (
            <About></About>
          ) : 
          currentCategory.name == "Resume"? (
            <About></About>
          ) : (
            <About></About>
          )}
      </main>
    </div>
  );
}

export default App;
