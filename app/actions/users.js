import axios from "axios";

import * as types from "./types";

export function logout() {
    return {
        type: types.LOGOUT,
        promise: axios.get("/api/logout"),
    };
}
