import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM.render(HTML標籤，顯示位置)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.querySelector("#root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
