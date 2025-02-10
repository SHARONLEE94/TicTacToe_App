# 🎮 Tic-Tac-Toe with React

## React 기초 학습용 프로젝트
- 이 프로젝트는 React의 기초를 익히기 위해 Tic-Tac-Toe(틱택토) 게임을 구현하는 연습용 프로젝트
- 컴포넌트 기반 개발, 상태 관리, 이벤트 핸들링 등 React의 핵심 개념을 실습하며 익히는 것이 목표

## 🚀 기능
✅ 기본적인 틱택토 게임 로직 구현
✅ 플레이어(X, O) 교대 기능
✅ 승패 판별 및 게임 종료 메시지 표시
✅ React의 상태 관리(useState) 활용

## 🛠 사용 기술
🟦 React
🎨 CSS (간단한 스타일링)

## 🎯 목표
이 프로젝트를 통해 React의 기본 개념을 탄탄히 다지고, 이후 더 복잡한 프로젝트에도 적용할 수 있는 기반 마련

## 사용된 기술 및 개념

### Props
- Props는 Properties의 줄임말
- Props는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터를 전달하는 방법
- Props는 읽기 전용으로 자녀 컴포넌트 입장에서는 변하지 않는다.
- 즉, 데이터를 변경하고 싶다면 부모 컴포넌트에서 state를 변경해야 한다.

```js
// A 부모 컴포넌트
renderSquare(i) {
    return <Square value = {i}/> 
  }
// B 자식 컴포넌트
<button className='square'>
  {this.props.value}
</button>