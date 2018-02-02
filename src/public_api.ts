import { join, resolve } from 'path';
export { RsiServer } from './rsi.server'
export { WsHandler } from './web.socket.handler'
export { PluginLoader } from './loaders/PluginLoader';
export { ServiceRegistry } from './service.registry';
export { RunOptions } from './types';
export { Cdn, CdnCallback } from './cdn';

export const pluginpath:string = resolve(join(__dirname, 'plugins'));