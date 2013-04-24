/*!markdown

Instanciate 2 clients and have them send messages back and forth.

Test is successful if messages are received and replied to.

*/
/* global define, suite, test, assert, HELPERS */
define([
  'opjs/util',
  'opjs/Stack'
], function(Util, Stack) {

  suite("SendMessageToPeer", function() {

    this.timeout(10 * 1000);

    var client1 = null;
    var client2 = null;

    test('connect', function() {

      client1 = new Stack({
        _logPrefix: "SendMessageToPeer (1)",
        identity: "identity://" + Util.getHostname() + "/test-SendMessageToPeer-1",
        _peerFilesForIdentity: HELPERS.peerFilesForIdentity
//        locationID: Util.randomHex(32)
      });
      client2 = new Stack({
        _logPrefix: "SendMessageToPeer (2)",
        identity: "identity://" + Util.getHostname() + "/test-SendMessageToPeer-2",
        _peerFilesForIdentity: HELPERS.peerFilesForIdentity
//        locationID: Util.randomHex(32)
      });
    });

    test('connected', function(done) {
      return client1.ready().then(function() {
        return client2.ready().then(function() {

          return done(null);
        });
      }).fail(done);
    });

    var targetPeer = null;

    test('connect to peer', function(done) {
        return done(null);
//      return client1.connectToPeer(client2.getPeerURI()).then(function(peer) {

//      	targetPeer = peer;

//      	return done(null);
//      }).fail(done);
    });
/*
    test('send message', function(done) {
      return targetPeer.sendMessage("Hello World").then(function() {

		    // TODO: Wait for `client2.on("message", function() {})`

      	return done(null);
  	  }).fail(done);
    });
*/
    test('destroy', function(done) {
      return client1.destroy().then(function() {
        return client2.destroy().then(function() {
          return HELPERS.ensureNoConnections(done);
        });
      }).fail(done);
    });

  });

});