export const state = () => ({
  // 連想配列をリターンしたい
  memoInfoList: [
    {
      posX: 20,
      posY: 20,
      text: ''
    }
  ]
})

// プラグイン
export const plugins = [
  (store) => {
    store.subscribe(() => {
      // ローカルストレージに入れる
      localStorage.memoData = JSON.stringify(store.state.memoInfoList)
    })
  },
  (store) => {
    if (localStorage.memoData) {
      store.commit('initMemo', JSON.parse(localStorage.memoData))
    }
  }
]

export const mutations = {
  initMemo(state, memoData) {
    state.memoInfoList = memoData
  },
  addMemo(state) {
    const lastMemo = state.memoInfoList[state.memoInfoList.length - 1]

    state.memoInfoList = [
      ...state.memoInfoList,
      {
        posX: lastMemo.posX + 220,
        posY: lastMemo.posY + 20,
        text: ''
      }
    ]
  },
  remove(state, i) {
    state.memoInfoList = state.memoInfoList.filter((memo, index) =>
      index !== i)
  },
  setText(state, { text, index }) {
    state.memoInfoList = state.memoInfoList.map((memoInfo, i) => {
      if (i === index) {
        return {
          ...memoInfo,
          text
        }
      } else {
        return memoInfo
      }
    })
  },
  dragMemo(state, { index, deltaX, deltaY }) {
    state.memoInfoList = state.memoInfoList.map((memo, i) => {
      if (i === index) {
        return {
          ...memo,
          posX: memo.posX + deltaX,
          posY: memo.posY + deltaY
        }
      } else {
        return memo
      }
    })
  }
}
