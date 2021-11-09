import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Resume', description: 'Delicious delicacies' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
          <About></About>
      </main>
    </div>
  );
}

export default App;
