var assert = require('assert');
var genericCommand = require('genericCommand');
var nockEnvironment = require('test/fixtures/appforms/fixture_env_submissions');
var appformsenvsubmissions = {
  list: genericCommand(require('cmd/fh3/appforms/environments/submissions/list')),
  read: genericCommand(require('cmd/fh3/appforms/environments/submissions/read')),
  addfile: genericCommand(require('cmd/fh3/appforms/environments/submissions/updatefile')),
  updatefile: genericCommand(require('cmd/fh3/appforms/environments/submissions/updatefile')),
  complete: genericCommand(require('cmd/fh3/appforms/environments/submissions/complete')),
  create: genericCommand(require('cmd/fh3/appforms/environments/submissions/create')),
  delete: genericCommand(require('cmd/fh3/appforms/environments/submissions/delete')),
  exportcsv: genericCommand(require('cmd/fh3/appforms/environments/submissions/exportcsv')),
  exportpdf: genericCommand(require('cmd/fh3/appforms/environments/submissions/exportpdf')),
  filter: genericCommand(require('cmd/fh3/appforms/environments/submissions/filter')),
  getFile: genericCommand(require('cmd/fh3/appforms/environments/submissions/getfile')),
  update: genericCommand(require('cmd/fh3/appforms/environments/submissions/update'))
};

module.exports = {
  'test appforms-submissions list': function (cb) {
    appformsenvsubmissions.list({environment: "someenv"}, function (err, data) {
      assert.equal(err, null);
      assert.equal(data.length, 1);
      assert.equal(data[0]._id, 'someformid');
      return cb();
    });
  },
  'test appforms-submissions read': function (cb) {
    appformsenvsubmissions.read({environment: "someenv", id: "somesubmissionid"}, function (err, data) {
      assert.equal(err, null);
      assert.equal(data._id, 'somesubmissionid');
      return cb();
    });
  },
  'test appforms-submissions addfile': function (cb) {
    appformsenvsubmissions.addfile({
      environment: "someenv",
      id: "somesubmissionid",
      fieldid: "somefilefieldid",
      fileid: "somenewfileid",
      filepath: "tests/fixtures/test_file.json"
    }, function (err, data) {
      assert.equal(err, null);
      assert.equal(data._id, 'somesubmissionid');
      return cb();
    });
  },
  'test appforms-submissions complete': function (cb) {
    appformsenvsubmissions.complete({environment: "someenv", id: "somesubmissionid"}, function (err, data) {
      assert.equal(err, null);
      assert.equal(data._id, 'somesubmissionid');
      return cb();
    });
  },
  'test appforms-submissions create': function (cb) {
    appformsenvsubmissions.addfile({
      environment: "someenv",
      submissiondata: "tests/fixtures/fixture_submission.json"
    }, function (err, data) {
      assert.equal(err, null);
      assert.equal(data._id, 'somesubmissionid');
      return cb();
    });
  },
  'test appforms-submissions delete': function (cb) {
    appformsenvsubmissions.delete({environment: "someenv", id: "somesubmissionid"}, function (err, data) {
      assert.equal(err, null);
      assert.equal(data._id, 'somesubmissionid');
      return cb();
    });
  },
  'test appforms-submissions exportcsv': function (cb) {
    appformsenvsubmissions.exportcsv({
      environment: "someenv",
      projectid: "someprojectid",
      formid: "someformid",
      fieldheader: "fieldCode",
      filepath: "/tmp/somesubmissionexport.zip"
    }, function (err, data) {
      assert.equal(err, null);
      return cb();
    });
  },
  'test appforms-submissions exportpdf': function (cb) {
    appformsenvsubmissions.exportpdf({
      environment: "someenv",
      id: "somesubmissionid",
      filepath: "/tmp/somesubmission.pdf"
    }, function (err, data) {
      assert.equal(err, null);
      return cb();
    });
  },
  'test appforms-submissions getfile': function (cb) {
    appformsenvsubmissions.getfile({
      environment: "someenv",
      id: "somesubmissionid",
      fileid: "somefileid",
      filepath: "/tmp/somefile.json"
    }, function (err, data) {
      assert.equal(err, null);
      return cb();
    });
  },
  'test appforms-submissions update': function (cb) {
    appformsenvsubmissions.update({
      environment: "someenv",
      id: "somesubmissionid",
      submissiondata: "tests/fixtures/fixture_submission.json"
    }, function (err, data) {
      assert.equal(err, null);
      return cb();
    });
  },
  'test appforms-submissions updatefile': function (cb) {
    appformsenvsubmissions.updatefile({
      environment: "someenv",
      fieldid: "somefilefieldid",
      fileid: "someupdatedfileid",
      filepath: "tests/fixtures/test_file.json"
    }, function (err, data) {
      assert.equal(err, null);
      return cb();
    });
  }
}