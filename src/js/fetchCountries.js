const URL = 'https://restcountries.com/v3.1/name/';
const options = 'name,capital,population,flags,languages'

export function fetchCountries(name) {
    return fetch(`${URL}${name}?fields=${options}`)
        .then(respons => {
            if (!respons.ok) {
            throw Error(`is not ok: ` + respons.status);
        }
        return respons.json();
    })
}