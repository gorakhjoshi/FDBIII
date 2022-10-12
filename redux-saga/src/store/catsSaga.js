import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catState";

function* fetchCats() {
  console.log("fetchCats running");
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formattedCats = yield cats.json();
  const shortenData = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(shortenData));
}

function* catsSaga() {
  console.log("catsSaga is running");
  yield takeEvery("cats/getCatsFetch", fetchCats);
}

export default catsSaga;
