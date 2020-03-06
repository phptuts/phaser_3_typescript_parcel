import Phaser from 'phaser';

export default class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  init() {}

  preload() {
    // load assets
    this.load.image('background', '/images/background.jpg');
  }

  create() {
    // create sprite
    let bg = this.add.sprite(0, 0, 'background');
    bg.setScale(0.2);
    bg.setPosition(
      (this.game.config.width as number) / 2,
      (this.game.config.height as number) / 2
    );
    //bg.setOrigin(0, 0);
  }

  update() {}
}
