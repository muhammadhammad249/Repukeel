const https = require('https');
const fs = require('fs');

https.get('https://dmcamaster.com/_next/static/chunks/0wcsmqad2-2o4.css', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('dmcamaster.css', data);
    console.log("CSS downloaded, size:", data.length);
  });
});
