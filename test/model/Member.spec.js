/**
 * Trello REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TrelloRestApi);
  }
}(this, function(expect, TrelloRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TrelloRestApi.Member();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Member', function() {
    it('should create an instance of Member', function() {
      // uncomment below and update the code to test Member
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be.a(TrelloRestApi.Member);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property activityBlocked (base name: "activityBlocked")', function() {
      // uncomment below and update the code to test the property activityBlocked
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property avatarHash (base name: "avatarHash")', function() {
      // uncomment below and update the code to test the property avatarHash
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property avatarUrl (base name: "avatarUrl")', function() {
      // uncomment below and update the code to test the property avatarUrl
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property bio (base name: "bio")', function() {
      // uncomment below and update the code to test the property bio
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property bioData (base name: "bioData")', function() {
      // uncomment below and update the code to test the property bioData
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property confirmed (base name: "confirmed")', function() {
      // uncomment below and update the code to test the property confirmed
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property fullName (base name: "fullName")', function() {
      // uncomment below and update the code to test the property fullName
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property idEnterprise (base name: "idEnterprise")', function() {
      // uncomment below and update the code to test the property idEnterprise
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property idEnterprisesDeactivated (base name: "idEnterprisesDeactivated")', function() {
      // uncomment below and update the code to test the property idEnterprisesDeactivated
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property idMemberReferrer (base name: "idMemberReferrer")', function() {
      // uncomment below and update the code to test the property idMemberReferrer
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property idPremOrgsAdmin (base name: "idPremOrgsAdmin")', function() {
      // uncomment below and update the code to test the property idPremOrgsAdmin
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property initials (base name: "initials")', function() {
      // uncomment below and update the code to test the property initials
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property memberType (base name: "memberType")', function() {
      // uncomment below and update the code to test the property memberType
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property nonPublic (base name: "nonPublic")', function() {
      // uncomment below and update the code to test the property nonPublic
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property nonPublicAvailable (base name: "nonPublicAvailable")', function() {
      // uncomment below and update the code to test the property nonPublicAvailable
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property products (base name: "products")', function() {
      // uncomment below and update the code to test the property products
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property aaEmail (base name: "aaEmail")', function() {
      // uncomment below and update the code to test the property aaEmail
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property aaEnrolledDate (base name: "aaEnrolledDate")', function() {
      // uncomment below and update the code to test the property aaEnrolledDate
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property aaId (base name: "aaId")', function() {
      // uncomment below and update the code to test the property aaId
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property avatarSource (base name: "avatarSource")', function() {
      // uncomment below and update the code to test the property avatarSource
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property gravatarHash (base name: "gravatarHash")', function() {
      // uncomment below and update the code to test the property gravatarHash
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property idBoards (base name: "idBoards")', function() {
      // uncomment below and update the code to test the property idBoards
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property idOrganizations (base name: "idOrganizations")', function() {
      // uncomment below and update the code to test the property idOrganizations
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property idEnterprisesAdmin (base name: "idEnterprisesAdmin")', function() {
      // uncomment below and update the code to test the property idEnterprisesAdmin
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property limits (base name: "limits")', function() {
      // uncomment below and update the code to test the property limits
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property loginTypes (base name: "loginTypes")', function() {
      // uncomment below and update the code to test the property loginTypes
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property marketingOptIn (base name: "marketingOptIn")', function() {
      // uncomment below and update the code to test the property marketingOptIn
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property messagesDismissed (base name: "messagesDismissed")', function() {
      // uncomment below and update the code to test the property messagesDismissed
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property oneTimeMessagesDismissed (base name: "oneTimeMessagesDismissed")', function() {
      // uncomment below and update the code to test the property oneTimeMessagesDismissed
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property prefs (base name: "prefs")', function() {
      // uncomment below and update the code to test the property prefs
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property trophies (base name: "trophies")', function() {
      // uncomment below and update the code to test the property trophies
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property uploadedAvatarHash (base name: "uploadedAvatarHash")', function() {
      // uncomment below and update the code to test the property uploadedAvatarHash
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property uploadedAvatarUrl (base name: "uploadedAvatarUrl")', function() {
      // uncomment below and update the code to test the property uploadedAvatarUrl
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property premiumFeatures (base name: "premiumFeatures")', function() {
      // uncomment below and update the code to test the property premiumFeatures
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property isAaMastered (base name: "isAaMastered")', function() {
      // uncomment below and update the code to test the property isAaMastered
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property ixUpdate (base name: "ixUpdate")', function() {
      // uncomment below and update the code to test the property ixUpdate
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

    it('should have the property idBoardsPinned (base name: "idBoardsPinned")', function() {
      // uncomment below and update the code to test the property idBoardsPinned
      //var instane = new TrelloRestApi.Member();
      //expect(instance).to.be();
    });

  });

}));
