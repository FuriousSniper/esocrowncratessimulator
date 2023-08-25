import cratesArray from "../../static/crates"
import { CrateType } from "../../../types/common/main"
import "./style.css"
import CrateLink from "../../components/CrateLink"

const HomePage = () => {
    return (
        <div>
            {cratesArray.map((crate: CrateType, key: number)=>{
                return <CrateLink crate={crate} key={key}/>
            })}
        </div>
    )
}
export default HomePage