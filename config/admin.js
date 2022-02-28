module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9906e08757984d2b730b3295b74bd12c'),
  },
});
