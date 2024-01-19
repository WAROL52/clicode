export function bdcodeHelp() {
    console.log(`
    usage: npx dbcode <subcommand>

Available subcommands are:
   init     Initialize a new db.
   list     List all your code.
   add      Add code in your projet.
   remove   Remove code in your projet.
   run      Execute a custom custom cmd.
   login    login  .
   logout   logout .
   register register .
   config   Manage your dbcode configuration.
   db       Manage your database code.

Try 'npx dbcode <subcommand> help' for details.
        
    `)
}