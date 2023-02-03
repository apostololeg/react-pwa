import path from 'path';

const src = path.resolve('src/');

export default {
  src,
  build: path.resolve('build/'),
  assets: path.resolve(src, 'assets/'),
  modules: path.resolve('node_modules'),
};
