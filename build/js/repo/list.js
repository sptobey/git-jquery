// Q: How is this js file loaded?
function repoList(){

    console.log('listing repos')    
    
    $.get("https://api.github.com/orgs/ucdd2-sp15/repos", github, function(data) {

        // Q: What is the parameter 'github'? Where was it defined? What's the purpose? 
        // A: It is an object that is sent to the server.  It is 
        //    defined in "github.js" and it is needed to request data.

        // Q: Why is JSON.parse no longer necessary?
        // A: We already have parsed JSON objects (not sure).
        var repos = data
        
        // Q: Why are these templates files stored in a separate folder inside contents/?
        // A: These templates are different than others (index.jade), 
        //     and we want to know about these templates, since we are 
        //     making a "single-page" site.
        $.get("/git-jquery/templates/repoList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: repos})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            repoView(repos[0].full_name)

        })

    })

}
