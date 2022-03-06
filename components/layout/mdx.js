import Container from "./container"
export default function ({children}) {
    return(<div className="prose-layout"><Container>{children}</Container></div>)
}