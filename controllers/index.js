const router = require('express').Router();
const homeRoutes = require('./view/home');
const dashboardRoutes = require('./view/dashboard');
const authRoutes = require('./view/auth');
const blogRoutes = require('./view/blog')
app.use('/', homeRoutes);
app.use('/', authRoutes);

app.use('/dashboard', dashboardRoutes);
app.use('/blog', blogRoutes);
module.exports = router;