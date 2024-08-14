import { useQuery } from "@tanstack/react-query";
import supabase from "../../supaBase/supaBase";

const useProductGet = () => {

    const {data , error} = useQuery({
        
        queryKey: ['product'],
        queryFn: async () => {

            const { data } = await supabase.from('products').select('*')

            return data 
        }
    })

    return {data , error}

}

export default useProductGet