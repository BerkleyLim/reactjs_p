import React, { Component } from 'react';
import BoardService from '../service/BoardService';

export default class ReadBoardComponent extends Component {
    constructor(props) {
        super(props);

        // 글 상세보기에 사용될 파라미터 정의
        this.state = {
            no: this.props.match.params.no,
            board: {}
        }
    }

    // 페이지 로딩 시 API와 통신하여 글 객체 불려오기
    componentDidMount() {
        BoardService.getOneBoard(this.state.no).then ( res => {
            this.setState({board: res.data});
        });
    }

    // 파라미터 값의 따라 페이지에 표시할 내용 변경 (게시판 타입별로 표시를 다르게 한다)
    returnBoardType(typeNo) {
        let type = null;
        if (typeNo == 1) {
            type = "자유게시판";
        } else if (typeNo == 2) {
            type = "질문과 답변 게시판";
        } else {
            type = "타입 미지정";
        }

        return (
            <div className="row">
                <label> Board Type : </label> {type}
            </div>
        )
    }

    returnDate(cTime, uTime) {
        return (
            <div className="row">
                <label> 생성일 : [ {cTime} ] / 최종 수정일 [ {uTime} ] </label> 
            </div>
        )
    }

    // 글 목록 이동
    goToList() {
        this.props.history.props('/board');
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> Read Detail</h3>
                    <div className = "card-body">
                            {this.returnBoardType(this.state.board.type)} 
                            <div className = "row">      
                                <label> Title </label> : {this.state.board.title}
                            </div>

                            <div className = "row">
                                <label> Contents </label> : <br></br>
                                <textarea value={this.state.board.contents} readOnly/> 
                            </div >

                            <div className = "row">
                                <label> MemberNo  </label>: 
                                {this.state.board.memberNo}
                            </div>

                            {this.returnDate(this.state.board.createdTime, this.state.board.updatedTime) }
                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                    </div>
                </div>

            </div>
        )
    }
}
