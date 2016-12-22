module.exports = [
	require('postcss-import')(),

	require('postcss-property-shorthand')({
		syntax: 'scss'
	}),

	require('postcss-mixins')(),
	require('postcss-nested')(),
	require('postcss-extend')(),
	require('postcss-simple-vars')({
		variables: require('../../modules/config/config.react')
	}),
	require('postcss-each')(),

	// Future css
	require('postcss-cssnext')(),

	// Helpers (shortcuts)
	require('postcss-focus')(),
	require('postcss-short')(),
	require('webpcss').default({
		webpClass: '.u-support--webp',
		noWebpClass: '.u-support--no-webp',
	}),

	// Optimisations
	require('css-mqpacker')(),
	require('cssnano')({
		safe: true,
		autoprefixer: false
	})
]
