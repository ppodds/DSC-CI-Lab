module.exports = class Monster {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
    damage(damage) {
        this.health -= damage;
    }
};
