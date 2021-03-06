import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./styles/globlaStyles";
import theme from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "./util/scrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
