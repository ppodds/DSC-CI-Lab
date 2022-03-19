const Player = require("./player");
const Monster = require("./monster");

jest.mock("./monster");

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Monster.mockClear();
});

test("player attack monster should call damage method of monster", () => {
    const player = new Player("TestPlayer", 100); // Arrange
    const monster = new Monster("TestMonster", 100);
    const mockMonsterInstance = Monster.mock.instances[0];
    player.attack(monster, 10); // Act
    expect(mockMonsterInstance.damage).toHaveBeenCalledTimes(1); // Assert
    expect(mockMonsterInstance.damage.mock.calls[0][0]).toBe(10);
});
