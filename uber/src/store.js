import { createStore } from "vuex";
import axios from 'axios'

const store = createStore({
	state: {

	},
	getters: {

	},
	mutations: {

	},
	actions: {
		sendData({ commit }, commingDate) {
			let api =
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

			if (commingDate.show) {
				api =
					"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
				alert("Вход был успешно выполнен!");
				commingDate.signIn = false;
			}

			axios.post(api + "AIzaSyAooYWJbHv2kKmNkO0OwFcbZ9qedtI72rU", {
				email: commingDate.email,
				password: commingDate.password,
				returnSecureToken: true,
			}).then((response) => {
				console.log(response);
			}).catch(reason => {
				console.log(reason);
			});


		}

	}
})

export default store