import { useMutation } from "@tanstack/react-query"
import supabase from "../../supaBase/supaBase"

const useCheckUser = () => {
    const { mutateAsync } = useMutation({
        mutationFn: async (phone: string) => {
            const { data, error } = await supabase
                .from('users')
                .select("*")
                .eq('phone', phone)

            return { data, error }
        }
    })

    return { mutateAsync }
}

export default useCheckUser