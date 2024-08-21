
const getStorage = (key:string)=>{

    const value : any = localStorage.getItem(key)

    return JSON.parse(value)
}

export default getStorage