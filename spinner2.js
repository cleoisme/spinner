let secs = 100;
let arr = ['\r|   ','\r/   ','\r-   ', '\r\\   '];
for (const e of arr){
  setTimeout(() => {
    process.stdout.write(e);
  }, secs)
  secs += 200;
}