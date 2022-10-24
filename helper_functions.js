export function printNestedObject(obj, depth=0) {
    indent = "  ".repeat(depth)
    for (let [key, value] of Object.entries(obj)) {
        if ((typeof(value) != "object") || (value == null)) {
            let output = indent + String(key) + ": " + String(value)
            console.log(output)
        }
        else {
            console.log(indent + String(key) + ": ")
            printNestedObject(value, depth+1)
        }
    }
}

export async function getHTTPresponse(url) {
    let http_response = ""
    fetch(url, 
        { method: "GET" })
        .then( (response) => http_response = response)
    return http_response
}

export function printSomething() {
    console.log("Something")
}