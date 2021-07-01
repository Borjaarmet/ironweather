import { Switch, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import WeatherInfo from "./views/WeatherInfo";
import NotFoundPage from "./views/NotFoundPage";
//import Favourites from "./views/Favourites";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/weatherinfo" component={WeatherInfo} />
      <Route path="/404" component={NotFoundPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
