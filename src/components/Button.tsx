interface Props {
    children: string,
    onClick?: () => void,
    color?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark" | "link"
}
export default function Button({ children, onClick, color = "primary" }: Props) {
    return (
        <button onClick={onClick} className={"btn btn-" + color}>{children}</button>
    )
}