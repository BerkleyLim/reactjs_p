import React, { Component } from 'react';
import BoardService from '../service/BoardService';

export default class CreateBoardComponent extends Component {
    constructor(props) {
        super(props);

        // this.state에 폼 양식에서 사용될 파라미터를 정의
        this.state = {
            no: this.props.match.params.no, // 글 작성에서 수정인지 구분하기 위한 파라미터로 지정
            type: '',
            title:'',
            contents:'',
            memberNo:''
        }

        // 폼 양식에 값이 입력 될 시, this.state에 정의 된 변수의 값을 변경하도록 바인드
        // 'SAVE' 버튼을 클릭시 API에 글 작성 리퀘스트를 보내는 함수를 바인드
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentsHandler = this.changeContentsHandler.bind(this);
        this.changeMemberNoHandler = this.changeMemberNoHandler.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }

    // this.setState로 this.state에 정의된 변수에 값을 대입하게 해주는 함수를 선언
    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }
    changeTitleHandler = (event) => {
        this.setState({title: event.target.value});
    }
    changeContentsHandler = (event) => {
        this.setState({contents: event.target.value});
    }
    changeMemberNoHandler = (event) => {
        this.setState({memberNo: event.target.value});
    }

    // save 버튼 클릭 시 API에 글 작성 리퀘스트를 보내는 함수를 선언
    createBoard = (event) => {
        event.preventDefault();
        let board = {
            type : this.state.type,
            title : this.state.title,
            contents : this.state.contents,
            memberNo : this.state.memberNo
        };
        console.log("board => " + JSON.stringify(board));
        
        // '_create' 경로가 있을 경우 : 여기서 게시판 생성
        if (this.state.no === '_create') {
            BoardService.createBoard(board).then (res => {
                this.props.history.push('/board');
            });
        } else { // 그렇지 않을 경우 게시판 수정
            BoardService.createBoard(this.state.no, board).then (res => {
                this.props.history.push('/board');
            });
        }
    }

    // 글 작성 취소버튼이 클릭되었을때 글목록 페이지로 이동하는 함수를 선언
    cancel() {
        this.props.history.push('/board');
    }

    // 페이지 타이틀을 글 작성 or 수정 구분하여 출력
    getTitle() {
        if (this.state.no === '_create') {
            return <h3 className="text-center"> 새 글을 작성하세요 </h3>
        } else {
            return <h3 className="text-center"> {this.state.no} 글을 수정 합니다. </h3>
        }
    }

    // 페이지 로딩 시 글 작성이면 비어있는 폼, 글 수정이면 글의 객체 값을 가져와서 바인딩
    componentDidMount() {
        if (this.state.no === '_create') {
            return
        } else {
            BoardService.getOneBoard(this.state.no).then( (res) => {
                let board = res.data;
                console.log("board => "+ JSON.stringify(board));
                
                this.setState({
                        type: board.type,
                        title: board.title,
                        contents: board.contents,
                        memberNo: board.memberNo
                    });
            });
        }
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Type </label>
                                        <select placeholder="type" name="type" className="form-control" 
                                        value={this.state.type} onChange={this.changeTypeHandler}>
                                            <option value="1">자유게시판</option>
                                            <option value="2">질문과 답변</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Title </label>
                                        <input type="text" placeholder="title" name="title" className="form-control" 
                                        value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Contents  </label>
                                        <textarea placeholder="contents" name="contents" className="form-control" 
                                        value={this.state.contents} onChange={this.changeContentsHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> MemberNo  </label>
                                        <input placeholder="memberNo" name="memberNo" className="form-control" 
                                        value={this.state.memberNo} onChange={this.changeMemberNoHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                     
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
