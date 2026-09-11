const fs = require('fs');

const text = fs.readFileSync('./blogs.txt', 'utf8');

const lines = text.split('\n');
const blogs = [];
let currentBlog = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  if (line.startsWith('Meta Description:')) {
    if (currentBlog) {
      currentBlog.meta = line.replace('Meta Description: ', '').trim();
    }
  } else if (!currentBlog || (currentBlog && currentBlog.content.length > 500 && !line.startsWith('●') && !line.match(/^[0-9]\./) && line.includes('?') && lines[i+1] && lines[i+1].includes('Meta Description:')) || (currentBlog && currentBlog.content.length > 1000 && !line.includes('?') && !line.startsWith('●') && !line.match(/^[0-9]\./) && lines[i+1] && lines[i+1].includes('Meta Description:'))) {
    // This looks like a new title
    if (currentBlog) {
      blogs.push(currentBlog);
    }
    
    currentBlog = {
      title: line,
      slug: line.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      meta: '',
      content: ''
    };
  } else {
    // It's content
    if (currentBlog) {
      if (line.startsWith('●')) {
        if (!currentBlog.content.endsWith('</ul>')) {
          currentBlog.content += '<ul>';
        }
        currentBlog.content = currentBlog.content.replace('</ul>', '') + '<li>' + line.substring(1).trim() + '</li></ul>';
      } else if (line.match(/^[0-9]+\./)) {
        currentBlog.content += '<h3>' + line + '</h3>';
      } else if (line.length < 60 && !line.includes('.')) {
        currentBlog.content += '<h3>' + line + '</h3>';
      } else {
        currentBlog.content += '<p>' + line + '</p>';
      }
    }
  }
}

if (currentBlog) {
  blogs.push(currentBlog);
}

const tsContent = `export const blogs = ${JSON.stringify(blogs, null, 2)};`;
fs.writeFileSync('./src/app/blogs/data.ts', tsContent);
console.log('Successfully generated src/app/blogs/data.ts with ' + blogs.length + ' blogs.');
