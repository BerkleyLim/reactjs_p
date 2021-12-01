import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 참조 : https://reactjs-kr.firebaseapp.com/tutorial/tutorial.html#before-we-start

// class Square extends React.Component {
//   // 대화형 컴포넌트
//   constructor(props) {
//     // 서브 클래스 생성자 정의 시 super()를 명시적 호출
//     super(props);
//     this.state = {
//       value: null,
//     }
//   }

//   render() {
//     return (
//       // <button className="square" onClick={() => this.setState({value: 'X'})}>
//       <button className="square" onClick={() => this.props.onClick()}>
//         {/* {this.state.value} */}
//         {this.props.value}
//       </button>
//     );
//   }
// }

// class -> function 형으로 변환
// 생성자 필요 없고, render 메서드만 구성된 문법만 사용시(즉, 간단하게 props를 가져오고 랜더링 해야할 것을 반환만 할때)
// 오히려 react가 더 효율적으로 최적화 가능하다
function Square(props){
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

// props를 통해 데이터 전달 시작!
class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

  // handleClick(i) {
  //   const squares = this.state.squares.slice(); // slice() : squares 배열 복사, 불병성 필요 : 데이터 변경 및 원하는 내용이 포함된 객체의 새 복사본 사용
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext? 'X' : 'O';
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  renderSquare(i) {
    // prop : 파라미터를 불려온 값을 넣는다
    // return <Square value={i} />;
    // return <Square value={this.state.squares[i]} />;
    // return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />);
    return (<Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />);
  }

  render() {
    // const status = 'Next player: X';
    // const status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');

    // const winner = calculateWinner(this.state.squares);
    // let status;

    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');
    // }

    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleClick(i) {
    // const history = this.state.history;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice(); // slice() : squares 배열 복사, 불병성 필요 : 데이터 변경 및 원하는 내용이 포함된 객체의 새 복사본 사용
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext? 'X' : 'O';
    this.setState({
      history: history.concat([{squares: squares,}]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  render() {
    const history = this.state.history;
    // const current = history[history.length - 1];
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move?
        'Go to move #' + move :
        'Go to game start';
      return (
        // 배열 or 이터레이터에 있는 각 자식은 유니크 'Key' prop을 가져와야됨
        // 여기는 배열을 사용하여 키값을 불려오는 것
        // 단 React에서는 리스트의 각 요소에서 key 속성 지정하라고 요청함
        // 이유는 : 너무 단순해서 의도를 알지 못하고
        // 키값을 구분하기 위해 사용하여 
        // 다음과 같이 변경, 특히 데이터베이스의 객체와 일치 시켜야 할 경우 DB ID를 사용할것!
        // <li>
        //   <button onClick={() => this.jumpTo(move)}>{desc}</button>
        // </li>
        // 여기서 key : React에서 제공되는 특별 속성, key 속성 가져오고 반환된 엘리먼트에 직접적으로 key를 저장
        // this.props.key로 참조 불가
        // key가 삭제시 컴포넌트는 소멸
        // 컴포넌트의 키를 바꿀 시 완전히 지운 후 새롭게 생성
        // 동적으로 리스트를 빌드 시 마다 적당한 키를 할당해야함
        // 특정한 키 구분 못하면 React에서 경고 주고 배열 인덱스 키 사용
        // key={i} 사용시 경고 표시하지 않지만 문제가 많아 추천 안함
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          {/* 배열 or 이터레이터에 있는 각 자식은 유니크 key 값을 가져오지 않으면, 여기서 문제 일어남, 경고 메시지 일어나고 에러 발생 */}
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// 승자 알려주기
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
