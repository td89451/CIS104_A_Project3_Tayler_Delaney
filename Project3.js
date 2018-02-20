/**
 *  @author Delaney, Tayler (delaneyt@student.ncmich.edu)
 *  @version 0.0.1
 *  @summary CIS104 A Project 3 Tayler Delaney
 */

"use strict";
const PROMPT = require('readline-sync');

let movieTitle;
let movieRating = 0, averageRating = 0, ratingCount = 0, ratingSum = 0, MAX_ATTEMPTS = 3, continueResponse;

function main() {
    setContinueResponse();
    getMovieTitle();
    while (continueResponse === 1) {
        getMovieRating();
    }
    printAverage();
}

main();

/**
 * @method
 * @desc continueResponse mutator method written by Howard Bates
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @desc Prompts user for movie title
 * @returns {null}
 */
function getMovieTitle() {
    movieTitle = PROMPT.question(`Enter the title of the movie you want to rate: `);
}

/**
 * @method
 * @desc Prompts user for rating, input validation
 * @returns {null}
 */
function getMovieRating() {
    const MAX_RATING = 5, MIN_RATING = 0, MIN_ATTEMPTS = 1;
    movieRating = PROMPT.questionInt(`Enter a rating for ${movieTitle} between 0 and 5: `);
    if (movieRating < MIN_RATING || movieRating > MAX_RATING) {
        if (MAX_ATTEMPTS >= MIN_ATTEMPTS) {
            MAX_ATTEMPTS--;
            console.log(`That is an invalid rating, try again.`);
        } else {
            continueResponse = 0;
        }
    } else {
        ratingCount++;
        ratingSum += movieRating;
        setContinueResponse();
    }
}

/**
 * @method
 * @desc Calculates the average rating entered
 * @returns {null}
 */
function calcAverage() {
    averageRating = ratingSum / ratingCount;
}

/**
 * @method
 * @desc Prints calculated average to the screen
 * @returns {null}
 */
function printAverage() {
    calcAverage();
    console.log(`The average rating entered for ${movieTitle} was ${averageRating}.`);
}


/*
Design a program for the Hollywood Movie Rating Guide, in which users continuously enter a value from 0 to 5 that
indicates the number of stars they are awarding to a movie title they are prompted for. The program executes continuously
until a user decides to quit. If a user enters a star value that does not fall in the correct range, re-prompt the user
three (3) times until a correct value is entered. At the end of the program, display the average star rating for the movie.
 */