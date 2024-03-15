// Pixi.js Config
const app = new PIXI.Application({
    antialias: true,
    autoDensity: true,
    backgroundColor: 0x000000,
    resolution: devicePixelRatio,
    height: Math.max(1, window.innerHeight),
    width: Math.max(1, window.innerWidth)
});

// Add GFX
PIXI.Assets.load('Assets/gfx/up.png');
PIXI.Assets.load('Assets/gfx/down.png');
PIXI.Assets.load('Assets/gfx/left.png');
PIXI.Assets.load('Assets/gfx/right.png');

// Add SFX
PIXI.sound.add('Correct1', 'Assets/sfx/SH_Correct1.ogg');
PIXI.sound.add('Correct2', 'Assets/sfx/SH_Correct2.ogg');
PIXI.sound.add('Correct3', 'Assets/sfx/SH_Correct3.ogg');
PIXI.sound.add('Input1', 'Assets/sfx/SH_Input1.ogg');
PIXI.sound.add('Input2', 'Assets/sfx/SH_Input2.ogg');
PIXI.sound.add('Input3', 'Assets/sfx/SH_Input3.ogg');
PIXI.sound.add('Input4', 'Assets/sfx/SH_Input4.ogg');
PIXI.sound.add('Failed', 'Assets/sfx/SH_FailedShort.ogg');
PIXI.sound.add('Startup', 'Assets/sfx/SH_Startup.ogg');

// Play music loop & startup sound
PIXI.sound.Sound.from({
    url: 'Assets/sfx/SH_BackgroundLoop.ogg',
    preload: true,
    loop: true,
    loaded: function(err, sound) {
        sound.play({
            volume: 1
        });
        PIXI.sound.play('Startup');
    }
});

// Values for game logic
let sequenceIndexCounter = 0;
let incorrectInput = false;
let sequence;
let sequenceName;

const keyToDirectionMap = new Map([
    ['w', 'up'],
    ['s', 'down'],
    ['d', 'right'],
    ['a', 'left'],
    ['arrowup', 'up'],
    ['arrowdown', 'down'],
    ['arrowright', 'right'],
    ['arrowleft', 'left']
  ]);

function resetTints() {
    app.stage.children.forEach((sprite) => {
        if (sprite.tint !== 0xffffff) {
            sprite.tint = 0xffffff;
        }
    });
}


 // Stratagem name text style
const style = new PIXI.TextStyle({
    fill: "white",
    fontSize: 48,
    fontWeight: 'bold',
    align: 'center'
});

// Define Stratage text
const stratagem = new PIXI.Text('Placeholder', style);
stratagem.anchor.set(0.5);
stratagem.x = app.screen.width / 2;
stratagem.y = app.screen.height / 2.5;

// The 2 white lines
const graphics = new PIXI.Graphics();
graphics.lineStyle(15, 0xFFFFFF, 1);

// Top line
graphics.moveTo(0, app.screen.height / 6);
graphics.lineTo(app.screen.width, app.screen.height / 6);

// Bottom line
graphics.moveTo(0, app.screen.height / 1.2);
graphics.lineTo(app.screen.width, app.screen.height / 1.2);


function renderSequence(sequence) {
    // x & y setup for arrow placement
    let x = app.screen.width / 2 - (sequence.length - 1) * 35;
    let y = app.screen.height / 2;
    // Clear screen
    app.stage.removeChildren();

    // Update Stratagem text
    stratagem.text = sequenceName;

    // Create arrows
    sequence.forEach((direction) => {
        let sprite;
        switch (direction) {
            case 'up':
                sprite = PIXI.Sprite.from('Assets/gfx/up.png');
                break;
            case 'down':
                sprite = PIXI.Sprite.from('Assets/gfx/down.png');
                break;
            case 'right':
                sprite = PIXI.Sprite.from('Assets/gfx/right.png');
                break;
            case 'left':
                sprite = PIXI.Sprite.from('Assets/gfx/left.png');
                break;
        }

        // Apply location & anchor to sprites
        if (sprite) {
            sprite.anchor.set(0.5);
            sprite.x = x;
            sprite.y = y;
            app.stage.addChild(sprite);
            x += 70; // Margin to move arrows over
        }
    });

    app.stage.addChild(stratagem); // Add text to stage
    app.stage.addChild(graphics);
}

// Function to pick a random sequence from the sequence array
function nextSequence() {
    const sequenceIndex = Math.floor(Math.random() * possibleSequences.length);
    const selectedSequence = possibleSequences[sequenceIndex];
    sequence = selectedSequence.sequence;
    sequenceName = selectedSequence.name;
    renderSequence(sequence);
}

nextSequence(); // Initial sequence

function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    const direction = keyToDirectionMap.get(key);
if (direction) {
    PIXI.sound.play('Input1');
if (incorrectInput) {
    resetTints();
    incorrectInput = false;
}

if (direction === sequence[sequenceIndexCounter]) {
    const currentSprite = app.stage.children[sequenceIndexCounter];
    currentSprite.tint = 0x00ff00;
    sequenceIndexCounter++;
    if (sequenceIndexCounter === sequence.length) {
        sequenceIndexCounter = 0;
        nextSequence(); // Call next sequence
        PIXI.sound.play('Correct1');
    }
} else {
    for (let i = 0; i < sequenceIndexCounter; i++) {
        const previousCorrectSprite = app.stage.children[i];
        previousCorrectSprite.tint = 0xff0000;
        PIXI.sound.play('Failed');
    }
    sequenceIndexCounter = 0;
    incorrectInput = true;
};
};
};

document.addEventListener('keydown', handleKeyPress);