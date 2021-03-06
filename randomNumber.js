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
        },
        {
            help: 'Adds leading 0s according to length of number, leave 0 if you do not care.',
            displayName: 'Length',
            description: 'Length',
            type: 'number',
            defaultValue: 0
        },
        {
            help: 'Adds decimal point to random number, leave 0 if you do not want any decimal point.',
            displayName: 'Decimal Point',
            description: 'Decimal Point',
            type: 'number',
            defaultValue: 0
        }
    ],
    async run (context, min = 1, max = 10000, length = 0, decimal = 0) {
        if (max.toString().length > length && length !== 0) {
            throw new Error("Length has to be bigger than the max number's length");
        }

        if (min > max) {
            throw new Error("Max has to be bigger than min");
        }

        min = Math.ceil(min * Math.pow(10, decimal));
        max = Math.floor(max * Math.pow(10, decimal));

        randomNumber = (Math.round(Math.random() * (max - min)) + min).toString();

        if (decimal > 0) {
            randomNumber = randomNumber.slice(0, (decimal * -1)) + '.' + randomNumber.slice(decimal * -1);
            while(randomNumber.slice(0, ((decimal + 1) * -1)).length < length) {
                randomNumber = "0" + randomNumber;
            }
        } else {
            while (randomNumber.length < length) {
                randomNumber = "0" + randomNumber;
            }
        }


        return randomNumber;
    }
}];
