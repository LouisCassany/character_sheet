type attack = {
    name: string,
    ability: "FOR" | "DEX" | "CON" | "SAG" | "INT" | "CHA",
    dices: string,
    damageBonus: number,
    attackBonus: number,
    proficiency: "Q" | "E" | "M" | "L",
    traits: string[]
}

export const character = {
    name: "Louis",
    ancestry: "Humain",
    class: "Moine",
    level: 9,
    health: 110,
    languages: "commun.",
    abilities: {
        FOR: 10,
        DEX: 10,
        CON: 10,
        SAG: 10,
        INT: 10,
        CHA: 10
    } as {
        [key: string]: number
    },
    abilitiesModifiers: {
        FOR: 0,
        DEX: 2,
        CON: 0,
        SAG: 0,
        INT: 0,
        CHA: 0
    } as {
        [key: string]: number
    },
    CA: {
        armor: "Robe de moine",
        CABonus: 0,
        maxDex: 4,
        proficiency: "Q",
        bonus: 0,
    },
    speed: 9,
    saves: {
        reflex: {
            name: "Réflexe",
            proficiency: "Q",
            ability: "DEX",
            bonus: 0,
        },
        fortitude: {
            name: "Vigueur",
            proficiency: "Q",
            ability: "DEX",
            bonus: 0,
        },
        will: {
            name: "Volonté",
            proficiency: "Q",
            ability: "DEX",
            bonus: 0,
        }
    },
    attacks: [
        {
            name: "Bandelletes de coup puissants +1",
            ability: "FOR",
            dices: "1d6",
            damageBonus: 0,
            attackBonus: 0,
            proficiency: "Q",
            traits: ["Main nues", "Argent", "Magique"]
        },
    ] as attack[],
    skills: {
        acrobatie: {
            name: "Acrobaties",
            ability: "DEX",
            bonus: 0,
            proficiency: "Q",
        },
        arcanes: {
            name: "Arcanes",
            ability: "INT",
            bonus: 0,
            proficiency: "Q",
        },
        artisanat: {
            name: "Artisanat",
            ability: "INT",
            bonus: 0,
            proficiency: "Q",
        },
        athletisme: {
            name: "Athletisme",
            ability: "FOR",
            bonus: 0,
            proficiency: "Q",
        },
        conn_minieres: {
            name: "Conn. minières",
            ability: "INT",
            bonus: 0,
            proficiency: "Q",
        },
        diplomatie: {
            name: "Diplomatie",
            ability: "CHA",
            bonus: 0,
            proficiency: "Q",
        },
        discretion: {
            name: "Discrétion",
            ability: "DEX",
            bonus: 0,
            proficiency: "Q",
        },
        duperie: {
            name: "Duperie",
            ability: "CHA",
            bonus: 0,
            proficiency: "Q",
        },
        intimidation: {
            name: "Intimidation",
            ability: "CHA",
            bonus: 0,
            proficiency: "Q",
        },
        medecine: {
            name: "Médecine",
            ability: "SAG",
            bonus: 0,
            proficiency: "Q",
        },
        nature: {
            name: "Nature",
            ability: "SAG",
            bonus: 0,
            proficiency: "Q",
        },
        occultisme: {
            name: "Occultisme",
            ability: "INT",
            bonus: 0,
            proficiency: "Q",
        },
        perception: {
            name: "Perception",
            ability: "SAG",
            bonus: 0,
            proficiency: "Q",
        },
        religion: {
            name: "Religion",
            ability: "SAG",
            bonus: 0,
            proficiency: "Q",
        },
        representation: {
            name: "Représentation",
            ability: "CHA",
            bonus: 0,
            proficiency: "Q",
        },
        societe: {
            name: "Société",
            ability: "INT",
            bonus: 0,
            proficiency: "Q",
        },
        survie: {
            name: "Survie",
            ability: "SAG",
            bonus: 0,
            proficiency: "Q",
        },
        vol: {
            name: "Vol",
            ability: "DEX",
            bonus: 0,
            proficiency: "Q",
        },
    },
}

export function getProficiencyBonus(prof: string) {
    switch (prof) {
        case "Q":
            return 2 + character.level
        case "E":
            return 4 + character.level
        case "M":
            return 6 + character.level
        case "L":
            return 8 + character.level
        default:
            return 0
    }
}