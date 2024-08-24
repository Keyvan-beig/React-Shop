import { useQuery } from "@tanstack/react-query";
import supabase from "../../supaBase/supaBase";

const useProductGet = () => {

    const { data, error } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {

            return await supabase.from('products').select('*')

        }
    })

    return { data, error }
}

export default useProductGet