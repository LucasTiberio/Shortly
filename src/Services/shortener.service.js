import axios from 'axios';

export const createLink = async originLink => {
    let response = { ans: false };
    await axios.post('https://rel.ink/api/links/', { url: originLink }).then((res) => {
        response = {
            ans: true,
            ...res
        };
    }).catch((err) => {
        response = {
            ans: false,
            ...err
        };
    });
    return response
}

//kXaBrn
export const getOrigin = async linkId => {
    let response = { ans: false }
    await axios.get('https://rel.ink/api/links/' + linkId).then( res => {
        response = {
            ans: true,
            ...res
        };
    }).catch(err => {
        response = {
            ans: false,
            ...err
        }
    })
    return response;
}