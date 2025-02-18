
export default function Buttons({ onSave, onCancel }) {

    return (
        <div>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onSave}>Save</button>
        </div>
    )
}