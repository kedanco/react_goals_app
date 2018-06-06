import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyB07b7aBA33BHPuAT7nFxXeX-0cKfZktus",
	authDomain: "goals-app-kelvin.firebaseapp.com",
	databaseURL: "https://goals-app-kelvin.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
