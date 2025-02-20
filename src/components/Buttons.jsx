
export default function Buttons({ onSave, onCancel }) {

    const classes = "px-4 py-2 text-xl md:text-base rounded-md border-1 text-stone-800 hover:bg-stone-600 hover:text-stone-100"

    return (
        <div className="flex gap-10 my-10 mx-auto">
            <button className={`${classes}`}
                onClick={onCancel}
            >
                Cancel
            </button>
            <button className={`${classes} bg-stone-400 font-bold`}
                onClick={onSave}
            >
                Save
            </button>
        </div>
    )
}