package com.board.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.board.back.model.Board;
import com.board.back.repository.BoardRepository;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;
    
    // 1) 출력, Repository를 호출하여 글 목록 데이터를 리턴하는 메소드
    public List<Board> getAllBoard() {
        return boardRepository.findAll();
    }
    
    // 2) 생성
    public Board createBoard (Board board) {
        return boardRepository.save(board);
    }
}
