import { TIMEOUT_SEC } from './config.js';

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}


export async function getJSON(url) {

    const res = await Promise.race([timeout(TIMEOUT_SEC), fetch(url)])
    const data = await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`)
    return data
}


export async function sendJSON(url, uploadData) {

        const fetch1 = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        })

    const res = await Promise.race([timeout(TIMEOUT_SEC), fetch1])
    const data = await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`)
    return data
}