import { DropMapType } from '../../../types/common/main';
import {bonusChances, reward2Chances, reward1Chances, reward3Chances} from '../chances'
import { ITEMQUALITY, ITEMTYPE } from '../enums';
import commonRewards from './common';
import genericFineRewards from './genericFine';

const IronAtroDropMap: DropMapType = {
    radiant: [
        {
            name: "Black Forge Iron Senche",
            rewardBonusChance: bonusChances.radiant.normal,
            cardImage: '/images/crates/ironAtro/radiant/Black_Forge_Iron_Senche.png',
            quality: ITEMQUALITY.radiant,
            type: ITEMTYPE.mount,
            gems: 528
        },
        {
            name: "Sunflare Iron Wolf",
            rewardBonusChance: bonusChances.radiant.normal,
            cardImage: '/images/crates/ironAtro/radiant/Sunflare_Iron_Wolf.png',
            quality: ITEMQUALITY.radiant,
            type: ITEMTYPE.mount,
            gems: 825
        },
        {
            name: "Viridian Iron Steed",
            rewardBonusChance: bonusChances.radiant.normal,
            cardImage: '/images/crates/ironAtro/radiant/Viridian_Iron_Steed.png',
            quality: ITEMQUALITY.radiant,
            type: ITEMTYPE.mount,
            gems: 396
        },
    ],
    apex: [
        {
            name: "Iron Atronach",
            quality: ITEMQUALITY.apex,
            type: ITEMTYPE.costume,
            gems: 132,
            cardImage: '/images/crates/ironAtro/apex/Iron_Atronach.png',
            rewardBonusChance: bonusChances.apex.mount,
            reward2Chance: reward2Chances.apex.mount,
        },
        {
            name: "Iron Atronach Bear",
            quality: ITEMQUALITY.apex,
            type: ITEMTYPE.mount,
            gems: 132,
            cardImage: '/images/crates/ironAtro/apex/Iron_Atronach_Bear.png',
            rewardBonusChance: bonusChances.apex.mount,
            reward2Chance: reward2Chances.apex.mount,
        },
        {
            name: "Iron Atronach Camel",
            quality: ITEMQUALITY.apex,
            type: ITEMTYPE.mount,
            gems: 132,
            cardImage: '/images/crates/ironAtro/apex/Iron_Atronach_Camel.png',
            rewardBonusChance: bonusChances.apex.mount,
            reward2Chance: reward2Chances.apex.mount,
        },
        {
            name: "Iron Atronach Guar",
            quality: ITEMQUALITY.apex,
            type: ITEMTYPE.mount,
            gems: 132,
            cardImage: '/images/crates/ironAtro/apex/Iron_Atronach_Guar.png',
            rewardBonusChance: bonusChances.apex.mount,
            reward2Chance: reward2Chances.apex.mount,
        },
        {
            name: "Iron Atronach Horse",
            quality: ITEMQUALITY.apex,
            type: ITEMTYPE.mount,
            gems: 132,
            cardImage: '/images/crates/ironAtro/apex/Iron_Atronach_Horse.png',
            rewardBonusChance: bonusChances.apex.mount,
            reward2Chance: reward2Chances.apex.mount,
        },
        {
            name: "Iron Atronach Senche",
            quality: ITEMQUALITY.apex,
            type: ITEMTYPE.mount,
            gems: 132,
            cardImage: '/images/crates/ironAtro/apex/Iron_Atronach_Senche.png',
            rewardBonusChance: bonusChances.apex.mount,
            reward2Chance: reward2Chances.apex.mount,
        },
        {
            name: "Iron Atronach Wolf",
            quality: ITEMQUALITY.apex,
            type: ITEMTYPE.mount,
            gems: 132,
            cardImage: '/images/crates/ironAtro/apex/Iron_Atronach_Wolf.png',
            rewardBonusChance: bonusChances.apex.mount,
            reward2Chance: reward2Chances.apex.mount,
        },
        {
            name: "Resplendent Sweetroll",
            quality: ITEMQUALITY.apex,
            type: ITEMTYPE.mount,
            gems: 400,
            cardImage: '/images/crates/ironAtro/apex/Resplendent_Sweetroll.png',
            rewardBonusChance: bonusChances.apex.mount,
            reward2Chance: reward2Chances.apex.mount,
        },
    ],
    legendary: [
        {
            name: "Brimstone Nixad",
            cardImage: '/images/crates/ironAtro/legendary/Brimstone_Nixad.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.pet,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Bull Kagouti Charger",
            cardImage: '/images/crates/ironAtro/legendary/Bull_Kagouti_Charger.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.mount,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Dappled Elinhir Camel",
            cardImage: '/images/crates/ironAtro/legendary/Dappled_Elinhir_Camel.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.mount,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Deadlands Chandelier, Bladed",
            cardImage: '/images/crates/ironAtro/legendary/Deadlands_Chandelier_Bladed.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.furnishing,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Inferno Cleats",
            cardImage: '/images/crates/ironAtro/legendary/Inferno_Cleats.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.memento,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Iron Atronach Battle Axe",
            cardImage: '/images/crates/ironAtro/legendary/Iron_Atronach_Battle_Axe.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.style,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Iron Atronach Bow",
            cardImage: '/images/crates/ironAtro/legendary/Iron_Atronach_Bow.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.style,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Iron Atronach Dagger",
            cardImage: '/images/crates/ironAtro/legendary/Iron_Atronach_Dagger.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.style,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Iron Atronach Shield",
            cardImage: '/images/crates/ironAtro/legendary/Iron_Atronach_Shield.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.style,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Grand Gold Coast Experience Scroll", //this shit does not drop in bonus
            cardImage: '/images/crates/ironAtro/legendary/Grand_Gold_Coast_Experience_Scroll.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.consumable,
            gems: 33,
            rewardBonusChance: 0,
            reward1Chance: reward1Chances.legendary.scrollChance,
            reward2Chance: reward2Chances.legendary.scrollChance,
        },
        {
            name: "Instant All Research, Major", //this shit does not drop in bonus
            cardImage: '/images/crates/ironAtro/legendary/Instant_All_Research_Major.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.consumable,
            gems: 33,
            rewardBonusChance: 0,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Deadlands Excoriated",
            cardImage: '/images/crates/ironAtro/legendary/Deadlands_Excoriated.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.furnishing,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.special,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Hist-Tsoko",
            cardImage: '/images/crates/ironAtro/legendary/Hist-Tsoko.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.costume,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.special,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Iron Atronach Staff",
            cardImage: '/images/crates/ironAtro/legendary/Iron_Atronach_Staff.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.style,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Naryu's Morag Tong Costume",
            cardImage: '/images/crates/ironAtro/legendary/Naryus_Morag_Tong_Costume.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.costume,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Nibenese Noble's Shawled Robe",
            cardImage: '/images/crates/ironAtro/legendary/Nibenese_Nobles_Shawled_Robe.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.costume,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Nightmare Firestalker Cub",
            cardImage: '/images/crates/ironAtro/legendary/Nightmare_Firestalker_Cub.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.pet,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
        {
            name: "Solstheim Lunar Wolf",
            cardImage: '/images/crates/ironAtro/legendary/Solstheim_Lunar_Wolf.png',
            quality: ITEMQUALITY.legendary,
            type: ITEMTYPE.mount,
            gems: 33,
            rewardBonusChance: bonusChances.legendary.normal,
            reward1Chance: reward1Chances.legendary.normal,
            reward2Chance: reward2Chances.legendary.normal,
        },
    ],
    epic: [
        {
            name: 'Blow Bubbles',
            cardImage: '/images/crates/ironAtro/epic/Blow_Bubbles.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.memento,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Major Gold Coast Experience Scroll',
            cardImage: '/images/crates/ironAtro/epic/Major_Gold_Coast_Experience_Scroll.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.consumable,
            gems: 13,
            reward1Chance: reward1Chances.epic.scrollChance,
            reward2Chance: reward2Chances.epic.scrollChance,
            rewardBonusChance: 0
        },
        {
            name: 'Tourmaline Swamp Jelly',
            cardImage: '/images/crates/ironAtro/epic/Tourmaline_Swamp_Jelly.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.pet,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.special,
            rewardBonusChance: reward2Chances.epic.normal
        },
        {
            name: 'Crochet',
            cardImage: '/images/crates/ironAtro/epic/Crochet.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.memento,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Deadlands Cage, Bladed',
            cardImage: '/images/crates/ironAtro/epic/Deadlands_Cage_Bladed.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.furnishing,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Deadlands Sconce, Horned',
            cardImage: '/images/crates/ironAtro/epic/Deadlands_Sconce_Horned.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.furnishing,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Deadlands Scorpion',
            cardImage: '/images/crates/ironAtro/epic/Deadlands_Scorpion.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.pet,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Hearthfire Hatchling',
            cardImage: '/images/crates/ironAtro/epic/Hearthfire_Hatchling.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.pet,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Impartial Decision Coin',
            cardImage: '/images/crates/ironAtro/epic/Impartial_Decision_Coin.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.pet,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Instant All Research',
            cardImage: '/images/crates/ironAtro/epic/Instant_All_Research.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.consumable,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Knight-Aspirant Courting Helm',
            cardImage: '/images/crates/ironAtro/epic/Knight-Aspirant_Courting_Helm.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.style,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Knight-Aspirant Tourney Helm',
            cardImage: '/images/crates/ironAtro/epic/Knight-Aspirant_Tourney_Helm.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.style,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Morag Tong Spatter Lenses',
            cardImage: '/images/crates/ironAtro/epic/Knight-Aspirant_Tourney_Helm.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.costume,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Nibenese Laurel Coronet',
            cardImage: '/images/crates/ironAtro/epic/Nibenese_Laurel_Coronet.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.costume,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Stallion-Liege Brow Medallion',
            cardImage: '/images/crates/ironAtro/epic/Stallion-Liege_Brow_Medallion.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.costume,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        },
        {
            name: 'Stitchfur Cavy',
            cardImage: '/images/crates/ironAtro/epic/Stitchfur_Cavy.png',
            quality: ITEMQUALITY.epic,
            type: ITEMTYPE.pet,
            gems: 13,
            reward1Chance: reward1Chances.epic.normal,
            reward2Chance: reward2Chances.epic.normal,
            rewardBonusChance: bonusChances.epic.normal
        }
    ],
    superior: [
        {
            name: "Dagon's Aspirant Body Markings",
            cardImage: '/images/crates/ironAtro/superior/Dagons_Aspirant_Body_Markings.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.costume,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Dagon's Aspirant Face Markings",
            cardImage: '/images/crates/ironAtro/superior/Dagons_Aspirant_Face_Markings.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.costume,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Fire Salts",
            cardImage: '/images/crates/ironAtro/superior/Fire_Salts.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.costume,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Goldspine Boar",
            cardImage: '/images/crates/ironAtro/superior/Goldspine_Boar.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.pet,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Hallin's Jackal",
            cardImage: '/images/crates/ironAtro/superior/Hallins_Jackal.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.pet,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Iliac Spotted Goat",
            cardImage: '/images/crates/ironAtro/superior/Iliac_Spotted_Goat.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.pet,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Knight-Aspirant Cuirass",
            cardImage: '/images/crates/ironAtro/superior/Knight-Aspirant_Cuirass.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.style,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Knight-Aspirant Gauntlets",
            cardImage: '/images/crates/ironAtro/superior/Knight-Aspirant_Gauntlets.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.style,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Knight-Aspirant Girdle",
            cardImage: '/images/crates/ironAtro/superior/Knight-Aspirant_Girdle.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.style,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Knight-Aspirant Greaves",
            cardImage: '/images/crates/ironAtro/superior/Knight-Aspirant_Greaves.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.style,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Knight-Aspirant Helm",
            cardImage: '/images/crates/ironAtro/superior/Knight-Aspirant_Helm.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.style,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Knight-Aspirant Pauldrons",
            cardImage: '/images/crates/ironAtro/superior/Knight-Aspirant_Pauldrons.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.style,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Knight-Aspirant Sabatons",
            cardImage: '/images/crates/ironAtro/superior/Knight-Aspirant_Sabatons.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.style,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Necrom Ghostgazer Cat",
            cardImage: '/images/crates/ironAtro/superior/Necrom_Ghostgazer_Cat.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.pet,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Scutecicle Haj Mota",
            cardImage: '/images/crates/ironAtro/superior/Scutecicle_Haj_Mota.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.pet,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Sea Sapphire Dovah-Fly",
            cardImage: '/images/crates/ironAtro/superior/Sea_Sapphire_Dovah-Fly.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.pet,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Sea Sapphire Dovah-Fly",
            cardImage: '/images/crates/ironAtro/superior/Spicy_Soup.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.costume,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Sul-Xan Prophet Body Markings",
            cardImage: '/images/crates/ironAtro/superior/Sul-Xan_Prophet_Body_Markings.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.andornment,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Sul-Xan Prophet Face Markings",
            cardImage: '/images/crates/ironAtro/superior/Sul-Xan_Prophet_Face_Markings.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.andornment,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Triptych Motion Body Markings",
            cardImage: '/images/crates/ironAtro/superior/Triptych_Motion_Body_Markings.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.andornment,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Triptych Motion Face Markings",
            cardImage: '/images/crates/ironAtro/superior/Triptych_Motion_Face_Markings.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.andornment,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
        {
            name: "Wasten Coraldale Mudcrab",
            cardImage: '/images/crates/ironAtro/superior/Wasten_Coraldale_Mudcrab.png',
            quality: ITEMQUALITY.superior,
            type: ITEMTYPE.pet,
            gems: 5,
            reward1Chance: reward1Chances.superior.normal,
            reward2Chance: reward2Chances.superior.normal,
        },
    ],
    fine: [
        ...genericFineRewards,
        {
            name: "Darkheart: Angst and Blood Tears",
            cardImage: '/images/crates/ironAtro/fine/Darkheart_Angst_and_Blood_Tears.png',
            quality: ITEMQUALITY.fine,
            type: ITEMTYPE.consumable,
            gems: 1,
            reward1Chance:reward1Chances.fine.dye,
            reward3Chance:reward3Chances.fine.dye,
        },
        {
            name: "Darkheart: Beguiling Agony",
            cardImage: '/images/crates/ironAtro/fine/Darkheart_Beguiling_Agony.png',
            quality: ITEMQUALITY.fine,
            type: ITEMTYPE.consumable,
            gems: 1,
            reward1Chance:reward1Chances.fine.dye,
            reward3Chance:reward3Chances.fine.dye,
        },
        {
            name: "Darkheart: Beloved Nightmares",
            cardImage: '/images/crates/ironAtro/fine/Darkheart_Beloved_Nightmares.png',
            quality: ITEMQUALITY.fine,
            type: ITEMTYPE.consumable,
            gems: 1,
            reward1Chance:reward1Chances.fine.dye,
            reward3Chance:reward3Chances.fine.dye,
        },
        {
            name: "Darkheart: Obsession's Rose",
            cardImage: '/images/crates/ironAtro/fine/Darkheart_Obsessions_Rose.png',
            quality: ITEMQUALITY.fine,
            type: ITEMTYPE.consumable,
            gems: 1,
            reward1Chance:reward1Chances.fine.dye,
            reward3Chance:reward3Chances.fine.dye,
        },
        {
            name: "Darkheart: Rage-Tempered Loss",
            cardImage: '/images/crates/ironAtro/fine/Darkheart_Rage-Tempered_Loss.png',
            quality: ITEMQUALITY.fine,
            type: ITEMTYPE.consumable,
            gems: 1,
            reward1Chance:reward1Chances.fine.dye,
            reward3Chance:reward3Chances.fine.dye,
        },
        {
            name: "Darkheart: Ruby Regrets",
            cardImage: '/images/crates/ironAtro/fine/Darkheart_Ruby_Regrets.png',
            quality: ITEMQUALITY.fine,
            type: ITEMTYPE.consumable,
            gems: 1,
            reward1Chance:reward1Chances.fine.dye,
            reward3Chance:reward3Chances.fine.dye,
        }
    ],
    common: commonRewards
};

export default IronAtroDropMap