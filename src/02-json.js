// ===============================================
// 02- JSON (JavaScript Object Notation)
// ===============================================
//
// JSON is a universal TEXT for sharing data.
// It looks almost exactly like Javascript object, but it is purely a STRING.
// 
// Why do we need it?
// Because you cannot send a live Javascript objedct accross the internet,
// nor can you save it directly to a text file. You must convert it to plain text first.
//
// We use JSON to:
//   - send and receive data from a web server (APIs)
//   - save configuration settings to a file
//   - share data between completely different programming Languages (Python, Java, C#, etc.)
//
// Two built-in JavaScript functions do all heavy lifting:
//   - JSON.stringify(value) -> Converts a live JavaScript object into a JSON text string
//   - JSON.parse(text)      -> Converts a JSON text string back into a live JavaScript object
//
console.log('=== 2. JSON ===\n');

// -------- 1) Object  --> JSON --------
const student = {
    id: 101,
    name: 'Layla',
    age: 19,
    courses: ['Math', 'Programming', 'English'],
};

