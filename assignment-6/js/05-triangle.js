let symbol = "#";
let start = 1,
  end = 7;

for (var i = start; i <= end; i++) {
    for (var j = start; j <= i; j++){
        console.log(symbol)
        document.write("#")
    }
    console.log('\n')
    document.write('<br/>')
}
