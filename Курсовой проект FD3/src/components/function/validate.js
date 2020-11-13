"use stcrict"

let validate = (field, value) => {
    switch (field) {
        case "email":
            if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
                return false;
            } else {
                return true;
            }
        case "user":
        case "tel":
            if (!value) {
                return false;
            } else {
                return true;
            }
    }
}

export default validate;