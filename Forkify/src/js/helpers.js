import { TIMEOUT_SEC } from './config.js';


function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}


export async function AJAX(url, uploadData = undefined) {
    const fetchPro = uploadData ?
         fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        })
        : await fetch(url);


    const res = await Promise.race([timeout(TIMEOUT_SEC), fetchPro])
    const data = await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`)

    return data;
}

