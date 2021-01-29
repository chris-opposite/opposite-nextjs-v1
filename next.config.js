const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/svg'),
  webpack(config, options) {
    return config
  },
  images: {
    domains: ['opposite-website-assets.s3.ap-south-1.amazonaws.com'],
  },
})
