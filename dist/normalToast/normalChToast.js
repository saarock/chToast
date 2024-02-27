// Normal chtoast which is free for all;
/* features

1: limited toast = 6;
 2: Not a advance removal and shower settings;
 3: Can add personal classNames and styles;
 4: Not a multi tasking;
 5: Can give click eventListener to the toast;

*/
// Properties are called in the ch_plugins built in parameters;
var ToastParameters;
(function (ToastParameters) {
    ;
})(ToastParameters || (ToastParameters = {}));
export class normalChToastSetting {
    success({ 
    // all the messages are the paramenters default values user can changes this values acording to there needs;
    message = "Your sucess messsages comes here.", id = "success", transition = 0.4, timeOut = 2, messageColor = "white", typeIconColor = "black", backgroundColor = "green", cutIconColor = "white", sound = true, onClickGo = "null", borderBackColor = "skyblue", left = "null", right = "null", cutIconBackgroundColor = "red", typeIconBackgroundColor = "red", toastClassName, messageClassName, typeIconClassName, cutIconClassName, typeIcon = "<i class='fas fa-check-circle'></i>", float = "right", } = {}) {
        // | /* or it takes nothings as a parameter if user want all default settings*/ defaultSettings: null|undefined
        // run the show method for sucess toast
        this.show({
            message,
            id,
            transition,
            timeOut,
            typeIconColor,
            messageColor,
            cutIconColor,
            backgroundColor,
            sound,
            onClickGo,
            borderBackColor,
            left,
            right,
            cutIconBackgroundColor,
            toastClassName,
            messageClassName,
            typeIconClassName,
            cutIconClassName,
            typeIcon,
            float,
            typeIconBackgroundColor,
        });
    }
    error({ message = "Your error comes here", id = "error", transition = 0.4, timeOut = 2, messageColor = "white", typeIconColor = "white", backgroundColor = "red", cutIconColor = "white", cutIconBackgroundColor = "black", borderBackColor = "pink", sound = true, onClickGo = "/kk", left, right, toastClassName = "ch_toast", messageClassName = "ch_toast_message", typeIconClassName = "ch_toast_icon", cutIconClassName = "ch_toast_cut_icon", typeIcon = "<i class='fas fa-exclamation-circle'></i>", float = "right", typeIconBackgroundColor = "black", } = {}) {
        this.show({
            message,
            id,
            transition,
            timeOut,
            messageColor,
            typeIconColor,
            backgroundColor,
            cutIconColor,
            sound,
            onClickGo,
            borderBackColor,
            left,
            right,
            cutIconBackgroundColor,
            toastClassName,
            messageClassName,
            typeIconClassName,
            cutIconClassName,
            typeIcon,
            float,
            typeIconBackgroundColor,
        });
    }
    loading({ message = "Your loading messages comes here.", id = "loading", transition = 0.4, timeOut = 2, messageColor = "white", typeIconColor = "white", backgroundColor = "#FF7F50", sound = true, cutIconColor = "red", onClickGo = "null", borderBackColor = "red", left, right, cutIconBackgroundColor = "green", toastClassName = "ch_toast", messageClassName = "ch_toast_message", typeIconClassName = "ch_toast_icon", cutIconClassName = "ch_toast_cut_icon", typeIcon = " <i class='fas fa-spinner fa-spin'></i>", float = "right", typeIconBackgroundColor = "green", } = {}) {
        this.show({
            message,
            id,
            transition,
            timeOut,
            messageColor,
            typeIconColor,
            backgroundColor,
            cutIconColor,
            sound,
            onClickGo,
            borderBackColor,
            left,
            right,
            cutIconBackgroundColor,
            toastClassName,
            messageClassName,
            typeIconClassName,
            cutIconClassName,
            typeIcon,
            float,
            typeIconBackgroundColor,
        });
    }
    // Method to show the toast;
    show({ message, transition, id, timeOut, messageColor, typeIconColor, cutIconColor, backgroundColor, sound, onClickGo, borderBackColor, left, right, cutIconBackgroundColor, toastClassName, messageClassName, typeIconClassName, cutIconClassName, typeIcon, float = "right", typeIconBackgroundColor, }) {
        var _a;
        if (!this.ch_toast_container) {
            this.ch_toast_container =
                document.getElementsByClassName("ch_toast_container");
            if (!this.ch_toast_container[0]) {
                throw new Error("ChTypeError ==> Pleased add the main container for the toast");
            }
        }
        // Stop adding more that 6 toast instead adding more follow the first in first out concept fifo and remove
        // the first toast and add the newest one
        if (this.ch_toast_container[0].childElementCount >= 6) {
            if (this.ch_toast_container[0].childElementCount > 0 &&
                this.ch_toast_container[0].children[normalChToastSetting.trackVariable]) {
                this.ch_toast_container[0].children[normalChToastSetting.trackVariable].remove();
                normalChToastSetting.trackVariable >= 5
                    ? (normalChToastSetting.trackVariable = 5)
                    : (normalChToastSetting.trackVariable -= 1);
            }
        }
        else {
            normalChToastSetting.trackVariable = 5;
        }
        // check there is Element or not to take all of our toast messages;
        if (this.ch_toast_container) {
            if (this.ch_toast_container[0].children.length >= 2) {
            }
            const childDivs = `
      <div class="ch_toast ${toastClassName ? toastClassName : ""}" id="${id ? id : ""}" style="background-color: ${backgroundColor}; float: ${float}">
        <div class="ch_toast_icon ${typeIconClassName ? typeIconClassName : ""}" style="color:${typeIconColor}; background-color:${typeIconBackgroundColor}">${typeIcon}</div>
        <div class="ch_toast_message ${messageClassName ? messageClassName : ""}" style="color:${messageColor};">${message}</div>
        <div class="ch_toast_cut_icon  ${cutIconClassName ? cutIconClassName : ""}" style="color:${cutIconColor}; background-color: ${cutIconBackgroundColor};"><i class="fas fa-times"></i></div>
        <div class="line" style="background-color: ${borderBackColor}"></div>
    </div>
        `;
            // Adding new element before the oldest ones
            const tempElement = document.createElement("div");
            tempElement.innerHTML = childDivs.trim();
            const toastElement = tempElement.firstChild;
            this.ch_toast_container[0].insertAdjacentElement("afterbegin", toastElement);
            //  if user set sound = true for the notification
            if (sound) {
                const soundTone = new Audio("../chToast/public/music/l.wav");
                this.playSound(soundTone);
            }
            //   EventListener for all the toast;
            if (onClickGo != "null" && onClickGo != null && onClickGo != undefined) {
                this.onClick(onClickGo);
            }
        }
        if (normalChToastSetting.autoRemoved && ((_a = this.ch_toast_container[0].firstElementChild) === null || _a === void 0 ? void 0 : _a.id) != "loading") {
            this.normalToastRemove(timeOut);
        }
        this.removeByClickingTheCutIcons();
    }
    //   normal toast removal
    normalToastRemove(timeOut, successMessage, successIcon) {
        // algorithm fo the loading toast;
        const loadingElements = document.querySelectorAll('#loading');
        if (loadingElements.length > 0) {
            loadingElements.forEach((toast) => {
                var _a;
                const message = (_a = toast.firstElementChild) === null || _a === void 0 ? void 0 : _a.nextElementSibling; // Assuming the progress bar is the last child element
                const icon = toast.firstElementChild; // Assuming the progress bar is the last child element
                if (icon && message) {
                    message.innerHTML = `${successMessage ? successMessage : "Done"}`;
                    icon.innerHTML = `${successIcon ? successIcon : "<i class='fas fa-check-circle'></i>"}`;
                    this.removeByDecreaseBorder(timeOut ? timeOut : 2, toast);
                }
            });
        }
        // algorithm for loading toast finished;
        // for other toast;
        const toast = this.ch_toast_container[0].children;
        // Check if there are toast messages in the container
        if (this.ch_toast_container[0].childElementCount > 0 && toast.length > 0) {
            [...toast].forEach((toast) => {
                this.removeByDecreaseBorder(timeOut ? timeOut : 2, toast);
            });
        }
    }
    removeByDecreaseBorder(timeOut, toast) {
        // Get the first toast message
        // const toast = this.ch_toast_container[0].firstElementChild;
        const line = toast === null || toast === void 0 ? void 0 : toast.lastElementChild; // Assuming the progress bar is the last child element
        let increase = 100; // Initial width of the progress bar
        // decrease rate formula (initial number  - final number) / outTime
        const decreaseRate = (100 - 0) / timeOut;
        // Function to decrease the width of the progress bar
        const decreaseWidth = () => {
            if (increase > 0) {
                increase -= decreaseRate; // Decrease the width based on the decrease rate
                line.style.width = `${increase}%`;
            }
            else {
                clearInterval(removeIncreaseLine); // Stop decreasing width when it reaches 0%
                toast === null || toast === void 0 ? void 0 : toast.remove(); // Remove the toast message
                this.removeByClickingTheCutIcons(); // Call function to handle other removal tasks
            }
        };
        // Set interval to decrease the width of the progress bar
        let removeIncreaseLine = setInterval(decreaseWidth, 1000); // Update the progress every 100 milliseconds
        // decreaseWidth();
        // Stop removal if the mouse hovers over the toast
        toast === null || toast === void 0 ? void 0 : toast.addEventListener("mouseenter", () => {
            clearInterval(removeIncreaseLine); // Clear the interval to stop decreasing the width
        });
        // Resume removal when the mouse leaves the toast
        toast === null || toast === void 0 ? void 0 : toast.addEventListener("mouseleave", () => {
            // Start the interval again
            removeIncreaseLine = setInterval(decreaseWidth, 1000);
        });
        // Call function to handle other removal tasks (e.g., clicking on icons)
        this.removeByClickingTheCutIcons();
    }
    normalLoadingToastRemoval({ timeOut = 2000, successMessage = "Done" } = {}) {
        if (normalChToastSetting.autoRemoved) {
            const allLoadingToast = document.getElementsByClassName('ch_toast');
            Array.from(allLoadingToast).map((current, index) => {
                if (current.id === "loading") {
                    if (current && current.firstElementChild && current.firstElementChild.nextElementSibling) {
                        current.firstElementChild.innerHTML = "<i class='fas fa-check-circle'></i>";
                        current.firstElementChild.nextElementSibling.innerHTML = `${successMessage}`;
                    }
                    setTimeout(() => {
                        current.remove();
                    }, timeOut);
                }
            });
        }
    }
    removeByClickingTheCutIcons() {
        [...this.ch_toast_container[0].children].forEach((current, index) => {
            var _a;
            const cutIon = (_a = current.lastElementChild) === null || _a === void 0 ? void 0 : _a.previousElementSibling;
            if (cutIon) {
                cutIon.addEventListener("click", (e) => {
                    current.remove();
                    e.stopPropagation();
                    // Update the cut icons after removing the toast
                    this.removeByClickingTheCutIcons();
                });
            }
        });
    }
    // remove method 
    removeAll() {
        if (normalChToastSetting.autoRemoved != true) {
            normalChToastSetting.autoRemoved = true;
        }
        this.normalToastRemove();
    }
    // position the element
    position(left, right) {
        const El = this.ch_toast_container[0];
        El.style.right = right;
    }
    //   play sound
    playSound(sound) {
        sound.play();
    }
    //   make clickable to all the toast
    onClick(url) {
        const allTheToast = document.getElementsByClassName("ch_toast");
        [...allTheToast].forEach((current, index) => {
            current.addEventListener("click", (e) => {
                window.location.href = url;
                e.stopPropagation();
            });
        });
    }
}
normalChToastSetting.autoRemoved = true;
// variables to track the elements
normalChToastSetting.trackVariable = 5;
export const normal = new normalChToastSetting();
