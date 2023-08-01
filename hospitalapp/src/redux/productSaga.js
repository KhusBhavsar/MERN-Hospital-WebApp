import { takeEvery, put } from 'redux-saga/effects'
import { DOCTORS_LIST, HOSPITAL_LIST, SEARCH_DOCTOR_LIST, SEARCH_HOSPITAL,SET_HOSPITAL_LIST } from './constant';

function* getHospital() {
    let data = yield fetch('http://localhost:3500/hospitals');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_HOSPITAL_LIST, data})
}

function* searchHospital(data) {
    let result = yield fetch(`http://localhost:3500/hospitals?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({type: SET_HOSPITAL_LIST, data:result})
}

function* getDoctor() {
    let data = yield fetch('http://localhost:4000/doctors');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SEARCH_DOCTOR_LIST, data})
}


function* hospitalSaga() {
    yield takeEvery(HOSPITAL_LIST, getHospital)
    yield takeEvery(SEARCH_HOSPITAL, searchHospital)
    yield takeEvery(DOCTORS_LIST, getDoctor)
}

export default hospitalSaga;