var normalToastSetting = (function () {
    function normalToastSetting() {
    }
    normalToastSetting.prototype.success = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.message, message = _c === void 0 ? "Your sucess messsages comes here." : _c, _d = _b.id, id = _d === void 0 ? "success" : _d, _e = _b.transition, transition = _e === void 0 ? 0.4 : _e, _f = _b.timeOut, timeOut = _f === void 0 ? 2 : _f, _g = _b.messageColor, messageColor = _g === void 0 ? "white" : _g, _h = _b.typeIconColor, typeIconColor = _h === void 0 ? "black" : _h, _j = _b.backgroundColor, backgroundColor = _j === void 0 ? "green" : _j, _k = _b.cutIconColor, cutIconColor = _k === void 0 ? "white" : _k, _l = _b.sound, sound = _l === void 0 ? true : _l, _m = _b.onClickGo, onClickGo = _m === void 0 ? "null" : _m, _o = _b.borderBackColor, borderBackColor = _o === void 0 ? "skyblue" : _o, _p = _b.left, left = _p === void 0 ? "null" : _p, _q = _b.right, right = _q === void 0 ? "null" : _q, _r = _b.cutIconBackgroundColor, cutIconBackgroundColor = _r === void 0 ? "red" : _r, _s = _b.typeIconBackgroundColor, typeIconBackgroundColor = _s === void 0 ? "red" : _s, toastClassName = _b.toastClassName, messageClassName = _b.messageClassName, typeIconClassName = _b.typeIconClassName, cutIconClassName = _b.cutIconClassName, _t = _b.typeIcon, typeIcon = _t === void 0 ? "<i class='fas fa-check-circle'></i>" : _t, _u = _b.float, float = _u === void 0 ? "right" : _u;
        this.show({
            message: message,
            id: id,
            transition: transition,
            timeOut: timeOut,
            typeIconColor: typeIconColor,
            messageColor: messageColor,
            cutIconColor: cutIconColor,
            backgroundColor: backgroundColor,
            sound: sound,
            onClickGo: onClickGo,
            borderBackColor: borderBackColor,
            left: left,
            right: right,
            cutIconBackgroundColor: cutIconBackgroundColor,
            toastClassName: toastClassName,
            messageClassName: messageClassName,
            typeIconClassName: typeIconClassName,
            cutIconClassName: cutIconClassName,
            typeIcon: typeIcon,
            float: float,
            typeIconBackgroundColor: typeIconBackgroundColor,
        });
    };
    normalToastSetting.prototype.error = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.message, message = _c === void 0 ? "Your error comes here" : _c, _d = _b.id, id = _d === void 0 ? "error" : _d, _e = _b.transition, transition = _e === void 0 ? 0.4 : _e, _f = _b.timeOut, timeOut = _f === void 0 ? 2 : _f, _g = _b.messageColor, messageColor = _g === void 0 ? "white" : _g, _h = _b.typeIconColor, typeIconColor = _h === void 0 ? "white" : _h, _j = _b.backgroundColor, backgroundColor = _j === void 0 ? "red" : _j, _k = _b.cutIconColor, cutIconColor = _k === void 0 ? "white" : _k, _l = _b.cutIconBackgroundColor, cutIconBackgroundColor = _l === void 0 ? "black" : _l, _m = _b.borderBackColor, borderBackColor = _m === void 0 ? "pink" : _m, _o = _b.sound, sound = _o === void 0 ? true : _o, _p = _b.onClickGo, onClickGo = _p === void 0 ? "/kk" : _p, left = _b.left, right = _b.right, _q = _b.toastClassName, toastClassName = _q === void 0 ? "ch_toast" : _q, _r = _b.messageClassName, messageClassName = _r === void 0 ? "ch_toast_message" : _r, _s = _b.typeIconClassName, typeIconClassName = _s === void 0 ? "ch_toast_icon" : _s, _t = _b.cutIconClassName, cutIconClassName = _t === void 0 ? "ch_toast_cut_icon" : _t, _u = _b.typeIcon, typeIcon = _u === void 0 ? "<i class='fas fa-exclamation-circle'></i>" : _u, _v = _b.float, float = _v === void 0 ? "right" : _v, _w = _b.typeIconBackgroundColor, typeIconBackgroundColor = _w === void 0 ? "black" : _w;
        this.show({
            message: message,
            id: id,
            transition: transition,
            timeOut: timeOut,
            messageColor: messageColor,
            typeIconColor: typeIconColor,
            backgroundColor: backgroundColor,
            cutIconColor: cutIconColor,
            sound: sound,
            onClickGo: onClickGo,
            borderBackColor: borderBackColor,
            left: left,
            right: right,
            cutIconBackgroundColor: cutIconBackgroundColor,
            toastClassName: toastClassName,
            messageClassName: messageClassName,
            typeIconClassName: typeIconClassName,
            cutIconClassName: cutIconClassName,
            typeIcon: typeIcon,
            float: float,
            typeIconBackgroundColor: typeIconBackgroundColor,
        });
    };
    normalToastSetting.prototype.loading = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.message, message = _c === void 0 ? "Your loading messages comes here." : _c, _d = _b.id, id = _d === void 0 ? "loading" : _d, _e = _b.transition, transition = _e === void 0 ? 0.4 : _e, _f = _b.timeOut, timeOut = _f === void 0 ? 2 : _f, _g = _b.messageColor, messageColor = _g === void 0 ? "white" : _g, _h = _b.typeIconColor, typeIconColor = _h === void 0 ? "white" : _h, _j = _b.backgroundColor, backgroundColor = _j === void 0 ? "#FF7F50" : _j, _k = _b.sound, sound = _k === void 0 ? true : _k, _l = _b.cutIconColor, cutIconColor = _l === void 0 ? "red" : _l, _m = _b.onClickGo, onClickGo = _m === void 0 ? "null" : _m, _o = _b.borderBackColor, borderBackColor = _o === void 0 ? "red" : _o, left = _b.left, right = _b.right, _p = _b.cutIconBackgroundColor, cutIconBackgroundColor = _p === void 0 ? "green" : _p, _q = _b.toastClassName, toastClassName = _q === void 0 ? "ch_toast" : _q, _r = _b.messageClassName, messageClassName = _r === void 0 ? "ch_toast_message" : _r, _s = _b.typeIconClassName, typeIconClassName = _s === void 0 ? "ch_toast_icon" : _s, _t = _b.cutIconClassName, cutIconClassName = _t === void 0 ? "ch_toast_cut_icon" : _t, _u = _b.typeIcon, typeIcon = _u === void 0 ? " <i class='fas fa-spinner fa-spin'></i>" : _u, _v = _b.float, float = _v === void 0 ? "right" : _v, _w = _b.typeIconBackgroundColor, typeIconBackgroundColor = _w === void 0 ? "green" : _w;
        this.show({
            message: message,
            id: id,
            transition: transition,
            timeOut: timeOut,
            messageColor: messageColor,
            typeIconColor: typeIconColor,
            backgroundColor: backgroundColor,
            cutIconColor: cutIconColor,
            sound: sound,
            onClickGo: onClickGo,
            borderBackColor: borderBackColor,
            left: left,
            right: right,
            cutIconBackgroundColor: cutIconBackgroundColor,
            toastClassName: toastClassName,
            messageClassName: messageClassName,
            typeIconClassName: typeIconClassName,
            cutIconClassName: cutIconClassName,
            typeIcon: typeIcon,
            float: float,
            typeIconBackgroundColor: typeIconBackgroundColor,
        });
    };
    normalToastSetting.prototype.show = function (_a) {
        var _b;
        var message = _a.message, transition = _a.transition, id = _a.id, timeOut = _a.timeOut, messageColor = _a.messageColor, typeIconColor = _a.typeIconColor, cutIconColor = _a.cutIconColor, backgroundColor = _a.backgroundColor, sound = _a.sound, onClickGo = _a.onClickGo, borderBackColor = _a.borderBackColor, left = _a.left, right = _a.right, cutIconBackgroundColor = _a.cutIconBackgroundColor, toastClassName = _a.toastClassName, messageClassName = _a.messageClassName, typeIconClassName = _a.typeIconClassName, cutIconClassName = _a.cutIconClassName, typeIcon = _a.typeIcon, _c = _a.float, float = _c === void 0 ? "right" : _c, typeIconBackgroundColor = _a.typeIconBackgroundColor;
        if (!this.ch_toast_container) {
            this.ch_toast_container =
                document.getElementsByClassName("ch_toast_container");
            if (!this.ch_toast_container[0]) {
                throw new Error("ChTypeError ==> Please add the main container for the toast");
            }
        }
        if (this.ch_toast_container[0].childElementCount >= 6) {
            if (this.ch_toast_container[0].childElementCount > 0 &&
                this.ch_toast_container[0].children[normalToastSetting.trackVariable]) {
                this.ch_toast_container[0].children[normalToastSetting.trackVariable].remove();
                normalToastSetting.trackVariable >= 5
                    ? (normalToastSetting.trackVariable = 5)
                    : (normalToastSetting.trackVariable -= 1);
            }
        }
        else {
            normalToastSetting.trackVariable = 5;
        }
        if (this.ch_toast_container) {
            if (this.ch_toast_container[0].children.length >= 2) {
            }
            var childDivs = "\n      <div class=\"ch_toast ".concat(toastClassName ? toastClassName : "", "\" id=\"").concat(id ? id : "", "\" style=\"background-color: ").concat(backgroundColor, "; float: ").concat(float, "\">\n        <div class=\"ch_toast_icon ").concat(typeIconClassName ? typeIconClassName : "", "\" style=\"color:").concat(typeIconColor, "; background-color:").concat(typeIconBackgroundColor, "\">").concat(typeIcon, "</div>\n        <div class=\"ch_toast_message ").concat(messageClassName ? messageClassName : "", "\" style=\"color:").concat(messageColor, ";\">").concat(message, "</div>\n        <div class=\"ch_toast_cut_icon  ").concat(cutIconClassName ? cutIconClassName : "", "\" style=\"color:").concat(cutIconColor, "; background-color: ").concat(cutIconBackgroundColor, ";\"><i class=\"fas fa-times\"></i></div>\n        <div class=\"line\" style=\"background-color: ").concat(borderBackColor, "\"></div>\n    </div>\n        ");
            var tempElement = document.createElement("div");
            tempElement.innerHTML = childDivs.trim();
            var toastElement = tempElement.firstChild;
            this.ch_toast_container[0].insertAdjacentElement("afterbegin", toastElement);
            if (sound) {
                var soundTone = new Audio("../chToast/public/music/l.wav");
                this.playSound(soundTone);
            }
            if (onClickGo != "null" && onClickGo != null && onClickGo != undefined) {
                this.onClick(onClickGo);
            }
        }
        if (normalToastSetting.autoRemoved &&
            ((_b = this.ch_toast_container[0].firstElementChild) === null || _b === void 0 ? void 0 : _b.id) != "loading") {
            this.normalToastRemove(timeOut);
        }
        this.removeByClickingTheCutIcons();
    };
    normalToastSetting.prototype.normalToastRemove = function (timeOut, successMessage, successIcon) {
        var _this = this;
        var loadingElements = document.querySelectorAll("#loading");
        if (loadingElements.length > 0) {
            loadingElements.forEach(function (toast) {
                var _a;
                var message = (_a = toast.firstElementChild) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
                var icon = toast.firstElementChild;
                if (icon && message) {
                    message.innerHTML = "".concat(successMessage ? successMessage : "Done");
                    icon.innerHTML = "".concat(successIcon ? successIcon : "<i class='fas fa-check-circle'></i>");
                    _this.removeByDecreaseBorder(timeOut ? timeOut : 2, toast);
                }
            });
        }
        var toast = this.ch_toast_container[0].children;
        if (this.ch_toast_container[0].childElementCount > 0 && toast.length > 0) {
            Array.from(toast).forEach(function (toast) {
                _this.removeByDecreaseBorder(timeOut ? timeOut : 2, toast);
            });
        }
    };
    normalToastSetting.prototype.removeByDecreaseBorder = function (timeOut, toast) {
        var _this = this;
        var line = toast === null || toast === void 0 ? void 0 : toast.lastElementChild;
        var increase = 100;
        var decreaseRate = (100 - 0) / timeOut;
        var decreaseWidth = function () {
            if (increase > 0) {
                increase -= decreaseRate;
                line.style.width = "".concat(increase, "%");
            }
            else {
                clearInterval(removeIncreaseLine);
                toast === null || toast === void 0 ? void 0 : toast.remove();
                _this.removeByClickingTheCutIcons();
            }
        };
        var removeIncreaseLine = setInterval(decreaseWidth, 1000);
        toast === null || toast === void 0 ? void 0 : toast.addEventListener("mouseenter", function () {
            clearInterval(removeIncreaseLine);
        });
        toast === null || toast === void 0 ? void 0 : toast.addEventListener("mouseleave", function () {
            removeIncreaseLine = setInterval(decreaseWidth, 1000);
        });
        this.removeByClickingTheCutIcons();
    };
    normalToastSetting.prototype.normalLoadingToastRemoval = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.timeOut, timeOut = _c === void 0 ? 2000 : _c, _d = _b.successMessage, successMessage = _d === void 0 ? "Done" : _d;
        if (normalToastSetting.autoRemoved) {
            var allLoadingToast = document.getElementsByClassName("ch_toast");
            Array.from(allLoadingToast).map(function (current, index) {
                if (current.id === "loading") {
                    if (current &&
                        current.firstElementChild &&
                        current.firstElementChild.nextElementSibling) {
                        current.firstElementChild.innerHTML =
                            "<i class='fas fa-check-circle'></i>";
                        current.firstElementChild.nextElementSibling.innerHTML = "".concat(successMessage);
                    }
                    setTimeout(function () {
                        current.remove();
                    }, timeOut);
                }
            });
        }
    };
    normalToastSetting.prototype.removeByClickingTheCutIcons = function () {
        var _this = this;
        if (this.ch_toast_container[0] && this.ch_toast_container[0].children.length > 0) {
            Array.from(this.ch_toast_container[0].children).forEach(function (current, index) {
                var _a;
                var cutIon = (_a = current.lastElementChild) === null || _a === void 0 ? void 0 : _a.previousElementSibling;
                if (cutIon) {
                    cutIon.addEventListener("click", function (e) {
                        current.remove();
                        e.stopPropagation();
                        _this.removeByClickingTheCutIcons();
                    });
                }
            });
        }
    };
    normalToastSetting.prototype.removeAll = function () {
        if (normalToastSetting.autoRemoved != true) {
            normalToastSetting.autoRemoved = true;
        }
        this.normalToastRemove();
    };
    normalToastSetting.prototype.position = function (left, right) {
        var El = this.ch_toast_container[0];
        El.style.right = right;
    };
    normalToastSetting.prototype.playSound = function (sound) {
        sound.play();
    };
    normalToastSetting.prototype.onClick = function (url) {
        var allTheToast = document.getElementsByClassName("ch_toast");
        Array.from(allTheToast).forEach(function (current, index) {
            current.addEventListener("click", function (e) {
                window.location.href = url;
                e.stopPropagation();
            });
        });
    };
    normalToastSetting.autoRemoved = true;
    normalToastSetting.trackVariable = 5;
    return normalToastSetting;
}());
export default normalToastSetting;
export var normal = new normalToastSetting();
//# sourceMappingURL=normalChToast.js.map