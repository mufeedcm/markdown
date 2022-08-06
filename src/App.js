import './App.css';
import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
function App() {
  const [markdown, setMarkdown] = useState("# markdown");
  return (
    <div className="container">
      <div className='inner'>
        <div className='text'>
          <textarea value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}>
          </textarea>
        </div>
        <div className='preview' >
          <article >
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
