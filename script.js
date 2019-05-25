var data = [[8, 2, 3], [4, 7, 6], [7, 8, 9]];
var flattenedData = data.reduce(function(acc, value) {
  return acc.concat(value);
}, []);

var input = [
  {
    title: "Title 01",
    year: 2001,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "Title 02",
    year: 2008,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "Title 03",
    year: 2019,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

var stars = input.reduce(function(acc, value) {
  value.cast.forEach(function(star) {
    if (acc.indexOf(star) === -1) {
      acc.push(star);
    }
  });

  return acc;
}, []);

console.log("Stars: ", stars)

var data = [21, 22, 32, 4, "5"];
var sum = data.reduceRight(function(acc, value, index) {
  console.log(`Index: ${index}`)
  return acc + value;
}, 0);

console.log("Sum: ", sum)
