export function setLocalStorage(key, value){
    if(value == undefined) return localStorage.removeItem(key)
    localStorage.setItem(key, JSON.stringify(value))
}

export function getLocalStorage(key){
    const jsonValue = localStorage.getItem(key);
    return JSON.parse(jsonValue)
}

export function setSessionStorage(key, value){
    if(value == undefined) return localStorage.removeItem(key)
    sessionStorage.setItem(key, JSON.stringify(value))
}

export function getSessionStorage(key){
    const jsonValue = sessionStorage.getItem(key) ?? '';
    return JSON.parse(jsonValue)
}

export function clearLocalStorage(){
    localStorage.clear();
}

export function clearSessionStorage(){
    sessionStorage.clear();
}