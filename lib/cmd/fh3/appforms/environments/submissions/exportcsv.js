var _ = require('underscore');

module.exports = {
  'desc' : 'Export Submissions As A Zip File Containing CSV',
  'examples' : [{ cmd : 'fhc appforms environments submissions exportcsv --environment=<Environment Id> [projectid=<Filter By Project ID>] [formid=<Filter By Form ID>] --fieldheader=<<name || fieldCode>>', desc : 'Export Submissions As A Zip File Containing CSV'}],
  'demand' : ['environment', 'fieldheader'],
  'alias' : {},
  'describe' : {
    'environment': "Environment ID",
    'projectid': "Filter Submissions By Project ID",
    'formid': "Filter Submissions By Form ID",
    'fieldheader': "Use Field Codes Or Field Names As Headers"
  },
  'url' : function(params){
    return "/api/v2/mbaas/" + params.environment + "/appforms/submissions/export";
  },
  'method' : 'post'
};
