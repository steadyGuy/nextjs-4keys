const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
       $primaryColor: #F0C419;
       $backgroundColor: #fff;
       $textColor: #1D1D1D;
       $primaryColorDarken: #F29C1F;
  `,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
