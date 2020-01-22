import axios from 'axios';

export const createLink = async originLink => {
    let response = { ans: false };
    await axios.post('https://rel.ink/api/links/', { url: originLink }).then((res) => {
        response = {
            ans: true,
            data: res
        };
    }).catch((err) => {
        response = {
            ans: false,
            data: err
        };
    });
    return response
}

export const getOrigin = (linkId, callbackSuccess, callbackError) => {
    axios.get('https://rel.ink/api/links/' + linkId).then(res => callbackSuccess()).catch(err => callbackError(err));
}