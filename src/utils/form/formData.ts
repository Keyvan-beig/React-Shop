
const formData = (form: any) => {
    const formData = new FormData(form)
    const data = formData.entries()
    const formList:any = {}

    for (const [key, value] of data) {
        formList[key] = value
    }

    return { formList }
}

export default formData