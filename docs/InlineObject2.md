# TrelloRestApi.InlineObject2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idModel** | **String** |  | 
**modelType** | **String** | The type of model that the Custom Field is being defined on. This should always be &#x60;board&#x60;. | 
**name** | **String** | The name of the Custom Field | 
**type** | **String** | The type of Custom Field to create. | 
**options** | **String** | If the type is &#x60;checkbox&#x60;  | [optional] 
**pos** | [**PosStringOrNumber**](PosStringOrNumber.md) |  | 
**displayCardFront** | **Boolean** | Whether this Custom Field should be shown on the front of Cards | [optional] [default to true]



## Enum: ModelTypeEnum


* `board` (value: `"board"`)





## Enum: TypeEnum


* `checkbox` (value: `"checkbox"`)

* `list` (value: `"list"`)

* `number` (value: `"number"`)

* `text` (value: `"text"`)

* `date` (value: `"date"`)




