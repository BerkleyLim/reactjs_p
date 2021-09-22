package board.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class BoardBackApplication {
    // SpringBoot 설정
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        SpringApplication.run(BoardBackApplication.class, args);
    }
    
    @RequestMapping("/")
    public String home() {
        return "hello world spring!";
    }
}

