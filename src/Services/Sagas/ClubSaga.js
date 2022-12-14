import { takeEvery, put } from "redux-saga/effects";

import { CLUB_LIST, SET_CLUB_LIST } from "../../Constants/Constants";

import ClubListApi from "../API/Requests/ClubListApi";

function* getClubList() {
  const clubList = yield ClubListApi.getClubsList();

  yield put({ type: SET_CLUB_LIST, clubList });
}

function* clubSaga() {
  yield takeEvery(CLUB_LIST, getClubList);
}

export default clubSaga;
