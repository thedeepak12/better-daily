async function loadProblems() {
  try {
    const url = (typeof chrome !== 'undefined' ? chrome : browser).runtime.getURL('data/problems.json');
    const response = await fetch(url);
    const data = await response.json();
    return data.problems;
  } catch (error) {
    console.error('Error loading problems:', error);
    return [];
  }
}

function displayProblem(problem) {
  if (!problem) {
    document.querySelector('.problem-title').textContent = 'No problem available';
    return;
  }

  const difficultyElement = document.querySelector('.difficulty');
  difficultyElement.textContent = problem.difficulty;
  difficultyElement.className = `difficulty ${problem.difficulty.toLowerCase()}`;

  document.querySelector('.problem-title').textContent = problem.title;

  document.querySelector('.category-tag').textContent = problem.category;

  const problemCard = document.querySelector('.problem-card');
  problemCard.href = getLeetCodeUrl(problem.slug);

  document.querySelector('.date').textContent = getTodaysDate();
}

async function init() {
  const allProblems = await loadProblems();

  if (allProblems.length === 0) {
    console.error('No problems loaded');
    return;
  }

  const todaysProblem = getTodaysProblem(allProblems);

  console.log('Days since Emma\'s birthday:', getDaysSinceEmmaWatsonBirthday());
  console.log('Today\'s problem:', todaysProblem);

  displayProblem(todaysProblem);
}

init();
