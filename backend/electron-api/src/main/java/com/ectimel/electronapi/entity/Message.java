package com.ectimel.electronapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "messages", schema = "reactlibrarydatabase")
public class Message {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "user_email")
    private String userEmail;
    @Basic
    @Column(name = "title")
    private String title;
    @Basic
    @Column(name = "question")
    private String question;
    @Basic
    @Column(name = "admin_email")
    private String adminEmail;
    @Basic
    @Column(name = "response")
    private String response;
    @Basic
    @Column(name = "closed")
    private Byte closed;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Message that = (Message) o;

        if (id != that.id) return false;
        if (!Objects.equals(userEmail, that.userEmail)) return false;
        if (!Objects.equals(title, that.title)) return false;
        if (!Objects.equals(question, that.question)) return false;
        if (!Objects.equals(adminEmail, that.adminEmail)) return false;
        if (!Objects.equals(response, that.response)) return false;
        return Objects.equals(closed, that.closed);
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (userEmail != null ? userEmail.hashCode() : 0);
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (question != null ? question.hashCode() : 0);
        result = 31 * result + (adminEmail != null ? adminEmail.hashCode() : 0);
        result = 31 * result + (response != null ? response.hashCode() : 0);
        result = 31 * result + (closed != null ? closed.hashCode() : 0);
        return result;
    }
}
