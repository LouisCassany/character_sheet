export const proficiency = ["I", "Q", "E", "M", "L"] as const;
export type Proficiency = typeof proficiency[number];
export const ability = ["FOR", "DEX", "CON", "SAG", "INT", "CHA"] as const;
export type Ability = typeof ability[number];

type Character = {
    nom: string
    heritage: {
        nom: string
        pv_par_niveau: number
    }
    historique: string
    classe: {
        nom: string
        pv_initiaux: number
    }
    niveau: number
    langues: string[]
    taille: string
    alignement: string
    vitesse: number
    inventaire: string[]
    caracteristiques: {
        [key in Ability]: number
    }
    armure: {
        nom: string
        puissance_armure: number
        resillience_armure: number
        max_dex: number
        maitrise: Proficiency
        bonus_divers: number
    },
    jds: {
        [key: string]: {
            nom: string
            maitrise: Proficiency
            carac: Ability
            bonus_divers: number
        }
    },
    attaques: {
        nom: string,
        carac: "FOR" | "DEX" | "CON" | "SAG" | "INT" | "CHA",
        des: string,
        bonus_degats: number,
        bonus_attaque: number,
        maitrise: "I" | "Q" | "E" | "M" | "L",
        traits: string[]
    }[],
    competences: {
        [key: string]: {
            nom: string
            carac: Ability
            bonus_divers: number
            maitrise: Proficiency
        }
    }
}

export const character = ref<Character>({
    nom: "Flinch",
    heritage: {
        nom: "Humain",
        pv_par_niveau: 8,
    },
    historique: "Barbier",
    classe: {
        nom: "Moine",
        pv_initiaux: 10,
    },
    niveau: 10,
    langues: ["commun"],
    taille: "M",
    alignement: "CN",
    vitesse: 12,
    caracteristiques: {
        FOR: 16,
        DEX: 20,
        CON: 16,
        SAG: 10,
        INT: 10,
        CHA: 19
    },
    inventaire: ["Cape elfique", "Bottes elfiques", "Anneau de mensonge"],
    armure: {
        nom: "Vêtements d'explorateurs",
        puissance_armure: 1,
        resillience_armure: 1,
        max_dex: 5,
        maitrise: "E",
        bonus_divers: 0,
    },
    jds: {
        reflexe: {
            nom: "Réflexe",
            maitrise: "E",
            carac: "DEX",
            bonus_divers: 1,
        },
        vigueur: {
            nom: "Vigueur",
            maitrise: "E",
            carac: "CON",
            bonus_divers: 1,
        },
        volontee: {
            nom: "Volonté",
            maitrise: "M",
            carac: "SAG",
            bonus_divers: 1,
        }
    },
    attaques: [
        {
            nom: "Bandellettes de coup puissants +2",
            carac: "DEX",
            des: "2d8 + 2d6 + 5(6)",
            bonus_degats: 0,
            bonus_attaque: 2,
            maitrise: "E",
            traits: ["Agile", "Finesse", "Traître", "Magique", "Sonique", "poison", "Fer froid & argent"]
        },
    ],
    competences: {
        acrobatie: {
            nom: "Acrobaties",
            carac: "DEX",
            bonus_divers: 1,
            maitrise: "Q",
        },
        arcanes: {
            nom: "Arcanes",
            carac: "INT",
            bonus_divers: 0,
            maitrise: "I",
        },
        artisanat: {
            nom: "Artisanat",
            carac: "INT",
            bonus_divers: 0,
            maitrise: "I",
        },
        athletisme: {
            nom: "Athletisme",
            carac: "FOR",
            bonus_divers: 0,
            maitrise: "Q",
        },
        diplomatie: {
            nom: "Diplomatie",
            carac: "CHA",
            bonus_divers: 0,
            maitrise: "I",
        },
        discretion: {
            nom: "Discrétion",
            carac: "DEX",
            bonus_divers: 1,
            maitrise: "Q",
        },
        duperie: {
            nom: "Duperie",
            carac: "CHA",
            bonus_divers: 2,
            maitrise: "M",
        },
        intimidation: {
            nom: "Intimidation",
            carac: "CHA",
            bonus_divers: 0,
            maitrise: "Q",
        },
        conn_chirurgie: {
            nom: "Conn. chirurgie",
            carac: "INT",
            bonus_divers: 0,
            maitrise: "Q",
        },
        medecine: {
            nom: "Médecine",
            carac: "SAG",
            bonus_divers: 1,
            maitrise: "E",
        },
        nature: {
            nom: "Nature",
            carac: "SAG",
            bonus_divers: 0,
            maitrise: "I",
        },
        occultisme: {
            nom: "Occultisme",
            carac: "INT",
            bonus_divers: 0,
            maitrise: "I",
        },
        perception: {
            nom: "Perception",
            carac: "SAG",
            bonus_divers: 0,
            maitrise: "E",
        },
        religion: {
            nom: "Religion",
            carac: "SAG",
            bonus_divers: 0,
            maitrise: "Q",
        },
        representation: {
            nom: "Représentation",
            carac: "CHA",
            bonus_divers: 0,
            maitrise: "I",
        },
        societe: {
            nom: "Société",
            carac: "INT",
            bonus_divers: 0,
            maitrise: "I",
        },
        survie: {
            nom: "Survie",
            carac: "SAG",
            bonus_divers: 0,
            maitrise: "I",
        },
        vol: {
            nom: "Vol",
            carac: "DEX",
            bonus_divers: 0,
            maitrise: "E",
        },
    },
})

export function getAbilityModifier(ability: Ability) {
    return Math.floor((character.value.caracteristiques[ability] - 10) / 2)
}

export function getProficiencyBonus(prof: Proficiency) {
    switch (prof) {
        case "Q":
            return 2 + character.value.niveau
        case "E":
            return 4 + character.value.niveau
        case "M":
            return 6 + character.value.niveau
        case "L":
            return 8 + character.value.niveau
        default:
            return 0
    }
}