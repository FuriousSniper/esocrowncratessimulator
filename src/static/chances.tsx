import { ITEMQUALITY } from "./enums"

//bonus
export const bonusChances = {
    radiant: {
        normal: 0.33
    },
    apex: {
        mount: 1.43,
        special: 0.53,
    },
    legendary: {
        normal: 1.9381,
    },
    epic: {
        normal: 4.0728,
    }
}

export const reward4Chances = {
    fine: {
        scroll: 10.07
    },
    common: {
        tripot: 37,
        pot1: 9,
        pot2: 2.2,
    }
}

export const reward3Chances = {
    fine: {
        normal: 2.48,
        dye: 1.35
    },
    common: {
        poison1: 27.9,
        potion: 7,
        special: 1.78
    }
}

export const reward2Chances = {
    apex: {
        mount: 0.013,
        special: 0.009
    },
    legendary: {
        scrollChance: 2.95,
        normal: 0.2147
    },
    epic: {
        scrollChance: 3.80,
        special: 0.38,
        normal: 0.2935
    },
    superior: {
        normal: 3.86
    },
}

export const reward1Chances = {
    legendary: {
        scrollChance: 1.53,
        normal: 0.116,
        special: 0.07
    },
    epic: {
        scrollChance: 2.12,
        normal: 0.166
    },
    superior: {
        normal: 0.33
    },
    fine: {
        scroll: 16.5,
        dye: 1.4,
        consumable: 3.8,
        upgrade: 2.7
    },
    common: {
        normal: 5,
        special: 15,
        poison: 0.5775
    }
}

export const reward1 = [
    {
        name: ITEMQUALITY.common,
        chance: 70.38, //85%
    },
    {
        name: ITEMQUALITY.fine,
        chance: 15.29, //
    },
    {
        name: ITEMQUALITY.superior,
        chance: 8.03,
    },
    {
        name: ITEMQUALITY.epic,
        chance: 3.42,
    },
    {
        name: ITEMQUALITY.legendary,
        chance: 0,
    },
];

export const reward2 = [
    {
        name: ITEMQUALITY.superior,
        chance: 15, //85%
    },
    {
        name: ITEMQUALITY.epic,
        chance: 6.71, //
    },
    {
        name: ITEMQUALITY.legendary,
        chance: 0.11,
    },
    {
        name: ITEMQUALITY.apex,
        chance: 0,
    },
];

export const reward3 = [
    {
        name: ITEMQUALITY.common,
        chance: 30.19, //
    },
    {
        name: ITEMQUALITY.fine,
        chance: 0, //
    },
];

export const reward4 = [
    {
        name: ITEMQUALITY.common,
        chance: 10.07, //
    },
    {
        name: ITEMQUALITY.fine,
        chance: 0, //
    },
];

export const rewardBonus = [
    {
        name: ITEMQUALITY.epic,
        chance: 42.98, //
    },
    {
        name: ITEMQUALITY.legendary,
        chance: 11.97,
    },
    {
        name: ITEMQUALITY.apex,
        chance: 1.43,
    },
    {
        name: ITEMQUALITY.radiant,
        chance: 0,
    },
];

export const bonusChance = 17.14;