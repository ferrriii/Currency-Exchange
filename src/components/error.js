export default function Error(props) {
    if (!props.error) return null
    return (
        <div className="pt-6 pb-8 text-center text-warn">
            {props.error}
      </div>
    )
}  