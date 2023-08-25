import { useParams } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react";
import cratesArray from "../../static/crates";
import { CrateType, RewardType } from "../../../types/common/main";
const CratePage = () => {
    const params = useParams();
    const [crate, setCrate] = useState({} as CrateType)

    useEffect(()=>{
        console.log(params.name)
        const crateFilteered = cratesArray.filter((crate: CrateType)=>{
            return crate.link===params.name
        })[0]
        setCrate(crateFilteered)
    })
    return (
        <div>crate
            {crate?.dropMap?.legendary?.map((reward: RewardType)=>{
                return <img src={reward.cardImage} alt=""/>
            })}
        </div>
    )
}

export default CratePage