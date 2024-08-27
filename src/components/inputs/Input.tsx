
interface propType {
    placeholder: string
    classes: string | null
}
const Input: React.FC<propType> = ({ placeholder, classes }) => {

    console.log(placeholder);


    return (
        <div className="
          bg-white
            p-3
            rounded-lg
        ">
            <input
                minLength={4}
                name={placeholder}
                type="text"
                placeholder={placeholder}
                className={`
                    w-[100%]
                    bg-white
                    outline-none
                    ${classes}
                `}
            />
        </div>
    )

}

export default Input