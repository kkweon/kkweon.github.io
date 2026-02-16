---
title: How to handle multiple JSON responses in Go
keywords: go,golang,json,discriminated union,type safety
date: '2020-07-08'
---

When an API returns different JSON structures in the same field, you need **type-safe discriminated unions**. Here's how to handle this in Go.

## The Problem

Your API returns the same root structure, but with different inner objects:

```json
{"data": {"error_message": "not able to find data"}}
```

```json
{"data": {"message": "hello world"}}
```

## The Solution

Use a wrapper type with a custom `UnmarshalJSON` method:

```go
import "encoding/json"

type Root struct {
    Data DataWrapper `json:"data"`
}

type DataWrapper struct {
    ErrorData   *ErrorDataType   `json:"-"`
    MessageData *MessageDataType `json:"-"`
}

func (d *DataWrapper) UnmarshalJSON(data []byte) error {
    var m map[string]interface{}
    if err := json.Unmarshal(data, &m); err != nil {
        return err
    }

    if _, ok := m["error_message"]; ok {
        var errorData ErrorDataType
        if err := json.Unmarshal(data, &errorData); err != nil {
            return err
        }
        d.ErrorData = &errorData
        return nil
    }

    if _, ok := m["message"]; ok {
        var messageData MessageDataType
        if err := json.Unmarshal(data, &messageData); err != nil {
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
```

The key insight: `DataWrapper` uses `json:"-"` tags so it exists only in Go code, not in JSON. The `UnmarshalJSON` method checks which fields exist to determine the variant.

## Usage

```go
var root Root
json.Unmarshal([]byte(jsonInput), &root)

if root.Data.ErrorData != nil {
    // Handle error case
    fmt.Println(root.Data.ErrorData.ErrorMessage)
}

if root.Data.MessageData != nil {
    // Handle success case
    fmt.Println(root.Data.MessageData.Message)
}
```

This gives you compile-time type safety when accessing the discriminated variants.
