import { withFormik } from "formik";
import * as Yup from "yup";

const personSchema = withFormik({
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required("This field is required")
            .matches(/^[A-Za-z ]+$/, "Name must contains only alphabets"),
        age: Yup.string().matches(/^[1-9]*$/, "age must be number & +ve"),
        cnic: Yup.string().matches(
            /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/,
            "correct format: e,g 12345-6789023-4"
        )
    }),
    mapPropsToValues: props => ({
        name: props.data ? props.data.name : "",
        age: props.data ? props.data.age : "",
        cnic: props.data ? props.data.cnic : ""
    }),
    handleSubmit: values => {console.log(values)},
    displayName: "CustomValidationForm",
    enableReinitialize: true
});

export default personSchema;
