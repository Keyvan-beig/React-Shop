
const setStorage = (key: string, value: any) => {

    const stringValue = JSON.stringify(value)
    localStorage.setItem(key, stringValue)

}

export default setStorage