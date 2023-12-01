"use strict";

const square = [];

const squaresNumber = 100;

// const difficultySelectorElement = document.getElementById("difficulty_selector");
// const minefieldCreatorElement = document.getElementById("minefield_creator");
const mainSquareElement = document.getElementById("main-square");

// minefieldCreatorElement.addEventListener("click", clickMinefieldCreator);

/**
 * Starts program when "Play" button is clicked
 */
function squareElementCreator() {

    const size = squaresNumber;

    const createdSquare = squareCreator(size);

    squareOutput(mainSquareElement, createdSquare);

}

/**
 * Creates a single cell
 * @param {string} cellContent Content of the created cell
 * @param {number} cellsPerRow How many cells on a single row
 * @returns {HTMLDivElement} Minefield cell
 */
function cellCreator (cellContent, cellsPerRow) {

    const cell = document.createElement("div");

    cell.classList.add("cell");

    const cellsSingleRow = Math.sqrt(cellsPerRow);

    cell.style.flexBasis = `calc(100% / ${cellsSingleRow})`;

    cell.innerHTML = cellContent;

    cell.addEventListener("click", function() {

        cell.classList.toggle("bg-info-subtle");

    }
    )

    cell.addEventListener("mouseover", function() {

        squareColors(cellContent, cellsSingleRow)

    }
    )

    cell.addEventListener("mouseout", function() {

        squareColors(cellContent, cellsSingleRow)

    }
    )

    return cell;

}

/**
 * Creates square
 * @param {number} sizeArgument Number of cells to put in square
 * @returns {HTMLDivElement[]} Square as cells array
 */
function squareCreator (sizeArgument) {

    for (let i = 0; i < sizeArgument; i++) {

        const createdCell = cellCreator(i+1, sizeArgument);

        square.push(createdCell);

    }

    return square;

}

/**
 * Adds square to Html
 * @param {HTMLDivElement} squareContainer 
 * @param {HTMLDivElement[]} cellList 
 */
function squareOutput(squareContainer, cellList) {

    for (let i = 0; i < cellList.length; i++) {

        squareContainer.append(cellList[i]);

    }

}

function squareColors (cellNumber, cellsPerRow) {

    square.forEach((cell, i) => {

        if (cell.innerHTML == cellNumber) {

            cell.classList.toggle("hovered-cell");

        };

        if (cellNumber % cellsPerRow == 1) {

            if (
                (cell.innerHTML) == cellNumber - cellsPerRow ||
                (cell.innerHTML) == cellNumber - (cellsPerRow - 1) ||
                (cell.innerHTML) == cellNumber + 1 ||
                (cell.innerHTML) == cellNumber + cellsPerRow ||
                (cell.innerHTML) == cellNumber + (cellsPerRow + 1)
                ) {
    
                    cell.classList.toggle('hovered-cell-first');
    
            };

        } else if (cellNumber % cellsPerRow == 0) {

            if (
                (cell.innerHTML) == cellNumber - (cellsPerRow + 1) ||
                (cell.innerHTML) == cellNumber - cellsPerRow ||
                (cell.innerHTML) == cellNumber - 1 ||
                (cell.innerHTML) == cellNumber + (cellsPerRow - 1) ||
                (cell.innerHTML) == cellNumber + cellsPerRow
                ) {
    
                    cell.classList.toggle('hovered-cell-first');
    
            };

        };
            
        if (
            ((cell.innerHTML) == (cellNumber - (cellsPerRow + 1)) ||
            (cell.innerHTML) == cellNumber - cellsPerRow ||
            (cell.innerHTML) == cellNumber - (cellsPerRow - 1) ||
            (cell.innerHTML) == cellNumber - 1 ||
            (cell.innerHTML) == cellNumber + 1 ||
            (cell.innerHTML) == cellNumber + (cellsPerRow - 1) ||
            (cell.innerHTML) == cellNumber + cellsPerRow ||
            (cell.innerHTML) == cellNumber + (cellsPerRow + 1)) && 
            !(cellNumber % cellsPerRow == 1) &&
            !(cellNumber % cellsPerRow == 0)
            ) {

                cell.classList.toggle('hovered-cell-first');

        }
    });

}