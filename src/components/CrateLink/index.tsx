import { Link } from "react-router-dom"
import { CrateType } from "../../../types/common/main"
import "./style.css"

const CrateLink = (props: {crate: CrateType}) => {
    return <Link to={`/crate/${props.crate.link}`}><img src={props.crate.miniatureLink} alt=""/>{props.crate.name}</Link>
}

export default CrateLink