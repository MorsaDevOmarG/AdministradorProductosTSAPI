import server from "./server";
import colors from 'colors';

const port = 4000;

server.listen(port, () => {
  console.log(colors.bgBlue.white(`Servidor corriendo en el puerto: ${port}`));
});