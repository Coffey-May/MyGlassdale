
//THIS LINE DECLARES A VARIABLE THAT REPRESENTS A POSSIBLE ARRAY
let witnesses = []

//A VARIABLE WHICH IS A FUNCTION THAT RETURNS ONE ITERATION OF PARSABLE API DATA IS NAMED USEWITNESSES
export const useWitnesses = () => {
    return witnesses
}


//A VARIABLE WHICH IS ALSO A FUNCTION THAT RETURNS THE API INFO WHICH IS PARSED TO BE READ INDIVIDUALLY
//IS DECLARED AND EXPORTED TO MAIN JS AND INVOKED, IT IS ALSO IMPORTED TO THE WITNESS LIST TO BE USED 
export const getWitnesses = () => {
    return fetch("http://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(
            parsedWitnesses => {
                witnesses = parsedWitnesses.slice()

            }
        )
}


