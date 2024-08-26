import { useQuery } from "@tanstack/react-query"
import supabase from "../../supaBase/supaBase"

const useDataUser = (phone: string) => {

    const { data, error } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            let { data, error } = await supabase
                .from('users')
                .select("*")
                .eq('phone', phone)

            return { data, error }
        }
    })

    return { data, error }
}

export default useDataUser