import { useMutation } from "@tanstack/react-query"
import supabase from "../../supaBase/supaBase"

interface formType {
    fullName: string
    city: string
    address: string
    phone: string
}

const useEditeUser = () => {

    const { mutateAsync } = useMutation({
        mutationFn: async (form: formType) => {
            console.log(form);
            const { data, error } = await supabase
                .from('users')
                .update(form)
                .eq('phone', form.phone)
                .select()

            return { data, error }
        }
    })

    return {mutateAsync}
}

export default useEditeUser