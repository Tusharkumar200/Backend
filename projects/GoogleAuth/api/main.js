const app = require('express')();
const hbs = require('hbs');
const path = require('path')
const { homedir} = require("os")
const PORT = 3000;

const tempelatePath = path.join(__dirname,'../web');
const session = require('express-session');
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.set('view engine', 'hbs');
app.set('views',tempelatePath);

const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '420598028644-fi2gsqvd03b88luhl49o4m14t3ar422q.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, function (accessToken, refreshToken, profile, done){
    console.log(profile);
    done(null, profile);
}));
    
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null,user);
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/', (req, res) => {
    // res.render('signup');
     res.render('signup');

    
});

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => { res.render('home'); });

app.get('/error', (req, res) => res.render('error'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});



