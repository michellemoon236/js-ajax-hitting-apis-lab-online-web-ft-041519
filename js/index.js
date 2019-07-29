function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
<<<<<<< HEAD
  let userName = document.getElementById('username').value
  req.open('GET', `https://api.github.com/users/${userName}/repos`);
=======
  req.open('GET', `https://api.github.com/users/${username}/repos`);
>>>>>>> 18ef556e64933d782d1c6bd08648acd1f65b7535
  req.send();
}

function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
<<<<<<< HEAD
    .map( 
=======
    .map(
>>>>>>> 18ef556e64933d782d1c6bd08648acd1f65b7535
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
<<<<<<< HEAD
        '" onclick="getCommits(this)">Get Commits</a></li>' +
        r.name +
        '" onclick="getBranches(this)">Get Branches</a></li>'
=======
        '" onclick="getCommits(this)">Get Commits</a></li>'
>>>>>>> 18ef556e64933d782d1c6bd08648acd1f65b7535
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
<<<<<<< HEAD
  let userName = document.getElementById('username').value
  req.open('GET', `https://api.github.com/repos/${userName}/` + name + '/commits');
=======
  req.open('GET', 'https://api.github.com/repos/octocat/' + name + '/commits');
>>>>>>> 18ef556e64933d782d1c6bd08648acd1f65b7535
  req.send();
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.login +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}
