import Container from "./container"
export default function ({children}) {
    return(<div className="bg-white dark:bg-slate-700"><Container><div className="prose-layout">{children}</div></Container></div>)
}