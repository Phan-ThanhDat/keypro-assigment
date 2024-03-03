import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "simplebar-react/dist/simplebar.min.css";
import "./index.css";

import ReactDOM from "react-dom/client";

import App from "./App.tsx";

// Map clusterer is not working with strict mode
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
