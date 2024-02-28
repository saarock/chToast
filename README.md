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
Add this container in the global page example in react index.html
``` bash

    <div class="ch_toast_container">

    </div>
```
**Or in react at index.html**.
```bash

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <!-- ch_toast_container -->
    <div class="ch_toast_container">

    </div>

    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>



```
Then, you can use the normal object to display different types of toast messages in your application:

```bash
function App() {
  const showToast = () => {
    // Display a success message
    normal.success({  message: "Your error comes here",
    id: "error",
    transition: 0.4,
    timeOut: 2,
    messageColor: "white",
    typeIconColor: "white",
    backgroundColor: "red",
    cutIconColor: "white",
    cutIconBackgroundColor: "black",
    borderBackColor: "pink",
    sound: true,
    onClickGo: "/kk",
    toastClassName: "ch_toast",
    messageClassName: "ch_toast_message",
    typeIconClassName: "ch_toast_icon",
    cutIconClassName: "ch_toast_cut_icon",
    typeIcon: "<i class='fas fa-exclamation-circle'></i>",
    float: "right",
    typeIconBackgroundColor: "black" });

    // Display an error message
    normal.error({  message: "Your error comes here",
    id: "error",
    transition: 0.4,
    timeOut: 2,
    messageColor: "white",
    typeIconColor: "white",
    backgroundColor: "red",
    cutIconColor: "white",
    cutIconBackgroundColor: "black",
    borderBackColor: "pink",
    sound: true,
    onClickGo: "/kk",
    toastClassName: "ch_toast",
    messageClassName: "ch_toast_message",
    typeIconClassName: "ch_toast_icon",
    cutIconClassName: "ch_toast_cut_icon",
    typeIcon: "<i class='fas fa-exclamation-circle'></i>",
    float: "right",
    typeIconBackgroundColor: "black"});

    // Display a loading message
    normal.loading({  message: "Your error comes here",
    id: "error",
    transition: 0.4,
    timeOut: 2,
    messageColor: "white",
    typeIconColor: "white",
    backgroundColor: "red",
    cutIconColor: "white",
    cutIconBackgroundColor: "black",
    borderBackColor: "pink",
    sound: true,
    onClickGo: "/kk",
    toastClassName: "ch_toast",
    messageClassName: "ch_toast_message",
    typeIconClassName: "ch_toast_icon",
    cutIconClassName: "ch_toast_cut_icon",
    typeIcon: "<i class='fas fa-exclamation-circle'></i>",
    float: "right",
    typeIconBackgroundColor: "black"});
  }

  return (
    <button onClick={showToast}>Show Toast</button>
  );
}

export default App;


```

## Features
1. **Success Message:** Display a success message with a custom message, optional onClick action and other many options check out [Documentation which is comming soon](https://codehons-af9l.vercel.app/).
   1. onclick options to the every toast and send to the another loaction by providing url.
   2. Can give own className and use own styles.
   3. Can provide own message.
   4. Can trun off auto closed option.
   5. Can give the position to the toast float: left or right.
  
2. **Error Message:** Display an error message with a custom message.
   1. onclick options to the every toast and send to the another loaction by providing url.
   2. Can give own className and use own styles.
   3. Can provide own message.
   4. Can trun off auto closed option.
   5. Can give the position to the toast float: left or right.



3. **Loading Message:** Display a loading message with a custom message.
   1. onclick options to the every toast and send to the another loaction by providing url.
   2. Can give own className and use own styles.
   3. Can provide own message.
   4. Can trun off auto closed option.
   5. Can give the position to the toast float: left or right.
   6. Control loading toast.




## License
This plugin is licensed under the MIT License.