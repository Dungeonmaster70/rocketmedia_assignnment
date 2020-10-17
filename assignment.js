//submitted by -Piyush Chauhan

let num= Number(prompt()); //takes the number of socks

let sock = prompt(); //takes color's  string seperated by space  

//sorting the sock color in case needed  
sock = sock.split(' ').sort(); 

let cnt = pair = 0;

let find_pair = () =>{
  for(let i=0; i< num;i++){
  cnt = Number(sock[i]);
  if(cnt === Number(sock[i+1])){
    pair += 1;
    i++;
  }
}
  return pair;
}
//pair of same colors are ->
console.log(find_pair()); 
