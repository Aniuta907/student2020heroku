require('http')
.Server((req, res) => {
  if (req.url === '/v8') return res.end(process.versions.v8);
  if (req.url === '/package.json') return require('fs').createReadStream('./package.json').pipe(res);
  
  res.end('student2020heroku');
})
.listen(process.env.PORT);
