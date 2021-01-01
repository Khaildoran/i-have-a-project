import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProfile (action) {
	try {
		const id = action.payload;
		const designerResponse = yield axios.get(`/api/profile/designers/${id}`);
		const careerResponse = yield axios.get(`/api/profile/career/${id}`);
		const educationResponse = yield axios.get(`/api/profile/education/${id}`);
		const skillsResponse = yield axios.get(`/api/profile/skills/${id}`);
		const softwareResponse = yield axios.get(`/api/profile/software/${id}`);

		yield put({
			type: 'SET_PROFILE',
			payload: {
				designer: designerResponse.data.rows[0],
				career: careerResponse.data.rows,
				education: educationResponse.data.rows,
				skills: skillsResponse.data.rows,
				software: softwareResponse.data.rows,
			}
		});
	} catch (error) {
		console.log('Unexpected ERROR in fetchProfile saga:', error);
	}
}

function* updateProfile(action) {
	// yield axios.put('/api/profile', action.payload);
	yield put({
		type: 'SET_PROFILE',
		payload: action.payload
	});
}

function* profileSaga() {
	yield takeLatest('FETCH_PROFILE', fetchProfile);
	yield takeLatest('UPDATE_PROFILE', updateProfile);
}

export default profileSaga;
