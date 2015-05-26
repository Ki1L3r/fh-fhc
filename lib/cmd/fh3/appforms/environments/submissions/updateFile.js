var fs = require('fs');

module.exports = {
  'desc' : 'Update An Existing Submission File',
  'examples' : [{ cmd : 'fhc appforms environments submissions updatefile --environment=<ID Of Environment To List Submissions> --id=<Submission Id> --fieldid=<Field Id To Upload File For> --fileid=<ID Of Existing File> --filepath=<Local URI Of File To Upload>', desc : 'Update An Existing Submission File'}],
  'demand' : ['environment', 'id', 'fieldid', 'fileid', 'filepath'],
  'alias' : {},
  'describe' : {
    'environment': "ID Of Environment To List Forms",
    'id': "Submission Id To Update File For",
    'fieldid': "Field Id To Upload File For",
    'fileid': "ID Of New File",
    'filepath': "Path To Local File To Upload"
  },
  'url' : function(params){
    return "/api/v2/mbaas/" + params.environment + "/appforms/submissions/" + params.id + "/fields/" + params.fieldid + "/files/" + params.fileid ;
  },
  'preCmd' : function(params, cb){
    var submissionDataPath = params.submissiondata;

    //TODO: File Params
  },
  'method' : 'put'
};
