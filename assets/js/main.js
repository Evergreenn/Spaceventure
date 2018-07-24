const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


const game = new Phaser.Game(config);

function preload ()
{
    this.load.image('spaceship', '../imgs/triangle.png');
    this.load.image('spaceBackground', '../imgs/space.png');
}

function create ()
{
    this.add.image(400, 300, 'spaceBackground');
}



function update ()
{
}