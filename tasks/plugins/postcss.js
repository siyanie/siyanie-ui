module.exports = [
	require('postcss-import')(),

	// Helpers (shortcuts)
	require('postcss-property-shorthand')({
		syntax: 'scss'
	}),
	require('postcss-short')(),

	require('postcss-each')(),
	require('postcss-mixins')(),
	require('postcss-nested')(),
	require('postcss-ref')(),
	require('postcss-ref')({
		atRule: false
	}),
	require('postcss-extend')(),
	require('postcss-simple-vars')({
		variables: require('../../modules/config/config.props.react')
	}),

	// Future css
	require('postcss-cssnext')(),

	require('postcss-focus')(),
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
