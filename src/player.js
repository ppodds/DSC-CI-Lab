module.exports = class Player {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  attack(monster, damage) {
    monster.damage(damage);
  }
};
