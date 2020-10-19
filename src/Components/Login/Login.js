import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    let history = useHistory()
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var user = result.user;
            const userInfo = { ...loggedInUser }
            userInfo.name = user.displayName;
            userInfo.email = user.email;
            userInfo.photo = user.photoURL;
            fetch('https://agile-taiga-09020.herokuapp.com/identifyAdmin?email=' + userInfo.email)
            .then(res => res.json())
            .then(result => {
                if (result.length == 0) {
                    storeAuthToken()
                    setLoggedInUser(userInfo)
                    history.replace(from)
                }
                else {
                    storeAuthToken()
                    setLoggedInUser(userInfo)
                    history.replace('/allUserServiceList')

                }
            }
            )
        }).catch(function (error) {
            var errorMessage = error.message;
        });

    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {
                // Handle error
            });
    }
    return (
        <div className="signIn-container text-center  p-5">
            <div className="signIn-header text-enter  m-auto pt-3">
                <img src="https://i.postimg.cc/3rspnKGN/logo.png" alt="" />
            </div>
            <div className="signIn-content  ">
                <div className="w-50 mx-auto p-5 text-center mt-5   ">
                    <h1 className="mb-5">Login With</h1>
                    <button onClick={handleGoogleSignIn} className="btn btn-brand w-100 h-25 m-1  d-block m-auto  d-flex">
                        <img className="" src="https://i.postimg.cc/sDFFs6rf/q-MCPtll-1.png" alt="" />
                        <h4 className="m-2">Continue With google</h4>
                    </button>
                    <p className="mt-4">Don't have an account  <a href="/">Create an account</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;