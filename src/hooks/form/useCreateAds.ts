import { useMutation } from "@tanstack/react-query"
import supabase from "../../supaBase/supaBase"

const useCreateAds = (table: string) => {

    const { mutateAsync} = useMutation({

        mutationFn: async (dataList) => {

            const { data, error } = await supabase.from(table).insert([dataList]).select()

            return { data, error }
        }

    })

    return { mutateAsync }

}

export default useCreateAds