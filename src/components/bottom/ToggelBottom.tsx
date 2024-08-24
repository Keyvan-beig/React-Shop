interface pageProg {
    size : string
    setSize : any
}

const ToggelBottom : React.FC<pageProg> = ({size,setSize}) => {
    
    return (
        <div className='
            flex 
            [&>*]:w-10
            [&>*]:text-center
            [&>*]:border 
            [&>*]:border-[#FE8A00] 
            [&>*]:px-2 
            [&>*]:py-1 
            gap-2
            text-[#FE8A00]
            '>

            {["S", "M", "L", "XL", "XXL"].map(item => {
                if (item === size) {
                    return <input
                        type="button"
                        className="bg-[#FE8A00] text-white"
                        value={item}
                        key={item}
                        onClick={() => setSize(item)}
                    />
                }
                return <input
                    type="button"
                    value={item}
                    key={item}
                    onClick={() => setSize(item)}
                />
            })}
        </div>
    )
}

export default ToggelBottom
