package com.ectimel.electronapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Objects;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "review", schema = "reactlibrarydatabase")
public class Review {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "user_email")
    private String userEmail;
    @Basic
    @Column(name = "date")
    private Timestamp date;
    @Basic
    @Column(name = "rating")
    private BigDecimal rating;
    @Basic
    @Column(name = "book_id")
    private Long bookId;
    @Basic
    @Column(name = "review_description")
    private String reviewDescription;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Review that = (Review) o;

        if (id != that.id) return false;
        if (!Objects.equals(userEmail, that.userEmail)) return false;
        if (!Objects.equals(date, that.date)) return false;
        if (!Objects.equals(rating, that.rating)) return false;
        if (!Objects.equals(bookId, that.bookId)) return false;
        return Objects.equals(reviewDescription, that.reviewDescription);
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (userEmail != null ? userEmail.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (rating != null ? rating.hashCode() : 0);
        result = 31 * result + (bookId != null ? bookId.hashCode() : 0);
        result = 31 * result + (reviewDescription != null ? reviewDescription.hashCode() : 0);
        return result;
    }
}
