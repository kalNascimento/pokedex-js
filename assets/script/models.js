export class Pokemon {
    constructor(pId, pName, pColor, pHabitat, pStats, pImage) {
        this.id = pId;
        this.name = pName;
        this.color = pColor;
        this.habitat = pHabitat;
        this.stats = pStats;
        this.image = pImage;
    }

    set setId(pId) {
        this.id = pId;
    }

    set setName(pName) {
        this.name = pName;
    }

    set setColor(pColor) {
        this.color = pColor;
    }

    set setHabitat(habitat) {
        this.habitat = habitat;
    }

    set setStats(pStats) {
        this.stats = pStats;
    }

    set setImage(pImage) {
        this.image = pImage;
    }

    get getId() {
        return this.id
    }

    get getName() {
        return this.name;
    }

    get getColor() {
        return this.color
    }

    get getHabitat() {
        return this.habitat;
    }

    get getStats() {
        return this.stats;
    }

    get getImage() {
        return this.image
    }
}

export class Stats {
    constructor(pHp, pAttack, pDefense, pSpecial_attack, pSpecial_defense, pSpeed) {
        this.hp = pHp;
        this.attack = pAttack;
        this.defense = pDefense;
        this.special_attack = pSpecial_attack;
        this.special_defense = pSpecial_defense;
        this.speed = pSpeed;
    }

    set setHp(pHp) {
        this.hp = pHp;
    }

    set setAttack(pAttack) {
        this.attack = pAttack;
    }

    set setDefense(pDefense) {
        this.defense = pDefense;
    }

    set setSpecialAttack(pSpecial_attack) {
        this.habitat = habitat;
    }

    set setSpecialDefense(pSpecial_defense) {
        this.stats = pStats;
    }

    set setSpeed(pSpeed) {
        this.hp = pHp;
    }

    get getHp() {
        return this.id
    }

    get getAttack() {
        return this.name;
    }

    get getDefense() {
        return this.color
    }

    get getSpecialAttack() {
        return this.habitat;
    }

    get getSpecialDefense() {
        return this.stats;
    }

    get getSpeed() {
        return this.speed;
    }
}