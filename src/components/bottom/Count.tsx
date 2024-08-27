import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"

interface countType {
    count: number
    setCount: (count:number)=>void
}

const Count: React.FC<countType> = ({ count, setCount }) => {
    return (
        <div className="flex [&>*]:border [&>*]:px-3 [&>*]:py-1 my-3">
            <button
                onClick={() => setCount(count < 2 ? count : count - 1)}
                style={{ borderRadius: "10px 0 0 10px" }}>
                <CiCircleMinus className="text-[20px]" />
            </button>

            <p>{count}</p>

            <button
                onClick={() => setCount(count + 1)}
                style={{ borderRadius: "0 10px 10px 0" }}>
                <CiCirclePlus className="text-[20px]" />
            </button>
        </div>
    )
}

export default Count