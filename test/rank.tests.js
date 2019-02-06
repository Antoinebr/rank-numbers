const assert = require('assert');

const {
    createRanking,
    getRank
} = require('../index');

describe('Test the createRanking function', () => {

    it('should order an array and return an object ', function () {

        return assert.deepEqual(createRanking([1, 9, 10, 9, 7, 1, 1]), {
            "1": 4,
            "7": 3,
            "9": 2,
            "10": 1
        });

    });

    it('should work with negative values in the array ', function () {

        return assert.deepEqual(createRanking([-1, -0.34, -1.2, 3, 9, 8, -3]), {
            "9": 1,
            "8": 2,
            "3": 3,
            "-0.34": 4,
            "-1": 5,
            "-1.2": 6,
            "-3": 7
        });

    });


    it('should work with float values', function () {

        return assert.deepEqual(createRanking([0.1, 0.9, 1, 0.9, 0.7, 1, 1]), {
            "1": 1,
            "0.9": 2,
            "0.7": 3,
            "0.1": 4
        });

    });


    it('should work with large float values', function () {


        return assert.deepEqual(createRanking(['1.55', '0.5', '0.45999999999999996', '0.8099999999999999', '1.089999', '0.65', '1.16', '0.65']), {
            "1.55": 1,
            "1.16": 2,
            "1.089999": 3,
            "0.8099999999999999": 4,
            "0.65": 5,
            "0.5": 6,
            "0.45999999999999996": 7
        });

    });


    it('It should work with mixed types ', function () {

        return assert.deepEqual(createRanking([
            0.91, //
            0.91, //
            "1.42", //
            "1.13", //
            "1.13", //
            1.08, //
            "1.27", //
            "1.27", //
            1.42
        ]), {
            "1.42": 1,
            "1.27": 2,
            "1.13": 3,
            "1.08": 4,
            "0.91": 5,

        });

    });



    it('It should sort in the right way : DESC', () => {

        const res = createRanking(
            [0.4,
                0.91,
                0.35000000000000003,
                1.42,
                0.41000000000000003,
                1,
                0.33,
                0.72,
                0.56,
                0.6699999999999999,
                0.75,
                1.13,
                1.08,
                1.27,
                0.8099999999999999,
                0.5700000000000001,
                0.91,
                0.62,
                0.72,
                0.8700000000000001,
                0.81,
                0.69,
                1.08,
                1.45,
                0.27,
                0.5,
                0.53,
                0.8400000000000001,
                0.54,
                1.1400000000000001,
                0.54,
                1.15,
                0.45,
                0.65,
                0.5800000000000001,
                0.8799999999999999,
                1.3599999999999999,
                0.4,
                0.5900000000000001,
                0.29000000000000004,
                1.3599999999999999,
                0.61,
                1.0899999999999999,
                0.73,
                0.79,
                0.56,
                0.42,
                0.52,
                0.7,
                0.91,
                0.77,
                0.5800000000000001,
                1.16,
                0.55,
                0.64,
                1.55,
                0.45999999999999996,
                0.75,
                0.47,
                0.52,
                1.44,
                0.62,
                1.25
            ]
        );

        assert.equal(getRank(1.55, res), 1)

    });


});



describe('Test the getRank function', () => {

    it('should return the right ranking with INT', function () {

        const theScore = 7;
        const theExpectedRanking = 3;

        return assert.equal(getRank(theScore, createRanking([1, 9, 10, 9, 7, 1, 1])), theExpectedRanking);


    });


    it('Should return the right ranking with other INT', function () {

        const theScore = 10;
        const theExpectedRanking = 1;

        return assert.equal(getRank(theScore, createRanking([1, 9, 10, 9, 7, 1, 1])), theExpectedRanking);


    });



    it('Should return the right ranking with mixed types', function () {

        const theScore = 1.42;
        const theExpectedRanking = 1;

        return assert.equal(getRank(theScore,
            createRanking([
                "0.91", //
                "1.42",
                "1.13", //
                1.08, //
                1.27, //
                1.42
            ])
        ), theExpectedRanking);


    });




    it('Should return the right ranking with  negative values ', function () {

        const theScore = -0.34;
        const theExpectedRanking = 4;

        return assert.equal(getRank(theScore,
            createRanking([-1, -0.34, -1.2, 3, 9, 8, -3])
        ), theExpectedRanking);


    });



    it('Should return the right ranking with only negative values ', function () {

        const theScore = -0.34;
        const theExpectedRanking = 1;

        return assert.equal(getRank(theScore,
            createRanking([-1, -0.34, -1.2, -3])
        ), theExpectedRanking);


    });






});