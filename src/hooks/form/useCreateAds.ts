import { useMutation } from "@tanstack/react-query"
import supabase from "../../supaBase/supaBase"
import { dataListType } from "../../types/userType";

const useCreateAds = (table: string) => {

    const { mutateAsync } = useMutation({

        mutationFn: async (dataList: dataListType) => {

            const { data, error } = await supabase
                .from(table)
                .insert([dataList])
                .select()

            return { data, error }
        }
    })

    return { mutateAsync }
}

export default useCreateAds