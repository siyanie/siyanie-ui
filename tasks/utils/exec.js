const { exec } = require('child_process')

module.exports = (task) =>
	new Promise((resolve, reject) => {
		exec(task, (err, stdout, stderr) => {
			if (err) reject(err)
			else if (stderr) reject(stdout)
			else resolve(stdout)
		})
	})
