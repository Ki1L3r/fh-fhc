var _ = require('underscore');

module.exports = {
  'desc' : 'Download A File From A Submission',
  'examples' : [{ cmd : 'fhc appforms environments submissions getfile --environment=<Environment Id> --id=<Submission ID> --fileid=<File ID To Download> --filepath=<Local Path To Download File To>', desc : 'Download A File From A Submission'}],
  'demand' : ['environment', 'id', 'fileid', 'filepath'],
  'alias' : {},
  'describe' : {
    'environment': "Environment ID",
    'id': "Submission ID",
    'fileid': "File ID To Download",
    'filepath': "Local Path To Download File To"
  },
  'url' : function(params){
    return "/api/v2/mbaas/" + params.environment + "/appforms/submissions/" + params.id + "/files/" + params.fileid;
  },
  'method' : 'get'
};
