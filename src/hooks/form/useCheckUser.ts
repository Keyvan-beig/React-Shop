import { useMutation } from "@tanstack/react-query"
import supabase from "../../supaBase/supaBase"

interface typrFormList {
    password: string
    phone: string
}

const useCheckUser = () => {
    const { mutateAsync } = useMutation({
        mutationFn: async (formList: typrFormList) => {
            const { data, error } = await supabase
                .from('users')
                .select("*")
                .eq('phone', formList.phone)

            return { data, error }
        }
    })

    return { mutateAsync }
}

export default useCheckUser