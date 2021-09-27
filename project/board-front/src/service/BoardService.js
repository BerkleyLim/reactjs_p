// 1) axios 사용 정의
import axios from 'axios';

// 2) spring  boot api의 URL 정의
const BOARD_API_BASE_URL = "http://localhost:8080/api/board"


class BoardService {
    // 3) 글 목록 데이터를 가져오는 함수
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    // 4) 글 작성 함수 추가, axios의 post 함수를 통해 통신
    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    // 5) 상세보기 함수, 경로 파라미터로 글 번호를 설정하여 통신
    getOneBoard(no) {
        return axios.get(BOARD_API_BASE_URL + "/" + no);
    }
}

export default new BoardService();