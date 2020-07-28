import { __extends } from "tslib";
var FunctionalError = /** @class */ (function (_super) {
    __extends(FunctionalError, _super);
    function FunctionalError(message, options) {
        var _this = _super.call(this, typeof message === "string" ? message : undefined) || this;
        if (options && options.message)
            message = options.message;
        if (typeof options === 'object') {
            Object.getOwnPropertyNames(options)
                .forEach(function (key) {
                _this[key] = options[key];
            });
        }
        _this.name = _this.constructor.name;
        _this.message = message !== null && message !== void 0 ? message : '';
        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(_this);
        return _this;
    }
    return FunctionalError;
}(Error));
export { FunctionalError };
var FunctionalUserError = /** @class */ (function (_super) {
    __extends(FunctionalUserError, _super);
    function FunctionalUserError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FunctionalUserError;
}(FunctionalError));
export { FunctionalUserError };
var FPUnexpectedError = /** @class */ (function (_super) {
    __extends(FPUnexpectedError, _super);
    function FPUnexpectedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FPUnexpectedError;
}(FunctionalError));
export { FPUnexpectedError };
var FPInputError = /** @class */ (function (_super) {
    __extends(FPInputError, _super);
    function FPInputError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FPInputError;
}(FunctionalError));
export { FPInputError };
var FPSoftError = /** @class */ (function (_super) {
    __extends(FPSoftError, _super);
    function FPSoftError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FPSoftError;
}(FunctionalError));
export { FPSoftError };
var FPTimeout = /** @class */ (function (_super) {
    __extends(FPTimeout, _super);
    function FPTimeout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FPTimeout;
}(FunctionalError));
export { FPTimeout };
//# sourceMappingURL=errors.js.map