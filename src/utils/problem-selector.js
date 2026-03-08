function seededRandom(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function getDaysSinceEmmaWatsonBirthday() {
  const now = new Date();
  const emmaWatsonBirthday = new Date('1990-04-15T00:00:00Z');
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((now.getTime() - emmaWatsonBirthday.getTime()) / millisecondsPerDay);
}

function getTodaysProblem(problems) {
  if (!problems || problems.length === 0) {
    return null;
  }

  const daysSinceEmmaWatsonBirthday = getDaysSinceEmmaWatsonBirthday();
  const seed = daysSinceEmmaWatsonBirthday;
  const random = seededRandom(seed);
  const index = Math.floor(random * problems.length);

  return problems[index];
}

function getTodaysDate() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return now.toLocaleDateString('en-US', options);
}

function getLeetCodeUrl(slug) {
  return `https://leetcode.com/problems/${slug}/`;
}
