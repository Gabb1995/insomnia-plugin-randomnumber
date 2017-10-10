module.exports.templateTags = [{
    name: 'randomnumber',
    displayName: 'Random Number',
    description: 'Generate a random number',
    args: [
        {
            displayName: 'Min',
            description: 'Min',
            type: 'number',
            defaultValue: 1
        },
        {
            displayName: 'Max',
            description: 'Max',
            type: 'number',
            defaultValue: 10000
        }
    ],
    async run (context, min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min;
    }
}];
