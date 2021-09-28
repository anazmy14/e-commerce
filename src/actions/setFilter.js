import { SET_FILTER } from "../constants/action-types"

export default function setFilter(payload) {
    return { type: SET_FILTER, payload }
};