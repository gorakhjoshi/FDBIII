import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catState";

function* fetchCats() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formattedCats = yield cats.json();
  yield put(getCatsSuccess(formattedCats));
}

function* catsSaga() {
  yield takeEvery("cats/getCatsFetch", fetchCats);
}

export default catsSaga;
