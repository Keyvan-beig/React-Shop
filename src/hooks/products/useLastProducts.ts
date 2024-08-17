import { useQuery } from "@tanstack/react-query"
import supabase from "../../supaBase/supaBase"

const useLastProducts = () => {

    const { data, error } = useQuery({
        queryKey: ['lastProduct'],
        queryFn: async () => {
            const { data } = await supabase
                .from('products')
                .select()
                .order('created_at', { ascending: false })
                .limit(4)

            return data
        }
    })

    return { data, error }
}

export default useLastProducts