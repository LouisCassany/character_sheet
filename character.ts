export const proficiency = ["I", "Q", "E", "M", "L"] as const;
export type Proficiency = typeof proficiency[number];
export const ability = ["FOR", "DEX", "CON", "SAG", "INT", "CHA"] as const;
export type Ability = typeof ability[number];

type Character = {
    name: string
    ancestry: string
    background: string
    class: string
    level: number
    health: number
    languages: string
    size: string
    alignement: string
    speed: number
    inventory: string[]
    abilities: {
        [key in Ability]: number
    }
    CA: {
        armor: string
        CABonus: number
        maxDex: number
        proficiency: Proficiency
        bonus: number
    },
    saves: {
        [key: string]: {
            name: string
            proficiency: Proficiency
            ability: Ability
            bonus: number
        }
    },
    attacks: {
        name: string,
        ability: "FOR" | "DEX" | "CON" | "SAG" | "INT" | "CHA",
        dices: string,
        damageBonus: number,
        attackBonus: number,
        proficiency: "I" | "Q" | "E" | "M" | "L",
        traits: string[]
    }[],
    skills: {
        [key: string]: {
            name: string
            ability: Ability
            bonus: number
            proficiency: Proficiency
        }
    }
}

export const character = ref<Character>({
    name: "Flinch",
    ancestry: "Humain",
    background: "Barbier",
    class: "Moine",
    level: 10,
    health: 126,
    languages: "commun.",
    size: "M",
    alignement: "CN",
    speed: 12,
    abilities: {
        FOR: 16,
        DEX: 20,
        CON: 16,
        SAG: 10,
        INT: 10,
        CHA: 19
    },
    inventory: ["Cape elfique", "Bottes elfiques", "Anneau de mensonge"],
    CA: {
        armor: "Vêtements d'aventurier +1",
        CABonus: 0,
        maxDex: 4,
        proficiency: "E",
        bonus: 1,
    },
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
            name: "Bandellettes de coup puissants +1",
            ability: "DEX",
            dices: "2d8 + 2d6 + 4",
            damageBonus: 0,
            attackBonus: 1,
            proficiency: "E",
            traits: ["Agile", "Finesse", "Traître", "Magique", "Sonique", "poison", "Fer froid & argent"]
        },
    ],
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
})

export function getAbilityModifier(ability: Ability) {
    return Math.floor((character.value.abilities[ability] - 10) / 2)
}

export function getProficiencyBonus(prof: Proficiency) {
    switch (prof) {
        case "Q":
            return 2 + character.value.level
        case "E":
            return 4 + character.value.level
        case "M":
            return 6 + character.value.level
        case "L":
            return 8 + character.value.level
        default:
            return 0
    }
}