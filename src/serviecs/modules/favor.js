import NzRequest from "../request"

// 我的收藏网络数据请求
export function getFavorList() {
  return NzRequest.get({
    url: "/favor/list"
  })
}

// 历史收藏网络数据请求
export function getFavorHistory() {
  return NzRequest.get({
    url: "/favor/history"
  })
}
