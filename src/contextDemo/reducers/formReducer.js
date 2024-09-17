function formReducer(state, action) {
    switch (action.type) {
        case "email":
            console.log("email", state)
            return { email: action.payload }

        default:
            break;
    }
}
export default formReducer