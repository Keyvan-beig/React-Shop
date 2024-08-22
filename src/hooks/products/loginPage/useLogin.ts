import { useState } from "react"
import setStorage from "../../../utils/storage/setStorage"
import { useNavigate } from "react-router-dom"
import supabase from "../../../supaBase/supaBase"
import formData from "../../../utils/form/formData"

const useLogin = (setLoading: any, setShowAlert: any, setError: any) => {

    const navigat = useNavigate()

    const fetchData = async (form: any) => {

        const { formList } = formData(form)

        if (formList.phone.length === 11) {

            setLoading(true)

            const { data, error } = await supabase
                .from('users')
                .select("*")
                .eq('phone', formList.phone)
                .eq('password', formList.password)

            if (data?.length) {

                setStorage("login", data[0])

                setShowAlert('success')

                setLoading(false)

                setTimeout(() => {

                    navigat('/')

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

    return { fetchData }
}

export default useLogin