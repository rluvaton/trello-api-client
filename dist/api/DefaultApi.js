"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _ApiClient=_interopRequireDefault(require("../ApiClient"));var _Action=_interopRequireDefault(require("../model/Action"));var _ActionFields=_interopRequireDefault(require("../model/ActionFields"));var _AnyOfAttachmentFields=_interopRequireDefault(require("../model/AnyOfAttachmentFields"));var _AnyOfOrganization=_interopRequireDefault(require("../model/AnyOfOrganization"));var _Board=_interopRequireDefault(require("../model/Board"));var _BoardBackground=_interopRequireDefault(require("../model/BoardBackground"));var _BoardFields=_interopRequireDefault(require("../model/BoardFields"));var _BoardStars=_interopRequireDefault(require("../model/BoardStars"));var _Card=_interopRequireDefault(require("../model/Card"));var _CardFields=_interopRequireDefault(require("../model/CardFields"));var _CheckItem=_interopRequireDefault(require("../model/CheckItem"));var _Color=_interopRequireDefault(require("../model/Color"));var _Cover=_interopRequireDefault(require("../model/Cover"));var _CustomEmoji=_interopRequireDefault(require("../model/CustomEmoji"));var _CustomField=_interopRequireDefault(require("../model/CustomField"));var _CustomFieldItems=_interopRequireDefault(require("../model/CustomFieldItems"));var _CustomSticker=_interopRequireDefault(require("../model/CustomSticker"));var _Emoji=_interopRequireDefault(require("../model/Emoji"));var _Enterprise=_interopRequireDefault(require("../model/Enterprise"));var _Error=_interopRequireDefault(require("../model/Error"));var _InlineObject=_interopRequireDefault(require("../model/InlineObject"));var _InlineObject2=_interopRequireDefault(require("../model/InlineObject1"));var _InlineObject3=_interopRequireDefault(require("../model/InlineObject2"));var _InlineObject4=_interopRequireDefault(require("../model/InlineObject3"));var _InlineObject5=_interopRequireDefault(require("../model/InlineObject4"));var _InlineObject6=_interopRequireDefault(require("../model/InlineObject5"));var _Label=_interopRequireDefault(require("../model/Label"));var _ListFields=_interopRequireDefault(require("../model/ListFields"));var _Member=_interopRequireDefault(require("../model/Member"));var _MemberFields=_interopRequireDefault(require("../model/MemberFields"));var _Memberships=_interopRequireDefault(require("../model/Memberships"));var _ModelExport=_interopRequireDefault(require("../model/ModelExport"));var _Notification=_interopRequireDefault(require("../model/Notification"));var _NotificationFields=_interopRequireDefault(require("../model/NotificationFields"));var _OneOfAction=_interopRequireDefault(require("../model/OneOfAction"));var _OneOfAttachment=_interopRequireDefault(require("../model/OneOfAttachment"));var _OneOfBoard=_interopRequireDefault(require("../model/OneOfBoard"));var _OneOfBoardBackground=_interopRequireDefault(require("../model/OneOfBoardBackground"));var _OneOfBoardStars=_interopRequireDefault(require("../model/OneOfBoardStars"));var _OneOfCard=_interopRequireDefault(require("../model/OneOfCard"));var _OneOfList=_interopRequireDefault(require("../model/OneOfList"));var _OneOfMember=_interopRequireDefault(require("../model/OneOfMember"));var _OneOfMemberCardBoardOrganization=_interopRequireDefault(require("../model/OneOfMemberCardBoardOrganization"));var _OneOfMemberships=_interopRequireDefault(require("../model/OneOfMemberships"));var _OneOfNotification=_interopRequireDefault(require("../model/OneOfNotification"));var _OneOfOrganization=_interopRequireDefault(require("../model/OneOfOrganization"));var _OneOfPluginData=_interopRequireDefault(require("../model/OneOfPluginData"));var _OneOfTag=_interopRequireDefault(require("../model/OneOfTag"));var _OneOffloatstring=_interopRequireDefault(require("../model/OneOffloatstring"));var _OneOfobjectobject=_interopRequireDefault(require("../model/OneOfobjectobject"));var _OneOfposStringOrNumberstring=_interopRequireDefault(require("../model/OneOfposStringOrNumberstring"));var _OneOfstring=_interopRequireDefault(require("../model/OneOfstring"));var _OneOfstringboolean=_interopRequireDefault(require("../model/OneOfstringboolean"));var _OneOfstringfloat=_interopRequireDefault(require("../model/OneOfstringfloat"));var _OneOfstringfloatstringboolean=_interopRequireDefault(require("../model/OneOfstringfloatstringboolean"));var _OneOfstringstring=_interopRequireDefault(require("../model/OneOfstringstring"));var _Organization=_interopRequireDefault(require("../model/Organization"));var _OrganizationFields=_interopRequireDefault(require("../model/OrganizationFields"));var _Plugin=_interopRequireDefault(require("../model/Plugin"));var _PluginListing=_interopRequireDefault(require("../model/PluginListing"));var _PosStringOrNumber=_interopRequireDefault(require("../model/PosStringOrNumber"));var _SavedSearch=_interopRequireDefault(require("../model/SavedSearch"));var _Token=_interopRequireDefault(require("../model/Token"));var _TokenFields=_interopRequireDefault(require("../model/TokenFields"));var _UNKNOWN_BASE_TYPE=_interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));var _ViewFilter=_interopRequireDefault(require("../model/ViewFilter"));var _Webhook=_interopRequireDefault(require("../model/Webhook"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
* Default service.
* @module api/DefaultApi
* @version 0.0.1
*/var DefaultApi=/*#__PURE__*/function(){/**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */function DefaultApi(apiClient){_classCallCheck(this,DefaultApi);this.apiClient=apiClient||_ApiClient["default"].instance;}/**
     * Callback function to receive the result of the applicationsKeyCompliance operation.
     * @callback module:api/DefaultApi~applicationsKeyComplianceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Application's compliance data
     * @param {String} key 
     * @param {String} key2 The API key to use
     * @param {String} token The API token to use
     * @param {module:api/DefaultApi~applicationsKeyComplianceCallback} callback The callback function, accepting three arguments: error, data, response
     */_createClass(DefaultApi,[{key:"applicationsKeyCompliance",value:function applicationsKeyCompliance(key,key2,token,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling applicationsKeyCompliance");}// verify the required parameter 'key2' is set
if(key2===undefined||key2===null){throw new _Error["default"]("Missing the required parameter 'key2' when calling applicationsKeyCompliance");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling applicationsKeyCompliance");}var pathParams={'key':key};var queryParams={'key':key2,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/applications/{key}/compliance','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the boardsIdChecklists operation.
     * @callback module:api/DefaultApi~boardsIdChecklistsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Checklists on a Board
     * Get all of the checklists on a Board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the board
     * @param {module:api/DefaultApi~boardsIdChecklistsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"boardsIdChecklists",value:function boardsIdChecklists(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling boardsIdChecklists");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling boardsIdChecklists");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling boardsIdChecklists");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/checklists','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the boardsidmembersidmember operation.
     * @callback module:api/DefaultApi~boardsidmembersidmemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove Member from Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {String} idMember The id of the member to add to the board.
     * @param {module:api/DefaultApi~boardsidmembersidmemberCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"boardsidmembersidmember",value:function boardsidmembersidmember(key,token,id,idMember,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling boardsidmembersidmember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling boardsidmembersidmember");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling boardsidmembersidmember");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling boardsidmembersidmember");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/members/{idMember}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cardsidmembersvoted1 operation.
     * @callback module:api/DefaultApi~cardsidmembersvoted1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add Member vote to Card
     * Vote on the card for a given member.
     * @param {String} id The ID of the Card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} value The ID of the member to vote 'yes' on the card
     * @param {module:api/DefaultApi~cardsidmembersvoted1Callback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cardsidmembersvoted1",value:function cardsidmembersvoted1(id,key,token,value,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling cardsidmembersvoted1");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling cardsidmembersvoted1");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling cardsidmembersvoted1");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling cardsidmembersvoted1");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/membersVoted','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteActionsId operation.
     * @callback module:api/DefaultApi~deleteActionsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete an Action
     * Delete a specific action. Only comment actions can be deleted.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Action
     * @param {module:api/DefaultApi~deleteActionsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteActionsId",value:function deleteActionsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteActionsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteActionsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteActionsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/actions/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteActionsIdactionReactionsId operation.
     * @callback module:api/DefaultApi~deleteActionsIdactionReactionsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete Action's Reaction
     * Deletes a reaction
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} idAction The ID of the Action
     * @param {String} id The ID of the reaction
     * @param {module:api/DefaultApi~deleteActionsIdactionReactionsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteActionsIdactionReactionsId",value:function deleteActionsIdactionReactionsId(key,token,idAction,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteActionsIdactionReactionsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteActionsIdactionReactionsId");}// verify the required parameter 'idAction' is set
if(idAction===undefined||idAction===null){throw new _Error["default"]("Missing the required parameter 'idAction' when calling deleteActionsIdactionReactionsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteActionsIdactionReactionsId");}var pathParams={'idAction':idAction,'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/actions/{idAction}/reactions/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteBoardsId operation.
     * @callback module:api/DefaultApi~deleteBoardsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Board
     * Delete a board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to delete
     * @param {module:api/DefaultApi~deleteBoardsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteBoardsId",value:function deleteBoardsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteBoardsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteBoardsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteBoardsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteBoardsIdBoardplugins operation.
     * @callback module:api/DefaultApi~deleteBoardsIdBoardpluginsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Disable a Power-Up on a Board
     * Disable a Power-Up on a board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the board
     * @param {String} idPlugin The ID of the Power-Up to disable
     * @param {module:api/DefaultApi~deleteBoardsIdBoardpluginsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteBoardsIdBoardplugins",value:function deleteBoardsIdBoardplugins(key,token,id,idPlugin,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteBoardsIdBoardplugins");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteBoardsIdBoardplugins");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteBoardsIdBoardplugins");}// verify the required parameter 'idPlugin' is set
if(idPlugin===undefined||idPlugin===null){throw new _Error["default"]("Missing the required parameter 'idPlugin' when calling deleteBoardsIdBoardplugins");}var pathParams={'id':id,'idPlugin':idPlugin};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/boardPlugins/{idPlugin}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteBoardsIdPowerups operation.
     * @callback module:api/DefaultApi~deleteBoardsIdPowerupsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Disable Power-Up on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {module:model/String} powerUp The Power-Up to be enabled on the board. One of: `calendar`, `cardAging`, `recap`, `voting`.
     * @param {module:api/DefaultApi~deleteBoardsIdPowerupsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteBoardsIdPowerups",value:function deleteBoardsIdPowerups(key,token,id,powerUp,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteBoardsIdPowerups");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteBoardsIdPowerups");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteBoardsIdPowerups");}// verify the required parameter 'powerUp' is set
if(powerUp===undefined||powerUp===null){throw new _Error["default"]("Missing the required parameter 'powerUp' when calling deleteBoardsIdPowerups");}var pathParams={'id':id,'powerUp':powerUp};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/powerUps/{powerUp}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteCardsId operation.
     * @callback module:api/DefaultApi~deleteCardsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Card
     * Delete a Card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {module:api/DefaultApi~deleteCardsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteCardsId",value:function deleteCardsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteCardsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteCardsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteCardsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteCardsIdActionsIdComments operation.
     * @callback module:api/DefaultApi~deleteCardsIdActionsIdCommentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a comment on a Card
     * Delete a comment
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {String} idAction The ID of the comment action to update
     * @param {module:api/DefaultApi~deleteCardsIdActionsIdCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteCardsIdActionsIdComments",value:function deleteCardsIdActionsIdComments(key,token,id,idAction,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteCardsIdActionsIdComments");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteCardsIdActionsIdComments");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteCardsIdActionsIdComments");}// verify the required parameter 'idAction' is set
if(idAction===undefined||idAction===null){throw new _Error["default"]("Missing the required parameter 'idAction' when calling deleteCardsIdActionsIdComments");}var pathParams={'id':id,'idAction':idAction};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/actions/{idAction}/comments','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteCardsIdCheckitemIdcheckitem operation.
     * @callback module:api/DefaultApi~deleteCardsIdCheckitemIdcheckitemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete checkItem on a Card
     * Delete a checklist item
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {String} idCheckItem The ID of the checkitem
     * @param {module:api/DefaultApi~deleteCardsIdCheckitemIdcheckitemCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteCardsIdCheckitemIdcheckitem",value:function deleteCardsIdCheckitemIdcheckitem(key,token,id,idCheckItem,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteCardsIdCheckitemIdcheckitem");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteCardsIdCheckitemIdcheckitem");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteCardsIdCheckitemIdcheckitem");}// verify the required parameter 'idCheckItem' is set
if(idCheckItem===undefined||idCheckItem===null){throw new _Error["default"]("Missing the required parameter 'idCheckItem' when calling deleteCardsIdCheckitemIdcheckitem");}var pathParams={'id':id,'idCheckItem':idCheckItem};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/checkItem/{idCheckItem}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteCardsIdChecklistsIdchecklist operation.
     * @callback module:api/DefaultApi~deleteCardsIdChecklistsIdchecklistCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Checklist on a Card
     * Delete a checklist from a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {String} idChecklist The ID of the checklist to delete
     * @param {module:api/DefaultApi~deleteCardsIdChecklistsIdchecklistCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteCardsIdChecklistsIdchecklist",value:function deleteCardsIdChecklistsIdchecklist(key,token,id,idChecklist,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteCardsIdChecklistsIdchecklist");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteCardsIdChecklistsIdchecklist");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteCardsIdChecklistsIdchecklist");}// verify the required parameter 'idChecklist' is set
if(idChecklist===undefined||idChecklist===null){throw new _Error["default"]("Missing the required parameter 'idChecklist' when calling deleteCardsIdChecklistsIdchecklist");}var pathParams={'id':id,'idChecklist':idChecklist};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/checklists/{idChecklist}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteCardsIdIdlabelsIdlabel operation.
     * @callback module:api/DefaultApi~deleteCardsIdIdlabelsIdlabelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove a Label from a Card
     * Remove a label from a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {String} idLabel The ID of the label to remove
     * @param {module:api/DefaultApi~deleteCardsIdIdlabelsIdlabelCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteCardsIdIdlabelsIdlabel",value:function deleteCardsIdIdlabelsIdlabel(key,token,id,idLabel,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteCardsIdIdlabelsIdlabel");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteCardsIdIdlabelsIdlabel");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteCardsIdIdlabelsIdlabel");}// verify the required parameter 'idLabel' is set
if(idLabel===undefined||idLabel===null){throw new _Error["default"]("Missing the required parameter 'idLabel' when calling deleteCardsIdIdlabelsIdlabel");}var pathParams={'id':id,'idLabel':idLabel};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/idLabels/{idLabel}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteCardsIdMembersvotedIdmember operation.
     * @callback module:api/DefaultApi~deleteCardsIdMembersvotedIdmemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove a Member's Vote on a Card
     * Remove a member's vote from a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {String} idMember The ID of the member whose vote to remove
     * @param {module:api/DefaultApi~deleteCardsIdMembersvotedIdmemberCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteCardsIdMembersvotedIdmember",value:function deleteCardsIdMembersvotedIdmember(key,token,id,idMember,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteCardsIdMembersvotedIdmember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteCardsIdMembersvotedIdmember");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteCardsIdMembersvotedIdmember");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling deleteCardsIdMembersvotedIdmember");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/membersVoted/{idMember}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteCardsIdStickersIdsticker operation.
     * @callback module:api/DefaultApi~deleteCardsIdStickersIdstickerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Sticker on a Card
     * Remove a sticker from the card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {String} idSticker The ID of the sticker
     * @param {module:api/DefaultApi~deleteCardsIdStickersIdstickerCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteCardsIdStickersIdsticker",value:function deleteCardsIdStickersIdsticker(key,token,id,idSticker,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteCardsIdStickersIdsticker");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteCardsIdStickersIdsticker");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteCardsIdStickersIdsticker");}// verify the required parameter 'idSticker' is set
if(idSticker===undefined||idSticker===null){throw new _Error["default"]("Missing the required parameter 'idSticker' when calling deleteCardsIdStickersIdsticker");}var pathParams={'id':id,'idSticker':idSticker};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/stickers/{idSticker}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteChecklistsId operation.
     * @callback module:api/DefaultApi~deleteChecklistsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Checklist
     * Delete a checklist
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of a checklist.
     * @param {module:api/DefaultApi~deleteChecklistsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteChecklistsId",value:function deleteChecklistsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteChecklistsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteChecklistsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteChecklistsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteChecklistsIdCheckitemsIdcheckitem operation.
     * @callback module:api/DefaultApi~deleteChecklistsIdCheckitemsIdcheckitemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete Checkitem from Checklist
     * Remove an item from a checklist
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of a checklist.
     * @param {String} idCheckItem ID of the check item to retrieve.
     * @param {module:api/DefaultApi~deleteChecklistsIdCheckitemsIdcheckitemCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteChecklistsIdCheckitemsIdcheckitem",value:function deleteChecklistsIdCheckitemsIdcheckitem(key,token,id,idCheckItem,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteChecklistsIdCheckitemsIdcheckitem");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteChecklistsIdCheckitemsIdcheckitem");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteChecklistsIdCheckitemsIdcheckitem");}// verify the required parameter 'idCheckItem' is set
if(idCheckItem===undefined||idCheckItem===null){throw new _Error["default"]("Missing the required parameter 'idCheckItem' when calling deleteChecklistsIdCheckitemsIdcheckitem");}var pathParams={'id':id,'idCheckItem':idCheckItem};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}/checkItems/{idCheckItem}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteCustomfieldsId operation.
     * @callback module:api/DefaultApi~deleteCustomfieldsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Custom Field definition
     * Delete a Custom Field from a board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the Custom Field.
     * @param {module:api/DefaultApi~deleteCustomfieldsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteCustomfieldsId",value:function deleteCustomfieldsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteCustomfieldsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteCustomfieldsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteCustomfieldsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/customFields/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteCustomfieldsOptionsIdcustomfieldoption operation.
     * @callback module:api/DefaultApi~deleteCustomfieldsOptionsIdcustomfieldoptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete Option of Custom Field dropdown
     * Delete an option from a Custom Field dropdown.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the customfielditem.
     * @param {String} idCustomFieldOption ID of the customfieldoption to retrieve.
     * @param {module:api/DefaultApi~deleteCustomfieldsOptionsIdcustomfieldoptionCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteCustomfieldsOptionsIdcustomfieldoption",value:function deleteCustomfieldsOptionsIdcustomfieldoption(key,token,id,idCustomFieldOption,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteCustomfieldsOptionsIdcustomfieldoption");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteCustomfieldsOptionsIdcustomfieldoption");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteCustomfieldsOptionsIdcustomfieldoption");}// verify the required parameter 'idCustomFieldOption' is set
if(idCustomFieldOption===undefined||idCustomFieldOption===null){throw new _Error["default"]("Missing the required parameter 'idCustomFieldOption' when calling deleteCustomfieldsOptionsIdcustomfieldoption");}var pathParams={'id':id,'idCustomFieldOption':idCustomFieldOption};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/customFields/{id}/options/{idCustomFieldOption}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteEnterprisesIdOrganizationsIdorg operation.
     * @callback module:api/DefaultApi~deleteEnterprisesIdOrganizationsIdorgCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete an Organization from an Enterprise.
     * Remove an organization from an enterprise.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the enterprise to retrieve.
     * @param {String} idOrg ID of the organization to be removed from the enterprise.
     * @param {module:api/DefaultApi~deleteEnterprisesIdOrganizationsIdorgCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteEnterprisesIdOrganizationsIdorg",value:function deleteEnterprisesIdOrganizationsIdorg(key,token,id,idOrg,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteEnterprisesIdOrganizationsIdorg");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteEnterprisesIdOrganizationsIdorg");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteEnterprisesIdOrganizationsIdorg");}// verify the required parameter 'idOrg' is set
if(idOrg===undefined||idOrg===null){throw new _Error["default"]("Missing the required parameter 'idOrg' when calling deleteEnterprisesIdOrganizationsIdorg");}var pathParams={'id':id,'idOrg':idOrg};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/enterprises/{id}/organizations/{idOrg}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteIdIdmembersIdmember operation.
     * @callback module:api/DefaultApi~deleteIdIdmembersIdmemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove a Member from a Card
     * Remove a member from a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {String} idMember The ID of the member to remove from the card
     * @param {module:api/DefaultApi~deleteIdIdmembersIdmemberCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteIdIdmembersIdmember",value:function deleteIdIdmembersIdmember(key,token,id,idMember,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteIdIdmembersIdmember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteIdIdmembersIdmember");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteIdIdmembersIdmember");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling deleteIdIdmembersIdmember");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/idMembers/{idMember}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteLabelsId operation.
     * @callback module:api/DefaultApi~deleteLabelsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Label
     * Delete a label by ID.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Label
     * @param {module:api/DefaultApi~deleteLabelsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteLabelsId",value:function deleteLabelsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteLabelsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteLabelsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteLabelsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/labels/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteMembersIdBoardbackgroundsIdbackground operation.
     * @callback module:api/DefaultApi~deleteMembersIdBoardbackgroundsIdbackgroundCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Member's custom Board background
     * Delete a board background
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {String} idBackground The ID of the board background
     * @param {module:api/DefaultApi~deleteMembersIdBoardbackgroundsIdbackgroundCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteMembersIdBoardbackgroundsIdbackground",value:function deleteMembersIdBoardbackgroundsIdbackground(key,token,id,idBackground,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteMembersIdBoardbackgroundsIdbackground");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteMembersIdBoardbackgroundsIdbackground");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteMembersIdBoardbackgroundsIdbackground");}// verify the required parameter 'idBackground' is set
if(idBackground===undefined||idBackground===null){throw new _Error["default"]("Missing the required parameter 'idBackground' when calling deleteMembersIdBoardbackgroundsIdbackground");}var pathParams={'id':id,'idBackground':idBackground};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/members/{id}/boardBackgrounds/{idBackground}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteMembersIdBoardstarsIdstar operation.
     * @callback module:api/DefaultApi~deleteMembersIdBoardstarsIdstarCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete Star for Board
     * Unstar a board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {String} idStar The ID of the board star
     * @param {module:api/DefaultApi~deleteMembersIdBoardstarsIdstarCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteMembersIdBoardstarsIdstar",value:function deleteMembersIdBoardstarsIdstar(key,token,id,idStar,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteMembersIdBoardstarsIdstar");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteMembersIdBoardstarsIdstar");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteMembersIdBoardstarsIdstar");}// verify the required parameter 'idStar' is set
if(idStar===undefined||idStar===null){throw new _Error["default"]("Missing the required parameter 'idStar' when calling deleteMembersIdBoardstarsIdstar");}var pathParams={'id':id,'idStar':idStar};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/members/{id}/boardStars/{idStar}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteMembersIdCustomboardbackgroundsIdbackground operation.
     * @callback module:api/DefaultApi~deleteMembersIdCustomboardbackgroundsIdbackgroundCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete custom Board Background of Member
     * Delete a specific custom board background
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {module:model/OneOfstringstring} id The ID or username of the member
     * @param {String} idBackground The ID of the custom background
     * @param {module:api/DefaultApi~deleteMembersIdCustomboardbackgroundsIdbackgroundCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteMembersIdCustomboardbackgroundsIdbackground",value:function deleteMembersIdCustomboardbackgroundsIdbackground(key,token,id,idBackground,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteMembersIdCustomboardbackgroundsIdbackground");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteMembersIdCustomboardbackgroundsIdbackground");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteMembersIdCustomboardbackgroundsIdbackground");}// verify the required parameter 'idBackground' is set
if(idBackground===undefined||idBackground===null){throw new _Error["default"]("Missing the required parameter 'idBackground' when calling deleteMembersIdCustomboardbackgroundsIdbackground");}var pathParams={'id':id,'idBackground':idBackground};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/members/{id}/customBoardBackgrounds/{idBackground}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteMembersIdCustomstickersIdsticker operation.
     * @callback module:api/DefaultApi~deleteMembersIdCustomstickersIdstickerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Member's custom Sticker
     * Delete a Member's custom Sticker
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {String} idSticker The ID of the uploaded sticker
     * @param {module:api/DefaultApi~deleteMembersIdCustomstickersIdstickerCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteMembersIdCustomstickersIdsticker",value:function deleteMembersIdCustomstickersIdsticker(key,token,id,idSticker,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteMembersIdCustomstickersIdsticker");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteMembersIdCustomstickersIdsticker");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteMembersIdCustomstickersIdsticker");}// verify the required parameter 'idSticker' is set
if(idSticker===undefined||idSticker===null){throw new _Error["default"]("Missing the required parameter 'idSticker' when calling deleteMembersIdCustomstickersIdsticker");}var pathParams={'id':id,'idSticker':idSticker};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/members/{id}/customStickers/{idSticker}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteMembersIdSavedsearchesIdsearch operation.
     * @callback module:api/DefaultApi~deleteMembersIdSavedsearchesIdsearchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a saved search
     * Delete a saved search
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {String} idSearch The ID of the saved search to delete
     * @param {module:api/DefaultApi~deleteMembersIdSavedsearchesIdsearchCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteMembersIdSavedsearchesIdsearch",value:function deleteMembersIdSavedsearchesIdsearch(key,token,id,idSearch,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteMembersIdSavedsearchesIdsearch");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteMembersIdSavedsearchesIdsearch");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteMembersIdSavedsearchesIdsearch");}// verify the required parameter 'idSearch' is set
if(idSearch===undefined||idSearch===null){throw new _Error["default"]("Missing the required parameter 'idSearch' when calling deleteMembersIdSavedsearchesIdsearch");}var pathParams={'id':id,'idSearch':idSearch};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/members/{id}/savedSearches/{idSearch}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteOrganizationsId operation.
     * @callback module:api/DefaultApi~deleteOrganizationsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete an Organization
     * Delete an Organization
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the Organization
     * @param {module:api/DefaultApi~deleteOrganizationsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteOrganizationsId",value:function deleteOrganizationsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteOrganizationsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteOrganizationsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteOrganizationsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/organizations/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteOrganizationsIdLogo operation.
     * @callback module:api/DefaultApi~deleteOrganizationsIdLogoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete Logo for Organization
     * Delete a the logo from a team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {module:api/DefaultApi~deleteOrganizationsIdLogoCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteOrganizationsIdLogo",value:function deleteOrganizationsIdLogo(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteOrganizationsIdLogo");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteOrganizationsIdLogo");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteOrganizationsIdLogo");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/organizations/{id}/logo','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteOrganizationsIdMembers operation.
     * @callback module:api/DefaultApi~deleteOrganizationsIdMembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove a Member from an Organization
     * Remove a member from a team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {module:model/OneOfstringstring} id The ID or name of the organization
     * @param {String} idMember The ID of the Member to remove from the team
     * @param {module:api/DefaultApi~deleteOrganizationsIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteOrganizationsIdMembers",value:function deleteOrganizationsIdMembers(key,token,id,idMember,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteOrganizationsIdMembers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteOrganizationsIdMembers");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteOrganizationsIdMembers");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling deleteOrganizationsIdMembers");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/organizations/{id}/members/{idMember}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteOrganizationsIdPrefsAssociateddomain operation.
     * @callback module:api/DefaultApi~deleteOrganizationsIdPrefsAssociateddomainCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove the associated Google Apps domain from a team
     * Remove the associated Google Apps domain from a team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {module:api/DefaultApi~deleteOrganizationsIdPrefsAssociateddomainCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteOrganizationsIdPrefsAssociateddomain",value:function deleteOrganizationsIdPrefsAssociateddomain(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteOrganizationsIdPrefsAssociateddomain");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteOrganizationsIdPrefsAssociateddomain");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteOrganizationsIdPrefsAssociateddomain");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/organizations/{id}/prefs/associatedDomain','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteOrganizationsIdPrefsOrginviterestrict operation.
     * @callback module:api/DefaultApi~deleteOrganizationsIdPrefsOrginviterestrictCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete the email domain restriction on who can be invited to the team
     * Remove the email domain restriction on who can be invited to the team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {module:api/DefaultApi~deleteOrganizationsIdPrefsOrginviterestrictCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteOrganizationsIdPrefsOrginviterestrict",value:function deleteOrganizationsIdPrefsOrginviterestrict(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteOrganizationsIdPrefsOrginviterestrict");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteOrganizationsIdPrefsOrginviterestrict");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteOrganizationsIdPrefsOrginviterestrict");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/organizations/{id}/prefs/orgInviteRestrict','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteOrganizationsIdTagsIdtag operation.
     * @callback module:api/DefaultApi~deleteOrganizationsIdTagsIdtagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete an Organization's Tag
     * Delete an organization's tag
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {String} idTag The ID of the tag to delete
     * @param {module:api/DefaultApi~deleteOrganizationsIdTagsIdtagCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteOrganizationsIdTagsIdtag",value:function deleteOrganizationsIdTagsIdtag(key,token,id,idTag,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteOrganizationsIdTagsIdtag");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteOrganizationsIdTagsIdtag");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteOrganizationsIdTagsIdtag");}// verify the required parameter 'idTag' is set
if(idTag===undefined||idTag===null){throw new _Error["default"]("Missing the required parameter 'idTag' when calling deleteOrganizationsIdTagsIdtag");}var pathParams={'id':id,'idTag':idTag};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/organizations/{id}/tags/{idTag}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteToken operation.
     * @callback module:api/DefaultApi~deleteTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Token
     * Delete a token.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} token2 
     * @param {module:api/DefaultApi~deleteTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteToken",value:function deleteToken(key,token,token2,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteToken");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteToken");}// verify the required parameter 'token2' is set
if(token2===undefined||token2===null){throw new _Error["default"]("Missing the required parameter 'token2' when calling deleteToken");}var pathParams={'token':token2};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/tokens/{token}/','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteTokensTokenWebhooksIdwebhook operation.
     * @callback module:api/DefaultApi~deleteTokensTokenWebhooksIdwebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Webhook created by Token
     * Delete a webhook created with given token.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} token2 
     * @param {String} idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
     * @param {module:api/DefaultApi~deleteTokensTokenWebhooksIdwebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteTokensTokenWebhooksIdwebhook",value:function deleteTokensTokenWebhooksIdwebhook(key,token,token2,idWebhook,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteTokensTokenWebhooksIdwebhook");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteTokensTokenWebhooksIdwebhook");}// verify the required parameter 'token2' is set
if(token2===undefined||token2===null){throw new _Error["default"]("Missing the required parameter 'token2' when calling deleteTokensTokenWebhooksIdwebhook");}// verify the required parameter 'idWebhook' is set
if(idWebhook===undefined||idWebhook===null){throw new _Error["default"]("Missing the required parameter 'idWebhook' when calling deleteTokensTokenWebhooksIdwebhook");}var pathParams={'token':token2,'idWebhook':idWebhook};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/tokens/{token}/webhooks/{idWebhook}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteWebhooksId operation.
     * @callback module:api/DefaultApi~deleteWebhooksIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Webhook
     * Delete a webhook by ID.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the webhook to retrieve.
     * @param {module:api/DefaultApi~deleteWebhooksIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteWebhooksId",value:function deleteWebhooksId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deleteWebhooksId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deleteWebhooksId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deleteWebhooksId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/webhooks/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deletedCardsIdAttachmentsIdattachment operation.
     * @callback module:api/DefaultApi~deletedCardsIdAttachmentsIdattachmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete an Attachment on a Card
     * Delete an Attachment
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {String} idAttachment The ID of the attachment to delete
     * @param {module:api/DefaultApi~deletedCardsIdAttachmentsIdattachmentCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deletedCardsIdAttachmentsIdattachment",value:function deletedCardsIdAttachmentsIdattachment(key,token,id,idAttachment,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling deletedCardsIdAttachmentsIdattachment");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling deletedCardsIdAttachmentsIdattachment");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling deletedCardsIdAttachmentsIdattachment");}// verify the required parameter 'idAttachment' is set
if(idAttachment===undefined||idAttachment===null){throw new _Error["default"]("Missing the required parameter 'idAttachment' when calling deletedCardsIdAttachmentsIdattachment");}var pathParams={'id':id,'idAttachment':idAttachment};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/attachments/{idAttachment}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the emoji operation.
     * @callback module:api/DefaultApi~emojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Emoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List available Emoji
     * List available Emoji
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.
     * @param {Boolean} opts.spritesheets `true` to return spritesheet URLs in the response (default to false)
     * @param {module:api/DefaultApi~emojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Emoji}
     */},{key:"emoji",value:function emoji(key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling emoji");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling emoji");}var pathParams={};var queryParams={'key':key,'token':token,'locale':opts['locale'],'spritesheets':opts['spritesheets']};var headerParams={};var formParams={};var authNames=[];var contentTypes=[];var accepts=['application/json'];var returnType=_Emoji["default"];return this.apiClient.callApi('/emoji','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the enterprisesIdMembersIdMemberDeactivated operation.
     * @callback module:api/DefaultApi~enterprisesIdMembersIdMemberDeactivatedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deactivate a Member of an Enterprise.
     * Deactivate a Member of an Enterprise.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the enterprise to retrieve.
     * @param {String} idMember ID of the Member to deactive.
     * @param {Boolean} value Determines whether the user is deactivated or not.
     * @param {Object} opts Optional parameters
     * @param {module:model/MemberFields} opts.fields A comma separated list of any valid values that the [nested member field resource]() accepts.
     * @param {module:model/OrganizationFields} opts.organizationFields Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
     * @param {module:model/BoardFields} opts.boardFields Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
     * @param {module:api/DefaultApi~enterprisesIdMembersIdMemberDeactivatedCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"enterprisesIdMembersIdMemberDeactivated",value:function enterprisesIdMembersIdMemberDeactivated(key,token,id,idMember,value,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling enterprisesIdMembersIdMemberDeactivated");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling enterprisesIdMembersIdMemberDeactivated");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling enterprisesIdMembersIdMemberDeactivated");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling enterprisesIdMembersIdMemberDeactivated");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling enterprisesIdMembersIdMemberDeactivated");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token,'value':value,'fields':opts['fields'],'organization_fields':opts['organizationFields'],'board_fields':opts['boardFields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/enterprises/{id}/members/{idMember}/deactivated','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the enterprisesIdOrganizationsIdmember operation.
     * @callback module:api/DefaultApi~enterprisesIdOrganizationsIdmemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove a Member as admin from Enterprise.
     * Remove an member as admin from an enterprise.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the Enterprise to retrieve.
     * @param {String} idMember ID of the member to be removed as an admin from enterprise.
     * @param {module:api/DefaultApi~enterprisesIdOrganizationsIdmemberCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"enterprisesIdOrganizationsIdmember",value:function enterprisesIdOrganizationsIdmember(key,token,id,idMember,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling enterprisesIdOrganizationsIdmember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling enterprisesIdOrganizationsIdmember");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling enterprisesIdOrganizationsIdmember");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling enterprisesIdOrganizationsIdmember");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/enterprises/{id}/organizations/{idMember}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsId operation.
     * @callback module:api/DefaultApi~getActionsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get an Action
     * Get an Action
     * @param {String} id The ID of the Action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.display  (default to true)
     * @param {Boolean} opts.entities  (default to false)
     * @param {String} opts.fields `all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/) (default to 'all')
     * @param {Boolean} opts.member  (default to true)
     * @param {String} opts.memberFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) (default to 'avatarHash,fullName,initials,username')
     * @param {Boolean} opts.memberCreator Whether to include the member object for the creator of the action (default to true)
     * @param {String} opts.memberCreatorFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) (default to 'avatarHash,fullName,initials,username')
     * @param {module:api/DefaultApi~getActionsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getActionsId",value:function getActionsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getActionsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'display':opts['display'],'entities':opts['entities'],'fields':opts['fields'],'member':opts['member'],'member_fields':opts['memberFields'],'memberCreator':opts['memberCreator'],'memberCreator_fields':opts['memberCreatorFields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/actions/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsIdBoard operation.
     * @callback module:api/DefaultApi~getActionsIdBoardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Board} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Board for an Action
     * Get the Board for an Action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the action
     * @param {Object} opts Optional parameters
     * @param {module:model/BoardFields} opts.fields `all` or a comma-separated list of board fields
     * @param {module:api/DefaultApi~getActionsIdBoardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Board}
     */},{key:"getActionsIdBoard",value:function getActionsIdBoard(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsIdBoard");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsIdBoard");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getActionsIdBoard");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Board["default"];return this.apiClient.callApi('/actions/{id}/board','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsIdCard operation.
     * @callback module:api/DefaultApi~getActionsIdCardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Card} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Card for an Action
     * Get the card for an action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the action
     * @param {Object} opts Optional parameters
     * @param {module:model/CardFields} opts.fields `all` or a comma-separated list of card fields
     * @param {module:api/DefaultApi~getActionsIdCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Card}
     */},{key:"getActionsIdCard",value:function getActionsIdCard(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsIdCard");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsIdCard");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getActionsIdCard");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Card["default"];return this.apiClient.callApi('/actions/{id}/card','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsIdField operation.
     * @callback module:api/DefaultApi~getActionsIdFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Action} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific field on an Action
     * Get a specific property of an action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Action
     * @param {module:model/ActionFields} field An action field
     * @param {module:api/DefaultApi~getActionsIdFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Action}
     */},{key:"getActionsIdField",value:function getActionsIdField(key,token,id,field,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsIdField");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsIdField");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getActionsIdField");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling getActionsIdField");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Action["default"];return this.apiClient.callApi('/actions/{id}/{field}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsIdList operation.
     * @callback module:api/DefaultApi~getActionsIdListCallback
     * @param {String} error Error message, if any.
     * @param {Array} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the List for an Action
     * Get the List for an Action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the action
     * @param {Object} opts Optional parameters
     * @param {module:model/ListFields} opts.fields `all` or a comma-separated list of list fields
     * @param {module:api/DefaultApi~getActionsIdListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array}
     */},{key:"getActionsIdList",value:function getActionsIdList(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsIdList");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsIdList");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getActionsIdList");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=Array;return this.apiClient.callApi('/actions/{id}/list','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsIdMember operation.
     * @callback module:api/DefaultApi~getActionsIdMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Member of an Action
     * Gets the member of an action (not the creator)
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Action
     * @param {Object} opts Optional parameters
     * @param {module:model/MemberFields} opts.fields `all` or a comma-separated list of member fields
     * @param {module:api/DefaultApi~getActionsIdMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */},{key:"getActionsIdMember",value:function getActionsIdMember(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsIdMember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsIdMember");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getActionsIdMember");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Member["default"];return this.apiClient.callApi('/actions/{id}/member','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsIdMembercreator operation.
     * @callback module:api/DefaultApi~getActionsIdMembercreatorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Member Creator of an Action
     * Get the Member who created the Action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Action
     * @param {Object} opts Optional parameters
     * @param {module:model/MemberFields} opts.fields `all` or a comma-separated list of member fields
     * @param {module:api/DefaultApi~getActionsIdMembercreatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */},{key:"getActionsIdMembercreator",value:function getActionsIdMembercreator(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsIdMembercreator");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsIdMembercreator");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getActionsIdMembercreator");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Member["default"];return this.apiClient.callApi('/actions/{id}/memberCreator','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsIdOrganization operation.
     * @callback module:api/DefaultApi~getActionsIdOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Organization of an Action
     * Get the Organization of an Action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the action
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationFields} opts.fields `all` or a comma-separated list of organization fields
     * @param {module:api/DefaultApi~getActionsIdOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */},{key:"getActionsIdOrganization",value:function getActionsIdOrganization(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsIdOrganization");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsIdOrganization");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getActionsIdOrganization");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Organization["default"];return this.apiClient.callApi('/actions/{id}/organization','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsIdactionReactions operation.
     * @callback module:api/DefaultApi~getActionsIdactionReactionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Action's Reactions
     * List reactions for an action
     * @param {String} idAction The ID of the action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.member Whether to load the member as a nested resource. See [Members Nested Resource](#members-nested-resource) (default to true)
     * @param {Boolean} opts.emoji Whether to load the emoji as a nested resource. (default to true)
     * @param {module:api/DefaultApi~getActionsIdactionReactionsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getActionsIdactionReactions",value:function getActionsIdactionReactions(idAction,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'idAction' is set
if(idAction===undefined||idAction===null){throw new _Error["default"]("Missing the required parameter 'idAction' when calling getActionsIdactionReactions");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsIdactionReactions");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsIdactionReactions");}var pathParams={'idAction':idAction};var queryParams={'key':key,'token':token,'member':opts['member'],'emoji':opts['emoji']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/actions/{idAction}/reactions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsIdactionReactionsId operation.
     * @callback module:api/DefaultApi~getActionsIdactionReactionsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Action's Reaction
     * Get information for a reaction
     * @param {String} idAction The ID of the Action
     * @param {String} id The ID of the reaction
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.member Whether to load the member as a nested resource. See [Members Nested Resource](#members-nested-resource) (default to true)
     * @param {Boolean} opts.emoji Whether to load the emoji as a nested resource. (default to true)
     * @param {module:api/DefaultApi~getActionsIdactionReactionsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getActionsIdactionReactionsId",value:function getActionsIdactionReactionsId(idAction,id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'idAction' is set
if(idAction===undefined||idAction===null){throw new _Error["default"]("Missing the required parameter 'idAction' when calling getActionsIdactionReactionsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getActionsIdactionReactionsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsIdactionReactionsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsIdactionReactionsId");}var pathParams={'idAction':idAction,'id':id};var queryParams={'key':key,'token':token,'member':opts['member'],'emoji':opts['emoji']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/actions/{idAction}/reactions/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getActionsIdactionReactionsummary operation.
     * @callback module:api/DefaultApi~getActionsIdactionReactionsummaryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * List Action's summary of Reactions
     * List a summary of all reactions for an action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} idAction The ID of the action
     * @param {module:api/DefaultApi~getActionsIdactionReactionsummaryCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getActionsIdactionReactionsummary",value:function getActionsIdactionReactionsummary(key,token,idAction,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getActionsIdactionReactionsummary");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getActionsIdactionReactionsummary");}// verify the required parameter 'idAction' is set
if(idAction===undefined||idAction===null){throw new _Error["default"]("Missing the required parameter 'idAction' when calling getActionsIdactionReactionsummary");}var pathParams={'idAction':idAction};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/actions/{idAction}/reactionsSummary','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBatch operation.
     * @callback module:api/DefaultApi~getBatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Batch Requests
     * Make up to 10 GET requests in a single, batched API call.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} urls A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. \"urls=/members/trello,/cards/[cardId]\"
     * @param {module:api/DefaultApi~getBatchCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getBatch",value:function getBatch(key,token,urls,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBatch");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBatch");}// verify the required parameter 'urls' is set
if(urls===undefined||urls===null){throw new _Error["default"]("Missing the required parameter 'urls' when calling getBatch");}var pathParams={};var queryParams={'key':key,'token':token,'urls':urls};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/batch','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardIdPlugins operation.
     * @callback module:api/DefaultApi~getBoardIdPluginsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Plugin} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Power-Ups on a Board
     * List the Power-Ups on a board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the board
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter One of: `enabled` or `available` (default to 'enabled')
     * @param {module:api/DefaultApi~getBoardIdPluginsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Plugin}
     */},{key:"getBoardIdPlugins",value:function getBoardIdPlugins(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardIdPlugins");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardIdPlugins");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardIdPlugins");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Plugin["default"];return this.apiClient.callApi('/boards/{id}/plugins','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsId operation.
     * @callback module:api/DefaultApi~getBoardsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Board} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Board
     * Request a single board.
     * @param {String} id 
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.actions This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). (default to 'all')
     * @param {String} opts.boardStars Valid values are one of: `mine` or `none`. (default to 'none')
     * @param {String} opts.cards This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). (default to 'none')
     * @param {Boolean} opts.cardPluginData Use with the `cards` param to include card pluginData with the response (default to false)
     * @param {String} opts.checklists This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). (default to 'none')
     * @param {Boolean} opts.customFields This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource). (default to false)
     * @param {String} opts.fields The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url (default to 'name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames')
     * @param {String} opts.labels This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param {String} opts.lists This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). (default to 'open')
     * @param {String} opts.members This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). (default to 'none')
     * @param {String} opts.memberships This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). (default to 'none')
     * @param {Boolean} opts.pluginData Determines whether the pluginData for this board should be returned. Valid values: true or false. (default to false)
     * @param {Boolean} opts.organization This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). (default to false)
     * @param {Boolean} opts.organizationPluginData Use with the `organization` param to include organization pluginData with the response (default to false)
     * @param {Boolean} opts.myPrefs  (default to false)
     * @param {Boolean} opts.tags Also known as collections, tags, refer to the collection(s) that a Board belongs to. (default to false)
     * @param {module:api/DefaultApi~getBoardsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Board}
     */},{key:"getBoardsId",value:function getBoardsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'actions':opts['actions'],'boardStars':opts['boardStars'],'cards':opts['cards'],'card_pluginData':opts['cardPluginData'],'checklists':opts['checklists'],'customFields':opts['customFields'],'fields':opts['fields'],'labels':opts['labels'],'lists':opts['lists'],'members':opts['members'],'memberships':opts['memberships'],'pluginData':opts['pluginData'],'organization':opts['organization'],'organization_pluginData':opts['organizationPluginData'],'myPrefs':opts['myPrefs'],'tags':opts['tags']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Board["default"];return this.apiClient.callApi('/boards/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdActions operation.
     * @callback module:api/DefaultApi~getBoardsIdActionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Actions of a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} boardId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
     * @param {module:api/DefaultApi~getBoardsIdActionsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getBoardsIdActions",value:function getBoardsIdActions(key,token,boardId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdActions");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdActions");}// verify the required parameter 'boardId' is set
if(boardId===undefined||boardId===null){throw new _Error["default"]("Missing the required parameter 'boardId' when calling getBoardsIdActions");}var pathParams={'boardId':boardId};var queryParams={'key':key,'token':token,'filter':opts['filter']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{boardId}/actions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdBoardplugins operation.
     * @callback module:api/DefaultApi~getBoardsIdBoardpluginsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Plugin>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Enabled Power-Ups on Board
     * Get the enabled Power-Ups on a board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Board
     * @param {module:api/DefaultApi~getBoardsIdBoardpluginsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Plugin>}
     */},{key:"getBoardsIdBoardplugins",value:function getBoardsIdBoardplugins(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdBoardplugins");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdBoardplugins");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdBoardplugins");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Plugin["default"]];return this.apiClient.callApi('/boards/{id}/boardPlugins','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdBoardstars operation.
     * @callback module:api/DefaultApi~getBoardsIdBoardstarsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfBoardStars>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get boardStars on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} boardId 
     * @param {String} filter Valid values: mine, none
     * @param {module:api/DefaultApi~getBoardsIdBoardstarsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfBoardStars>}
     */},{key:"getBoardsIdBoardstars",value:function getBoardsIdBoardstars(key,token,boardId,filter,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdBoardstars");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdBoardstars");}// verify the required parameter 'boardId' is set
if(boardId===undefined||boardId===null){throw new _Error["default"]("Missing the required parameter 'boardId' when calling getBoardsIdBoardstars");}// verify the required parameter 'filter' is set
if(filter===undefined||filter===null){throw new _Error["default"]("Missing the required parameter 'filter' when calling getBoardsIdBoardstars");}var pathParams={'boardId':boardId,'filter':filter};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfBoardStars["default"]];return this.apiClient.callApi('/boards/{boardId}/boardStars','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdCards operation.
     * @callback module:api/DefaultApi~getBoardsIdCardsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Cards on a Board
     * Get all of the open Cards on a Board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id 
     * @param {module:api/DefaultApi~getBoardsIdCardsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getBoardsIdCards",value:function getBoardsIdCards(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdCards");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdCards");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdCards");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/cards','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdCardsFilter operation.
     * @callback module:api/DefaultApi~getBoardsIdCardsFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get filtered Cards on a Board
     * Get the Cards on a Board that match a given filter.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the Board
     * @param {module:model/String} filter Valid Values: all, closed, none, open, visible.
     * @param {module:api/DefaultApi~getBoardsIdCardsFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getBoardsIdCardsFilter",value:function getBoardsIdCardsFilter(key,token,id,filter,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdCardsFilter");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdCardsFilter");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdCardsFilter");}// verify the required parameter 'filter' is set
if(filter===undefined||filter===null){throw new _Error["default"]("Missing the required parameter 'filter' when calling getBoardsIdCardsFilter");}var pathParams={'id':id,'filter':filter};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/cards/{filter}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdCardsIdcard operation.
     * @callback module:api/DefaultApi~getBoardsIdCardsIdcardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Card on a Board
     * Get a single Card on a Board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the board
     * @param {String} idCard The id the card to retrieve.
     * @param {module:api/DefaultApi~getBoardsIdCardsIdcardCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getBoardsIdCardsIdcard",value:function getBoardsIdCardsIdcard(key,token,id,idCard,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdCardsIdcard");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdCardsIdcard");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdCardsIdcard");}// verify the required parameter 'idCard' is set
if(idCard===undefined||idCard===null){throw new _Error["default"]("Missing the required parameter 'idCard' when calling getBoardsIdCardsIdcard");}var pathParams={'id':id,'idCard':idCard};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/cards/{idCard}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdCustomfields operation.
     * @callback module:api/DefaultApi~getBoardsIdCustomfieldsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomField>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Custom Fields for Board
     * Get the Custom Field Definitions that exist on a board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the board
     * @param {module:api/DefaultApi~getBoardsIdCustomfieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomField>}
     */},{key:"getBoardsIdCustomfields",value:function getBoardsIdCustomfields(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdCustomfields");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdCustomfields");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdCustomfields");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_CustomField["default"]];return this.apiClient.callApi('/boards/{id}/customFields','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdField operation.
     * @callback module:api/DefaultApi~getBoardsIdFieldCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a field on a Board
     * Get a single, specific field on a board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the board.
     * @param {String} field The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
     * @param {module:api/DefaultApi~getBoardsIdFieldCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getBoardsIdField",value:function getBoardsIdField(key,token,id,field,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdField");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdField");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdField");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling getBoardsIdField");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/{field}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdLabels operation.
     * @callback module:api/DefaultApi~getBoardsIdLabelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Labels on a Board
     * Get all of the Labels on a Board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Board.
     * @param {Object} opts Optional parameters
     * @param {module:model/Label} opts.fields The fields to be returned for the Labels.
     * @param {Number} opts.limit The number of Labels to be returned. (default to 50)
     * @param {module:api/DefaultApi~getBoardsIdLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getBoardsIdLabels",value:function getBoardsIdLabels(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdLabels");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdLabels");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdLabels");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields'],'limit':opts['limit']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/labels','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdLists operation.
     * @callback module:api/DefaultApi~getBoardsIdListsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Lists on a Board
     * Get the Lists on a Board
     * @param {String} id The ID of the board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {module:model/ViewFilter} opts.cards Filter to apply to Cards.
     * @param {String} opts.cardFields `all` or a comma-separated list of card [fields](#card-object) (default to 'all')
     * @param {module:model/ViewFilter} opts.filter Filter to apply to Lists
     * @param {String} opts.fields `all` or a comma-separated list of list [fields](#list-object) (default to 'all')
     * @param {module:api/DefaultApi~getBoardsIdListsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getBoardsIdLists",value:function getBoardsIdLists(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdLists");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdLists");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdLists");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'cards':opts['cards'],'card_fields':opts['cardFields'],'filter':opts['filter'],'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/lists','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdListsFilter operation.
     * @callback module:api/DefaultApi~getBoardsIdListsFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get filtered Lists on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the board
     * @param {module:model/ViewFilter} filter One of `all`, `closed`, `none`, `open`
     * @param {module:api/DefaultApi~getBoardsIdListsFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getBoardsIdListsFilter",value:function getBoardsIdListsFilter(key,token,id,filter,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdListsFilter");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdListsFilter");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdListsFilter");}// verify the required parameter 'filter' is set
if(filter===undefined||filter===null){throw new _Error["default"]("Missing the required parameter 'filter' when calling getBoardsIdListsFilter");}var pathParams={'id':id,'filter':filter};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/lists/{filter}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdMembers operation.
     * @callback module:api/DefaultApi~getBoardsIdMembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Members of a Board
     * Get the Members for a board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the board
     * @param {module:api/DefaultApi~getBoardsIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getBoardsIdMembers",value:function getBoardsIdMembers(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdMembers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdMembers");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdMembers");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/members','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getBoardsIdMemberships operation.
     * @callback module:api/DefaultApi~getBoardsIdMembershipsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Memberships} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Memberships of a Board
     * Get information about the memberships users have to the board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the board
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter One of `admins`, `all`, `none`, `normal` (default to 'all')
     * @param {Boolean} opts.activity Works for premium organizations only. (default to false)
     * @param {Boolean} opts.orgMemberType Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`. (default to false)
     * @param {Boolean} opts.member Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/). (default to false)
     * @param {module:model/MemberFields} opts.memberFields Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).
     * @param {module:api/DefaultApi~getBoardsIdMembershipsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Memberships}
     */},{key:"getBoardsIdMemberships",value:function getBoardsIdMemberships(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getBoardsIdMemberships");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getBoardsIdMemberships");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getBoardsIdMemberships");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter'],'activity':opts['activity'],'orgMemberType':opts['orgMemberType'],'member':opts['member'],'member_fields':opts['memberFields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Memberships["default"];return this.apiClient.callApi('/boards/{id}/memberships','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsId operation.
     * @callback module:api/DefaultApi~getCardsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Card} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Card
     * Get a card by its ID
     * @param {String} id The ID of the Card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`
     * @param {String} opts.actions See the [Actions Nested Resource](ref:actions-nested-resource)
     * @param {module:model/OneOfstringboolean} opts.attachments `true`, `false`, or `cover` (default to 'false')
     * @param {String} opts.attachmentFields `all` or a comma-separated list of attachment [fields](ref:attachments) (default to 'all')
     * @param {Boolean} opts.members Whether to return member objects for members on the card (default to false)
     * @param {String} opts.memberFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
     * @param {Boolean} opts.membersVoted Whether to return member objects for members who voted on the card (default to false)
     * @param {String} opts.memberVotedFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
     * @param {Boolean} opts.checkItemStates  (default to false)
     * @param {String} opts.checklists Whether to return the checklists on the card. `all` or `none` (default to 'none')
     * @param {String} opts.checklistFields `all` or a comma-separated list of `idBoard,idCard,name,pos` (default to 'all')
     * @param {Boolean} opts.board Whether to return the board object the card is on (default to false)
     * @param {String} opts.boardFields `all` or a comma-separated list of board [fields](#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`
     * @param {Boolean} opts.list See the [Lists Nested Resource](ref:lists-nested-resource) (default to false)
     * @param {Boolean} opts.pluginData Whether to include pluginData on the card with the response (default to false)
     * @param {Boolean} opts.stickers Whether to include sticker models with the response (default to false)
     * @param {String} opts.stickerFields `all` or a comma-separated list of sticker [fields](ref:stickers) (default to 'all')
     * @param {Boolean} opts.customFieldItems Whether to include the customFieldItems (default to false)
     * @param {module:api/DefaultApi~getCardsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Card}
     */},{key:"getCardsId",value:function getCardsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields'],'actions':opts['actions'],'attachments':opts['attachments'],'attachment_fields':opts['attachmentFields'],'members':opts['members'],'member_fields':opts['memberFields'],'membersVoted':opts['membersVoted'],'memberVoted_fields':opts['memberVotedFields'],'checkItemStates':opts['checkItemStates'],'checklists':opts['checklists'],'checklist_fields':opts['checklistFields'],'board':opts['board'],'board_fields':opts['boardFields'],'list':opts['list'],'pluginData':opts['pluginData'],'stickers':opts['stickers'],'sticker_fields':opts['stickerFields'],'customFieldItems':opts['customFieldItems']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Card["default"];return this.apiClient.callApi('/cards/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdActions operation.
     * @callback module:api/DefaultApi~getCardsIdActionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfAction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Actions on a Card
     * List the Actions on a Card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). (default to 'commentCard, updateCard:idList')
     * @param {module:api/DefaultApi~getCardsIdActionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfAction>}
     */},{key:"getCardsIdActions",value:function getCardsIdActions(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdActions");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdActions");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdActions");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfAction["default"]];return this.apiClient.callApi('/cards/{id}/actions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdAttachments operation.
     * @callback module:api/DefaultApi~getCardsIdAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfAttachment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Attachments on a Card
     * List the attachments on a card
     * @param {String} id The ID of the Card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} fields `all` or a comma-separated list of attachment [fields](ref:attachments)
     * @param {String} filter Use `cover` to restrict to just the cover attachment
     * @param {module:api/DefaultApi~getCardsIdAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfAttachment>}
     */},{key:"getCardsIdAttachments",value:function getCardsIdAttachments(id,key,token,fields,filter,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdAttachments");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdAttachments");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdAttachments");}// verify the required parameter 'fields' is set
if(fields===undefined||fields===null){throw new _Error["default"]("Missing the required parameter 'fields' when calling getCardsIdAttachments");}// verify the required parameter 'filter' is set
if(filter===undefined||filter===null){throw new _Error["default"]("Missing the required parameter 'filter' when calling getCardsIdAttachments");}var pathParams={'id':id,'fields':fields,'filter':filter};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfAttachment["default"]];return this.apiClient.callApi('/cards/{id}/attachments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdAttachmentsIdattachment operation.
     * @callback module:api/DefaultApi~getCardsIdAttachmentsIdattachmentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfAttachment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get an Attachment on a Card
     * Get a specific Attachment on a Card.
     * @param {String} id The ID of the Card
     * @param {String} idAttachment The ID of the Attachment
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/AnyOfAttachmentFields>} opts.fields The Attachment fields to be included in the response.
     * @param {module:api/DefaultApi~getCardsIdAttachmentsIdattachmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfAttachment>}
     */},{key:"getCardsIdAttachmentsIdattachment",value:function getCardsIdAttachmentsIdattachment(id,idAttachment,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdAttachmentsIdattachment");}// verify the required parameter 'idAttachment' is set
if(idAttachment===undefined||idAttachment===null){throw new _Error["default"]("Missing the required parameter 'idAttachment' when calling getCardsIdAttachmentsIdattachment");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdAttachmentsIdattachment");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdAttachmentsIdattachment");}var pathParams={'id':id,'idAttachment':idAttachment};var queryParams={'key':key,'token':token,'fields':this.apiClient.buildCollectionParam(opts['fields'],'csv')};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfAttachment["default"]];return this.apiClient.callApi('/cards/{id}/attachments/{idAttachment}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdBoard operation.
     * @callback module:api/DefaultApi~getCardsIdBoardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Board the Card is on
     * Get the board a card is on
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma-separated list of board [fields](#board-object) (default to 'all')
     * @param {module:api/DefaultApi~getCardsIdBoardCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCardsIdBoard",value:function getCardsIdBoard(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdBoard");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdBoard");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdBoard");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/board','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdCheckitemIdcheckitem operation.
     * @callback module:api/DefaultApi~getCardsIdCheckitemIdcheckitemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get checkItem on a Card
     * Get a specific checkItem on a card
     * @param {String} id The ID of the Card
     * @param {String} idCheckItem The ID of the checkitem
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma-separated list of `name,nameData,pos,state,type` (default to 'name,nameData,pos,state')
     * @param {module:api/DefaultApi~getCardsIdCheckitemIdcheckitemCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCardsIdCheckitemIdcheckitem",value:function getCardsIdCheckitemIdcheckitem(id,idCheckItem,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdCheckitemIdcheckitem");}// verify the required parameter 'idCheckItem' is set
if(idCheckItem===undefined||idCheckItem===null){throw new _Error["default"]("Missing the required parameter 'idCheckItem' when calling getCardsIdCheckitemIdcheckitem");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdCheckitemIdcheckitem");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdCheckitemIdcheckitem");}var pathParams={'id':id,'idCheckItem':idCheckItem};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/checkItem/{idCheckItem}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdCheckitemstates operation.
     * @callback module:api/DefaultApi~getCardsIdCheckitemstatesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get checkItems on a Card
     * Get the completed checklist items on a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma-separated list of: `idCheckItem`, `state` (default to 'all')
     * @param {module:api/DefaultApi~getCardsIdCheckitemstatesCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCardsIdCheckitemstates",value:function getCardsIdCheckitemstates(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdCheckitemstates");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdCheckitemstates");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdCheckitemstates");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/checkItemStates','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdChecklists operation.
     * @callback module:api/DefaultApi~getCardsIdChecklistsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Checklists on a Card
     * Get the checklists on a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.checkItems `all` or `none` (default to 'all')
     * @param {module:model/String} opts.checkItemFields `all` or a comma-separated list of: `name,nameData,pos,state,type` (default to 'name,nameData,pos,state')
     * @param {module:model/String} opts.filter `all` or `none` (default to 'all')
     * @param {module:model/String} opts.fields `all` or a comma-separated list of: `idBoard,idCard,name,pos` (default to 'all')
     * @param {module:api/DefaultApi~getCardsIdChecklistsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCardsIdChecklists",value:function getCardsIdChecklists(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdChecklists");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdChecklists");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdChecklists");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'checkItems':opts['checkItems'],'checkItem_fields':opts['checkItemFields'],'filter':opts['filter'],'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/checklists','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdCustomfielditems operation.
     * @callback module:api/DefaultApi~getCardsIdCustomfielditemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomFieldItems>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Custom Field Items for a Card
     * Get the custom field items for a card.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {module:api/DefaultApi~getCardsIdCustomfielditemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomFieldItems>}
     */},{key:"getCardsIdCustomfielditems",value:function getCardsIdCustomfielditems(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdCustomfielditems");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdCustomfielditems");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdCustomfielditems");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_CustomFieldItems["default"]];return this.apiClient.callApi('/cards/{id}/customFieldItems','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdField operation.
     * @callback module:api/DefaultApi~getCardsIdFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Card} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a field on a Card
     * Get a specific property of a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {module:model/CardFields} field The desired field.
     * @param {module:api/DefaultApi~getCardsIdFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Card}
     */},{key:"getCardsIdField",value:function getCardsIdField(key,token,id,field,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdField");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdField");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdField");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling getCardsIdField");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Card["default"];return this.apiClient.callApi('/cards/{id}/{field}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdList operation.
     * @callback module:api/DefaultApi~getCardsIdListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the List of a Card
     * Get the list a card is in
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/) (default to 'all')
     * @param {module:api/DefaultApi~getCardsIdListCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCardsIdList",value:function getCardsIdList(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdList");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdList");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdList");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/list','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdMembers operation.
     * @callback module:api/DefaultApi~getCardsIdMembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Members of a Card
     * Get the members on a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) (default to 'avatarHash,fullName,initials,username')
     * @param {module:api/DefaultApi~getCardsIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCardsIdMembers",value:function getCardsIdMembers(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdMembers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdMembers");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdMembers");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/members','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdMembersvoted operation.
     * @callback module:api/DefaultApi~getCardsIdMembersvotedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Members who have voted on a Card
     * Get the members who have voted on a card
     * @param {String} id The ID of the Card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) (default to 'avatarHash,fullName,initials,username')
     * @param {module:api/DefaultApi~getCardsIdMembersvotedCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCardsIdMembersvoted",value:function getCardsIdMembersvoted(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdMembersvoted");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdMembersvoted");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdMembersvoted");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/membersVoted','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdPlugindata operation.
     * @callback module:api/DefaultApi~getCardsIdPlugindataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get pluginData on a Card
     * Get any shared pluginData on a card.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {module:api/DefaultApi~getCardsIdPlugindataCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCardsIdPlugindata",value:function getCardsIdPlugindata(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdPlugindata");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdPlugindata");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdPlugindata");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/pluginData','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdStickers operation.
     * @callback module:api/DefaultApi~getCardsIdStickersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Stickers on a Card
     * Get the stickers on a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma-separated list of sticker [fields](ref:stickers) (default to 'all')
     * @param {module:api/DefaultApi~getCardsIdStickersCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCardsIdStickers",value:function getCardsIdStickers(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdStickers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdStickers");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdStickers");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/stickers','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCardsIdStickersIdsticker operation.
     * @callback module:api/DefaultApi~getCardsIdStickersIdstickerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Sticker on a Card
     * Get a specific sticker on a card
     * @param {String} id The ID of the Card
     * @param {String} idSticker The ID of the sticker
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma-separated list of sticker [fields](ref:stickers) (default to 'all')
     * @param {module:api/DefaultApi~getCardsIdStickersIdstickerCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCardsIdStickersIdsticker",value:function getCardsIdStickersIdsticker(id,idSticker,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCardsIdStickersIdsticker");}// verify the required parameter 'idSticker' is set
if(idSticker===undefined||idSticker===null){throw new _Error["default"]("Missing the required parameter 'idSticker' when calling getCardsIdStickersIdsticker");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCardsIdStickersIdsticker");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCardsIdStickersIdsticker");}var pathParams={'id':id,'idSticker':idSticker};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/stickers/{idSticker}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getChecklistsId operation.
     * @callback module:api/DefaultApi~getChecklistsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Checklist
     * @param {String} id ID of a checklist.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.cards Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](ref:cards-nested-resource). (default to 'none')
     * @param {module:model/String} opts.checkItems The check items on the list to return. One of: `all`, `none`. (default to 'all')
     * @param {module:model/String} opts.checkItemFields The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type` (default to 'name, nameData, pos, state')
     * @param {String} opts.fields `all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/) (default to 'all')
     * @param {module:api/DefaultApi~getChecklistsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getChecklistsId",value:function getChecklistsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getChecklistsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getChecklistsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getChecklistsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'cards':opts['cards'],'checkItems':opts['checkItems'],'checkItem_fields':opts['checkItemFields'],'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getChecklistsIdBoard operation.
     * @callback module:api/DefaultApi~getChecklistsIdBoardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Board the Checklist is on
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of a checklist.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) (default to 'all')
     * @param {module:api/DefaultApi~getChecklistsIdBoardCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getChecklistsIdBoard",value:function getChecklistsIdBoard(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getChecklistsIdBoard");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getChecklistsIdBoard");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getChecklistsIdBoard");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}/board','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getChecklistsIdCards operation.
     * @callback module:api/DefaultApi~getChecklistsIdCardsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Card a Checklist is on
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of a checklist.
     * @param {module:api/DefaultApi~getChecklistsIdCardsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getChecklistsIdCards",value:function getChecklistsIdCards(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getChecklistsIdCards");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getChecklistsIdCards");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getChecklistsIdCards");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}/cards','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getChecklistsIdCheckitems operation.
     * @callback module:api/DefaultApi~getChecklistsIdCheckitemsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Checkitems on a Checklist
     * @param {String} id ID of a checklist.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter One of: `all`, `none`. (default to 'all')
     * @param {module:model/String} opts.fields One of: `all`, `name`, `nameData`, `pos`, `state`, `type`. (default to 'name, nameData, pos, state')
     * @param {module:api/DefaultApi~getChecklistsIdCheckitemsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getChecklistsIdCheckitems",value:function getChecklistsIdCheckitems(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getChecklistsIdCheckitems");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getChecklistsIdCheckitems");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getChecklistsIdCheckitems");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter'],'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}/checkItems','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getChecklistsIdCheckitemsIdcheckitem operation.
     * @callback module:api/DefaultApi~getChecklistsIdCheckitemsIdcheckitemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Checkitem on a Checklist
     * @param {String} id ID of a checklist.
     * @param {String} idCheckItem ID of the check item to retrieve.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields One of: `all`, `name`, `nameData`, `pos`, `state`, `type`. (default to 'name, nameData, pos, state')
     * @param {module:api/DefaultApi~getChecklistsIdCheckitemsIdcheckitemCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getChecklistsIdCheckitemsIdcheckitem",value:function getChecklistsIdCheckitemsIdcheckitem(id,idCheckItem,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getChecklistsIdCheckitemsIdcheckitem");}// verify the required parameter 'idCheckItem' is set
if(idCheckItem===undefined||idCheckItem===null){throw new _Error["default"]("Missing the required parameter 'idCheckItem' when calling getChecklistsIdCheckitemsIdcheckitem");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getChecklistsIdCheckitemsIdcheckitem");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getChecklistsIdCheckitemsIdcheckitem");}var pathParams={'id':id,'idCheckItem':idCheckItem};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}/checkItems/{idCheckItem}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getChecklistsIdField operation.
     * @callback module:api/DefaultApi~getChecklistsIdFieldCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get field on a Checklist
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of a checklist.
     * @param {module:model/String} field Field to update.
     * @param {module:api/DefaultApi~getChecklistsIdFieldCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getChecklistsIdField",value:function getChecklistsIdField(key,token,id,field,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getChecklistsIdField");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getChecklistsIdField");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getChecklistsIdField");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling getChecklistsIdField");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}/{field}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCustomfieldsId operation.
     * @callback module:api/DefaultApi~getCustomfieldsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Custom Field
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the Custom Field.
     * @param {module:api/DefaultApi~getCustomfieldsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomField}
     */},{key:"getCustomfieldsId",value:function getCustomfieldsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCustomfieldsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCustomfieldsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCustomfieldsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_CustomField["default"];return this.apiClient.callApi('/customFields/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCustomfieldsIdOptions operation.
     * @callback module:api/DefaultApi~getCustomfieldsIdOptionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add Option to Custom Field dropdown
     * Add an option to a dropdown Custom Field
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the customfield.
     * @param {module:api/DefaultApi~getCustomfieldsIdOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCustomfieldsIdOptions",value:function getCustomfieldsIdOptions(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCustomfieldsIdOptions");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCustomfieldsIdOptions");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCustomfieldsIdOptions");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/customFields/{id}/options','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getCustomfieldsOptionsIdcustomfieldoption operation.
     * @callback module:api/DefaultApi~getCustomfieldsOptionsIdcustomfieldoptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Option of Custom Field dropdown
     * Retrieve a specific, existing Option on a given dropdown-type Custom Field
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the customfielditem.
     * @param {String} idCustomFieldOption ID of the customfieldoption to retrieve.
     * @param {module:api/DefaultApi~getCustomfieldsOptionsIdcustomfieldoptionCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getCustomfieldsOptionsIdcustomfieldoption",value:function getCustomfieldsOptionsIdcustomfieldoption(key,token,id,idCustomFieldOption,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getCustomfieldsOptionsIdcustomfieldoption");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getCustomfieldsOptionsIdcustomfieldoption");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getCustomfieldsOptionsIdcustomfieldoption");}// verify the required parameter 'idCustomFieldOption' is set
if(idCustomFieldOption===undefined||idCustomFieldOption===null){throw new _Error["default"]("Missing the required parameter 'idCustomFieldOption' when calling getCustomfieldsOptionsIdcustomfieldoption");}var pathParams={'id':id,'idCustomFieldOption':idCustomFieldOption};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/customFields/{id}/options/{idCustomFieldOption}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getEnterprisesId operation.
     * @callback module:api/DefaultApi~getEnterprisesIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get an Enterprise
     * Get an enterprise by its ID.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the enterprise to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. Read the SCIM documentation [here]() for more information on filtering), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations` (default to 'all')
     * @param {String} opts.members One of: `none`, `normal`, `admins`, `owners`, `all` (default to 'none')
     * @param {String} opts.memberFields One of: `avatarHash`, `fullName`, `initials`, `username` (default to 'avatarHash, fullName, initials, username')
     * @param {String} opts.memberFilter Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated. (default to 'none')
     * @param {String} opts.memberSort This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
     * @param {String} opts.memberSortBy Deprecated: Please use member_sort. This parameter expects a [SCIM-style sorting value](/cloud/trello/scim/). Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state. (default to 'none')
     * @param {String} opts.memberSortOrder Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc` (default to 'id')
     * @param {Number} opts.memberStartIndex Any integer between 0 and 100.
     * @param {Number} opts.memberCount 0 to 100
     * @param {String} opts.organizations One of: `none`, `members`, `public`, `all` (default to 'none')
     * @param {String} opts.organizationFields Any valid value that the [nested organization field resource]() accepts. (default to 'none')
     * @param {Boolean} opts.organizationPaidAccounts  (default to false)
     * @param {String} opts.organizationMemberships Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated` (default to 'none')
     * @param {module:api/DefaultApi~getEnterprisesIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getEnterprisesId",value:function getEnterprisesId(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getEnterprisesId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getEnterprisesId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getEnterprisesId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields'],'members':opts['members'],'member_fields':opts['memberFields'],'member_filter':opts['memberFilter'],'member_sort':opts['memberSort'],'member_sortBy':opts['memberSortBy'],'member_sortOrder':opts['memberSortOrder'],'member_startIndex':opts['memberStartIndex'],'member_count':opts['memberCount'],'organizations':opts['organizations'],'organization_fields':opts['organizationFields'],'organization_paid_accounts':opts['organizationPaidAccounts'],'organization_memberships':opts['organizationMemberships']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/enterprises/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getEnterprisesIdAdmins operation.
     * @callback module:api/DefaultApi~getEnterprisesIdAdminsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Enterprise} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Enterprise admin Members
     * Get an enterprise's admin members.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the enterprise to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Any valid value that the [nested member field resource]() accepts. (default to 'fullName, userName')
     * @param {module:api/DefaultApi~getEnterprisesIdAdminsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Enterprise}
     */},{key:"getEnterprisesIdAdmins",value:function getEnterprisesIdAdmins(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getEnterprisesIdAdmins");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getEnterprisesIdAdmins");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getEnterprisesIdAdmins");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Enterprise["default"];return this.apiClient.callApi('/enterprises/{id}/admins','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getEnterprisesIdAuditlog operation.
     * @callback module:api/DefaultApi~getEnterprisesIdAuditlogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get auditlog data for an Enterprise
     * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route.
     * @param {String} key The API key to use
     * @param {String} token The API token to use. Note: This must be an Enterprise admin's token.
     * @param {module:api/DefaultApi~getEnterprisesIdAuditlogCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getEnterprisesIdAuditlog",value:function getEnterprisesIdAuditlog(key,token,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getEnterprisesIdAuditlog");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getEnterprisesIdAuditlog");}var pathParams={};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/enterprises/{id}/auditlog','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getEnterprisesIdMembers operation.
     * @callback module:api/DefaultApi~getEnterprisesIdMembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Members of Enterprise
     * Get the members of an enterprise.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the Enterprise to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields A comma-seperated list of valid [member fields](member). (default to 'avatarHash, fullName, initials, username')
     * @param {String} opts.filter Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated.
     * @param {String} opts.sort This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
     * @param {String} opts.sortBy Deprecated: Please use `sort` instead. This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
     * @param {module:model/String} opts.sortOrder Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`. (default to 'null')
     * @param {Number} opts.startIndex Any integer between 0 and 9999.
     * @param {String} opts.count [SCIM-style filter](/cloud/trello/scim/). (default to 'none')
     * @param {String} opts.organizationFields Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. (default to 'displayName')
     * @param {String} opts.boardFields Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. (default to 'name')
     * @param {module:api/DefaultApi~getEnterprisesIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getEnterprisesIdMembers",value:function getEnterprisesIdMembers(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getEnterprisesIdMembers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getEnterprisesIdMembers");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getEnterprisesIdMembers");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields'],'filter':opts['filter'],'sort':opts['sort'],'sortBy':opts['sortBy'],'sortOrder':opts['sortOrder'],'startIndex':opts['startIndex'],'count':opts['count'],'organization_fields':opts['organizationFields'],'board_fields':opts['boardFields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/enterprises/{id}/members','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getEnterprisesIdMembersIdmember operation.
     * @callback module:api/DefaultApi~getEnterprisesIdMembersIdmemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Member of Enterprise
     * Get a specific member of an enterprise by ID.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the enterprise to retrieve.
     * @param {String} idMember An ID of a member resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields A comma separated list of any valid values that the [nested member field resource]() accepts. (default to 'avatarHash, fullName, initials, username')
     * @param {String} opts.organizationFields Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. (default to 'displayName')
     * @param {String} opts.boardFields Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. (default to 'name')
     * @param {module:api/DefaultApi~getEnterprisesIdMembersIdmemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */},{key:"getEnterprisesIdMembersIdmember",value:function getEnterprisesIdMembersIdmember(key,token,id,idMember,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getEnterprisesIdMembersIdmember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getEnterprisesIdMembersIdmember");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getEnterprisesIdMembersIdmember");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling getEnterprisesIdMembersIdmember");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token,'fields':opts['fields'],'organization_fields':opts['organizationFields'],'board_fields':opts['boardFields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Member["default"];return this.apiClient.callApi('/enterprises/{id}/members/{idMember}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getEnterprisesIdSignupurl operation.
     * @callback module:api/DefaultApi~getEnterprisesIdSignupurlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get signupUrl for Enterprise
     * Get the signup URL for an enterprise.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the enterprise to retrieve.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.authenticate  (default to false)
     * @param {Boolean} opts.confirmationAccepted  (default to false)
     * @param {String} opts.returnUrl Any valid URL. (default to 'null')
     * @param {Boolean} opts.tosAccepted Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP. (default to false)
     * @param {module:api/DefaultApi~getEnterprisesIdSignupurlCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getEnterprisesIdSignupurl",value:function getEnterprisesIdSignupurl(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getEnterprisesIdSignupurl");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getEnterprisesIdSignupurl");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getEnterprisesIdSignupurl");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'authenticate':opts['authenticate'],'confirmationAccepted':opts['confirmationAccepted'],'returnUrl':opts['returnUrl'],'tosAccepted':opts['tosAccepted']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/enterprises/{id}/signupUrl','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getEnterprisesIdTransferrableOrganizationIdOrganization operation.
     * @callback module:api/DefaultApi~getEnterprisesIdTransferrableOrganizationIdOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get whether an organization can be transferred to an enterprise.
     * Get whether an organization can be transferred to an enterprise.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the Enterprise to retrieve.
     * @param {String} idOrganization An ID of an Organization resource.
     * @param {module:api/DefaultApi~getEnterprisesIdTransferrableOrganizationIdOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */},{key:"getEnterprisesIdTransferrableOrganizationIdOrganization",value:function getEnterprisesIdTransferrableOrganizationIdOrganization(key,token,id,idOrganization,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getEnterprisesIdTransferrableOrganizationIdOrganization");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getEnterprisesIdTransferrableOrganizationIdOrganization");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getEnterprisesIdTransferrableOrganizationIdOrganization");}// verify the required parameter 'idOrganization' is set
if(idOrganization===undefined||idOrganization===null){throw new _Error["default"]("Missing the required parameter 'idOrganization' when calling getEnterprisesIdTransferrableOrganizationIdOrganization");}var pathParams={'id':id,'idOrganization':idOrganization};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Organization["default"];return this.apiClient.callApi('/enterprises/{id}/transferrable/organization/{idOrganization}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getLabelsId operation.
     * @callback module:api/DefaultApi~getLabelsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Label
     * Get information about a single Label.
     * @param {String} id The ID of the Label
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields all or a comma-separated list of [fields](#label-object) (default to 'all')
     * @param {module:api/DefaultApi~getLabelsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getLabelsId",value:function getLabelsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getLabelsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getLabelsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getLabelsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/labels/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getListsId operation.
     * @callback module:api/DefaultApi~getListsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a List
     * Get information about a List
     * @param {String} id The ID of the list
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma separated list of List field names. (default to 'name,closed,idBoard,pos')
     * @param {module:api/DefaultApi~getListsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getListsId",value:function getListsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getListsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getListsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getListsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getListsIdActions operation.
     * @callback module:api/DefaultApi~getListsIdActionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Actions for a List
     * Get the Actions on a List
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the list
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
     * @param {module:api/DefaultApi~getListsIdActionsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getListsIdActions",value:function getListsIdActions(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getListsIdActions");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getListsIdActions");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getListsIdActions");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists/{id}/actions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getListsIdBoard operation.
     * @callback module:api/DefaultApi~getListsIdBoardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Board a List is on
     * Get the board a list is on
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the list
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields `all` or a comma-separated list of board [fields](#board-object) (default to 'all')
     * @param {module:api/DefaultApi~getListsIdBoardCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getListsIdBoard",value:function getListsIdBoard(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getListsIdBoard");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getListsIdBoard");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getListsIdBoard");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists/{id}/board','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getListsIdCards operation.
     * @callback module:api/DefaultApi~getListsIdCardsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Cards in a List
     * List the cards in a list
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the list
     * @param {module:api/DefaultApi~getListsIdCardsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getListsIdCards",value:function getListsIdCards(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getListsIdCards");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getListsIdCards");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getListsIdCards");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists/{id}/cards','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdActions operation.
     * @callback module:api/DefaultApi~getMembersIdActionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfMember>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Member's Actions
     * List the actions for a member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
     * @param {module:api/DefaultApi~getMembersIdActionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfMember>}
     */},{key:"getMembersIdActions",value:function getMembersIdActions(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdActions");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdActions");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdActions");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfMember["default"]];return this.apiClient.callApi('/members/{id}/actions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdBoardbackgrounds operation.
     * @callback module:api/DefaultApi~getMembersIdBoardbackgroundsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfBoardBackground>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Member's custom Board backgrounds
     * Get a member's custom board backgrounds
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter One of: `all`, `custom`, `default`, `none`, `premium` (default to 'all')
     * @param {module:api/DefaultApi~getMembersIdBoardbackgroundsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfBoardBackground>}
     */},{key:"getMembersIdBoardbackgrounds",value:function getMembersIdBoardbackgrounds(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdBoardbackgrounds");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdBoardbackgrounds");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdBoardbackgrounds");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfBoardBackground["default"]];return this.apiClient.callApi('/members/{id}/boardBackgrounds','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdBoardbackgroundsIdbackground operation.
     * @callback module:api/DefaultApi~getMembersIdBoardbackgroundsIdbackgroundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoardBackground} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a boardBackground of a Member
     * Get a member's board background
     * @param {String} id The ID or username of the member
     * @param {String} idBackground The ID of the board background
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile` (default to 'all')
     * @param {module:api/DefaultApi~getMembersIdBoardbackgroundsIdbackgroundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BoardBackground}
     */},{key:"getMembersIdBoardbackgroundsIdbackground",value:function getMembersIdBoardbackgroundsIdbackground(id,idBackground,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdBoardbackgroundsIdbackground");}// verify the required parameter 'idBackground' is set
if(idBackground===undefined||idBackground===null){throw new _Error["default"]("Missing the required parameter 'idBackground' when calling getMembersIdBoardbackgroundsIdbackground");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdBoardbackgroundsIdbackground");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdBoardbackgroundsIdbackground");}var pathParams={'id':id,'idBackground':idBackground};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_BoardBackground["default"];return this.apiClient.callApi('/members/{id}/boardBackgrounds/{idBackground}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdBoards operation.
     * @callback module:api/DefaultApi~getMembersIdBoardsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Board>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Boards that Member belongs to
     * Lists the boards that the user is a member of.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred` (default to 'all')
     * @param {module:model/BoardFields} opts.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:model/String} opts.lists Which lists to include with the boards. One of: `all`, `closed`, `none`, `open` (default to 'none')
     * @param {Boolean} opts.organization Whether to include the Organization object with the Boards (default to false)
     * @param {module:model/OrganizationFields} opts.organizationFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getMembersIdBoardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Board>}
     */},{key:"getMembersIdBoards",value:function getMembersIdBoards(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdBoards");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdBoards");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdBoards");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter'],'fields':opts['fields'],'lists':opts['lists'],'organization':opts['organization'],'organization_fields':opts['organizationFields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Board["default"]];return this.apiClient.callApi('/members/{id}/boards','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdBoardsinvited operation.
     * @callback module:api/DefaultApi~getMembersIdBoardsinvitedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Board>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Boards the Member has been invited to
     * Get the boards the member has been invited to
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {module:model/BoardFields} opts.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getMembersIdBoardsinvitedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Board>}
     */},{key:"getMembersIdBoardsinvited",value:function getMembersIdBoardsinvited(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdBoardsinvited");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdBoardsinvited");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdBoardsinvited");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Board["default"]];return this.apiClient.callApi('/members/{id}/boardsInvited','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdBoardstars operation.
     * @callback module:api/DefaultApi~getMembersIdBoardstarsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Member's boardStars
     * List a member's board stars
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {module:api/DefaultApi~getMembersIdBoardstarsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getMembersIdBoardstars",value:function getMembersIdBoardstars(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdBoardstars");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdBoardstars");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdBoardstars");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/members/{id}/boardStars','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdBoardstarsIdstar operation.
     * @callback module:api/DefaultApi~getMembersIdBoardstarsIdstarCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoardStars} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a boardStar of Member
     * Get a specific boardStar
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {String} idStar The ID of the board star
     * @param {module:api/DefaultApi~getMembersIdBoardstarsIdstarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BoardStars}
     */},{key:"getMembersIdBoardstarsIdstar",value:function getMembersIdBoardstarsIdstar(key,token,id,idStar,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdBoardstarsIdstar");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdBoardstarsIdstar");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdBoardstarsIdstar");}// verify the required parameter 'idStar' is set
if(idStar===undefined||idStar===null){throw new _Error["default"]("Missing the required parameter 'idStar' when calling getMembersIdBoardstarsIdstar");}var pathParams={'id':id,'idStar':idStar};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_BoardStars["default"];return this.apiClient.callApi('/members/{id}/boardStars/{idStar}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdCards operation.
     * @callback module:api/DefaultApi~getMembersIdCardsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Card>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Cards the Member is on
     * Gets the cards a member is on
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter One of: `all`, `closed`, `none`, `open`, `visible` (default to 'visible')
     * @param {module:api/DefaultApi~getMembersIdCardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Card>}
     */},{key:"getMembersIdCards",value:function getMembersIdCards(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdCards");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdCards");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdCards");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Card["default"]];return this.apiClient.callApi('/members/{id}/cards','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdCustomboardbackgrounds operation.
     * @callback module:api/DefaultApi~getMembersIdCustomboardbackgroundsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BoardBackground>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Member's custom Board Backgrounds
     * Get a member's custom board backgrounds
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {module:api/DefaultApi~getMembersIdCustomboardbackgroundsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BoardBackground>}
     */},{key:"getMembersIdCustomboardbackgrounds",value:function getMembersIdCustomboardbackgrounds(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdCustomboardbackgrounds");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdCustomboardbackgrounds");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdCustomboardbackgrounds");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_BoardBackground["default"]];return this.apiClient.callApi('/members/{id}/customBoardBackgrounds','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdCustomboardbackgroundsIdbackground operation.
     * @callback module:api/DefaultApi~getMembersIdCustomboardbackgroundsIdbackgroundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoardBackground} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get custom Board Background of Member
     * Get a specific custom board background
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {module:model/OneOfstringstring} id The ID or username of the member
     * @param {String} idBackground The ID of the custom background
     * @param {module:api/DefaultApi~getMembersIdCustomboardbackgroundsIdbackgroundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BoardBackground}
     */},{key:"getMembersIdCustomboardbackgroundsIdbackground",value:function getMembersIdCustomboardbackgroundsIdbackground(key,token,id,idBackground,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdCustomboardbackgroundsIdbackground");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdCustomboardbackgroundsIdbackground");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdCustomboardbackgroundsIdbackground");}// verify the required parameter 'idBackground' is set
if(idBackground===undefined||idBackground===null){throw new _Error["default"]("Missing the required parameter 'idBackground' when calling getMembersIdCustomboardbackgroundsIdbackground");}var pathParams={'id':id,'idBackground':idBackground};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_BoardBackground["default"];return this.apiClient.callApi('/members/{id}/customBoardBackgrounds/{idBackground}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdCustomemoji operation.
     * @callback module:api/DefaultApi~getMembersIdCustomemojiCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomEmoji>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Member's customEmojis
     * Get a Member's uploaded custom Emojis
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {module:api/DefaultApi~getMembersIdCustomemojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomEmoji>}
     */},{key:"getMembersIdCustomemoji",value:function getMembersIdCustomemoji(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdCustomemoji");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdCustomemoji");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdCustomemoji");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_CustomEmoji["default"]];return this.apiClient.callApi('/members/{id}/customEmoji','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdCustomstickers operation.
     * @callback module:api/DefaultApi~getMembersIdCustomstickersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomSticker>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Member's custom Stickers
     * Get a Member's uploaded stickers
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {module:api/DefaultApi~getMembersIdCustomstickersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomSticker>}
     */},{key:"getMembersIdCustomstickers",value:function getMembersIdCustomstickers(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdCustomstickers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdCustomstickers");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdCustomstickers");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_CustomSticker["default"]];return this.apiClient.callApi('/members/{id}/customStickers','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdCustomstickersIdsticker operation.
     * @callback module:api/DefaultApi~getMembersIdCustomstickersIdstickerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomSticker} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Member's custom Sticker
     * Get a Member's custom Sticker
     * @param {String} id The ID or username of the member
     * @param {String} idSticker The ID of the uploaded sticker
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields `all` or a comma-separated list of `scaled`, `url` (default to 'all')
     * @param {module:api/DefaultApi~getMembersIdCustomstickersIdstickerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomSticker}
     */},{key:"getMembersIdCustomstickersIdsticker",value:function getMembersIdCustomstickersIdsticker(id,idSticker,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdCustomstickersIdsticker");}// verify the required parameter 'idSticker' is set
if(idSticker===undefined||idSticker===null){throw new _Error["default"]("Missing the required parameter 'idSticker' when calling getMembersIdCustomstickersIdsticker");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdCustomstickersIdsticker");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdCustomstickersIdsticker");}var pathParams={'id':id,'idSticker':idSticker};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_CustomSticker["default"];return this.apiClient.callApi('/members/{id}/customStickers/{idSticker}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdField operation.
     * @callback module:api/DefaultApi~getMembersIdFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a field on a Member
     * Get a particular property of a member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {module:model/MemberFields} field One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getMembersIdFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfMember}
     */},{key:"getMembersIdField",value:function getMembersIdField(key,token,id,field,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdField");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdField");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdField");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling getMembersIdField");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfMember["default"];return this.apiClient.callApi('/members/{id}/{field}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdNotifications operation.
     * @callback module:api/DefaultApi~getMembersIdNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Notification>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Member's Notifications
     * Get a member's notifications
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.entities  (default to false)
     * @param {Boolean} opts.display  (default to false)
     * @param {String} opts.filter  (default to 'all')
     * @param {String} opts.readFilter One of: `all`, `read`, `unread` (default to 'all')
     * @param {String} opts.fields `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/) (default to 'all')
     * @param {Number} opts.limit Max 1000
     * @param {Number} opts.page Max 100
     * @param {String} opts.before A notification ID
     * @param {String} opts.since A notification ID
     * @param {Boolean} opts.memberCreator  (default to true)
     * @param {String} opts.memberCreatorFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) (default to 'avatarHash,fullName,initials,username')
     * @param {module:api/DefaultApi~getMembersIdNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Notification>}
     */},{key:"getMembersIdNotifications",value:function getMembersIdNotifications(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdNotifications");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdNotifications");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdNotifications");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'entities':opts['entities'],'display':opts['display'],'filter':opts['filter'],'read_filter':opts['readFilter'],'fields':opts['fields'],'limit':opts['limit'],'page':opts['page'],'before':opts['before'],'since':opts['since'],'memberCreator':opts['memberCreator'],'memberCreator_fields':opts['memberCreatorFields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Notification["default"]];return this.apiClient.callApi('/members/{id}/notifications','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdOrganizations operation.
     * @callback module:api/DefaultApi~getMembersIdOrganizationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Organization>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Member's Organizations
     * Get a member's teams
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private teams) (default to 'all')
     * @param {module:model/OrganizationFields} opts.fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {Boolean} opts.paidAccount  (default to false)
     * @param {module:api/DefaultApi~getMembersIdOrganizationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Organization>}
     */},{key:"getMembersIdOrganizations",value:function getMembersIdOrganizations(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdOrganizations");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdOrganizations");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdOrganizations");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter'],'fields':opts['fields'],'paid_account':opts['paidAccount']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Organization["default"]];return this.apiClient.callApi('/members/{id}/organizations','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdOrganizationsinvited operation.
     * @callback module:api/DefaultApi~getMembersIdOrganizationsinvitedCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Organization>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Organizations a Member has been invited to
     * Get a member's teams they have been invited to
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationFields} opts.fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getMembersIdOrganizationsinvitedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Organization>}
     */},{key:"getMembersIdOrganizationsinvited",value:function getMembersIdOrganizationsinvited(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdOrganizationsinvited");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdOrganizationsinvited");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdOrganizationsinvited");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Organization["default"]];return this.apiClient.callApi('/members/{id}/organizationsInvited','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdSavedsearches operation.
     * @callback module:api/DefaultApi~getMembersIdSavedsearchesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SavedSearch>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Member's saved searched
     * List the saved searches of a Member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {module:api/DefaultApi~getMembersIdSavedsearchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SavedSearch>}
     */},{key:"getMembersIdSavedsearches",value:function getMembersIdSavedsearches(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdSavedsearches");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdSavedsearches");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdSavedsearches");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_SavedSearch["default"]];return this.apiClient.callApi('/members/{id}/savedSearches','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdSavedsearchesIdsearch operation.
     * @callback module:api/DefaultApi~getMembersIdSavedsearchesIdsearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SavedSearch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a saved search
     * Get a saved search
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {String} idSearch The ID of the saved search to delete
     * @param {module:api/DefaultApi~getMembersIdSavedsearchesIdsearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SavedSearch}
     */},{key:"getMembersIdSavedsearchesIdsearch",value:function getMembersIdSavedsearchesIdsearch(key,token,id,idSearch,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdSavedsearchesIdsearch");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdSavedsearchesIdsearch");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdSavedsearchesIdsearch");}// verify the required parameter 'idSearch' is set
if(idSearch===undefined||idSearch===null){throw new _Error["default"]("Missing the required parameter 'idSearch' when calling getMembersIdSavedsearchesIdsearch");}var pathParams={'id':id,'idSearch':idSearch};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_SavedSearch["default"];return this.apiClient.callApi('/members/{id}/savedSearches/{idSearch}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersIdTokens operation.
     * @callback module:api/DefaultApi~getMembersIdTokensCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Token>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Member's Tokens
     * List a members app tokens
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.webhooks Whether to include webhooks (default to false)
     * @param {module:api/DefaultApi~getMembersIdTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Token>}
     */},{key:"getMembersIdTokens",value:function getMembersIdTokens(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersIdTokens");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersIdTokens");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersIdTokens");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'webhooks':opts['webhooks']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Token["default"]];return this.apiClient.callApi('/members/{id}/tokens','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getMembersid operation.
     * @callback module:api/DefaultApi~getMembersidCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Member
     * Get a member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {module:model/OneOfstringstring} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {String} opts.actions See the [Actions Nested Resource](ref:actions-nested-resource)
     * @param {String} opts.boards See the [Boards Nested Resource](/cloud/trello/guides/rest-api/object-definitions/idboardsopen)
     * @param {module:model/String} opts.boardBackgrounds One of: `all`, `custom`, `default`, `none`, `premium` (default to 'none')
     * @param {module:model/String} opts.boardsInvited `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned
     * @param {module:model/BoardFields} opts.boardsInvitedFields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {Boolean} opts.boardStars Whether to return the boardStars or not (default to false)
     * @param {String} opts.cards See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/) for additional options (default to 'none')
     * @param {module:model/String} opts.customBoardBackgrounds `all` or `none` (default to 'none')
     * @param {module:model/String} opts.customEmoji `all` or `none` (default to 'none')
     * @param {module:model/String} opts.customStickers `all` or `none` (default to 'none')
     * @param {module:model/MemberFields} opts.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {String} opts.notifications See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/object-definitions/idnotificationsall)
     * @param {module:model/String} opts.organizations One of: `all`, `members`, `none`, `public` (default to 'none')
     * @param {module:model/OrganizationFields} opts.organizationFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {Boolean} opts.organizationPaidAccount  (default to false)
     * @param {module:model/String} opts.organizationsInvited One of: `all`, `members`, `none`, `public` (default to 'none')
     * @param {module:model/OrganizationFields} opts.organizationsInvitedFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {Boolean} opts.paidAccount  (default to false)
     * @param {Boolean} opts.savedSearches  (default to false)
     * @param {module:model/String} opts.tokens `all` or `none` (default to 'none')
     * @param {module:api/DefaultApi~getMembersidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfMember}
     */},{key:"getMembersid",value:function getMembersid(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getMembersid");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getMembersid");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getMembersid");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'actions':opts['actions'],'boards':opts['boards'],'boardBackgrounds':opts['boardBackgrounds'],'boardsInvited':opts['boardsInvited'],'boardsInvited_fields':opts['boardsInvitedFields'],'boardStars':opts['boardStars'],'cards':opts['cards'],'customBoardBackgrounds':opts['customBoardBackgrounds'],'customEmoji':opts['customEmoji'],'customStickers':opts['customStickers'],'fields':opts['fields'],'notifications':opts['notifications'],'organizations':opts['organizations'],'organization_fields':opts['organizationFields'],'organization_paid_account':opts['organizationPaidAccount'],'organizationsInvited':opts['organizationsInvited'],'organizationsInvited_fields':opts['organizationsInvitedFields'],'paid_account':opts['paidAccount'],'savedSearches':opts['savedSearches'],'tokens':opts['tokens']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfMember["default"];return this.apiClient.callApi('/members/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getNotificationsId operation.
     * @callback module:api/DefaultApi~getNotificationsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfNotification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Notification
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the notification
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.board Whether to include the board object (default to false)
     * @param {module:model/BoardFields} opts.boardFields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {Boolean} opts.card Whether to include the card object (default to false)
     * @param {module:model/CardFields} opts.cardFields `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {Boolean} opts.display Whether to include the display object with the results (default to false)
     * @param {Boolean} opts.entities Whether to include the entities object with the results (default to false)
     * @param {module:model/NotificationFields} opts.fields `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {Boolean} opts.list Whether to include the list object (default to false)
     * @param {Boolean} opts.member Whether to include the member object (default to true)
     * @param {module:model/MemberFields} opts.memberFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {Boolean} opts.memberCreator Whether to include the member object of the creator (default to true)
     * @param {module:model/MemberFields} opts.memberCreatorFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {Boolean} opts.organization Whether to include the organization object (default to false)
     * @param {module:model/OrganizationFields} opts.organizationFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getNotificationsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfNotification}
     */},{key:"getNotificationsId",value:function getNotificationsId(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getNotificationsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getNotificationsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getNotificationsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'board':opts['board'],'board_fields':opts['boardFields'],'card':opts['card'],'card_fields':opts['cardFields'],'display':opts['display'],'entities':opts['entities'],'fields':opts['fields'],'list':opts['list'],'member':opts['member'],'member_fields':opts['memberFields'],'memberCreator':opts['memberCreator'],'memberCreator_fields':opts['memberCreatorFields'],'organization':opts['organization'],'organization_fields':opts['organizationFields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfNotification["default"];return this.apiClient.callApi('/notifications/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getNotificationsIdBoard operation.
     * @callback module:api/DefaultApi~getNotificationsIdBoardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfBoard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Board a Notification is on
     * Get the board a notification is associated with
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the notification
     * @param {Object} opts Optional parameters
     * @param {module:model/BoardFields} opts.fields `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getNotificationsIdBoardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfBoard}
     */},{key:"getNotificationsIdBoard",value:function getNotificationsIdBoard(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getNotificationsIdBoard");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getNotificationsIdBoard");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getNotificationsIdBoard");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfBoard["default"];return this.apiClient.callApi('/notifications/{id}/board','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getNotificationsIdCard operation.
     * @callback module:api/DefaultApi~getNotificationsIdCardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Card a Notification is on
     * Get the card a notification is associated with
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the notification
     * @param {Object} opts Optional parameters
     * @param {module:model/CardFields} opts.fields `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getNotificationsIdCardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfCard}
     */},{key:"getNotificationsIdCard",value:function getNotificationsIdCard(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getNotificationsIdCard");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getNotificationsIdCard");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getNotificationsIdCard");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfCard["default"];return this.apiClient.callApi('/notifications/{id}/card','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getNotificationsIdField operation.
     * @callback module:api/DefaultApi~getNotificationsIdFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfNotification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a field of a Notification
     * Get a specific property of a notification
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the notification
     * @param {module:model/NotificationFields} field A notification [field](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getNotificationsIdFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfNotification}
     */},{key:"getNotificationsIdField",value:function getNotificationsIdField(key,token,id,field,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getNotificationsIdField");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getNotificationsIdField");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getNotificationsIdField");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling getNotificationsIdField");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfNotification["default"];return this.apiClient.callApi('/notifications/{id}/{field}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getNotificationsIdList operation.
     * @callback module:api/DefaultApi~getNotificationsIdListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the List a Notification is on
     * Get the list a notification is associated with
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the notification
     * @param {Object} opts Optional parameters
     * @param {module:model/ListFields} opts.fields `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getNotificationsIdListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfList}
     */},{key:"getNotificationsIdList",value:function getNotificationsIdList(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getNotificationsIdList");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getNotificationsIdList");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getNotificationsIdList");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfList["default"];return this.apiClient.callApi('/notifications/{id}/list','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getNotificationsIdMembercreator operation.
     * @callback module:api/DefaultApi~getNotificationsIdMembercreatorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Member who created the Notification
     * Get the member who created the notification
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the notification
     * @param {Object} opts Optional parameters
     * @param {module:model/MemberFields} opts.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getNotificationsIdMembercreatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfMember}
     */},{key:"getNotificationsIdMembercreator",value:function getNotificationsIdMembercreator(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getNotificationsIdMembercreator");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getNotificationsIdMembercreator");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getNotificationsIdMembercreator");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfMember["default"];return this.apiClient.callApi('/notifications/{id}/memberCreator','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getNotificationsIdOrganization operation.
     * @callback module:api/DefaultApi~getNotificationsIdOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfOrganization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Notification's associated Organization
     * Get the organization a notification is associated with
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the notification
     * @param {Object} opts Optional parameters
     * @param {module:model/OrganizationFields} opts.fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getNotificationsIdOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfOrganization}
     */},{key:"getNotificationsIdOrganization",value:function getNotificationsIdOrganization(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getNotificationsIdOrganization");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getNotificationsIdOrganization");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getNotificationsIdOrganization");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfOrganization["default"];return this.apiClient.callApi('/notifications/{id}/organization','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsId operation.
     * @callback module:api/DefaultApi~getOrganizationsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get an Organization
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the Organization
     * @param {module:api/DefaultApi~getOrganizationsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */},{key:"getOrganizationsId",value:function getOrganizationsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Organization["default"];return this.apiClient.callApi('/organizations/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsIdActions operation.
     * @callback module:api/DefaultApi~getOrganizationsIdActionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Action>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Actions for Organization
     * List the actions on a team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {module:api/DefaultApi~getOrganizationsIdActionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Action>}
     */},{key:"getOrganizationsIdActions",value:function getOrganizationsIdActions(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsIdActions");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsIdActions");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsIdActions");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Action["default"]];return this.apiClient.callApi('/organizations/{id}/actions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsIdBoards operation.
     * @callback module:api/DefaultApi~getOrganizationsIdBoardsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfBoard>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Boards in an Organization
     * List the boards in a team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public` (default to 'all')
     * @param {module:model/BoardFields} opts.fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getOrganizationsIdBoardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfBoard>}
     */},{key:"getOrganizationsIdBoards",value:function getOrganizationsIdBoards(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsIdBoards");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsIdBoards");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsIdBoards");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter'],'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfBoard["default"]];return this.apiClient.callApi('/organizations/{id}/boards','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsIdExports operation.
     * @callback module:api/DefaultApi~getOrganizationsIdExportsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelExport>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Retrieve Organization's Exports
     * Retrieve the exports that exist for the given organization
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the team
     * @param {module:api/DefaultApi~getOrganizationsIdExportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelExport>}
     */},{key:"getOrganizationsIdExports",value:function getOrganizationsIdExports(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsIdExports");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsIdExports");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsIdExports");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_ModelExport["default"]];return this.apiClient.callApi('/organizations/{id}/exports','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsIdField operation.
     * @callback module:api/DefaultApi~getOrganizationsIdFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get field on Organization
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {module:model/OrganizationFields} field An organization [field](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~getOrganizationsIdFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */},{key:"getOrganizationsIdField",value:function getOrganizationsIdField(key,token,id,field,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsIdField");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsIdField");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsIdField");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling getOrganizationsIdField");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Organization["default"];return this.apiClient.callApi('/organizations/{id}/{field}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsIdMembers operation.
     * @callback module:api/DefaultApi~getOrganizationsIdMembersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfMember>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Members of an Organization
     * List the members in a team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the Organization
     * @param {module:api/DefaultApi~getOrganizationsIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfMember>}
     */},{key:"getOrganizationsIdMembers",value:function getOrganizationsIdMembers(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsIdMembers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsIdMembers");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsIdMembers");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfMember["default"]];return this.apiClient.callApi('/organizations/{id}/members','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsIdMemberships operation.
     * @callback module:api/DefaultApi~getOrganizationsIdMembershipsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfMemberships>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Memberships of an Organization
     * List the memberships of a team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal` (default to 'all')
     * @param {Boolean} opts.member Whether to include the Member objects with the Memberships (default to false)
     * @param {module:api/DefaultApi~getOrganizationsIdMembershipsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfMemberships>}
     */},{key:"getOrganizationsIdMemberships",value:function getOrganizationsIdMemberships(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsIdMemberships");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsIdMemberships");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsIdMemberships");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'filter':opts['filter'],'member':opts['member']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfMemberships["default"]];return this.apiClient.callApi('/organizations/{id}/memberships','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsIdMembershipsIdmembership operation.
     * @callback module:api/DefaultApi~getOrganizationsIdMembershipsIdmembershipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfMemberships} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Membership of an Organization
     * Get a single Membership for an Organization
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {String} idMembership The ID of the membership to load
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.member Whether to include the Member object in the response (default to false)
     * @param {module:api/DefaultApi~getOrganizationsIdMembershipsIdmembershipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfMemberships}
     */},{key:"getOrganizationsIdMembershipsIdmembership",value:function getOrganizationsIdMembershipsIdmembership(key,token,id,idMembership,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsIdMembershipsIdmembership");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsIdMembershipsIdmembership");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsIdMembershipsIdmembership");}// verify the required parameter 'idMembership' is set
if(idMembership===undefined||idMembership===null){throw new _Error["default"]("Missing the required parameter 'idMembership' when calling getOrganizationsIdMembershipsIdmembership");}var pathParams={'id':id,'idMembership':idMembership};var queryParams={'key':key,'token':token,'member':opts['member']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfMemberships["default"];return this.apiClient.callApi('/organizations/{id}/memberships/{idMembership}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsIdNewbillableguestsIdboard operation.
     * @callback module:api/DefaultApi~getOrganizationsIdNewbillableguestsIdboardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Organizations new billable guests
     * Used to check whether the given board has new billable guests on it.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {String} idBoard The ID of the board to check for new billable guests.
     * @param {module:api/DefaultApi~getOrganizationsIdNewbillableguestsIdboardCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getOrganizationsIdNewbillableguestsIdboard",value:function getOrganizationsIdNewbillableguestsIdboard(key,token,id,idBoard,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsIdNewbillableguestsIdboard");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsIdNewbillableguestsIdboard");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsIdNewbillableguestsIdboard");}// verify the required parameter 'idBoard' is set
if(idBoard===undefined||idBoard===null){throw new _Error["default"]("Missing the required parameter 'idBoard' when calling getOrganizationsIdNewbillableguestsIdboard");}var pathParams={'id':id,'idBoard':idBoard};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/organizations/{id}/newBillableGuests/{idBoard}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsIdPlugindata operation.
     * @callback module:api/DefaultApi~getOrganizationsIdPlugindataCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfPluginData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the pluginData Scoped to Organization
     * Get organization scoped pluginData on this team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {module:api/DefaultApi~getOrganizationsIdPlugindataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfPluginData>}
     */},{key:"getOrganizationsIdPlugindata",value:function getOrganizationsIdPlugindata(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsIdPlugindata");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsIdPlugindata");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsIdPlugindata");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfPluginData["default"]];return this.apiClient.callApi('/organizations/{id}/pluginData','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getOrganizationsIdTags operation.
     * @callback module:api/DefaultApi~getOrganizationsIdTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfTag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Tags of an Organization
     * List the organization's collections
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {module:model/OneOfstringstring} id The ID or name of the Organization
     * @param {module:api/DefaultApi~getOrganizationsIdTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfTag>}
     */},{key:"getOrganizationsIdTags",value:function getOrganizationsIdTags(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getOrganizationsIdTags");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getOrganizationsIdTags");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getOrganizationsIdTags");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfTag["default"]];return this.apiClient.callApi('/organizations/{id}/tags','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getPluginsId operation.
     * @callback module:api/DefaultApi~getPluginsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Plugin} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Plugin
     * Get plugins
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {module:api/DefaultApi~getPluginsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Plugin}
     */},{key:"getPluginsId",value:function getPluginsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getPluginsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getPluginsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getPluginsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Plugin["default"];return this.apiClient.callApi('/plugins/{id}/','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getPluginsIdComplianceMemberprivacy operation.
     * @callback module:api/DefaultApi~getPluginsIdComplianceMemberprivacyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Plugin's Member privacy compliance
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Power-Up
     * @param {module:api/DefaultApi~getPluginsIdComplianceMemberprivacyCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getPluginsIdComplianceMemberprivacy",value:function getPluginsIdComplianceMemberprivacy(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getPluginsIdComplianceMemberprivacy");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getPluginsIdComplianceMemberprivacy");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getPluginsIdComplianceMemberprivacy");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/plugins/{id}/compliance/memberPrivacy','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getSearch operation.
     * @callback module:api/DefaultApi~getSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfMemberCardBoardOrganization>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Search Trello
     * Find what you're looking for in Trello
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} query The search query with a length of 1 to 16384 characters
     * @param {Object} opts Optional parameters
     * @param {module:model/OneOfstringstring} opts.idBoards `mine` or a comma-separated list of Board IDs
     * @param {String} opts.idOrganizations A comma-separated list of Organization IDs
     * @param {String} opts.idCards A comma-separated list of Card IDs
     * @param {String} opts.modelTypes What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations` (default to 'all')
     * @param {String} opts.boardFields all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url` (default to 'name,idOrganization')
     * @param {Number} opts.boardsLimit The maximum number of boards returned. Maximum: 1000 (default to 10)
     * @param {String} opts.cardFields all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `email`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url` (default to 'all')
     * @param {Number} opts.cardsLimit The maximum number of cards to return. Maximum: 1000 (default to 10)
     * @param {Number} opts.cardsPage The page of results for cards. Maximum: 100 (default to 0)
     * @param {Boolean} opts.cardBoard Whether to include the parent board with card results (default to false)
     * @param {Boolean} opts.cardList Whether to include the parent list with card results (default to false)
     * @param {Boolean} opts.cardMembers Whether to include member objects with card results (default to false)
     * @param {Boolean} opts.cardStickers Whether to include sticker objects with card results (default to false)
     * @param {String} opts.cardAttachments Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments. (default to 'false')
     * @param {String} opts.organizationFields all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website (default to 'name,displayName')
     * @param {Number} opts.organizationsLimit The maximum number of teams to return. Maximum 1000
     * @param {String} opts.memberFields all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username (default to 'avatarHash,fullName,initials,username,confirmed')
     * @param {Number} opts.membersLimit The maximum number of members to return. Maximum 1000
     * @param {Boolean} opts.partial By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled \"My Development Status Report\", by default you would need to search for \"Development\". If you have partial enabled, you will be able to search for \"dev\" but not \"velopment\". (default to false)
     * @param {module:api/DefaultApi~getSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfMemberCardBoardOrganization>}
     */},{key:"getSearch",value:function getSearch(key,token,query,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getSearch");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getSearch");}// verify the required parameter 'query' is set
if(query===undefined||query===null){throw new _Error["default"]("Missing the required parameter 'query' when calling getSearch");}var pathParams={};var queryParams={'key':key,'token':token,'query':query,'idBoards':opts['idBoards'],'idOrganizations':opts['idOrganizations'],'idCards':opts['idCards'],'modelTypes':opts['modelTypes'],'board_fields':opts['boardFields'],'boards_limit':opts['boardsLimit'],'card_fields':opts['cardFields'],'cards_limit':opts['cardsLimit'],'cards_page':opts['cardsPage'],'card_board':opts['cardBoard'],'card_list':opts['cardList'],'card_members':opts['cardMembers'],'card_stickers':opts['cardStickers'],'card_attachments':opts['cardAttachments'],'organization_fields':opts['organizationFields'],'organizations_limit':opts['organizationsLimit'],'member_fields':opts['memberFields'],'members_limit':opts['membersLimit'],'partial':opts['partial']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfMemberCardBoardOrganization["default"]];return this.apiClient.callApi('/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getSearchMembers operation.
     * @callback module:api/DefaultApi~getSearchMembersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Member>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Search for Members
     * Search for Trello members.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} query Search query 1 to 16384 characters long
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of results to return. Maximum of 20. (default to 8)
     * @param {String} opts.idBoard 
     * @param {String} opts.idOrganization 
     * @param {Boolean} opts.onlyOrgMembers  (default to false)
     * @param {module:api/DefaultApi~getSearchMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Member>}
     */},{key:"getSearchMembers",value:function getSearchMembers(key,token,query,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getSearchMembers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getSearchMembers");}// verify the required parameter 'query' is set
if(query===undefined||query===null){throw new _Error["default"]("Missing the required parameter 'query' when calling getSearchMembers");}var pathParams={};var queryParams={'key':key,'token':token,'query':query,'limit':opts['limit'],'idBoard':opts['idBoard'],'idOrganization':opts['idOrganization'],'onlyOrgMembers':opts['onlyOrgMembers']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Member["default"]];return this.apiClient.callApi('/search/members/','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getTokensToken operation.
     * @callback module:api/DefaultApi~getTokensTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Token
     * Retrieve information about a token.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} token2 
     * @param {Object} opts Optional parameters
     * @param {module:model/TokenFields} opts.fields `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`
     * @param {Boolean} opts.webhooks Determines whether to include webhooks. (default to false)
     * @param {module:api/DefaultApi~getTokensTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Token}
     */},{key:"getTokensToken",value:function getTokensToken(key,token,token2,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getTokensToken");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getTokensToken");}// verify the required parameter 'token2' is set
if(token2===undefined||token2===null){throw new _Error["default"]("Missing the required parameter 'token2' when calling getTokensToken");}var pathParams={'token':token2};var queryParams={'key':key,'token':token,'fields':opts['fields'],'webhooks':opts['webhooks']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Token["default"];return this.apiClient.callApi('/tokens/{token}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getTokensTokenMember operation.
     * @callback module:api/DefaultApi~getTokensTokenMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Token's Member
     * Retrieve information about a token's owner by token.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} token2 
     * @param {Object} opts Optional parameters
     * @param {module:model/MemberFields} opts.fields `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/).
     * @param {module:api/DefaultApi~getTokensTokenMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */},{key:"getTokensTokenMember",value:function getTokensTokenMember(key,token,token2,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getTokensTokenMember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getTokensTokenMember");}// verify the required parameter 'token2' is set
if(token2===undefined||token2===null){throw new _Error["default"]("Missing the required parameter 'token2' when calling getTokensTokenMember");}var pathParams={'token':token2};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Member["default"];return this.apiClient.callApi('/tokens/{token}/member','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getTokensTokenWebhooks operation.
     * @callback module:api/DefaultApi~getTokensTokenWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Webhook>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Webhooks for Token
     * Retrieve all webhooks created with a Token.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} token2 
     * @param {module:api/DefaultApi~getTokensTokenWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Webhook>}
     */},{key:"getTokensTokenWebhooks",value:function getTokensTokenWebhooks(key,token,token2,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getTokensTokenWebhooks");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getTokensTokenWebhooks");}// verify the required parameter 'token2' is set
if(token2===undefined||token2===null){throw new _Error["default"]("Missing the required parameter 'token2' when calling getTokensTokenWebhooks");}var pathParams={'token':token2};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Webhook["default"]];return this.apiClient.callApi('/tokens/{token}/webhooks','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getTokensTokenWebhooksIdwebhook operation.
     * @callback module:api/DefaultApi~getTokensTokenWebhooksIdwebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Webhook belonging to a Token
     * Retrieve a webhook created with a Token.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} token2 
     * @param {String} idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
     * @param {module:api/DefaultApi~getTokensTokenWebhooksIdwebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */},{key:"getTokensTokenWebhooksIdwebhook",value:function getTokensTokenWebhooksIdwebhook(key,token,token2,idWebhook,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getTokensTokenWebhooksIdwebhook");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getTokensTokenWebhooksIdwebhook");}// verify the required parameter 'token2' is set
if(token2===undefined||token2===null){throw new _Error["default"]("Missing the required parameter 'token2' when calling getTokensTokenWebhooksIdwebhook");}// verify the required parameter 'idWebhook' is set
if(idWebhook===undefined||idWebhook===null){throw new _Error["default"]("Missing the required parameter 'idWebhook' when calling getTokensTokenWebhooksIdwebhook");}var pathParams={'token':token2,'idWebhook':idWebhook};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Webhook["default"];return this.apiClient.callApi('/tokens/{token}/webhooks/{idWebhook}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getWebhooksId operation.
     * @callback module:api/DefaultApi~getWebhooksIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Webhook
     * Get a webhook by ID.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the webhook to retrieve.
     * @param {module:api/DefaultApi~getWebhooksIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */},{key:"getWebhooksId",value:function getWebhooksId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling getWebhooksId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling getWebhooksId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling getWebhooksId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Webhook["default"];return this.apiClient.callApi('/webhooks/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the membersidavatar operation.
     * @callback module:api/DefaultApi~membersidavatarCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create Avatar for Member
     * Create a new avatar for a member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {File} file 
     * @param {module:api/DefaultApi~membersidavatarCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"membersidavatar",value:function membersidavatar(key,token,id,file,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling membersidavatar");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling membersidavatar");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling membersidavatar");}// verify the required parameter 'file' is set
if(file===undefined||file===null){throw new _Error["default"]("Missing the required parameter 'file' when calling membersidavatar");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'file':file};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/members/{id}/avatar','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the membersidcustomboardbackgrounds1 operation.
     * @callback module:api/DefaultApi~membersidcustomboardbackgrounds1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/BoardBackground} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new custom Board Background
     * Upload a new custom board background
     * @param {String} id The ID or username of the member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {File} file 
     * @param {module:api/DefaultApi~membersidcustomboardbackgrounds1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BoardBackground}
     */},{key:"membersidcustomboardbackgrounds1",value:function membersidcustomboardbackgrounds1(id,key,token,file,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling membersidcustomboardbackgrounds1");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling membersidcustomboardbackgrounds1");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling membersidcustomboardbackgrounds1");}// verify the required parameter 'file' is set
if(file===undefined||file===null){throw new _Error["default"]("Missing the required parameter 'file' when calling membersidcustomboardbackgrounds1");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'file':file};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_BoardBackground["default"];return this.apiClient.callApi('/members/{id}/customBoardBackgrounds','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the membersidcustomemojiidemoji operation.
     * @callback module:api/DefaultApi~membersidcustomemojiidemojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Member's custom Emoji
     * Get a Member's custom Emoji
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {String} idEmoji The ID of the custom emoji
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields `all` or a comma-separated list of `name`, `url` (default to 'all')
     * @param {module:api/DefaultApi~membersidcustomemojiidemojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomEmoji}
     */},{key:"membersidcustomemojiidemoji",value:function membersidcustomemojiidemoji(key,token,id,idEmoji,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling membersidcustomemojiidemoji");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling membersidcustomemojiidemoji");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling membersidcustomemojiidemoji");}// verify the required parameter 'idEmoji' is set
if(idEmoji===undefined||idEmoji===null){throw new _Error["default"]("Missing the required parameter 'idEmoji' when calling membersidcustomemojiidemoji");}var pathParams={'id':id,'idEmoji':idEmoji};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_CustomEmoji["default"];return this.apiClient.callApi('/members/{id}/customEmoji/{idEmoji}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the notificationsidmember operation.
     * @callback module:api/DefaultApi~notificationsidmemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the Member a Notification is about (not the creator)
     * Get the member (not the creator) a notification is about
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the notification
     * @param {Object} opts Optional parameters
     * @param {module:model/MemberFields} opts.fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {module:api/DefaultApi~notificationsidmemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfMember}
     */},{key:"notificationsidmember",value:function notificationsidmember(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling notificationsidmember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling notificationsidmember");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling notificationsidmember");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fields':opts['fields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfMember["default"];return this.apiClient.callApi('/notifications/{id}/member','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the organizationsIdMembersIdmemberAll operation.
     * @callback module:api/DefaultApi~organizationsIdMembersIdmemberAllCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove a Member from an Organization and all Organization Boards
     * Remove a member from a team and from all team boards
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {String} idMember The ID of the member to remove from the team
     * @param {module:api/DefaultApi~organizationsIdMembersIdmemberAllCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"organizationsIdMembersIdmemberAll",value:function organizationsIdMembersIdmemberAll(key,token,id,idMember,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling organizationsIdMembersIdmemberAll");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling organizationsIdMembersIdmemberAll");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling organizationsIdMembersIdmemberAll");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling organizationsIdMembersIdmemberAll");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/organizations/{id}/members/{idMember}/all','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postActionsIdactionReactions operation.
     * @callback module:api/DefaultApi~postActionsIdactionReactionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create Reaction for Action
     * Adds a new reaction to an action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} idAction The ID of the action
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @param {module:api/DefaultApi~postActionsIdactionReactionsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postActionsIdactionReactions",value:function postActionsIdactionReactions(key,token,idAction,opts,callback){opts=opts||{};var postBody=opts['inlineObject'];// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postActionsIdactionReactions");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postActionsIdactionReactions");}// verify the required parameter 'idAction' is set
if(idAction===undefined||idAction===null){throw new _Error["default"]("Missing the required parameter 'idAction' when calling postActionsIdactionReactions");}var pathParams={'idAction':idAction};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/actions/{idAction}/reactions','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postBoards operation.
     * @callback module:api/DefaultApi~postBoardsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Board
     * Create a new board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} name The new name for the board. 1 to 16384 characters long.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.defaultLabels Determines whether to use the default set of labels. (default to true)
     * @param {Boolean} opts.defaultLists Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided. (default to true)
     * @param {String} opts.desc A new description for the board, 0 to 16384 characters long
     * @param {String} opts.idOrganization The id or name of the team the board should belong to.
     * @param {String} opts.idBoardSource The id of a board to copy into the new board.
     * @param {module:model/String} opts.keepFromSource To keep cards from the original board pass in the value `cards` (default to 'none')
     * @param {module:model/String} opts.powerUps The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.
     * @param {module:model/String} opts.prefsPermissionLevel The permissions level of the board. One of: `org`, `private`, `public`. (default to 'private')
     * @param {module:model/String} opts.prefsVoting Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`. (default to 'disabled')
     * @param {module:model/String} opts.prefsComments Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`. (default to 'members')
     * @param {module:model/String} opts.prefsInvitations Determines what types of members can invite users to join. One of: `admins`, `members`. (default to 'members')
     * @param {Boolean} opts.prefsSelfJoin Determines whether users can join the boards themselves or whether they have to be invited. (default to true)
     * @param {Boolean} opts.prefsCardCovers Determines whether card covers are enabled. (default to true)
     * @param {module:model/String} opts.prefsBackground The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`. (default to 'blue')
     * @param {module:model/String} opts.prefsCardAging Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`. (default to 'regular')
     * @param {module:api/DefaultApi~postBoardsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postBoards",value:function postBoards(key,token,name,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postBoards");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postBoards");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new _Error["default"]("Missing the required parameter 'name' when calling postBoards");}var pathParams={};var queryParams={'key':key,'token':token,'name':name,'defaultLabels':opts['defaultLabels'],'defaultLists':opts['defaultLists'],'desc':opts['desc'],'idOrganization':opts['idOrganization'],'idBoardSource':opts['idBoardSource'],'keepFromSource':opts['keepFromSource'],'powerUps':opts['powerUps'],'prefs_permissionLevel':opts['prefsPermissionLevel'],'prefs_voting':opts['prefsVoting'],'prefs_comments':opts['prefsComments'],'prefs_invitations':opts['prefsInvitations'],'prefs_selfJoin':opts['prefsSelfJoin'],'prefs_cardCovers':opts['prefsCardCovers'],'prefs_background':opts['prefsBackground'],'prefs_cardAging':opts['prefsCardAging']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postBoardsIdBoardplugins operation.
     * @callback module:api/DefaultApi~postBoardsIdBoardpluginsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Enable a Power-Up on a Board
     * Enable a Power-Up on a Board
     * @param {String} id The ID of the Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.idPlugin The ID of the Power-Up to enable
     * @param {module:api/DefaultApi~postBoardsIdBoardpluginsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postBoardsIdBoardplugins",value:function postBoardsIdBoardplugins(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postBoardsIdBoardplugins");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postBoardsIdBoardplugins");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postBoardsIdBoardplugins");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'idPlugin':opts['idPlugin']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/boardPlugins','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postBoardsIdCalendarkeyGenerate operation.
     * @callback module:api/DefaultApi~postBoardsIdCalendarkeyGenerateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a calendarKey for a Board
     * Create a new board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {module:api/DefaultApi~postBoardsIdCalendarkeyGenerateCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postBoardsIdCalendarkeyGenerate",value:function postBoardsIdCalendarkeyGenerate(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postBoardsIdCalendarkeyGenerate");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postBoardsIdCalendarkeyGenerate");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postBoardsIdCalendarkeyGenerate");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/calendarKey/generate','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postBoardsIdChecklists operation.
     * @callback module:api/DefaultApi~postBoardsIdChecklistsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create Checklist on a Board
     * Create a new checklist on a board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {String} name The name of the checklist to be created. 1 to 16384 characters long.
     * @param {module:api/DefaultApi~postBoardsIdChecklistsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postBoardsIdChecklists",value:function postBoardsIdChecklists(key,token,id,name,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postBoardsIdChecklists");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postBoardsIdChecklists");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postBoardsIdChecklists");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new _Error["default"]("Missing the required parameter 'name' when calling postBoardsIdChecklists");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':name};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/checklists','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postBoardsIdEmailkeyGenerate operation.
     * @callback module:api/DefaultApi~postBoardsIdEmailkeyGenerateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a emailKey for a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {module:api/DefaultApi~postBoardsIdEmailkeyGenerateCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postBoardsIdEmailkeyGenerate",value:function postBoardsIdEmailkeyGenerate(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postBoardsIdEmailkeyGenerate");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postBoardsIdEmailkeyGenerate");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postBoardsIdEmailkeyGenerate");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/emailKey/generate','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postBoardsIdIdtags operation.
     * @callback module:api/DefaultApi~postBoardsIdIdtagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Tag for a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {String} value The id of a tag from the organization to which this board belongs.
     * @param {module:api/DefaultApi~postBoardsIdIdtagsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postBoardsIdIdtags",value:function postBoardsIdIdtags(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postBoardsIdIdtags");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postBoardsIdIdtags");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postBoardsIdIdtags");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling postBoardsIdIdtags");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/idTags','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postBoardsIdLabels operation.
     * @callback module:api/DefaultApi~postBoardsIdLabelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Label on a Board
     * Create a new Label on a Board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {String} name The name of the label to be created. 1 to 16384 characters long.
     * @param {String} color Sets the color of the new label. Valid values are a label color or `null`.
     * @param {module:api/DefaultApi~postBoardsIdLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postBoardsIdLabels",value:function postBoardsIdLabels(key,token,id,name,color,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postBoardsIdLabels");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postBoardsIdLabels");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postBoardsIdLabels");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new _Error["default"]("Missing the required parameter 'name' when calling postBoardsIdLabels");}// verify the required parameter 'color' is set
if(color===undefined||color===null){throw new _Error["default"]("Missing the required parameter 'color' when calling postBoardsIdLabels");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':name,'color':color};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/labels','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postBoardsIdLists operation.
     * @callback module:api/DefaultApi~postBoardsIdListsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a List on a Board
     * Create a new List on a Board.
     * @param {String} id The ID of the board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} name The name of the list to be created. 1 to 16384 characters long.
     * @param {Object} opts Optional parameters
     * @param {String} opts.pos Determines the position of the list. Valid values: `top`, `bottom`, or a positive number. (default to 'top')
     * @param {module:api/DefaultApi~postBoardsIdListsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postBoardsIdLists",value:function postBoardsIdLists(id,key,token,name,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postBoardsIdLists");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postBoardsIdLists");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postBoardsIdLists");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new _Error["default"]("Missing the required parameter 'name' when calling postBoardsIdLists");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':name,'pos':opts['pos']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/lists','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postBoardsIdMarkedasviewed operation.
     * @callback module:api/DefaultApi~postBoardsIdMarkedasviewedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Mark Board as viewed
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {module:api/DefaultApi~postBoardsIdMarkedasviewedCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postBoardsIdMarkedasviewed",value:function postBoardsIdMarkedasviewed(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postBoardsIdMarkedasviewed");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postBoardsIdMarkedasviewed");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postBoardsIdMarkedasviewed");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/markedAsViewed','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postBoardsIdPowerups operation.
     * @callback module:api/DefaultApi~postBoardsIdPowerupsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Enable Power-Up on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {module:model/String} value The Power-Up to be enabled on the board. One of: `calendar`, `cardAging`, `recap`, `voting`.
     * @param {module:api/DefaultApi~postBoardsIdPowerupsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postBoardsIdPowerups",value:function postBoardsIdPowerups(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postBoardsIdPowerups");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postBoardsIdPowerups");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postBoardsIdPowerups");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling postBoardsIdPowerups");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/powerUps','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCards operation.
     * @callback module:api/DefaultApi~postCardsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new Card
     * Create a new card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} idList The ID of the list the card should be created in
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name for the card
     * @param {String} opts.desc The description for the card
     * @param {module:model/OneOfstringfloat} opts.pos The position of the new card. `top`, `bottom`, or a positive float
     * @param {Date} opts.due A due date for the card
     * @param {Boolean} opts.dueComplete 
     * @param {Array.<module:model/OneOfstring>} opts.idMembers Comma-separated list of member IDs to add to the card
     * @param {Array.<module:model/OneOfstring>} opts.idLabels Comma-separated list of label IDs to add to the card
     * @param {String} opts.urlSource A URL starting with `http://` or `https://`
     * @param {File} opts.fileSource 
     * @param {String} opts.idCardSource The ID of a card to copy into the new card
     * @param {module:model/String} opts.keepFromSource If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,comments,due,labels,members,stickers` (default to 'all')
     * @param {String} opts.address For use with/by the Map Power-Up
     * @param {String} opts.locationName For use with/by the Map Power-Up
     * @param {String} opts.coordinates For use with/by the Map Power-Up. Should take the form latitude,longitude
     * @param {module:api/DefaultApi~postCardsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postCards",value:function postCards(key,token,idList,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCards");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCards");}// verify the required parameter 'idList' is set
if(idList===undefined||idList===null){throw new _Error["default"]("Missing the required parameter 'idList' when calling postCards");}var pathParams={};var queryParams={'key':key,'token':token,'name':opts['name'],'desc':opts['desc'],'pos':opts['pos'],'due':opts['due'],'dueComplete':opts['dueComplete'],'idList':idList,'idMembers':this.apiClient.buildCollectionParam(opts['idMembers'],'multi'),'idLabels':this.apiClient.buildCollectionParam(opts['idLabels'],'multi'),'urlSource':opts['urlSource'],'fileSource':opts['fileSource'],'idCardSource':opts['idCardSource'],'keepFromSource':opts['keepFromSource'],'address':opts['address'],'locationName':opts['locationName'],'coordinates':opts['coordinates']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCardsIdActionsComments operation.
     * @callback module:api/DefaultApi~postCardsIdActionsCommentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add a new comment to a Card
     * Add a new comment to a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {String} text The comment
     * @param {module:api/DefaultApi~postCardsIdActionsCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postCardsIdActionsComments",value:function postCardsIdActionsComments(key,token,id,text,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCardsIdActionsComments");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCardsIdActionsComments");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postCardsIdActionsComments");}// verify the required parameter 'text' is set
if(text===undefined||text===null){throw new _Error["default"]("Missing the required parameter 'text' when calling postCardsIdActionsComments");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'text':text};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/actions/comments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCardsIdAttachments operation.
     * @callback module:api/DefaultApi~postCardsIdAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfAttachment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create Attachment On Card
     * Create an Attachment to a Card
     * @param {String} id The ID of the Card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the attachment. Max length 256.
     * @param {File} opts.file The file to attach, as multipart/form-data
     * @param {String} opts.mimeType The mimeType of the attachment. Max length 256
     * @param {String} opts.url A URL to attach. Must start with `http://` or `https://`
     * @param {Boolean} opts.setCover Determines whether to use the new attachment as a cover for the Card. (default to false)
     * @param {module:api/DefaultApi~postCardsIdAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfAttachment>}
     */},{key:"postCardsIdAttachments",value:function postCardsIdAttachments(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postCardsIdAttachments");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCardsIdAttachments");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCardsIdAttachments");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':opts['name'],'file':opts['file'],'mimeType':opts['mimeType'],'url':opts['url'],'setCover':opts['setCover']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfAttachment["default"]];return this.apiClient.callApi('/cards/{id}/attachments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCardsIdChecklists operation.
     * @callback module:api/DefaultApi~postCardsIdChecklistsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create Checklist on a Card
     * Create a new checklist on a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the checklist
     * @param {String} opts.idChecklistSource The ID of a source checklist to copy into the new one
     * @param {String} opts.pos The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
     * @param {module:api/DefaultApi~postCardsIdChecklistsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postCardsIdChecklists",value:function postCardsIdChecklists(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCardsIdChecklists");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCardsIdChecklists");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postCardsIdChecklists");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':opts['name'],'idChecklistSource':opts['idChecklistSource'],'pos':opts['pos']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/checklists','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCardsIdIdlabels operation.
     * @callback module:api/DefaultApi~postCardsIdIdlabelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add a Label to a Card
     * Add a label to a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.value The ID of the label to add
     * @param {module:api/DefaultApi~postCardsIdIdlabelsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postCardsIdIdlabels",value:function postCardsIdIdlabels(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCardsIdIdlabels");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCardsIdIdlabels");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postCardsIdIdlabels");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':opts['value']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/idLabels','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCardsIdIdmembers operation.
     * @callback module:api/DefaultApi~postCardsIdIdmembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add a Member to a Card
     * Add a member to a card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.value The ID of the Member to add to the card
     * @param {module:api/DefaultApi~postCardsIdIdmembersCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postCardsIdIdmembers",value:function postCardsIdIdmembers(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCardsIdIdmembers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCardsIdIdmembers");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postCardsIdIdmembers");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':opts['value']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/idMembers','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCardsIdLabels operation.
     * @callback module:api/DefaultApi~postCardsIdLabelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new Label on a Card
     * Create a new label for the board and add it to the given card.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {String} color A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/)
     * @param {Object} opts Optional parameters
     * @param {String} opts.name A name for the label
     * @param {module:api/DefaultApi~postCardsIdLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postCardsIdLabels",value:function postCardsIdLabels(key,token,id,color,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCardsIdLabels");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCardsIdLabels");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postCardsIdLabels");}// verify the required parameter 'color' is set
if(color===undefined||color===null){throw new _Error["default"]("Missing the required parameter 'color' when calling postCardsIdLabels");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'color':color,'name':opts['name']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/labels','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCardsIdMarkassociatednotificationsread operation.
     * @callback module:api/DefaultApi~postCardsIdMarkassociatednotificationsreadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Mark a Card's Notifications as read
     * Mark notifications about this card as read
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the Card
     * @param {module:api/DefaultApi~postCardsIdMarkassociatednotificationsreadCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postCardsIdMarkassociatednotificationsread",value:function postCardsIdMarkassociatednotificationsread(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCardsIdMarkassociatednotificationsread");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCardsIdMarkassociatednotificationsread");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postCardsIdMarkassociatednotificationsread");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/markAssociatedNotificationsRead','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCardsIdStickers operation.
     * @callback module:api/DefaultApi~postCardsIdStickersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add a Sticker to a Card
     * Add a sticker to a card
     * @param {String} id The ID of the Card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} image For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below)
     * @param {Number} top The top position of the sticker, from -60 to 100
     * @param {Number} left The left position of the sticker, from -60 to 100
     * @param {Number} zIndex The z-index of the sticker
     * @param {Object} opts Optional parameters
     * @param {Number} opts.rotate The rotation of the sticker (default to 0)
     * @param {module:api/DefaultApi~postCardsIdStickersCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postCardsIdStickers",value:function postCardsIdStickers(id,key,token,image,top,left,zIndex,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postCardsIdStickers");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCardsIdStickers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCardsIdStickers");}// verify the required parameter 'image' is set
if(image===undefined||image===null){throw new _Error["default"]("Missing the required parameter 'image' when calling postCardsIdStickers");}// verify the required parameter 'top' is set
if(top===undefined||top===null){throw new _Error["default"]("Missing the required parameter 'top' when calling postCardsIdStickers");}// verify the required parameter 'left' is set
if(left===undefined||left===null){throw new _Error["default"]("Missing the required parameter 'left' when calling postCardsIdStickers");}// verify the required parameter 'zIndex' is set
if(zIndex===undefined||zIndex===null){throw new _Error["default"]("Missing the required parameter 'zIndex' when calling postCardsIdStickers");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'image':image,'top':top,'left':left,'zIndex':zIndex,'rotate':opts['rotate']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/stickers','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postChecklists operation.
     * @callback module:api/DefaultApi~postChecklistsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Checklist
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} idCard The ID of the Card that the checklist should be added to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the checklist. Should be a string of length 1 to 16384.
     * @param {module:model/PosStringOrNumber} opts.pos The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
     * @param {String} opts.idChecklistSource The ID of a checklist to copy into the new checklist.
     * @param {module:api/DefaultApi~postChecklistsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postChecklists",value:function postChecklists(key,token,idCard,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postChecklists");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postChecklists");}// verify the required parameter 'idCard' is set
if(idCard===undefined||idCard===null){throw new _Error["default"]("Missing the required parameter 'idCard' when calling postChecklists");}var pathParams={};var queryParams={'key':key,'token':token,'idCard':idCard,'name':opts['name'],'pos':opts['pos'],'idChecklistSource':opts['idChecklistSource']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postChecklistsIdCheckitems operation.
     * @callback module:api/DefaultApi~postChecklistsIdCheckitemsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create Checkitem on Checklist
     * @param {String} id ID of a checklist.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} name The name of the new check item on the checklist. Should be a string of length 1 to 16384.
     * @param {Object} opts Optional parameters
     * @param {module:model/PosStringOrNumber} opts.pos The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.
     * @param {Boolean} opts.checked Determines whether the check item is already checked when created. (default to false)
     * @param {module:api/DefaultApi~postChecklistsIdCheckitemsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postChecklistsIdCheckitems",value:function postChecklistsIdCheckitems(id,key,token,name,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postChecklistsIdCheckitems");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postChecklistsIdCheckitems");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postChecklistsIdCheckitems");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new _Error["default"]("Missing the required parameter 'name' when calling postChecklistsIdCheckitems");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':name,'pos':opts['pos'],'checked':opts['checked']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}/checkItems','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCustomfields operation.
     * @callback module:api/DefaultApi~postCustomfieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new Custom Field on a Board
     * Create a new Custom Field on a board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @param {module:api/DefaultApi~postCustomfieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomField}
     */},{key:"postCustomfields",value:function postCustomfields(key,token,opts,callback){opts=opts||{};var postBody=opts['inlineObject2'];// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCustomfields");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCustomfields");}var pathParams={};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_CustomField["default"];return this.apiClient.callApi('/customFields','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postCustomfieldsIdOptions operation.
     * @callback module:api/DefaultApi~postCustomfieldsIdOptionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Options of Custom Field drop down
     * Get the options of a drop down Custom Field
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the customfield.
     * @param {module:api/DefaultApi~postCustomfieldsIdOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postCustomfieldsIdOptions",value:function postCustomfieldsIdOptions(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postCustomfieldsIdOptions");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postCustomfieldsIdOptions");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postCustomfieldsIdOptions");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/customFields/{id}/options','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postEnterprisesIdTokens operation.
     * @callback module:api/DefaultApi~postEnterprisesIdTokensCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create an auth Token for an Enterprise.
     * Create an auth Token for an Enterprise.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the enterprise to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expiration One of: `1hour`, `1day`, `30days`, `never` (default to 'none')
     * @param {module:api/DefaultApi~postEnterprisesIdTokensCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postEnterprisesIdTokens",value:function postEnterprisesIdTokens(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postEnterprisesIdTokens");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postEnterprisesIdTokens");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postEnterprisesIdTokens");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'expiration':opts['expiration']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/enterprises/{id}/tokens','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postLabels operation.
     * @callback module:api/DefaultApi~postLabelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Label
     * Create a new Label on a Board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} name Name for the label
     * @param {module:model/Color} color The color for the label.
     * @param {String} idBoard The ID of the Board to create the Label on.
     * @param {module:api/DefaultApi~postLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postLabels",value:function postLabels(key,token,name,color,idBoard,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postLabels");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postLabels");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new _Error["default"]("Missing the required parameter 'name' when calling postLabels");}// verify the required parameter 'color' is set
if(color===undefined||color===null){throw new _Error["default"]("Missing the required parameter 'color' when calling postLabels");}// verify the required parameter 'idBoard' is set
if(idBoard===undefined||idBoard===null){throw new _Error["default"]("Missing the required parameter 'idBoard' when calling postLabels");}var pathParams={};var queryParams={'key':key,'token':token,'name':name,'color':color,'idBoard':idBoard};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/labels','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postLists operation.
     * @callback module:api/DefaultApi~postListsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new List
     * Create a new List on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} name Name for the list
     * @param {String} idBoard The long ID of the board the list should be created on
     * @param {Object} opts Optional parameters
     * @param {String} opts.idListSource ID of the List to copy into the new List
     * @param {module:model/OneOffloatstring} opts.pos Position of the list. `top`, `bottom`, or a positive floating point number
     * @param {module:api/DefaultApi~postListsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postLists",value:function postLists(key,token,name,idBoard,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postLists");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postLists");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new _Error["default"]("Missing the required parameter 'name' when calling postLists");}// verify the required parameter 'idBoard' is set
if(idBoard===undefined||idBoard===null){throw new _Error["default"]("Missing the required parameter 'idBoard' when calling postLists");}var pathParams={};var queryParams={'key':key,'token':token,'name':name,'idBoard':idBoard,'idListSource':opts['idListSource'],'pos':opts['pos']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postListsIdArchiveallcards operation.
     * @callback module:api/DefaultApi~postListsIdArchiveallcardsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Archive all Cards in List
     * Archive all cards in a list
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the list
     * @param {module:api/DefaultApi~postListsIdArchiveallcardsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postListsIdArchiveallcards",value:function postListsIdArchiveallcards(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postListsIdArchiveallcards");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postListsIdArchiveallcards");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postListsIdArchiveallcards");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists/{id}/archiveAllCards','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postListsIdMoveallcards operation.
     * @callback module:api/DefaultApi~postListsIdMoveallcardsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Move all Cards in List
     * Move all Cards in a List
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the list
     * @param {String} idBoard The ID of the board the cards should be moved to
     * @param {String} idList The ID of the list that the cards should be moved to
     * @param {module:api/DefaultApi~postListsIdMoveallcardsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postListsIdMoveallcards",value:function postListsIdMoveallcards(key,token,id,idBoard,idList,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postListsIdMoveallcards");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postListsIdMoveallcards");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postListsIdMoveallcards");}// verify the required parameter 'idBoard' is set
if(idBoard===undefined||idBoard===null){throw new _Error["default"]("Missing the required parameter 'idBoard' when calling postListsIdMoveallcards");}// verify the required parameter 'idList' is set
if(idList===undefined||idList===null){throw new _Error["default"]("Missing the required parameter 'idList' when calling postListsIdMoveallcards");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'idBoard':idBoard,'idList':idList};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists/{id}/moveAllCards','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postMembersIdBoardbackgrounds1 operation.
     * @callback module:api/DefaultApi~postMembersIdBoardbackgrounds1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OneOfBoardBackground>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Upload new boardBackground for Member
     * Upload a new boardBackground
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {File} file 
     * @param {module:api/DefaultApi~postMembersIdBoardbackgrounds1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OneOfBoardBackground>}
     */},{key:"postMembersIdBoardbackgrounds1",value:function postMembersIdBoardbackgrounds1(key,token,id,file,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postMembersIdBoardbackgrounds1");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postMembersIdBoardbackgrounds1");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postMembersIdBoardbackgrounds1");}// verify the required parameter 'file' is set
if(file===undefined||file===null){throw new _Error["default"]("Missing the required parameter 'file' when calling postMembersIdBoardbackgrounds1");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'file':file};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_OneOfBoardBackground["default"]];return this.apiClient.callApi('/members/{id}/boardBackgrounds','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postMembersIdBoardstars operation.
     * @callback module:api/DefaultApi~postMembersIdBoardstarsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BoardStars>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create Star for Board
     * Star a new board on behalf of a Member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {module:model/OneOfstringstring} id The ID or username of the member
     * @param {String} idBoard The ID of the board to star
     * @param {module:model/PosStringOrNumber} pos The position of the newly starred board. `top`, `bottom`, or a positive float.
     * @param {module:api/DefaultApi~postMembersIdBoardstarsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BoardStars>}
     */},{key:"postMembersIdBoardstars",value:function postMembersIdBoardstars(key,token,id,idBoard,pos,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postMembersIdBoardstars");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postMembersIdBoardstars");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postMembersIdBoardstars");}// verify the required parameter 'idBoard' is set
if(idBoard===undefined||idBoard===null){throw new _Error["default"]("Missing the required parameter 'idBoard' when calling postMembersIdBoardstars");}// verify the required parameter 'pos' is set
if(pos===undefined||pos===null){throw new _Error["default"]("Missing the required parameter 'pos' when calling postMembersIdBoardstars");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'idBoard':idBoard,'pos':pos};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_BoardStars["default"]];return this.apiClient.callApi('/members/{id}/boardStars','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postMembersIdCustomemoji operation.
     * @callback module:api/DefaultApi~postMembersIdCustomemojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create custom Emoji for Member
     * Create a new custom Emoji
     * @param {String} id The ID or username of the member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {File} file 
     * @param {String} name Name for the emoji. 2 - 64 characters
     * @param {module:api/DefaultApi~postMembersIdCustomemojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomEmoji}
     */},{key:"postMembersIdCustomemoji",value:function postMembersIdCustomemoji(id,key,token,file,name,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postMembersIdCustomemoji");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postMembersIdCustomemoji");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postMembersIdCustomemoji");}// verify the required parameter 'file' is set
if(file===undefined||file===null){throw new _Error["default"]("Missing the required parameter 'file' when calling postMembersIdCustomemoji");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new _Error["default"]("Missing the required parameter 'name' when calling postMembersIdCustomemoji");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'file':file,'name':name};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_CustomEmoji["default"];return this.apiClient.callApi('/members/{id}/customEmoji','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postMembersIdCustomstickers operation.
     * @callback module:api/DefaultApi~postMembersIdCustomstickersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomSticker} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create custom Sticker for Member
     * Upload a new custom sticker
     * @param {String} id The ID or username of the member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {File} file 
     * @param {module:api/DefaultApi~postMembersIdCustomstickersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomSticker}
     */},{key:"postMembersIdCustomstickers",value:function postMembersIdCustomstickers(id,key,token,file,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postMembersIdCustomstickers");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postMembersIdCustomstickers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postMembersIdCustomstickers");}// verify the required parameter 'file' is set
if(file===undefined||file===null){throw new _Error["default"]("Missing the required parameter 'file' when calling postMembersIdCustomstickers");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'file':file};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_CustomSticker["default"];return this.apiClient.callApi('/members/{id}/customStickers','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postMembersIdOnetimemessagesdismissed operation.
     * @callback module:api/DefaultApi~postMembersIdOnetimemessagesdismissedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Dismiss a message for Member
     * Dismiss a message
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {String} value The message to dismiss
     * @param {module:api/DefaultApi~postMembersIdOnetimemessagesdismissedCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postMembersIdOnetimemessagesdismissed",value:function postMembersIdOnetimemessagesdismissed(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postMembersIdOnetimemessagesdismissed");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postMembersIdOnetimemessagesdismissed");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postMembersIdOnetimemessagesdismissed");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling postMembersIdOnetimemessagesdismissed");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/members/{id}/oneTimeMessagesDismissed','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postMembersIdSavedsearches operation.
     * @callback module:api/DefaultApi~postMembersIdSavedsearchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SavedSearch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create saved Search for Memer
     * Create a saved search
     * @param {String} id The ID or username of the member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} name The name for the saved search
     * @param {String} query The search query
     * @param {module:model/PosStringOrNumber} pos The position of the saved search. `top`, `bottom`, or a positive float.
     * @param {module:api/DefaultApi~postMembersIdSavedsearchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SavedSearch}
     */},{key:"postMembersIdSavedsearches",value:function postMembersIdSavedsearches(id,key,token,name,query,pos,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postMembersIdSavedsearches");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postMembersIdSavedsearches");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postMembersIdSavedsearches");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new _Error["default"]("Missing the required parameter 'name' when calling postMembersIdSavedsearches");}// verify the required parameter 'query' is set
if(query===undefined||query===null){throw new _Error["default"]("Missing the required parameter 'query' when calling postMembersIdSavedsearches");}// verify the required parameter 'pos' is set
if(pos===undefined||pos===null){throw new _Error["default"]("Missing the required parameter 'pos' when calling postMembersIdSavedsearches");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':name,'query':query,'pos':pos};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_SavedSearch["default"];return this.apiClient.callApi('/members/{id}/savedSearches','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postNotificationsAllRead operation.
     * @callback module:api/DefaultApi~postNotificationsAllReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfNotification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Mark all Notifications as read
     * Mark all notifications as read
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.read Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read) (default to true)
     * @param {Array.<String>} opts.ids A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.
     * @param {module:api/DefaultApi~postNotificationsAllReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfNotification}
     */},{key:"postNotificationsAllRead",value:function postNotificationsAllRead(key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postNotificationsAllRead");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postNotificationsAllRead");}var pathParams={};var queryParams={'key':key,'token':token,'read':opts['read'],'ids':this.apiClient.buildCollectionParam(opts['ids'],'csv')};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfNotification["default"];return this.apiClient.callApi('/notifications/all/read','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postOrganizations operation.
     * @callback module:api/DefaultApi~postOrganizationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfOrganization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new Organization
     * Create a new team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} displayName The name to display for the Organization
     * @param {Object} opts Optional parameters
     * @param {String} opts.desc The description for the organizations
     * @param {String} opts.name A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. Must be unique.
     * @param {String} opts.website A URL starting with `http://` or `https://`
     * @param {module:api/DefaultApi~postOrganizationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfOrganization}
     */},{key:"postOrganizations",value:function postOrganizations(key,token,displayName,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postOrganizations");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postOrganizations");}// verify the required parameter 'displayName' is set
if(displayName===undefined||displayName===null){throw new _Error["default"]("Missing the required parameter 'displayName' when calling postOrganizations");}var pathParams={};var queryParams={'key':key,'token':token,'displayName':displayName,'desc':opts['desc'],'name':opts['name'],'website':opts['website']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfOrganization["default"];return this.apiClient.callApi('/organizations','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postOrganizationsIdExports operation.
     * @callback module:api/DefaultApi~postOrganizationsIdExportsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelExport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create Export for Organizations
     * Kick off CSV export for an organization
     * @param {String} id The ID or name of the team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachments Whether the CSV should include attachments or not. (default to true)
     * @param {module:api/DefaultApi~postOrganizationsIdExportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelExport}
     */},{key:"postOrganizationsIdExports",value:function postOrganizationsIdExports(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postOrganizationsIdExports");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postOrganizationsIdExports");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postOrganizationsIdExports");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'attachments':opts['attachments']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_ModelExport["default"];return this.apiClient.callApi('/organizations/{id}/exports','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postOrganizationsIdLogo operation.
     * @callback module:api/DefaultApi~postOrganizationsIdLogoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfOrganization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update logo for an Organization
     * Set the logo image for a team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the team
     * @param {Object} opts Optional parameters
     * @param {File} opts.file Image file for the logo
     * @param {module:api/DefaultApi~postOrganizationsIdLogoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfOrganization}
     */},{key:"postOrganizationsIdLogo",value:function postOrganizationsIdLogo(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postOrganizationsIdLogo");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postOrganizationsIdLogo");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postOrganizationsIdLogo");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'file':opts['file']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfOrganization["default"];return this.apiClient.callApi('/organizations/{id}/logo','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postOrganizationsIdTags operation.
     * @callback module:api/DefaultApi~postOrganizationsIdTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfTag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Tag in Organization
     * Create a Tag in an Organization
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {module:model/OneOfstringstring} id The ID or name of the Organization
     * @param {module:api/DefaultApi~postOrganizationsIdTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfTag}
     */},{key:"postOrganizationsIdTags",value:function postOrganizationsIdTags(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postOrganizationsIdTags");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postOrganizationsIdTags");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling postOrganizationsIdTags");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfTag["default"];return this.apiClient.callApi('/organizations/{id}/tags','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postPluginsIdpluginListing operation.
     * @callback module:api/DefaultApi~postPluginsIdpluginListingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PluginListing} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Listing for Plugin
     * Create a new listing for a given locale for your Power-Up
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} idPlugin The ID of the Power-Up for which you are creating a new listing.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.inlineObject4 
     * @param {module:api/DefaultApi~postPluginsIdpluginListingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PluginListing}
     */},{key:"postPluginsIdpluginListing",value:function postPluginsIdpluginListing(key,token,idPlugin,opts,callback){opts=opts||{};var postBody=opts['inlineObject4'];// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postPluginsIdpluginListing");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postPluginsIdpluginListing");}// verify the required parameter 'idPlugin' is set
if(idPlugin===undefined||idPlugin===null){throw new _Error["default"]("Missing the required parameter 'idPlugin' when calling postPluginsIdpluginListing");}var pathParams={'idPlugin':idPlugin};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_PluginListing["default"];return this.apiClient.callApi('/plugins/{idPlugin}/listing','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postTokensTokenWebhooks operation.
     * @callback module:api/DefaultApi~postTokensTokenWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create Webhooks for Token
     * Create a new webhook for a Token.
     * @param {String} token 
     * @param {String} key The API key to use
     * @param {String} token2 The API token to use
     * @param {String} callbackURL The URL that the webhook should POST information to.
     * @param {String} idModel ID of the object to create a webhook on.
     * @param {Object} opts Optional parameters
     * @param {String} opts.description A description to be displayed when retrieving information about the webhook.
     * @param {module:api/DefaultApi~postTokensTokenWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */},{key:"postTokensTokenWebhooks",value:function postTokensTokenWebhooks(token,key,token2,callbackURL,idModel,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postTokensTokenWebhooks");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postTokensTokenWebhooks");}// verify the required parameter 'token2' is set
if(token2===undefined||token2===null){throw new _Error["default"]("Missing the required parameter 'token2' when calling postTokensTokenWebhooks");}// verify the required parameter 'callbackURL' is set
if(callbackURL===undefined||callbackURL===null){throw new _Error["default"]("Missing the required parameter 'callbackURL' when calling postTokensTokenWebhooks");}// verify the required parameter 'idModel' is set
if(idModel===undefined||idModel===null){throw new _Error["default"]("Missing the required parameter 'idModel' when calling postTokensTokenWebhooks");}var pathParams={'token':token};var queryParams={'key':key,'token':token2,'description':opts['description'],'callbackURL':callbackURL,'idModel':idModel};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Webhook["default"];return this.apiClient.callApi('/tokens/{token}/webhooks','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postWebhooks operation.
     * @callback module:api/DefaultApi~postWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Webhook
     * Create a new webhook.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} callbackURL A valid URL that is reachable with a `HEAD` and `POST` request.
     * @param {String} idModel ID of the model to be monitored
     * @param {Object} opts Optional parameters
     * @param {String} opts.description A string with a length from `0` to `16384`.
     * @param {Boolean} opts.active Determines whether the webhook is active and sending `POST` requests.
     * @param {module:api/DefaultApi~postWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */},{key:"postWebhooks",value:function postWebhooks(key,token,callbackURL,idModel,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling postWebhooks");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling postWebhooks");}// verify the required parameter 'callbackURL' is set
if(callbackURL===undefined||callbackURL===null){throw new _Error["default"]("Missing the required parameter 'callbackURL' when calling postWebhooks");}// verify the required parameter 'idModel' is set
if(idModel===undefined||idModel===null){throw new _Error["default"]("Missing the required parameter 'idModel' when calling postWebhooks");}var pathParams={};var queryParams={'key':key,'token':token,'description':opts['description'],'callbackURL':callbackURL,'idModel':idModel,'active':opts['active']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Webhook["default"];return this.apiClient.callApi('/webhooks/','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putActionsId operation.
     * @callback module:api/DefaultApi~putActionsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an Action
     * Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment.
     * @param {String} id The ID of the Action
     * @param {String} text The new text for the comment
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {module:api/DefaultApi~putActionsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putActionsId",value:function putActionsId(id,text,key,token,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putActionsId");}// verify the required parameter 'text' is set
if(text===undefined||text===null){throw new _Error["default"]("Missing the required parameter 'text' when calling putActionsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putActionsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putActionsId");}var pathParams={'id':id};var queryParams={'text':text,'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/actions/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putActionsIdText operation.
     * @callback module:api/DefaultApi~putActionsIdTextCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Comment Action
     * Update a comment action
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the action to update
     * @param {String} value The new text for the comment
     * @param {module:api/DefaultApi~putActionsIdTextCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putActionsIdText",value:function putActionsIdText(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putActionsIdText");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putActionsIdText");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putActionsIdText");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putActionsIdText");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/actions/{id}/text','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsId operation.
     * @callback module:api/DefaultApi~putBoardsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Board
     * Update an existing board by id
     * @param {String} id 
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The new name for the board. 1 to 16384 characters long.
     * @param {String} opts.desc A new description for the board, 0 to 16384 characters long
     * @param {Boolean} opts.closed Whether the board is closed
     * @param {String} opts.subscribed Whether the acting user is subscribed to the board
     * @param {String} opts.idOrganization The id of the team the board should be moved to
     * @param {String} opts.prefsPermissionLevel One of: org, private, public
     * @param {Boolean} opts.prefsSelfJoin Whether team members can join the board themselves
     * @param {Boolean} opts.prefsCardCovers Whether card covers should be displayed on this board
     * @param {Boolean} opts.prefsHideVotes Determines whether the Voting Power-Up should hide who voted on cards or not.
     * @param {String} opts.prefsInvitations Who can invite people to this board. One of: admins, members
     * @param {String} opts.prefsVoting Who can vote on this board. One of disabled, members, observers, org, public
     * @param {String} opts.prefsComments Who can comment on cards on this board. One of: disabled, members, observers, org, public
     * @param {String} opts.prefsBackground The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey
     * @param {String} opts.prefsCardAging One of: pirate, regular
     * @param {Boolean} opts.prefsCalendarFeedEnabled Determines whether the calendar feed is enabled or not.
     * @param {String} opts.labelNamesGreen Name for the green label. 1 to 16384 characters long
     * @param {String} opts.labelNamesYellow Name for the yellow label. 1 to 16384 characters long
     * @param {String} opts.labelNamesOrange Name for the orange label. 1 to 16384 characters long
     * @param {String} opts.labelNamesRed Name for the red label. 1 to 16384 characters long
     * @param {String} opts.labelNamesPurple Name for the purple label. 1 to 16384 characters long
     * @param {String} opts.labelNamesBlue Name for the blue label. 1 to 16384 characters long
     * @param {module:api/DefaultApi~putBoardsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsId",value:function putBoardsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':opts['name'],'desc':opts['desc'],'closed':opts['closed'],'subscribed':opts['subscribed'],'idOrganization':opts['idOrganization'],'prefs/permissionLevel':opts['prefsPermissionLevel'],'prefs/selfJoin':opts['prefsSelfJoin'],'prefs/cardCovers':opts['prefsCardCovers'],'prefs/hideVotes':opts['prefsHideVotes'],'prefs/invitations':opts['prefsInvitations'],'prefs/voting':opts['prefsVoting'],'prefs/comments':opts['prefsComments'],'prefs/background':opts['prefsBackground'],'prefs/cardAging':opts['prefsCardAging'],'prefs/calendarFeedEnabled':opts['prefsCalendarFeedEnabled'],'labelNames/green':opts['labelNamesGreen'],'labelNames/yellow':opts['labelNamesYellow'],'labelNames/orange':opts['labelNamesOrange'],'labelNames/red':opts['labelNamesRed'],'labelNames/purple':opts['labelNamesPurple'],'labelNames/blue':opts['labelNamesBlue']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsIdMembers operation.
     * @callback module:api/DefaultApi~putBoardsIdMembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Invite Member to Board via email
     * Invite a Member to a Board via their email address.
     * @param {String} id The ID of the board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} email The email address of a user to add as a member of the board.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board. (default to 'normal')
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @param {module:api/DefaultApi~putBoardsIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsIdMembers",value:function putBoardsIdMembers(id,key,token,email,opts,callback){opts=opts||{};var postBody=opts['inlineObject1'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsIdMembers");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsIdMembers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsIdMembers");}// verify the required parameter 'email' is set
if(email===undefined||email===null){throw new _Error["default"]("Missing the required parameter 'email' when calling putBoardsIdMembers");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'email':email,'type':opts['type']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/members','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsIdMembersIdmember operation.
     * @callback module:api/DefaultApi~putBoardsIdMembersIdmemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add a Member to a Board
     * Add a member to the board.
     * @param {String} id The id of the board to update
     * @param {String} idMember The id of the member to add to the board.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {module:model/String} type One of: admin, normal, observer. Determines the type of member this user will be on the board.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allowBillableGuest Optional param that allows organization admins to add multi-board guests onto a board. (default to false)
     * @param {module:api/DefaultApi~putBoardsIdMembersIdmemberCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsIdMembersIdmember",value:function putBoardsIdMembersIdmember(id,idMember,key,token,type,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsIdMembersIdmember");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling putBoardsIdMembersIdmember");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsIdMembersIdmember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsIdMembersIdmember");}// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new _Error["default"]("Missing the required parameter 'type' when calling putBoardsIdMembersIdmember");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token,'type':type,'allowBillableGuest':opts['allowBillableGuest']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/members/{idMember}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsIdMembershipsIdmembership operation.
     * @callback module:api/DefaultApi~putBoardsIdMembershipsIdmembershipCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update Membership of Member on a Board
     * Update an existing board by id
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {String} idMembership The id of a membership that should be added to this board.
     * @param {module:model/String} type One of: admin, normal, observer. Determines the type of member that this membership will be to this board.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.memberFields Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username (default to 'fullName, username')
     * @param {module:api/DefaultApi~putBoardsIdMembershipsIdmembershipCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsIdMembershipsIdmembership",value:function putBoardsIdMembershipsIdmembership(key,token,id,idMembership,type,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsIdMembershipsIdmembership");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsIdMembershipsIdmembership");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsIdMembershipsIdmembership");}// verify the required parameter 'idMembership' is set
if(idMembership===undefined||idMembership===null){throw new _Error["default"]("Missing the required parameter 'idMembership' when calling putBoardsIdMembershipsIdmembership");}// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new _Error["default"]("Missing the required parameter 'type' when calling putBoardsIdMembershipsIdmembership");}var pathParams={'id':id,'idMembership':idMembership};var queryParams={'key':key,'token':token,'type':type,'member_fields':opts['memberFields']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/memberships/{idMembership}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsIdMyPrefsShowlistguide operation.
     * @callback module:api/DefaultApi~putBoardsIdMyPrefsShowlistguideCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update showListGuide Pref on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {Boolean} value Determines whether to show the list guide.
     * @param {module:api/DefaultApi~putBoardsIdMyPrefsShowlistguideCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsIdMyPrefsShowlistguide",value:function putBoardsIdMyPrefsShowlistguide(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsIdMyPrefsShowlistguide");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsIdMyPrefsShowlistguide");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsIdMyPrefsShowlistguide");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putBoardsIdMyPrefsShowlistguide");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/myPrefs/showListGuide','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsIdMyPrefsShowsidebar operation.
     * @callback module:api/DefaultApi~putBoardsIdMyPrefsShowsidebarCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update showSidebar Pref on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {Boolean} value Determines whether to show the side bar.
     * @param {module:api/DefaultApi~putBoardsIdMyPrefsShowsidebarCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsIdMyPrefsShowsidebar",value:function putBoardsIdMyPrefsShowsidebar(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsIdMyPrefsShowsidebar");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsIdMyPrefsShowsidebar");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsIdMyPrefsShowsidebar");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putBoardsIdMyPrefsShowsidebar");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/myPrefs/showSidebar','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsIdMyPrefsShowsidebaractivity operation.
     * @callback module:api/DefaultApi~putBoardsIdMyPrefsShowsidebaractivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update showSidebarActivity Pref on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {Boolean} value Determines whether to show sidebar activity.
     * @param {module:api/DefaultApi~putBoardsIdMyPrefsShowsidebaractivityCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsIdMyPrefsShowsidebaractivity",value:function putBoardsIdMyPrefsShowsidebaractivity(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsIdMyPrefsShowsidebaractivity");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsIdMyPrefsShowsidebaractivity");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsIdMyPrefsShowsidebaractivity");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putBoardsIdMyPrefsShowsidebaractivity");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/myPrefs/showSidebarActivity','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsIdMyPrefsShowsidebarboardactions operation.
     * @callback module:api/DefaultApi~putBoardsIdMyPrefsShowsidebarboardactionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update showSidebarBoardActions Pref on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {Boolean} value Determines whether to show the sidebar board actions.
     * @param {module:api/DefaultApi~putBoardsIdMyPrefsShowsidebarboardactionsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsIdMyPrefsShowsidebarboardactions",value:function putBoardsIdMyPrefsShowsidebarboardactions(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsIdMyPrefsShowsidebarboardactions");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsIdMyPrefsShowsidebarboardactions");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsIdMyPrefsShowsidebarboardactions");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putBoardsIdMyPrefsShowsidebarboardactions");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/myPrefs/showSidebarBoardActions','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsIdMyPrefsShowsidebarmembers operation.
     * @callback module:api/DefaultApi~putBoardsIdMyPrefsShowsidebarmembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update showSidebarMembers Pref on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {Boolean} value Determines whether to show members of the board in the sidebar.
     * @param {module:api/DefaultApi~putBoardsIdMyPrefsShowsidebarmembersCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsIdMyPrefsShowsidebarmembers",value:function putBoardsIdMyPrefsShowsidebarmembers(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsIdMyPrefsShowsidebarmembers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsIdMyPrefsShowsidebarmembers");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsIdMyPrefsShowsidebarmembers");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putBoardsIdMyPrefsShowsidebarmembers");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/myPrefs/showSidebarMembers','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsIdMyprefsEmailposition operation.
     * @callback module:api/DefaultApi~putBoardsIdMyprefsEmailpositionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update emailPosition Pref on a Board
     * Update emailPosition Pref on a Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {module:model/String} value Valid values: bottom, top. Determines the position of the email address.
     * @param {module:api/DefaultApi~putBoardsIdMyprefsEmailpositionCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsIdMyprefsEmailposition",value:function putBoardsIdMyprefsEmailposition(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsIdMyprefsEmailposition");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsIdMyprefsEmailposition");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsIdMyprefsEmailposition");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putBoardsIdMyprefsEmailposition");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/myPrefs/emailPosition','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putBoardsIdMyprefsIdemaillist operation.
     * @callback module:api/DefaultApi~putBoardsIdMyprefsIdemaillistCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update idEmailList Pref on a Board
     * Change the default list that email-to-board cards are created in.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the board to update
     * @param {String} value The id of an email list.
     * @param {module:api/DefaultApi~putBoardsIdMyprefsIdemaillistCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putBoardsIdMyprefsIdemaillist",value:function putBoardsIdMyprefsIdemaillist(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putBoardsIdMyprefsIdemaillist");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putBoardsIdMyprefsIdemaillist");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putBoardsIdMyprefsIdemaillist");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putBoardsIdMyprefsIdemaillist");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/boards/{id}/myPrefs/idEmailList','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putCardsId operation.
     * @callback module:api/DefaultApi~putCardsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Card} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Card
     * Update a card
     * @param {String} id The ID of the Card
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The new name for the card
     * @param {String} opts.desc The new description for the card
     * @param {Boolean} opts.closed Whether the card should be archived (closed: true)
     * @param {String} opts.idMembers Comma-separated list of member IDs
     * @param {String} opts.idAttachmentCover The ID of the image attachment the card should use as its cover, or null for none
     * @param {String} opts.idList The ID of the list the card should be in
     * @param {String} opts.idLabels Comma-separated list of label IDs
     * @param {String} opts.idBoard The ID of the board the card should be on
     * @param {module:model/OneOfstringfloat} opts.pos The position of the card in its list. `top`, `bottom`, or a positive float
     * @param {Date} opts.due When the card is due, or `null`
     * @param {Boolean} opts.dueComplete Whether the due date should be marked complete
     * @param {Boolean} opts.subscribed Whether the member is should be subscribed to the card
     * @param {String} opts.address For use with/by the Map Power-Up
     * @param {String} opts.locationName For use with/by the Map Power-Up
     * @param {String} opts.coordinates For use with/by the Map Power-Up. Should be latitude,longitude
     * @param {module:model/Cover} opts.cover Updates the card's cover  | Option | Values | About |  |--------|--------|-------|  | color | `pink`, `yellow`, `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` | Makes the cover a solid color . |  | brightness | `dark`, `light` | Determines whether the text on the cover should be dark or light.  | url | An unsplash URL: https://images.unsplash.com | Used if making an image the cover. Only Unsplash URLs work.  | idAttachment | ID of an attachment on the card | Used if setting an attached image as the cover. |  | size | `normal`, `full` | Determines whether to show the card name on the cover, or below it. |    `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time.     On the brightness options, setting it to light will make the text on the card cover dark:  ![](/cloud/trello/images/rest/cards/cover-brightness-dark.png)    And vice versa, setting it to dark will make the text on the card cover light:   ![](/cloud/trello/images/rest/cards/cover-brightness-light.png) 
     * @param {module:api/DefaultApi~putCardsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Card}
     */},{key:"putCardsId",value:function putCardsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putCardsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putCardsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putCardsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':opts['name'],'desc':opts['desc'],'closed':opts['closed'],'idMembers':opts['idMembers'],'idAttachmentCover':opts['idAttachmentCover'],'idList':opts['idList'],'idLabels':opts['idLabels'],'idBoard':opts['idBoard'],'pos':opts['pos'],'due':opts['due'],'dueComplete':opts['dueComplete'],'subscribed':opts['subscribed'],'address':opts['address'],'locationName':opts['locationName'],'coordinates':opts['coordinates'],'cover':opts['cover']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Card["default"];return this.apiClient.callApi('/cards/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putCardsIdActionsIdactionComments operation.
     * @callback module:api/DefaultApi~putCardsIdActionsIdactionCommentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update Comment Action on a Card
     * Update an existing comment
     * @param {String} id The ID of the Card
     * @param {String} idAction The ID of the comment action to update
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} text The new text for the comment
     * @param {module:api/DefaultApi~putCardsIdActionsIdactionCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putCardsIdActionsIdactionComments",value:function putCardsIdActionsIdactionComments(id,idAction,key,token,text,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putCardsIdActionsIdactionComments");}// verify the required parameter 'idAction' is set
if(idAction===undefined||idAction===null){throw new _Error["default"]("Missing the required parameter 'idAction' when calling putCardsIdActionsIdactionComments");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putCardsIdActionsIdactionComments");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putCardsIdActionsIdactionComments");}// verify the required parameter 'text' is set
if(text===undefined||text===null){throw new _Error["default"]("Missing the required parameter 'text' when calling putCardsIdActionsIdactionComments");}var pathParams={'id':id,'idAction':idAction};var queryParams={'key':key,'token':token,'text':text};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/actions/{idAction}/comments','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putCardsIdCheckitemIdcheckitem operation.
     * @callback module:api/DefaultApi~putCardsIdCheckitemIdcheckitemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a checkItem on a Card
     * Update an item in a checklist on a card.
     * @param {String} id The ID of the Card
     * @param {String} idCheckItem The ID of the checkitem
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The new name for the checklist item
     * @param {module:model/String} opts.state One of: `complete`, `incomplete`
     * @param {String} opts.idChecklist The ID of the checklist this item is in
     * @param {module:model/PosStringOrNumber} opts.pos `top`, `bottom`, or a positive float
     * @param {module:api/DefaultApi~putCardsIdCheckitemIdcheckitemCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putCardsIdCheckitemIdcheckitem",value:function putCardsIdCheckitemIdcheckitem(id,idCheckItem,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putCardsIdCheckitemIdcheckitem");}// verify the required parameter 'idCheckItem' is set
if(idCheckItem===undefined||idCheckItem===null){throw new _Error["default"]("Missing the required parameter 'idCheckItem' when calling putCardsIdCheckitemIdcheckitem");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putCardsIdCheckitemIdcheckitem");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putCardsIdCheckitemIdcheckitem");}var pathParams={'id':id,'idCheckItem':idCheckItem};var queryParams={'key':key,'token':token,'name':opts['name'],'state':opts['state'],'idChecklist':opts['idChecklist'],'pos':opts['pos']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/checkItem/{idCheckItem}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putCardsIdStickersIdsticker operation.
     * @callback module:api/DefaultApi~putCardsIdStickersIdstickerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Sticker on a Card
     * Update a sticker on a card
     * @param {String} id The ID of the Card
     * @param {String} idSticker The ID of the sticker
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Number} top The top position of the sticker, from -60 to 100
     * @param {Number} left The left position of the sticker, from -60 to 100
     * @param {Number} zIndex The z-index of the sticker
     * @param {Object} opts Optional parameters
     * @param {Number} opts.rotate The rotation of the sticker (default to 0)
     * @param {module:api/DefaultApi~putCardsIdStickersIdstickerCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putCardsIdStickersIdsticker",value:function putCardsIdStickersIdsticker(id,idSticker,key,token,top,left,zIndex,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putCardsIdStickersIdsticker");}// verify the required parameter 'idSticker' is set
if(idSticker===undefined||idSticker===null){throw new _Error["default"]("Missing the required parameter 'idSticker' when calling putCardsIdStickersIdsticker");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putCardsIdStickersIdsticker");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putCardsIdStickersIdsticker");}// verify the required parameter 'top' is set
if(top===undefined||top===null){throw new _Error["default"]("Missing the required parameter 'top' when calling putCardsIdStickersIdsticker");}// verify the required parameter 'left' is set
if(left===undefined||left===null){throw new _Error["default"]("Missing the required parameter 'left' when calling putCardsIdStickersIdsticker");}// verify the required parameter 'zIndex' is set
if(zIndex===undefined||zIndex===null){throw new _Error["default"]("Missing the required parameter 'zIndex' when calling putCardsIdStickersIdsticker");}var pathParams={'id':id,'idSticker':idSticker};var queryParams={'key':key,'token':token,'top':top,'left':left,'zIndex':zIndex,'rotate':opts['rotate']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{id}/stickers/{idSticker}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem operation.
     * @callback module:api/DefaultApi~putCardsIdcardChecklistIdchecklistCheckitemIdcheckitemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update Checkitem on Checklist on Card
     * Update an item in a checklist on a card.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} idCard The ID of the Card
     * @param {String} idCheckItem The ID of the checklist item to update
     * @param {String} idChecklist The ID of the item to update.
     * @param {Object} opts Optional parameters
     * @param {module:model/PosStringOrNumber} opts.pos `top`, `bottom`, or a positive float
     * @param {module:api/DefaultApi~putCardsIdcardChecklistIdchecklistCheckitemIdcheckitemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckItem}
     */},{key:"putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem",value:function putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem(key,token,idCard,idCheckItem,idChecklist,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem");}// verify the required parameter 'idCard' is set
if(idCard===undefined||idCard===null){throw new _Error["default"]("Missing the required parameter 'idCard' when calling putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem");}// verify the required parameter 'idCheckItem' is set
if(idCheckItem===undefined||idCheckItem===null){throw new _Error["default"]("Missing the required parameter 'idCheckItem' when calling putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem");}// verify the required parameter 'idChecklist' is set
if(idChecklist===undefined||idChecklist===null){throw new _Error["default"]("Missing the required parameter 'idChecklist' when calling putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem");}var pathParams={'idCard':idCard,'idCheckItem':idCheckItem,'idChecklist':idChecklist};var queryParams={'key':key,'token':token,'pos':opts['pos']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_CheckItem["default"];return this.apiClient.callApi('/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putCardsIdcardCustomfieldIdcustomfieldItem operation.
     * @callback module:api/DefaultApi~putCardsIdcardCustomfieldIdcustomfieldItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update Custom Field item on Card
     * Setting, updating, and removing the value for a Custom Field on a card.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} idCard ID of the card that the Custom Field value should be set/updated for
     * @param {String} idCustomField ID of the Custom Field on the card.
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/DefaultApi~putCardsIdcardCustomfieldIdcustomfieldItemCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putCardsIdcardCustomfieldIdcustomfieldItem",value:function putCardsIdcardCustomfieldIdcustomfieldItem(key,token,idCard,idCustomField,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putCardsIdcardCustomfieldIdcustomfieldItem");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putCardsIdcardCustomfieldIdcustomfieldItem");}// verify the required parameter 'idCard' is set
if(idCard===undefined||idCard===null){throw new _Error["default"]("Missing the required parameter 'idCard' when calling putCardsIdcardCustomfieldIdcustomfieldItem");}// verify the required parameter 'idCustomField' is set
if(idCustomField===undefined||idCustomField===null){throw new _Error["default"]("Missing the required parameter 'idCustomField' when calling putCardsIdcardCustomfieldIdcustomfieldItem");}var pathParams={'idCard':idCard,'idCustomField':idCustomField};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/cards/{idCard}/customField/{idCustomField}/item','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putChecklistsIdField operation.
     * @callback module:api/DefaultApi~putChecklistsIdFieldCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update field on a Checklist
     * @param {String} id ID of a checklist.
     * @param {module:model/String} field Field to update.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {module:model/OneOfposStringOrNumberstring} value The value to change the checklist name to. Should be a string of length 1 to 16384.
     * @param {module:api/DefaultApi~putChecklistsIdFieldCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putChecklistsIdField",value:function putChecklistsIdField(id,field,key,token,value,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putChecklistsIdField");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling putChecklistsIdField");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putChecklistsIdField");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putChecklistsIdField");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putChecklistsIdField");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}/{field}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putCheclistsId operation.
     * @callback module:api/DefaultApi~putCheclistsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Checklist
     * Update an existing checklist.
     * @param {String} id ID of a checklist.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of the new checklist being created. Should be length of 1 to 16384.
     * @param {module:model/PosStringOrNumber} opts.pos Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
     * @param {module:api/DefaultApi~putCheclistsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putCheclistsId",value:function putCheclistsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putCheclistsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putCheclistsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putCheclistsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':opts['name'],'pos':opts['pos']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/checklists/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putCustomfieldsId operation.
     * @callback module:api/DefaultApi~putCustomfieldsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Custom Field definition
     * Update a Custom Field definition.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the Custom Field.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.inlineObject3 
     * @param {module:api/DefaultApi~putCustomfieldsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomField}
     */},{key:"putCustomfieldsId",value:function putCustomfieldsId(key,token,id,opts,callback){opts=opts||{};var postBody=opts['inlineObject3'];// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putCustomfieldsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putCustomfieldsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putCustomfieldsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_CustomField["default"];return this.apiClient.callApi('/customFields/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putEnterprisesIdAdminsIdmember operation.
     * @callback module:api/DefaultApi~putEnterprisesIdAdminsIdmemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update Member to be admin of Enterprise
     * Make Member an admin of Enterprise.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the enterprise to retrieve.
     * @param {String} idMember ID of member to be made an admin of enterprise.
     * @param {module:api/DefaultApi~putEnterprisesIdAdminsIdmemberCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putEnterprisesIdAdminsIdmember",value:function putEnterprisesIdAdminsIdmember(key,token,id,idMember,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putEnterprisesIdAdminsIdmember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putEnterprisesIdAdminsIdmember");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putEnterprisesIdAdminsIdmember");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling putEnterprisesIdAdminsIdmember");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/enterprises/{id}/admins/{idMember}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putEnterprisesIdMembersIdmemberLicensed operation.
     * @callback module:api/DefaultApi~putEnterprisesIdMembersIdmemberLicensedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Member's licensed status
     * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not.
     * @param {String} key The API key to use
     * @param {String} token The API token to use. Note: This must be an Enterprise admin's token.
     * @param {String} id ID of the Enterprise.
     * @param {String} idMember The ID of the Member
     * @param {Boolean} values Boolean value to determine whether the user should be given an Enterprise license (true) or not (false).
     * @param {module:api/DefaultApi~putEnterprisesIdMembersIdmemberLicensedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */},{key:"putEnterprisesIdMembersIdmemberLicensed",value:function putEnterprisesIdMembersIdmemberLicensed(key,token,id,idMember,values,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putEnterprisesIdMembersIdmemberLicensed");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putEnterprisesIdMembersIdmemberLicensed");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putEnterprisesIdMembersIdmemberLicensed");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling putEnterprisesIdMembersIdmemberLicensed");}// verify the required parameter 'values' is set
if(values===undefined||values===null){throw new _Error["default"]("Missing the required parameter 'values' when calling putEnterprisesIdMembersIdmemberLicensed");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token,'Values':values};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Member["default"];return this.apiClient.callApi('/enterprises/{id}/members/{idMember}/licensed','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putEnterprisesIdOrganizations operation.
     * @callback module:api/DefaultApi~putEnterprisesIdOrganizationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AnyOfOrganization>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Transfer an Organization to an Enterprise.
     * Transfer an organization to an enterprise.
     * @param {String} key The API key to use
     * @param {String} token The API token to use. Note: This must be an Enterprise admin's token.
     * @param {String} id ID of the Enterprise to retrieve.
     * @param {String} idOrganization ID of Organization to be transferred to Enterprise.
     * @param {module:api/DefaultApi~putEnterprisesIdOrganizationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AnyOfOrganization>}
     */},{key:"putEnterprisesIdOrganizations",value:function putEnterprisesIdOrganizations(key,token,id,idOrganization,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putEnterprisesIdOrganizations");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putEnterprisesIdOrganizations");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putEnterprisesIdOrganizations");}// verify the required parameter 'idOrganization' is set
if(idOrganization===undefined||idOrganization===null){throw new _Error["default"]("Missing the required parameter 'idOrganization' when calling putEnterprisesIdOrganizations");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'idOrganization':idOrganization};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=[_AnyOfOrganization["default"]];return this.apiClient.callApi('/enterprises/{id}/organizations','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putIdIdboard operation.
     * @callback module:api/DefaultApi~putIdIdboardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Move List to Board
     * Move a List to a different Board
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the list
     * @param {String} value The ID of the board to move the list to
     * @param {module:api/DefaultApi~putIdIdboardCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putIdIdboard",value:function putIdIdboard(key,token,id,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putIdIdboard");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putIdIdboard");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putIdIdboard");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putIdIdboard");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists/{id}/idBoard','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putLabelsId operation.
     * @callback module:api/DefaultApi~putLabelsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Label
     * Update a label by ID.
     * @param {String} id The ID of the Label
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The new name for the label
     * @param {module:model/Color} opts.color The new color for the label. See: [fields](#label-object) for color options
     * @param {module:api/DefaultApi~putLabelsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putLabelsId",value:function putLabelsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putLabelsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putLabelsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putLabelsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':opts['name'],'color':opts['color']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/labels/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putLabelsIdField operation.
     * @callback module:api/DefaultApi~putLabelsIdFieldCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a field on a label
     * Update a field on a label.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The id of the label
     * @param {module:model/String} field The field on the Label to update.
     * @param {String} value The new value for the field.
     * @param {module:api/DefaultApi~putLabelsIdFieldCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putLabelsIdField",value:function putLabelsIdField(key,token,id,field,value,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putLabelsIdField");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putLabelsIdField");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putLabelsIdField");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling putLabelsIdField");}// verify the required parameter 'value' is set
if(value===undefined||value===null){throw new _Error["default"]("Missing the required parameter 'value' when calling putLabelsIdField");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token,'value':value};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/labels/{id}/{field}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putListsId operation.
     * @callback module:api/DefaultApi~putListsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a List
     * Update the properties of a List
     * @param {String} id The ID of the list
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.name New name for the list
     * @param {Boolean} opts.closed Whether the list should be closed (archived)
     * @param {String} opts.idBoard ID of a board the list should be moved to
     * @param {module:model/OneOffloatstring} opts.pos New position for the list: `top`, `bottom`, or a positive floating point number
     * @param {Boolean} opts.subscribed Whether the active member is subscribed to this list
     * @param {module:api/DefaultApi~putListsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putListsId",value:function putListsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putListsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putListsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putListsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':opts['name'],'closed':opts['closed'],'idBoard':opts['idBoard'],'pos':opts['pos'],'subscribed':opts['subscribed']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putListsIdClosed operation.
     * @callback module:api/DefaultApi~putListsIdClosedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Archive or unarchive a list
     * Archive or unarchive a list
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the list
     * @param {Object} opts Optional parameters
     * @param {String} opts.value Set to true to close (archive) the list
     * @param {module:api/DefaultApi~putListsIdClosedCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putListsIdClosed",value:function putListsIdClosed(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putListsIdClosed");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putListsIdClosed");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putListsIdClosed");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':opts['value']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists/{id}/closed','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putListsIdField operation.
     * @callback module:api/DefaultApi~putListsIdFieldCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a field on a List
     * Rename a list
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the list
     * @param {module:model/String} field The field on the List to be updated
     * @param {Object} opts Optional parameters
     * @param {module:model/OneOfstringfloatstringboolean} opts.value The new value for the field
     * @param {module:api/DefaultApi~putListsIdFieldCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putListsIdField",value:function putListsIdField(key,token,id,field,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putListsIdField");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putListsIdField");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putListsIdField");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling putListsIdField");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token,'value':opts['value']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/lists/{id}/{field}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putMembersId operation.
     * @callback module:api/DefaultApi~putMembersIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Member
     * Update a Member
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or username of the member
     * @param {Object} opts Optional parameters
     * @param {String} opts.fullName New name for the member. Cannot begin or end with a space.
     * @param {String} opts.initials New initials for the member. 1-4 characters long.
     * @param {String} opts.username New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique.
     * @param {String} opts.bio 
     * @param {module:model/String} opts.avatarSource One of: `gravatar`, `none`, `upload`
     * @param {Boolean} opts.prefsColorBlind 
     * @param {String} opts.prefsLocale 
     * @param {Number} opts.prefsMinutesBetweenSummaries `-1` for disabled, `1`, or `60`
     * @param {module:api/DefaultApi~putMembersIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfMember}
     */},{key:"putMembersId",value:function putMembersId(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putMembersId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putMembersId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putMembersId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'fullName':opts['fullName'],'initials':opts['initials'],'username':opts['username'],'bio':opts['bio'],'avatarSource':opts['avatarSource'],'prefs/colorBlind':opts['prefsColorBlind'],'prefs/locale':opts['prefsLocale'],'prefs/minutesBetweenSummaries':opts['prefsMinutesBetweenSummaries']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfMember["default"];return this.apiClient.callApi('/members/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putMembersIdBoardbackgroundsIdbackground operation.
     * @callback module:api/DefaultApi~putMembersIdBoardbackgroundsIdbackgroundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoardBackground} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Member's custom Board background
     * Update a board background
     * @param {String} id The ID or username of the member
     * @param {String} idBackground The ID of the board background
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.brightness One of: `dark`, `light`, `unknown`
     * @param {Boolean} opts.tile Whether the background should be tiled
     * @param {module:api/DefaultApi~putMembersIdBoardbackgroundsIdbackgroundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BoardBackground}
     */},{key:"putMembersIdBoardbackgroundsIdbackground",value:function putMembersIdBoardbackgroundsIdbackground(id,idBackground,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putMembersIdBoardbackgroundsIdbackground");}// verify the required parameter 'idBackground' is set
if(idBackground===undefined||idBackground===null){throw new _Error["default"]("Missing the required parameter 'idBackground' when calling putMembersIdBoardbackgroundsIdbackground");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putMembersIdBoardbackgroundsIdbackground");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putMembersIdBoardbackgroundsIdbackground");}var pathParams={'id':id,'idBackground':idBackground};var queryParams={'key':key,'token':token,'brightness':opts['brightness'],'tile':opts['tile']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_BoardBackground["default"];return this.apiClient.callApi('/members/{id}/boardBackgrounds/{idBackground}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putMembersIdBoardstarsIdstar operation.
     * @callback module:api/DefaultApi~putMembersIdBoardstarsIdstarCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update the position of a boardStar of Member
     * Update the position of a starred board
     * @param {String} id The ID or username of the member
     * @param {String} idStar The ID of the board star
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {module:model/PosStringOrNumber} opts.pos New position for the starred board. `top`, `bottom`, or a positive float.
     * @param {module:api/DefaultApi~putMembersIdBoardstarsIdstarCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putMembersIdBoardstarsIdstar",value:function putMembersIdBoardstarsIdstar(id,idStar,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putMembersIdBoardstarsIdstar");}// verify the required parameter 'idStar' is set
if(idStar===undefined||idStar===null){throw new _Error["default"]("Missing the required parameter 'idStar' when calling putMembersIdBoardstarsIdstar");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putMembersIdBoardstarsIdstar");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putMembersIdBoardstarsIdstar");}var pathParams={'id':id,'idStar':idStar};var queryParams={'key':key,'token':token,'pos':opts['pos']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/members/{id}/boardStars/{idStar}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putMembersIdCustomboardbackgroundsIdbackground operation.
     * @callback module:api/DefaultApi~putMembersIdCustomboardbackgroundsIdbackgroundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoardBackground} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update custom Board Background of Member
     * Update a specific custom board background
     * @param {module:model/OneOfstringstring} id The ID or username of the member
     * @param {String} idBackground The ID of the custom background
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.brightness One of: `dark`, `light`, `unknown`
     * @param {Boolean} opts.tile Whether to tile the background
     * @param {module:api/DefaultApi~putMembersIdCustomboardbackgroundsIdbackgroundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BoardBackground}
     */},{key:"putMembersIdCustomboardbackgroundsIdbackground",value:function putMembersIdCustomboardbackgroundsIdbackground(id,idBackground,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putMembersIdCustomboardbackgroundsIdbackground");}// verify the required parameter 'idBackground' is set
if(idBackground===undefined||idBackground===null){throw new _Error["default"]("Missing the required parameter 'idBackground' when calling putMembersIdCustomboardbackgroundsIdbackground");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putMembersIdCustomboardbackgroundsIdbackground");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putMembersIdCustomboardbackgroundsIdbackground");}var pathParams={'id':id,'idBackground':idBackground};var queryParams={'key':key,'token':token,'brightness':opts['brightness'],'tile':opts['tile']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_BoardBackground["default"];return this.apiClient.callApi('/members/{id}/customBoardBackgrounds/{idBackground}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putMembersIdSavedsearchesIdsearch operation.
     * @callback module:api/DefaultApi~putMembersIdSavedsearchesIdsearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SavedSearch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a saved search
     * Update a saved search
     * @param {String} id The ID or username of the member
     * @param {String} idSearch The ID of the saved search to delete
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The new name for the saved search
     * @param {String} opts.query The new search query
     * @param {String} opts.pos New position for saves search. `top`, `bottom`, or a positive float.
     * @param {module:api/DefaultApi~putMembersIdSavedsearchesIdsearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SavedSearch}
     */},{key:"putMembersIdSavedsearchesIdsearch",value:function putMembersIdSavedsearchesIdsearch(id,idSearch,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putMembersIdSavedsearchesIdsearch");}// verify the required parameter 'idSearch' is set
if(idSearch===undefined||idSearch===null){throw new _Error["default"]("Missing the required parameter 'idSearch' when calling putMembersIdSavedsearchesIdsearch");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putMembersIdSavedsearchesIdsearch");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putMembersIdSavedsearchesIdsearch");}var pathParams={'id':id,'idSearch':idSearch};var queryParams={'key':key,'token':token,'name':opts['name'],'query':opts['query'],'pos':opts['pos']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_SavedSearch["default"];return this.apiClient.callApi('/members/{id}/savedSearches/{idSearch}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putNotificationsId operation.
     * @callback module:api/DefaultApi~putNotificationsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfNotification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Notification's read status
     * Update the read status of a notification
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the notification
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.unread Whether the notification should be marked as read or not
     * @param {module:api/DefaultApi~putNotificationsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfNotification}
     */},{key:"putNotificationsId",value:function putNotificationsId(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putNotificationsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putNotificationsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putNotificationsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'unread':opts['unread']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfNotification["default"];return this.apiClient.callApi('/notifications/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putNotificationsIdUnread operation.
     * @callback module:api/DefaultApi~putNotificationsIdUnreadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfNotification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update Notification's read status
     * Update Notification's read status
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID of the notification
     * @param {Object} opts Optional parameters
     * @param {String} opts.value 
     * @param {module:api/DefaultApi~putNotificationsIdUnreadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfNotification}
     */},{key:"putNotificationsIdUnread",value:function putNotificationsIdUnread(key,token,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putNotificationsIdUnread");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putNotificationsIdUnread");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putNotificationsIdUnread");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'value':opts['value']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfNotification["default"];return this.apiClient.callApi('/notifications/{id}/unread','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putOrganizationsId operation.
     * @callback module:api/DefaultApi~putOrganizationsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an Organization
     * Update an organization
     * @param {String} id The ID or name of the Organization
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.name A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique
     * @param {String} opts.displayName A new displayName for the organization. Must be at least 1 character long and not begin or end with a space.
     * @param {String} opts.desc A new description for the organization
     * @param {String} opts.website A URL starting with `http://`, `https://`, or `null`
     * @param {String} opts.prefsAssociatedDomain The Google Apps domain to link this org to.
     * @param {Boolean} opts.prefsExternalMembersDisabled Whether non-team members can be added to boards inside the team
     * @param {Number} opts.prefsGoogleAppsVersion `1` or `2`
     * @param {String} opts.prefsBoardVisibilityRestrictOrg Who on the team can make team visible boards. One of `admin`, `none`, `org`
     * @param {String} opts.prefsBoardVisibilityRestrictPrivate Who can make private boards. One of: `admin`, `none`, `org`
     * @param {String} opts.prefsBoardVisibilityRestrictPublic Who on the team can make public boards. One of: `admin`, `none`, `org`
     * @param {String} opts.prefsOrgInviteRestrict An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`)
     * @param {String} opts.prefsPermissionLevel Whether the team page is publicly visible. One of: `private`, `public`
     * @param {module:api/DefaultApi~putOrganizationsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */},{key:"putOrganizationsId",value:function putOrganizationsId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putOrganizationsId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putOrganizationsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putOrganizationsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'name':opts['name'],'displayName':opts['displayName'],'desc':opts['desc'],'website':opts['website'],'prefs/associatedDomain':opts['prefsAssociatedDomain'],'prefs/externalMembersDisabled':opts['prefsExternalMembersDisabled'],'prefs/googleAppsVersion':opts['prefsGoogleAppsVersion'],'prefs/boardVisibilityRestrict/org':opts['prefsBoardVisibilityRestrictOrg'],'prefs/boardVisibilityRestrict/private':opts['prefsBoardVisibilityRestrictPrivate'],'prefs/boardVisibilityRestrict/public':opts['prefsBoardVisibilityRestrictPublic'],'prefs/orgInviteRestrict':opts['prefsOrgInviteRestrict'],'prefs/permissionLevel':opts['prefsPermissionLevel']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Organization["default"];return this.apiClient.callApi('/organizations/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putOrganizationsIdMembers operation.
     * @callback module:api/DefaultApi~putOrganizationsIdMembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an Organization's Members
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {String} email An email address
     * @param {String} fullName Name for the member, at least 1 character not beginning or ending with a space
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type One of: `admin`, `normal` (default to 'normal')
     * @param {module:api/DefaultApi~putOrganizationsIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putOrganizationsIdMembers",value:function putOrganizationsIdMembers(key,token,id,email,fullName,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putOrganizationsIdMembers");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putOrganizationsIdMembers");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putOrganizationsIdMembers");}// verify the required parameter 'email' is set
if(email===undefined||email===null){throw new _Error["default"]("Missing the required parameter 'email' when calling putOrganizationsIdMembers");}// verify the required parameter 'fullName' is set
if(fullName===undefined||fullName===null){throw new _Error["default"]("Missing the required parameter 'fullName' when calling putOrganizationsIdMembers");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'email':email,'fullName':fullName,'type':opts['type']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/organizations/{id}/members','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putOrganizationsIdMembersIdmember operation.
     * @callback module:api/DefaultApi~putOrganizationsIdMembersIdmemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OneOfMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Member of an Organization
     * Add a member to a team or update their member type.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {module:model/OneOfstringstring} idMember The ID or username of the member to update
     * @param {module:model/String} type One of: `admin`, `normal`
     * @param {module:api/DefaultApi~putOrganizationsIdMembersIdmemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OneOfMember}
     */},{key:"putOrganizationsIdMembersIdmember",value:function putOrganizationsIdMembersIdmember(key,token,id,idMember,type,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putOrganizationsIdMembersIdmember");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putOrganizationsIdMembersIdmember");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putOrganizationsIdMembersIdmember");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling putOrganizationsIdMembersIdmember");}// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new _Error["default"]("Missing the required parameter 'type' when calling putOrganizationsIdMembersIdmember");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token,'type':type};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_OneOfMember["default"];return this.apiClient.callApi('/organizations/{id}/members/{idMember}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putOrganizationsIdMembersIdmemberDeactivated operation.
     * @callback module:api/DefaultApi~putOrganizationsIdMembersIdmemberDeactivatedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deactivate or reactivate a member of an Organization
     * Deactivate or reactivate a member of a team
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {module:model/OneOfstringstring} idMember The ID or username of the member to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.value 
     * @param {module:api/DefaultApi~putOrganizationsIdMembersIdmemberDeactivatedCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putOrganizationsIdMembersIdmemberDeactivated",value:function putOrganizationsIdMembersIdmemberDeactivated(key,token,id,idMember,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putOrganizationsIdMembersIdmemberDeactivated");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putOrganizationsIdMembersIdmemberDeactivated");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putOrganizationsIdMembersIdmemberDeactivated");}// verify the required parameter 'idMember' is set
if(idMember===undefined||idMember===null){throw new _Error["default"]("Missing the required parameter 'idMember' when calling putOrganizationsIdMembersIdmemberDeactivated");}var pathParams={'id':id,'idMember':idMember};var queryParams={'key':key,'token':token,'value':opts['value']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/organizations/{id}/members/{idMember}/deactivated','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putPluginsId operation.
     * @callback module:api/DefaultApi~putPluginsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Plugin} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Plugin
     * Update a Plugin
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id The ID or name of the organization
     * @param {module:api/DefaultApi~putPluginsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Plugin}
     */},{key:"putPluginsId",value:function putPluginsId(key,token,id,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putPluginsId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putPluginsId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putPluginsId");}var pathParams={'id':id};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Plugin["default"];return this.apiClient.callApi('/plugins/{id}/','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putPluginsIdpluginListingsIdlisting operation.
     * @callback module:api/DefaultApi~putPluginsIdpluginListingsIdlistingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PluginListing} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updating Plugin's Listing
     * Update an existing listing for your Power-Up
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} idPlugin The ID of the Power-Up whose listing is being updated.
     * @param {String} idListing The ID of the existing listing for the Power-Up that is being updated.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject5} opts.inlineObject5 
     * @param {module:api/DefaultApi~putPluginsIdpluginListingsIdlistingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PluginListing}
     */},{key:"putPluginsIdpluginListingsIdlisting",value:function putPluginsIdpluginListingsIdlisting(key,token,idPlugin,idListing,opts,callback){opts=opts||{};var postBody=opts['inlineObject5'];// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putPluginsIdpluginListingsIdlisting");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putPluginsIdpluginListingsIdlisting");}// verify the required parameter 'idPlugin' is set
if(idPlugin===undefined||idPlugin===null){throw new _Error["default"]("Missing the required parameter 'idPlugin' when calling putPluginsIdpluginListingsIdlisting");}// verify the required parameter 'idListing' is set
if(idListing===undefined||idListing===null){throw new _Error["default"]("Missing the required parameter 'idListing' when calling putPluginsIdpluginListingsIdlisting");}var pathParams={'idPlugin':idPlugin,'idListing':idListing};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_PluginListing["default"];return this.apiClient.callApi('/plugins/{idPlugin}/listings/{idListing}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putWebhooksId operation.
     * @callback module:api/DefaultApi~putWebhooksIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Webhook
     * Update a webhook by ID.
     * @param {String} id ID of the webhook to retrieve.
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.description A string with a length from `0` to `16384`.
     * @param {String} opts.callbackURL A valid URL that is reachable with a `HEAD` and `POST` request.
     * @param {String} opts.idModel ID of the model to be monitored
     * @param {Boolean} opts.active Determines whether the webhook is active and sending `POST` requests.
     * @param {module:api/DefaultApi~putWebhooksIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */},{key:"putWebhooksId",value:function putWebhooksId(id,key,token,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling putWebhooksId");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling putWebhooksId");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling putWebhooksId");}var pathParams={'id':id};var queryParams={'key':key,'token':token,'description':opts['description'],'callbackURL':opts['callbackURL'],'idModel':opts['idModel'],'active':opts['active']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=['application/json'];var returnType=_Webhook["default"];return this.apiClient.callApi('/webhooks/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the tokenstokenwebhooks1 operation.
     * @callback module:api/DefaultApi~tokenstokenwebhooks1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Webhook created by Token
     * Update a Webhook created by Token
     * @param {String} token 
     * @param {String} idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
     * @param {String} key The API key to use
     * @param {String} token2 The API token to use
     * @param {Object} opts Optional parameters
     * @param {String} opts.description A description to be displayed when retrieving information about the webhook.
     * @param {String} opts.callbackURL The URL that the webhook should `POST` information to.
     * @param {String} opts.idModel ID of the object that the webhook is on.
     * @param {module:api/DefaultApi~tokenstokenwebhooks1Callback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"tokenstokenwebhooks1",value:function tokenstokenwebhooks1(token,idWebhook,key,token2,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling tokenstokenwebhooks1");}// verify the required parameter 'idWebhook' is set
if(idWebhook===undefined||idWebhook===null){throw new _Error["default"]("Missing the required parameter 'idWebhook' when calling tokenstokenwebhooks1");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling tokenstokenwebhooks1");}// verify the required parameter 'token2' is set
if(token2===undefined||token2===null){throw new _Error["default"]("Missing the required parameter 'token2' when calling tokenstokenwebhooks1");}var pathParams={'token':token,'idWebhook':idWebhook};var queryParams={'key':key,'token':token2,'description':opts['description'],'callbackURL':opts['callbackURL'],'idModel':opts['idModel']};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/tokens/{token}/webhooks/{idWebhook}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the webhooksidfield operation.
     * @callback module:api/DefaultApi~webhooksidfieldCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a field on a Webhook
     * Get a field on a Webhook
     * @param {String} key The API key to use
     * @param {String} token The API token to use
     * @param {String} id ID of the webhook.
     * @param {module:model/String} field Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`
     * @param {module:api/DefaultApi~webhooksidfieldCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"webhooksidfield",value:function webhooksidfield(key,token,id,field,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new _Error["default"]("Missing the required parameter 'key' when calling webhooksidfield");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new _Error["default"]("Missing the required parameter 'token' when calling webhooksidfield");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new _Error["default"]("Missing the required parameter 'id' when calling webhooksidfield");}// verify the required parameter 'field' is set
if(field===undefined||field===null){throw new _Error["default"]("Missing the required parameter 'field' when calling webhooksidfield");}var pathParams={'id':id,'field':field};var queryParams={'key':key,'token':token};var headerParams={};var formParams={};var authNames=['APIKey','APIToken'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/webhooks/{id}/{field}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}}]);return DefaultApi;}();exports["default"]=DefaultApi;