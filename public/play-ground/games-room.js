class Game2048 {
  render() {
    return $(`
      <div class="game2048">This is Game2048</div>
    `);
  }
}
  
class Tetris {
  constructor() {
    this.score = 0;
    this.$el = this.render();
    this.$score = this.$el.find(".score");
    this.incClicked = this.incClicked.bind(this);
    this.decClicked = this.decClicked.bind(this);
  }
  
  updateView() {
    this.$score.text(this.score);
  }
  
  incClicked() {
    this.score += 1;
    this.updateView();
  }
  
  decClicked() {
    this.score -= 1;
    this.updateView();
  }
  
  render() {
    return $(`
      <div class="tetris" style="display: flex; flex-direction: column;">
        <header style="font-weight: bold; font-size: 14px;">This is Tetris</header>
        <article style="display: flex; flex-direction: column; justify-content: stretch;">
          <div class="score" style="">score</div>
          <button class="inc" style="flex-grow: 1;">Inc</button>
          <button class="dec" style="flex-grow: 1;">Dec</button>
        </article>
      </div>
    `);
  }
}
  
let gamesCenterVisible = false;
let currentGameName = undefined;
  
const games = {
  tetris: {
    "$el": new Tetris().render()
  },
  game2048: {
    "$el": new Game2048().render()
  }
};
  
const loadGames = () => {
  let $gamesCenter = $(".games-center > .section");

  Object.keys(games).forEach((name) => {
    let $gameWrapper = $("<div></div>").addClass("game");
    $gameWrapper.append(games[name].$el);
    $gamesCenter.append($gameWrapper);
  });
};
  
const showGamesCenter = () => $(".games-center").addClass("visible");
  
const hideGamesCenter = () => $(".games-center").removeClass("visible");
  
const showGame = (name) => {
  if (name === undefined)
    return;

  $(`.${name}`).parent().addClass("visible");
  currentGameName = name;
};
  
const hideGame = (name) => {
  if (name === undefined)
    return;

  $(`.${name}`).parent().removeClass("visible");;
  currentGameName = undefined;
};
  
const playGame = (name) => {
  if (games[name] === undefined)
    return;
  
  hideGame(currentGameName);
  showGame(name);
  showGamesCenter();
};
  
const quitGame = (name) => {
  if (games[name] === undefined)
    return;
  
  hideGame(currentGameName);
  hideGamesCenter();
}
  
const hashChanged = () => {
  let hashValue = window.location.hash;
 
  if (hashValue.startsWith("#play-")) {
    playGame(hashValue.substring(6));
  }
  else if (hashValue.startsWith("#quit-")) {
    quitGame(hashValue.substring(6));
  }
};
