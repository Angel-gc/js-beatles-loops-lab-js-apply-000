// add solution here
function theBeatlesPlay(musicians, instrument){
  let musicianList = [];
  
  for (let i = 0; i < musicians.length; i++){
    let currentMusician = musicians[i];
    let currentInstrument = instrument[i];
    
    let string = `${currentMusician} plays ${currentInstrument}`;
    musicianList.push(string);
  }
  return musicianList
}

