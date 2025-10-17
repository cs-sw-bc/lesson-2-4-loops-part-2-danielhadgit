/* Mastering Continue Statements */
console.log("Example 1");
const names = ["Alex", "", "Jordan", "Priya", ""];

for (let i = 0; i < names.length; i++) {
  if (names[i] === ""){
  continue; // skip this current iteration
  }
   console.log("Hello", names[i]);
}

console.log("Example 2");
const scores = [85, -1, 92, 100, -1, 76];

for (let i = 0; i < scores.length; i++) {
  console.log("Valid score:", scores[i]);
}

console.log("Example 3");
const students = ["Alex", "Jordan", "Priya", "You", "Sam"];
// skip you 
for (let i = 0; i < students.length; i++) {
  if (students[i] === "You") {
    continue; // skip this current iteration
  }
  console.log("Calling:", students[i]);
}


/* Mastering Break */
console.log("Example 4");
const numbers = [2, 5, 8, 12, 15, 20];
numberToFind = 12;
for (let i = 0; i < numbers.length; i++) {
  console.log("🔍 Checking:", numbers[i]);  // <— always runs
  if (numbers[i] === 12) {
    console.log("🎯 Found 12!");
    break;
  }
  console.log(`Still searching...`);  // <— only runs if not found yet
}

console.log("✅ Search complete!");


console.log("Example 5");
// Sample dataset: files in a folder (some normal, one contains "virus")
const files = [
  "readme.txt",
  "photo1.jpg",
  "report.pdf",
  "notes.txt",
  "suspect_file.exe", // maybe suspicious
  "virus_signature.bin", // <-- the 'virus' marker we will treat as virus
  "more_docs.docx",
  "archive.zip"
];


let foundIndex = -1;

console.log("🔎 Starting scan of files...");

for (let i = 0; i < files.length; i++) {
  // Always show what we're checking (helps students trace the loop)
  console.log(`Scanning index ${i}: ${files[i]}`);
if(files[i].includes("virus")){
  console.log(`Virus Detected.`)
  foundIndex = 0;
  break;
}
  // Only runs when file is clean
  console.log("✅ Clean. Continuing scan...");
}

if (foundIndex === -1) {
  console.log("✅ Scan finished — no virus found.");
} else {
  console.log(`🛑 Scan aborted at index ${foundIndex}. Take action (isolate/delete/quarantine).`);
}




/* OBJECTS */
let student1Name = "Alex";
let student1Age = 20;
let student1Score = 88;

let student2Name = "Daniel";
let student2Age = 21;
let student2Score = 95;

let student3Name="Jordan";
let student3Age= 19;
let student3Score= 80;

let student1 ={
  id:1,
  name: "Alex",
  age: 20,
  score:88
}

let student2 ={
  id:2,
  name: "Daniel",
  age: 21,
  score:90
}
let student3 ={
  id:3,
  name: "Jason",
  age: 19,
  score:87
}

console.log(student1.name);

let classList = [student1,student2,student3]; // array of objects
// use a lioop to print student name, age and score from classlist
for (let i=0; i<classList.length;i++){
  // display only the information of users who is atleast 20 years old
  if(classList[i].age<20){
    continue;
  }
  console.log(`Name : ${classList[i].name}, Score: ${classList[i].score}`)
}

// For IN - Used for arrays
for(let i in classList){
  console.log(`Name: ${classList[i].name}, Score: ${classList[i].score} arra`);
}

  for(let name in classList){
    console.log(name);
  }

  /* REDUCE Function - sum up the scores array*/
console.log("Example 6");

function add(sum, num){
 return sum+num;
}

function multiple(prod,num){
  return prod*num
}
let product = numbers.reduce(multiple,1);

let sum = numbers.reduce(add, 0);
console.log(product);
