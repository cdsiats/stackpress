//stackpress
import type { Server } from 'stackpress/server';
//util
import connect from './connect';

export default function plugin(server: Server) {
  //on config, register the store
  server.on('config', async req => {
    const server = req.context;
    server.register('database', await connect());
  });
};