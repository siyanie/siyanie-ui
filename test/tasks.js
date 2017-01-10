import test from 'ava'
import stat from '../tasks/utils/stat'
import exec from '../tasks/utils/exec'

const tasks = [
	{
		name: 'build',
		output:
		[
			'index.html',
			'styles.css',
			'main.js',
			'modernizr.js',
			'assets/fonts',
			'assets/icons'
		]
	}
]

test.before('remove build dir', () => {
	return exec('rm -rf ../build/')
		.then(() => {
			console.log('Build folder is removed')
		})
})

tasks.forEach(({ name, output }) => {
	test(
		`${name} task`,
		t => exec(`npm run ${name}`)
			.then(() => {
				return Promise
					.all(output.map(path => stat(`build/${path}`)))
					.then(() => t.pass())
					.catch(({ path }) => {
						console.log(`No ${path}`)
						t.fail()
					})
			})
			.catch(err => t.fail(`Err: ${err}`))
	)
})
