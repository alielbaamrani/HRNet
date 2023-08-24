"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
function Datepicker() {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (<div>
      <antd_1.DatePicker onChange={onChange}/>
    </div>);
}
exports.default = Datepicker;
