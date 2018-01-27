---
title: 파이썬 (doc) 스타일 가이드에 대한 정리
slug: python-docstyle-guide
date: 2017-05-24
---

최근에 여러 사람들이랑 스타일가이드 얘기를 나누면서
또 이전에 여러 초고수분들에게 들으면서 배웠던게 생각나
되돌아보며 정리해볼까 해서 작성한 글이다.

**왜 스타일 가이드인가?**
스타일 가이드는 말그대로 “가이드”일 뿐이라고 하는 사람들이 있다.
맞긴 맞다. 그런데 꼭 스타일대로 작성하는게 아니더라도 어느 스타일을 선택해야 된다.

**스타일 = 일관성**이기 때문이다.

스타일이 없는 코드는 일관성이 없는 코드이며
이는 가독성이 떨어지는 코드로 이어지고 흔히 얘기하는 코드 스멜이 된다

협업을 많이 해본 사람이랑 일을 해보면
프로젝트의 코딩 스타일을 빠르게 알아내고 프로젝트에 완전히 녹아드는 코딩을 한다.
이외에도 코딩 스타일을 따르기보다 자기만의 스타일을 가지는 것이 좋다고 하는 사람도 만나봤는데.

클린코드의 보이스카웃 룰이 왜 생겼겠는가.
코드는 지금의 내가 아닌 다른 사람(미래의 나를 포함)을 위한 것이다.
자기만 알아보는 자기만의 스타일을 유지하는 코드는 굉장히 나쁘다.
완전 쓰레기로 짜놨더라도 자기는 잘 짠줄 알기 때문에 더 나쁘다. (경험자 ㅠㅠ)

* Explicit over Implicit
* Readability over Everything

> **보이스카웃 룰이란?**
> “always leave the campground cleaner than you found it.” 라는 말로 실제 보이스카웃 룰인데 코드를 checkout 할때마다 더 깨끗하게(?) 리팩토링후 commit을 하라는 얘기이다.

갑자기 클린 코드 얘기가 나왔는데

클린코드와 스타일가이드는 비슷한 점이 많다.
둘다 서로 readability를 강조하기 때문이다.

결국 readable한 코드를 위해 코드의 일관성을 유지하는 것은 굉장히 어려운 일이고 이러한 것들을 쉽게 할 수 있게 스타일 가이드나 코딩 규약이 생기게 된 것이다.

물론 중요한 것은 스타일이 아니라 그 스타일을 따르는 “일관성”이지만, 파이썬 코드는 대부분 snake_case 함수네임과 CameCase 클래스이름등을 사용하는데 이미 대부분 오픈소스들이 특별한 이유(오래된 관습의 패키지라던지 여러 언어(C++라던지 C++라던지.. 그 C++)가 동시에 사용되는 프로젝트 등)가 없는한 이러한 규칙을 따르고 있다.

그런데 본인만 갑자기 다른 CamelCase 함수 이름을 쓴다던지 하는 경우 일관성이 깨지게 되고 다른 사람의 입장에서 `from module import CamelCase` 를 봤을 경우 CamelCase가 본인을 제외하고 함수인지 클래스인지 알아보기 힘들다.

결론은 특별한 이유 없으면 스타일 가이드를 따라야 한다. 아니면 적어도 일관성을 제대로 유지하도록 한다. 자기만의 스타일을 만들어 낼 정도가 되려면 다른 사람의 스타일대로 따를 수 있어야 한다.

클린코드를 작성하는 초고수분들은 자기 스스로에 대한 엄격한 잣대를 대고 있기 때문에 그 사람들의 코드는 오히려 스타일가이드보다 더 엄격하다. 하지만 비기너일수록 더더욱 스타일가이드를 따르는 훈련을 해야 한다. 심지어 따옴표 하나 스페이스 하나 하나 확인해야 스스로에게 엄격해지는 법을 배울 수 있다.

이제 여러 파이썬 스타일 가이드에 대해서 적어본다.

우선 시작하기 앞서 월급 주는 곳의 코딩규약이 물론 가장 우선시 되어야 한다. 이걸 기억하는게 좋다… 회사를 옮길때 초고수들이 코딩 컨벤션부터 먼저 확인해보는 것을 보고 감탄한 적이 있었다.

## [**PEP8**](https://www.python.org/dev/peps/pep-0008/)

파이썬 창시자 Guido van Rossum이 작성한 파이썬 스타일 가이드이다. 모든 스타일 가이드의 베이스로 깔려있다. 일단 이건 무조건 정독해야 된다. “Readability is everything”이라는 파이썬의 철학이 담겨있기 때문이다.

PEP8의 몇가지 예시들은 다음과 같다

모듈의 이름은 only 소문자
```python
(good) import modulename
(bad) import ModuleName
(bad) import module_name
```

클래스는 CamelCase
```python
(good) class CamelCase(object):
(bad) class mixedCase(object):
(bad) class snake_case(object):
```

참고로, `class CamelCase(object)` 하고 `class CamelCase:`는 다르다. 아니 달랐다.

전자가 new style 이고 후자가 old style인데 Python3에서는 old style이 없어졌다. (써도 전자 처럼 되지만 조금 달라서 전자로 explicit한 것이 좋음)

함수의 이름은 snake_case
```python
(good) def python_function_name(arg1, arg2):
(bad) def PythonFunctionName(arg1, arg2):
(bad) def pythonFunctionName(arg1, arg2):
```

들여쓰기는 스페이스 4칸이라던지 더 많이 있지만... 더 자세한건 공홈에서 확인해 볼 수 있다.

## [**Google Python Style Guide**](https://google.github.io/styleguide/pyguide.html)

PEP8과 거의 유사하다.
구글 프로젝트 (Tensorflow) 때문에 가장 요즘 많이 접하게 된다.
PEP8과 비교해서 가장 다른 점은 “Docstring”을 작성하는 법에 대해 좀더 깊이 다루고 있다.

예를 들면,
```python
def add_two_numbers(number1, number2):
    return number1 + number2
```
라는 함수가 있으면 아래와 같이 docstring을 작성한다.
```python
def add_two_numbers(number1, number2):
    """Returns the sum of two numbers

    Args:
        number1 (int): First number to add
        number2 (int): Second number to add

    Returns:
        int: Sum of `number1` and `number2`
   """
```
구글의 Docstring style은 보자마자, 무슨 타입의 인풋을 넣어줘야 되는 지, 결과값이 어떤 타입인지 바로 알 수 있다.

코딩 코멘트의 경우 가장 좋은 코멘트는 죽은 코멘트…즉 코멘트를 작성하지 않고 Self Explanatory 한 코드를 작성하는 것이지만, Docstring은 코멘트와 달리 툴팁에 나오는 부분이기 때문에 거진 필수적으로 적어줘야 한다.

아래 예제를 보자.

```python
def discount_rewards(r, gamma=FLAGS.gamma):
    discounted_r = np.zeros_like(r)
    running_add = 0
    for t in reversed(range(0, r.size)):
        if r[t] != 0:
            running_add = 0
        running_add = running_add * gamma + r[t]
        discounted_r[t] = running_add
return discounted_r
```

많이 본 사람들은 제외하면 이게 어떤 식으로 동작하는지 여기서 r 과 gamma는 도대체 무슨 값인지 알기 어렵다.
다시 docstring과 함께 보면,

```python
def discount_rewards(rewards, gamma=FLAGS.gamma):
    """Returns discounted rewards by a rate, `gamma`

    When a reward is nonzero,
    the game has been reset ("Pong" specific)

    Args:
        rewards (1-D Array): Rewards of shape (n_samples,)
        gamma (float, optional): Discount rate

    Returns:
        1-D Array: Discounted rewards of shape (n_samples,)

    Example:
        >>> r = np.array([1, 1, 1])
        >>> discount_rewards(r, 0.99)
        np.array([1 + 0.99 + 0.99**2, 1 + 0.99, 1])
    """
    discounted_r = np.zeros_like(rewards)
    return discounted_r
```

코드를 보지 않아도 Example 과 Docstring 으로
충분히 다음과 같은 정보를 알 수 있다.

무슨 일을 하는 함수인가?

* `discounted rewards`를 구하는 함수

인풋은 무엇을 받는가?

* `(?,) shape`의 `np.ndarray`
* `float` type의 `gamma`

결과값은 무엇인가?

* `(?,) shape` 의 `np.ndarray` 인 것을 알 수 있다.

이 외에도 스타일을 따르면 좋은 점은 텐서플로우 공식홈페이지 같은 api guide 문서도 doxygen이나 스핑크스 등을 통해 저절로 만들어진다. api 가이드 문서 작업 일을 미리 한다고 생각하면 된다.

아래 두개의 docstring을 어떻게 작성해야 되는지 여기서 다 언급할 수는 없지만 알아두는 것이 좋다.

* 함수의 Docstring
* Class의 Docstring

자주 쓰인다.

## [**Numpy/Scipy Style Guide**](https://github.com/numpy/numpy/blob/master/doc/HOWTO_DOCUMENT.rst.txt)

PEP8을 베이스로 한다
구글과 마찬가지로 Docstring만 거의 다르다

```python
def discount_rewards(rewards, gamma=FLAGS.gamma):
    """Returns discounted rewards by a rate, `gamma`

    When a reward is nonzero,
    the game has been reset ("Pong" specific)

    Parameters
    ----------
    rewards : 1-D Array
        Rewards np.ndarray of shape (n_samples,)
    gamma : float, optional
        Discount rate. Usually it should be handled
        by `FLAGS.gamma` (default: 0.99)

    Returns
    -------
    dicounted_r : 1-D Array
        Discounted rewards of shape (n_samples,)

    Example
    -------
    >>> r = np.array([1, 1, 1])
    >>> discount_rewards(r, 0.99)
    np.array([1 + 0.99 + 0.99**2, 1 + 0.99, 1])
    """
    discounted_r = np.zeros_like(rewards)
    return discounted_r
```

Numpy 좀 쓰셨다 싶으신 분들은 많이 눈에 익을 것이다.

매우 가독성에 초점을 맞춘 Docstring이고 덕분에 Numpy가 이렇게 널리 퍼질 수 있는 이유 중에 하나라고 생각한다. Numpy가 쉬운게 아니라 Docstring이 정말 잘 되있다.

원래 가장 선호했던 스타일이기도 하다. 스핑크스랑도 잘 붙기 때문에…
많은 Science Library들이 Numpy의 영향을 많이 받았기 때문에 Science Library에서 가장 많이 사용되는 스타일이다.

여기 나온 것 뿐만 아니라 lint에 대해서도 알면 좋지만 글이 길어져 이만 줄인다.
짧게 쓰면 아래 세개는 다 사용할 줄 알아야 한다.

* pylint
* autopep8
* autoflake
