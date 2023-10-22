
// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname,'public');


// console.log(publicPath);
// // app.use(express.static(publicPath));

// app.get('',(req, resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)

// })
// app.listen(3000);

// const express = require('express');
// const app = express();
// const publicPath = path.join(__dirname, 'public');

// console.log(publicPath);

// app.get('', (req, resp) => {
//     resp.sendFile(path.join(publicPath, '/index.html'));
// });

// app.listen(3000);

// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// app.get('/about', (req, resp) => {
//   resp.sendFile(`${publicPath}/about.html`);
// })

// // we can make 404 page with the help of '*' and add the file
// app.get('*', (req, resp) => {
//   resp.sendFile(`${publicPath}/index.html`);
// })

// app.listen(3000);

// const express = require('express');
// const path = require('path');
// app.set('view engine','ejs');

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// app.get('/profile', (req, resp) => {
//   resp.render('profile');
// });

const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route handler for the /profile route
app.get('/profile', (req, res) => {
  // Render the profile.ejs view
  res.render('profile', { name: 'John Doe', age: 30 });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.listen(3000);

