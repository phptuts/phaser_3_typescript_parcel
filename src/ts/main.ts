import Phaser from 'phaser';
import sceneMain from './sceneMain';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  scene: [sceneMain]
};

const game = new Phaser.Game(config);
