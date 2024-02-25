// Define your array
const possibleSequences = [
    // Patriotic Administration Centre
    { name: 'Machine Gun', sequence: ['down', 'left', 'down', 'up', 'right'] },
    { name: 'Anti-Material Rifle', sequence: ['down', 'left', 'right', 'up', 'down'] },
    { name: 'Stalwart', sequence: ['down', 'left', 'down', 'up', 'up', 'left'] },
    { name: 'Expendable Anti-Tank', sequence: ['down', 'down', 'left', 'up', 'right'] },
    { name: 'Recoilless Rifle', sequence: ['down', 'left', 'right', 'right', 'left'] },
    { name: 'Flamethrower', sequence: ['down', 'left', 'up', 'down', 'up'] },
    { name: 'Autocannon', sequence: ['down', 'right', 'left', 'down', 'down', 'up', 'up', 'right'] },
    { name: 'Railgun', sequence: ['down', 'right', 'left', 'down', 'down', 'up', 'left', 'down', 'right'] },
    { name: 'Spear', sequence: ['down', 'down', 'up', 'up', 'down', 'down'] },

    // Orbital Cannons
    { name: 'Orbital Gatling Barrage', sequence: ['right', 'down', 'left', 'up', 'up'] },
    { name: 'Orbital Airburst Strike', sequence: ['right', 'right', 'right'] },
    { name: 'Orbital 120MM HE Barrage', sequence: ['right', 'down', 'down', 'left', 'down', 'right', 'down', 'down'] },
    { name: 'Orbital 380MM HE Barrage', sequence: ['right', 'down', 'down', 'up', 'up', 'left', 'down', 'down', 'down'] },
    { name: 'Orbital Walking Barrage', sequence: ['right', 'down', 'right', 'down', 'right', 'down'] },
    { name: 'Orbital Laser Strike', sequence: ['right', 'up', 'left', 'up', 'right', 'left'] },
    { name: 'Orbital Railcannon Strike', sequence: ['right', 'down', 'up', 'down', 'left'] },

    // Hangar
    { name: 'Eagle Strafing Run', sequence: ['up', 'right', 'right'] },
    { name: 'Eagle Airstrike', sequence: ['up', 'right', 'down', 'right'] },
    { name: 'Eagle Cluster Bomb', sequence: ['up', 'right', 'down', 'down', 'right', 'down'] },
    { name: 'Eagle Napalm Airstrike', sequence: ['up', 'right', 'down', 'up'] },
    { name: 'Jump Pack', sequence: ['down', 'up', 'up', 'down', 'up'] },
    { name: 'Eagle Smoke Strike', sequence: ['up', 'right', 'up', 'down'] },
    { name: 'Eagle 110MM Rocket Pods', sequence: ['up', 'right', 'up', 'left'] },
    { name: 'Eagle 500KG Bomb', sequence: ['up', 'right', 'down', 'down', 'down'] },

    // Bridge
    { name: 'Orbital Precision Strike', sequence: ['right', 'right', 'up'] },
    { name: 'Orbital Gas Strike', sequence: ['right', 'right', 'down', 'right'] },
    { name: 'Orbital EMS Strike', sequence: ['right', 'right', 'left', 'down'] },
    { name: 'Orbital Smoke Strike', sequence: ['right', 'right', 'down', 'up'] },
    { name: 'HMG Emplacement', sequence: ['up', 'down', 'left', 'right', 'right', 'left'] },
    { name: 'Shield Generator Relay', sequence: ['down', 'up', 'left', 'right', 'left', 'down'] },
    { name: 'Tesla Tower', sequence: ['down', 'up', 'right', 'up', 'left', 'right'] },

    // Engineering Bay
    { name: 'Anti-Personnel Minefield', sequence: ['down', 'left', 'down', 'up', 'right'] },
    { name: 'Supply Pack', sequence: ['down', 'left', 'down', 'up', 'up', 'down'] },
    { name: 'Grenade Launcher', sequence: ['down', 'left', 'down', 'up', 'left', 'down', 'down'] },
    { name: 'Laser Cannon', sequence: ['down', 'left', 'down', 'up', 'left'] },
    { name: 'Incendiary Mines', sequence: ['down', 'left', 'left', 'down'] },
    { name: '“Guard Dog” Rover', sequence: ['down', 'left', 'left', 'up', 'left', 'down', 'down'] },
    { name: 'Ballistic Shield Backpack', sequence: ['down', 'left', 'up', 'up', 'right'] },
    { name: 'Arc Thrower', sequence: ['down', 'right', 'up', 'left', 'down'] },
    { name: 'Shield Generator Pack', sequence: ['down', 'up', 'left', 'down', 'right', 'right'] },

    // Robotics Workshop
    { name: 'Machine Gun Sentry', sequence: ['down', 'up', 'right', 'right', 'up'] },
    { name: 'Gatling Sentry', sequence: ['down', 'up', 'right', 'left', 'down'] },
    { name: 'Mortar Sentry', sequence: ['down', 'up', 'right', 'right', 'down'] },
    { name: '“Guard Dog”', sequence: ['down', 'up', 'left', 'up', 'right', 'down'] },
    { name: 'Autocannon Sentry', sequence: ['down', 'up', 'right', 'up', 'left', 'up'] },
    { name: 'Rocket Sentry', sequence: ['down', 'up', 'right', 'right', 'left'] },
    { name: 'EMS Mortar Sentry', sequence: ['down', 'down', 'up', 'up', 'left'] },

    // Mission critical
    { name: 'Reinforce', sequence: ['up', 'down', 'right', 'left', 'up'] },
    { name: 'SOS Beacon', sequence: ['up', 'down', 'right', 'up'] },
    { name: 'Super Earth Flag', sequence: ['down', 'up', 'down', 'up'] },
    { name: 'Upload Data', sequence: ['left', 'right', 'up', 'up', 'up'] },
    { name: 'Hellbomb', sequence: ['down', 'up', 'left', 'down', 'up', 'right', 'down', 'up'] },

    // Stratagem Hero Special
    { name: 'Orbital Illumination Flare', sequence: ['right', 'right', 'left', 'left'] }
];
