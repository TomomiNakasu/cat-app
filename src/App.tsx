import { useState, useEffect } from 'react'

import './App.css'

interface ICat {
  cat_id: number;
  cat_name: string;
}

function App() {
  const [cats, setCats] = useState<ICat[] | undefined>(undefined);

  const URL_GET = 'https://cat-backend-ten.vercel.app/api/cats';
  
  useEffect(() => {
    fetch(URL_GET)
      .then((response) => response.json())
      .then((cats) => {
      
        setCats(cats)
      })
  }, []);
  

  return (
    <div>
        {cats !== undefined && cats.map((cat) => (
          <p key={cat.cat_id}>{cat.cat_name}</p>
        ))}
    </div>
  )
}

export default App
