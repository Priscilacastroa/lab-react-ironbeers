import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/index"
import { Beers} from "./pages/beers/index"
/* import { NewBeer } from "./pages/newBeer/index" */
import { RandomBeer } from "./pages/random-beer/index"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          
          <Route path="/random-beer" element={<RandomBeer/>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;


//<Route path="/user-profile" element={<UserProfile />} />