// const fibo =  0	1	1	2	3	5	8	13	21	34	55
/*
 fibo[3] = fibo[1] + fibo[2]
 fibo[4] = fibo[2] + fibo[3]
 fibo[5] = fibo[3] + fibo[4]
 fibo[6] = fibo[4] + fibo[5]
 */	
// n tom pod

const fibo = [0, 1];
for (let i = 2; i <= 20; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
    
}
 console.log(fibo);
