import * as React from "react";

require("icheck/skins/all.css"); // or single skin css
let icheck = require("react-icheck");

interface Props {
}

class Checkbox extends React.Component<Props, void> {
    constructor(data) {
        super(data);
    }

    render() {
        //const { checked, onChange } = this.props;
        return <icheck.Checkbox
            checkboxClass="icheckbox_square-blue"
            label=""
            />        

    }
}

export default Checkbox;

