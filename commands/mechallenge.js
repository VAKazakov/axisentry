const Discord = require("discord.js");
module.exports = {
	name: 'mechallenge',
	description: 'Challenges @user to do the Mechan Challenge! :smiling_imp:',
    format: '"@user"',
	permlvl: 0,
	restricted: false,
    execute (message, args) {
        try 
		{
			challenges = [
							`Do a Multigoid kill assigned by EuanAB`,
							`Do an E-rated fight assigned by Mechan`,
							`Do speed kill as commanded by Lapp0`,
							`Help Xarionn with his excruciating research projects`,
							`Do weekly updates marathon review like Avasa used do to`
						]
			challenge = parseInt(Math.floor(Math.random() * challenges.length))
			message.channel.send(
									`${message.author}` + " has publicly challenged " + `${args[0]}` + " to participate in the mechallenge and test their skill against the very best CMDRs!\n\n"+
									"Should "+`${args[0]}`+" not submit an entry in the next two weeks, "+`${args[0]}`+" shall be assigned a challenge! BUT if "+`${args[0]}`+" beats their current record (or scores at least one point of no record) then it will be "+`${message.author}`+" who shall be assigned a challenge!\n\n"+
									"Challenge:\n"+
									`${challenges[challenge]}`+"\n\nHave fun! :smiling_imp:"
								)
								//`${challenges[challenge]}`
		} catch(err) {
			message.channel.send(`Something went wrong!\nERROR: ${err}`)
		}
	}
}