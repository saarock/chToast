# chToast Plugin Documentation

## Installation
To install the chToast plugin, use npm or yarn:

```bash
npm i ch_plugins
```


## Usage
First, import the normal object from the chToast plugin and the required CSS file:

javascript
Copy code
```bash
import { normal } from "ch_plugins/chToast/dist/normalToast/normalChToast";
import "ch_plugins/chToast/assets/css/ch_style.css";
```
Then, you can use the normal object to display different types of toast messages in your application:

```bash
function App() {
  const showToast = () => {
    // Display a success message
    normal.success({ message: "Your success message here", onClick: "/path" });

    // Display an error message
    normal.error({ message: "Your error message here" });

    // Display a loading message
    normal.loading({ message: "Your loading message here" });
  }

  return (
    <button onClick={showToast}>Show Toast</button>
  );
}

export default App;


```

## Features
1. **Success Message:** Display a success message with a custom message, optional onClick action and other many options check out [Documentation which is comming soon](https://codehons-af9l.vercel.app/).
2. **Error Message:** Display an error message with a custom message.
3. **Loading Message:** Display a loading message with a custom message.




## License
This plugin is licensed under the MIT License.