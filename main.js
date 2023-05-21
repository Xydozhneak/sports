sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
  ];
winterSports = sports.slice(0, 5);
summerSports = sports.slice(5);
fruits = winterSports.splice(2, 1).concat(summerSports.splice(2,2));
console.log(winterSports, summerSports, fruits);