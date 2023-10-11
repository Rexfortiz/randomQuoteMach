// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

for(let i = 1; i <= 20; i += 1){
    if(i==13){
        break; //break when 13
    }
    console.log(i);
}

for(let i = 1; i <= 20; i += 1){
    if(i==13){
        continue; //skip 13
    }
    console.log(i);
}