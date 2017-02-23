import * as React from "react"; // tslint:disable-line

require("icheck/skins/all.css"); // or single skin css

let icheck = require("react-icheck");

export default ({
    input,
}) => {
    return (
        <icheck.Checkbox
            checkboxClass="icheckbox_square-blue"
            label=" "
            {...input}
            defaultChecked={input.value}
            />
    );
};
