
export const loadLoginState = () => {
    try {
        const serializedState = localStorage.getItem('state.loginReducer');
        if (serializedState === null || serializedState === "") {
            return "";
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log("State did not save to local storage");
        return "";
    }
}

export const saveLoginState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state.loginReducer', serializedState);
    } catch (err) {
        // plz no crash 
        console.log("didnt save correctly");
    }
}