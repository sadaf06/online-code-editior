import { useEffect, useState } from "react";
import { Editor } from "./container/Editor";
import uselocalStorage from "./container/uselocalStorage";

function App() {
  const [html, setHtml] = uselocalStorage('html', '')
  const [css, setCss] = uselocalStorage('css', '')
  const [js, setJS] = uselocalStorage('js', '')
  const [rendorOutput, setRendorOutput] = useState('')
  useEffect(() => {
    const delay = setTimeout(() => {
      setRendorOutput(`
            <html>
            <style>${css}</style>
            <body>${html}</body>
            <script>${js}</script>
            </html>`)
    }, 500)
    return () => clearTimeout(delay)
  }, [html, css, js])



  return (
    <>
      <div className="editors-container">
        <Editor
          language="xml"
          heading="HTML"
          value={html}
          onChange={setHtml} />
        <Editor
          language="css"
          heading="CSS"
          value={css}
          onChange={setCss} />
        <Editor
          language="js"
          heading="Javascript"
          value={js}
          onChange={setJS} />
      </div>
      <div className="web-dom">
        <h5>Preview</h5>
        <iframe
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          srcDoc={rendorOutput}
        />
      </div>
    </>
  );
}

export default App;
