
const validationForm = () => {

    const phoneInput = (phone: string) => {
        if (phone.length !== 11) return false
        if (phone[0] + phone[1] !== "09") return false
        return true
    }

    const passwordInput = (pass: string) => {
        if (pass.length < 8) return false
        return true
    }

    return { phoneInput, passwordInput }

}

export default validationForm