// 1) 의존 패키지 정의
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';


// 2) App() 함수의 최상위 컴포넌트
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path="/" exact component = {ListBoardComponent}></Route>
              <Route path="/board" component = {ListBoardComponent}></Route>
              <Route path = "/create-board" component = {CreateBoardComponent}></Route> 
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

/*function App() {
  return (
    <div>
      <!-- react-rout의 적용대상의 컴포넌트들을 정의 -->
      <Router>
        <!-- 웹페이즈의 헤더 부분을 표시하는 컴포넌트를 정의 -->
        <HeaderComponent/>
          <!-- URL별 페이지 전환을 위해 최상위 컴포넌트들을 switch로 감싼다
               Route에 컴포넌트에 대응하는 URL과 컴포넌트를 정의
               헤더 및 푸터는 switch 로 감싸지 않타 페이지가 전환되도 계속 출력됨 -->
          <Switch>
            <Route path="/" exact component = {ListBoardComponent}></Route>
            <Route path="/board" component = {ListBoardComponent}></Route>
          </Switch>

          <!-- 웹페이지의 푸터부분을 표시하는 컴포넌트를 정의 -->
          <FooterComponent />
      </Router>
    </div>
  );
}*/

export default App;
