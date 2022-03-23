/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let groupOfNames = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if (i % 2 == 0) {
            arr.splice (i, 1, "even index")
        }
    }
    console.log(arr)
}

replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(list, string) {
    for(let i = 0; i < list.length; i++){
        if (string.includes(list[i])) {
            console.log('Matched dog_name')
        } else {
            console.log('No matches')
        }
        
    }
}

findWords(dog_names, dog_string)

//Call method here with parameters



/* codewars convert answer to javascript #1
def is_even(n): 
    return n % 2==0
*/

function is_even(n) {
    return n%2===0
}

/* codewars convert answer to javascript #2
def odd_count(n):
    return n // 2
*/

function odd_count(n) {
    return n / 2
}