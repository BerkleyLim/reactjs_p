import React, { Component } from 'react'
import BoardService from '../service/BoardService'

export default class ListBoardComponent extends Component {
    constructor(prop) {
        super(prop)
        // 1) 페이지 표시될 글 목록 데이터를 넣기 위한 변수 'boards'를 this.state에 선언
        this.state = {
            boards: []
        }

        // 1-1) 글 작성 버튼을 클릭 했을 때 동작하는 'createBoard' 함수를 바인드
        this.createBoard = this.createBoard.bind(this);
        this.readBoard  = this.readBoard.bind(this);
    }

    // 2) 리액트 생명주기 메소드라고 하며, componentDidMount -> BoardService의 메소드 호출해서 데이터를 가져온다.\
    // 만일 this.state에 선언한 변수의 값을 변경시 setState 사용한다
    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ boards: res.data});
        });
    }

    // 2-1) 글 작성 버튼을 클릭 시 글 작성 페이지로 이동하게 해주는 함수 정의("_create" : 파라미터 추가 -> 게시판 추가/수정 구분을 짓기 위한 것)
    createBoard() {
        this.props.history.push('/create-board/_create');
    }

    // 2-2) 글 제목 클릭 시 글 상세보기 이동하는 함수 정의
    readBoard(no) {
        this.props.history.push(`/read-board/${no}`);
    }

    // 3) render() 함수의 내용이 실제 웹페이지에 표시
    //    maps() 함수를 사용하여 boards의 데이터 출력
    // createBoard : 글 작성 버튼 기능 활성화
    render() {
        return (
            <div>
                <h2 className="text-center">Boards List</h2>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.createBoard}> 글 작성</button>
                </div>

                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                <th>작성자 </th>
                                <th>작성일 </th>
                                <th>갱신일 </th>
                                <th>좋아요수</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board => 
                                    <tr key = {board.no}>
                                        <td> {board.no} </td>
                                        <td> <a onClick = {() => this.readBoard(board.no)}>{board.title} </a></td>
                                        <td> {board.memberNo} </td>
                                        <td> {board.createdTime} </td>
                                        <td> {board.updatedTime} </td>
                                        <td> {board.likes} </td>
                                        <td> {board.counts} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

// export default ListBoardComponent;