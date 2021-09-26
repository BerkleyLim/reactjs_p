package com.board.back.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;


// 1) DynamicInsert : Insert시 Null인 필드를 제외하기 위해 사용
// 2) DynamicUpdate : update시 Null인 필드를 제외하기 위해 사용
@Entity
@Table(name = "board")
@DynamicInsert
@DynamicUpdate
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer no;
    
    @Column(name = "type")
    private String type;
    
    @Column(name = "title")
    private String title;
    
    @Column(name = "content")
    private String contents;
    
    @Column(name = "member_no")
    private Integer memberNo;
    
    @Column(name = "create_time")
    private Date createdTime;
    
    @Column(name = "update_time")
    private Date updatedTime;
    
    @Column(name = "likes")
    private Integer likes;
    
    @Column(name = "counts")
    private Integer counts;
    
    
    public Integer getNo() {
        return no;
    }

    public void setNo(Integer no) {
        this.no = no;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public Integer getMemberNo() {
        return memberNo;
    }

    public void setMemberNo(Integer memberNo) {
        this.memberNo = memberNo;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public Date getUpdatedTime() {
        return updatedTime;
    }

    public void setUpdatedTime(Date updatedTime) {
        this.updatedTime = updatedTime;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Integer getCounts() {
        return counts;
    }

    public void setCounts(Integer counts) {
        this.counts = counts;
    }
}
