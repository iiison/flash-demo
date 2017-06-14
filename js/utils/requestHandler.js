import axios from 'axios'
import confs from '$configs/configs.json'

const axiosRef = axios.create({
  baseURL : confs.API,
  timeout : 1000
})

const defaultHeaders = {
  'Content-Type' : 'application/json'
}

/* eslint-disable */
/**
 * Get Request wrapper
 * @param  {String} url  URL to hit
 * @return {Promise}     Promise of get request
 */
export function get(url) {
  if (!url) {
    return false
  }

  return axiosRef.get(url)
}
/* eslint-enable */
/**
 * Post Request wrapper
 * @param  {Object} reqObj  request data, should have
 *                          - url {String}  URL to hit
 *                          - payload {Object} Post payload
 * @return {Promise}       Post Promise
 */
export function post(reqObj) {
  if (reqObj !== Object(reqObj)) {
    return false
  }

  if (!reqObj.url) {
    return false
  }

  reqObj.payload = reqObj.payload || {}
  reqObj.headers = reqObj.headers || {}

  return axiosRef({
    method  : 'post',
    url     : reqObj.url,
    data    : {
      ...reqObj.payload
    },
    headers : {
      ...defaultHeaders,
      ...reqObj.headers
    }
  })
}
