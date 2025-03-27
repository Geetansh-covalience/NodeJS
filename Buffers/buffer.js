let buf = Buffer.alloc(10);
// console.log(buf);

// let buf1 = Buffer.allocUnsafe(10);
// console.log(buf1);

// let buf2 = Buffer.allocUnsafeSlow(10);
// console.log(buf2);

let buf3 = Buffer.from([1,-2,'-3',4,5,6]);
console.log(buf3);

// let buf4 = Buffer.from("Geetansh",'utf-8');
// let buf5 = Buffer.from(buf4)
// // console.log(buf4.toString(),buf5.toString());

// let buf6 = buf.write("Hello",2,5,'utf-8')
// console.log(buf.toString(),buf);


// let subbuf = buf4.slice(0,2)
// console.log(subbuf.toString());

// let concat = Buffer.concat([subbuf,buf4])
// console.log(concat.toString());


