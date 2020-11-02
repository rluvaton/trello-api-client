# TrelloRestApi.Member

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**activityBlocked** | **Boolean** |  | [optional] 
**avatarHash** | **String** |  | [optional] 
**avatarUrl** | **String** |  | [optional] 
**bio** | **String** |  | [optional] 
**bioData** | [**CardDescData**](CardDescData.md) |  | [optional] 
**confirmed** | **Boolean** |  | [optional] 
**fullName** | **String** |  | [optional] 
**idEnterprise** | **String** |  | [optional] 
**idEnterprisesDeactivated** | **[String]** |  | [optional] 
**idMemberReferrer** | **String** |  | [optional] 
**idPremOrgsAdmin** | **[String]** |  | [optional] 
**initials** | **String** |  | [optional] 
**memberType** | **String** |  | [optional] 
**nonPublic** | [**Object**](.md) |  | [optional] 
**nonPublicAvailable** | **Boolean** |  | [optional] 
**products** | **[Number]** |  | [optional] 
**url** | **String** |  | [optional] 
**username** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**aaEmail** | **String** |  | [optional] 
**aaEnrolledDate** | **String** |  | [optional] 
**aaId** | **String** |  | [optional] 
**avatarSource** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**gravatarHash** | **String** |  | [optional] 
**idBoards** | **[String]** |  | [optional] 
**idOrganizations** | **[String]** |  | [optional] 
**idEnterprisesAdmin** | **[String]** |  | [optional] 
**limits** | [**LimitsObject**](LimitsObject.md) |  | [optional] 
**loginTypes** | **[String]** |  | [optional] 
**marketingOptIn** | [**MemberMarketingOptIn**](MemberMarketingOptIn.md) |  | [optional] 
**messagesDismissed** | [**MemberMessagesDismissed**](MemberMessagesDismissed.md) |  | [optional] 
**oneTimeMessagesDismissed** | **[String]** |  | [optional] 
**prefs** | [**MemberPrefs**](MemberPrefs.md) |  | [optional] 
**trophies** | **[String]** |  | [optional] 
**uploadedAvatarHash** | **String** |  | [optional] 
**uploadedAvatarUrl** | **String** |  | [optional] 
**premiumFeatures** | **[String]** |  | [optional] 
**isAaMastered** | **Boolean** |  | [optional] 
**ixUpdate** | **Number** |  | [optional] 
**idBoardsPinned** | **[String]** |  | [optional] 



## Enum: MemberTypeEnum


* `normal` (value: `"normal"`)

* `ghost` (value: `"ghost"`)





## Enum: StatusEnum


* `disconnected` (value: `"disconnected"`)





## Enum: AvatarSourceEnum


* `gravatar` (value: `"gravatar"`)

* `upload` (value: `"upload"`)





## Enum: [LoginTypesEnum]


* `password` (value: `"password"`)

* `saml` (value: `"saml"`)




