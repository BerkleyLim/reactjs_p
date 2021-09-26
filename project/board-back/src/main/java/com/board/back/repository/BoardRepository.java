package com.board.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.board.back.model.Board;

// 1) 간단한 CRUD 기능은 JpaRepository를 상속으로 구현가능
public interface BoardRepository extends JpaRepository<Board, Integer> {

}
