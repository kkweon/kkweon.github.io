---
title: How to handle multiple JSON responses in Go
keywords: go,golang
date: '2020-07-08'
---

# Introduction

If your API returns a single type JSON, you can use [https://mholt.github.io/json-to-go/](https://mholt.github.io/json-to-go/). But, it gets tricky if there are multiple structures in the responses. And, it gets even trickier if the embedded structures are different.

For simplicity, see the following example.

```json
{
  "data": {
    "error_message": "not able to find data"
  }
}
```

```json
{
  "data": {
    "message": "hello world"
  }
}
```

As you can see the root structure(`{ "data": { ... } }`) is the same while the inner objects are different.

In Go, you can express in the following.

````go
import "encoding/json"

// Root represents the following JSON
// {
//   "data": {
//      "message": "..."
//   }
// }
//
// or
//
// {
//   "data": {
//      "error_message": "..."
//   }
// }
type Root struct {
	Data DataWrapper `json:"data"`
}

type DataWrapper struct {
	ErrorData   *ErrorDataType   `json:"-"`
	MessageData *MessageDataType `json:"-"`
}

// UnmarshalJSON will receive either
//
// 1. ErrorDataType
// ```json
// {
//   "error_message": "error blah blah"
// }
// ```
//
// 2. MessageDataType
// ```json
// {
//   "message": "blah blah"
// }
// ```
func (d *DataWrapper) UnmarshalJSON(data []byte) error {
	var m map[string]interface{}
	var err error

	if err = json.Unmarshal(data, &m); err != nil {
		return err
	}

	if _, ok := m["error_message"]; ok {
		var errorData ErrorDataType
		err = json.Unmarshal(data, &errorData)
		if err != nil {
			return err
		}
		d.ErrorData = &errorData
		return nil
	}

	if _, ok := m["message"]; ok {
		var messageData MessageDataType
		err = json.Unmarshal(data, &messageData)
		if err != nil {
			return err
		}
		d.MessageData = &messageData
		return nil
	}

	return nil
}

type ErrorDataType struct {
	ErrorMessage string `json:"error_message"`
}

type MessageDataType struct {
	Message string `json:"message"`
}
````

The idea is that I created an wrapper object that only exists in Go.

```go
type DataWrapper struct {
	ErrorData   *ErrorDataType   `json:"-"`
	MessageData *MessageDataType `json:"-"`
}
```

And then this struct implements `UnmarshalJSON` method that deals with the sub message portion of the JSON.

Once we are done, we can simply unmarshal without knowing the implementation details.

```go
func TestRoot_UnmarshalErrorData(t *testing.T) {
	input := `
  {
    "data": {
      "error_message": "this is error_message"
    }
  }
  `

	var root Root

	err := json.Unmarshal([]byte(input), &root)
	assert.NoError(t, err)

	assert.Nil(t, root.Data.MessageData)
	assert.Equal(t, root.Data.ErrorData.ErrorMessage, "this is error_message")
}

func TestRoot_UnmarshalMessageData(t *testing.T) {
	input := `
  {
    "data": {
      "message": "this is message"
    }
  }
  `

	var root Root

	err := json.Unmarshal([]byte(input), &root)
	assert.NoError(t, err)

	assert.Nil(t, root.Data.ErrorData)
	assert.Equal(t, root.Data.MessageData.Message, "this is message")
}
```
