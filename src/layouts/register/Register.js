// import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { auth } from '../../firebase';

// import * as routes from '../../constants/routes';

// const INITIAL_STATE = {
//     email: '',
//     passwordOne: '',
//     passwordTwo: '',
//     error: null,
// };


// const RegisterPage = ({ history }) => (
//     <div>
//         <h1>Register</h1>
//         <RegisterForm history={history}/>
//     </div>
// );

// const byPropKey = (propertyName, value) => () => ({
//     [propertyName]: value
// });

// class RegisterForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { ...INITIAL_STATE };
//     }

//     onSubmit = (event) => {

//         event.preventDefault();

//         const {
//             email,
//             passwordOne,
//         } = this.state;

//         const {
//             history,
//         } = this.props;

//         auth.doCreateUserWithEmailAndPassword(email, passwordOne)
//             .then(authUser => {
//                 this.setState({ ...INITIAL_STATE });
//                 history.push(routes.HOME);
//             })
//             .catch(error => {
//                 this.setState(byPropKey('error', error));
//             });
//     }

//     render() {

//         const {
//             email,
//             passwordOne,
//             passwordTwo,
//             error,
//         } = this.state;

//         const isInvalid =
//             passwordOne !== passwordTwo ||
//             passwordOne === '' ||
//             !/^\S+@\S+\.\S+$/.test(email);

//         return (
//             <form onSubmit={this.onSubmit}>
//                 <input
//                     value={email}
//                     onChange={event => this.setState(byPropKey('email', event.target.value))}
//                     type="text"
//                     placeholder="Email Address"
//                 />
//                 <input
//                     value={passwordOne}
//                     onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
//                     type="password"
//                     placeholder="Password"
//                 />
//                 <input
//                     value={passwordTwo}
//                     onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
//                     type="password"
//                     placeholder="Password"
//                 />
//                 <button disabled={isInvalid} type="submit">
//                     Sign Up
//                 </button>

//                 { error && <p>{error.message} </p> }
//             </form>
//         );
//     }
// };

// const RegisterLink = () => (
//     <p>
//         Don't have an account?
//         {' '}
//         <Link to={routes.REGISTER}>Sign up</Link>
//     </p>
// );

// export default withRouter(RegisterPage);

// export {
//     RegisterForm,
//     RegisterLink,
// };