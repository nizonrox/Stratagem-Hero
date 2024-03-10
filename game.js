// Pixi.js Config
const app = new PIXI.Application({
    antialias: true,
    autoDensity: true,
    backgroundColor: 0x000000,
    resolution: devicePixelRatio,
    height: Math.max(1, window.innerHeight),
    width: Math.max(1, window.innerWidth),
});

PIXI.Assets.load('Assets/gfx/up.png');
PIXI.Assets.load('Assets/gfx/down.png');
PIXI.Assets.load('Assets/gfx/left.png');
PIXI.Assets.load('Assets/gfx/right.png');


PIXI.sound.add('Correct1', 'Assets/sfx/SH_Correct1.ogg');
PIXI.sound.add('Correct2', 'Assets/sfx/SH_Correct2.ogg');
PIXI.sound.add('Correct3', 'Assets/sfx/SH_Correct3.ogg');
PIXI.sound.add('Input1', 'Assets/sfx/SH_Input1.ogg');
PIXI.sound.add('Input2', 'Assets/sfx/SH_Input2.ogg');
PIXI.sound.add('Input3', 'Assets/sfx/SH_Input3.ogg');
PIXI.sound.add('Input4', 'Assets/sfx/SH_Input4.ogg');
PIXI.sound.add('Failed', 'Assets/sfx/SH_FailedShort.ogg');
PIXI.sound.add('Startup', 'Assets/sfx/SH_Startup.ogg');

PIXI.sound.Sound.from({
    url: 'Assets/sfx/SH_BackgroundLoop.ogg',
    preload: true,
    loop: true,
    loaded: function(err, sound) {
        sound.play({
            volume: 1,
        });
        PIXI.sound.play('Startup');
    }
});


// Values for game logic
let sequenceIndexCounter = 0;
let incorrectInput = false;
let sequence, sequenceName;

function resetTints() {
    app.stage.children.forEach(sprite => {
        if (sprite.tint !== 0xffffff) {
            sprite.tint = 0xffffff;
        }
    });
}



function renderSequence(sequence) {
     // x & y setup for arrow placement
    let x = app.screen.width / 2 - (sequence.length - 1) * 35;
    let y = app.screen.height / 2;
    

    app.stage.removeChildren(); // Clear previous sequence

    sequence.forEach(direction => {
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
            default:
                // Nothing
        };

        if (sprite) {
            sprite.anchor.set(0.5); // Set sprite to anchor center
            sprite.x = x;
            sprite.y = y;
            app.stage.addChild(sprite); // Add sprite to stage
            x += 70; // Margin to move arrows over
        };
    });

    // Stratagem name text
    const style = new PIXI.TextStyle({
        fill: "white",
        fontSize: 48,
        fontWeight: 'bold',
        align: 'center'
    });
    
    // Stratagem text info
    const text = new PIXI.Text(sequenceName, style);
    text.anchor.set(0.5);
    text.x = app.screen.width / 2;
    text.y = app.screen.height / 2.5;
    app.stage.addChild(text); // Add text to stage
};

// Function to make a random number in the range of how many entries there are to the stratagem array
function nextSequence() {
    const sequenceIndex = Math.floor(Math.random() * possibleSequences.length);
    const selectedSequence = possibleSequences[sequenceIndex];
    sequence = selectedSequence.sequence;
    sequenceName = selectedSequence.name;
    renderSequence(sequence);
};

nextSequence(); // Initial sequence

function handleKeyPress(event) {
const key = event.key.toLowerCase();
const direction = {
'w': 'up',
's': 'down',
'd': 'right',
'a': 'left',
'arrowup': 'up',
'arrowdown': 'down',
'arrowright': 'right',
'arrowleft': 'left'
}[key];

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
