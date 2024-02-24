export class chToast {
    sucess({ message = "kaxa", id = "r1", transition = 0.4, timeOut = 1.2, messageColor = "white", typeIconColor = "white", backgroundColor = "green", cutIconColor = "white", sound = true, onClickGo = "/kk", borderBackColor = "red", left = "null", right = "null", cutIconBackgroundColor = "red", toastCLassName = "ch_toast", messageClassName = "ch_toast_message", typeIconClassName = "ch_toast_icon", cutIconClassName = "ch_toast_cut_icon", typeIcon = "<i class='fa fa-twitter'></i>", float = 'left', }) {
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
            toastCLassName,
            messageClassName,
            typeIconClassName,
            cutIconClassName,
            typeIcon,
            float
        });
    }
    error({ message, id = "r1", transition = 0.4, timeOut = 1.2, messageColor = "white", typeIconColor = "white", backgroundColor = "black", cutIconColor = "red", cutIconBackgroundColor = "red", borderBackColor = "red", sound = true, onClickGo = "/kk", left, right, toastCLassName = "ch_toast", messageClassName = "ch_toast_message", typeIconClassName = "ch_toast_icon", cutIconClassName = "ch_toast_cut_icon", typeIcon = "<i class='fa fa-twitter'></i>", float = 'right', }) {
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
            toastCLassName,
            messageClassName,
            typeIconClassName,
            cutIconClassName,
            typeIcon,
            float
        });
    }
    loading({ message, id = "r1", transition = 0.4, timeOut = 1.2, messageColor = "white", typeIconColor = "white", backgroundColor = "black", sound = true, cutIconColor = "red", onClickGo = "/kk", borderBackColor = "red", left, right, cutIconBackgroundColor = "red", toastCLassName = "ch_toast", messageClassName = "ch_toast_message", typeIconClassName = "ch_toast_icon", cutIconClassName = "ch_toast_cut_icon", typeIcon = "<i class='fa fa-twitter'></i>", float = 'right', }) {
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
            toastCLassName,
            messageClassName,
            typeIconClassName,
            cutIconClassName,
            typeIcon,
            float
        });
    }
    // Method to show the toast;
    show({ message, transition, id, timeOut, messageColor, typeIconColor, cutIconColor, backgroundColor, sound, onClickGo, borderBackColor, left, right, cutIconBackgroundColor, toastCLassName, messageClassName, typeIconClassName, cutIconClassName, typeIcon, float = 'right', }) {
        if (!this.ch_toast_container) {
            this.ch_toast_container =
                document.getElementsByClassName("ch_toast_container");
        }
        if (this.ch_toast_container[0].childElementCount >= 6) {
            if (this.ch_toast_container[0].childElementCount > 0 &&
                this.ch_toast_container[0].children[chToast.trackVariable]) {
                this.ch_toast_container[0].children[chToast.trackVariable].remove();
                chToast.trackVariable >= 5
                    ? (chToast.trackVariable = 5)
                    : (chToast.trackVariable -= 1);
            }
        }
        else {
            chToast.trackVariable = 5;
        }
        // check there is Element or not to take all of our toast messages;
        if (this.ch_toast_container) {
            if (this.ch_toast_container[0].children.length >= 2) {
            }
            const childDivs = `
      <div class="ch_toast ${toastCLassName}" id="${id}" style="background-color: ${backgroundColor}; float: ${float}">
        <div class="ch_toast_icon ${typeIconClassName}" style="color:${typeIconColor};">${typeIcon}</div>
        <div class="ch_toast_message ${messageClassName}" style="color:${messageColor};">${message}</div>
        <div class="ch_toast_cut_icon  ${cutIconClassName}" style="color:${cutIconColor}; background-color: ${cutIconBackgroundColor};"><i class="fa fa-remove"></i></div>
        <div class="line" style="background-color: ${borderBackColor}"></div>
    </div>
        `;
            // Adding new element before the oldest ones
            const tempElement = document.createElement("div");
            tempElement.innerHTML = childDivs.trim();
            const toastElement = tempElement.firstChild;
            this.ch_toast_container[0].insertAdjacentElement("afterbegin", toastElement);
            //  sound for the notification
            if (sound) {
                const soundTone = new Audio("/music/l.wav");
                this.playSound(soundTone);
            }
            //   EventListener for all the toast;
            this.onClick(onClickGo);
        }
        if (chToast.autoRemoved) {
            this.normalToastRemove(timeOut, id);
        }
        this.removeByClickingTheCutIcons();
    }
    //   normal toast removal
    normalToastRemove(timeOut, id) {
        // Check if there are toast messages in the container
        if (this.ch_toast_container[0].childElementCount > 0) {
            // Get the first toast message
            const toast = this.ch_toast_container[0].firstElementChild;
            const line = toast === null || toast === void 0 ? void 0 : toast.lastElementChild; // Assuming the progress bar is the last child element
            let increase = 100; // Initial width of the progress bar
            // Calculate the decrease rate based on the desired duration
            // const decreaseRate = (100 / durationInSeconds) * 0.1; // Assuming the progress bar decreases by 10% every second
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
            // decreaseWidth();
            // decreaseWidth();
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
    // position the element
    position(left, right) {
        const El = this.ch_toast_container[0];
        El.style.right = right;
    }
    //   play sound
    playSound(sound) {
        sound.play();
    }
    //   make clickable to all the taost
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
chToast.autoRemoved = true;
// variables to track the elements
chToast.trackVariable = 5;
const toast = new chToast();
export default toast;
