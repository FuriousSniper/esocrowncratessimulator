import { Link } from "react-router-dom"
import { CrateType } from "../../../types/common/main"
import "./style.css"

const CrateLink = (props: {crate: CrateType}) => {
    return <Link to={`/crate/${props.crate.link}`} className="crateLink"><img src={props.crate.miniatureLink} alt="" className="crateIcon"/><span className="crateName">{props.crate.name}</span></Link>
}

export default CrateLink