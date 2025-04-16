import { Fragment } from "react";
import PropTypes from "prop-types";

const TextInput = (props) => {
    const { 
        label,
        placeholder,
        type,
        value,
        inputId,
        labelClass,
        inputClass,
        helpText, 
        disabled, 
        readOnly,
        onChange
    } = props;

    return <Fragment>
        <label className={`form-label ${labelClass}`}>{label}</label>
        <input type={type} className={`form-control ${inputClass}`} onChange={onChange} id={inputId} placeholder={placeholder} value={value} disabled={disabled} readOnly={readOnly}/>
        <div id={`${inputId}-helpText`} className={`form-text ${inputClass}`}>
            {helpText}
        </div>
    </Fragment>
}

TextInput.propTypes = {
    label:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}

export default TextInput;