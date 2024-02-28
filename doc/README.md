# chToast Plugin Documentation

## Installation
To install the chToast plugin, use npm or yarn:

```bash
npm i ch_plugins
import {normal} from "ch_plugins/chToast/dist/normalToast/normalChToast";
import 'ch_plugins/chToast/assets/css/ch_style.css';


function App() {
  const a = () => {
    // for sucess message;
    normal.success({message: "adhdssfhsdfhadbgjasdggsadgsadg adjgajsdbv", onClick:"/a"});

    // for error message
    normal.error();

    // for loading message
    normal.loading();
  }
  return (
    <button onClick={a}>App</button>
  )
}

export default App;