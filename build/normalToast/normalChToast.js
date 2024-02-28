"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normal = exports.normalChToastSetting = void 0;
class normalChToastSetting {
    ch_toast_container;
    static autoRemoved = true;
    static trackVariable = 5;
    success({ message = "Your sucess messsages comes here.", id = "success", transition = 0.4, timeOut = 2, messageColor = "white", typeIconColor = "black", backgroundColor = "green", cutIconColor = "white", sound = true, onClickGo = "null", borderBackColor = "skyblue", left = "null", right = "null", cutIconBackgroundColor = "red", typeIconBackgroundColor = "red", toastClassName, messageClassName, typeIconClassName, cutIconClassName, typeIcon = "<i class='fas fa-check-circle'></i>", float = "right", } = {}) {
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
    show({ message, transition, id, timeOut, messageColor, typeIconColor, cutIconColor, backgroundColor, sound, onClickGo, borderBackColor, left, right, cutIconBackgroundColor, toastClassName, messageClassName, typeIconClassName, cutIconClassName, typeIcon, float = "right", typeIconBackgroundColor, }) {
        if (!this.ch_toast_container) {
            this.ch_toast_container =
                document.getElementsByClassName("ch_toast_container");
            if (!this.ch_toast_container[0]) {
                throw new Error("ChTypeError ==> Please add the main container for the toast");
            }
        }
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
            const tempElement = document.createElement("div");
            tempElement.innerHTML = childDivs.trim();
            const toastElement = tempElement.firstChild;
            this.ch_toast_container[0].insertAdjacentElement("afterbegin", toastElement);
            if (sound) {
                const soundTone = new Audio("../chToast/public/music/l.wav");
                this.playSound(soundTone);
            }
            if (onClickGo != "null" && onClickGo != null && onClickGo != undefined) {
                this.onClick(onClickGo);
            }
        }
        if (normalChToastSetting.autoRemoved &&
            this.ch_toast_container[0].firstElementChild?.id != "loading") {
            this.normalToastRemove(timeOut);
        }
        this.removeByClickingTheCutIcons();
    }
    normalToastRemove(timeOut, successMessage, successIcon) {
        const loadingElements = document.querySelectorAll("#loading");
        if (loadingElements.length > 0) {
            loadingElements.forEach((toast) => {
                const message = toast.firstElementChild?.nextElementSibling;
                const icon = toast.firstElementChild;
                if (icon && message) {
                    message.innerHTML = `${successMessage ? successMessage : "Done"}`;
                    icon.innerHTML = `${successIcon ? successIcon : "<i class='fas fa-check-circle'></i>"}`;
                    this.removeByDecreaseBorder(timeOut ? timeOut : 2, toast);
                }
            });
        }
        const toast = this.ch_toast_container[0].children;
        if (this.ch_toast_container[0].childElementCount > 0 && toast.length > 0) {
            [...toast].forEach((toast) => {
                this.removeByDecreaseBorder(timeOut ? timeOut : 2, toast);
            });
        }
    }
    removeByDecreaseBorder(timeOut, toast) {
        const line = toast?.lastElementChild;
        let increase = 100;
        const decreaseRate = (100 - 0) / timeOut;
        const decreaseWidth = () => {
            if (increase > 0) {
                increase -= decreaseRate;
                line.style.width = `${increase}%`;
            }
            else {
                clearInterval(removeIncreaseLine);
                toast?.remove();
                this.removeByClickingTheCutIcons();
            }
        };
        let removeIncreaseLine = setInterval(decreaseWidth, 1000);
        toast?.addEventListener("mouseenter", () => {
            clearInterval(removeIncreaseLine);
        });
        toast?.addEventListener("mouseleave", () => {
            removeIncreaseLine = setInterval(decreaseWidth, 1000);
        });
        this.removeByClickingTheCutIcons();
    }
    normalLoadingToastRemoval({ timeOut = 2000, successMessage = "Done", } = {}) {
        if (normalChToastSetting.autoRemoved) {
            const allLoadingToast = document.getElementsByClassName("ch_toast");
            Array.from(allLoadingToast).map((current, index) => {
                if (current.id === "loading") {
                    if (current &&
                        current.firstElementChild &&
                        current.firstElementChild.nextElementSibling) {
                        current.firstElementChild.innerHTML =
                            "<i class='fas fa-check-circle'></i>";
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
            const cutIon = current.lastElementChild?.previousElementSibling;
            if (cutIon) {
                cutIon.addEventListener("click", (e) => {
                    current.remove();
                    e.stopPropagation();
                    this.removeByClickingTheCutIcons();
                });
            }
        });
    }
    removeAll() {
        if (normalChToastSetting.autoRemoved != true) {
            normalChToastSetting.autoRemoved = true;
        }
        this.normalToastRemove();
    }
    position(left, right) {
        const El = this.ch_toast_container[0];
        El.style.right = right;
    }
    playSound(sound) {
        sound.play();
    }
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
exports.normalChToastSetting = normalChToastSetting;
exports.normal = new normalChToastSetting();
//# sourceMappingURL=normalChToast.js.map