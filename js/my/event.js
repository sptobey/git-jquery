function myEvent(id){

    $.get("https://api.github.com/users/sptobey/events", github, function(data) {
        
        var event = _.find(data, 
            function(res) {
                if(id == res.id) {
                    return true;
                }
            }
        );
        //console.log(event)
        
        $.get("/git-jquery/templates/eventView.jade", function(template) {

            // render the template
            var html = jade.render(template, {item: event})            

            // assign the rendered html to the dom element whose id is #details
            $("#details").html(html)

        })

    })

}

