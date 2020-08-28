import {AUTH, USERS} from "./links";

export async function authRequest(username, password) {
    return await fetch(AUTH, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(result => {
        if (!result.ok) throw Error(`Status: ${result.status}\n ${result.statusText}`);
        return result;
    });
}

export async function getUsersRequest(token) {
    return await fetch(USERS, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Token ${token}`
        },
    }).then(result => {
        if (!result.ok) throw Error(`Status: ${result.status}\n ${result.statusText}`);
        return result;
    });
}
