# 🎮 Tic-Tac-Toe with React

## React 기초 학습용 프로젝트
- 이 프로젝트는 React의 기초를 익히기 위해 Tic-Tac-Toe(틱택토) 게임을 구현하는 연습용 프로젝트
- 컴포넌트 기반 개발, 상태 관리, 이벤트 핸들링 등 React의 핵심 개념을 실습하며 익히는 것이 목표

## 기능
✅ 기본적인 틱택토 게임 로직 구현
✅ 플레이어(X, O) 교대 기능
✅ 승패 판별 및 게임 종료 메시지 표시
✅ React의 상태 관리(useState) 활용

## 사용 기술
🟦 React
🎨 CSS (간단한 스타일링)

## 목표
이 프로젝트를 통해 React의 기본 개념을 탄탄히 다지고, 이후 더 복잡한 프로젝트에도 적용할 수 있는 기반 마련

## 사용된 개념

### #1. 클래스형 버전
### Props
- Props는 Properties의 줄임말
- Props는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터를 전달하는 방법
- Props는 읽기 전용으로 자녀 컴포넌트 입장에서는 변하지 않는다.
👉 즉, 데이터를 변경하고 싶다면 부모 컴포넌트에서 state를 변경해야 한다.

```js
// A 부모 컴포넌트
renderSquare(i) {
    return <Square value = {i}/> 
  }
// B 자식 컴포넌트
<button className='square'>
  {this.props.value}
</button>
``` 
### State
- 해당 컴포넌트 내부에서 데이터를 전달하기 위한 방법
- State는 변경 가능(mutable)
- State가 변하면 re-render 된다다

### Constructor
- constructor(생성자)를 사용하여 사용자 지정 초기화

### Super
- 자식 클래스 내에서 부모 클래스의 생성자 및 메소드를 호출할 때 사용
- 생성자에서는 super 키워드 하나만 사용되거나 this 키워드가 사용되기 전에 호출되어야 한다

### React에서 super에 porps를 인자로 전달하는 이유
- super(props)를 호출해야 부모 클래스 (React.Component)의 생성자가 실행되면서 this.props가 정상적으로 설정됨.
- super()만 호출하고 props를 전달하지 않으면 this.props가 undefined가 될 수 있음.
- constructor를 사용할 때는 항상 super(props)를 호출하는 것이 React의 올바른 패턴.
👉 **** 하지만 ***** React에서는 constructor를 생략하고 state를 직접 정의하는 방식이 더 많이 사용됨
```js
class MyComponent extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
```

### 리엑트 불변성을 지켜야 하는 이유
- 상태 변경을 리액트가 감지하도록 하기 위해 (렌더링 정상 작동)
- 최적화를 쉽게 하기 위해 (React.memo, useMemo 등 활용)
- Redux 같은 라이브러리와 잘 호환되도록 하기 위해
- 디버깅을 쉽게 하기 위해
👉 불변성을 지키는 가장 쉬운 방법은 spread 연산자(...), map, filter 등을 활용하는 것이다다
👉 immer 같은 라이브러리를 활용하면 더 쉽게 상태를 관리할 수도 있다