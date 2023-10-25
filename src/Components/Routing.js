import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import HtmlPage from "../Routes/HtmlPage";
import CssPage from "../Routes/CssPage";
import JavascriptPage from "../Routes/JavascriptPage";
import WelcomePage from "../Routes/WelcomePage";
import Output from "../Routes/Output";
import "../App.css";
function Routing() {
  let [html, setHtml] = useState("");
  let [css, setCss] = useState("");
  let [js, setJs] = useState("");

  const srcDoc = `
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>`;

  useEffect(() => {
    localStorage.setItem("css", html);
    localStorage.setItem("html", css);
    localStorage.setItem("js", js);

  }, [html,css,js]);

  useEffect(() => {
    if(localStorage.getItem('html')){
    localStorage.getItem('html');
  }
    localStorage.getItem('css');
    localStorage.getItem('js');
    
  }, []);

  return (
    <>
      <div>
      <BrowserRouter>

        <Sidebar>
            <Routes>
            
              <Route path="/" element={<WelcomePage lock/>} />

              <Route
                path="/html"
                element={
                  <HtmlPage language="xml" html={html} handleChange={setHtml} />
                }
              />
              <Route
                path="/css"
                element={
                  <CssPage language="css" css={css} handleChange={setCss} />
                }
              />
              <Route
                path="/javascript"
                element={
                  <JavascriptPage
                    language="javascript"
                    js={js}
                    handleChange={setJs}
                  />
                }
              />
              <Route path="/output" element={<Output srcDoc={srcDoc} />} />
            </Routes>
        </Sidebar>

        </BrowserRouter>

      </div>
    </>
  );
}

export default Routing;
