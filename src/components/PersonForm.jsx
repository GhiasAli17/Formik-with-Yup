import React from 'react';
import { compose } from "redux";
import personSchema from "../validation/personSchema";
const PersonForm = props => {
    const {
        handleChange,
        handleBlur,
        errors,
        touched,
        submitCount
    } = props;
    return(
        <div>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                autoComplete="true"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.name && touched.name && <div style={{color:'red'}}>{errors.name}</div>}<br />
            <input
                type="number"
                name="age"
                id="cnic"
                placeholder="John Doe"
                autoComplete="true"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.age && touched.age && <div  style={{color:'red'}}>{errors.age}</div>}<br />
            <button type="submit">Submit</button>
        </div>
    )
}

export default compose(personSchema)(PersonForm);
