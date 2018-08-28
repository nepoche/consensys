import { SubmissionError } from 'redux-form';
// import { auth } from '../../firebase';
import { accountLoggedIn } from '../../actions';
import { store } from '../../store';

function submit(values) {
    
    // return auth.doSignInWithEmailAndPassword(values.email, values.password)
    //     .then(() => {
    //         console.log(store.getState());
    //         store.dispatch(accountLoggedIn(values.email));
    //     })
    //     .catch(error => {
    //         console.log("you ain't in the club fam");
    //     });

    return "hi";
}

export default submit;