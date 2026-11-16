export default {
  root: __dirname,
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
};
