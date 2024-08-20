

export function saveInLocalStorage(value:any, key:string){
  localStorage.setItem(key,value)
}

export function getInLocalStorage(key:string){
  const data = localStorage.getItem(key)
  return data;
}

export function deleteFromLocalStorage(key:string){
  localStorage.removeItem(key)
}