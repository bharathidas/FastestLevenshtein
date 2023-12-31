// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} string1
 * @param {string} string2
 * @returns {Promise.<string>}
 */
export async function FastestLevenshtein_Closest(string1, string2) {
	// BEGIN USER CODE
		const {closest} = require('fastest-levenshtein')
	if( string1 == ""){
		throw new Error("string1 should not be empty")
	}
	if( string2 == ""){
		throw new Error("string2 should not be empty")
	}

	const dynamicArray = string2.split(',');
	let closestValue=closest(string1, dynamicArray)
	return closestValue

	// END USER CODE
}
