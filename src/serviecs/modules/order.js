import NzRequest from '../request'

export function getOrderData() {
  return NzRequest.get({
    url: "/order/list",
    params: {
      type: "all"
    }
  })
}

export function getOrderDataPend() {
  return NzRequest.get({
    url: "/order/list",
    params: {
      type: "pend"
    }
  })
}

export function getOrderDataRecent() {
  return NzRequest.get({
    url: "/order/list",
    params: {
      type: "recent"
    }
  })
}