import Cookies from "js-cookie";
export function getCookies(k) {
  return Cookies.get(k)
}

export function setCookies(k,v) {
  return Cookies.set(k, v)
}

export function removeCookies(k) {
  return Cookies.remove(k)
}