import { Link, useParams } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react";
import cratesArray from "../../static/crates";
import { CrateType, RewardType } from "../../../types/common/main";
import { bonusChance, reward1, reward2, reward3, reward4, rewardBonus } from "../../static/chances";
import { ITEMQUALITY } from "../../static/enums";
import { randomNumber } from "../../utils";
import RewardCard from "../../components/RewardCard";
import ItemHistoryCard from "../../components/ItemHistoryCard";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
const _ = require("lodash");

const CratePage = () => {
    const params = useParams();
    const [crate, setCrate] = useState({} as CrateType)
    const [currentShownItems, setCurrentShownItems] = useState(Array<RewardType | undefined>())
    const [itemsHistory, setItemsHistory] = useState(Array<RewardType | undefined>())
    const [rarityNumbers, setRarityNumbers] = useState({
        common: 0,
        fine: 0,
        superior: 0,
        epic: 0,
        legendary: 0,
        apex: 0,
        radiant: 0
    })
    const [isError, setIsError] = useState(false)
    const [totalOpened, setTotalOpened] = useState(0)
    const [cardsOpenArray, setCardsOpenArray] = useState(Array<boolean>())
    const cratesAnount = 1
    const [itemsAddedToList, setItemsAddedToList] = useState(false)
    const [showTrash, setShowTrash] = useState(false)
    const [isAutoOpening, setIsAutoOpening] = useState(false)
    const [autoOpenInterval, setAutoOpenInterval] = useState({} as NodeJS.Timer | undefined)
    useEffect(() => {
        const crateFiltered = cratesArray.filter((crate: CrateType) => {
            return crate.link === params.name
        })[0]

        if (_.isNil(crateFiltered)) {
            setIsError(true)
        }

        setCrate(crateFiltered)
    }, [params.name])

    useEffect(() => {
        if (itemsAddedToList) {
            return
        }

        if (allAreTrue(cardsOpenArray)) {
            setItemsHistory([...currentShownItems, ...itemsHistory])
            sumRarities()
        }
    }, [cardsOpenArray, currentShownItems])


    const openCrate = (cardsRevealed: boolean) => {
        let itemsDropped = Array<RewardType | undefined>()
        let bonusItem = undefined as RewardType | undefined
        let cardsOpen = Array<boolean>()
        setItemsAddedToList(false)

        for (let k = 0; k < cratesAnount; k++) {
            var number1 = Math.random() * 100; //card 1
            var number2 = Math.random() * 100; //card 2
            var number3 = Math.random() * 100; //card 3
            var number4 = Math.random() * 100; //card 4
            var bonusNumber = Math.random() * 100; //bonus dropped or not?

            for (var i = 0; i < reward1.length; i++) {
                if (number1 >= reward1[i].chance) {
                    itemsDropped.push(getItem(reward1[i].name, 'reward1Chance'))
                    break;
                }
            }

            for (var j = 0; j < reward2.length; j++) {
                if (number2 >= reward2[j].chance) {
                    itemsDropped.push(getItem(reward2[j].name, 'reward2Chance'))
                    break;
                }
            }

            for (var l = 0; l < reward3.length; l++) {
                if (number3 >= reward3[l].chance) {
                    itemsDropped.push(getItem(reward3[l].name, 'reward3Chance'))
                    break;
                }
            }

            for (var m = 0; m < reward4.length; m++) {
                if (number4 >= reward4[m].chance) {
                    itemsDropped.push(getItem(reward4[m].name, 'reward4Chance'))
                    break;
                }
            }

            if (bonusNumber >= 100 - bonusChance) {
                var newBonus = Math.random() * 100;
                for (var n = 0; n < rewardBonus.length; n++) {
                    if (newBonus >= rewardBonus[n].chance) {
                        bonusItem = getItem(rewardBonus[n].name, 'rewardBonusChance')
                        break;
                    }
                }
            }
        }

        let itemsShuffled = itemsDropped
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        if (!_.isNil(bonusItem)) {
            itemsShuffled.splice(2, 0, bonusItem)
        }

        for (var f = 0; f < itemsShuffled.length; f++) {
            cardsOpen.push(cardsRevealed)
        }

        setCurrentShownItems(itemsShuffled)
        setCardsOpenArray(cardsOpen)
    }

    const removeRewers = (index: number) => {
        let tmp = [...cardsOpenArray];
        tmp[index] = true;
        setCardsOpenArray(tmp)
    }

    const getItem = (quality: ITEMQUALITY, cardName: string): RewardType | undefined => {
        const dropMap = crate.dropMap[quality]
        const myVar = cardName as keyof RewardType;

        const sumChance = dropMap.reduce(
            (accumulator, curr: RewardType) => _.isNil(curr[myVar]) ? accumulator : accumulator + curr[myVar], 0
        );

        let randomN = randomNumber(0, sumChance);
        for (var i = 0; i < dropMap.length; i++) {
            if (!_.isNil(dropMap[i][myVar])) {
                randomN -= dropMap[i][myVar];
                if (randomN <= 0) {
                    return dropMap[i]
                }
            }
        }

        return undefined
    }

    const revealAll = () => {
        let tmp = [...cardsOpenArray]
        for (var i = 0; i < tmp.length; i++) {
            tmp[i] = true
        }
        setCardsOpenArray(tmp)
    }

    const allAreTrue = (arr: any[]) => {
        return arr.every(element => element === true);
    }

    const sumRarities = () => {
        if (itemsAddedToList) {
            return
        }
        else {
            setItemsAddedToList(true)
        }

        let tmp = rarityNumbers
        for (var i = 0; i < currentShownItems.length; i++) {
            const rarity = currentShownItems[i]?.quality;

            if (rarity === ITEMQUALITY.common) {
                tmp.common += 1
            }
            if (rarity === ITEMQUALITY.fine) {
                tmp.fine += 1
            }
            if (rarity === ITEMQUALITY.superior) {
                tmp.superior += 1
            }
            if (rarity === ITEMQUALITY.epic) {
                tmp.epic += 1
            }
            if (rarity === ITEMQUALITY.legendary) {
                tmp.legendary += 1
            }
            if (rarity === ITEMQUALITY.apex) {
                tmp.apex += 1
            }
            if (rarity === ITEMQUALITY.radiant) {
                tmp.radiant += 1
            }
        }
        if (!_.isEmpty(currentShownItems)) {
            setTotalOpened(totalOpened + 1)
            setRarityNumbers(tmp)
        }
    }

    const toggleShowTrash = () => {
        setShowTrash(!showTrash)
    }

    const openRevealInterval = () => {
        return setInterval(() => {
            openCrate(true)
        }, 1000)
    }

    const autoOpen = () => {
        if (isAutoOpening === false) {
            openCrate(true)
            const id = openRevealInterval()
            setAutoOpenInterval(id)
            setIsAutoOpening(true);
        }
        else {
            clearInterval(autoOpenInterval);
            setAutoOpenInterval(undefined)
            setIsAutoOpening(false);
        }
    }

    return (
        <>
            <HeaderComponent />
            <div className="content">
                {
                    isError &&
                    <div className="errorDiv">
                        Unexpected error
                        <Link to={'/'}><button type="button">Return home</button></Link>
                    </div>
                }
                {
                    !isError &&
                    <>
                        <div className="cardsPanel">
                            {currentShownItems?.map((reward: RewardType | undefined, index: number) => {
                                if (!_.isNil(reward)) {
                                    return <RewardCard reward={reward!} key={index} overlayLink={crate.rewersLink} openCardFunc={removeRewers} cardIndex={index} isOpen={cardsOpenArray[index]} />
                                }
                                else {
                                    return ''
                                }
                            })}
                        </div>
                        <div className="controls">
                            <button onClick={() => openCrate(false)} type="button" disabled={!allAreTrue(cardsOpenArray) || isAutoOpening}>Open Crate</button>
                            <button onClick={revealAll} type="button" disabled={allAreTrue(cardsOpenArray) || isAutoOpening}>Reveal all</button>
                            <button onClick={toggleShowTrash} type="button">Show trash: {showTrash ? 'yes' : 'no'}</button>
                            <button onClick={autoOpen} type="button">Auto open: {isAutoOpening ? 'yes' : 'no'}</button>
                        </div>
                        <div className="bottom">
                            <div className="stats highlightedElement">
                                <div className="statRows">
                                    <div>Total opened: {totalOpened}</div>
                                    <div>Total wasted zł: {Math.floor((totalOpened * 10) * 100) / 100}zł</div>
                                    <div>Total wasted $: ${Math.floor((totalOpened * 2.68) * 100) / 100}</div>
                                    <div className="radiant">Radiant: {rarityNumbers.radiant}</div>
                                    <div className="apex">Apex: {rarityNumbers.apex}</div>
                                    <div className="legendary">Legendary: {rarityNumbers.legendary}</div>
                                    <div className="epic">Epic: {rarityNumbers.epic}</div>
                                    <div className="superior">Superior: {rarityNumbers.superior}</div>
                                    <div className="fine">Fine: {rarityNumbers.fine}</div>
                                    <div className="common">Common: {rarityNumbers.common}</div>
                                </div>

                            </div>
                            <div className="itemsHistory highlightedElement">
                                {itemsHistory?.map((reward: RewardType | undefined, index: number) => {
                                    if (!_.isNil(reward)) {
                                        return <ItemHistoryCard reward={reward!} key={index} showTrash={showTrash} />
                                    }
                                    else {
                                        return ''
                                    }
                                })}
                            </div>
                        </div>
                    </>
                }
            </div>
            <FooterComponent />
        </>
    )
}

export default CratePage
