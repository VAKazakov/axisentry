const db = require('./../db/index');

module.exports = {
	name: 'inchistory',
	description: 'Gets a list of systems under incursion on a specified date',
    format: 'YYYY-MM-DD',
	permlvl: 1,
	restricted: true,
	execute(message, args) {
		try {
			db.getIncursionsByDate(args[0]).then((res) => {
				if (res.length == 0) {
					return message.channel.send(`No Incursions Found on ${args[0]}`);
				}
			  	for (let i = 0; i < res.length; i++) {
				return message.channel.send(`${res[i]}`);
			    }
			})
		} catch {
			message.channel.send("Something went wrong, please ensure the date format is correct 'YYYY-MM-DD'")
		}
	},
};