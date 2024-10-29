import NzRequest from "../request"

export function getFavorList() {
  return NzRequest.get({
    url: "/favor/list"
  })
}