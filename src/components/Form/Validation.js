const validate = values => {
    const errors = {};
    const { userName, password } = values;
    if (!userName) errors.userName = "User Name is Required"
    if (!password) errors.password = "Password is required"
    return errors;
};
export default validate;