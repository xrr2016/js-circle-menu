import {
  FETCH_VOICES,
  FETCH_VOICES_FAILURE,
  FETCH_VOICES_SUCCESS,
  LIKE_VOICE,
  DISLIKE_VOICE,
  ADD_COMMENT,
  SELECT_TAG
} from './types'

export function fetchVoices() {
  return {
    type: FETCH_VOICES
  }
}
export function fetchVoicesFailure() {
  return {
      type: FETCH_VOICES_FAILURE,
      msg: 'Some thing going wrong!'
  }
}
export function fetchVoicesSuccess(response) {
  return {
    type: FETCH_VOICES_SUCCESS,
    response
  }
}
export function likeVoice(id) {
  return {
    type: LIKE_VOICE,
    id
  }
}
export function dislikeVoice(id) {
  return {
    type: DISLIKE_VOICE,
    id
  }
}
export function addComment(id, comment) {
  return {
    type: ADD_COMMENT,
    id,
    comment
  }
}
export function selectTag(tag) {
  return {
    type: SELECT_TAG,
    tag
  }
}














