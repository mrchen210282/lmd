import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {
			name: '罗美丹',
			phone: '13888888888',
			sex: '2'
		},
		datasxx: [{
			zxDate: '2020-09',
			sdlxx: '正常工资薪金',
			kjywr: '',
			sr: '',
			ysb: ''
		}]
	},
	getters: {
		getUserInfo: state => state.userInfo,
		getDatasxx: state => state.datasxx,

	},
	mutations: {
		setUserInfo(state, item) {
			state.userInfo = item

		},
		setDatasxx(state, item) {
			state.datasxx = item

		}
	}

})

export default store
