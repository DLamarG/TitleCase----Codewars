function titleCase(title, minorWords) {
    let Bwrds={}
    let rRR=[]
    
    if(minorWords){
     let BDwrds= minorWords ? minorWords.split(' ') : []
      for(let i=0;i<BDwrds.length;i++){
       let current = BDwrds[i].toLowerCase()
        if(current in Bwrds){
          Bwrds[current] += 1
        }else{
          Bwrds[current] = 1
        }
      }
    }
    let Gwrds=title.split(' ')
    for(let j=0;j<Gwrds.length;j++){let current2=Gwrds[j]
      if(Bwrds.hasOwnProperty(current2.toLowerCase())){
        rRR.push(current2.toLowerCase())
      }
      else if(!Bwrds.hasOwnProperty(current2.toLowerCase())){
        current2 = current2.substring(0,1).toUpperCase() + current2.substring(1,).toLowerCase()
        rRR.push(current2)
      }
    }
    return rRR.join(' ').substring(0,1).toUpperCase()+rRR.join(' ').substring(1,)
  }

console.log(titleCase(''))//--> ''
console.log(titleCase('a clash of KINGS', 'a an the of'))//--> 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))//--> 'The Wind in the Willows'
console.log(titleCase('the quick brown fox'))//--> 'The Quick Brown Fox'