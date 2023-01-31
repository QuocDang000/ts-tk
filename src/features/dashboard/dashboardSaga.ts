import cityApi from 'api/cityApi';
import { City } from './../../model/city';
import { Student } from './../../model/student';
import { ListRes } from './../../model/common';
import { dashboardActions, RankingByCity } from './dashboardSlice';
import { all, takeLatest, call, put } from "redux-saga/effects";
import studentApi from 'api/studentApi';

function* fetchStatistics() {
  const responseList: Array<ListRes<Student>> = yield all([
    call(studentApi.getAllStudent, ({ _page: 1, _limit: 1, gender: 'male' })),
    call(studentApi.getAllStudent, ({ _page: 1, _limit: 1, gender: 'female' })),
    call(studentApi.getAllStudent, ({ _page: 1, _limit: 1, mark_gte: 8 })),
    call(studentApi.getAllStudent, ({ _page: 1, _limit: 1, mark_lte: 5 })),
  ])

  const statisticList = responseList.map(x => x.pagination._totalRows)
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList

  yield put(dashboardActions.setStatistics({ maleCount, femaleCount, highMarkCount, lowMarkCount }))
}

function* fetchHighestStudentList() {
  const { data }: ListRes<Student> = yield call(studentApi.getAllStudent, ({
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'desc',
  }))

  yield put(dashboardActions.setHighestStudentList(data))
}

function* fetchLowestStudentList() {
  const { data }: ListRes<Student> = yield call(studentApi.getAllStudent, ({
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'asc',
  }))

  yield put(dashboardActions.setLowestStudentList(data))
}

function* fetchRankingByCityList() {
  //Fetch city list
  const { data: cityList }: ListRes<City> = yield call(cityApi.getAll)

  //Fetch highest mark ranking per city
  const callList = cityList.map((x) => call(studentApi.getAllStudent, ({
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'asc',
    code: x.code
  })))
  const responseList: Array<ListRes<Student>> = yield all(callList)
  const rankingByCityList: Array<RankingByCity> = responseList.map((x, idx) => ({
    cityId: cityList[idx].code,
    rankingList: x.data
  }))

  yield put(dashboardActions.setRankingByCityList(rankingByCityList))
}

function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ])
  } catch (error) {
    console.log('Failed to fetch dashboard data', error);

  }
}

export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData)
}