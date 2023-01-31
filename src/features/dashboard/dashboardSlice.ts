import { RootState } from './../../app/store';
import { PayloadAction } from '@reduxjs/toolkit';
import { City } from './../../model/city';
import { Student } from './../../model/student';
import { createSlice } from '@reduxjs/toolkit';

export interface DashboardStatistics {
  maleCount: number,
  femaleCount: number,
  highMarkCount: number,
  lowMarkCount: number,
}

export interface RankingByCity { 
  cityId: string,
  rankingList: Student[],
}

export interface DashboardState {
  loading: Boolean,
  statistics: DashboardStatistics,
  highestStudentList: Student[],
  lowestStudentList: Student[],
  rankingByCityList: RankingByCity[],
}

const initialState: DashboardState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },
  highestStudentList: [],
  lowestStudentList: [],
  rankingByCityList: [],
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true
    },
    fetchDataSuccess(state) {
      state.loading = false
    },
    fetchDataFailed(state) {
      state.loading = false
    },

    setStatistics(state, action: PayloadAction<DashboardStatistics>) {
      state.statistics = action.payload
    },
    setHighestStudentList(state, action: PayloadAction<Student[]>) {
      state.highestStudentList = action.payload
    },
    setLowestStudentList(state, action: PayloadAction<Student[]>) {
      state.lowestStudentList = action.payload
    },
    setRankingByCityList(state, action: PayloadAction<RankingByCity[]>) {
      state.rankingByCityList = action.payload
    },
  }
})

//Actions
export const dashboardActions = dashboardSlice.actions

//Selectors
export const selectLoading = (state: RootState) => state.dashboard.loading
export const selectstatistics = (state: RootState) => state.dashboard.statistics
export const selectHighestStudentList = (state: RootState) => state.dashboard.highestStudentList
export const selectLowestStudentList = (state: RootState) => state.dashboard.lowestStudentList
export const selectRankingByCityList = (state: RootState) => state.dashboard.rankingByCityList

//Reducer
const dashboardReducer = dashboardSlice.reducer
export default dashboardReducer