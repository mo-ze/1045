function findEaster(){
   let y= +(prompt("enter an year"));
   let a = y%19;
   let b =Math.floor(y/100)
   let c= (y%100);
   let d = (b/4);
   let e = (b%4);
   let g= Math.floor((8 * b + 13)/25)
   let h =((19 * a + b - d - g + 15)%30)
   let j =Math.floor(c/4)
   let k= (c%4)
   let m= Math.floor((a + 11 * h)/319)
   let r= Math.floor((2 * e + 2 * j -k -h + m + 32)%7)
   let n =Math.floor((h -m + r + 90)/25)
   let p= Math.floor( (h -m + r + n+ 19)%32)
   console.log(a, b, c, d, e,g,h,j,k,m,r,n,p )
    document.getElementById("output").innerHTML= "Easter falls on day "+ p+ " of month "+ n
}

findEaster();