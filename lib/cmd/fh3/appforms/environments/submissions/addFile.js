
module.exports = {
  'desc' : 'Add A New File To A Submission',
  'examples' : [{ cmd : 'fhc appforms environments submissions addfile --environment=<ID Of Environment To List Submissions> --id=<Submission Id> --fieldid=<Field Id To Upload File For> --fileid=<ID Of New File> --filepath=<Local URI Of File To Upload>', desc : 'Add A New File To A Submission'}],
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
  'preCmd': function(params, cb){
    //This is a file upload

    //TODO Need to check how this works in new fhc world.....
  },
  'method' : 'post'
};
