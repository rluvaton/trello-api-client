# TrelloRestApi.DefaultApi

All URIs are relative to *https://api.trello.com/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationsKeyCompliance**](DefaultApi.md#applicationsKeyCompliance) | **GET** /applications/{key}/compliance | Get Application&#39;s compliance data
[**boardsIdChecklists**](DefaultApi.md#boardsIdChecklists) | **GET** /boards/{id}/checklists | Get Checklists on a Board
[**boardsidmembersidmember**](DefaultApi.md#boardsidmembersidmember) | **DELETE** /boards/{id}/members/{idMember} | Remove Member from Board
[**cardsidmembersvoted1**](DefaultApi.md#cardsidmembersvoted1) | **POST** /cards/{id}/membersVoted | Add Member vote to Card
[**deleteActionsId**](DefaultApi.md#deleteActionsId) | **DELETE** /actions/{id} | Delete an Action
[**deleteActionsIdactionReactionsId**](DefaultApi.md#deleteActionsIdactionReactionsId) | **DELETE** /actions/{idAction}/reactions/{id} | Delete Action&#39;s Reaction
[**deleteBoardsId**](DefaultApi.md#deleteBoardsId) | **DELETE** /boards/{id} | Delete a Board
[**deleteBoardsIdBoardplugins**](DefaultApi.md#deleteBoardsIdBoardplugins) | **DELETE** /boards/{id}/boardPlugins/{idPlugin} | Disable a Power-Up on a Board
[**deleteBoardsIdPowerups**](DefaultApi.md#deleteBoardsIdPowerups) | **DELETE** /boards/{id}/powerUps/{powerUp} | Disable Power-Up on a Board
[**deleteCardsId**](DefaultApi.md#deleteCardsId) | **DELETE** /cards/{id} | Delete a Card
[**deleteCardsIdActionsIdComments**](DefaultApi.md#deleteCardsIdActionsIdComments) | **DELETE** /cards/{id}/actions/{idAction}/comments | Delete a comment on a Card
[**deleteCardsIdCheckitemIdcheckitem**](DefaultApi.md#deleteCardsIdCheckitemIdcheckitem) | **DELETE** /cards/{id}/checkItem/{idCheckItem} | Delete checkItem on a Card
[**deleteCardsIdChecklistsIdchecklist**](DefaultApi.md#deleteCardsIdChecklistsIdchecklist) | **DELETE** /cards/{id}/checklists/{idChecklist} | Delete a Checklist on a Card
[**deleteCardsIdIdlabelsIdlabel**](DefaultApi.md#deleteCardsIdIdlabelsIdlabel) | **DELETE** /cards/{id}/idLabels/{idLabel} | Remove a Label from a Card
[**deleteCardsIdMembersvotedIdmember**](DefaultApi.md#deleteCardsIdMembersvotedIdmember) | **DELETE** /cards/{id}/membersVoted/{idMember} | Remove a Member&#39;s Vote on a Card
[**deleteCardsIdStickersIdsticker**](DefaultApi.md#deleteCardsIdStickersIdsticker) | **DELETE** /cards/{id}/stickers/{idSticker} | Delete a Sticker on a Card
[**deleteChecklistsId**](DefaultApi.md#deleteChecklistsId) | **DELETE** /checklists/{id} | Delete a Checklist
[**deleteChecklistsIdCheckitemsIdcheckitem**](DefaultApi.md#deleteChecklistsIdCheckitemsIdcheckitem) | **DELETE** /checklists/{id}/checkItems/{idCheckItem} | Delete Checkitem from Checklist
[**deleteCustomfieldsId**](DefaultApi.md#deleteCustomfieldsId) | **DELETE** /customFields/{id} | Delete a Custom Field definition
[**deleteCustomfieldsOptionsIdcustomfieldoption**](DefaultApi.md#deleteCustomfieldsOptionsIdcustomfieldoption) | **DELETE** /customFields/{id}/options/{idCustomFieldOption} | Delete Option of Custom Field dropdown
[**deleteEnterprisesIdOrganizationsIdorg**](DefaultApi.md#deleteEnterprisesIdOrganizationsIdorg) | **DELETE** /enterprises/{id}/organizations/{idOrg} | Delete an Organization from an Enterprise.
[**deleteIdIdmembersIdmember**](DefaultApi.md#deleteIdIdmembersIdmember) | **DELETE** /cards/{id}/idMembers/{idMember} | Remove a Member from a Card
[**deleteLabelsId**](DefaultApi.md#deleteLabelsId) | **DELETE** /labels/{id} | Delete a Label
[**deleteMembersIdBoardbackgroundsIdbackground**](DefaultApi.md#deleteMembersIdBoardbackgroundsIdbackground) | **DELETE** /members/{id}/boardBackgrounds/{idBackground} | Delete a Member&#39;s custom Board background
[**deleteMembersIdBoardstarsIdstar**](DefaultApi.md#deleteMembersIdBoardstarsIdstar) | **DELETE** /members/{id}/boardStars/{idStar} | Delete Star for Board
[**deleteMembersIdCustomboardbackgroundsIdbackground**](DefaultApi.md#deleteMembersIdCustomboardbackgroundsIdbackground) | **DELETE** /members/{id}/customBoardBackgrounds/{idBackground} | Delete custom Board Background of Member
[**deleteMembersIdCustomstickersIdsticker**](DefaultApi.md#deleteMembersIdCustomstickersIdsticker) | **DELETE** /members/{id}/customStickers/{idSticker} | Delete a Member&#39;s custom Sticker
[**deleteMembersIdSavedsearchesIdsearch**](DefaultApi.md#deleteMembersIdSavedsearchesIdsearch) | **DELETE** /members/{id}/savedSearches/{idSearch} | Delete a saved search
[**deleteOrganizationsId**](DefaultApi.md#deleteOrganizationsId) | **DELETE** /organizations/{id} | Delete an Organization
[**deleteOrganizationsIdLogo**](DefaultApi.md#deleteOrganizationsIdLogo) | **DELETE** /organizations/{id}/logo | Delete Logo for Organization
[**deleteOrganizationsIdMembers**](DefaultApi.md#deleteOrganizationsIdMembers) | **DELETE** /organizations/{id}/members/{idMember} | Remove a Member from an Organization
[**deleteOrganizationsIdPrefsAssociateddomain**](DefaultApi.md#deleteOrganizationsIdPrefsAssociateddomain) | **DELETE** /organizations/{id}/prefs/associatedDomain | Remove the associated Google Apps domain from a team
[**deleteOrganizationsIdPrefsOrginviterestrict**](DefaultApi.md#deleteOrganizationsIdPrefsOrginviterestrict) | **DELETE** /organizations/{id}/prefs/orgInviteRestrict | Delete the email domain restriction on who can be invited to the team
[**deleteOrganizationsIdTagsIdtag**](DefaultApi.md#deleteOrganizationsIdTagsIdtag) | **DELETE** /organizations/{id}/tags/{idTag} | Delete an Organization&#39;s Tag
[**deleteToken**](DefaultApi.md#deleteToken) | **DELETE** /tokens/{token}/ | Delete a Token
[**deleteTokensTokenWebhooksIdwebhook**](DefaultApi.md#deleteTokensTokenWebhooksIdwebhook) | **DELETE** /tokens/{token}/webhooks/{idWebhook} | Delete a Webhook created by Token
[**deleteWebhooksId**](DefaultApi.md#deleteWebhooksId) | **DELETE** /webhooks/{id} | Delete a Webhook
[**deletedCardsIdAttachmentsIdattachment**](DefaultApi.md#deletedCardsIdAttachmentsIdattachment) | **DELETE** /cards/{id}/attachments/{idAttachment} | Delete an Attachment on a Card
[**emoji**](DefaultApi.md#emoji) | **GET** /emoji | List available Emoji
[**enterprisesIdMembersIdMemberDeactivated**](DefaultApi.md#enterprisesIdMembersIdMemberDeactivated) | **PUT** /enterprises/{id}/members/{idMember}/deactivated | Deactivate a Member of an Enterprise.
[**enterprisesIdOrganizationsIdmember**](DefaultApi.md#enterprisesIdOrganizationsIdmember) | **DELETE** /enterprises/{id}/organizations/{idMember} | Remove a Member as admin from Enterprise.
[**getActionsId**](DefaultApi.md#getActionsId) | **GET** /actions/{id} | Get an Action
[**getActionsIdBoard**](DefaultApi.md#getActionsIdBoard) | **GET** /actions/{id}/board | Get the Board for an Action
[**getActionsIdCard**](DefaultApi.md#getActionsIdCard) | **GET** /actions/{id}/card | Get the Card for an Action
[**getActionsIdField**](DefaultApi.md#getActionsIdField) | **GET** /actions/{id}/{field} | Get a specific field on an Action
[**getActionsIdList**](DefaultApi.md#getActionsIdList) | **GET** /actions/{id}/list | Get the List for an Action
[**getActionsIdMember**](DefaultApi.md#getActionsIdMember) | **GET** /actions/{id}/member | Get the Member of an Action
[**getActionsIdMembercreator**](DefaultApi.md#getActionsIdMembercreator) | **GET** /actions/{id}/memberCreator | Get the Member Creator of an Action
[**getActionsIdOrganization**](DefaultApi.md#getActionsIdOrganization) | **GET** /actions/{id}/organization | Get the Organization of an Action
[**getActionsIdactionReactions**](DefaultApi.md#getActionsIdactionReactions) | **GET** /actions/{idAction}/reactions | Get Action&#39;s Reactions
[**getActionsIdactionReactionsId**](DefaultApi.md#getActionsIdactionReactionsId) | **GET** /actions/{idAction}/reactions/{id} | Get Action&#39;s Reaction
[**getActionsIdactionReactionsummary**](DefaultApi.md#getActionsIdactionReactionsummary) | **GET** /actions/{idAction}/reactionsSummary | List Action&#39;s summary of Reactions
[**getBatch**](DefaultApi.md#getBatch) | **GET** /batch | Batch Requests
[**getBoardIdPlugins**](DefaultApi.md#getBoardIdPlugins) | **GET** /boards/{id}/plugins | Get Power-Ups on a Board
[**getBoardsId**](DefaultApi.md#getBoardsId) | **GET** /boards/{id} | Get a Board
[**getBoardsIdActions**](DefaultApi.md#getBoardsIdActions) | **GET** /boards/{boardId}/actions | Get Actions of a Board
[**getBoardsIdBoardplugins**](DefaultApi.md#getBoardsIdBoardplugins) | **GET** /boards/{id}/boardPlugins | Get Enabled Power-Ups on Board
[**getBoardsIdBoardstars**](DefaultApi.md#getBoardsIdBoardstars) | **GET** /boards/{boardId}/boardStars | Get boardStars on a Board
[**getBoardsIdCards**](DefaultApi.md#getBoardsIdCards) | **GET** /boards/{id}/cards | Get Cards on a Board
[**getBoardsIdCardsFilter**](DefaultApi.md#getBoardsIdCardsFilter) | **GET** /boards/{id}/cards/{filter} | Get filtered Cards on a Board
[**getBoardsIdCardsIdcard**](DefaultApi.md#getBoardsIdCardsIdcard) | **GET** /boards/{id}/cards/{idCard} | Get a Card on a Board
[**getBoardsIdCustomfields**](DefaultApi.md#getBoardsIdCustomfields) | **GET** /boards/{id}/customFields | Get Custom Fields for Board
[**getBoardsIdField**](DefaultApi.md#getBoardsIdField) | **GET** /boards/{id}/{field} | Get a field on a Board
[**getBoardsIdLabels**](DefaultApi.md#getBoardsIdLabels) | **GET** /boards/{id}/labels | Get Labels on a Board
[**getBoardsIdLists**](DefaultApi.md#getBoardsIdLists) | **GET** /boards/{id}/lists | Get Lists on a Board
[**getBoardsIdListsFilter**](DefaultApi.md#getBoardsIdListsFilter) | **GET** /boards/{id}/lists/{filter} | Get filtered Lists on a Board
[**getBoardsIdMembers**](DefaultApi.md#getBoardsIdMembers) | **GET** /boards/{id}/members | Get the Members of a Board
[**getBoardsIdMemberships**](DefaultApi.md#getBoardsIdMemberships) | **GET** /boards/{id}/memberships | Get Memberships of a Board
[**getCardsId**](DefaultApi.md#getCardsId) | **GET** /cards/{id} | Get a Card
[**getCardsIdActions**](DefaultApi.md#getCardsIdActions) | **GET** /cards/{id}/actions | Get Actions on a Card
[**getCardsIdAttachments**](DefaultApi.md#getCardsIdAttachments) | **GET** /cards/{id}/attachments | Get Attachments on a Card
[**getCardsIdAttachmentsIdattachment**](DefaultApi.md#getCardsIdAttachmentsIdattachment) | **GET** /cards/{id}/attachments/{idAttachment} | Get an Attachment on a Card
[**getCardsIdBoard**](DefaultApi.md#getCardsIdBoard) | **GET** /cards/{id}/board | Get the Board the Card is on
[**getCardsIdCheckitemIdcheckitem**](DefaultApi.md#getCardsIdCheckitemIdcheckitem) | **GET** /cards/{id}/checkItem/{idCheckItem} | Get checkItem on a Card
[**getCardsIdCheckitemstates**](DefaultApi.md#getCardsIdCheckitemstates) | **GET** /cards/{id}/checkItemStates | Get checkItems on a Card
[**getCardsIdChecklists**](DefaultApi.md#getCardsIdChecklists) | **GET** /cards/{id}/checklists | Get Checklists on a Card
[**getCardsIdCustomfielditems**](DefaultApi.md#getCardsIdCustomfielditems) | **GET** /cards/{id}/customFieldItems | Get Custom Field Items for a Card
[**getCardsIdField**](DefaultApi.md#getCardsIdField) | **GET** /cards/{id}/{field} | Get a field on a Card
[**getCardsIdList**](DefaultApi.md#getCardsIdList) | **GET** /cards/{id}/list | Get the List of a Card
[**getCardsIdMembers**](DefaultApi.md#getCardsIdMembers) | **GET** /cards/{id}/members | Get the Members of a Card
[**getCardsIdMembersvoted**](DefaultApi.md#getCardsIdMembersvoted) | **GET** /cards/{id}/membersVoted | Get Members who have voted on a Card
[**getCardsIdPlugindata**](DefaultApi.md#getCardsIdPlugindata) | **GET** /cards/{id}/pluginData | Get pluginData on a Card
[**getCardsIdStickers**](DefaultApi.md#getCardsIdStickers) | **GET** /cards/{id}/stickers | Get Stickers on a Card
[**getCardsIdStickersIdsticker**](DefaultApi.md#getCardsIdStickersIdsticker) | **GET** /cards/{id}/stickers/{idSticker} | Get a Sticker on a Card
[**getChecklistsId**](DefaultApi.md#getChecklistsId) | **GET** /checklists/{id} | Get a Checklist
[**getChecklistsIdBoard**](DefaultApi.md#getChecklistsIdBoard) | **GET** /checklists/{id}/board | Get the Board the Checklist is on
[**getChecklistsIdCards**](DefaultApi.md#getChecklistsIdCards) | **GET** /checklists/{id}/cards | Get the Card a Checklist is on
[**getChecklistsIdCheckitems**](DefaultApi.md#getChecklistsIdCheckitems) | **GET** /checklists/{id}/checkItems | Get Checkitems on a Checklist
[**getChecklistsIdCheckitemsIdcheckitem**](DefaultApi.md#getChecklistsIdCheckitemsIdcheckitem) | **GET** /checklists/{id}/checkItems/{idCheckItem} | Get a Checkitem on a Checklist
[**getChecklistsIdField**](DefaultApi.md#getChecklistsIdField) | **GET** /checklists/{id}/{field} | Get field on a Checklist
[**getCustomfieldsId**](DefaultApi.md#getCustomfieldsId) | **GET** /customFields/{id} | Get a Custom Field
[**getCustomfieldsIdOptions**](DefaultApi.md#getCustomfieldsIdOptions) | **POST** /customFields/{id}/options | Add Option to Custom Field dropdown
[**getCustomfieldsOptionsIdcustomfieldoption**](DefaultApi.md#getCustomfieldsOptionsIdcustomfieldoption) | **GET** /customFields/{id}/options/{idCustomFieldOption} | Get Option of Custom Field dropdown
[**getEnterprisesId**](DefaultApi.md#getEnterprisesId) | **GET** /enterprises/{id} | Get an Enterprise
[**getEnterprisesIdAdmins**](DefaultApi.md#getEnterprisesIdAdmins) | **GET** /enterprises/{id}/admins | Get Enterprise admin Members
[**getEnterprisesIdAuditlog**](DefaultApi.md#getEnterprisesIdAuditlog) | **GET** /enterprises/{id}/auditlog | Get auditlog data for an Enterprise
[**getEnterprisesIdMembers**](DefaultApi.md#getEnterprisesIdMembers) | **GET** /enterprises/{id}/members | Get Members of Enterprise
[**getEnterprisesIdMembersIdmember**](DefaultApi.md#getEnterprisesIdMembersIdmember) | **GET** /enterprises/{id}/members/{idMember} | Get a Member of Enterprise
[**getEnterprisesIdSignupurl**](DefaultApi.md#getEnterprisesIdSignupurl) | **GET** /enterprises/{id}/signupUrl | Get signupUrl for Enterprise
[**getEnterprisesIdTransferrableOrganizationIdOrganization**](DefaultApi.md#getEnterprisesIdTransferrableOrganizationIdOrganization) | **GET** /enterprises/{id}/transferrable/organization/{idOrganization} | Get whether an organization can be transferred to an enterprise.
[**getLabelsId**](DefaultApi.md#getLabelsId) | **GET** /labels/{id} | Get a Label
[**getListsId**](DefaultApi.md#getListsId) | **GET** /lists/{id} | Get a List
[**getListsIdActions**](DefaultApi.md#getListsIdActions) | **GET** /lists/{id}/actions | Get Actions for a List
[**getListsIdBoard**](DefaultApi.md#getListsIdBoard) | **GET** /lists/{id}/board | Get the Board a List is on
[**getListsIdCards**](DefaultApi.md#getListsIdCards) | **GET** /lists/{id}/cards | Get Cards in a List
[**getMembersIdActions**](DefaultApi.md#getMembersIdActions) | **GET** /members/{id}/actions | Get a Member&#39;s Actions
[**getMembersIdBoardbackgrounds**](DefaultApi.md#getMembersIdBoardbackgrounds) | **GET** /members/{id}/boardBackgrounds | Get Member&#39;s custom Board backgrounds
[**getMembersIdBoardbackgroundsIdbackground**](DefaultApi.md#getMembersIdBoardbackgroundsIdbackground) | **GET** /members/{id}/boardBackgrounds/{idBackground} | Get a boardBackground of a Member
[**getMembersIdBoards**](DefaultApi.md#getMembersIdBoards) | **GET** /members/{id}/boards | Get Boards that Member belongs to
[**getMembersIdBoardsinvited**](DefaultApi.md#getMembersIdBoardsinvited) | **GET** /members/{id}/boardsInvited | Get Boards the Member has been invited to
[**getMembersIdBoardstars**](DefaultApi.md#getMembersIdBoardstars) | **GET** /members/{id}/boardStars | Get a Member&#39;s boardStars
[**getMembersIdBoardstarsIdstar**](DefaultApi.md#getMembersIdBoardstarsIdstar) | **GET** /members/{id}/boardStars/{idStar} | Get a boardStar of Member
[**getMembersIdCards**](DefaultApi.md#getMembersIdCards) | **GET** /members/{id}/cards | Get Cards the Member is on
[**getMembersIdCustomboardbackgrounds**](DefaultApi.md#getMembersIdCustomboardbackgrounds) | **GET** /members/{id}/customBoardBackgrounds | Get a Member&#39;s custom Board Backgrounds
[**getMembersIdCustomboardbackgroundsIdbackground**](DefaultApi.md#getMembersIdCustomboardbackgroundsIdbackground) | **GET** /members/{id}/customBoardBackgrounds/{idBackground} | Get custom Board Background of Member
[**getMembersIdCustomemoji**](DefaultApi.md#getMembersIdCustomemoji) | **GET** /members/{id}/customEmoji | Get a Member&#39;s customEmojis
[**getMembersIdCustomstickers**](DefaultApi.md#getMembersIdCustomstickers) | **GET** /members/{id}/customStickers | Get Member&#39;s custom Stickers
[**getMembersIdCustomstickersIdsticker**](DefaultApi.md#getMembersIdCustomstickersIdsticker) | **GET** /members/{id}/customStickers/{idSticker} | Get a Member&#39;s custom Sticker
[**getMembersIdField**](DefaultApi.md#getMembersIdField) | **GET** /members/{id}/{field} | Get a field on a Member
[**getMembersIdNotifications**](DefaultApi.md#getMembersIdNotifications) | **GET** /members/{id}/notifications | Get Member&#39;s Notifications
[**getMembersIdOrganizations**](DefaultApi.md#getMembersIdOrganizations) | **GET** /members/{id}/organizations | Get Member&#39;s Organizations
[**getMembersIdOrganizationsinvited**](DefaultApi.md#getMembersIdOrganizationsinvited) | **GET** /members/{id}/organizationsInvited | Get Organizations a Member has been invited to
[**getMembersIdSavedsearches**](DefaultApi.md#getMembersIdSavedsearches) | **GET** /members/{id}/savedSearches | Get Member&#39;s saved searched
[**getMembersIdSavedsearchesIdsearch**](DefaultApi.md#getMembersIdSavedsearchesIdsearch) | **GET** /members/{id}/savedSearches/{idSearch} | Get a saved search
[**getMembersIdTokens**](DefaultApi.md#getMembersIdTokens) | **GET** /members/{id}/tokens | Get Member&#39;s Tokens
[**getMembersid**](DefaultApi.md#getMembersid) | **GET** /members/{id} | Get a Member
[**getNotificationsId**](DefaultApi.md#getNotificationsId) | **GET** /notifications/{id} | Get a Notification
[**getNotificationsIdBoard**](DefaultApi.md#getNotificationsIdBoard) | **GET** /notifications/{id}/board | Get the Board a Notification is on
[**getNotificationsIdCard**](DefaultApi.md#getNotificationsIdCard) | **GET** /notifications/{id}/card | Get the Card a Notification is on
[**getNotificationsIdField**](DefaultApi.md#getNotificationsIdField) | **GET** /notifications/{id}/{field} | Get a field of a Notification
[**getNotificationsIdList**](DefaultApi.md#getNotificationsIdList) | **GET** /notifications/{id}/list | Get the List a Notification is on
[**getNotificationsIdMembercreator**](DefaultApi.md#getNotificationsIdMembercreator) | **GET** /notifications/{id}/memberCreator | Get the Member who created the Notification
[**getNotificationsIdOrganization**](DefaultApi.md#getNotificationsIdOrganization) | **GET** /notifications/{id}/organization | Get a Notification&#39;s associated Organization
[**getOrganizationsId**](DefaultApi.md#getOrganizationsId) | **GET** /organizations/{id} | Get an Organization
[**getOrganizationsIdActions**](DefaultApi.md#getOrganizationsIdActions) | **GET** /organizations/{id}/actions | Get Actions for Organization
[**getOrganizationsIdBoards**](DefaultApi.md#getOrganizationsIdBoards) | **GET** /organizations/{id}/boards | Get Boards in an Organization
[**getOrganizationsIdExports**](DefaultApi.md#getOrganizationsIdExports) | **GET** /organizations/{id}/exports | Retrieve Organization&#39;s Exports
[**getOrganizationsIdField**](DefaultApi.md#getOrganizationsIdField) | **GET** /organizations/{id}/{field} | Get field on Organization
[**getOrganizationsIdMembers**](DefaultApi.md#getOrganizationsIdMembers) | **GET** /organizations/{id}/members | Get the Members of an Organization
[**getOrganizationsIdMemberships**](DefaultApi.md#getOrganizationsIdMemberships) | **GET** /organizations/{id}/memberships | Get Memberships of an Organization
[**getOrganizationsIdMembershipsIdmembership**](DefaultApi.md#getOrganizationsIdMembershipsIdmembership) | **GET** /organizations/{id}/memberships/{idMembership} | Get a Membership of an Organization
[**getOrganizationsIdNewbillableguestsIdboard**](DefaultApi.md#getOrganizationsIdNewbillableguestsIdboard) | **GET** /organizations/{id}/newBillableGuests/{idBoard} | Get Organizations new billable guests
[**getOrganizationsIdPlugindata**](DefaultApi.md#getOrganizationsIdPlugindata) | **GET** /organizations/{id}/pluginData | Get the pluginData Scoped to Organization
[**getOrganizationsIdTags**](DefaultApi.md#getOrganizationsIdTags) | **GET** /organizations/{id}/tags | Get Tags of an Organization
[**getPluginsId**](DefaultApi.md#getPluginsId) | **GET** /plugins/{id}/ | Get a Plugin
[**getPluginsIdComplianceMemberprivacy**](DefaultApi.md#getPluginsIdComplianceMemberprivacy) | **GET** /plugins/{id}/compliance/memberPrivacy | Get Plugin&#39;s Member privacy compliance
[**getSearch**](DefaultApi.md#getSearch) | **GET** /search | Search Trello
[**getSearchMembers**](DefaultApi.md#getSearchMembers) | **GET** /search/members/ | Search for Members
[**getTokensToken**](DefaultApi.md#getTokensToken) | **GET** /tokens/{token} | Get a Token
[**getTokensTokenMember**](DefaultApi.md#getTokensTokenMember) | **GET** /tokens/{token}/member | Get Token&#39;s Member
[**getTokensTokenWebhooks**](DefaultApi.md#getTokensTokenWebhooks) | **GET** /tokens/{token}/webhooks | Get Webhooks for Token
[**getTokensTokenWebhooksIdwebhook**](DefaultApi.md#getTokensTokenWebhooksIdwebhook) | **GET** /tokens/{token}/webhooks/{idWebhook} | Get a Webhook belonging to a Token
[**getWebhooksId**](DefaultApi.md#getWebhooksId) | **GET** /webhooks/{id} | Get a Webhook
[**membersidavatar**](DefaultApi.md#membersidavatar) | **POST** /members/{id}/avatar | Create Avatar for Member
[**membersidcustomboardbackgrounds1**](DefaultApi.md#membersidcustomboardbackgrounds1) | **POST** /members/{id}/customBoardBackgrounds | Create a new custom Board Background
[**membersidcustomemojiidemoji**](DefaultApi.md#membersidcustomemojiidemoji) | **GET** /members/{id}/customEmoji/{idEmoji} | Get a Member&#39;s custom Emoji
[**notificationsidmember**](DefaultApi.md#notificationsidmember) | **GET** /notifications/{id}/member | Get the Member a Notification is about (not the creator)
[**organizationsIdMembersIdmemberAll**](DefaultApi.md#organizationsIdMembersIdmemberAll) | **DELETE** /organizations/{id}/members/{idMember}/all | Remove a Member from an Organization and all Organization Boards
[**postActionsIdactionReactions**](DefaultApi.md#postActionsIdactionReactions) | **POST** /actions/{idAction}/reactions | Create Reaction for Action
[**postBoards**](DefaultApi.md#postBoards) | **POST** /boards/ | Create a Board
[**postBoardsIdBoardplugins**](DefaultApi.md#postBoardsIdBoardplugins) | **POST** /boards/{id}/boardPlugins | Enable a Power-Up on a Board
[**postBoardsIdCalendarkeyGenerate**](DefaultApi.md#postBoardsIdCalendarkeyGenerate) | **POST** /boards/{id}/calendarKey/generate | Create a calendarKey for a Board
[**postBoardsIdChecklists**](DefaultApi.md#postBoardsIdChecklists) | **POST** /boards/{id}/checklists | Create Checklist on a Board
[**postBoardsIdEmailkeyGenerate**](DefaultApi.md#postBoardsIdEmailkeyGenerate) | **POST** /boards/{id}/emailKey/generate | Create a emailKey for a Board
[**postBoardsIdIdtags**](DefaultApi.md#postBoardsIdIdtags) | **POST** /boards/{id}/idTags | Create a Tag for a Board
[**postBoardsIdLabels**](DefaultApi.md#postBoardsIdLabels) | **POST** /boards/{id}/labels | Create a Label on a Board
[**postBoardsIdLists**](DefaultApi.md#postBoardsIdLists) | **POST** /boards/{id}/lists | Create a List on a Board
[**postBoardsIdMarkedasviewed**](DefaultApi.md#postBoardsIdMarkedasviewed) | **POST** /boards/{id}/markedAsViewed | Mark Board as viewed
[**postBoardsIdPowerups**](DefaultApi.md#postBoardsIdPowerups) | **POST** /boards/{id}/powerUps | Enable Power-Up on a Board
[**postCards**](DefaultApi.md#postCards) | **POST** /cards | Create a new Card
[**postCardsIdActionsComments**](DefaultApi.md#postCardsIdActionsComments) | **POST** /cards/{id}/actions/comments | Add a new comment to a Card
[**postCardsIdAttachments**](DefaultApi.md#postCardsIdAttachments) | **POST** /cards/{id}/attachments | Create Attachment On Card
[**postCardsIdChecklists**](DefaultApi.md#postCardsIdChecklists) | **POST** /cards/{id}/checklists | Create Checklist on a Card
[**postCardsIdIdlabels**](DefaultApi.md#postCardsIdIdlabels) | **POST** /cards/{id}/idLabels | Add a Label to a Card
[**postCardsIdIdmembers**](DefaultApi.md#postCardsIdIdmembers) | **POST** /cards/{id}/idMembers | Add a Member to a Card
[**postCardsIdLabels**](DefaultApi.md#postCardsIdLabels) | **POST** /cards/{id}/labels | Create a new Label on a Card
[**postCardsIdMarkassociatednotificationsread**](DefaultApi.md#postCardsIdMarkassociatednotificationsread) | **POST** /cards/{id}/markAssociatedNotificationsRead | Mark a Card&#39;s Notifications as read
[**postCardsIdStickers**](DefaultApi.md#postCardsIdStickers) | **POST** /cards/{id}/stickers | Add a Sticker to a Card
[**postChecklists**](DefaultApi.md#postChecklists) | **POST** /checklists | Create a Checklist
[**postChecklistsIdCheckitems**](DefaultApi.md#postChecklistsIdCheckitems) | **POST** /checklists/{id}/checkItems | Create Checkitem on Checklist
[**postCustomfields**](DefaultApi.md#postCustomfields) | **POST** /customFields | Create a new Custom Field on a Board
[**postCustomfieldsIdOptions**](DefaultApi.md#postCustomfieldsIdOptions) | **GET** /customFields/{id}/options | Get Options of Custom Field drop down
[**postEnterprisesIdTokens**](DefaultApi.md#postEnterprisesIdTokens) | **POST** /enterprises/{id}/tokens | Create an auth Token for an Enterprise.
[**postLabels**](DefaultApi.md#postLabels) | **POST** /labels | Create a Label
[**postLists**](DefaultApi.md#postLists) | **POST** /lists | Create a new List
[**postListsIdArchiveallcards**](DefaultApi.md#postListsIdArchiveallcards) | **POST** /lists/{id}/archiveAllCards | Archive all Cards in List
[**postListsIdMoveallcards**](DefaultApi.md#postListsIdMoveallcards) | **POST** /lists/{id}/moveAllCards | Move all Cards in List
[**postMembersIdBoardbackgrounds1**](DefaultApi.md#postMembersIdBoardbackgrounds1) | **POST** /members/{id}/boardBackgrounds | Upload new boardBackground for Member
[**postMembersIdBoardstars**](DefaultApi.md#postMembersIdBoardstars) | **POST** /members/{id}/boardStars | Create Star for Board
[**postMembersIdCustomemoji**](DefaultApi.md#postMembersIdCustomemoji) | **POST** /members/{id}/customEmoji | Create custom Emoji for Member
[**postMembersIdCustomstickers**](DefaultApi.md#postMembersIdCustomstickers) | **POST** /members/{id}/customStickers | Create custom Sticker for Member
[**postMembersIdOnetimemessagesdismissed**](DefaultApi.md#postMembersIdOnetimemessagesdismissed) | **POST** /members/{id}/oneTimeMessagesDismissed | Dismiss a message for Member
[**postMembersIdSavedsearches**](DefaultApi.md#postMembersIdSavedsearches) | **POST** /members/{id}/savedSearches | Create saved Search for Memer
[**postNotificationsAllRead**](DefaultApi.md#postNotificationsAllRead) | **POST** /notifications/all/read | Mark all Notifications as read
[**postOrganizations**](DefaultApi.md#postOrganizations) | **POST** /organizations | Create a new Organization
[**postOrganizationsIdExports**](DefaultApi.md#postOrganizationsIdExports) | **POST** /organizations/{id}/exports | Create Export for Organizations
[**postOrganizationsIdLogo**](DefaultApi.md#postOrganizationsIdLogo) | **POST** /organizations/{id}/logo | Update logo for an Organization
[**postOrganizationsIdTags**](DefaultApi.md#postOrganizationsIdTags) | **POST** /organizations/{id}/tags | Create a Tag in Organization
[**postPluginsIdpluginListing**](DefaultApi.md#postPluginsIdpluginListing) | **POST** /plugins/{idPlugin}/listing | Create a Listing for Plugin
[**postTokensTokenWebhooks**](DefaultApi.md#postTokensTokenWebhooks) | **POST** /tokens/{token}/webhooks | Create Webhooks for Token
[**postWebhooks**](DefaultApi.md#postWebhooks) | **POST** /webhooks/ | Create a Webhook
[**putActionsId**](DefaultApi.md#putActionsId) | **PUT** /actions/{id} | Update an Action
[**putActionsIdText**](DefaultApi.md#putActionsIdText) | **PUT** /actions/{id}/text | Update a Comment Action
[**putBoardsId**](DefaultApi.md#putBoardsId) | **PUT** /boards/{id} | Update a Board
[**putBoardsIdMembers**](DefaultApi.md#putBoardsIdMembers) | **PUT** /boards/{id}/members | Invite Member to Board via email
[**putBoardsIdMembersIdmember**](DefaultApi.md#putBoardsIdMembersIdmember) | **PUT** /boards/{id}/members/{idMember} | Add a Member to a Board
[**putBoardsIdMembershipsIdmembership**](DefaultApi.md#putBoardsIdMembershipsIdmembership) | **PUT** /boards/{id}/memberships/{idMembership} | Update Membership of Member on a Board
[**putBoardsIdMyPrefsShowlistguide**](DefaultApi.md#putBoardsIdMyPrefsShowlistguide) | **PUT** /boards/{id}/myPrefs/showListGuide | Update showListGuide Pref on a Board
[**putBoardsIdMyPrefsShowsidebar**](DefaultApi.md#putBoardsIdMyPrefsShowsidebar) | **PUT** /boards/{id}/myPrefs/showSidebar | Update showSidebar Pref on a Board
[**putBoardsIdMyPrefsShowsidebaractivity**](DefaultApi.md#putBoardsIdMyPrefsShowsidebaractivity) | **PUT** /boards/{id}/myPrefs/showSidebarActivity | Update showSidebarActivity Pref on a Board
[**putBoardsIdMyPrefsShowsidebarboardactions**](DefaultApi.md#putBoardsIdMyPrefsShowsidebarboardactions) | **PUT** /boards/{id}/myPrefs/showSidebarBoardActions | Update showSidebarBoardActions Pref on a Board
[**putBoardsIdMyPrefsShowsidebarmembers**](DefaultApi.md#putBoardsIdMyPrefsShowsidebarmembers) | **PUT** /boards/{id}/myPrefs/showSidebarMembers | Update showSidebarMembers Pref on a Board
[**putBoardsIdMyprefsEmailposition**](DefaultApi.md#putBoardsIdMyprefsEmailposition) | **PUT** /boards/{id}/myPrefs/emailPosition | Update emailPosition Pref on a Board
[**putBoardsIdMyprefsIdemaillist**](DefaultApi.md#putBoardsIdMyprefsIdemaillist) | **PUT** /boards/{id}/myPrefs/idEmailList | Update idEmailList Pref on a Board
[**putCardsId**](DefaultApi.md#putCardsId) | **PUT** /cards/{id} | Update a Card
[**putCardsIdActionsIdactionComments**](DefaultApi.md#putCardsIdActionsIdactionComments) | **PUT** /cards/{id}/actions/{idAction}/comments | Update Comment Action on a Card
[**putCardsIdCheckitemIdcheckitem**](DefaultApi.md#putCardsIdCheckitemIdcheckitem) | **PUT** /cards/{id}/checkItem/{idCheckItem} | Update a checkItem on a Card
[**putCardsIdStickersIdsticker**](DefaultApi.md#putCardsIdStickersIdsticker) | **PUT** /cards/{id}/stickers/{idSticker} | Update a Sticker on a Card
[**putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem**](DefaultApi.md#putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem) | **PUT** /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem} | Update Checkitem on Checklist on Card
[**putCardsIdcardCustomfieldIdcustomfieldItem**](DefaultApi.md#putCardsIdcardCustomfieldIdcustomfieldItem) | **PUT** /cards/{idCard}/customField/{idCustomField}/item | Update Custom Field item on Card
[**putChecklistsIdField**](DefaultApi.md#putChecklistsIdField) | **PUT** /checklists/{id}/{field} | Update field on a Checklist
[**putCheclistsId**](DefaultApi.md#putCheclistsId) | **PUT** /checklists/{id} | Update a Checklist
[**putCustomfieldsId**](DefaultApi.md#putCustomfieldsId) | **PUT** /customFields/{id} | Update a Custom Field definition
[**putEnterprisesIdAdminsIdmember**](DefaultApi.md#putEnterprisesIdAdminsIdmember) | **PUT** /enterprises/{id}/admins/{idMember} | Update Member to be admin of Enterprise
[**putEnterprisesIdMembersIdmemberLicensed**](DefaultApi.md#putEnterprisesIdMembersIdmemberLicensed) | **PUT** /enterprises/{id}/members/{idMember}/licensed | Update a Member&#39;s licensed status
[**putEnterprisesIdOrganizations**](DefaultApi.md#putEnterprisesIdOrganizations) | **PUT** /enterprises/{id}/organizations | Transfer an Organization to an Enterprise.
[**putIdIdboard**](DefaultApi.md#putIdIdboard) | **PUT** /lists/{id}/idBoard | Move List to Board
[**putLabelsId**](DefaultApi.md#putLabelsId) | **PUT** /labels/{id} | Update a Label
[**putLabelsIdField**](DefaultApi.md#putLabelsIdField) | **PUT** /labels/{id}/{field} | Update a field on a label
[**putListsId**](DefaultApi.md#putListsId) | **PUT** /lists/{id} | Update a List
[**putListsIdClosed**](DefaultApi.md#putListsIdClosed) | **PUT** /lists/{id}/closed | Archive or unarchive a list
[**putListsIdField**](DefaultApi.md#putListsIdField) | **PUT** /lists/{id}/{field} | Update a field on a List
[**putMembersId**](DefaultApi.md#putMembersId) | **PUT** /members/{id} | Update a Member
[**putMembersIdBoardbackgroundsIdbackground**](DefaultApi.md#putMembersIdBoardbackgroundsIdbackground) | **PUT** /members/{id}/boardBackgrounds/{idBackground} | Update a Member&#39;s custom Board background
[**putMembersIdBoardstarsIdstar**](DefaultApi.md#putMembersIdBoardstarsIdstar) | **PUT** /members/{id}/boardStars/{idStar} | Update the position of a boardStar of Member
[**putMembersIdCustomboardbackgroundsIdbackground**](DefaultApi.md#putMembersIdCustomboardbackgroundsIdbackground) | **PUT** /members/{id}/customBoardBackgrounds/{idBackground} | Update custom Board Background of Member
[**putMembersIdSavedsearchesIdsearch**](DefaultApi.md#putMembersIdSavedsearchesIdsearch) | **PUT** /members/{id}/savedSearches/{idSearch} | Update a saved search
[**putNotificationsId**](DefaultApi.md#putNotificationsId) | **PUT** /notifications/{id} | Update a Notification&#39;s read status
[**putNotificationsIdUnread**](DefaultApi.md#putNotificationsIdUnread) | **PUT** /notifications/{id}/unread | Update Notification&#39;s read status
[**putOrganizationsId**](DefaultApi.md#putOrganizationsId) | **PUT** /organizations/{id} | Update an Organization
[**putOrganizationsIdMembers**](DefaultApi.md#putOrganizationsIdMembers) | **PUT** /organizations/{id}/members | Update an Organization&#39;s Members
[**putOrganizationsIdMembersIdmember**](DefaultApi.md#putOrganizationsIdMembersIdmember) | **PUT** /organizations/{id}/members/{idMember} | Update a Member of an Organization
[**putOrganizationsIdMembersIdmemberDeactivated**](DefaultApi.md#putOrganizationsIdMembersIdmemberDeactivated) | **PUT** /organizations/{id}/members/{idMember}/deactivated | Deactivate or reactivate a member of an Organization
[**putPluginsId**](DefaultApi.md#putPluginsId) | **PUT** /plugins/{id}/ | Update a Plugin
[**putPluginsIdpluginListingsIdlisting**](DefaultApi.md#putPluginsIdpluginListingsIdlisting) | **PUT** /plugins/{idPlugin}/listings/{idListing} | Updating Plugin&#39;s Listing
[**putWebhooksId**](DefaultApi.md#putWebhooksId) | **PUT** /webhooks/{id} | Update a Webhook
[**tokenstokenwebhooks1**](DefaultApi.md#tokenstokenwebhooks1) | **PUT** /tokens/{token}/webhooks/{idWebhook} | Update a Webhook created by Token
[**webhooksidfield**](DefaultApi.md#webhooksidfield) | **GET** /webhooks/{id}/{field} | Get a field on a Webhook



## applicationsKeyCompliance

> applicationsKeyCompliance(key, key2, token)

Get Application&#39;s compliance data

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | 
let key2 = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
apiInstance.applicationsKeyCompliance(key, key2, token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**|  | 
 **key2** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## boardsIdChecklists

> boardsIdChecklists(key, token, id)

Get Checklists on a Board

Get all of the checklists on a Board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the board
apiInstance.boardsIdChecklists(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the board | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## boardsidmembersidmember

> boardsidmembersidmember(key, token, id, idMember)

Remove Member from Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let idMember = "idMember_example"; // String | The id of the member to add to the board.
apiInstance.boardsidmembersidmember(key, token, id, idMember, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **idMember** | **String**| The id of the member to add to the board. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## cardsidmembersvoted1

> cardsidmembersvoted1(id, key, token, value)

Add Member vote to Card

Vote on the card for a given member.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let value = "value_example"; // String | The ID of the member to vote 'yes' on the card
apiInstance.cardsidmembersvoted1(id, key, token, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **value** | **String**| The ID of the member to vote &#39;yes&#39; on the card | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteActionsId

> deleteActionsId(key, token, id)

Delete an Action

Delete a specific action. Only comment actions can be deleted.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Action
apiInstance.deleteActionsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Action | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteActionsIdactionReactionsId

> deleteActionsIdactionReactionsId(key, token, idAction, id)

Delete Action&#39;s Reaction

Deletes a reaction

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let idAction = "idAction_example"; // String | The ID of the Action
let id = "id_example"; // String | The ID of the reaction
apiInstance.deleteActionsIdactionReactionsId(key, token, idAction, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **idAction** | **String**| The ID of the Action | 
 **id** | **String**| The ID of the reaction | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBoardsId

> deleteBoardsId(key, token, id)

Delete a Board

Delete a board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to delete
apiInstance.deleteBoardsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to delete | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBoardsIdBoardplugins

> deleteBoardsIdBoardplugins(key, token, id, idPlugin)

Disable a Power-Up on a Board

Disable a Power-Up on a board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the board
let idPlugin = "idPlugin_example"; // String | The ID of the Power-Up to disable
apiInstance.deleteBoardsIdBoardplugins(key, token, id, idPlugin, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the board | 
 **idPlugin** | **String**| The ID of the Power-Up to disable | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBoardsIdPowerups

> deleteBoardsIdPowerups(key, token, id, powerUp)

Disable Power-Up on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let powerUp = "powerUp_example"; // String | The Power-Up to be enabled on the board. One of: `calendar`, `cardAging`, `recap`, `voting`.
apiInstance.deleteBoardsIdPowerups(key, token, id, powerUp, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **powerUp** | **String**| The Power-Up to be enabled on the board. One of: &#x60;calendar&#x60;, &#x60;cardAging&#x60;, &#x60;recap&#x60;, &#x60;voting&#x60;. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCardsId

> deleteCardsId(key, token, id)

Delete a Card

Delete a Card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
apiInstance.deleteCardsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCardsIdActionsIdComments

> deleteCardsIdActionsIdComments(key, token, id, idAction)

Delete a comment on a Card

Delete a comment

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let idAction = "idAction_example"; // String | The ID of the comment action to update
apiInstance.deleteCardsIdActionsIdComments(key, token, id, idAction, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **idAction** | **String**| The ID of the comment action to update | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCardsIdCheckitemIdcheckitem

> deleteCardsIdCheckitemIdcheckitem(key, token, id, idCheckItem)

Delete checkItem on a Card

Delete a checklist item

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let idCheckItem = "idCheckItem_example"; // String | The ID of the checkitem
apiInstance.deleteCardsIdCheckitemIdcheckitem(key, token, id, idCheckItem, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **idCheckItem** | **String**| The ID of the checkitem | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCardsIdChecklistsIdchecklist

> deleteCardsIdChecklistsIdchecklist(key, token, id, idChecklist)

Delete a Checklist on a Card

Delete a checklist from a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let idChecklist = "idChecklist_example"; // String | The ID of the checklist to delete
apiInstance.deleteCardsIdChecklistsIdchecklist(key, token, id, idChecklist, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **idChecklist** | **String**| The ID of the checklist to delete | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCardsIdIdlabelsIdlabel

> deleteCardsIdIdlabelsIdlabel(key, token, id, idLabel)

Remove a Label from a Card

Remove a label from a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let idLabel = "idLabel_example"; // String | The ID of the label to remove
apiInstance.deleteCardsIdIdlabelsIdlabel(key, token, id, idLabel, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **idLabel** | **String**| The ID of the label to remove | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCardsIdMembersvotedIdmember

> deleteCardsIdMembersvotedIdmember(key, token, id, idMember)

Remove a Member&#39;s Vote on a Card

Remove a member&#39;s vote from a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let idMember = "idMember_example"; // String | The ID of the member whose vote to remove
apiInstance.deleteCardsIdMembersvotedIdmember(key, token, id, idMember, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **idMember** | **String**| The ID of the member whose vote to remove | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCardsIdStickersIdsticker

> deleteCardsIdStickersIdsticker(key, token, id, idSticker)

Delete a Sticker on a Card

Remove a sticker from the card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let idSticker = "idSticker_example"; // String | The ID of the sticker
apiInstance.deleteCardsIdStickersIdsticker(key, token, id, idSticker, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **idSticker** | **String**| The ID of the sticker | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteChecklistsId

> deleteChecklistsId(key, token, id)

Delete a Checklist

Delete a checklist

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of a checklist.
apiInstance.deleteChecklistsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of a checklist. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteChecklistsIdCheckitemsIdcheckitem

> deleteChecklistsIdCheckitemsIdcheckitem(key, token, id, idCheckItem)

Delete Checkitem from Checklist

Remove an item from a checklist

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of a checklist.
let idCheckItem = "idCheckItem_example"; // String | ID of the check item to retrieve.
apiInstance.deleteChecklistsIdCheckitemsIdcheckitem(key, token, id, idCheckItem, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of a checklist. | 
 **idCheckItem** | **String**| ID of the check item to retrieve. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCustomfieldsId

> deleteCustomfieldsId(key, token, id)

Delete a Custom Field definition

Delete a Custom Field from a board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the Custom Field.
apiInstance.deleteCustomfieldsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the Custom Field. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCustomfieldsOptionsIdcustomfieldoption

> deleteCustomfieldsOptionsIdcustomfieldoption(key, token, id, idCustomFieldOption)

Delete Option of Custom Field dropdown

Delete an option from a Custom Field dropdown.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the customfielditem.
let idCustomFieldOption = "idCustomFieldOption_example"; // String | ID of the customfieldoption to retrieve.
apiInstance.deleteCustomfieldsOptionsIdcustomfieldoption(key, token, id, idCustomFieldOption, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the customfielditem. | 
 **idCustomFieldOption** | **String**| ID of the customfieldoption to retrieve. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteEnterprisesIdOrganizationsIdorg

> deleteEnterprisesIdOrganizationsIdorg(key, token, id, idOrg)

Delete an Organization from an Enterprise.

Remove an organization from an enterprise.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the enterprise to retrieve.
let idOrg = "idOrg_example"; // String | ID of the organization to be removed from the enterprise.
apiInstance.deleteEnterprisesIdOrganizationsIdorg(key, token, id, idOrg, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the enterprise to retrieve. | 
 **idOrg** | **String**| ID of the organization to be removed from the enterprise. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteIdIdmembersIdmember

> deleteIdIdmembersIdmember(key, token, id, idMember)

Remove a Member from a Card

Remove a member from a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let idMember = "idMember_example"; // String | The ID of the member to remove from the card
apiInstance.deleteIdIdmembersIdmember(key, token, id, idMember, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **idMember** | **String**| The ID of the member to remove from the card | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteLabelsId

> deleteLabelsId(key, token, id)

Delete a Label

Delete a label by ID.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Label
apiInstance.deleteLabelsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Label | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteMembersIdBoardbackgroundsIdbackground

> deleteMembersIdBoardbackgroundsIdbackground(key, token, id, idBackground)

Delete a Member&#39;s custom Board background

Delete a board background

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let idBackground = "idBackground_example"; // String | The ID of the board background
apiInstance.deleteMembersIdBoardbackgroundsIdbackground(key, token, id, idBackground, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **idBackground** | **String**| The ID of the board background | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteMembersIdBoardstarsIdstar

> deleteMembersIdBoardstarsIdstar(key, token, id, idStar)

Delete Star for Board

Unstar a board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let idStar = "idStar_example"; // String | The ID of the board star
apiInstance.deleteMembersIdBoardstarsIdstar(key, token, id, idStar, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **idStar** | **String**| The ID of the board star | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteMembersIdCustomboardbackgroundsIdbackground

> deleteMembersIdCustomboardbackgroundsIdbackground(key, token, id, idBackground)

Delete custom Board Background of Member

Delete a specific custom board background

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = new TrelloRestApi.OneOfstringstring(); // OneOfstringstring | The ID or username of the member
let idBackground = "idBackground_example"; // String | The ID of the custom background
apiInstance.deleteMembersIdCustomboardbackgroundsIdbackground(key, token, id, idBackground, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | [**OneOfstringstring**](.md)| The ID or username of the member | 
 **idBackground** | **String**| The ID of the custom background | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteMembersIdCustomstickersIdsticker

> deleteMembersIdCustomstickersIdsticker(key, token, id, idSticker)

Delete a Member&#39;s custom Sticker

Delete a Member&#39;s custom Sticker

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let idSticker = "idSticker_example"; // String | The ID of the uploaded sticker
apiInstance.deleteMembersIdCustomstickersIdsticker(key, token, id, idSticker, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **idSticker** | **String**| The ID of the uploaded sticker | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteMembersIdSavedsearchesIdsearch

> deleteMembersIdSavedsearchesIdsearch(key, token, id, idSearch)

Delete a saved search

Delete a saved search

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let idSearch = "idSearch_example"; // String | The ID of the saved search to delete
apiInstance.deleteMembersIdSavedsearchesIdsearch(key, token, id, idSearch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **idSearch** | **String**| The ID of the saved search to delete | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteOrganizationsId

> deleteOrganizationsId(key, token, id)

Delete an Organization

Delete an Organization

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the Organization
apiInstance.deleteOrganizationsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the Organization | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteOrganizationsIdLogo

> deleteOrganizationsIdLogo(key, token, id)

Delete Logo for Organization

Delete a the logo from a team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
apiInstance.deleteOrganizationsIdLogo(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteOrganizationsIdMembers

> deleteOrganizationsIdMembers(key, token, id, idMember)

Remove a Member from an Organization

Remove a member from a team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = new TrelloRestApi.OneOfstringstring(); // OneOfstringstring | The ID or name of the organization
let idMember = "idMember_example"; // String | The ID of the Member to remove from the team
apiInstance.deleteOrganizationsIdMembers(key, token, id, idMember, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | [**OneOfstringstring**](.md)| The ID or name of the organization | 
 **idMember** | **String**| The ID of the Member to remove from the team | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteOrganizationsIdPrefsAssociateddomain

> deleteOrganizationsIdPrefsAssociateddomain(key, token, id)

Remove the associated Google Apps domain from a team

Remove the associated Google Apps domain from a team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
apiInstance.deleteOrganizationsIdPrefsAssociateddomain(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteOrganizationsIdPrefsOrginviterestrict

> deleteOrganizationsIdPrefsOrginviterestrict(key, token, id)

Delete the email domain restriction on who can be invited to the team

Remove the email domain restriction on who can be invited to the team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
apiInstance.deleteOrganizationsIdPrefsOrginviterestrict(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteOrganizationsIdTagsIdtag

> deleteOrganizationsIdTagsIdtag(key, token, id, idTag)

Delete an Organization&#39;s Tag

Delete an organization&#39;s tag

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
let idTag = "idTag_example"; // String | The ID of the tag to delete
apiInstance.deleteOrganizationsIdTagsIdtag(key, token, id, idTag, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 
 **idTag** | **String**| The ID of the tag to delete | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteToken

> deleteToken(key, token, token2)

Delete a Token

Delete a token.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let token2 = "token_example"; // String | 
apiInstance.deleteToken(key, token, token2, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **token2** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteTokensTokenWebhooksIdwebhook

> deleteTokensTokenWebhooksIdwebhook(key, token, token2, idWebhook)

Delete a Webhook created by Token

Delete a webhook created with given token.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let token2 = "token_example"; // String | 
let idWebhook = "idWebhook_example"; // String | ID of the [Webhooks](ref:webhooks) to retrieve.
apiInstance.deleteTokensTokenWebhooksIdwebhook(key, token, token2, idWebhook, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **token2** | **String**|  | 
 **idWebhook** | **String**| ID of the [Webhooks](ref:webhooks) to retrieve. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteWebhooksId

> deleteWebhooksId(key, token, id)

Delete a Webhook

Delete a webhook by ID.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the webhook to retrieve.
apiInstance.deleteWebhooksId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the webhook to retrieve. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletedCardsIdAttachmentsIdattachment

> deletedCardsIdAttachmentsIdattachment(key, token, id, idAttachment)

Delete an Attachment on a Card

Delete an Attachment

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let idAttachment = "idAttachment_example"; // String | The ID of the attachment to delete
apiInstance.deletedCardsIdAttachmentsIdattachment(key, token, id, idAttachment, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **idAttachment** | **String**| The ID of the attachment to delete | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## emoji

> Emoji emoji(key, token, opts)

List available Emoji

List available Emoji

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'locale': "locale_example", // String | The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.
  'spritesheets': false // Boolean | `true` to return spritesheet URLs in the response
};
apiInstance.emoji(key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **locale** | **String**| The locale to return emoji descriptions and names in. Defaults to the logged in member&#39;s locale. | [optional] 
 **spritesheets** | **Boolean**| &#x60;true&#x60; to return spritesheet URLs in the response | [optional] [default to false]

### Return type

[**Emoji**](Emoji.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enterprisesIdMembersIdMemberDeactivated

> enterprisesIdMembersIdMemberDeactivated(key, token, id, idMember, value, opts)

Deactivate a Member of an Enterprise.

Deactivate a Member of an Enterprise.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the enterprise to retrieve.
let idMember = "idMember_example"; // String | ID of the Member to deactive.
let value = true; // Boolean | Determines whether the user is deactivated or not.
let opts = {
  'fields': new TrelloRestApi.MemberFields(), // MemberFields | A comma separated list of any valid values that the [nested member field resource]() accepts.
  'organizationFields': new TrelloRestApi.OrganizationFields(), // OrganizationFields | Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
  'boardFields': new TrelloRestApi.BoardFields() // BoardFields | Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
};
apiInstance.enterprisesIdMembersIdMemberDeactivated(key, token, id, idMember, value, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the enterprise to retrieve. | 
 **idMember** | **String**| ID of the Member to deactive. | 
 **value** | **Boolean**| Determines whether the user is deactivated or not. | 
 **fields** | [**MemberFields**](.md)| A comma separated list of any valid values that the [nested member field resource]() accepts. | [optional] 
 **organizationFields** | [**OrganizationFields**](.md)| Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. | [optional] 
 **boardFields** | [**BoardFields**](.md)| Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## enterprisesIdOrganizationsIdmember

> enterprisesIdOrganizationsIdmember(key, token, id, idMember)

Remove a Member as admin from Enterprise.

Remove an member as admin from an enterprise.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the Enterprise to retrieve.
let idMember = "idMember_example"; // String | ID of the member to be removed as an admin from enterprise.
apiInstance.enterprisesIdOrganizationsIdmember(key, token, id, idMember, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the Enterprise to retrieve. | 
 **idMember** | **String**| ID of the member to be removed as an admin from enterprise. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActionsId

> getActionsId(id, key, token, opts)

Get an Action

Get an Action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Action
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'display': true, // Boolean | 
  'entities': false, // Boolean | 
  'fields': "'all'", // String | `all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'member': true, // Boolean | 
  'memberFields': "'avatarHash,fullName,initials,username'", // String | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'memberCreator': true, // Boolean | Whether to include the member object for the creator of the action
  'memberCreatorFields': "'avatarHash,fullName,initials,username'" // String | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getActionsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Action | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **display** | **Boolean**|  | [optional] [default to true]
 **entities** | **Boolean**|  | [optional] [default to false]
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] [default to &#39;all&#39;]
 **member** | **Boolean**|  | [optional] [default to true]
 **memberFields** | **String**| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] [default to &#39;avatarHash,fullName,initials,username&#39;]
 **memberCreator** | **Boolean**| Whether to include the member object for the creator of the action | [optional] [default to true]
 **memberCreatorFields** | **String**| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] [default to &#39;avatarHash,fullName,initials,username&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActionsIdBoard

> Board getActionsIdBoard(key, token, id, opts)

Get the Board for an Action

Get the Board for an Action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the action
let opts = {
  'fields': new TrelloRestApi.BoardFields() // BoardFields | `all` or a comma-separated list of board fields
};
apiInstance.getActionsIdBoard(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the action | 
 **fields** | [**BoardFields**](.md)| &#x60;all&#x60; or a comma-separated list of board fields | [optional] 

### Return type

[**Board**](Board.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActionsIdCard

> Card getActionsIdCard(key, token, id, opts)

Get the Card for an Action

Get the card for an action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the action
let opts = {
  'fields': new TrelloRestApi.CardFields() // CardFields | `all` or a comma-separated list of card fields
};
apiInstance.getActionsIdCard(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the action | 
 **fields** | [**CardFields**](.md)| &#x60;all&#x60; or a comma-separated list of card fields | [optional] 

### Return type

[**Card**](Card.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActionsIdField

> Action getActionsIdField(key, token, id, field)

Get a specific field on an Action

Get a specific property of an action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Action
let field = new TrelloRestApi.ActionFields(); // ActionFields | An action field
apiInstance.getActionsIdField(key, token, id, field, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Action | 
 **field** | [**ActionFields**](.md)| An action field | 

### Return type

[**Action**](Action.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActionsIdList

> Array getActionsIdList(key, token, id, opts)

Get the List for an Action

Get the List for an Action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the action
let opts = {
  'fields': new TrelloRestApi.ListFields() // ListFields | `all` or a comma-separated list of list fields
};
apiInstance.getActionsIdList(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the action | 
 **fields** | [**ListFields**](.md)| &#x60;all&#x60; or a comma-separated list of list fields | [optional] 

### Return type

**Array**

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActionsIdMember

> Member getActionsIdMember(key, token, id, opts)

Get the Member of an Action

Gets the member of an action (not the creator)

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Action
let opts = {
  'fields': new TrelloRestApi.MemberFields() // MemberFields | `all` or a comma-separated list of member fields
};
apiInstance.getActionsIdMember(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Action | 
 **fields** | [**MemberFields**](.md)| &#x60;all&#x60; or a comma-separated list of member fields | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActionsIdMembercreator

> Member getActionsIdMembercreator(key, token, id, opts)

Get the Member Creator of an Action

Get the Member who created the Action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Action
let opts = {
  'fields': new TrelloRestApi.MemberFields() // MemberFields | `all` or a comma-separated list of member fields
};
apiInstance.getActionsIdMembercreator(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Action | 
 **fields** | [**MemberFields**](.md)| &#x60;all&#x60; or a comma-separated list of member fields | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActionsIdOrganization

> Organization getActionsIdOrganization(key, token, id, opts)

Get the Organization of an Action

Get the Organization of an Action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the action
let opts = {
  'fields': new TrelloRestApi.OrganizationFields() // OrganizationFields | `all` or a comma-separated list of organization fields
};
apiInstance.getActionsIdOrganization(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the action | 
 **fields** | [**OrganizationFields**](.md)| &#x60;all&#x60; or a comma-separated list of organization fields | [optional] 

### Return type

[**Organization**](Organization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActionsIdactionReactions

> getActionsIdactionReactions(idAction, key, token, opts)

Get Action&#39;s Reactions

List reactions for an action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let idAction = "idAction_example"; // String | The ID of the action
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'member': true, // Boolean | Whether to load the member as a nested resource. See [Members Nested Resource](#members-nested-resource)
  'emoji': true // Boolean | Whether to load the emoji as a nested resource.
};
apiInstance.getActionsIdactionReactions(idAction, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idAction** | **String**| The ID of the action | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **member** | **Boolean**| Whether to load the member as a nested resource. See [Members Nested Resource](#members-nested-resource) | [optional] [default to true]
 **emoji** | **Boolean**| Whether to load the emoji as a nested resource. | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActionsIdactionReactionsId

> getActionsIdactionReactionsId(idAction, id, key, token, opts)

Get Action&#39;s Reaction

Get information for a reaction

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let idAction = "idAction_example"; // String | The ID of the Action
let id = "id_example"; // String | The ID of the reaction
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'member': true, // Boolean | Whether to load the member as a nested resource. See [Members Nested Resource](#members-nested-resource)
  'emoji': true // Boolean | Whether to load the emoji as a nested resource.
};
apiInstance.getActionsIdactionReactionsId(idAction, id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idAction** | **String**| The ID of the Action | 
 **id** | **String**| The ID of the reaction | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **member** | **Boolean**| Whether to load the member as a nested resource. See [Members Nested Resource](#members-nested-resource) | [optional] [default to true]
 **emoji** | **Boolean**| Whether to load the emoji as a nested resource. | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActionsIdactionReactionsummary

> getActionsIdactionReactionsummary(key, token, idAction)

List Action&#39;s summary of Reactions

List a summary of all reactions for an action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let idAction = "idAction_example"; // String | The ID of the action
apiInstance.getActionsIdactionReactionsummary(key, token, idAction, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **idAction** | **String**| The ID of the action | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBatch

> getBatch(key, token, urls)

Batch Requests

Make up to 10 GET requests in a single, batched API call.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let urls = "urls_example"; // String | A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. \"urls=/members/trello,/cards/[cardId]\"
apiInstance.getBatch(key, token, urls, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **urls** | **String**| A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. \&quot;urls&#x3D;/members/trello,/cards/[cardId]\&quot; | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBoardIdPlugins

> Plugin getBoardIdPlugins(key, token, id, opts)

Get Power-Ups on a Board

List the Power-Ups on a board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the board
let opts = {
  'filter': "'enabled'" // String | One of: `enabled` or `available`
};
apiInstance.getBoardIdPlugins(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the board | 
 **filter** | **String**| One of: &#x60;enabled&#x60; or &#x60;available&#x60; | [optional] [default to &#39;enabled&#39;]

### Return type

[**Plugin**](Plugin.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBoardsId

> Board getBoardsId(id, key, token, opts)

Get a Board

Request a single board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | 
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'actions': "'all'", // String | This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
  'boardStars': "'none'", // String | Valid values are one of: `mine` or `none`.
  'cards': "'none'", // String | This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
  'cardPluginData': false, // Boolean | Use with the `cards` param to include card pluginData with the response
  'checklists': "'none'", // String | This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
  'customFields': false, // Boolean | This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource).
  'fields': "'name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames'", // String | The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url
  'labels': "labels_example", // String | This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
  'lists': "'open'", // String | This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
  'members': "'none'", // String | This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
  'memberships': "'none'", // String | This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
  'pluginData': false, // Boolean | Determines whether the pluginData for this board should be returned. Valid values: true or false.
  'organization': false, // Boolean | This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
  'organizationPluginData': false, // Boolean | Use with the `organization` param to include organization pluginData with the response
  'myPrefs': false, // Boolean | 
  'tags': false // Boolean | Also known as collections, tags, refer to the collection(s) that a Board belongs to.
};
apiInstance.getBoardsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **actions** | **String**| This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). | [optional] [default to &#39;all&#39;]
 **boardStars** | **String**| Valid values are one of: &#x60;mine&#x60; or &#x60;none&#x60;. | [optional] [default to &#39;none&#39;]
 **cards** | **String**| This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). | [optional] [default to &#39;none&#39;]
 **cardPluginData** | **Boolean**| Use with the &#x60;cards&#x60; param to include card pluginData with the response | [optional] [default to false]
 **checklists** | **String**| This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). | [optional] [default to &#39;none&#39;]
 **customFields** | **Boolean**| This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource). | [optional] [default to false]
 **fields** | **String**| The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url | [optional] [default to &#39;name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames&#39;]
 **labels** | **String**| This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). | [optional] 
 **lists** | **String**| This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). | [optional] [default to &#39;open&#39;]
 **members** | **String**| This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). | [optional] [default to &#39;none&#39;]
 **memberships** | **String**| This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). | [optional] [default to &#39;none&#39;]
 **pluginData** | **Boolean**| Determines whether the pluginData for this board should be returned. Valid values: true or false. | [optional] [default to false]
 **organization** | **Boolean**| This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). | [optional] [default to false]
 **organizationPluginData** | **Boolean**| Use with the &#x60;organization&#x60; param to include organization pluginData with the response | [optional] [default to false]
 **myPrefs** | **Boolean**|  | [optional] [default to false]
 **tags** | **Boolean**| Also known as collections, tags, refer to the collection(s) that a Board belongs to. | [optional] [default to false]

### Return type

[**Board**](Board.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBoardsIdActions

> getBoardsIdActions(key, token, boardId, opts)

Get Actions of a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let boardId = "boardId_example"; // String | 
let opts = {
  'filter': "filter_example" // String | A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
};
apiInstance.getBoardsIdActions(key, token, boardId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **boardId** | **String**|  | 
 **filter** | **String**| A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBoardsIdBoardplugins

> [Plugin] getBoardsIdBoardplugins(key, token, id)

Get Enabled Power-Ups on Board

Get the enabled Power-Ups on a board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Board
apiInstance.getBoardsIdBoardplugins(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Board | 

### Return type

[**[Plugin]**](Plugin.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBoardsIdBoardstars

> [OneOfBoardStars] getBoardsIdBoardstars(key, token, boardId, filter)

Get boardStars on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let boardId = "boardId_example"; // String | 
let filter = "'mine'"; // String | Valid values: mine, none
apiInstance.getBoardsIdBoardstars(key, token, boardId, filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **boardId** | **String**|  | 
 **filter** | **String**| Valid values: mine, none | [default to &#39;mine&#39;]

### Return type

[**[OneOfBoardStars]**](OneOfBoardStars.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBoardsIdCards

> getBoardsIdCards(key, token, id)

Get Cards on a Board

Get all of the open Cards on a Board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | 
apiInstance.getBoardsIdCards(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBoardsIdCardsFilter

> getBoardsIdCardsFilter(key, token, id, filter)

Get filtered Cards on a Board

Get the Cards on a Board that match a given filter.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the Board
let filter = "filter_example"; // String | Valid Values: all, closed, none, open, visible.
apiInstance.getBoardsIdCardsFilter(key, token, id, filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the Board | 
 **filter** | **String**| Valid Values: all, closed, none, open, visible. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBoardsIdCardsIdcard

> getBoardsIdCardsIdcard(key, token, id, idCard)

Get a Card on a Board

Get a single Card on a Board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the board
let idCard = "idCard_example"; // String | The id the card to retrieve.
apiInstance.getBoardsIdCardsIdcard(key, token, id, idCard, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the board | 
 **idCard** | **String**| The id the card to retrieve. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBoardsIdCustomfields

> [CustomField] getBoardsIdCustomfields(key, token, id)

Get Custom Fields for Board

Get the Custom Field Definitions that exist on a board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the board
apiInstance.getBoardsIdCustomfields(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the board | 

### Return type

[**[CustomField]**](CustomField.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBoardsIdField

> getBoardsIdField(key, token, id, field)

Get a field on a Board

Get a single, specific field on a board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the board.
let field = "field_example"; // String | The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
apiInstance.getBoardsIdField(key, token, id, field, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the board. | 
 **field** | **String**| The field you&#39;d like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBoardsIdLabels

> getBoardsIdLabels(key, token, id, opts)

Get Labels on a Board

Get all of the Labels on a Board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Board.
let opts = {
  'fields': new TrelloRestApi.Label(), // Label | The fields to be returned for the Labels.
  'limit': 50 // Number | The number of Labels to be returned.
};
apiInstance.getBoardsIdLabels(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Board. | 
 **fields** | [**Label**](.md)| The fields to be returned for the Labels. | [optional] 
 **limit** | **Number**| The number of Labels to be returned. | [optional] [default to 50]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBoardsIdLists

> getBoardsIdLists(id, key, token, opts)

Get Lists on a Board

Get the Lists on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the board
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'cards': new TrelloRestApi.ViewFilter(), // ViewFilter | Filter to apply to Cards.
  'cardFields': "'all'", // String | `all` or a comma-separated list of card [fields](#card-object)
  'filter': "filter_example", // ViewFilter | Filter to apply to Lists
  'fields': "'all'" // String | `all` or a comma-separated list of list [fields](#list-object)
};
apiInstance.getBoardsIdLists(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the board | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **cards** | [**ViewFilter**](.md)| Filter to apply to Cards. | [optional] 
 **cardFields** | **String**| &#x60;all&#x60; or a comma-separated list of card [fields](#card-object) | [optional] [default to &#39;all&#39;]
 **filter** | **ViewFilter**| Filter to apply to Lists | [optional] 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of list [fields](#list-object) | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBoardsIdListsFilter

> getBoardsIdListsFilter(key, token, id, filter)

Get filtered Lists on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the board
let filter = new TrelloRestApi.ViewFilter(); // ViewFilter | One of `all`, `closed`, `none`, `open`
apiInstance.getBoardsIdListsFilter(key, token, id, filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the board | 
 **filter** | [**ViewFilter**](.md)| One of &#x60;all&#x60;, &#x60;closed&#x60;, &#x60;none&#x60;, &#x60;open&#x60; | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBoardsIdMembers

> getBoardsIdMembers(key, token, id)

Get the Members of a Board

Get the Members for a board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the board
apiInstance.getBoardsIdMembers(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the board | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBoardsIdMemberships

> Memberships getBoardsIdMemberships(key, token, id, opts)

Get Memberships of a Board

Get information about the memberships users have to the board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the board
let opts = {
  'filter': "'all'", // String | One of `admins`, `all`, `none`, `normal`
  'activity': false, // Boolean | Works for premium organizations only.
  'orgMemberType': false, // Boolean | Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.
  'member': false, // Boolean | Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).
  'memberFields': new TrelloRestApi.MemberFields() // MemberFields | Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).
};
apiInstance.getBoardsIdMemberships(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the board | 
 **filter** | **String**| One of &#x60;admins&#x60;, &#x60;all&#x60;, &#x60;none&#x60;, &#x60;normal&#x60; | [optional] [default to &#39;all&#39;]
 **activity** | **Boolean**| Works for premium organizations only. | [optional] [default to false]
 **orgMemberType** | **Boolean**| Shows the type of member to the org the user is. For instance, an org admin will have a &#x60;orgMemberType&#x60; of &#x60;admin&#x60;. | [optional] [default to false]
 **member** | **Boolean**| Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/). | [optional] [default to false]
 **memberFields** | [**MemberFields**](.md)| Fields to show if &#x60;member&#x3D;true&#x60;. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/). | [optional] 

### Return type

[**Memberships**](Memberships.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCardsId

> Card getCardsId(id, key, token, opts)

Get a Card

Get a card by its ID

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'fields': "fields_example", // String | `all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`
  'actions': "actions_example", // String | See the [Actions Nested Resource](ref:actions-nested-resource)
  'attachments': "'false'", // OneOfstringboolean | `true`, `false`, or `cover`
  'attachmentFields': "'all'", // String | `all` or a comma-separated list of attachment [fields](ref:attachments)
  'members': false, // Boolean | Whether to return member objects for members on the card
  'memberFields': "memberFields_example", // String | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
  'membersVoted': false, // Boolean | Whether to return member objects for members who voted on the card
  'memberVotedFields': "memberVotedFields_example", // String | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
  'checkItemStates': false, // Boolean | 
  'checklists': "'none'", // String | Whether to return the checklists on the card. `all` or `none`
  'checklistFields': "'all'", // String | `all` or a comma-separated list of `idBoard,idCard,name,pos`
  'board': false, // Boolean | Whether to return the board object the card is on
  'boardFields': "boardFields_example", // String | `all` or a comma-separated list of board [fields](#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`
  'list': false, // Boolean | See the [Lists Nested Resource](ref:lists-nested-resource)
  'pluginData': false, // Boolean | Whether to include pluginData on the card with the response
  'stickers': false, // Boolean | Whether to include sticker models with the response
  'stickerFields': "'all'", // String | `all` or a comma-separated list of sticker [fields](ref:stickers)
  'customFieldItems': false // Boolean | Whether to include the customFieldItems
};
apiInstance.getCardsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: &#x60;badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url&#x60; | [optional] 
 **actions** | **String**| See the [Actions Nested Resource](ref:actions-nested-resource) | [optional] 
 **attachments** | **OneOfstringboolean**| &#x60;true&#x60;, &#x60;false&#x60;, or &#x60;cover&#x60; | [optional] [default to &#39;false&#39;]
 **attachmentFields** | **String**| &#x60;all&#x60; or a comma-separated list of attachment [fields](ref:attachments) | [optional] [default to &#39;all&#39;]
 **members** | **Boolean**| Whether to return member objects for members on the card | [optional] [default to false]
 **memberFields** | **String**| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: &#x60;avatarHash, fullName, initials, username&#x60; | [optional] 
 **membersVoted** | **Boolean**| Whether to return member objects for members who voted on the card | [optional] [default to false]
 **memberVotedFields** | **String**| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: &#x60;avatarHash, fullName, initials, username&#x60; | [optional] 
 **checkItemStates** | **Boolean**|  | [optional] [default to false]
 **checklists** | **String**| Whether to return the checklists on the card. &#x60;all&#x60; or &#x60;none&#x60; | [optional] [default to &#39;none&#39;]
 **checklistFields** | **String**| &#x60;all&#x60; or a comma-separated list of &#x60;idBoard,idCard,name,pos&#x60; | [optional] [default to &#39;all&#39;]
 **board** | **Boolean**| Whether to return the board object the card is on | [optional] [default to false]
 **boardFields** | **String**| &#x60;all&#x60; or a comma-separated list of board [fields](#board-object). **Defaults**: &#x60;name, desc, descData, closed, idOrganization, pinned, url, prefs&#x60; | [optional] 
 **list** | **Boolean**| See the [Lists Nested Resource](ref:lists-nested-resource) | [optional] [default to false]
 **pluginData** | **Boolean**| Whether to include pluginData on the card with the response | [optional] [default to false]
 **stickers** | **Boolean**| Whether to include sticker models with the response | [optional] [default to false]
 **stickerFields** | **String**| &#x60;all&#x60; or a comma-separated list of sticker [fields](ref:stickers) | [optional] [default to &#39;all&#39;]
 **customFieldItems** | **Boolean**| Whether to include the customFieldItems | [optional] [default to false]

### Return type

[**Card**](Card.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCardsIdActions

> [OneOfAction] getCardsIdActions(key, token, id, opts)

Get Actions on a Card

List the Actions on a Card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let opts = {
  'filter': "'commentCard, updateCard:idList'" // String | A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
};
apiInstance.getCardsIdActions(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **filter** | **String**| A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). | [optional] [default to &#39;commentCard, updateCard:idList&#39;]

### Return type

[**[OneOfAction]**](OneOfAction.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCardsIdAttachments

> [OneOfAttachment] getCardsIdAttachments(id, key, token, fields, filter)

Get Attachments on a Card

List the attachments on a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let fields = "'all'"; // String | `all` or a comma-separated list of attachment [fields](ref:attachments)
let filter = "'false'"; // String | Use `cover` to restrict to just the cover attachment
apiInstance.getCardsIdAttachments(id, key, token, fields, filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of attachment [fields](ref:attachments) | [default to &#39;all&#39;]
 **filter** | **String**| Use &#x60;cover&#x60; to restrict to just the cover attachment | [default to &#39;false&#39;]

### Return type

[**[OneOfAttachment]**](OneOfAttachment.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCardsIdAttachmentsIdattachment

> [OneOfAttachment] getCardsIdAttachmentsIdattachment(id, idAttachment, key, token, opts)

Get an Attachment on a Card

Get a specific Attachment on a Card.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let idAttachment = "idAttachment_example"; // String | The ID of the Attachment
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'fields': [new TrelloRestApi.AnyOfAttachmentFields()] // [AnyOfAttachmentFields] | The Attachment fields to be included in the response.
};
apiInstance.getCardsIdAttachmentsIdattachment(id, idAttachment, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **idAttachment** | **String**| The ID of the Attachment | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | [**[AnyOfAttachmentFields]**](AnyOfAttachmentFields.md)| The Attachment fields to be included in the response. | [optional] 

### Return type

[**[OneOfAttachment]**](OneOfAttachment.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCardsIdBoard

> getCardsIdBoard(key, token, id, opts)

Get the Board the Card is on

Get the board a card is on

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let opts = {
  'fields': "'all'" // String | `all` or a comma-separated list of board [fields](#board-object)
};
apiInstance.getCardsIdBoard(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of board [fields](#board-object) | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCardsIdCheckitemIdcheckitem

> getCardsIdCheckitemIdcheckitem(id, idCheckItem, key, token, opts)

Get checkItem on a Card

Get a specific checkItem on a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let idCheckItem = "idCheckItem_example"; // String | The ID of the checkitem
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'fields': "'name,nameData,pos,state'" // String | `all` or a comma-separated list of `name,nameData,pos,state,type`
};
apiInstance.getCardsIdCheckitemIdcheckitem(id, idCheckItem, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **idCheckItem** | **String**| The ID of the checkitem | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of &#x60;name,nameData,pos,state,type&#x60; | [optional] [default to &#39;name,nameData,pos,state&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCardsIdCheckitemstates

> getCardsIdCheckitemstates(key, token, id, opts)

Get checkItems on a Card

Get the completed checklist items on a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let opts = {
  'fields': "'all'" // String | `all` or a comma-separated list of: `idCheckItem`, `state`
};
apiInstance.getCardsIdCheckitemstates(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of: &#x60;idCheckItem&#x60;, &#x60;state&#x60; | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCardsIdChecklists

> getCardsIdChecklists(key, token, id, opts)

Get Checklists on a Card

Get the checklists on a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let opts = {
  'checkItems': "'all'", // String | `all` or `none`
  'checkItemFields': "'name,nameData,pos,state'", // String | `all` or a comma-separated list of: `name,nameData,pos,state,type`
  'filter': "'all'", // String | `all` or `none`
  'fields': "'all'" // String | `all` or a comma-separated list of: `idBoard,idCard,name,pos`
};
apiInstance.getCardsIdChecklists(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **checkItems** | **String**| &#x60;all&#x60; or &#x60;none&#x60; | [optional] [default to &#39;all&#39;]
 **checkItemFields** | **String**| &#x60;all&#x60; or a comma-separated list of: &#x60;name,nameData,pos,state,type&#x60; | [optional] [default to &#39;name,nameData,pos,state&#39;]
 **filter** | **String**| &#x60;all&#x60; or &#x60;none&#x60; | [optional] [default to &#39;all&#39;]
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of: &#x60;idBoard,idCard,name,pos&#x60; | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCardsIdCustomfielditems

> [CustomFieldItems] getCardsIdCustomfielditems(key, token, id)

Get Custom Field Items for a Card

Get the custom field items for a card.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
apiInstance.getCardsIdCustomfielditems(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 

### Return type

[**[CustomFieldItems]**](CustomFieldItems.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCardsIdField

> Card getCardsIdField(key, token, id, field)

Get a field on a Card

Get a specific property of a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let field = new TrelloRestApi.CardFields(); // CardFields | The desired field.
apiInstance.getCardsIdField(key, token, id, field, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **field** | [**CardFields**](.md)| The desired field. | 

### Return type

[**Card**](Card.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCardsIdList

> getCardsIdList(key, token, id, opts)

Get the List of a Card

Get the list a card is in

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let opts = {
  'fields': "'all'" // String | `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getCardsIdList(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCardsIdMembers

> getCardsIdMembers(key, token, id, opts)

Get the Members of a Card

Get the members on a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let opts = {
  'fields': "'avatarHash,fullName,initials,username'" // String | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getCardsIdMembers(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] [default to &#39;avatarHash,fullName,initials,username&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCardsIdMembersvoted

> getCardsIdMembersvoted(id, key, token, opts)

Get Members who have voted on a Card

Get the members who have voted on a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'fields': "'avatarHash,fullName,initials,username'" // String | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getCardsIdMembersvoted(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] [default to &#39;avatarHash,fullName,initials,username&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCardsIdPlugindata

> getCardsIdPlugindata(key, token, id)

Get pluginData on a Card

Get any shared pluginData on a card.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
apiInstance.getCardsIdPlugindata(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCardsIdStickers

> getCardsIdStickers(key, token, id, opts)

Get Stickers on a Card

Get the stickers on a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let opts = {
  'fields': "'all'" // String | `all` or a comma-separated list of sticker [fields](ref:stickers)
};
apiInstance.getCardsIdStickers(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of sticker [fields](ref:stickers) | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCardsIdStickersIdsticker

> getCardsIdStickersIdsticker(id, idSticker, key, token, opts)

Get a Sticker on a Card

Get a specific sticker on a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let idSticker = "idSticker_example"; // String | The ID of the sticker
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'fields': "'all'" // String | `all` or a comma-separated list of sticker [fields](ref:stickers)
};
apiInstance.getCardsIdStickersIdsticker(id, idSticker, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **idSticker** | **String**| The ID of the sticker | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of sticker [fields](ref:stickers) | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getChecklistsId

> getChecklistsId(id, key, token, opts)

Get a Checklist

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | ID of a checklist.
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'cards': "'none'", // String | Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](ref:cards-nested-resource).
  'checkItems': "'all'", // String | The check items on the list to return. One of: `all`, `none`.
  'checkItemFields': "'name, nameData, pos, state'", // String | The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`
  'fields': "'all'" // String | `all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getChecklistsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of a checklist. | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **cards** | **String**| Valid values: &#x60;all&#x60;, &#x60;closed&#x60;, &#x60;none&#x60;, &#x60;open&#x60;, &#x60;visible&#x60;. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](ref:cards-nested-resource). | [optional] [default to &#39;none&#39;]
 **checkItems** | **String**| The check items on the list to return. One of: &#x60;all&#x60;, &#x60;none&#x60;. | [optional] [default to &#39;all&#39;]
 **checkItemFields** | **String**| The fields on the checkItem to return if checkItems are being returned. &#x60;all&#x60; or a comma-separated list of: &#x60;name&#x60;, &#x60;nameData&#x60;, &#x60;pos&#x60;, &#x60;state&#x60;, &#x60;type&#x60; | [optional] [default to &#39;name, nameData, pos, state&#39;]
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getChecklistsIdBoard

> getChecklistsIdBoard(key, token, id, opts)

Get the Board the Checklist is on

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of a checklist.
let opts = {
  'fields': "'all'" // String | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getChecklistsIdBoard(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of a checklist. | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getChecklistsIdCards

> getChecklistsIdCards(key, token, id)

Get the Card a Checklist is on

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of a checklist.
apiInstance.getChecklistsIdCards(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of a checklist. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getChecklistsIdCheckitems

> getChecklistsIdCheckitems(id, key, token, opts)

Get Checkitems on a Checklist

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | ID of a checklist.
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'filter': "'all'", // String | One of: `all`, `none`.
  'fields': "'name, nameData, pos, state'" // String | One of: `all`, `name`, `nameData`, `pos`, `state`, `type`.
};
apiInstance.getChecklistsIdCheckitems(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of a checklist. | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **filter** | **String**| One of: &#x60;all&#x60;, &#x60;none&#x60;. | [optional] [default to &#39;all&#39;]
 **fields** | **String**| One of: &#x60;all&#x60;, &#x60;name&#x60;, &#x60;nameData&#x60;, &#x60;pos&#x60;, &#x60;state&#x60;, &#x60;type&#x60;. | [optional] [default to &#39;name, nameData, pos, state&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getChecklistsIdCheckitemsIdcheckitem

> getChecklistsIdCheckitemsIdcheckitem(id, idCheckItem, key, token, opts)

Get a Checkitem on a Checklist

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | ID of a checklist.
let idCheckItem = "idCheckItem_example"; // String | ID of the check item to retrieve.
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'fields': "'name, nameData, pos, state'" // String | One of: `all`, `name`, `nameData`, `pos`, `state`, `type`.
};
apiInstance.getChecklistsIdCheckitemsIdcheckitem(id, idCheckItem, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of a checklist. | 
 **idCheckItem** | **String**| ID of the check item to retrieve. | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | **String**| One of: &#x60;all&#x60;, &#x60;name&#x60;, &#x60;nameData&#x60;, &#x60;pos&#x60;, &#x60;state&#x60;, &#x60;type&#x60;. | [optional] [default to &#39;name, nameData, pos, state&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getChecklistsIdField

> getChecklistsIdField(key, token, id, field)

Get field on a Checklist

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of a checklist.
let field = "field_example"; // String | Field to update.
apiInstance.getChecklistsIdField(key, token, id, field, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of a checklist. | 
 **field** | **String**| Field to update. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCustomfieldsId

> CustomField getCustomfieldsId(key, token, id)

Get a Custom Field

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the Custom Field.
apiInstance.getCustomfieldsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the Custom Field. | 

### Return type

[**CustomField**](CustomField.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomfieldsIdOptions

> getCustomfieldsIdOptions(key, token, id)

Add Option to Custom Field dropdown

Add an option to a dropdown Custom Field

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the customfield.
apiInstance.getCustomfieldsIdOptions(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the customfield. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCustomfieldsOptionsIdcustomfieldoption

> getCustomfieldsOptionsIdcustomfieldoption(key, token, id, idCustomFieldOption)

Get Option of Custom Field dropdown

Retrieve a specific, existing Option on a given dropdown-type Custom Field

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the customfielditem.
let idCustomFieldOption = "idCustomFieldOption_example"; // String | ID of the customfieldoption to retrieve.
apiInstance.getCustomfieldsOptionsIdcustomfieldoption(key, token, id, idCustomFieldOption, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the customfielditem. | 
 **idCustomFieldOption** | **String**| ID of the customfieldoption to retrieve. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getEnterprisesId

> getEnterprisesId(key, token, id, opts)

Get an Enterprise

Get an enterprise by its ID.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the enterprise to retrieve.
let opts = {
  'fields': "'all'", // String | Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. Read the SCIM documentation [here]() for more information on filtering), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`
  'members': "'none'", // String | One of: `none`, `normal`, `admins`, `owners`, `all`
  'memberFields': "'avatarHash, fullName, initials, username'", // String | One of: `avatarHash`, `fullName`, `initials`, `username`
  'memberFilter': "'none'", // String | Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated.
  'memberSort': "memberSort_example", // String | This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
  'memberSortBy': "'none'", // String | Deprecated: Please use member_sort. This parameter expects a [SCIM-style sorting value](/cloud/trello/scim/). Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.
  'memberSortOrder': "'id'", // String | Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`
  'memberStartIndex': 56, // Number | Any integer between 0 and 100.
  'memberCount': 56, // Number | 0 to 100
  'organizations': "'none'", // String | One of: `none`, `members`, `public`, `all`
  'organizationFields': "'none'", // String | Any valid value that the [nested organization field resource]() accepts.
  'organizationPaidAccounts': false, // Boolean | 
  'organizationMemberships': "'none'" // String | Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`
};
apiInstance.getEnterprisesId(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the enterprise to retrieve. | 
 **fields** | **String**| Comma-separated list of: &#x60;id&#x60;, &#x60;name&#x60;, &#x60;displayName&#x60;, &#x60;prefs&#x60;, &#x60;ssoActivationFailed&#x60;, &#x60;idAdmins&#x60;, &#x60;idMembers&#x60; (Note that the members array returned will be paginated if &#x60;members&#x60; is &#39;normal&#39; or &#39;admins&#39;. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. Read the SCIM documentation [here]() for more information on filtering), &#x60;idOrganizations&#x60;, &#x60;products&#x60;, &#x60;userTypes&#x60;, &#x60;idMembers&#x60;, &#x60;idOrganizations&#x60; | [optional] [default to &#39;all&#39;]
 **members** | **String**| One of: &#x60;none&#x60;, &#x60;normal&#x60;, &#x60;admins&#x60;, &#x60;owners&#x60;, &#x60;all&#x60; | [optional] [default to &#39;none&#39;]
 **memberFields** | **String**| One of: &#x60;avatarHash&#x60;, &#x60;fullName&#x60;, &#x60;initials&#x60;, &#x60;username&#x60; | [optional] [default to &#39;avatarHash, fullName, initials, username&#39;]
 **memberFilter** | **String**| Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated. | [optional] [default to &#39;none&#39;]
 **memberSort** | **String**| This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a &#x60;-&#x60; to sort descending. If no &#x60;-&#x60; is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if &#x60;members&#x60; is &#39;normal&#39; or &#39;admins&#39;. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. | [optional] 
 **memberSortBy** | **String**| Deprecated: Please use member_sort. This parameter expects a [SCIM-style sorting value](/cloud/trello/scim/). Note that the members array returned will be paginated if &#x60;members&#x60; is &#x60;normal&#x60; or &#x60;admins&#x60;. Pagination can be controlled with &#x60;member_startIndex&#x60;, etc, and the API response&#39;s header will contain the total count and pagination state. | [optional] [default to &#39;none&#39;]
 **memberSortOrder** | **String**| Deprecated: Please use member_sort. One of: &#x60;ascending&#x60;, &#x60;descending&#x60;, &#x60;asc&#x60;, &#x60;desc&#x60; | [optional] [default to &#39;id&#39;]
 **memberStartIndex** | **Number**| Any integer between 0 and 100. | [optional] 
 **memberCount** | **Number**| 0 to 100 | [optional] 
 **organizations** | **String**| One of: &#x60;none&#x60;, &#x60;members&#x60;, &#x60;public&#x60;, &#x60;all&#x60; | [optional] [default to &#39;none&#39;]
 **organizationFields** | **String**| Any valid value that the [nested organization field resource]() accepts. | [optional] [default to &#39;none&#39;]
 **organizationPaidAccounts** | **Boolean**|  | [optional] [default to false]
 **organizationMemberships** | **String**| Comma-seperated list of: &#x60;me&#x60;, &#x60;normal&#x60;, &#x60;admin&#x60;, &#x60;active&#x60;, &#x60;deactivated&#x60; | [optional] [default to &#39;none&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getEnterprisesIdAdmins

> Enterprise getEnterprisesIdAdmins(key, token, id, opts)

Get Enterprise admin Members

Get an enterprise&#39;s admin members.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the enterprise to retrieve.
let opts = {
  'fields': "'fullName, userName'" // String | Any valid value that the [nested member field resource]() accepts.
};
apiInstance.getEnterprisesIdAdmins(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the enterprise to retrieve. | 
 **fields** | **String**| Any valid value that the [nested member field resource]() accepts. | [optional] [default to &#39;fullName, userName&#39;]

### Return type

[**Enterprise**](Enterprise.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnterprisesIdAuditlog

> getEnterprisesIdAuditlog(key, token)

Get auditlog data for an Enterprise

Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise&#39;s audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use. Note: This must be an Enterprise admin's token.
apiInstance.getEnterprisesIdAuditlog(key, token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use. Note: This must be an Enterprise admin&#39;s token. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getEnterprisesIdMembers

> getEnterprisesIdMembers(key, token, id, opts)

Get Members of Enterprise

Get the members of an enterprise.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the Enterprise to retrieve.
let opts = {
  'fields': "'avatarHash, fullName, initials, username'", // String | A comma-seperated list of valid [member fields](member).
  'filter': "filter_example", // String | Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated.
  'sort': "sort_example", // String | This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
  'sortBy': "sortBy_example", // String | Deprecated: Please use `sort` instead. This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
  'sortOrder': "'null'", // String | Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`.
  'startIndex': 56, // Number | Any integer between 0 and 9999.
  'count': "'none'", // String | [SCIM-style filter](/cloud/trello/scim/).
  'organizationFields': "'displayName'", // String | Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
  'boardFields': "'name'" // String | Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
};
apiInstance.getEnterprisesIdMembers(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the Enterprise to retrieve. | 
 **fields** | **String**| A comma-seperated list of valid [member fields](member). | [optional] [default to &#39;avatarHash, fullName, initials, username&#39;]
 **filter** | **String**| Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated. | [optional] 
 **sort** | **String**| This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a &#x60;-&#x60; to sort descending. If no &#x60;-&#x60; is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if &#x60;members&#x60; is &#39;normal&#39; or &#39;admins&#39;. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. | [optional] 
 **sortBy** | **String**| Deprecated: Please use &#x60;sort&#x60; instead. This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value. Note that the members array returned will be paginated if &#x60;members&#x60; is &#39;normal&#39; or &#39;admins&#39;. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. | [optional] 
 **sortOrder** | **String**| Deprecated: Please use &#x60;sort&#x60; instead. One of: &#x60;ascending&#x60;, &#x60;descending&#x60;, &#x60;asc&#x60;, &#x60;desc&#x60;. | [optional] [default to &#39;null&#39;]
 **startIndex** | **Number**| Any integer between 0 and 9999. | [optional] 
 **count** | **String**| [SCIM-style filter](/cloud/trello/scim/). | [optional] [default to &#39;none&#39;]
 **organizationFields** | **String**| Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. | [optional] [default to &#39;displayName&#39;]
 **boardFields** | **String**| Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. | [optional] [default to &#39;name&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getEnterprisesIdMembersIdmember

> Member getEnterprisesIdMembersIdmember(key, token, id, idMember, opts)

Get a Member of Enterprise

Get a specific member of an enterprise by ID.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the enterprise to retrieve.
let idMember = "idMember_example"; // String | An ID of a member resource.
let opts = {
  'fields': "'avatarHash, fullName, initials, username'", // String | A comma separated list of any valid values that the [nested member field resource]() accepts.
  'organizationFields': "'displayName'", // String | Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
  'boardFields': "'name'" // String | Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
};
apiInstance.getEnterprisesIdMembersIdmember(key, token, id, idMember, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the enterprise to retrieve. | 
 **idMember** | **String**| An ID of a member resource. | 
 **fields** | **String**| A comma separated list of any valid values that the [nested member field resource]() accepts. | [optional] [default to &#39;avatarHash, fullName, initials, username&#39;]
 **organizationFields** | **String**| Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. | [optional] [default to &#39;displayName&#39;]
 **boardFields** | **String**| Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. | [optional] [default to &#39;name&#39;]

### Return type

[**Member**](Member.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnterprisesIdSignupurl

> getEnterprisesIdSignupurl(key, token, id, opts)

Get signupUrl for Enterprise

Get the signup URL for an enterprise.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the enterprise to retrieve.
let opts = {
  'authenticate': false, // Boolean | 
  'confirmationAccepted': false, // Boolean | 
  'returnUrl': "'null'", // String | Any valid URL.
  'tosAccepted': false // Boolean | Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP.
};
apiInstance.getEnterprisesIdSignupurl(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the enterprise to retrieve. | 
 **authenticate** | **Boolean**|  | [optional] [default to false]
 **confirmationAccepted** | **Boolean**|  | [optional] [default to false]
 **returnUrl** | **String**| Any valid URL. | [optional] [default to &#39;null&#39;]
 **tosAccepted** | **Boolean**| Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getEnterprisesIdTransferrableOrganizationIdOrganization

> Organization getEnterprisesIdTransferrableOrganizationIdOrganization(key, token, id, idOrganization)

Get whether an organization can be transferred to an enterprise.

Get whether an organization can be transferred to an enterprise.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the Enterprise to retrieve.
let idOrganization = "idOrganization_example"; // String | An ID of an Organization resource.
apiInstance.getEnterprisesIdTransferrableOrganizationIdOrganization(key, token, id, idOrganization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the Enterprise to retrieve. | 
 **idOrganization** | **String**| An ID of an Organization resource. | 

### Return type

[**Organization**](Organization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLabelsId

> getLabelsId(id, key, token, opts)

Get a Label

Get information about a single Label.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Label
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'fields': "'all'" // String | all or a comma-separated list of [fields](#label-object)
};
apiInstance.getLabelsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Label | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | **String**| all or a comma-separated list of [fields](#label-object) | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getListsId

> getListsId(id, key, token, opts)

Get a List

Get information about a List

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the list
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'fields': "'name,closed,idBoard,pos'" // String | `all` or a comma separated list of List field names.
};
apiInstance.getListsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the list | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | **String**| &#x60;all&#x60; or a comma separated list of List field names. | [optional] [default to &#39;name,closed,idBoard,pos&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getListsIdActions

> getListsIdActions(key, token, id, opts)

Get Actions for a List

Get the Actions on a List

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the list
let opts = {
  'filter': "filter_example" // String | A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
};
apiInstance.getListsIdActions(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the list | 
 **filter** | **String**| A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getListsIdBoard

> getListsIdBoard(key, token, id, opts)

Get the Board a List is on

Get the board a list is on

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the list
let opts = {
  'fields': "'all'" // String | `all` or a comma-separated list of board [fields](#board-object)
};
apiInstance.getListsIdBoard(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the list | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of board [fields](#board-object) | [optional] [default to &#39;all&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getListsIdCards

> getListsIdCards(key, token, id)

Get Cards in a List

List the cards in a list

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the list
apiInstance.getListsIdCards(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the list | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getMembersIdActions

> [OneOfMember] getMembersIdActions(key, token, id, opts)

Get a Member&#39;s Actions

List the actions for a member

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let opts = {
  'filter': "filter_example" // String | A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
};
apiInstance.getMembersIdActions(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **filter** | **String**| A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). | [optional] 

### Return type

[**[OneOfMember]**](OneOfMember.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdBoardbackgrounds

> [OneOfBoardBackground] getMembersIdBoardbackgrounds(key, token, id, opts)

Get Member&#39;s custom Board backgrounds

Get a member&#39;s custom board backgrounds

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let opts = {
  'filter': "'all'" // String | One of: `all`, `custom`, `default`, `none`, `premium`
};
apiInstance.getMembersIdBoardbackgrounds(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **filter** | **String**| One of: &#x60;all&#x60;, &#x60;custom&#x60;, &#x60;default&#x60;, &#x60;none&#x60;, &#x60;premium&#x60; | [optional] [default to &#39;all&#39;]

### Return type

[**[OneOfBoardBackground]**](OneOfBoardBackground.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdBoardbackgroundsIdbackground

> BoardBackground getMembersIdBoardbackgroundsIdbackground(id, idBackground, key, token, opts)

Get a boardBackground of a Member

Get a member&#39;s board background

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or username of the member
let idBackground = "idBackground_example"; // String | The ID of the board background
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'fields': "'all'" // String | `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`
};
apiInstance.getMembersIdBoardbackgroundsIdbackground(id, idBackground, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or username of the member | 
 **idBackground** | **String**| The ID of the board background | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of: &#x60;brightness&#x60;, &#x60;fullSizeUrl&#x60;, &#x60;scaled&#x60;, &#x60;tile&#x60; | [optional] [default to &#39;all&#39;]

### Return type

[**BoardBackground**](BoardBackground.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdBoards

> [Board] getMembersIdBoards(key, token, id, opts)

Get Boards that Member belongs to

Lists the boards that the user is a member of.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let opts = {
  'filter': "'all'", // String | `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`
  'fields': new TrelloRestApi.BoardFields(), // BoardFields | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'lists': "'none'", // String | Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`
  'organization': false, // Boolean | Whether to include the Organization object with the Boards
  'organizationFields': new TrelloRestApi.OrganizationFields() // OrganizationFields | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getMembersIdBoards(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **filter** | **String**| &#x60;all&#x60; or a comma-separated list of: &#x60;closed&#x60;, &#x60;members&#x60;, &#x60;open&#x60;, &#x60;organization&#x60;, &#x60;public&#x60;, &#x60;starred&#x60; | [optional] [default to &#39;all&#39;]
 **fields** | [**BoardFields**](.md)| &#x60;all&#x60; or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **lists** | **String**| Which lists to include with the boards. One of: &#x60;all&#x60;, &#x60;closed&#x60;, &#x60;none&#x60;, &#x60;open&#x60; | [optional] [default to &#39;none&#39;]
 **organization** | **Boolean**| Whether to include the Organization object with the Boards | [optional] [default to false]
 **organizationFields** | [**OrganizationFields**](.md)| &#x60;all&#x60; or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**[Board]**](Board.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdBoardsinvited

> [Board] getMembersIdBoardsinvited(key, token, id, opts)

Get Boards the Member has been invited to

Get the boards the member has been invited to

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let opts = {
  'fields': new TrelloRestApi.BoardFields() // BoardFields | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getMembersIdBoardsinvited(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **fields** | [**BoardFields**](.md)| &#x60;all&#x60; or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**[Board]**](Board.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdBoardstars

> getMembersIdBoardstars(key, token, id)

Get a Member&#39;s boardStars

List a member&#39;s board stars

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
apiInstance.getMembersIdBoardstars(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getMembersIdBoardstarsIdstar

> BoardStars getMembersIdBoardstarsIdstar(key, token, id, idStar)

Get a boardStar of Member

Get a specific boardStar

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let idStar = "idStar_example"; // String | The ID of the board star
apiInstance.getMembersIdBoardstarsIdstar(key, token, id, idStar, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **idStar** | **String**| The ID of the board star | 

### Return type

[**BoardStars**](BoardStars.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdCards

> [Card] getMembersIdCards(key, token, id, opts)

Get Cards the Member is on

Gets the cards a member is on

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let opts = {
  'filter': "'visible'" // String | One of: `all`, `closed`, `none`, `open`, `visible`
};
apiInstance.getMembersIdCards(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **filter** | **String**| One of: &#x60;all&#x60;, &#x60;closed&#x60;, &#x60;none&#x60;, &#x60;open&#x60;, &#x60;visible&#x60; | [optional] [default to &#39;visible&#39;]

### Return type

[**[Card]**](Card.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdCustomboardbackgrounds

> [BoardBackground] getMembersIdCustomboardbackgrounds(key, token, id)

Get a Member&#39;s custom Board Backgrounds

Get a member&#39;s custom board backgrounds

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
apiInstance.getMembersIdCustomboardbackgrounds(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 

### Return type

[**[BoardBackground]**](BoardBackground.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdCustomboardbackgroundsIdbackground

> BoardBackground getMembersIdCustomboardbackgroundsIdbackground(key, token, id, idBackground)

Get custom Board Background of Member

Get a specific custom board background

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = new TrelloRestApi.OneOfstringstring(); // OneOfstringstring | The ID or username of the member
let idBackground = "idBackground_example"; // String | The ID of the custom background
apiInstance.getMembersIdCustomboardbackgroundsIdbackground(key, token, id, idBackground, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | [**OneOfstringstring**](.md)| The ID or username of the member | 
 **idBackground** | **String**| The ID of the custom background | 

### Return type

[**BoardBackground**](BoardBackground.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdCustomemoji

> [CustomEmoji] getMembersIdCustomemoji(key, token, id)

Get a Member&#39;s customEmojis

Get a Member&#39;s uploaded custom Emojis

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
apiInstance.getMembersIdCustomemoji(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 

### Return type

[**[CustomEmoji]**](CustomEmoji.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdCustomstickers

> [CustomSticker] getMembersIdCustomstickers(key, token, id)

Get Member&#39;s custom Stickers

Get a Member&#39;s uploaded stickers

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
apiInstance.getMembersIdCustomstickers(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 

### Return type

[**[CustomSticker]**](CustomSticker.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdCustomstickersIdsticker

> CustomSticker getMembersIdCustomstickersIdsticker(id, idSticker, key, token, opts)

Get a Member&#39;s custom Sticker

Get a Member&#39;s custom Sticker

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or username of the member
let idSticker = "idSticker_example"; // String | The ID of the uploaded sticker
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'fields': "'all'" // String | `all` or a comma-separated list of `scaled`, `url`
};
apiInstance.getMembersIdCustomstickersIdsticker(id, idSticker, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or username of the member | 
 **idSticker** | **String**| The ID of the uploaded sticker | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of &#x60;scaled&#x60;, &#x60;url&#x60; | [optional] [default to &#39;all&#39;]

### Return type

[**CustomSticker**](CustomSticker.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdField

> OneOfMember getMembersIdField(key, token, id, field)

Get a field on a Member

Get a particular property of a member

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let field = new TrelloRestApi.MemberFields(); // MemberFields | One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/)
apiInstance.getMembersIdField(key, token, id, field, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **field** | [**MemberFields**](.md)| One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/) | 

### Return type

[**OneOfMember**](OneOfMember.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdNotifications

> [Notification] getMembersIdNotifications(key, token, id, opts)

Get Member&#39;s Notifications

Get a member&#39;s notifications

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let opts = {
  'entities': false, // Boolean | 
  'display': false, // Boolean | 
  'filter': "'all'", // String | 
  'readFilter': "'all'", // String | One of: `all`, `read`, `unread`
  'fields': "'all'", // String | `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'limit': 56, // Number | Max 1000
  'page': 56, // Number | Max 100
  'before': "before_example", // String | A notification ID
  'since': "since_example", // String | A notification ID
  'memberCreator': true, // Boolean | 
  'memberCreatorFields': "'avatarHash,fullName,initials,username'" // String | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getMembersIdNotifications(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **entities** | **Boolean**|  | [optional] [default to false]
 **display** | **Boolean**|  | [optional] [default to false]
 **filter** | **String**|  | [optional] [default to &#39;all&#39;]
 **readFilter** | **String**| One of: &#x60;all&#x60;, &#x60;read&#x60;, &#x60;unread&#x60; | [optional] [default to &#39;all&#39;]
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] [default to &#39;all&#39;]
 **limit** | **Number**| Max 1000 | [optional] 
 **page** | **Number**| Max 100 | [optional] 
 **before** | **String**| A notification ID | [optional] 
 **since** | **String**| A notification ID | [optional] 
 **memberCreator** | **Boolean**|  | [optional] [default to true]
 **memberCreatorFields** | **String**| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] [default to &#39;avatarHash,fullName,initials,username&#39;]

### Return type

[**[Notification]**](Notification.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdOrganizations

> [Organization] getMembersIdOrganizations(key, token, id, opts)

Get Member&#39;s Organizations

Get a member&#39;s teams

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let opts = {
  'filter': "'all'", // String | One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private teams)
  'fields': new TrelloRestApi.OrganizationFields(), // OrganizationFields | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'paidAccount': false // Boolean | 
};
apiInstance.getMembersIdOrganizations(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **filter** | **String**| One of: &#x60;all&#x60;, &#x60;members&#x60;, &#x60;none&#x60;, &#x60;public&#x60; (Note: &#x60;members&#x60; filters to only private teams) | [optional] [default to &#39;all&#39;]
 **fields** | [**OrganizationFields**](.md)| &#x60;all&#x60; or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **paidAccount** | **Boolean**|  | [optional] [default to false]

### Return type

[**[Organization]**](Organization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdOrganizationsinvited

> [Organization] getMembersIdOrganizationsinvited(key, token, id, opts)

Get Organizations a Member has been invited to

Get a member&#39;s teams they have been invited to

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let opts = {
  'fields': new TrelloRestApi.OrganizationFields() // OrganizationFields | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getMembersIdOrganizationsinvited(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **fields** | [**OrganizationFields**](.md)| &#x60;all&#x60; or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**[Organization]**](Organization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdSavedsearches

> [SavedSearch] getMembersIdSavedsearches(key, token, id)

Get Member&#39;s saved searched

List the saved searches of a Member

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
apiInstance.getMembersIdSavedsearches(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 

### Return type

[**[SavedSearch]**](SavedSearch.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdSavedsearchesIdsearch

> SavedSearch getMembersIdSavedsearchesIdsearch(key, token, id, idSearch)

Get a saved search

Get a saved search

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let idSearch = "idSearch_example"; // String | The ID of the saved search to delete
apiInstance.getMembersIdSavedsearchesIdsearch(key, token, id, idSearch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **idSearch** | **String**| The ID of the saved search to delete | 

### Return type

[**SavedSearch**](SavedSearch.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersIdTokens

> [Token] getMembersIdTokens(key, token, id, opts)

Get Member&#39;s Tokens

List a members app tokens

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let opts = {
  'webhooks': false // Boolean | Whether to include webhooks
};
apiInstance.getMembersIdTokens(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **webhooks** | **Boolean**| Whether to include webhooks | [optional] [default to false]

### Return type

[**[Token]**](Token.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersid

> OneOfMember getMembersid(key, token, id, opts)

Get a Member

Get a member

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = new TrelloRestApi.OneOfstringstring(); // OneOfstringstring | The ID or username of the member
let opts = {
  'actions': "actions_example", // String | See the [Actions Nested Resource](ref:actions-nested-resource)
  'boards': "boards_example", // String | See the [Boards Nested Resource](/cloud/trello/guides/rest-api/object-definitions/idboardsopen)
  'boardBackgrounds': "'none'", // String | One of: `all`, `custom`, `default`, `none`, `premium`
  'boardsInvited': "boardsInvited_example", // String | `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned
  'boardsInvitedFields': new TrelloRestApi.BoardFields(), // BoardFields | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'boardStars': false, // Boolean | Whether to return the boardStars or not
  'cards': "'none'", // String | See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/) for additional options
  'customBoardBackgrounds': "'none'", // String | `all` or `none`
  'customEmoji': "'none'", // String | `all` or `none`
  'customStickers': "'none'", // String | `all` or `none`
  'fields': new TrelloRestApi.MemberFields(), // MemberFields | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'notifications': "notifications_example", // String | See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/object-definitions/idnotificationsall)
  'organizations': "'none'", // String | One of: `all`, `members`, `none`, `public`
  'organizationFields': new TrelloRestApi.OrganizationFields(), // OrganizationFields | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'organizationPaidAccount': false, // Boolean | 
  'organizationsInvited': "'none'", // String | One of: `all`, `members`, `none`, `public`
  'organizationsInvitedFields': new TrelloRestApi.OrganizationFields(), // OrganizationFields | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'paidAccount': false, // Boolean | 
  'savedSearches': false, // Boolean | 
  'tokens': "'none'" // String | `all` or `none`
};
apiInstance.getMembersid(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | [**OneOfstringstring**](.md)| The ID or username of the member | 
 **actions** | **String**| See the [Actions Nested Resource](ref:actions-nested-resource) | [optional] 
 **boards** | **String**| See the [Boards Nested Resource](/cloud/trello/guides/rest-api/object-definitions/idboardsopen) | [optional] 
 **boardBackgrounds** | **String**| One of: &#x60;all&#x60;, &#x60;custom&#x60;, &#x60;default&#x60;, &#x60;none&#x60;, &#x60;premium&#x60; | [optional] [default to &#39;none&#39;]
 **boardsInvited** | **String**| &#x60;all&#x60; or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned | [optional] 
 **boardsInvitedFields** | [**BoardFields**](.md)| &#x60;all&#x60; or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **boardStars** | **Boolean**| Whether to return the boardStars or not | [optional] [default to false]
 **cards** | **String**| See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/) for additional options | [optional] [default to &#39;none&#39;]
 **customBoardBackgrounds** | **String**| &#x60;all&#x60; or &#x60;none&#x60; | [optional] [default to &#39;none&#39;]
 **customEmoji** | **String**| &#x60;all&#x60; or &#x60;none&#x60; | [optional] [default to &#39;none&#39;]
 **customStickers** | **String**| &#x60;all&#x60; or &#x60;none&#x60; | [optional] [default to &#39;none&#39;]
 **fields** | [**MemberFields**](.md)| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **notifications** | **String**| See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/object-definitions/idnotificationsall) | [optional] 
 **organizations** | **String**| One of: &#x60;all&#x60;, &#x60;members&#x60;, &#x60;none&#x60;, &#x60;public&#x60; | [optional] [default to &#39;none&#39;]
 **organizationFields** | [**OrganizationFields**](.md)| &#x60;all&#x60; or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **organizationPaidAccount** | **Boolean**|  | [optional] [default to false]
 **organizationsInvited** | **String**| One of: &#x60;all&#x60;, &#x60;members&#x60;, &#x60;none&#x60;, &#x60;public&#x60; | [optional] [default to &#39;none&#39;]
 **organizationsInvitedFields** | [**OrganizationFields**](.md)| &#x60;all&#x60; or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **paidAccount** | **Boolean**|  | [optional] [default to false]
 **savedSearches** | **Boolean**|  | [optional] [default to false]
 **tokens** | **String**| &#x60;all&#x60; or &#x60;none&#x60; | [optional] [default to &#39;none&#39;]

### Return type

[**OneOfMember**](OneOfMember.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotificationsId

> OneOfNotification getNotificationsId(key, token, id, opts)

Get a Notification

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the notification
let opts = {
  'board': false, // Boolean | Whether to include the board object
  'boardFields': new TrelloRestApi.BoardFields(), // BoardFields | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'card': false, // Boolean | Whether to include the card object
  'cardFields': new TrelloRestApi.CardFields(), // CardFields | `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'display': false, // Boolean | Whether to include the display object with the results
  'entities': false, // Boolean | Whether to include the entities object with the results
  'fields': new TrelloRestApi.NotificationFields(), // NotificationFields | `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'list': false, // Boolean | Whether to include the list object
  'member': true, // Boolean | Whether to include the member object
  'memberFields': new TrelloRestApi.MemberFields(), // MemberFields | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'memberCreator': true, // Boolean | Whether to include the member object of the creator
  'memberCreatorFields': new TrelloRestApi.MemberFields(), // MemberFields | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
  'organization': false, // Boolean | Whether to include the organization object
  'organizationFields': new TrelloRestApi.OrganizationFields() // OrganizationFields | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getNotificationsId(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the notification | 
 **board** | **Boolean**| Whether to include the board object | [optional] [default to false]
 **boardFields** | [**BoardFields**](.md)| &#x60;all&#x60; or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **card** | **Boolean**| Whether to include the card object | [optional] [default to false]
 **cardFields** | [**CardFields**](.md)| &#x60;all&#x60; or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **display** | **Boolean**| Whether to include the display object with the results | [optional] [default to false]
 **entities** | **Boolean**| Whether to include the entities object with the results | [optional] [default to false]
 **fields** | [**NotificationFields**](.md)| &#x60;all&#x60; or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **list** | **Boolean**| Whether to include the list object | [optional] [default to false]
 **member** | **Boolean**| Whether to include the member object | [optional] [default to true]
 **memberFields** | [**MemberFields**](.md)| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **memberCreator** | **Boolean**| Whether to include the member object of the creator | [optional] [default to true]
 **memberCreatorFields** | [**MemberFields**](.md)| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 
 **organization** | **Boolean**| Whether to include the organization object | [optional] [default to false]
 **organizationFields** | [**OrganizationFields**](.md)| &#x60;all&#x60; or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**OneOfNotification**](OneOfNotification.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotificationsIdBoard

> OneOfBoard getNotificationsIdBoard(key, token, id, opts)

Get the Board a Notification is on

Get the board a notification is associated with

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the notification
let opts = {
  'fields': new TrelloRestApi.BoardFields() // BoardFields | `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getNotificationsIdBoard(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the notification | 
 **fields** | [**BoardFields**](.md)| &#x60;all&#x60; or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**OneOfBoard**](OneOfBoard.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotificationsIdCard

> OneOfCard getNotificationsIdCard(key, token, id, opts)

Get the Card a Notification is on

Get the card a notification is associated with

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the notification
let opts = {
  'fields': new TrelloRestApi.CardFields() // CardFields | `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getNotificationsIdCard(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the notification | 
 **fields** | [**CardFields**](.md)| &#x60;all&#x60; or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**OneOfCard**](OneOfCard.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotificationsIdField

> OneOfNotification getNotificationsIdField(key, token, id, field)

Get a field of a Notification

Get a specific property of a notification

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the notification
let field = new TrelloRestApi.NotificationFields(); // NotificationFields | A notification [field](/cloud/trello/guides/rest-api/object-definitions/)
apiInstance.getNotificationsIdField(key, token, id, field, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the notification | 
 **field** | [**NotificationFields**](.md)| A notification [field](/cloud/trello/guides/rest-api/object-definitions/) | 

### Return type

[**OneOfNotification**](OneOfNotification.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotificationsIdList

> OneOfList getNotificationsIdList(key, token, id, opts)

Get the List a Notification is on

Get the list a notification is associated with

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the notification
let opts = {
  'fields': new TrelloRestApi.ListFields() // ListFields | `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getNotificationsIdList(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the notification | 
 **fields** | [**ListFields**](.md)| &#x60;all&#x60; or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**OneOfList**](OneOfList.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotificationsIdMembercreator

> OneOfMember getNotificationsIdMembercreator(key, token, id, opts)

Get the Member who created the Notification

Get the member who created the notification

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the notification
let opts = {
  'fields': new TrelloRestApi.MemberFields() // MemberFields | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getNotificationsIdMembercreator(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the notification | 
 **fields** | [**MemberFields**](.md)| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**OneOfMember**](OneOfMember.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotificationsIdOrganization

> OneOfOrganization getNotificationsIdOrganization(key, token, id, opts)

Get a Notification&#39;s associated Organization

Get the organization a notification is associated with

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the notification
let opts = {
  'fields': new TrelloRestApi.OrganizationFields() // OrganizationFields | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getNotificationsIdOrganization(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the notification | 
 **fields** | [**OrganizationFields**](.md)| &#x60;all&#x60; or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**OneOfOrganization**](OneOfOrganization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationsId

> Organization getOrganizationsId(key, token, id)

Get an Organization

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the Organization
apiInstance.getOrganizationsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the Organization | 

### Return type

[**Organization**](Organization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationsIdActions

> [Action] getOrganizationsIdActions(key, token, id)

Get Actions for Organization

List the actions on a team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
apiInstance.getOrganizationsIdActions(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 

### Return type

[**[Action]**](Action.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationsIdBoards

> [OneOfBoard] getOrganizationsIdBoards(key, token, id, opts)

Get Boards in an Organization

List the boards in a team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
let opts = {
  'filter': "'all'", // String | `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public`
  'fields': "fields_example" // BoardFields | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.getOrganizationsIdBoards(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 
 **filter** | **String**| &#x60;all&#x60; or a comma-separated list of: &#x60;open&#x60;, &#x60;closed&#x60;, &#x60;members&#x60;, &#x60;organization&#x60;, &#x60;public&#x60; | [optional] [default to &#39;all&#39;]
 **fields** | **BoardFields**| &#x60;all&#x60; or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**[OneOfBoard]**](OneOfBoard.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationsIdExports

> [ModelExport] getOrganizationsIdExports(key, token, id)

Retrieve Organization&#39;s Exports

Retrieve the exports that exist for the given organization

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the team
apiInstance.getOrganizationsIdExports(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the team | 

### Return type

[**[ModelExport]**](ModelExport.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationsIdField

> Organization getOrganizationsIdField(key, token, id, field)

Get field on Organization

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
let field = new TrelloRestApi.OrganizationFields(); // OrganizationFields | An organization [field](/cloud/trello/guides/rest-api/object-definitions/)
apiInstance.getOrganizationsIdField(key, token, id, field, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 
 **field** | [**OrganizationFields**](.md)| An organization [field](/cloud/trello/guides/rest-api/object-definitions/) | 

### Return type

[**Organization**](Organization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationsIdMembers

> [OneOfMember] getOrganizationsIdMembers(key, token, id)

Get the Members of an Organization

List the members in a team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the Organization
apiInstance.getOrganizationsIdMembers(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the Organization | 

### Return type

[**[OneOfMember]**](OneOfMember.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationsIdMemberships

> [OneOfMemberships] getOrganizationsIdMemberships(key, token, id, opts)

Get Memberships of an Organization

List the memberships of a team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
let opts = {
  'filter': "'all'", // String | `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal`
  'member': false // Boolean | Whether to include the Member objects with the Memberships
};
apiInstance.getOrganizationsIdMemberships(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 
 **filter** | **String**| &#x60;all&#x60; or a comma-separated list of: &#x60;active&#x60;, &#x60;admin&#x60;, &#x60;deactivated&#x60;, &#x60;me&#x60;, &#x60;normal&#x60; | [optional] [default to &#39;all&#39;]
 **member** | **Boolean**| Whether to include the Member objects with the Memberships | [optional] [default to false]

### Return type

[**[OneOfMemberships]**](OneOfMemberships.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationsIdMembershipsIdmembership

> OneOfMemberships getOrganizationsIdMembershipsIdmembership(key, token, id, idMembership, opts)

Get a Membership of an Organization

Get a single Membership for an Organization

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
let idMembership = "idMembership_example"; // String | The ID of the membership to load
let opts = {
  'member': false // Boolean | Whether to include the Member object in the response
};
apiInstance.getOrganizationsIdMembershipsIdmembership(key, token, id, idMembership, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 
 **idMembership** | **String**| The ID of the membership to load | 
 **member** | **Boolean**| Whether to include the Member object in the response | [optional] [default to false]

### Return type

[**OneOfMemberships**](OneOfMemberships.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationsIdNewbillableguestsIdboard

> getOrganizationsIdNewbillableguestsIdboard(key, token, id, idBoard)

Get Organizations new billable guests

Used to check whether the given board has new billable guests on it.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
let idBoard = "idBoard_example"; // String | The ID of the board to check for new billable guests.
apiInstance.getOrganizationsIdNewbillableguestsIdboard(key, token, id, idBoard, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 
 **idBoard** | **String**| The ID of the board to check for new billable guests. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getOrganizationsIdPlugindata

> [OneOfPluginData] getOrganizationsIdPlugindata(key, token, id)

Get the pluginData Scoped to Organization

Get organization scoped pluginData on this team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
apiInstance.getOrganizationsIdPlugindata(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 

### Return type

[**[OneOfPluginData]**](OneOfPluginData.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationsIdTags

> [OneOfTag] getOrganizationsIdTags(key, token, id)

Get Tags of an Organization

List the organization&#39;s collections

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = new TrelloRestApi.OneOfstringstring(); // OneOfstringstring | The ID or name of the Organization
apiInstance.getOrganizationsIdTags(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | [**OneOfstringstring**](.md)| The ID or name of the Organization | 

### Return type

[**[OneOfTag]**](OneOfTag.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPluginsId

> Plugin getPluginsId(key, token, id)

Get a Plugin

Get plugins

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
apiInstance.getPluginsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 

### Return type

[**Plugin**](Plugin.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPluginsIdComplianceMemberprivacy

> getPluginsIdComplianceMemberprivacy(key, token, id)

Get Plugin&#39;s Member privacy compliance

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Power-Up
apiInstance.getPluginsIdComplianceMemberprivacy(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Power-Up | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSearch

> [OneOfMemberCardBoardOrganization] getSearch(key, token, query, opts)

Search Trello

Find what you&#39;re looking for in Trello

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let query = "query_example"; // String | The search query with a length of 1 to 16384 characters
let opts = {
  'idBoards': new TrelloRestApi.OneOfstringstring(), // OneOfstringstring | `mine` or a comma-separated list of Board IDs
  'idOrganizations': "idOrganizations_example", // String | A comma-separated list of Organization IDs
  'idCards': "idCards_example", // String | A comma-separated list of Card IDs
  'modelTypes': "'all'", // String | What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations`
  'boardFields': "'name,idOrganization'", // String | all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`
  'boardsLimit': 10, // Number | The maximum number of boards returned. Maximum: 1000
  'cardFields': "'all'", // String | all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `email`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url`
  'cardsLimit': 10, // Number | The maximum number of cards to return. Maximum: 1000
  'cardsPage': 0, // Number | The page of results for cards. Maximum: 100
  'cardBoard': false, // Boolean | Whether to include the parent board with card results
  'cardList': false, // Boolean | Whether to include the parent list with card results
  'cardMembers': false, // Boolean | Whether to include member objects with card results
  'cardStickers': false, // Boolean | Whether to include sticker objects with card results
  'cardAttachments': "'false'", // String | Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments.
  'organizationFields': "'name,displayName'", // String | all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website
  'organizationsLimit': 56, // Number | The maximum number of teams to return. Maximum 1000
  'memberFields': "'avatarHash,fullName,initials,username,confirmed'", // String | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
  'membersLimit': 56, // Number | The maximum number of members to return. Maximum 1000
  'partial': false // Boolean | By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled \"My Development Status Report\", by default you would need to search for \"Development\". If you have partial enabled, you will be able to search for \"dev\" but not \"velopment\".
};
apiInstance.getSearch(key, token, query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **query** | **String**| The search query with a length of 1 to 16384 characters | 
 **idBoards** | [**OneOfstringstring**](.md)| &#x60;mine&#x60; or a comma-separated list of Board IDs | [optional] 
 **idOrganizations** | **String**| A comma-separated list of Organization IDs | [optional] 
 **idCards** | **String**| A comma-separated list of Card IDs | [optional] 
 **modelTypes** | **String**| What type or types of Trello objects you want to search. all or a comma-separated list of: &#x60;actions&#x60;, &#x60;boards&#x60;, &#x60;cards&#x60;, &#x60;members&#x60;, &#x60;organizations&#x60; | [optional] [default to &#39;all&#39;]
 **boardFields** | **String**| all or a comma-separated list of: &#x60;closed&#x60;, &#x60;dateLastActivity&#x60;, &#x60;dateLastView&#x60;, &#x60;desc&#x60;, &#x60;descData&#x60;, &#x60;idOrganization&#x60;, &#x60;invitations&#x60;, &#x60;invited&#x60;, &#x60;labelNames&#x60;, &#x60;memberships&#x60;, &#x60;name&#x60;, &#x60;pinned&#x60;, &#x60;powerUps&#x60;, &#x60;prefs&#x60;, &#x60;shortLink&#x60;, &#x60;shortUrl&#x60;, &#x60;starred&#x60;, &#x60;subscribed&#x60;, &#x60;url&#x60; | [optional] [default to &#39;name,idOrganization&#39;]
 **boardsLimit** | **Number**| The maximum number of boards returned. Maximum: 1000 | [optional] [default to 10]
 **cardFields** | **String**| all or a comma-separated list of: &#x60;badges&#x60;, &#x60;checkItemStates&#x60;, &#x60;closed&#x60;, &#x60;dateLastActivity&#x60;, &#x60;desc&#x60;, &#x60;descData&#x60;, &#x60;due&#x60;, &#x60;email&#x60;, &#x60;idAttachmentCover&#x60;, &#x60;idBoard&#x60;, &#x60;idChecklists&#x60;, &#x60;idLabels&#x60;, &#x60;idList&#x60;, &#x60;idMembers&#x60;, &#x60;idMembersVoted&#x60;, &#x60;idShort&#x60;, &#x60;labels&#x60;, &#x60;manualCoverAttachment&#x60;, &#x60;name&#x60;, &#x60;pos&#x60;, &#x60;shortLink&#x60;, &#x60;shortUrl&#x60;, &#x60;subscribed&#x60;, &#x60;url&#x60; | [optional] [default to &#39;all&#39;]
 **cardsLimit** | **Number**| The maximum number of cards to return. Maximum: 1000 | [optional] [default to 10]
 **cardsPage** | **Number**| The page of results for cards. Maximum: 100 | [optional] [default to 0]
 **cardBoard** | **Boolean**| Whether to include the parent board with card results | [optional] [default to false]
 **cardList** | **Boolean**| Whether to include the parent list with card results | [optional] [default to false]
 **cardMembers** | **Boolean**| Whether to include member objects with card results | [optional] [default to false]
 **cardStickers** | **Boolean**| Whether to include sticker objects with card results | [optional] [default to false]
 **cardAttachments** | **String**| Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments. | [optional] [default to &#39;false&#39;]
 **organizationFields** | **String**| all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website | [optional] [default to &#39;name,displayName&#39;]
 **organizationsLimit** | **Number**| The maximum number of teams to return. Maximum 1000 | [optional] 
 **memberFields** | **String**| all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username | [optional] [default to &#39;avatarHash,fullName,initials,username,confirmed&#39;]
 **membersLimit** | **Number**| The maximum number of members to return. Maximum 1000 | [optional] 
 **partial** | **Boolean**| By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled \&quot;My Development Status Report\&quot;, by default you would need to search for \&quot;Development\&quot;. If you have partial enabled, you will be able to search for \&quot;dev\&quot; but not \&quot;velopment\&quot;. | [optional] [default to false]

### Return type

[**[OneOfMemberCardBoardOrganization]**](OneOfMemberCardBoardOrganization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSearchMembers

> [Member] getSearchMembers(key, token, query, opts)

Search for Members

Search for Trello members.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let query = "query_example"; // String | Search query 1 to 16384 characters long
let opts = {
  'limit': 8, // Number | The maximum number of results to return. Maximum of 20.
  'idBoard': "idBoard_example", // String | 
  'idOrganization': "idOrganization_example", // String | 
  'onlyOrgMembers': false // Boolean | 
};
apiInstance.getSearchMembers(key, token, query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **query** | **String**| Search query 1 to 16384 characters long | 
 **limit** | **Number**| The maximum number of results to return. Maximum of 20. | [optional] [default to 8]
 **idBoard** | **String**|  | [optional] 
 **idOrganization** | **String**|  | [optional] 
 **onlyOrgMembers** | **Boolean**|  | [optional] [default to false]

### Return type

[**[Member]**](Member.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTokensToken

> Token getTokensToken(key, token, token2, opts)

Get a Token

Retrieve information about a token.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let token2 = "token_example"; // String | 
let opts = {
  'fields': new TrelloRestApi.TokenFields(), // TokenFields | `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`
  'webhooks': false // Boolean | Determines whether to include webhooks.
};
apiInstance.getTokensToken(key, token, token2, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **token2** | **String**|  | 
 **fields** | [**TokenFields**](.md)| &#x60;all&#x60; or a comma-separated list of &#x60;dateCreated&#x60;, &#x60;dateExpires&#x60;, &#x60;idMember&#x60;, &#x60;identifier&#x60;, &#x60;permissions&#x60; | [optional] 
 **webhooks** | **Boolean**| Determines whether to include webhooks. | [optional] [default to false]

### Return type

[**Token**](Token.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTokensTokenMember

> Member getTokensTokenMember(key, token, token2, opts)

Get Token&#39;s Member

Retrieve information about a token&#39;s owner by token.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let token2 = "token_example"; // String | 
let opts = {
  'fields': new TrelloRestApi.MemberFields() // MemberFields | `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/).
};
apiInstance.getTokensTokenMember(key, token, token2, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **token2** | **String**|  | 
 **fields** | [**MemberFields**](.md)| &#x60;all&#x60; or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/). | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTokensTokenWebhooks

> [Webhook] getTokensTokenWebhooks(key, token, token2)

Get Webhooks for Token

Retrieve all webhooks created with a Token.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let token2 = "token_example"; // String | 
apiInstance.getTokensTokenWebhooks(key, token, token2, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **token2** | **String**|  | 

### Return type

[**[Webhook]**](Webhook.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTokensTokenWebhooksIdwebhook

> Webhook getTokensTokenWebhooksIdwebhook(key, token, token2, idWebhook)

Get a Webhook belonging to a Token

Retrieve a webhook created with a Token.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let token2 = "token_example"; // String | 
let idWebhook = "idWebhook_example"; // String | ID of the [Webhooks](ref:webhooks) to retrieve.
apiInstance.getTokensTokenWebhooksIdwebhook(key, token, token2, idWebhook, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **token2** | **String**|  | 
 **idWebhook** | **String**| ID of the [Webhooks](ref:webhooks) to retrieve. | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooksId

> Webhook getWebhooksId(key, token, id)

Get a Webhook

Get a webhook by ID.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the webhook to retrieve.
apiInstance.getWebhooksId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the webhook to retrieve. | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## membersidavatar

> membersidavatar(key, token, id, file)

Create Avatar for Member

Create a new avatar for a member

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let file = "/path/to/file"; // File | 
apiInstance.membersidavatar(key, token, id, file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **file** | **File**|  | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## membersidcustomboardbackgrounds1

> BoardBackground membersidcustomboardbackgrounds1(id, key, token, file)

Create a new custom Board Background

Upload a new custom board background

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or username of the member
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let file = "/path/to/file"; // File | 
apiInstance.membersidcustomboardbackgrounds1(id, key, token, file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or username of the member | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **file** | **File**|  | 

### Return type

[**BoardBackground**](BoardBackground.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## membersidcustomemojiidemoji

> CustomEmoji membersidcustomemojiidemoji(key, token, id, idEmoji, opts)

Get a Member&#39;s custom Emoji

Get a Member&#39;s custom Emoji

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let idEmoji = "idEmoji_example"; // String | The ID of the custom emoji
let opts = {
  'fields': "'all'" // String | `all` or a comma-separated list of `name`, `url`
};
apiInstance.membersidcustomemojiidemoji(key, token, id, idEmoji, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **idEmoji** | **String**| The ID of the custom emoji | 
 **fields** | **String**| &#x60;all&#x60; or a comma-separated list of &#x60;name&#x60;, &#x60;url&#x60; | [optional] [default to &#39;all&#39;]

### Return type

[**CustomEmoji**](CustomEmoji.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## notificationsidmember

> OneOfMember notificationsidmember(key, token, id, opts)

Get the Member a Notification is about (not the creator)

Get the member (not the creator) a notification is about

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the notification
let opts = {
  'fields': new TrelloRestApi.MemberFields() // MemberFields | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
};
apiInstance.notificationsidmember(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the notification | 
 **fields** | [**MemberFields**](.md)| &#x60;all&#x60; or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) | [optional] 

### Return type

[**OneOfMember**](OneOfMember.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organizationsIdMembersIdmemberAll

> organizationsIdMembersIdmemberAll(key, token, id, idMember)

Remove a Member from an Organization and all Organization Boards

Remove a member from a team and from all team boards

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
let idMember = "idMember_example"; // String | The ID of the member to remove from the team
apiInstance.organizationsIdMembersIdmemberAll(key, token, id, idMember, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 
 **idMember** | **String**| The ID of the member to remove from the team | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postActionsIdactionReactions

> postActionsIdactionReactions(key, token, idAction, opts)

Create Reaction for Action

Adds a new reaction to an action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let idAction = "idAction_example"; // String | The ID of the action
let opts = {
  'inlineObject': new TrelloRestApi.InlineObject() // InlineObject | 
};
apiInstance.postActionsIdactionReactions(key, token, idAction, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **idAction** | **String**| The ID of the action | 
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postBoards

> postBoards(key, token, name, opts)

Create a Board

Create a new board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let name = "name_example"; // String | The new name for the board. 1 to 16384 characters long.
let opts = {
  'defaultLabels': true, // Boolean | Determines whether to use the default set of labels.
  'defaultLists': true, // Boolean | Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided.
  'desc': "desc_example", // String | A new description for the board, 0 to 16384 characters long
  'idOrganization': "idOrganization_example", // String | The id or name of the team the board should belong to.
  'idBoardSource': "idBoardSource_example", // String | The id of a board to copy into the new board.
  'keepFromSource': "'none'", // String | To keep cards from the original board pass in the value `cards`
  'powerUps': "powerUps_example", // String | The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.
  'prefsPermissionLevel': "'private'", // String | The permissions level of the board. One of: `org`, `private`, `public`.
  'prefsVoting': "'disabled'", // String | Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.
  'prefsComments': "'members'", // String | Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.
  'prefsInvitations': "'members'", // String | Determines what types of members can invite users to join. One of: `admins`, `members`.
  'prefsSelfJoin': true, // Boolean | Determines whether users can join the boards themselves or whether they have to be invited.
  'prefsCardCovers': true, // Boolean | Determines whether card covers are enabled.
  'prefsBackground': "'blue'", // String | The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.
  'prefsCardAging': "'regular'" // String | Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.
};
apiInstance.postBoards(key, token, name, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| The new name for the board. 1 to 16384 characters long. | 
 **defaultLabels** | **Boolean**| Determines whether to use the default set of labels. | [optional] [default to true]
 **defaultLists** | **Boolean**| Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if &#x60;idBoardSource&#x60; is provided. | [optional] [default to true]
 **desc** | **String**| A new description for the board, 0 to 16384 characters long | [optional] 
 **idOrganization** | **String**| The id or name of the team the board should belong to. | [optional] 
 **idBoardSource** | **String**| The id of a board to copy into the new board. | [optional] 
 **keepFromSource** | **String**| To keep cards from the original board pass in the value &#x60;cards&#x60; | [optional] [default to &#39;none&#39;]
 **powerUps** | **String**| The Power-Ups that should be enabled on the new board. One of: &#x60;all&#x60;, &#x60;calendar&#x60;, &#x60;cardAging&#x60;, &#x60;recap&#x60;, &#x60;voting&#x60;. | [optional] 
 **prefsPermissionLevel** | **String**| The permissions level of the board. One of: &#x60;org&#x60;, &#x60;private&#x60;, &#x60;public&#x60;. | [optional] [default to &#39;private&#39;]
 **prefsVoting** | **String**| Who can vote on this board. One of &#x60;disabled&#x60;, &#x60;members&#x60;, &#x60;observers&#x60;, &#x60;org&#x60;, &#x60;public&#x60;. | [optional] [default to &#39;disabled&#39;]
 **prefsComments** | **String**| Who can comment on cards on this board. One of: &#x60;disabled&#x60;, &#x60;members&#x60;, &#x60;observers&#x60;, &#x60;org&#x60;, &#x60;public&#x60;. | [optional] [default to &#39;members&#39;]
 **prefsInvitations** | **String**| Determines what types of members can invite users to join. One of: &#x60;admins&#x60;, &#x60;members&#x60;. | [optional] [default to &#39;members&#39;]
 **prefsSelfJoin** | **Boolean**| Determines whether users can join the boards themselves or whether they have to be invited. | [optional] [default to true]
 **prefsCardCovers** | **Boolean**| Determines whether card covers are enabled. | [optional] [default to true]
 **prefsBackground** | **String**| The id of a custom background or one of: &#x60;blue&#x60;, &#x60;orange&#x60;, &#x60;green&#x60;, &#x60;red&#x60;, &#x60;purple&#x60;, &#x60;pink&#x60;, &#x60;lime&#x60;, &#x60;sky&#x60;, &#x60;grey&#x60;. | [optional] [default to &#39;blue&#39;]
 **prefsCardAging** | **String**| Determines the type of card aging that should take place on the board if card aging is enabled. One of: &#x60;pirate&#x60;, &#x60;regular&#x60;. | [optional] [default to &#39;regular&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postBoardsIdBoardplugins

> postBoardsIdBoardplugins(id, key, token, opts)

Enable a Power-Up on a Board

Enable a Power-Up on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Board
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'idPlugin': "idPlugin_example" // String | The ID of the Power-Up to enable
};
apiInstance.postBoardsIdBoardplugins(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Board | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **idPlugin** | **String**| The ID of the Power-Up to enable | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postBoardsIdCalendarkeyGenerate

> postBoardsIdCalendarkeyGenerate(key, token, id)

Create a calendarKey for a Board

Create a new board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
apiInstance.postBoardsIdCalendarkeyGenerate(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postBoardsIdChecklists

> postBoardsIdChecklists(key, token, id, name)

Create Checklist on a Board

Create a new checklist on a board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let name = "name_example"; // String | The name of the checklist to be created. 1 to 16384 characters long.
apiInstance.postBoardsIdChecklists(key, token, id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **name** | **String**| The name of the checklist to be created. 1 to 16384 characters long. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postBoardsIdEmailkeyGenerate

> postBoardsIdEmailkeyGenerate(key, token, id)

Create a emailKey for a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
apiInstance.postBoardsIdEmailkeyGenerate(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postBoardsIdIdtags

> postBoardsIdIdtags(key, token, id, value)

Create a Tag for a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let value = "value_example"; // String | The id of a tag from the organization to which this board belongs.
apiInstance.postBoardsIdIdtags(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **value** | **String**| The id of a tag from the organization to which this board belongs. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postBoardsIdLabels

> postBoardsIdLabels(key, token, id, name, color)

Create a Label on a Board

Create a new Label on a Board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let name = "name_example"; // String | The name of the label to be created. 1 to 16384 characters long.
let color = "color_example"; // String | Sets the color of the new label. Valid values are a label color or `null`.
apiInstance.postBoardsIdLabels(key, token, id, name, color, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **name** | **String**| The name of the label to be created. 1 to 16384 characters long. | 
 **color** | **String**| Sets the color of the new label. Valid values are a label color or &#x60;null&#x60;. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postBoardsIdLists

> postBoardsIdLists(id, key, token, name, opts)

Create a List on a Board

Create a new List on a Board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the board
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let name = "name_example"; // String | The name of the list to be created. 1 to 16384 characters long.
let opts = {
  'pos': "'top'" // String | Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.
};
apiInstance.postBoardsIdLists(id, key, token, name, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the board | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| The name of the list to be created. 1 to 16384 characters long. | 
 **pos** | **String**| Determines the position of the list. Valid values: &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive number. | [optional] [default to &#39;top&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postBoardsIdMarkedasviewed

> postBoardsIdMarkedasviewed(key, token, id)

Mark Board as viewed

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
apiInstance.postBoardsIdMarkedasviewed(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postBoardsIdPowerups

> postBoardsIdPowerups(key, token, id, value)

Enable Power-Up on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let value = "value_example"; // String | The Power-Up to be enabled on the board. One of: `calendar`, `cardAging`, `recap`, `voting`.
apiInstance.postBoardsIdPowerups(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **value** | **String**| The Power-Up to be enabled on the board. One of: &#x60;calendar&#x60;, &#x60;cardAging&#x60;, &#x60;recap&#x60;, &#x60;voting&#x60;. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postCards

> postCards(key, token, idList, opts)

Create a new Card

Create a new card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let idList = "idList_example"; // String | The ID of the list the card should be created in
let opts = {
  'name': "name_example", // String | The name for the card
  'desc': "desc_example", // String | The description for the card
  'pos': new TrelloRestApi.OneOfstringfloat(), // OneOfstringfloat | The position of the new card. `top`, `bottom`, or a positive float
  'due': new Date("2013-10-20"), // Date | A due date for the card
  'dueComplete': true, // Boolean | 
  'idMembers': [new TrelloRestApi.OneOfstring()], // [OneOfstring] | Comma-separated list of member IDs to add to the card
  'idLabels': [new TrelloRestApi.OneOfstring()], // [OneOfstring] | Comma-separated list of label IDs to add to the card
  'urlSource': "urlSource_example", // String | A URL starting with `http://` or `https://`
  'fileSource': "/path/to/file", // File | 
  'idCardSource': "idCardSource_example", // String | The ID of a card to copy into the new card
  'keepFromSource': "'all'", // String | If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,comments,due,labels,members,stickers`
  'address': "address_example", // String | For use with/by the Map Power-Up
  'locationName': "locationName_example", // String | For use with/by the Map Power-Up
  'coordinates': "coordinates_example" // String | For use with/by the Map Power-Up. Should take the form latitude,longitude
};
apiInstance.postCards(key, token, idList, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **idList** | **String**| The ID of the list the card should be created in | 
 **name** | **String**| The name for the card | [optional] 
 **desc** | **String**| The description for the card | [optional] 
 **pos** | [**OneOfstringfloat**](.md)| The position of the new card. &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive float | [optional] 
 **due** | **Date**| A due date for the card | [optional] 
 **dueComplete** | **Boolean**|  | [optional] 
 **idMembers** | [**[OneOfstring]**](OneOfstring.md)| Comma-separated list of member IDs to add to the card | [optional] 
 **idLabels** | [**[OneOfstring]**](OneOfstring.md)| Comma-separated list of label IDs to add to the card | [optional] 
 **urlSource** | **String**| A URL starting with &#x60;http://&#x60; or &#x60;https://&#x60; | [optional] 
 **fileSource** | **File**|  | [optional] 
 **idCardSource** | **String**| The ID of a card to copy into the new card | [optional] 
 **keepFromSource** | **String**| If using &#x60;idCardSource&#x60; you can specify which properties to copy over. &#x60;all&#x60; or comma-separated list of: &#x60;attachments,checklists,comments,due,labels,members,stickers&#x60; | [optional] [default to &#39;all&#39;]
 **address** | **String**| For use with/by the Map Power-Up | [optional] 
 **locationName** | **String**| For use with/by the Map Power-Up | [optional] 
 **coordinates** | **String**| For use with/by the Map Power-Up. Should take the form latitude,longitude | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postCardsIdActionsComments

> postCardsIdActionsComments(key, token, id, text)

Add a new comment to a Card

Add a new comment to a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let text = "text_example"; // String | The comment
apiInstance.postCardsIdActionsComments(key, token, id, text, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **text** | **String**| The comment | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postCardsIdAttachments

> [OneOfAttachment] postCardsIdAttachments(id, key, token, opts)

Create Attachment On Card

Create an Attachment to a Card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'name': "name_example", // String | The name of the attachment. Max length 256.
  'file': "/path/to/file", // File | The file to attach, as multipart/form-data
  'mimeType': "mimeType_example", // String | The mimeType of the attachment. Max length 256
  'url': "url_example", // String | A URL to attach. Must start with `http://` or `https://`
  'setCover': false // Boolean | Determines whether to use the new attachment as a cover for the Card.
};
apiInstance.postCardsIdAttachments(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| The name of the attachment. Max length 256. | [optional] 
 **file** | **File**| The file to attach, as multipart/form-data | [optional] 
 **mimeType** | **String**| The mimeType of the attachment. Max length 256 | [optional] 
 **url** | **String**| A URL to attach. Must start with &#x60;http://&#x60; or &#x60;https://&#x60; | [optional] 
 **setCover** | **Boolean**| Determines whether to use the new attachment as a cover for the Card. | [optional] [default to false]

### Return type

[**[OneOfAttachment]**](OneOfAttachment.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCardsIdChecklists

> postCardsIdChecklists(key, token, id, opts)

Create Checklist on a Card

Create a new checklist on a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let opts = {
  'name': "name_example", // String | The name of the checklist
  'idChecklistSource': "idChecklistSource_example", // String | The ID of a source checklist to copy into the new one
  'pos': "pos_example" // String | The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
};
apiInstance.postCardsIdChecklists(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **name** | **String**| The name of the checklist | [optional] 
 **idChecklistSource** | **String**| The ID of a source checklist to copy into the new one | [optional] 
 **pos** | **String**| The position of the checklist on the card. One of: &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive number. | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postCardsIdIdlabels

> postCardsIdIdlabels(key, token, id, opts)

Add a Label to a Card

Add a label to a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let opts = {
  'value': "value_example" // String | The ID of the label to add
};
apiInstance.postCardsIdIdlabels(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **value** | **String**| The ID of the label to add | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postCardsIdIdmembers

> postCardsIdIdmembers(key, token, id, opts)

Add a Member to a Card

Add a member to a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let opts = {
  'value': "value_example" // String | The ID of the Member to add to the card
};
apiInstance.postCardsIdIdmembers(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **value** | **String**| The ID of the Member to add to the card | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postCardsIdLabels

> postCardsIdLabels(key, token, id, color, opts)

Create a new Label on a Card

Create a new label for the board and add it to the given card.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
let color = "color_example"; // String | A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/)
let opts = {
  'name': "name_example" // String | A name for the label
};
apiInstance.postCardsIdLabels(key, token, id, color, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 
 **color** | **String**| A valid label color or &#x60;null&#x60;. See [labels](/cloud/trello/guides/rest-api/object-definitions/) | 
 **name** | **String**| A name for the label | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postCardsIdMarkassociatednotificationsread

> postCardsIdMarkassociatednotificationsread(key, token, id)

Mark a Card&#39;s Notifications as read

Mark notifications about this card as read

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the Card
apiInstance.postCardsIdMarkassociatednotificationsread(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the Card | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postCardsIdStickers

> postCardsIdStickers(id, key, token, image, top, left, zIndex, opts)

Add a Sticker to a Card

Add a sticker to a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let image = "image_example"; // String | For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below)
let top = 3.4; // Number | The top position of the sticker, from -60 to 100
let left = 3.4; // Number | The left position of the sticker, from -60 to 100
let zIndex = 56; // Number | The z-index of the sticker
let opts = {
  'rotate': 0 // Number | The rotation of the sticker
};
apiInstance.postCardsIdStickers(id, key, token, image, top, left, zIndex, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **image** | **String**| For custom stickers, the id of the sticker. For default stickers, the string identifier (like &#39;taco-cool&#39;, see below) | 
 **top** | **Number**| The top position of the sticker, from -60 to 100 | 
 **left** | **Number**| The left position of the sticker, from -60 to 100 | 
 **zIndex** | **Number**| The z-index of the sticker | 
 **rotate** | **Number**| The rotation of the sticker | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postChecklists

> postChecklists(key, token, idCard, opts)

Create a Checklist

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let idCard = "idCard_example"; // String | The ID of the Card that the checklist should be added to.
let opts = {
  'name': "name_example", // String | The name of the checklist. Should be a string of length 1 to 16384.
  'pos': new TrelloRestApi.PosStringOrNumber(), // PosStringOrNumber | The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
  'idChecklistSource': "idChecklistSource_example" // String | The ID of a checklist to copy into the new checklist.
};
apiInstance.postChecklists(key, token, idCard, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **idCard** | **String**| The ID of the Card that the checklist should be added to. | 
 **name** | **String**| The name of the checklist. Should be a string of length 1 to 16384. | [optional] 
 **pos** | [**PosStringOrNumber**](.md)| The position of the checklist on the card. One of: &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive number. | [optional] 
 **idChecklistSource** | **String**| The ID of a checklist to copy into the new checklist. | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postChecklistsIdCheckitems

> postChecklistsIdCheckitems(id, key, token, name, opts)

Create Checkitem on Checklist

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | ID of a checklist.
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let name = "name_example"; // String | The name of the new check item on the checklist. Should be a string of length 1 to 16384.
let opts = {
  'pos': "pos_example", // PosStringOrNumber | The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.
  'checked': false // Boolean | Determines whether the check item is already checked when created.
};
apiInstance.postChecklistsIdCheckitems(id, key, token, name, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of a checklist. | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| The name of the new check item on the checklist. Should be a string of length 1 to 16384. | 
 **pos** | **PosStringOrNumber**| The position of the check item in the checklist. One of: &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive number. | [optional] 
 **checked** | **Boolean**| Determines whether the check item is already checked when created. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postCustomfields

> CustomField postCustomfields(key, token, opts)

Create a new Custom Field on a Board

Create a new Custom Field on a board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'inlineObject2': new TrelloRestApi.InlineObject2() // InlineObject2 | 
};
apiInstance.postCustomfields(key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

[**CustomField**](CustomField.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCustomfieldsIdOptions

> postCustomfieldsIdOptions(key, token, id)

Get Options of Custom Field drop down

Get the options of a drop down Custom Field

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the customfield.
apiInstance.postCustomfieldsIdOptions(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the customfield. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postEnterprisesIdTokens

> postEnterprisesIdTokens(key, token, id, opts)

Create an auth Token for an Enterprise.

Create an auth Token for an Enterprise.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the enterprise to retrieve.
let opts = {
  'expiration': "'none'" // String | One of: `1hour`, `1day`, `30days`, `never`
};
apiInstance.postEnterprisesIdTokens(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the enterprise to retrieve. | 
 **expiration** | **String**| One of: &#x60;1hour&#x60;, &#x60;1day&#x60;, &#x60;30days&#x60;, &#x60;never&#x60; | [optional] [default to &#39;none&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postLabels

> postLabels(key, token, name, color, idBoard)

Create a Label

Create a new Label on a Board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let name = "name_example"; // String | Name for the label
let color = new TrelloRestApi.Color(); // Color | The color for the label.
let idBoard = "idBoard_example"; // String | The ID of the Board to create the Label on.
apiInstance.postLabels(key, token, name, color, idBoard, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| Name for the label | 
 **color** | [**Color**](.md)| The color for the label. | 
 **idBoard** | **String**| The ID of the Board to create the Label on. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postLists

> postLists(key, token, name, idBoard, opts)

Create a new List

Create a new List on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let name = "name_example"; // String | Name for the list
let idBoard = "idBoard_example"; // String | The long ID of the board the list should be created on
let opts = {
  'idListSource': "idListSource_example", // String | ID of the List to copy into the new List
  'pos': new TrelloRestApi.OneOffloatstring() // OneOffloatstring | Position of the list. `top`, `bottom`, or a positive floating point number
};
apiInstance.postLists(key, token, name, idBoard, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| Name for the list | 
 **idBoard** | **String**| The long ID of the board the list should be created on | 
 **idListSource** | **String**| ID of the List to copy into the new List | [optional] 
 **pos** | [**OneOffloatstring**](.md)| Position of the list. &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive floating point number | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postListsIdArchiveallcards

> postListsIdArchiveallcards(key, token, id)

Archive all Cards in List

Archive all cards in a list

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the list
apiInstance.postListsIdArchiveallcards(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the list | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postListsIdMoveallcards

> postListsIdMoveallcards(key, token, id, idBoard, idList)

Move all Cards in List

Move all Cards in a List

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the list
let idBoard = "idBoard_example"; // String | The ID of the board the cards should be moved to
let idList = "idList_example"; // String | The ID of the list that the cards should be moved to
apiInstance.postListsIdMoveallcards(key, token, id, idBoard, idList, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the list | 
 **idBoard** | **String**| The ID of the board the cards should be moved to | 
 **idList** | **String**| The ID of the list that the cards should be moved to | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postMembersIdBoardbackgrounds1

> [OneOfBoardBackground] postMembersIdBoardbackgrounds1(key, token, id, file)

Upload new boardBackground for Member

Upload a new boardBackground

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let file = "/path/to/file"; // File | 
apiInstance.postMembersIdBoardbackgrounds1(key, token, id, file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **file** | **File**|  | 

### Return type

[**[OneOfBoardBackground]**](OneOfBoardBackground.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postMembersIdBoardstars

> [BoardStars] postMembersIdBoardstars(key, token, id, idBoard, pos)

Create Star for Board

Star a new board on behalf of a Member

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = new TrelloRestApi.OneOfstringstring(); // OneOfstringstring | The ID or username of the member
let idBoard = "idBoard_example"; // String | The ID of the board to star
let pos = new TrelloRestApi.PosStringOrNumber(); // PosStringOrNumber | The position of the newly starred board. `top`, `bottom`, or a positive float.
apiInstance.postMembersIdBoardstars(key, token, id, idBoard, pos, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | [**OneOfstringstring**](.md)| The ID or username of the member | 
 **idBoard** | **String**| The ID of the board to star | 
 **pos** | [**PosStringOrNumber**](.md)| The position of the newly starred board. &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive float. | 

### Return type

[**[BoardStars]**](BoardStars.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postMembersIdCustomemoji

> CustomEmoji postMembersIdCustomemoji(id, key, token, file, name)

Create custom Emoji for Member

Create a new custom Emoji

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or username of the member
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let file = "/path/to/file"; // File | 
let name = "name_example"; // String | Name for the emoji. 2 - 64 characters
apiInstance.postMembersIdCustomemoji(id, key, token, file, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or username of the member | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **file** | **File**|  | 
 **name** | **String**| Name for the emoji. 2 - 64 characters | 

### Return type

[**CustomEmoji**](CustomEmoji.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postMembersIdCustomstickers

> CustomSticker postMembersIdCustomstickers(id, key, token, file)

Create custom Sticker for Member

Upload a new custom sticker

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or username of the member
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let file = "/path/to/file"; // File | 
apiInstance.postMembersIdCustomstickers(id, key, token, file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or username of the member | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **file** | **File**|  | 

### Return type

[**CustomSticker**](CustomSticker.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postMembersIdOnetimemessagesdismissed

> postMembersIdOnetimemessagesdismissed(key, token, id, value)

Dismiss a message for Member

Dismiss a message

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let value = "value_example"; // String | The message to dismiss
apiInstance.postMembersIdOnetimemessagesdismissed(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **value** | **String**| The message to dismiss | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postMembersIdSavedsearches

> SavedSearch postMembersIdSavedsearches(id, key, token, name, query, pos)

Create saved Search for Memer

Create a saved search

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or username of the member
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let name = "name_example"; // String | The name for the saved search
let query = "query_example"; // String | The search query
let pos = new TrelloRestApi.PosStringOrNumber(); // PosStringOrNumber | The position of the saved search. `top`, `bottom`, or a positive float.
apiInstance.postMembersIdSavedsearches(id, key, token, name, query, pos, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or username of the member | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| The name for the saved search | 
 **query** | **String**| The search query | 
 **pos** | [**PosStringOrNumber**](.md)| The position of the saved search. &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive float. | 

### Return type

[**SavedSearch**](SavedSearch.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNotificationsAllRead

> OneOfNotification postNotificationsAllRead(key, token, opts)

Mark all Notifications as read

Mark all notifications as read

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'read': true, // Boolean | Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)
  'ids': ["5abbe4b7ddc1b351ef961414"] // [String] | A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.
};
apiInstance.postNotificationsAllRead(key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **read** | **Boolean**| Boolean to specify whether to mark as read or unread (defaults to &#x60;true&#x60;, marking as read) | [optional] [default to true]
 **ids** | [**[String]**](String.md)| A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread. | [optional] 

### Return type

[**OneOfNotification**](OneOfNotification.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postOrganizations

> OneOfOrganization postOrganizations(key, token, displayName, opts)

Create a new Organization

Create a new team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let displayName = "displayName_example"; // String | The name to display for the Organization
let opts = {
  'desc': "desc_example", // String | The description for the organizations
  'name': "name_example", // String | A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. Must be unique.
  'website': "website_example" // String | A URL starting with `http://` or `https://`
};
apiInstance.postOrganizations(key, token, displayName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **displayName** | **String**| The name to display for the Organization | 
 **desc** | **String**| The description for the organizations | [optional] 
 **name** | **String**| A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. Must be unique. | [optional] 
 **website** | **String**| A URL starting with &#x60;http://&#x60; or &#x60;https://&#x60; | [optional] 

### Return type

[**OneOfOrganization**](OneOfOrganization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postOrganizationsIdExports

> ModelExport postOrganizationsIdExports(id, key, token, opts)

Create Export for Organizations

Kick off CSV export for an organization

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or name of the team
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'attachments': true // Boolean | Whether the CSV should include attachments or not.
};
apiInstance.postOrganizationsIdExports(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or name of the team | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **attachments** | **Boolean**| Whether the CSV should include attachments or not. | [optional] [default to true]

### Return type

[**ModelExport**](ModelExport.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postOrganizationsIdLogo

> OneOfOrganization postOrganizationsIdLogo(key, token, id, opts)

Update logo for an Organization

Set the logo image for a team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the team
let opts = {
  'file': "/path/to/file" // File | Image file for the logo
};
apiInstance.postOrganizationsIdLogo(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the team | 
 **file** | **File**| Image file for the logo | [optional] 

### Return type

[**OneOfOrganization**](OneOfOrganization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postOrganizationsIdTags

> OneOfTag postOrganizationsIdTags(key, token, id)

Create a Tag in Organization

Create a Tag in an Organization

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = new TrelloRestApi.OneOfstringstring(); // OneOfstringstring | The ID or name of the Organization
apiInstance.postOrganizationsIdTags(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | [**OneOfstringstring**](.md)| The ID or name of the Organization | 

### Return type

[**OneOfTag**](OneOfTag.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postPluginsIdpluginListing

> PluginListing postPluginsIdpluginListing(key, token, idPlugin, opts)

Create a Listing for Plugin

Create a new listing for a given locale for your Power-Up

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let idPlugin = "idPlugin_example"; // String | The ID of the Power-Up for which you are creating a new listing.
let opts = {
  'inlineObject4': new TrelloRestApi.InlineObject4() // InlineObject4 | 
};
apiInstance.postPluginsIdpluginListing(key, token, idPlugin, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **idPlugin** | **String**| The ID of the Power-Up for which you are creating a new listing. | 
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

### Return type

[**PluginListing**](PluginListing.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postTokensTokenWebhooks

> Webhook postTokensTokenWebhooks(token, key, token2, callbackURL, idModel, opts)

Create Webhooks for Token

Create a new webhook for a Token.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let token = "token_example"; // String | 
let key = "key_example"; // String | The API key to use
let token2 = "token_example"; // String | The API token to use
let callbackURL = "callbackURL_example"; // String | The URL that the webhook should POST information to.
let idModel = "idModel_example"; // String | ID of the object to create a webhook on.
let opts = {
  'description': "description_example" // String | A description to be displayed when retrieving information about the webhook.
};
apiInstance.postTokensTokenWebhooks(token, key, token2, callbackURL, idModel, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 
 **key** | **String**| The API key to use | 
 **token2** | **String**| The API token to use | 
 **callbackURL** | **String**| The URL that the webhook should POST information to. | 
 **idModel** | **String**| ID of the object to create a webhook on. | 
 **description** | **String**| A description to be displayed when retrieving information about the webhook. | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postWebhooks

> Webhook postWebhooks(key, token, callbackURL, idModel, opts)

Create a Webhook

Create a new webhook.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let callbackURL = "callbackURL_example"; // String | A valid URL that is reachable with a `HEAD` and `POST` request.
let idModel = "idModel_example"; // String | ID of the model to be monitored
let opts = {
  'description': "description_example", // String | A string with a length from `0` to `16384`.
  'active': true // Boolean | Determines whether the webhook is active and sending `POST` requests.
};
apiInstance.postWebhooks(key, token, callbackURL, idModel, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **callbackURL** | **String**| A valid URL that is reachable with a &#x60;HEAD&#x60; and &#x60;POST&#x60; request. | 
 **idModel** | **String**| ID of the model to be monitored | 
 **description** | **String**| A string with a length from &#x60;0&#x60; to &#x60;16384&#x60;. | [optional] 
 **active** | **Boolean**| Determines whether the webhook is active and sending &#x60;POST&#x60; requests. | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putActionsId

> putActionsId(id, text, key, token)

Update an Action

Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Action
let text = "text_example"; // String | The new text for the comment
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
apiInstance.putActionsId(id, text, key, token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Action | 
 **text** | **String**| The new text for the comment | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putActionsIdText

> putActionsIdText(key, token, id, value)

Update a Comment Action

Update a comment action

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the action to update
let value = "value_example"; // String | The new text for the comment
apiInstance.putActionsIdText(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the action to update | 
 **value** | **String**| The new text for the comment | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putBoardsId

> putBoardsId(id, key, token, opts)

Update a Board

Update an existing board by id

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | 
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'name': "name_example", // String | The new name for the board. 1 to 16384 characters long.
  'desc': "desc_example", // String | A new description for the board, 0 to 16384 characters long
  'closed': true, // Boolean | Whether the board is closed
  'subscribed': "subscribed_example", // String | Whether the acting user is subscribed to the board
  'idOrganization': "idOrganization_example", // String | The id of the team the board should be moved to
  'prefsPermissionLevel': "prefsPermissionLevel_example", // String | One of: org, private, public
  'prefsSelfJoin': true, // Boolean | Whether team members can join the board themselves
  'prefsCardCovers': true, // Boolean | Whether card covers should be displayed on this board
  'prefsHideVotes': true, // Boolean | Determines whether the Voting Power-Up should hide who voted on cards or not.
  'prefsInvitations': "prefsInvitations_example", // String | Who can invite people to this board. One of: admins, members
  'prefsVoting': "prefsVoting_example", // String | Who can vote on this board. One of disabled, members, observers, org, public
  'prefsComments': "prefsComments_example", // String | Who can comment on cards on this board. One of: disabled, members, observers, org, public
  'prefsBackground': "prefsBackground_example", // String | The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey
  'prefsCardAging': "prefsCardAging_example", // String | One of: pirate, regular
  'prefsCalendarFeedEnabled': true, // Boolean | Determines whether the calendar feed is enabled or not.
  'labelNamesGreen': "labelNamesGreen_example", // String | Name for the green label. 1 to 16384 characters long
  'labelNamesYellow': "labelNamesYellow_example", // String | Name for the yellow label. 1 to 16384 characters long
  'labelNamesOrange': "labelNamesOrange_example", // String | Name for the orange label. 1 to 16384 characters long
  'labelNamesRed': "labelNamesRed_example", // String | Name for the red label. 1 to 16384 characters long
  'labelNamesPurple': "labelNamesPurple_example", // String | Name for the purple label. 1 to 16384 characters long
  'labelNamesBlue': "labelNamesBlue_example" // String | Name for the blue label. 1 to 16384 characters long
};
apiInstance.putBoardsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| The new name for the board. 1 to 16384 characters long. | [optional] 
 **desc** | **String**| A new description for the board, 0 to 16384 characters long | [optional] 
 **closed** | **Boolean**| Whether the board is closed | [optional] 
 **subscribed** | **String**| Whether the acting user is subscribed to the board | [optional] 
 **idOrganization** | **String**| The id of the team the board should be moved to | [optional] 
 **prefsPermissionLevel** | **String**| One of: org, private, public | [optional] 
 **prefsSelfJoin** | **Boolean**| Whether team members can join the board themselves | [optional] 
 **prefsCardCovers** | **Boolean**| Whether card covers should be displayed on this board | [optional] 
 **prefsHideVotes** | **Boolean**| Determines whether the Voting Power-Up should hide who voted on cards or not. | [optional] 
 **prefsInvitations** | **String**| Who can invite people to this board. One of: admins, members | [optional] 
 **prefsVoting** | **String**| Who can vote on this board. One of disabled, members, observers, org, public | [optional] 
 **prefsComments** | **String**| Who can comment on cards on this board. One of: disabled, members, observers, org, public | [optional] 
 **prefsBackground** | **String**| The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey | [optional] 
 **prefsCardAging** | **String**| One of: pirate, regular | [optional] 
 **prefsCalendarFeedEnabled** | **Boolean**| Determines whether the calendar feed is enabled or not. | [optional] 
 **labelNamesGreen** | **String**| Name for the green label. 1 to 16384 characters long | [optional] 
 **labelNamesYellow** | **String**| Name for the yellow label. 1 to 16384 characters long | [optional] 
 **labelNamesOrange** | **String**| Name for the orange label. 1 to 16384 characters long | [optional] 
 **labelNamesRed** | **String**| Name for the red label. 1 to 16384 characters long | [optional] 
 **labelNamesPurple** | **String**| Name for the purple label. 1 to 16384 characters long | [optional] 
 **labelNamesBlue** | **String**| Name for the blue label. 1 to 16384 characters long | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putBoardsIdMembers

> putBoardsIdMembers(id, key, token, email, opts)

Invite Member to Board via email

Invite a Member to a Board via their email address.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the board
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let email = null; // String | The email address of a user to add as a member of the board.
let opts = {
  'type': "'normal'", // String | Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board.
  'inlineObject1': new TrelloRestApi.InlineObject1() // InlineObject1 | 
};
apiInstance.putBoardsIdMembers(id, key, token, email, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the board | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **email** | [**String**](.md)| The email address of a user to add as a member of the board. | 
 **type** | **String**| Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board. | [optional] [default to &#39;normal&#39;]
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putBoardsIdMembersIdmember

> putBoardsIdMembersIdmember(id, idMember, key, token, type, opts)

Add a Member to a Board

Add a member to the board.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The id of the board to update
let idMember = "idMember_example"; // String | The id of the member to add to the board.
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let type = "type_example"; // String | One of: admin, normal, observer. Determines the type of member this user will be on the board.
let opts = {
  'allowBillableGuest': false // Boolean | Optional param that allows organization admins to add multi-board guests onto a board.
};
apiInstance.putBoardsIdMembersIdmember(id, idMember, key, token, type, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the board to update | 
 **idMember** | **String**| The id of the member to add to the board. | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **type** | **String**| One of: admin, normal, observer. Determines the type of member this user will be on the board. | 
 **allowBillableGuest** | **Boolean**| Optional param that allows organization admins to add multi-board guests onto a board. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putBoardsIdMembershipsIdmembership

> putBoardsIdMembershipsIdmembership(key, token, id, idMembership, type, opts)

Update Membership of Member on a Board

Update an existing board by id

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let idMembership = "idMembership_example"; // String | The id of a membership that should be added to this board.
let type = "type_example"; // String | One of: admin, normal, observer. Determines the type of member that this membership will be to this board.
let opts = {
  'memberFields': "'fullName, username'" // String | Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
};
apiInstance.putBoardsIdMembershipsIdmembership(key, token, id, idMembership, type, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **idMembership** | **String**| The id of a membership that should be added to this board. | 
 **type** | **String**| One of: admin, normal, observer. Determines the type of member that this membership will be to this board. | 
 **memberFields** | **String**| Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username | [optional] [default to &#39;fullName, username&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putBoardsIdMyPrefsShowlistguide

> putBoardsIdMyPrefsShowlistguide(key, token, id, value)

Update showListGuide Pref on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let value = true; // Boolean | Determines whether to show the list guide.
apiInstance.putBoardsIdMyPrefsShowlistguide(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **value** | **Boolean**| Determines whether to show the list guide. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putBoardsIdMyPrefsShowsidebar

> putBoardsIdMyPrefsShowsidebar(key, token, id, value)

Update showSidebar Pref on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let value = true; // Boolean | Determines whether to show the side bar.
apiInstance.putBoardsIdMyPrefsShowsidebar(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **value** | **Boolean**| Determines whether to show the side bar. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putBoardsIdMyPrefsShowsidebaractivity

> putBoardsIdMyPrefsShowsidebaractivity(key, token, id, value)

Update showSidebarActivity Pref on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let value = true; // Boolean | Determines whether to show sidebar activity.
apiInstance.putBoardsIdMyPrefsShowsidebaractivity(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **value** | **Boolean**| Determines whether to show sidebar activity. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putBoardsIdMyPrefsShowsidebarboardactions

> putBoardsIdMyPrefsShowsidebarboardactions(key, token, id, value)

Update showSidebarBoardActions Pref on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let value = true; // Boolean | Determines whether to show the sidebar board actions.
apiInstance.putBoardsIdMyPrefsShowsidebarboardactions(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **value** | **Boolean**| Determines whether to show the sidebar board actions. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putBoardsIdMyPrefsShowsidebarmembers

> putBoardsIdMyPrefsShowsidebarmembers(key, token, id, value)

Update showSidebarMembers Pref on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let value = true; // Boolean | Determines whether to show members of the board in the sidebar.
apiInstance.putBoardsIdMyPrefsShowsidebarmembers(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **value** | **Boolean**| Determines whether to show members of the board in the sidebar. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putBoardsIdMyprefsEmailposition

> putBoardsIdMyprefsEmailposition(key, token, id, value)

Update emailPosition Pref on a Board

Update emailPosition Pref on a Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let value = "value_example"; // String | Valid values: bottom, top. Determines the position of the email address.
apiInstance.putBoardsIdMyprefsEmailposition(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **value** | **String**| Valid values: bottom, top. Determines the position of the email address. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putBoardsIdMyprefsIdemaillist

> putBoardsIdMyprefsIdemaillist(key, token, id, value)

Update idEmailList Pref on a Board

Change the default list that email-to-board cards are created in.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the board to update
let value = "value_example"; // String | The id of an email list.
apiInstance.putBoardsIdMyprefsIdemaillist(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the board to update | 
 **value** | **String**| The id of an email list. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putCardsId

> Card putCardsId(id, key, token, opts)

Update a Card

Update a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'name': "name_example", // String | The new name for the card
  'desc': "desc_example", // String | The new description for the card
  'closed': true, // Boolean | Whether the card should be archived (closed: true)
  'idMembers': "idMembers_example", // String | Comma-separated list of member IDs
  'idAttachmentCover': "idAttachmentCover_example", // String | The ID of the image attachment the card should use as its cover, or null for none
  'idList': "idList_example", // String | The ID of the list the card should be in
  'idLabels': "idLabels_example", // String | Comma-separated list of label IDs
  'idBoard': "idBoard_example", // String | The ID of the board the card should be on
  'pos': new TrelloRestApi.OneOfstringfloat(), // OneOfstringfloat | The position of the card in its list. `top`, `bottom`, or a positive float
  'due': new Date("2013-10-20"), // Date | When the card is due, or `null`
  'dueComplete': true, // Boolean | Whether the due date should be marked complete
  'subscribed': true, // Boolean | Whether the member is should be subscribed to the card
  'address': "address_example", // String | For use with/by the Map Power-Up
  'locationName': "locationName_example", // String | For use with/by the Map Power-Up
  'coordinates': "coordinates_example", // String | For use with/by the Map Power-Up. Should be latitude,longitude
  'cover': new TrelloRestApi.Cover() // Cover | Updates the card's cover  | Option | Values | About |  |--------|--------|-------|  | color | `pink`, `yellow`, `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` | Makes the cover a solid color . |  | brightness | `dark`, `light` | Determines whether the text on the cover should be dark or light.  | url | An unsplash URL: https://images.unsplash.com | Used if making an image the cover. Only Unsplash URLs work.  | idAttachment | ID of an attachment on the card | Used if setting an attached image as the cover. |  | size | `normal`, `full` | Determines whether to show the card name on the cover, or below it. |    `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time.     On the brightness options, setting it to light will make the text on the card cover dark:  ![](/cloud/trello/images/rest/cards/cover-brightness-dark.png)    And vice versa, setting it to dark will make the text on the card cover light:   ![](/cloud/trello/images/rest/cards/cover-brightness-light.png) 
};
apiInstance.putCardsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| The new name for the card | [optional] 
 **desc** | **String**| The new description for the card | [optional] 
 **closed** | **Boolean**| Whether the card should be archived (closed: true) | [optional] 
 **idMembers** | **String**| Comma-separated list of member IDs | [optional] 
 **idAttachmentCover** | **String**| The ID of the image attachment the card should use as its cover, or null for none | [optional] 
 **idList** | **String**| The ID of the list the card should be in | [optional] 
 **idLabels** | **String**| Comma-separated list of label IDs | [optional] 
 **idBoard** | **String**| The ID of the board the card should be on | [optional] 
 **pos** | [**OneOfstringfloat**](.md)| The position of the card in its list. &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive float | [optional] 
 **due** | **Date**| When the card is due, or &#x60;null&#x60; | [optional] 
 **dueComplete** | **Boolean**| Whether the due date should be marked complete | [optional] 
 **subscribed** | **Boolean**| Whether the member is should be subscribed to the card | [optional] 
 **address** | **String**| For use with/by the Map Power-Up | [optional] 
 **locationName** | **String**| For use with/by the Map Power-Up | [optional] 
 **coordinates** | **String**| For use with/by the Map Power-Up. Should be latitude,longitude | [optional] 
 **cover** | [**Cover**](.md)| Updates the card&#39;s cover  | Option | Values | About |  |--------|--------|-------|  | color | &#x60;pink&#x60;, &#x60;yellow&#x60;, &#x60;lime&#x60;, &#x60;blue&#x60;, &#x60;black&#x60;, &#x60;orange&#x60;, &#x60;red&#x60;, &#x60;purple&#x60;, &#x60;sky&#x60;, &#x60;green&#x60; | Makes the cover a solid color . |  | brightness | &#x60;dark&#x60;, &#x60;light&#x60; | Determines whether the text on the cover should be dark or light.  | url | An unsplash URL: https://images.unsplash.com | Used if making an image the cover. Only Unsplash URLs work.  | idAttachment | ID of an attachment on the card | Used if setting an attached image as the cover. |  | size | &#x60;normal&#x60;, &#x60;full&#x60; | Determines whether to show the card name on the cover, or below it. |    &#x60;brightness&#x60; can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a &#x60;color&#x60; and an &#x60;idAttachment&#x60; at the same time.     On the brightness options, setting it to light will make the text on the card cover dark:  ![](/cloud/trello/images/rest/cards/cover-brightness-dark.png)    And vice versa, setting it to dark will make the text on the card cover light:   ![](/cloud/trello/images/rest/cards/cover-brightness-light.png)  | [optional] 

### Return type

[**Card**](Card.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putCardsIdActionsIdactionComments

> putCardsIdActionsIdactionComments(id, idAction, key, token, text)

Update Comment Action on a Card

Update an existing comment

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let idAction = "idAction_example"; // String | The ID of the comment action to update
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let text = "text_example"; // String | The new text for the comment
apiInstance.putCardsIdActionsIdactionComments(id, idAction, key, token, text, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **idAction** | **String**| The ID of the comment action to update | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **text** | **String**| The new text for the comment | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putCardsIdCheckitemIdcheckitem

> putCardsIdCheckitemIdcheckitem(id, idCheckItem, key, token, opts)

Update a checkItem on a Card

Update an item in a checklist on a card.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let idCheckItem = "idCheckItem_example"; // String | The ID of the checkitem
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'name': "name_example", // String | The new name for the checklist item
  'state': "state_example", // String | One of: `complete`, `incomplete`
  'idChecklist': "idChecklist_example", // String | The ID of the checklist this item is in
  'pos': new TrelloRestApi.PosStringOrNumber() // PosStringOrNumber | `top`, `bottom`, or a positive float
};
apiInstance.putCardsIdCheckitemIdcheckitem(id, idCheckItem, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **idCheckItem** | **String**| The ID of the checkitem | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| The new name for the checklist item | [optional] 
 **state** | **String**| One of: &#x60;complete&#x60;, &#x60;incomplete&#x60; | [optional] 
 **idChecklist** | **String**| The ID of the checklist this item is in | [optional] 
 **pos** | [**PosStringOrNumber**](.md)| &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive float | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putCardsIdStickersIdsticker

> putCardsIdStickersIdsticker(id, idSticker, key, token, top, left, zIndex, opts)

Update a Sticker on a Card

Update a sticker on a card

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Card
let idSticker = "idSticker_example"; // String | The ID of the sticker
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let top = 3.4; // Number | The top position of the sticker, from -60 to 100
let left = 3.4; // Number | The left position of the sticker, from -60 to 100
let zIndex = 56; // Number | The z-index of the sticker
let opts = {
  'rotate': 0 // Number | The rotation of the sticker
};
apiInstance.putCardsIdStickersIdsticker(id, idSticker, key, token, top, left, zIndex, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Card | 
 **idSticker** | **String**| The ID of the sticker | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **top** | **Number**| The top position of the sticker, from -60 to 100 | 
 **left** | **Number**| The left position of the sticker, from -60 to 100 | 
 **zIndex** | **Number**| The z-index of the sticker | 
 **rotate** | **Number**| The rotation of the sticker | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem

> CheckItem putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem(key, token, idCard, idCheckItem, idChecklist, opts)

Update Checkitem on Checklist on Card

Update an item in a checklist on a card.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let idCard = "idCard_example"; // String | The ID of the Card
let idCheckItem = "idCheckItem_example"; // String | The ID of the checklist item to update
let idChecklist = "idChecklist_example"; // String | The ID of the item to update.
let opts = {
  'pos': new TrelloRestApi.PosStringOrNumber() // PosStringOrNumber | `top`, `bottom`, or a positive float
};
apiInstance.putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem(key, token, idCard, idCheckItem, idChecklist, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **idCard** | **String**| The ID of the Card | 
 **idCheckItem** | **String**| The ID of the checklist item to update | 
 **idChecklist** | **String**| The ID of the item to update. | 
 **pos** | [**PosStringOrNumber**](.md)| &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive float | [optional] 

### Return type

[**CheckItem**](CheckItem.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putCardsIdcardCustomfieldIdcustomfieldItem

> putCardsIdcardCustomfieldIdcustomfieldItem(key, token, idCard, idCustomField, opts)

Update Custom Field item on Card

Setting, updating, and removing the value for a Custom Field on a card.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let idCard = "idCard_example"; // String | ID of the card that the Custom Field value should be set/updated for
let idCustomField = "idCustomField_example"; // String | ID of the Custom Field on the card.
let opts = {
  'UNKNOWN_BASE_TYPE': new TrelloRestApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putCardsIdcardCustomfieldIdcustomfieldItem(key, token, idCard, idCustomField, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **idCard** | **String**| ID of the card that the Custom Field value should be set/updated for | 
 **idCustomField** | **String**| ID of the Custom Field on the card. | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putChecklistsIdField

> putChecklistsIdField(id, field, key, token, value)

Update field on a Checklist

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | ID of a checklist.
let field = "field_example"; // String | Field to update.
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let value = new TrelloRestApi.OneOfposStringOrNumberstring(); // OneOfposStringOrNumberstring | The value to change the checklist name to. Should be a string of length 1 to 16384.
apiInstance.putChecklistsIdField(id, field, key, token, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of a checklist. | 
 **field** | **String**| Field to update. | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **value** | [**OneOfposStringOrNumberstring**](.md)| The value to change the checklist name to. Should be a string of length 1 to 16384. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putCheclistsId

> putCheclistsId(id, key, token, opts)

Update a Checklist

Update an existing checklist.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | ID of a checklist.
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'name': "name_example", // String | Name of the new checklist being created. Should be length of 1 to 16384.
  'pos': new TrelloRestApi.PosStringOrNumber() // PosStringOrNumber | Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
};
apiInstance.putCheclistsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of a checklist. | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| Name of the new checklist being created. Should be length of 1 to 16384. | [optional] 
 **pos** | [**PosStringOrNumber**](.md)| Determines the position of the checklist on the card. One of: &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive number. | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putCustomfieldsId

> CustomField putCustomfieldsId(key, token, id, opts)

Update a Custom Field definition

Update a Custom Field definition.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the Custom Field.
let opts = {
  'inlineObject3': new TrelloRestApi.InlineObject3() // InlineObject3 | 
};
apiInstance.putCustomfieldsId(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the Custom Field. | 
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

[**CustomField**](CustomField.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putEnterprisesIdAdminsIdmember

> putEnterprisesIdAdminsIdmember(key, token, id, idMember)

Update Member to be admin of Enterprise

Make Member an admin of Enterprise.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the enterprise to retrieve.
let idMember = "idMember_example"; // String | ID of member to be made an admin of enterprise.
apiInstance.putEnterprisesIdAdminsIdmember(key, token, id, idMember, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the enterprise to retrieve. | 
 **idMember** | **String**| ID of member to be made an admin of enterprise. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putEnterprisesIdMembersIdmemberLicensed

> Member putEnterprisesIdMembersIdmemberLicensed(key, token, id, idMember, values)

Update a Member&#39;s licensed status

This endpoint is used to update whether the provided Member should use one of the Enterprise&#39;s available licenses or not.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use. Note: This must be an Enterprise admin's token.
let id = "id_example"; // String | ID of the Enterprise.
let idMember = "idMember_example"; // String | The ID of the Member
let values = true; // Boolean | Boolean value to determine whether the user should be given an Enterprise license (true) or not (false).
apiInstance.putEnterprisesIdMembersIdmemberLicensed(key, token, id, idMember, values, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use. Note: This must be an Enterprise admin&#39;s token. | 
 **id** | **String**| ID of the Enterprise. | 
 **idMember** | **String**| The ID of the Member | 
 **values** | **Boolean**| Boolean value to determine whether the user should be given an Enterprise license (true) or not (false). | 

### Return type

[**Member**](Member.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putEnterprisesIdOrganizations

> [AnyOfOrganization] putEnterprisesIdOrganizations(key, token, id, idOrganization)

Transfer an Organization to an Enterprise.

Transfer an organization to an enterprise.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use. Note: This must be an Enterprise admin's token.
let id = "id_example"; // String | ID of the Enterprise to retrieve.
let idOrganization = "idOrganization_example"; // String | ID of Organization to be transferred to Enterprise.
apiInstance.putEnterprisesIdOrganizations(key, token, id, idOrganization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use. Note: This must be an Enterprise admin&#39;s token. | 
 **id** | **String**| ID of the Enterprise to retrieve. | 
 **idOrganization** | **String**| ID of Organization to be transferred to Enterprise. | 

### Return type

[**[AnyOfOrganization]**](AnyOfOrganization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putIdIdboard

> putIdIdboard(key, token, id, value)

Move List to Board

Move a List to a different Board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the list
let value = "value_example"; // String | The ID of the board to move the list to
apiInstance.putIdIdboard(key, token, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the list | 
 **value** | **String**| The ID of the board to move the list to | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putLabelsId

> putLabelsId(id, key, token, opts)

Update a Label

Update a label by ID.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the Label
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'name': "name_example", // String | The new name for the label
  'color': new TrelloRestApi.Color() // Color | The new color for the label. See: [fields](#label-object) for color options
};
apiInstance.putLabelsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Label | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| The new name for the label | [optional] 
 **color** | [**Color**](.md)| The new color for the label. See: [fields](#label-object) for color options | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putLabelsIdField

> putLabelsIdField(key, token, id, field, value)

Update a field on a label

Update a field on a label.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The id of the label
let field = "field_example"; // String | The field on the Label to update.
let value = "value_example"; // String | The new value for the field.
apiInstance.putLabelsIdField(key, token, id, field, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The id of the label | 
 **field** | **String**| The field on the Label to update. | 
 **value** | **String**| The new value for the field. | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putListsId

> putListsId(id, key, token, opts)

Update a List

Update the properties of a List

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID of the list
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'name': "name_example", // String | New name for the list
  'closed': true, // Boolean | Whether the list should be closed (archived)
  'idBoard': "idBoard_example", // String | ID of a board the list should be moved to
  'pos': new TrelloRestApi.OneOffloatstring(), // OneOffloatstring | New position for the list: `top`, `bottom`, or a positive floating point number
  'subscribed': true // Boolean | Whether the active member is subscribed to this list
};
apiInstance.putListsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the list | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| New name for the list | [optional] 
 **closed** | **Boolean**| Whether the list should be closed (archived) | [optional] 
 **idBoard** | **String**| ID of a board the list should be moved to | [optional] 
 **pos** | [**OneOffloatstring**](.md)| New position for the list: &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive floating point number | [optional] 
 **subscribed** | **Boolean**| Whether the active member is subscribed to this list | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putListsIdClosed

> putListsIdClosed(key, token, id, opts)

Archive or unarchive a list

Archive or unarchive a list

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the list
let opts = {
  'value': "value_example" // String | Set to true to close (archive) the list
};
apiInstance.putListsIdClosed(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the list | 
 **value** | **String**| Set to true to close (archive) the list | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putListsIdField

> putListsIdField(key, token, id, field, opts)

Update a field on a List

Rename a list

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the list
let field = "field_example"; // String | The field on the List to be updated
let opts = {
  'value': new TrelloRestApi.OneOfstringfloatstringboolean() // OneOfstringfloatstringboolean | The new value for the field
};
apiInstance.putListsIdField(key, token, id, field, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the list | 
 **field** | **String**| The field on the List to be updated | 
 **value** | [**OneOfstringfloatstringboolean**](.md)| The new value for the field | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putMembersId

> OneOfMember putMembersId(key, token, id, opts)

Update a Member

Update a Member

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or username of the member
let opts = {
  'fullName': "fullName_example", // String | New name for the member. Cannot begin or end with a space.
  'initials': "initials_example", // String | New initials for the member. 1-4 characters long.
  'username': "username_example", // String | New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique.
  'bio': "bio_example", // String | 
  'avatarSource': "avatarSource_example", // String | One of: `gravatar`, `none`, `upload`
  'prefsColorBlind': true, // Boolean | 
  'prefsLocale': "prefsLocale_example", // String | 
  'prefsMinutesBetweenSummaries': 56 // Number | `-1` for disabled, `1`, or `60`
};
apiInstance.putMembersId(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or username of the member | 
 **fullName** | **String**| New name for the member. Cannot begin or end with a space. | [optional] 
 **initials** | **String**| New initials for the member. 1-4 characters long. | [optional] 
 **username** | **String**| New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique. | [optional] 
 **bio** | **String**|  | [optional] 
 **avatarSource** | **String**| One of: &#x60;gravatar&#x60;, &#x60;none&#x60;, &#x60;upload&#x60; | [optional] 
 **prefsColorBlind** | **Boolean**|  | [optional] 
 **prefsLocale** | **String**|  | [optional] 
 **prefsMinutesBetweenSummaries** | **Number**| &#x60;-1&#x60; for disabled, &#x60;1&#x60;, or &#x60;60&#x60; | [optional] 

### Return type

[**OneOfMember**](OneOfMember.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putMembersIdBoardbackgroundsIdbackground

> BoardBackground putMembersIdBoardbackgroundsIdbackground(id, idBackground, key, token, opts)

Update a Member&#39;s custom Board background

Update a board background

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or username of the member
let idBackground = "idBackground_example"; // String | The ID of the board background
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'brightness': "brightness_example", // String | One of: `dark`, `light`, `unknown`
  'tile': true // Boolean | Whether the background should be tiled
};
apiInstance.putMembersIdBoardbackgroundsIdbackground(id, idBackground, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or username of the member | 
 **idBackground** | **String**| The ID of the board background | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **brightness** | **String**| One of: &#x60;dark&#x60;, &#x60;light&#x60;, &#x60;unknown&#x60; | [optional] 
 **tile** | **Boolean**| Whether the background should be tiled | [optional] 

### Return type

[**BoardBackground**](BoardBackground.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putMembersIdBoardstarsIdstar

> putMembersIdBoardstarsIdstar(id, idStar, key, token, opts)

Update the position of a boardStar of Member

Update the position of a starred board

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or username of the member
let idStar = "idStar_example"; // String | The ID of the board star
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'pos': new TrelloRestApi.PosStringOrNumber() // PosStringOrNumber | New position for the starred board. `top`, `bottom`, or a positive float.
};
apiInstance.putMembersIdBoardstarsIdstar(id, idStar, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or username of the member | 
 **idStar** | **String**| The ID of the board star | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **pos** | [**PosStringOrNumber**](.md)| New position for the starred board. &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive float. | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putMembersIdCustomboardbackgroundsIdbackground

> BoardBackground putMembersIdCustomboardbackgroundsIdbackground(id, idBackground, key, token, opts)

Update custom Board Background of Member

Update a specific custom board background

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = new TrelloRestApi.OneOfstringstring(); // OneOfstringstring | The ID or username of the member
let idBackground = "idBackground_example"; // String | The ID of the custom background
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'brightness': "brightness_example", // String | One of: `dark`, `light`, `unknown`
  'tile': true // Boolean | Whether to tile the background
};
apiInstance.putMembersIdCustomboardbackgroundsIdbackground(id, idBackground, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**OneOfstringstring**](.md)| The ID or username of the member | 
 **idBackground** | **String**| The ID of the custom background | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **brightness** | **String**| One of: &#x60;dark&#x60;, &#x60;light&#x60;, &#x60;unknown&#x60; | [optional] 
 **tile** | **Boolean**| Whether to tile the background | [optional] 

### Return type

[**BoardBackground**](BoardBackground.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putMembersIdSavedsearchesIdsearch

> SavedSearch putMembersIdSavedsearchesIdsearch(id, idSearch, key, token, opts)

Update a saved search

Update a saved search

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or username of the member
let idSearch = "idSearch_example"; // String | The ID of the saved search to delete
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'name': "name_example", // String | The new name for the saved search
  'query': "query_example", // String | The new search query
  'pos': "pos_example" // String | New position for saves search. `top`, `bottom`, or a positive float.
};
apiInstance.putMembersIdSavedsearchesIdsearch(id, idSearch, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or username of the member | 
 **idSearch** | **String**| The ID of the saved search to delete | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| The new name for the saved search | [optional] 
 **query** | **String**| The new search query | [optional] 
 **pos** | **String**| New position for saves search. &#x60;top&#x60;, &#x60;bottom&#x60;, or a positive float. | [optional] 

### Return type

[**SavedSearch**](SavedSearch.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putNotificationsId

> OneOfNotification putNotificationsId(key, token, id, opts)

Update a Notification&#39;s read status

Update the read status of a notification

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the notification
let opts = {
  'unread': true // Boolean | Whether the notification should be marked as read or not
};
apiInstance.putNotificationsId(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the notification | 
 **unread** | **Boolean**| Whether the notification should be marked as read or not | [optional] 

### Return type

[**OneOfNotification**](OneOfNotification.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putNotificationsIdUnread

> OneOfNotification putNotificationsIdUnread(key, token, id, opts)

Update Notification&#39;s read status

Update Notification&#39;s read status

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID of the notification
let opts = {
  'value': "value_example" // String | 
};
apiInstance.putNotificationsIdUnread(key, token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID of the notification | 
 **value** | **String**|  | [optional] 

### Return type

[**OneOfNotification**](OneOfNotification.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putOrganizationsId

> Organization putOrganizationsId(id, key, token, opts)

Update an Organization

Update an organization

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | The ID or name of the Organization
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'name': "name_example", // String | A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique
  'displayName': "displayName_example", // String | A new displayName for the organization. Must be at least 1 character long and not begin or end with a space.
  'desc': "desc_example", // String | A new description for the organization
  'website': "website_example", // String | A URL starting with `http://`, `https://`, or `null`
  'prefsAssociatedDomain': "prefsAssociatedDomain_example", // String | The Google Apps domain to link this org to.
  'prefsExternalMembersDisabled': true, // Boolean | Whether non-team members can be added to boards inside the team
  'prefsGoogleAppsVersion': 56, // Number | `1` or `2`
  'prefsBoardVisibilityRestrictOrg': "prefsBoardVisibilityRestrictOrg_example", // String | Who on the team can make team visible boards. One of `admin`, `none`, `org`
  'prefsBoardVisibilityRestrictPrivate': "prefsBoardVisibilityRestrictPrivate_example", // String | Who can make private boards. One of: `admin`, `none`, `org`
  'prefsBoardVisibilityRestrictPublic': "prefsBoardVisibilityRestrictPublic_example", // String | Who on the team can make public boards. One of: `admin`, `none`, `org`
  'prefsOrgInviteRestrict': "prefsOrgInviteRestrict_example", // String | An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`)
  'prefsPermissionLevel': "prefsPermissionLevel_example" // String | Whether the team page is publicly visible. One of: `private`, `public`
};
apiInstance.putOrganizationsId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or name of the Organization | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **name** | **String**| A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique | [optional] 
 **displayName** | **String**| A new displayName for the organization. Must be at least 1 character long and not begin or end with a space. | [optional] 
 **desc** | **String**| A new description for the organization | [optional] 
 **website** | **String**| A URL starting with &#x60;http://&#x60;, &#x60;https://&#x60;, or &#x60;null&#x60; | [optional] 
 **prefsAssociatedDomain** | **String**| The Google Apps domain to link this org to. | [optional] 
 **prefsExternalMembersDisabled** | **Boolean**| Whether non-team members can be added to boards inside the team | [optional] 
 **prefsGoogleAppsVersion** | **Number**| &#x60;1&#x60; or &#x60;2&#x60; | [optional] 
 **prefsBoardVisibilityRestrictOrg** | **String**| Who on the team can make team visible boards. One of &#x60;admin&#x60;, &#x60;none&#x60;, &#x60;org&#x60; | [optional] 
 **prefsBoardVisibilityRestrictPrivate** | **String**| Who can make private boards. One of: &#x60;admin&#x60;, &#x60;none&#x60;, &#x60;org&#x60; | [optional] 
 **prefsBoardVisibilityRestrictPublic** | **String**| Who on the team can make public boards. One of: &#x60;admin&#x60;, &#x60;none&#x60;, &#x60;org&#x60; | [optional] 
 **prefsOrgInviteRestrict** | **String**| An email address with optional wildcard characters. (E.g. &#x60;subdomain.*.trello.com&#x60;) | [optional] 
 **prefsPermissionLevel** | **String**| Whether the team page is publicly visible. One of: &#x60;private&#x60;, &#x60;public&#x60; | [optional] 

### Return type

[**Organization**](Organization.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putOrganizationsIdMembers

> putOrganizationsIdMembers(key, token, id, email, fullName, opts)

Update an Organization&#39;s Members

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
let email = null; // String | An email address
let fullName = "fullName_example"; // String | Name for the member, at least 1 character not beginning or ending with a space
let opts = {
  'type': "'normal'" // String | One of: `admin`, `normal`
};
apiInstance.putOrganizationsIdMembers(key, token, id, email, fullName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 
 **email** | [**String**](.md)| An email address | 
 **fullName** | **String**| Name for the member, at least 1 character not beginning or ending with a space | 
 **type** | **String**| One of: &#x60;admin&#x60;, &#x60;normal&#x60; | [optional] [default to &#39;normal&#39;]

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putOrganizationsIdMembersIdmember

> OneOfMember putOrganizationsIdMembersIdmember(key, token, id, idMember, type)

Update a Member of an Organization

Add a member to a team or update their member type.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
let idMember = new TrelloRestApi.OneOfstringstring(); // OneOfstringstring | The ID or username of the member to update
let type = "type_example"; // String | One of: `admin`, `normal`
apiInstance.putOrganizationsIdMembersIdmember(key, token, id, idMember, type, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 
 **idMember** | [**OneOfstringstring**](.md)| The ID or username of the member to update | 
 **type** | **String**| One of: &#x60;admin&#x60;, &#x60;normal&#x60; | 

### Return type

[**OneOfMember**](OneOfMember.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putOrganizationsIdMembersIdmemberDeactivated

> putOrganizationsIdMembersIdmemberDeactivated(key, token, id, idMember, opts)

Deactivate or reactivate a member of an Organization

Deactivate or reactivate a member of a team

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
let idMember = new TrelloRestApi.OneOfstringstring(); // OneOfstringstring | The ID or username of the member to update
let opts = {
  'value': "value_example" // String | 
};
apiInstance.putOrganizationsIdMembersIdmemberDeactivated(key, token, id, idMember, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 
 **idMember** | [**OneOfstringstring**](.md)| The ID or username of the member to update | 
 **value** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## putPluginsId

> Plugin putPluginsId(key, token, id)

Update a Plugin

Update a Plugin

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | The ID or name of the organization
apiInstance.putPluginsId(key, token, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| The ID or name of the organization | 

### Return type

[**Plugin**](Plugin.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putPluginsIdpluginListingsIdlisting

> PluginListing putPluginsIdpluginListingsIdlisting(key, token, idPlugin, idListing, opts)

Updating Plugin&#39;s Listing

Update an existing listing for your Power-Up

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let idPlugin = "idPlugin_example"; // String | The ID of the Power-Up whose listing is being updated.
let idListing = "idListing_example"; // String | The ID of the existing listing for the Power-Up that is being updated.
let opts = {
  'inlineObject5': new TrelloRestApi.InlineObject5() // InlineObject5 | 
};
apiInstance.putPluginsIdpluginListingsIdlisting(key, token, idPlugin, idListing, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **idPlugin** | **String**| The ID of the Power-Up whose listing is being updated. | 
 **idListing** | **String**| The ID of the existing listing for the Power-Up that is being updated. | 
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | [optional] 

### Return type

[**PluginListing**](PluginListing.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putWebhooksId

> Webhook putWebhooksId(id, key, token, opts)

Update a Webhook

Update a webhook by ID.

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let id = "id_example"; // String | ID of the webhook to retrieve.
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let opts = {
  'description': "description_example", // String | A string with a length from `0` to `16384`.
  'callbackURL': "callbackURL_example", // String | A valid URL that is reachable with a `HEAD` and `POST` request.
  'idModel': "idModel_example", // String | ID of the model to be monitored
  'active': true // Boolean | Determines whether the webhook is active and sending `POST` requests.
};
apiInstance.putWebhooksId(id, key, token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the webhook to retrieve. | 
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **description** | **String**| A string with a length from &#x60;0&#x60; to &#x60;16384&#x60;. | [optional] 
 **callbackURL** | **String**| A valid URL that is reachable with a &#x60;HEAD&#x60; and &#x60;POST&#x60; request. | [optional] 
 **idModel** | **String**| ID of the model to be monitored | [optional] 
 **active** | **Boolean**| Determines whether the webhook is active and sending &#x60;POST&#x60; requests. | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokenstokenwebhooks1

> tokenstokenwebhooks1(token, idWebhook, key, token2, opts)

Update a Webhook created by Token

Update a Webhook created by Token

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let token = "token_example"; // String | 
let idWebhook = "idWebhook_example"; // String | ID of the [Webhooks](ref:webhooks) to retrieve.
let key = "key_example"; // String | The API key to use
let token2 = "token_example"; // String | The API token to use
let opts = {
  'description': "description_example", // String | A description to be displayed when retrieving information about the webhook.
  'callbackURL': "callbackURL_example", // String | The URL that the webhook should `POST` information to.
  'idModel': "idModel_example" // String | ID of the object that the webhook is on.
};
apiInstance.tokenstokenwebhooks1(token, idWebhook, key, token2, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 
 **idWebhook** | **String**| ID of the [Webhooks](ref:webhooks) to retrieve. | 
 **key** | **String**| The API key to use | 
 **token2** | **String**| The API token to use | 
 **description** | **String**| A description to be displayed when retrieving information about the webhook. | [optional] 
 **callbackURL** | **String**| The URL that the webhook should &#x60;POST&#x60; information to. | [optional] 
 **idModel** | **String**| ID of the object that the webhook is on. | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## webhooksidfield

> webhooksidfield(key, token, id, field)

Get a field on a Webhook

Get a field on a Webhook

### Example

```javascript
import TrelloRestApi from 'trello_rest_api';
let defaultClient = TrelloRestApi.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure API key authorization: APIToken
let APIToken = defaultClient.authentications['APIToken'];
APIToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIToken.apiKeyPrefix = 'Token';

let apiInstance = new TrelloRestApi.DefaultApi();
let key = "key_example"; // String | The API key to use
let token = "token_example"; // String | The API token to use
let id = "id_example"; // String | ID of the webhook.
let field = "field_example"; // String | Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`
apiInstance.webhooksidfield(key, token, id, field, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The API key to use | 
 **token** | **String**| The API token to use | 
 **id** | **String**| ID of the webhook. | 
 **field** | **String**| Field to retrieve. One of: &#x60;active&#x60;, &#x60;callbackURL&#x60;, &#x60;description&#x60;, &#x60;idModel&#x60; | 

### Return type

null (empty response body)

### Authorization

[APIKey](../README.md#APIKey), [APIToken](../README.md#APIToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

