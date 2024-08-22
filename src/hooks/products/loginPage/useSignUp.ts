import supabase from "../../../supaBase/supaBase"
import formData from "../../../utils/form/formData"

const useSignUp = (setLoading: any, setShowAlert: any, setToggleForm: any, setError: any) => {

    const postData = async (form: any) => {

        const { formList } = formData(form)

        setLoading(true)

        const { data, error } = await supabase
            .from('users')
            .select("*")
            .eq('phone', formList.phone)

        if (!data?.length) {

            const { data, error } = await supabase
                .from('users')
                .insert([
                    formList
                ])
                .select()

            if (data?.length) {

                setShowAlert('success')

                setLoading(false)

                setTimeout(() => {

                    setToggleForm("loginIn")

                }, 5000)

            } else if (error) {
                setError(error.message);
                setLoading(false)

            }
            else {
                setShowAlert('error')
                setLoading(false)
            }
        }
    }

    return { postData }
}

export default useSignUp