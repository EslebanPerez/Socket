const { server } = require('./api');
const { PORT } = require('./config');


server.listen(PORT, () =>{
  console.log(`Listening on: ${PORT} 🚀`);
});