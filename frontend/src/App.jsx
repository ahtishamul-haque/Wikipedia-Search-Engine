import { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [language, setLanguage] = useState('en');

  const searchWikipedia = async () => {
    if (!query.trim()) return;
    try {
      const response = await fetch(
        `https://${language}.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${query}`
      );
      const data = await response.json();
      setResults(data.query.search);
    } 
    catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Wikipedia&nbsp;</h1>
        <h1 className="title title-b">Search Engine</h1>
      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Wikipedia"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && searchWikipedia()}/>
        <button onClick={searchWikipedia}>Search</button>
      </div>

      <div className="language-container">
        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
          <option value="ur">Urdu</option>
        </select>
      </div>

      <ul className="results">
        {results.map((item) => (
          <li key={item.pageid}>
            <a
              href={`https://${language}.wikipedia.org/?curid=${item.pageid}`}
              target="_blank"
              rel="noreferrer">
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
            </a>
          </li>
        ))}
      </ul>

      <footer>
        <a href="https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use">Terms of Use</a> | <a href="https://foundation.wikimedia.org/wiki/Policy:Privacy_policy">Privacy Policy</a>
      </footer>
    </div>
  );
}

export default App;
