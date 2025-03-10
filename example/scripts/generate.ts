//stackpress
import { Terminal } from 'stackpress/terminal';
//plugins
import bootstrap from '../plugins/bootstrap';

async function generate() {
  const args = process.argv.slice(2);
  const command = [ ...args, 'transform' ];
  const server = await bootstrap();
  const terminal = new Terminal(command, server);
  await terminal.server.call('idea', { 
    transformer: terminal.transformer 
  });
  const response = await terminal.server.call(
    terminal.command, 
    terminal.params || {}
  );
  console.log(JSON.stringify(response, null, 2));
}

generate()
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });