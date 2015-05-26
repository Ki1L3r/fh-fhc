var _ = require('underscore');

module.exports = {
  'desc' : 'Export A Single Submission As A PDF File',
  'examples' : [{ cmd : 'fhc appforms environments submissions exportpdf --environment=<Environment Id> --id=<Submission ID>', desc : 'Export A Single Submission As A PDF File'}],
  'demand' : ['environment', 'fieldheader'],
  'alias' : {},
  'describe' : {
    'environment': "Environment ID",
    'id': "Submission ID"
  },
  'url' : function(params){
    return "/api/v2/mbaas/" + params.environment + "/appforms/submissions/" + params.id + "/exportpdf";
  },
  'method' : 'get'
};
