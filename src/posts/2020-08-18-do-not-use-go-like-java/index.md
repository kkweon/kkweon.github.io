---
title: Do not use Go like Java
keywords: go, golang
date: 2020-08-18T22:29:09-07:00
---

I have been using Go in the following way (like Java)

```go
type SomeService interface {
	DoSomething() string
}

type someServiceImpl struct {
}

func NewSomeService() SomeService {
	return &someServiceImpl{}
}

func (*someServiceImpl) DoSomething() string {
  return "some-service"
}
```

And from a consumer side, it just refers to the interfaces so that I can swap with a mock struct anytime.

```go
func NewAnotherService(someService SomeService) AnotherService {
	return &anotherServiceImpl{someService}
}

// anotherservice_test.go
type someMockService struct{}

func (s *someMockService) DoSomething() string {}

func TestAnotherService(t *testing.T) {
	anotherService := &anotherServiceImpl{&someMockService{}}
}
```

But then the problem occurs when I want to add a new method to `SomeService`.

```diff
 type SomeService interface {
   DoSomething() string
+  DoOtherThing()
 }

 // ...

+ func (*someServiceImpl) DoOtherThing() {
+  fmt.Println("some-service")
+ }
```

Now I have to refactor everywhere including the test files (e.g., `anotherservice_test.go`)!

## What should I have done

Ok, so what should I have done is

- producers should return a concret type
- define interface in the consumer and only define what is used.

For example,

```go
// producer.go
type SomeService struct{}

func NewSomeService() SomeService {
	return &SomeService{}
}

func (s SomeService) DoSomething() string {
	return "some-service"
}
```

And used in the client/consumer,

```go
// consumer.go
type SomethingDoer interface {
	DoSomething() string
}

func NewAnotherService(doer SomethingDoer) AnotherService {
	return &AnotherService{doer}
}
```

Now notice that even if I add a new method to `SomeService`, the consumer is not affected.

```diff
  // producer.go
  type SomeService struct{}

  func NewSomeService() SomeService {
    return &SomeService{}
  }

  func (s SomeService) DoSomething() string {
    return "some-service"
  }

+ // this change won't affect `consumer.go`
+ func (s SomeService) DoAnotherThing() {
+   fmt.Println("some-service")
+ }
```
