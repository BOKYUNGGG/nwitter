import { useState } from "react";
import Router from "./Router";
import {auth} from '../firebase'

function App() {
  const [user, setUser] = useState(auth.currentUser)
  return (
    <div>
      <Router login={user}/>
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
