const getRandomBubbleTeaType = require('./bubble_tea_roulette_service');

test.each([
  [0, 'OOLONGMILKTEA'],
  [0.2, 'JASMINEMILKTEA'],
  [0.4, 'MATCHAMILKTEA'],
  [0.6, 'PEACHICETEA'],
  [0.8, 'LYCHEEICETEA'],
])('should generate random bubble tea', (a, expected) => {
  // Arrange
  // Stub to calls to Math.random to return 0.2
  jest.spyOn(global.Math, 'random').mockReturnValue(a);

  // Act
  const bubbleTea = getRandomBubbleTeaType();

  // Assert
  expect(bubbleTea).toBe(expected);

  // Restore the default Math.random
  jest.spyOn(global.Math, 'random').mockRestore();
});
