module.exports = {
    app: {
        px: '-',
        token: 'ODkyNzk0MDI1NzIyMTUwOTIy.YVSFOw.ZTKqtXaxHdmdGxi1cKBuSqvNmpk',
        playing: 'by Berlin ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
