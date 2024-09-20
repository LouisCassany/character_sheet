type attack = {
    name: string,
    ability: "FOR" | "DEX" | "CON" | "SAG" | "INT" | "CHA",
    dices: string,
    damageBonus: number,
    attackBonus: number,
    proficiency: "I" | "Q" | "E" | "M" | "L",
    traits: string[]
}

export const character = {
    name: "Flinch",
    ancestry: "Humain",
    background: "Barbier",
    class: "Moine",
    level: 9,
    health: 116,
    languages: "commun.",
    size: "M",
    alignement: "CN",
    abilities: {
        FOR: 14,
        DEX: 19,
        CON: 14,
        SAG: 10,
        INT: 10,
        CHA: 18
    } as {
        [key: string]: number
    },
    abilitiesModifiers: {
        FOR: 2,
        DEX: 4,
        CON: 2,
        SAG: 0,
        INT: 0,
        CHA: 4
    } as {
        [key: string]: number
    },
    CA: {
        armor: "Vêtements d'aventurier +1",
        CABonus: 0,
        maxDex: 4,
        proficiency: "E",
        bonus: 1,
    },
    speed: 12,
    saves: {
        reflex: {
            name: "Réflexe",
            proficiency: "E",
            ability: "DEX",
            bonus: 1,
        },
        fortitude: {
            name: "Vigueur",
            proficiency: "E",
            ability: "CON",
            bonus: 1,
        },
        will: {
            name: "Volonté",
            proficiency: "M",
            ability: "SAG",
            bonus: 1,
        }
    },
    attacks: [
        {
            name: "Bandelletes de coup puissants +1",
            ability: "DEX",
            dices: "2d8 + 1d6 + 4",
            damageBonus: 0,
            attackBonus: 1,
            proficiency: "E",
            traits: ["Agile", "Finesse", "Traître", "Magique", "Sonique", "Fer froid/argent"]
        },
    ] as attack[],
    skills: {
        acrobatie: {
            name: "Acrobaties",
            ability: "DEX",
            bonus: 1,
            proficiency: "Q",
        },
        arcanes: {
            name: "Arcanes",
            ability: "INT",
            bonus: 0,
            proficiency: "I",
        },
        artisanat: {
            name: "Artisanat",
            ability: "INT",
            bonus: 0,
            proficiency: "I",
        },
        athletisme: {
            name: "Athletisme",
            ability: "FOR",
            bonus: 0,
            proficiency: "Q",
        },
        diplomatie: {
            name: "Diplomatie",
            ability: "CHA",
            bonus: 0,
            proficiency: "I",
        },
        discretion: {
            name: "Discrétion",
            ability: "DEX",
            bonus: 1,
            proficiency: "Q",
        },
        duperie: {
            name: "Duperie",
            ability: "CHA",
            bonus: 2,
            proficiency: "M",
        },
        intimidation: {
            name: "Intimidation",
            ability: "CHA",
            bonus: 0,
            proficiency: "Q",
        },
        conn_chirurgie: {
            name: "Conn. chirurgie",
            ability: "INT",
            bonus: 0,
            proficiency: "Q",
        },
        medecine: {
            name: "Médecine",
            ability: "SAG",
            bonus: 1,
            proficiency: "E",
        },
        nature: {
            name: "Nature",
            ability: "SAG",
            bonus: 0,
            proficiency: "I",
        },
        occultisme: {
            name: "Occultisme",
            ability: "INT",
            bonus: 0,
            proficiency: "I",
        },
        perception: {
            name: "Perception",
            ability: "SAG",
            bonus: 0,
            proficiency: "E",
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
            proficiency: "I",
        },
        societe: {
            name: "Société",
            ability: "INT",
            bonus: 0,
            proficiency: "I",
        },
        survie: {
            name: "Survie",
            ability: "SAG",
            bonus: 0,
            proficiency: "I",
        },
        vol: {
            name: "Vol",
            ability: "DEX",
            bonus: 0,
            proficiency: "E",
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