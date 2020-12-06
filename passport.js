const User = require('./sequelizeModels').User;
const config = require('./core/default.json');
const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt

module.exports = function() {
    const params = {
        secretOrKey: config.security.jwtPrivateKey,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }
    
    const strategy = new Strategy(params, async (payload, done) => {        
        try {
            const user = await User.findOne( { where: { id: payload.user.id } } );                        
            if (user)
                return done(null, user);
            else
                return done(null, false);
        } catch (err) {
            return done(err, false);
        }       
    });
    
    passport.use(strategy);
    
    return {
        initialize: function() { return passport.initialize(); },
        authenticate: function() { return passport.authenticate('jwt', { session: false }); }
    };
};