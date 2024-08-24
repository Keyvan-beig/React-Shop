// import { useQuery } from "@tanstack/react-query"
// import supabase from "../../supaBase/supaBase"

// const useGetUser = (phone: string) => {
    
//     const { data, error } = useQuery({
//         queryKey: ["user"],
//         queryFn: async () => {

//             return await supabase.from('users').select("*").eq('phone', phone)
//         }
//     })

//     return { data, error }
// }

// export default useGetUser