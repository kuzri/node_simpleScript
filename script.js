const fs = require('fs').promises;
const path = require('path');

fs.readdir('test') //
  .then(e=>e.forEach(
    (item)=>{switch(path.extname(item)){
      case '.mp4':
      case '.mov':
        if(!e.includes('video')){
          fs.mkdir('./test/video').catch(console.error)
        };
        fs.readdir('./') //
        .then(
          fs.rename(`./test/${item}`, `./test/video/${item}`, (error) => {
            console.log(error);
          })
        )
        .catch(console.error);

       // -> video
      break;

      case '.png':
      case '.aae':
        if(!e.includes('captured')){
          fs.mkdir('./test/captured').catch(console.error)
        };
          fs.readdir('./') //
          .then(
            fs.rename(`./test/${item}`, `./test/captured/${item}`, (error) => {
              console.log(error);
            })
          )
          .catch(console.error);
          
          // -> captured
      break;


      case '.jpg': 
      if(!e.includes('duplicated')){
        fs.mkdir('./test/duplicated').catch(console.error)
      };
      if(item.includes("E")){
        console.log(item.includes("E"))
        fs.readdir('./')
        .then(
          fs.rename(`./test/${item}`, `./test/duplicated/${item}`, (error) => {
            console.log(error);
          })
        )
        .catch(console.error);
      }

      // -> 수정된 파일만(E) duplicated
      break;
      // default: console.log(item);
      // break;
    }})
    )
  .catch(console.error);