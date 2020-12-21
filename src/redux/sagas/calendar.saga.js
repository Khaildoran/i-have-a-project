import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCalendarEventsByID() {
  try {
    console.log('in fetch calendar');
    
    const calendarEventsData = yield axios.get(`/api/calendar/`)
    yield put({
      type: 'SET_DESIGNER_EVENTS',
      payload: calendarEventsData.data
    })
  } catch (error) {
    
  }
}

function* calendarSaga() {
  yield takeLatest('FETCH_CALENDAR_EVENTS_BY_ID', fetchCalendarEventsByID);
}

export default calendarSaga;
