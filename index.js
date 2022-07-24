function superbowlWin(record){
   let winningSeason = record.find(season => season.result === 'W')
    if (winningSeason === undefined){
        return undefined;
    }     
   
   return winningSeason.year;
    }