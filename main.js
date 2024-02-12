const a = [100, 55, 20, 300, 15];
let b = 0;
for (let i = 0; i < a.length; i++) {
    console.log(b + " + " + a[i] + " = " + (b + a[i]));
    b += a[i];
}