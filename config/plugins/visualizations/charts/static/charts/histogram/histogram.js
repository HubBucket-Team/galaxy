// dependencies
define(['plugin/charts/_nvd3/nvd3'], function(NVD3) {

// widget
return Backbone.View.extend(
{
    // initialize
    initialize: function(app, options) {
        this.app        = app;
        this.options    = options;
    },
            
    // render
    draw : function(chart, request_dictionary)
    {
        // update request dataset id
        request_dictionary.id = chart.get('dataset_id_job');
        
        // configure request
        var index = 0;
        for (var i in request_dictionary.groups) {
            var group = request_dictionary.groups[i];
            group.columns = {
                x: index++,
                y: index++
            }
        }

        var nvd3 = new NVD3(this.app, this.options);
        nvd3.draw(nv.models.multiBarChart(), chart, request_dictionary);
    }
});

});