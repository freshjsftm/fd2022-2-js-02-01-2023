let count = 0;
// while (true) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
//   count++;
//   if(count>20)break;
// }
//debugger
while (true) {
  if (count % 2) {
    count++;
    continue;
  }
  console.log(count++);
  if (count > 6) break;
}

for (let i = 100; i <= 600; i++) {
  if (i % 2) continue;
  console.log(i);
}

for (let i = 0; i <= 6; i+=2) {
  console.log(i);
}
