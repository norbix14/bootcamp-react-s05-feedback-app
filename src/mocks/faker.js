const lorem =
  "lorem ipsum dolor sit amet consectetur adipisicing elit dolores eaque atque laudantium natus ducimus aliquid alias nesciunt quod voluptatem iure optio explicabo reiciendis eius doloremque culpa debitis itaque animi magni quidem tempore amet cum consequuntur qui adipisci quaerat suscipit veniam quod quis recusandae velit pariatur eum delectus quaerat harum ratione odio temporibus minima aliquid nisi facilis voluptate maiores excepturi odit sunt odio delectus quidem accusamus possimus ipsum soluta dolorum quo magnam nostrum aliquid voluptates";

const words = lorem.split(' ');

const randomNum = (n = lorem.length) => Math.round(Math.random() * n);

const randomVotes = (n = 100) => Math.round(Math.random() * 100 * n);

const randomComments = (n = 100) => Math.round(Math.random() * n);

const randomTag = (tags = ["Enhencements", "UX", "UI", "Bug", "Feature"]) => {
  return tags[randomNum(tags.length - 1)];
};

const randomText = (end = 20) => {
  let n = randomNum();
  return lorem.slice(n, n + end);
};

const randomUser = (n = 2) => {
  return Array.from(Array(n).keys()).map(() => {
    return words[randomNum(words.length - 1)];
  }).join(' ');
}

const randomNickname = (n = 2) => {
  const nicks = Array.from(Array(n).keys()).map(() => {
    return words[randomNum(words.length - 1)];
  }).join('');
  return `@${nicks}${randomNum(1000)}`;
}

export function feedbacks(n = 10) {
  return Array.from(Array(n).keys()).map(() => {
    return {
      id: randomNum(100),
      votes: randomVotes(),
      title: randomText(20),
      description: randomText(60),
      tag: randomTag(),
      comments: randomComments(),
    };
  });
}

export function comments(n = 5) {
  return Array.from(Array(n).keys()).map(() => {
    return {
      id: randomNum(100),
      user: randomUser(),
      nickname: randomNickname(),
      comment: randomText(30),
    };
  });
}
